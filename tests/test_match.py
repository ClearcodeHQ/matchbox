"""Tests for match method."""
import pytest

from matchbox import MatchBox
from tests import Entity


def test_mismatch():
    """Check if mismatch returns those element that are not described by characteristic."""
    box = MatchBox('argument')
    element1 = 'element'
    element2 = 'element2'
    totally_other = 'other'
    box.index['other'].add(totally_other)
    box.mismatch_unknown.add(element1)
    box.index['test'].add(element2)
    assert box.mismatch('test') == {element1, element2}, "both elements should be returned."


def test_match():
    """Check if match cuts entites properly."""
    box = MatchBox('argument')
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
    ob = Entity(traits)

    matchbox = MatchBox('characteristic')
    matchbox.add(ob)
    traits = matchbox.extract_traits(ob).traits  # get traits as sorting algorithms sees them
    assert set(traits) == set(matchbox.index.keys()), "characteristic trait should result in an entry in index."
    for trait in traits:
        assert matchbox.index[trait] == set(), "But the entry should be empty."

    assert ob in matchbox.mismatch_unknown, "entity should be not matching any future entries though."


@pytest.mark.parametrize('traits', ('x', ['x', 'y'], ['z'], [1, 2, 3, None]))
def test_multimatchbox_indexed_not_match(traits):
    """
    Check simple adding entity to index if it does not match a certain characteristic's trait.

    In this case entity gets recorded on index.
    """
    ob = Entity(traits, False)

    matchbox = MatchBox('characteristic')
    matchbox.add(ob)
    traits = matchbox.extract_traits(ob).traits  # get traits as sorting algorithms sees them
    assert set(traits) == set(matchbox.index.keys()), "characteristic trait should result in an entry in index."
    assert matchbox.mismatch_unknown == set(), "Entity should not be matching any unknown traits."

    for trait in traits:
        assert ob in matchbox.index[trait], "Entity should be in set under it's characteristic's trait key."
