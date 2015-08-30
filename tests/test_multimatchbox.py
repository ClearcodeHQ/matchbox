"""Test module for MultiMatchBox."""
import pytest

from matchbox.multimatchbox import MultiMatchBox

from tests import IndexedObject


@pytest.mark.parametrize('empty_value', (None, [], ()))
def test_multimatchbox_indexed_empty_characteristic(empty_value):
    """Check simple adding object to index if it does match characteristic's value."""
    ob = IndexedObject(empty_value)

    matchbox = MultiMatchBox('characteristic')
    matchbox.add(ob)
    assert not matchbox.index, "index should be empty."
    assert not matchbox.exclude_unknown, "collection for not matching unknown should also be empty."


@pytest.mark.parametrize('characteristic_values', (['x', 'y'], ['z'], [1, 2, 3, None]))
def test_multimatchbox_indexed_match(characteristic_values):
    """Check simple adding object to index if it does match characteristic's value."""
    ob = IndexedObject(characteristic_values)

    matchbox = MultiMatchBox('characteristic')
    matchbox.add(ob)
    assert (
        set(characteristic_values) == set(matchbox.index.keys()),
        "characteristic value should result in an entry in index."
    )
    for characteristic in ob.characteristic:
        assert matchbox.index[characteristic] == set(), "But the entry should be empty."

    assert ob in matchbox.exclude_unknown, "object should be not matching any future entries though."


@pytest.mark.parametrize('characteristic_values', (['x', 'y'], ['z'], [1, 2, 3, None]))
def test_multimatchbox_indexed_not_match(characteristic_values):
    """Check simple adding object to index if it does not match a certain characteristic's value."""
    ob = IndexedObject(characteristic_values, False)

    matchbox = MultiMatchBox('characteristic')
    matchbox.add(ob)
    assert (
        set(characteristic_values) == set(matchbox.index.keys()),
        "characteristic value should result in an entry in index."
    )
    assert matchbox.exclude_unknown == set(), "object should not be matching any unknown values."

    for characteristic in ob.characteristic:
        assert ob in matchbox.index[characteristic], "Object should be in set under it's characteristic's value key."


def test_multimatchbox_mixed_objects():
    """
    Test more complex example.

    +--------+-------+-------------------------+
    | Object | Match | Characteristic's values |
    +========+=======+=========================+
    | Ob1    | False | 1, 2                    |
    +--------+-------+-------------------------+
    | Ob2    | True  | 3, 4, 7                 |
    +--------+-------+-------------------------+
    | Ob3    | False | 5, 6                    |
    +--------+-------+-------------------------+
    | Ob4    | False |                         |
    +--------+-------+-------------------------+
    | Ob5    | True  | 1, 7                    |
    +--------+-------+-------------------------+

    Should result in this index:

    +-----------+-----------------+
    | Attribute | Matched Objects |
    +===========+=================+
    | 1         | Ob1, Ob2        |
    +-----------+-----------------+
    | 2         | Ob1, Ob2, Ob5   |
    +-----------+-----------------+
    | 3         | Ob5             |
    +-----------+-----------------+
    | 4         | Ob5             |
    +-----------+-----------------+
    | 5         | Ob2, Ob3, Ob5   |
    +-----------+-----------------+
    | 6         | Ob2, Ob3, Ob5   |
    +-----------+-----------------+
    | 7         |                 |
    +-----------+-----------------+
    | Any other | Ob2, Ob5        |
    +-----------+-----------------+
    """
    # create objects
    ob1 = IndexedObject([1, 2], False)
    ob2 = IndexedObject([3, 4, 7], True)
    ob3 = IndexedObject([5, 6], False)
    ob4 = IndexedObject(None, False)
    ob5 = IndexedObject([1, 7], True)

    # create matchbox and add objects
    matchbox = MultiMatchBox('characteristic')
    matchbox.add(ob1)
    matchbox.add(ob2)
    matchbox.add(ob3)
    matchbox.add(ob4)
    matchbox.add(ob5)

    # test matchbox
    assert ob1 in matchbox.index[1]
    assert ob1 in matchbox.index[2]
    assert ob1 not in matchbox.index[3]
    assert ob1 not in matchbox.index[4]
    assert ob1 not in matchbox.index[5]
    assert ob1 not in matchbox.index[6]
    assert ob1 not in matchbox.index[7]
    assert ob1 not in matchbox.exclude_unknown

    assert ob2 in matchbox.index[1]
    assert ob2 in matchbox.index[2]
    assert ob2 not in matchbox.index[3]
    assert ob2 not in matchbox.index[4]
    assert ob2 in matchbox.index[5]
    assert ob2 in matchbox.index[6]
    assert ob2 not in matchbox.index[7]
    assert ob2 in matchbox.exclude_unknown

    assert ob3 not in matchbox.index[1]
    assert ob3 not in matchbox.index[2]
    assert ob3 not in matchbox.index[3]
    assert ob3 not in matchbox.index[4]
    assert ob3 in matchbox.index[5]
    assert ob3 in matchbox.index[6]
    assert ob3 not in matchbox.index[7]
    assert ob3 not in matchbox.exclude_unknown

    assert ob4 not in matchbox.index[1]
    assert ob4 not in matchbox.index[2]
    assert ob4 not in matchbox.index[3]
    assert ob4 not in matchbox.index[4]
    assert ob4 not in matchbox.index[5]
    assert ob4 not in matchbox.index[6]
    assert ob4 not in matchbox.index[7]
    assert ob4 not in matchbox.exclude_unknown

    assert ob5 not in matchbox.index[1]
    assert ob5 in matchbox.index[2]
    assert ob5 in matchbox.index[3]
    assert ob5 in matchbox.index[4]
    assert ob5 in matchbox.index[5]
    assert ob5 in matchbox.index[6]
    assert ob5 not in matchbox.index[7]
    assert ob5 in matchbox.exclude_unknown
