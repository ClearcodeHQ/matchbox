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
"""Match box - for indexing objects by their fields."""

from __future__ import absolute_import
from collections import namedtuple, Hashable

from matchbox.match_index import MatchIndex


Trait = namedtuple('Trait', 'traits, is_matching')


class MatchBox(MatchIndex):
    """MatchBox is a MatchIndex that can index objects by their fields."""

    def __init__(self, characteristic, *args, **kwargs):
        """
        Initialise the box and set the attribute this box will be indexing objects on.

        Indexed entities are expected to have an attribute of the same name as
        `characteristic` that contains a trait by which entity is classified.
        Optionally entities may have a second attribute stating whether
        the object should be classified to match this trait or the object should be
        classified to mismatch the trait. This atribute, for each characteristic, is called
        **{characteristic}_match**.

        .. note::

            Each indexed entity has to have at least one characteristic.

            You can say that entity's characteristic is, or is not described by
            a subset of all traits possible, you can't say the object is not
            described by all of them. The third possibility is that it's
            described by all of them - otherwise the logic dictates that the
            object will not ever match, hence it shouldn't even make it to the
            collection.

        :param str characteristic: value identifying the attribute MatchBox will index entites with.
            Optionally the objects may have a '{characteristic}_match' boolean attribute to determine whether the
            object should be indexed as an match or mismatch
        """
        super(MatchBox, self).__init__(*args, **kwargs)
        self._characteristic = characteristic

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

        if characteristic.is_matching:
            self.add_match(entity, *characteristic.traits)
        else:
            self.add_mismatch(entity, *characteristic.traits)

    def __repr__(self):
        """Box representation."""
        return '<MatchBox({0})>'.format(self._characteristic)
