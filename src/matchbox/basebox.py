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
"""Basic implementation of BaseBox object."""
from collections import defaultdict


class BaseBox(object):

    """BaseBox is base class for constructing Box encapsulating code."""

    def __init__(self, characteristic):
        """
        Initialise box and set attribute this box will be indexing objects on.

        Indexed objects are expected to have attribute of the same name as
        `characteristic` that contains value by which object is classified.
        Optionally objects should have second attribute that will state that
        the object is classified by the value **OR** that he object is not
        classified by the value called **{characteristic}_match**.

        ... note::

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

        Used for BaseBox.index default value. That means for any index_value
        not defined on advert in index.
        """
        self.index = defaultdict(self.exclude_unknown.copy)

    def add(self, indexed_object):
        """
        Add object to index.

        :param object indexed_object: single object to add to box's index
        """
        raise NotImplementedError

    def not_matching(self, value):
        """
        *Matching* algorithm for the Box type.

        This method should actually return the set of object's that are not
        matching given value, which will allow then to cut them off of current
        sub-collection filtered by possibly other boxes by simple set
        operations.

        :param str value: value of characteristic this box is indexing on.
        ;returns: set of objects that doesn't match characteristic value
        :rtype: set
        """
        raise NotImplementedError

    @property
    def is_used(self):
        """Check if any of the object added to index is used by box."""
        raise NotImplementedError
