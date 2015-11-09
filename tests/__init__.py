# -*- coding: utf-8 -*-
"""matchbox's tests."""


class Entity(object):
    """Dummy entity to be indexed."""

    def __init__(self, trait, matches=True):
        """
        Dummy entity's initializing method.

        :param trait: characteristic trait.
        :param bool matches: whether it matches or not.
        """
        self.characteristic = trait
        self.characteristic_match = matches
