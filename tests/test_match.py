"""Tests for match method."""
from typing import Any

import pytest

from matchbox import MatchBox
from tests import Entity


def test_mismatch():
    """Check if mismatch returns those element that are not described by characteristic."""
    box = MatchBox[Any, str]('argument')
    element1 = 'element'
    element2 = 'element2'
    totally_other = 'other'
    box.index['other'].add(totally_other)
    box.mismatch_unknown.add(element1)
    box.index['test'].add(element2)
    assert box.mismatch('test') == {element1, element2}, "both elements should be returned."


def test_match():
    """Check if match cuts entites properly."""
    box = MatchBox[Any, str]('argument')
    element1 = 'element'
    element2 = 'element2'
    totally_other = 'other'
    box.index['other'].add(totally_other)
    box.mismatch_unknown.add(element1)
    box.index['test'].add(element2)
    all_elements = {element1, element2, totally_other}
    assert box.match(all_elements, 'test') == {totally_other}, "only one element should match"


@pytest.mark.parametrize('traits', ('x', ['x', 'y'], ['z'], [1, 2, 3, None]))
def test_indexed_match(traits):
    """
    Check simple adding entity to index if it does match characteristic's trait.

    In this case, entities is recorded on mismatch_unknown.
    """
    obj = Entity[int](traits)

    matchbox = MatchBox[int, Entity]('characteristic')
    matchbox.add(obj)
    traits = matchbox.extract_traits(obj).traits  # get traits as sorting algorithms sees them
    assert set(traits) == set(matchbox.index.keys()), "characteristic trait should result in an entry in index."
    for trait in traits:
        assert matchbox.index[trait] == set(), "But the entry should be empty."

    assert obj in matchbox.mismatch_unknown, "entity should be not matching any future entries though."


@pytest.mark.parametrize('traits', ('x', ['x', 'y'], ['z'], [1, 2, 3, None]))
def test_multimatchbox_indexed_not_match(traits):
    """
    Check simple adding entity to index if it does not match a certain characteristic's trait.

    In this case entity gets recorded on index.
    """
    obj = Entity[int](traits, False)

    matchbox = MatchBox[int, Entity]('characteristic')
    matchbox.add(obj)
    traits = matchbox.extract_traits(obj).traits  # get traits as sorting algorithms sees them
    assert set(traits) == set(matchbox.index.keys()), "characteristic trait should result in an entry in index."
    assert matchbox.mismatch_unknown == set(), "Entity should not be matching any unknown traits."

    for trait in traits:
        assert obj in matchbox.index[trait], "Entity should be in set under it's characteristic's trait key."


def test_matchbox_remove_one():
    """Check removing entity from matchbox."""
    # Given set of entities, all with matching trait, and one mismatching within index
    entity1 = Entity('entity1')
    entity2 = Entity('entity2')
    entity3 = Entity('entity3')
    entity4 = Entity('entity4', False)

    matchbox = MatchBox[str, Entity]('characteristic')
    matchbox.add(entity1)
    matchbox.add(entity2)
    matchbox.add(entity3)
    matchbox.add(entity4)

    assert matchbox
    assert matchbox.mismatch_unknown
    assert matchbox.index

    assert entity1 in matchbox.mismatch_unknown
    assert entity1 not in matchbox.index['entity1']
    assert entity1 in matchbox.index['entity2']
    assert entity1 in matchbox.index['entity2']
    assert entity1 in matchbox.index['entity2']

    # When removing one entity from a box
    matchbox.remove(entity1)

    # it's no longer present
    assert entity1 not in matchbox.mismatch_unknown
    assert entity1 not in matchbox.index['entity1']
    assert entity1 not in matchbox.index['entity2']
    assert entity1 not in matchbox.index['entity2']
    assert entity1 not in matchbox.index['entity2']

    # but the matchbox is filled
    assert matchbox
    assert matchbox.mismatch_unknown
    assert matchbox.index


def test_matchbox_remove_completely():
    """Check removing entities from matchbox."""
    # Given set of entities, all with matching trait, and one mismatching within index
    entity1 = Entity('entity1')
    entity2 = Entity('entity2')
    entity3 = Entity('entity3')
    entity4 = Entity('entity4', False)

    matchbox = MatchBox[str, Entity]('characteristic')
    matchbox.add(entity1)
    matchbox.add(entity2)
    matchbox.add(entity3)
    matchbox.add(entity4)

    assert matchbox
    assert matchbox.mismatch_unknown
    assert matchbox.index

    # When removing them from a box
    matchbox.remove(entity1)
    matchbox.remove(entity2)
    matchbox.remove(entity3)
    matchbox.remove(entity4)

    # Then box should be empty
    assert not matchbox
    assert not matchbox.mismatch_unknown
    assert not matchbox.index
