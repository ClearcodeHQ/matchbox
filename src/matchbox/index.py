# Copyright (C) 2015 by Clearcode <http://clearcode.cc>
# and associates (see AUTHORS).

# This file is part of matchbox.

# matchbox is free software: you can redistribute it and/or modify
# it under the terms of the GNU Lesser General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# matchbox is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Lesser General Public License for more details.

# You should have received a copy of the GNU Lesser General Public License
# along with matchbox.  If not, see <http://www.gnu.org/licenses/>.
"""Data structure that allows indexing includes and excludes of values."""
from collections import defaultdict
from typing import Set, Hashable, Dict, Iterable, TypeVar, Generic

ET = TypeVar('ET', bound=Hashable)
TT = TypeVar('TT', bound=Hashable)


class MatchIndex(Generic[TT, ET]):
    """
    An index for matching or mismatching of entities by hashable traits.

    It can answer one question - 'given a trait, what entities are excluded by it?'.
    It can be used to filter a set of potential matches - not for general querying ('given a trait
    return all mathing entities').
    When used as a filter, all entities in the input set must also be indexed by the MatchIndex to be fully filtered.

    .. note ::
        We can index entities by including or excluding them for given traits.
        Matching an object for some characteristic traits means that this object will match those values and it will NOT
        match any other traits.
        Mismatching an object for some traits means that this object will NOT match those traits and will match
        any other trait.
        It makes no sense for an entity to both match and mismatch the same characteristic.

    Data layout:
    We store:
        - a dict that maps traits to a set of mismatches
        - a set of entities indexed as matches.
    We don't store matching entities in any dict - instead if an entity is matched by a trait, it simply doesn't
    belong to the set of mismatches for this trait.

    Querying:
    When asked for entities to be filtered out by this index, we are given a value of the same kind as our index
    traits. This value can be:
        - already indexed - we return the set of elements not matching it. The set contains entities to be rejected.
        - previously unknown - we return the set of all objects that were indexed as 'matching'.
          This is OK because:
          - Mismatched entities can be filtered out only by the traits they are indexed with so mismatches will be
            rejected by an unknown value.
          - Matched entities should be rejected for everything else than traits they are indexed with.


    .. note ::
        Due to relying heavily on dictionaries and sets, MatchIndex indexes only hashable entities by one or more
        hashable traits.

    Example of indexing entities each by trait:

    +--------+-----------+--------+
    | Entity | Match     | Traits |
    +========+===========+========+
    | Ob1    | Excluding | 1      |
    +--------+-----------+--------+
    | Ob2    | Including | 3      |
    +--------+-----------+--------+
    | Ob3    | Excluding | 5      |
    +--------+-----------+--------+
    | Ob4    | Excluding |        |
    +--------+-----------+--------+
    | Ob5    | Including | 1      |
    +--------+-----------+--------+

    Will result in an index:

    +---------+---------------------+
    | Trait   | Mismatched entities |
    +=========+=====================+
    | 1       | Ob1, Ob2            |
    +---------+---------------------+
    | 3       | Ob5                 |
    +---------+---------------------+
    | 5       | Ob2, Ob3, Ob5       |
    +---------+---------------------+
    | Any new | Ob2, Ob5            |
    +---------+---------------------+


    Example of indexing entities each by multiple traits:

    +--------+-----------+----------+
    | Entity | Match     | Traits   |
    +========+===========+==========+
    | Ob1    | Excluding | 1, 2     |
    +--------+-----------+----------+
    | Ob2    | Including | 3, 4, 7  |
    +--------+-----------+----------+
    | Ob3    | Excluding | 5, 6     |
    +--------+-----------+----------+
    | Ob4    | Excluding |          |
    +--------+-----------+----------+
    | Ob5    | Including | 1, 7     |
    +--------+-----------+----------+

    Should result in this index:

    +-----------+---------------------+
    | Trait     | Mismatched entities |
    +===========+=====================+
    | 1         | Ob1, Ob2            |
    +-----------+---------------------+
    | 2         | Ob1, Ob2, Ob5       |
    +-----------+---------------------+
    | 3         | Ob5                 |
    +-----------+---------------------+
    | 4         | Ob5                 |
    +-----------+---------------------+
    | 5         | Ob2, Ob3, Ob5       |
    +-----------+---------------------+
    | 6         | Ob2, Ob3, Ob5       |
    +-----------+---------------------+
    | 7         |                     |
    +-----------+---------------------+
    | Any other | Ob2, Ob5            |
    +-----------+---------------------+
    """

    def __init__(self) -> None:
        """Initialize the index."""
        self.mismatch_unknown: Set[ET] = set()
        """
        This set will keep matching entities. They do not match unknown traits.

        Used for `self.index` default value, that means any previously unknown trait.
        """
        self.index: Dict[TT, Set[ET]] = defaultdict(self.mismatch_unknown.copy)

    def add_mismatch(self, entity: ET, *traits: TT) -> None:
        """
        Add a mismatching entity to the index.

        We do this by simply adding the mismatch to the index.

        :param collections.Hashable entity: an object to be mismatching the values of `traits_indexed_by`
        :param list traits: a list of hashable traits to index the entity with
        """
        for trait in traits:
            self.index[trait].add(entity)

    def add_match(self, entity: ET, *traits: TT) -> None:
        """
        Add a matching entity to the index.

        We have to maintain the constraints of the data layout:
            - `self.mismatch_unknown` must still contain all matched entities
            - each key of the index must mismatch all known matching entities except those this particular key
              explicitly includes

        For data layout description, see the class-level docstring.

        :param collections.Hashable entity: an object to be matching the values of `traits_indexed_by`
        :param list traits: a list of hashable values to index the object with
        """
        # The index traits of `traits_indexed_by` might have already been used to index some other entities. Those
        # relations are to be preserved. If the trait was not used to index any entity, we initialize them to mismatch
        # all matching entities known so far.
        for trait in traits:
            if trait not in self.index:
                self.index[trait] = self.mismatch_unknown.copy()

        # Now each known trait this entity is not matching, will explicitly mismatch currently added entity.
        for existing_trait in self.index:
            if existing_trait not in traits:
                self.index[existing_trait].add(entity)

        # From now on, any new matching or mismatching index will mismatch this entity by default.
        self.mismatch_unknown.add(entity)

    def mismatch(self, trait: TT) -> Set[ET]:
        """
        Return a set of indexed entities that are mismatched by the trait.

        The returned set can be used for filtering by substracting it from another set created by a previous MatchIndex
        or other set operations.

        :param trait: any hashable object that can be considered as characteristic trait for this MatchBox.
        :returns: set of entities that doesn't match characteristic trait
        :rtype: set
        """
        return self.index[trait]

    def match(self, collection: Set[ET], trait: TT) -> Set[ET]:
        """
        Filter out those entities from collection that do not match the trait.

        .. note ::

            `collection` should be a set of objects that have already been added to the index.
            But if the objects in the collection hadn't had given characteristics defined,
            they wouldn't be indexed, and won't get rejected either.

        :param set collection: a set of entities that should be filtered by this index.
        :param collections.Hashable trait: a value of the same kind as the traits that entities in
            this index are indexed with
        :return: set of matching entities.
        :rtype: set
        """
        return collection - self.mismatch(trait)

    def __bool__(self) -> bool:
        """Check if the index is being actually used or not."""
        return bool(self.mismatch_unknown or any(self.index.values()))
