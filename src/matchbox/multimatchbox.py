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

"""Multi value MatchBox idea implementation."""

from matchbox.matchbox import MatchBox


class MultiMatchBox(MatchBox):

    """
    MatchBox implementation for multi value characteristics.

    Example:

    +--------+-------+-------------------------+
    | Object | Match | Characteristic's values |
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

    +-----------+-----------------+
    | Attribute | Matched Objects |
    +===========+=================+
    | 1         | Ob1, Ob2        |
    +-----------+-----------------+
    | 2         | Ob1, Ob2, Ob5   |
    +-----------+-----------------+
    | 3         | Ob5             |
    +-----------+-----------------+
    | 4         | Ob5             |
    +-----------+-----------------+
    | 5         | Ob2, Ob3, Ob5   |
    +-----------+-----------------+
    | 6         | Ob2, Ob3, Ob5   |
    +-----------+-----------------+
    | 7         |                 |
    +-----------+-----------------+
    | Any other | Ob2, Ob5        |
    +-----------+-----------------+
    """

    def add(self, indexed_object):
        """
        Add object to index.

        :param object indexed_object: single object to add to box's index
        """
        characteristic_values = getattr(indexed_object, self._characteristic)
        if characteristic_values is None:
            return

        is_matching = getattr(indexed_object, self._characteristic + '_match', True)

        # if object is not matching given characteristic values, we should add it directly to index.
        if not is_matching:
            for characteristic_value in characteristic_values:
                self.index[characteristic_value].add(indexed_object)
        else:
            # If object is matching these values, access key to trigger copy of excluded.
            # Since now the values becomes known.
            for characteristic_value in characteristic_values:
                # we could copy exclude_unknown manually to be more explicit,
                # but that would require also to check if given key does not already exists, as to not overwrite it.
                self.index[characteristic_value]

            # we add object to each value in index that's not it's characteristic's values
            for existing_value in self.index.keys():
                if existing_value not in characteristic_values:
                    self.index[existing_value].add(indexed_object)

            # and make sure for every new value it'll be excluded as well
            self.exclude_unknown.add(indexed_object)
