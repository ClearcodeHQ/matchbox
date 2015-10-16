"""Tests for complex examples of MatchBox."""
from matchbox.matchbox import MatchBox

from tests import IndexedObject


def test_mixed_single_characteristic_objects():
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


def test_mixed_multi_characteristic_objects():
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
    matchbox = MatchBox('characteristic')
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
