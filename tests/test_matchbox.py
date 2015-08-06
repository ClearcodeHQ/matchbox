"""Tests for MatchBox."""
from matchbox.matchbox import MatchBox


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


def test_matchbox_indexed_empty_characteristic():
    """Check simple adding object to index if it does match characteristic's value."""
    ob = IndexedObject(None)

    matchbox = MatchBox('characteristic')
    matchbox.add(ob)
    assert not matchbox.index, "index should be empty."
    assert not matchbox.exclude_unknown, "collection for not matching unknown should also be empty."


def test_matchbox_indexed_match():
    """Check simple adding object to index if it does match characteristic's value."""
    ob = IndexedObject('x')

    matchbox = MatchBox('characteristic')
    matchbox.add(ob)
    assert ob.characteristic in matchbox.index, "characteristic value should result in an entry in index."
    assert matchbox.index[ob.characteristic] == set(), "But the entry should be empty."
    assert ob in matchbox.exclude_unknown, "object should be not matching any future entries though."


def test_matchbox_indexed_not_match():
    """Check simple adding object to index if it does not match a certain characteristic's value."""
    ob = IndexedObject('x', False)

    matchbox = MatchBox('characteristic')
    matchbox.add(ob)
    assert ob.characteristic in matchbox.index, "characteristic value should result in an entry in index."
    assert ob in matchbox.index[ob.characteristic], "Object should be in set under it's characteristic's value key."
    assert matchbox.exclude_unknown == set(), "object should not be matching any unknown values."


def test_matchbox_mixed_objects():
    """
    Test more complex example.

    +--------+-------+-------------------------+
    | Object | Match | Characteristic's values |
    +========+=======+=========================+
    | Ob1    | False | 1                       |
    +--------+-------+-------------------------+
    | Ob2    | True  | 3                       |
    +--------+-------+-------------------------+
    | Ob3    | False | 5                       |
    +--------+-------+-------------------------+
    | Ob4    | False |                         |
    +--------+-------+-------------------------+
    | Ob5    | True  | 1                       |
    +--------+-------+-------------------------+

    Will result in matchbox'es index:

    +-----------+-----------------+
    | Attribute | Matched Objects |
    +===========+=================+
    | 1         | Ob1, Ob2        |
    +-----------+-----------------+
    | 3         | Ob5             |
    +-----------+-----------------+
    | 5         | Ob2, Ob3, Ob5   |
    +-----------+-----------------+
    | Any new   | Ob2, Ob5        |
    +-----------+-----------------+
    """
    # create objects
    ob1 = IndexedObject(1, False)
    ob2 = IndexedObject(3, True)
    ob3 = IndexedObject(5, False)
    ob4 = IndexedObject(None, False)
    ob5 = IndexedObject(1, True)

    # create matchbox and add objects
    matchbox = MatchBox('characteristic')
    matchbox.add(ob1)
    matchbox.add(ob2)
    matchbox.add(ob3)
    matchbox.add(ob4)
    matchbox.add(ob5)

    # test matchbox
    assert ob1 in matchbox.index[1]
    assert ob1 not in matchbox.index[3]
    assert ob1 not in matchbox.index[5]
    assert ob1 not in matchbox.exclude_unknown

    assert ob2 in matchbox.index[1]
    assert ob2 not in matchbox.index[3]
    assert ob2 in matchbox.index[5]
    assert ob2 in matchbox.exclude_unknown

    assert ob3 not in matchbox.index[1]
    assert ob3 not in matchbox.index[3]
    assert ob3 in matchbox.index[5]
    assert ob3 not in matchbox.exclude_unknown

    assert ob4 not in matchbox.index[1]
    assert ob4 not in matchbox.index[3]
    assert ob4 not in matchbox.index[5]
    assert ob4 not in matchbox.exclude_unknown

    assert ob5 not in matchbox.index[1]
    assert ob5 in matchbox.index[3]
    assert ob5 in matchbox.index[5]
    assert ob5 in matchbox.exclude_unknown
