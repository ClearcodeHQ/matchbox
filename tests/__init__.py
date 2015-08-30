# -*- coding: utf-8 -*-
"""matchbox's tests."""


class IndexedObject(object):

    """Dummy object to be indexed."""

    def __init__(self, value, matches=True):
        """
        Dummy object's initializing method.

        :param str value: value for a characteristic.
        :param bool matches: whether it matches or not.
        """
        self.characteristic = value
        self.characteristic_match = matches
