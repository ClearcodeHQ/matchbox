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

from matchbox.basebox import BaseBox


class MatchBox(BaseBox):

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

    def add(self, indexed_object):
        """
        Add object to index.

        :param object indexed_object: single object to add to box's index
        """
        characteristic_value = getattr(indexed_object, self._characteristic)
        if characteristic_value is None:
            return

        is_matching = getattr(indexed_object, self._characteristic + '_match', True)

        # if object is not matching given characteristic, we should add it directly to index.
        if not is_matching:
            self.index[characteristic_value].add(indexed_object)
        else:
            # access key to trigger copy of excluded.
            # Since now the value becomes known.
            self.index[characteristic_value]
            # we add object to each value in index that's not it's characteristic's value
            for existing_value in self.index:
                if existing_value == characteristic_value:
                    continue
                self.index[existing_value].add(indexed_object)
            # and make sure for every new value it'll be excluded as well
            self.exclude_unknown.add(indexed_object)
