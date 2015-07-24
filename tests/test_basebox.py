"""Tests for BaseBox."""
from collections import defaultdict

from matchbox.basebox import BaseBox


def test_basebox_init():
    """Check if the Box get's initialised correctly."""
    box = BaseBox('argument')
    assert not box.exclude_unknown, "exclude_unknown property should be empty."
    assert not box.index, "index should also be empty"
    assert (
        isinstance(box.index, defaultdict),
        "Having index as defaultdict is critical for algorithm."
    )


def test_basebox_default_index_value():
    """Check if the correct default are used for box.index property."""
    box = BaseBox('argument')
    some_object = "I'm an object."
    box.exclude_unknown.add(some_object)
    assert some_object in box.index['unknown']


def test_basebox_unknown_becoms_known():
    """Check if objects to exclude_unknown are only added to future unknown."""
    box = BaseBox('argument')
    # make one value known
    box.index['known']
    some_object = "I'm an object, I only know what I know."
    second_object = "I'm rejecting what We don't already know."
    box.exclude_unknown.add(some_object)
    box.exclude_unknown.add(second_object)
    assert second_object in box.index['unknown']
    assert some_object in box.index['unknown']
    assert second_object not in box.index['known']
    assert some_object not in box.index['known']
