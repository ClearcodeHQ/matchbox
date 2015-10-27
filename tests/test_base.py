"""Tests for basic functionality of MatchBox and basic data structure."""
from collections import defaultdict

import pytest

from matchbox import MatchBox
from tests import IndexedObject


def test_init():
    """Check if the Box get's initialised correctly."""
    box = MatchBox('argument')
    assert not box.mismatch_unknown, "mismatch_unknown property should be empty."
    assert not box.index, "index should also be empty"
    assert (
        isinstance(box.index, defaultdict),
        "Having index as defaultdict is critical for algorithm."
    )


def test_empty():
    """Check if freshly initialised box appears as empty."""
    box = MatchBox('argument')
    assert bool(box) is False, "Freshly initialised box should be empty"


def test_not_empty_index():
    """Check if element in index makes the box to appear not empty."""
    box = MatchBox('argument')
    box.index['known'].add('element')
    assert bool(box) is True


def test_not_empty_mismatch_unknown():
    """Check if element in mismatch_unknown makes the box to appear not empty."""
    box = MatchBox('argument')
    box.mismatch_unknown.add('element')
    assert bool(box) is True


def test_default_index_value():
    """Check if the correct default are used for box.index property."""
    box = MatchBox('argument')
    some_object = "I'm an object."
    box.mismatch_unknown.add(some_object)
    assert some_object in box.index['unknown']


def test_unknown_becoms_known():
    """Check if objects to mismatch_unknown are only added to future unknown."""
    box = MatchBox('argument')
    # make one value known
    box.index['known']
    some_object = "I'm an object, I only know what I know."
    second_object = "I'm rejecting what We don't already know."
    box.mismatch_unknown.add(some_object)
    box.mismatch_unknown.add(second_object)
    assert second_object in box.index['unknown']
    assert some_object in box.index['unknown']
    assert second_object not in box.index['known']
    assert some_object not in box.index['known']


@pytest.mark.parametrize('empty_value', (None, []))
def test_matchbox_empty_characteristic(empty_value):
    """Check extracting object's values if it is recognised as not used."""
    ob = IndexedObject(empty_value)

    box = MatchBox('characteristic')
    assert not box.extract_characteristic_value(ob).values, "falsy value"
    box.add(ob)
    assert not box.index, "index should be empty."
    assert not box.mismatch_unknown, "collection for not matching unknown should also be empty."
    assert not box, "box should be empty"


@pytest.mark.parametrize('falsy_value', ((), False, ''))
def test_matchbox_falsy_used_characteristic(falsy_value):
    """Check simple adding object to index if it does match characteristic's value."""
    ob = IndexedObject(falsy_value)

    box = MatchBox('characteristic')
    assert box.extract_characteristic_value(ob).values, "values is not falsy"
    assert not box.extract_characteristic_value(ob).values[0], "though element is"
    box.add(ob)
    assert falsy_value in box.index, "index should not be empty, with key for the falsy_value instead."
    assert ob in box.mismatch_unknown, "due to characteristic_match, this should be fileld."
    assert box, "box should not be empty"
