# -*- coding: utf-8 -*-
"""matchbox's tests."""


class Entity:  # pylint:disable=too-few-public-methods
    """Dummy entity to be indexed."""

    def __init__(self, trait, matches=True):
        """
        Initialize Dummy entity.

        :param trait: characteristic trait.
        :param bool matches: whether it matches or not.
        """
        self.characteristic = trait
        self.characteristic_match = matches
