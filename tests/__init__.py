# -*- coding: utf-8 -*-
"""matchbox's tests."""
from typing import Generic, List, Optional, Union

from matchbox.index import TT


class Entity(Generic[TT]):  # pylint:disable=too-few-public-methods
    """Dummy entity to be indexed."""

    def __init__(self, trait: Optional[Union[List[TT], TT]], matches: bool = True):
        """Initialize Dummy entity.

        :param trait: characteristic trait.
        :param bool matches: whether it matches or not.
        """
        self.characteristic = trait
        self.characteristic_match = matches
