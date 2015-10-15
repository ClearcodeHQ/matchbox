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
from __future__ import absolute_import

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
