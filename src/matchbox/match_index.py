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


class MatchIndex(object):
    """
    An index for matching or mismatching of entities by hashable traits.

    It can answer one question - 'given a trait, what entities are excluded by it?'.
    It can be used to filter a set of potential matches - not for general querying ('given a trait
    return all mathing entities').
    When used as a filter, all entities in the input set must also be indexed by the MatchIndex to be fully filtered.

    .. note ::
        We can index entities by including or excluding them for given values.
        matching an object for some values means that this object will match those values and it will NOT
        match any other values.
        Mismatching an object for some values means that this object will NOT match those values and will match
        any other value.
        It makes no sense to both include and exclude the same object.

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

    def __init__(self):
        """Initialize the index."""
        self.mismatch_unknown = set()
        """
        This set will keep included matching entities. They do not match unknown values.

        Used for `self.index` default value, that means any previously unknown index value.
        """
        self.index = defaultdict(self.mismatch_unknown.copy)

    def add_mismatch(self, indexed_entity, *traits_indexed_by):
        """
        Add a mismatching entity to the index.

        We do this by simply adding the mismatch to the index.

        :param collections.Hashable indexed_entity: an object to be mismatching the values of `traits_indexed_by`
        :param list traits_indexed_by: a list of hashable values to index the object with
        """
        # If object is not matching given characteristic values, we should add it directly to the index.
        for trait in traits_indexed_by:
            self.index[trait].add(indexed_entity)

    def add_match(self, indexed_entity, *traits_indexed_by):
        """
        Add a matching entity to the index.

        We have to maintain the constraints of the data layout:
            - `self.mismatch_unknown` must still contain all matched entities
            - each key of the index must mismatch all known matching entities except those this particular key
              explicitly includes

        For data layout description, see the class-level docstring.

        :param collections.Hashable indexed_entity: an object to be matching the values of `traits_indexed_by`
        :param list traits_indexed_by: a list of hashable values to index the object with
        """
        # The index traits of `traits_indexed_by` might have already been used to index some other rntities. Those
        # relations are to be preserved. If the trait was not used to index any entity, we initialize them to mismatch
        # all matching entities known so far.
        for trait in traits_indexed_by:
            self.index.setdefault(trait, self.mismatch_unknown.copy())

        # Now we make all known traits, except for those we use to index this `indexed_entity`, mismatch the entity.
        # We have to do this because the traits are to become known as they are used in the index.
        for existing_trait in self.index.keys():
            if existing_trait not in traits_indexed_by:
                self.index[existing_trait].add(indexed_entity)

        # From now on, any new matching or mismatching index will mismatch this entity by default.
        self.mismatch_unknown.add(indexed_entity)

    def mismatch(self, trait):
        """
        Return a set of indexed entities that are mismatched by the `value`.

        The returned set can used for filtering by substracting it from another set created by a previous MatchIndex
        or other set operations.

        :param collections.Hashable trait: a value of the same kind as the values that objects in this index are
            indexed with
        :returns: a set of objects that don't match the `value`
        :rtype: set
        """
        return self.index[trait]

    def match(self, collection, trait):
        """
        Cut off those entities from collection that do not match the trait.

        .. note ::
            `collection` has to be a set of objects that have already been added to the index.

        :param set collection: a set of objects that should be filtered by this index
        :param collections.Hashable trait: a value of the same kind as the values that objects in this index are
            indexed with
        :return: set of matching objects
        :rtype: set
        """
        return collection - self.mismatch(trait)

    def __bool__(self):
        """Check if the index is being actually used or not."""
        return bool(self.mismatch_unknown or any(self.index.values()))

    def __nonzero__(self):
        """Python 2 equivalent of python 3's __bool__."""
        return self.__bool__()
