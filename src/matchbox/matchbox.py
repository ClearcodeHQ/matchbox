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
"""Single value MatchBox idea implementation."""

from __future__ import absolute_import
from collections import defaultdict, namedtuple, Hashable


Trait = namedtuple('Trait', 'traits, is_matching')


class MatchBox(object):
    """
    MatchBox for classifying objects by given characteristic's traits.

    Due to rellying heavily on dictionaries and sets,
    MatchBox indexes only hashable entities by traits which are hashable - single hashable trait
    or collection of those.

    Example for single-trait (hashable):

    +--------+-------+------------------------+
    | Entity | Match | Characteristic's trait |
    +========+=======+========================+
    | Ob1    | False | 1                      |
    +--------+-------+------------------------+
    | Ob2    | True  | 3                      |
    +--------+-------+------------------------+
    | Ob3    | False | 5                      |
    +--------+-------+------------------------+
    | Ob4    | False |                        |
    +--------+-------+------------------------+
    | Ob5    | True  | 1                      |
    +--------+-------+------------------------+

    Will result in matchbox'es index:

    +-----------+------------------+
    | Attribute | Matched Entities |
    +===========+==================+
    | 1         | Ob1, Ob2         |
    +-----------+------------------+
    | 3         | Ob5              |
    +-----------+------------------+
    | 5         | Ob2, Ob3, Ob5    |
    +-----------+------------------+
    | Any new   | Ob2, Ob5         |
    +-----------+------------------+


    Example for multi-trait characteristic:

    +--------+-------+-------------------------+
    | Entity | Match | Characteristic's traits |
    +========+=======+=========================+
    | Ob1    | False | 1, 2                    |
    +--------+-------+-------------------------+
    | Ob2    | True  | 3, 4, 7                 |
    +--------+-------+-------------------------+
    | Ob3    | False | 5, 6                    |
    +--------+-------+-------------------------+
    | Ob4    | False |                         |
    +--------+-------+-------------------------+
    | Ob5    | True  | 1, 7                    |
    +--------+-------+-------------------------+

    Should result in this index:

    +-----------+------------------+
    | Attribute | Matched Entities |
    +===========+==================+
    | 1         | Ob1, Ob2         |
    +-----------+------------------+
    | 2         | Ob1, Ob2, Ob5    |
    +-----------+------------------+
    | 3         | Ob5              |
    +-----------+------------------+
    | 4         | Ob5              |
    +-----------+------------------+
    | 5         | Ob2, Ob3, Ob5    |
    +-----------+------------------+
    | 6         | Ob2, Ob3, Ob5    |
    +-----------+------------------+
    | 7         |                  |
    +-----------+------------------+
    | Any other | Ob2, Ob5         |
    +-----------+------------------+

    """

    def __init__(self, characteristic):
        """
        Initialise box and set attribute this box will be indexing objects on.

        Indexed entities are expected to have attribute of the same name as
        `characteristic` that contains traits by which object is classified.
        Optionally entity should have second attribute that will state that
        the object is classified by the trait **OR** that he object is not
        classified by the trait called **{characteristic}_match**.

        .. note::

            You can say that entity's characteristic is, or is not described by
            a subset of all traits possible, you can't say the object is not
            described by all of them. The third possibility is that it's
            described by all of them - otherwise the logic dictates that the
            object will not ever match, hence it shouldn't even make it to the
            collection.

        :param str characteristic: Characteristic name MatchBox will index entites on.
        """
        self._characteristic = characteristic
        """Characteristic name to index entites on."""
        self.mismatch_unknown = set()
        """
        This set will keep collection of entities that are not matching unknown
            characteristic traits.

        Used for MatchBox.index default value. That means for any trait
        not defined on entity in index.
        """
        self.index = defaultdict(self.mismatch_unknown.copy)

    def extract_traits(self, entity):
        """
        Extract data required to classify entity.

        :param object entity:
        :return: namedtuple consisting of characteristic traits and match flag
        :rtype: matchbox.matchbox.Trait
        """
        traits = getattr(entity, self._characteristic)
        if traits is not None and isinstance(traits, Hashable):
            traits = [traits]
        return Trait(
            traits,
            getattr(entity, self._characteristic + '_match', True)
        )

    def add(self, entity):
        """
        Add entity to index.

        :param object entity: single object to add to box's index
        """
        characteristic = self.extract_traits(entity)
        if not characteristic.traits:
            return

        # if entity is not matching given characteristic traits, we should add it directly to index.
        if not characteristic.is_matching:
            for trait in characteristic.traits:
                self.index[trait].add(entity)
        else:
            # If entity is matching these traits, access key to trigger copy of mismatched.
            # Since now the traits becomes known.
            for trait in characteristic.traits:
                # we could copy mismatch_unknown manually to be more explicit,
                # but that would require also to check if given key does not already exists, as to not overwrite it.
                self.index[trait]

            # we add object to each trait in index that's not it's characteristic's traits
            for existing_trait in self.index.keys():
                if existing_trait not in characteristic.traits:
                    self.index[existing_trait].add(entity)

            # and make sure for every new trait it'll be mismatched as well
            self.mismatch_unknown.add(entity)

    def mismatch(self, trait):
        """
        *Matching* algorithm for the Box type.

        This method returns the set of entities that are not matching given trait,
        which will allow then to cut them off of current (sub)set of entities
        possibly filtered by other boxes.

        :param trait: any hashable object that can be considered as characteristic trait for this MatchBox.
        :returns: set of entities that doesn't match characteristic trait
        :rtype: set
        """
        return self.index[trait]

    def match(self, collection, trait):
        """
        Cut off those entities from collection, that does not match the trait.

        .. note::

            Collection has to be a set of entities that has already been added to index.

        :param set collection: a set of entities that should be checked against trait.
        :param trait: any hashable object that can be considered as characteristic trait for this MatchBox.
        :return: set of matching entities.
        :rtype: set

        """
        return collection - self.mismatch(trait)

    def __repr__(self):
        """Box representation."""
        return '<MatchBox({0})>'.format(self._characteristic)

    def __bool__(self):
        """Check if box is being actually used or not."""
        return bool(self.mismatch_unknown or any(self.index.values()))

    def __nonzero__(self):
        """Python 2 equivalent of python 3's __bool__."""
        return self.__bool__()
