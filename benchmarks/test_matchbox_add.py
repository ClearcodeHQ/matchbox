"""Reference performance tests - adding entities to MatchBox."""
from collections import namedtuple

import pytest

from matchbox import MatchBox


dummy = namedtuple('dummy', 'c c_match')


@pytest.mark.benchmark(group='create')
@pytest.mark.parametrize('characteristic', ['colour', 'legs', 'size', 'weight', 'armrest'])
def test_create(benchmark, chairs, characteristic):
    """Reference benchmark to record times in regards to adding elements from chairs fixture to MatchBox."""
    matchbox = MatchBox(characteristic)

    def create():
        for chair in chairs:
            matchbox.add(chair)

    benchmark(create)


@pytest.mark.benchmark(group='add')
@pytest.mark.parametrize('elements', [
    (dummy(1, True), dummy(1, True)),
    (dummy(1, True), dummy(2, True)),
    (dummy(1, False), dummy(1, False)),
    (dummy(1, False), dummy(2, False)),
    (dummy(1, True), dummy(1, False)),
    (dummy(1, True), dummy(2, False)),
])
def test_add(benchmark, elements):
    """Test benchmark adding specified set of elements to MatchBox."""
    matchbox = MatchBox('c')

    def add():
        for el in elements:
            matchbox.add(el)

    benchmark(add)
