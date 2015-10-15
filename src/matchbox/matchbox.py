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


CharacteristicValue = namedtuple('CharacteristicValue', 'values, is_matching')


class MatchBox(object):
    """
    MatchBox for classifying objects by single-value characteristic.

    Example:

    +--------+-------+-------------------------+
    | Object | Match | Characteristic's values |
    +========+=======+=========================+
    | Ob1    | False | 1                       |
    +--------+-------+-------------------------+
    | Ob2    | True  | 3                       |
    +--------+-------+-------------------------+
    | Ob3    | False | 5                       |
    +--------+-------+-------------------------+
    | Ob4    | False |                         |
    +--------+-------+-------------------------+
    | Ob5    | True  | 1                       |
    +--------+-------+-------------------------+

    Will result in matchbox'es index:

    +-----------+-----------------+
    | Attribute | Matched Objects |
    +===========+=================+
    | 1         | Ob1, Ob2        |
    +-----------+-----------------+
    | 3         | Ob5             |
    +-----------+-----------------+
    | 5         | Ob2, Ob3, Ob5   |
    +-----------+-----------------+
    | Any new   | Ob2, Ob5        |
    +-----------+-----------------+
    """

    def __init__(self, characteristic):
        """
        Initialise box and set attribute this box will be indexing objects on.

        Indexed objects are expected to have attribute of the same name as
        `characteristic` that contains value by which object is classified.
        Optionally objects should have second attribute that will state that
        the object is classified by the value **OR** that he object is not
        classified by the value called **{characteristic}_match**.

        .. note::

            Whole matchbox'es idea follows the idea that while you can't say
            that given object is not described by anything.

            You can say that object's characteristic is, or is not described by
            a subset of all values possible, you can't say the object is not
            described by all of them. The third possibility is that it's
            described by all of them - otherwise the logic dictates that the
            object will not ever match, hence it shouldn't even make it to the
            collection.

        :param str characteristic: Value identifying both indexed object
            attribute name matchbox is indexing on, and the index value itself.
        """
        self._characteristic = characteristic
        """Attribute to index objects's on."""
        self.exclude_unknown = set()
        """
        This set will keep collection of objects that are not matching unknown
            characteristic values.

        Used for MatchBox.index default value. That means for any index_value
        not defined on advert in index.
        """
        self.index = defaultdict(self.exclude_unknown.copy)

    def extract_characteristic_value(self, indexed_object):
        """
        Extract data required to classify indexed_object.

        :param object indexed_object:
        :return: namedtuple consisting of characteristic values and match flag
        :rtype: CharacteristicValue
        """
        values = getattr(indexed_object, self._characteristic)
        if values and isinstance(values, Hashable):
            values = [values]
        return CharacteristicValue(
            values,
            getattr(indexed_object, self._characteristic + '_match', True)
        )

    def add(self, indexed_object):
        """
        Add object to index.

        :param object indexed_object: single object to add to box's index
        """
        characteristic = self.extract_characteristic_value(indexed_object)
        if not characteristic.values:
            return

        # if object is not matching given characteristic values, we should add it directly to index.
        if not characteristic.is_matching:
            for value in characteristic.values:
                self.index[value].add(indexed_object)
        else:
            # If object is matching these values, access key to trigger copy of excluded.
            # Since now the values becomes known.
            for value in characteristic.values:
                # we could copy exclude_unknown manually to be more explicit,
                # but that would require also to check if given key does not already exists, as to not overwrite it.
                self.index[value]

            # we add object to each value in index that's not it's characteristic's values
            for existing_value in self.index.keys():
                if existing_value not in characteristic.values:
                    self.index[existing_value].add(indexed_object)

            # and make sure for every new value it'll be excluded as well
            self.exclude_unknown.add(indexed_object)

    def not_matching(self, value):
        """
        *Matching* algorithm for the Box type.

        This method should actually return the set of object's that are not
        matching given value, which will allow then to cut them off of current
        sub-collection filtered by possibly other boxes by simple set
        operations.

        :param str value: value of characteristic this box is indexing on.
        :returns: set of objects that doesn't match characteristic value
        :rtype: set
        """
        return self.index[value]

    def match(self, collection, value):
        """
        Cut off those object from collection, that does not match the value.

        .. note::

            Collection has to be set of objects that has already been added to index.

        :param set collection: a set of objects that should be checked against value.
        :param value: any hashable object that describes characteristic defined for this box.
        :return: set of matching objects.
        :rtype: set

        """
        return collection - self.not_matching(value)

    def __bool__(self):
        """Check if box is being actually used or not."""
        return bool(self.exclude_unknown or any(self.index.values()))

    def __nonzero__(self):
        """Python 2 equivalent of python 3's __bool__."""
        return self.__bool__()
