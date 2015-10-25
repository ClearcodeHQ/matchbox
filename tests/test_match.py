"""Tests for match method."""
import pytest

from matchbox import MatchBox
from tests import IndexedObject


def test_not_matching():
    """Check if not_matching returns those element that are not described by characteristic."""
    box = MatchBox('argument')
    element1 = 'element'
    element2 = 'element2'
    totally_other = 'other'
    box.index['other'].add(totally_other)
    box.mismatch_unknown.add(element1)
    box.index['test'].add(element2)
    assert box.not_matching('test') == {element1, element2}, "both elements should be returned."


def test_match():
    """Check if match cuts objects properly."""
    box = MatchBox('argument')
    element1 = 'element'
    element2 = 'element2'
    totally_other = 'other'
    box.index['other'].add(totally_other)
    box.mismatch_unknown.add(element1)
    box.index['test'].add(element2)
    assert box.match({element1, element2, totally_other}, 'test') == {totally_other}, "only one element should match"


@pytest.mark.parametrize('characteristic_values', ('x', ['x', 'y'], ['z'], [1, 2, 3, None]))
def test_indexed_match(characteristic_values):
    """
    Check simple adding object to index if it does match characteristic's value.

    In this case, objects is recorded on mismatch_unknown.
    """
    ob = IndexedObject(characteristic_values)

    matchbox = MatchBox('characteristic')
    matchbox.add(ob)
    values = matchbox.extract_characteristic_value(ob).values  # get the values as sorting algorithms sees them
    assert set(values) == set(matchbox.index.keys()), "characteristic value should result in an entry in index."
    for characteristic in values:
        assert matchbox.index[characteristic] == set(), "But the entry should be empty."

    assert ob in matchbox.mismatch_unknown, "object should be not matching any future entries though."


@pytest.mark.parametrize('characteristic_values', ('x', ['x', 'y'], ['z'], [1, 2, 3, None]))
def test_multimatchbox_indexed_not_match(characteristic_values):
    """
    Check simple adding object to index if it does not match a certain characteristic's value.

    In this case object gets recorded on index.
    """
    ob = IndexedObject(characteristic_values, False)

    matchbox = MatchBox('characteristic')
    matchbox.add(ob)
    values = matchbox.extract_characteristic_value(ob).values  # get the values as sorting algorithms sees them
    assert set(values) == set(matchbox.index.keys()), "characteristic value should result in an entry in index."
    assert matchbox.mismatch_unknown == set(), "object should not be matching any unknown values."

    for characteristic in values:
        assert ob in matchbox.index[characteristic], "Object should be in set under it's characteristic's value key."
