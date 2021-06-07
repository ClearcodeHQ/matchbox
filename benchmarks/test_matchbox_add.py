"""Reference performance tests - adding entities to MatchBox."""
from collections import namedtuple
from typing import Any

import pytest

from benchmarks import Chair
from matchbox import MatchBox


Dummy = namedtuple("Dummy", "c c_match")


@pytest.mark.benchmark(group="create")
@pytest.mark.parametrize("characteristic", ["colour", "legs", "size", "weight", "armrest"])
def test_create(benchmark, chairs, characteristic):
    """Reference benchmark to record times in regards to adding elements from chairs fixture to MatchBox."""
    matchbox = MatchBox[Any, Chair](characteristic)

    def create():
        """Fill in matchbox with entities."""
        for chair in chairs:
            matchbox.add(chair)

    benchmark(create)


@pytest.mark.benchmark(group="add")
@pytest.mark.parametrize(
    "elements",
    [
        (Dummy(1, True), Dummy(1, True)),
        (Dummy(1, True), Dummy(2, True)),
        (Dummy(1, False), Dummy(1, False)),
        (Dummy(1, False), Dummy(2, False)),
        (Dummy(1, True), Dummy(1, False)),
        (Dummy(1, True), Dummy(2, False)),
    ],
)
def test_add(benchmark, elements):
    """Test benchmark adding specified set of elements to MatchBox."""
    matchbox = MatchBox[bool, Dummy]("c")

    def add():
        """Fill in matchbox with entities."""
        for element in elements:
            matchbox.add(element)

    benchmark(add)
