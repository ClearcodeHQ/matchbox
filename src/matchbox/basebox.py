# Copyright (C) 2015 by Clearcode <http://clearcode.cc>
# and associates (see AUTHORS).

# This file is part of mirakuru.

# mirakuru is free software: you can redistribute it and/or modify
# it under the terms of the GNU Lesser General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# mirakuru is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Lesser General Public License for more details.

# You should have received a copy of the GNU Lesser General Public License
# along with mirakuru.  If not, see <http://www.gnu.org/licenses/>.
"""Basic implementation of BaseBox object."""
from collections import defaultdict


class BaseBox(object):

    """BaseBox is base class for constructing Box encapsulating code."""

    def __init__(self, attribute):
        """
        Initialise box and set attribute this box will be indexing objects on.

        :param str attribute: Value identifying both Target attribute name to
            construct index on, and the index itself.
        """
        self.attribute = attribute
        """Attribute to index objects's on."""
        self.exclude_unknown = set()
        """
        This set will keep collection of objects that are excluding unknown
            values, those that do not match any one of the known values.

        Used for BaseBox.index default value. That means for any index_value
        not defined on advert in index.
        """
        self.index = defaultdict(self.exclude_unknown.copy)

    def add(self, target):
        """
        Add advert to index.

        :param doublevision.targeting.targeting.Target target:
        """
        raise NotImplementedError

    def excluding(self, value):
        """
        Matching algorithm.

        :param str value: set of Target instances.
        ;returns: set of targets that doesn't fit value
        :rtype: set
        """
        raise NotImplementedError

    @property
    def is_used(self):
        """Check if any of the object added to index is used by box."""
        raise NotImplementedError
