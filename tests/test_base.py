"""Tests for basic functionality of MatchBox and basic data structure."""
from collections import defaultdict
from typing import Any

import pytest

from matchbox import MatchBox, MatchIndex
from tests import Entity


def test_init():
    """Check if the Box get's initialised correctly."""
    box = MatchIndex[Any, Entity]()
    assert not box.mismatch_unknown, "mismatch_unknown property should be empty."
    assert not box.index, "index should also be empty"
    assert isinstance(box.index, defaultdict),\
        "Having index as defaultdict is critical for algorithm."


def test_empty():
    """Check if freshly initialised box appears as empty."""
    box = MatchIndex[Any, Entity]()
    assert bool(box) is False, "Freshly initialised box should be empty"


def test_not_empty_index():
    """Check if element in index makes the box to appear not empty."""
    box = MatchIndex[Any, str]()
    box.index['known'].add('element')
    assert bool(box) is True


def test_not_empty_mismatch_unknown():
    """Check if element in mismatch_unknown makes the box to appear not empty."""
    box = MatchIndex[Any, str]()
    box.mismatch_unknown.add('element')
    assert bool(box) is True


def test_default_index_trait():
    """Check if the correct default are used for box.index property."""
    box = MatchIndex[Any, str]()
    some_entity = "I'm an object."
    box.mismatch_unknown.add(some_entity)
    assert some_entity in box.index['unknown']


def test_unknown_trait_becoms_known():
    """Check if entities are only added to mismatch_unknown for future unknown."""
    box = MatchIndex[Any, str]()
    # make one trait known
    assert box.index['known'] == set([])
    some_entity = "I'm an object, I only know what I know."
    second_entity = "I'm rejecting what We don't already know."
    box.mismatch_unknown.add(some_entity)
    box.mismatch_unknown.add(second_entity)
    assert second_entity in box.index['unknown']
    assert some_entity in box.index['unknown']
    assert second_entity not in box.index['known']
    assert some_entity not in box.index['known']


@pytest.mark.parametrize('characteristic', ('a', 'colour', 'size'))
def test_repr(characteristic):
    """Make sure repr returns proper box identification string."""
    assert repr(MatchBox(characteristic)) == f'<MatchBox({characteristic})>'


@pytest.mark.parametrize('empty_trait', (None, []))
def test_matchbox_empty_trait(empty_trait):
    """Check extracting object's traits if it is recognised as not used."""
    obj = Entity[Any](empty_trait)

    box = MatchBox[Any, Entity]('characteristic')
    assert not box.extract_traits(obj).traits, "falsy trait"
    box.add(obj)
    assert not box.index, "index should be empty."
    assert not box.mismatch_unknown, "collection for not matching unknown should also be empty."
    assert not box, "box should be empty"


@pytest.mark.parametrize('falsy_trait', ((), False, ''))
def test_matchbox_falsy_used_trait(falsy_trait):
    """Check simple adding object to index if it does match characteristic's traits."""
    obj = Entity[bool](falsy_trait)

    box = MatchBox[bool, Entity]('characteristic')
    assert box.extract_traits(obj).traits, "traits are not falsy"
    assert not list(box.extract_traits(obj).traits)[0], "though single trait element is"
    box.add(obj)
    assert falsy_trait in box.index, "index should not be empty, with key for the falsy_trait instead."
    assert obj in box.mismatch_unknown, "due to characteristic_match, this should be filed."
    assert box, "box should not be empty"
