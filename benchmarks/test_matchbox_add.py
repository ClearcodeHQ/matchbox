"""Reference performance tests - adding entities to MatchBox."""

from collections import namedtuple
from typing import Any, Set, Tuple

import pytest
from pytest_benchmark.session import BenchmarkSession

from benchmarks import Chair
from matchbox import MatchBox

Dummy = namedtuple("Dummy", "c c_match")


@pytest.mark.benchmark(group="create")
@pytest.mark.parametrize("characteristic", ["colour", "legs", "size", "weight", "armrest"])
def test_create(benchmark: BenchmarkSession, chairs: Set[Chair], characteristic: str) -> None:
    """Reference benchmark to record times in regards to adding elements from chairs fixture to MatchBox."""
    matchbox = MatchBox[Any, Chair](characteristic)

    def create() -> None:
        """Fill in matchbox with entities."""
        for chair in chairs:
            matchbox.add(chair)

    benchmark(create)


@pytest.mark.benchmark(group="add")
@pytest.mark.parametrize(
    "elements",
    [
        pytest.param((Dummy(1, True), Dummy(1, True)), id="TwoElementsSameValueAndMatching"),
        pytest.param((Dummy(1, True), Dummy(2, True)), id="TwoElementsDifferentValueAndMatching"),
        pytest.param((Dummy(1, False), Dummy(1, False)), id="TwoElementsSameValueAndNotMatching"),
        pytest.param((Dummy(1, False), Dummy(2, False)), id="TwoElementsDifferentValueAndNotMatching"),
        pytest.param((Dummy(1, True), Dummy(1, False)), id="TwoElementsSameValueAndOneMatchingOtherNo"),
        pytest.param((Dummy(1, True), Dummy(2, False)), id="TwoElementsDifferentValueAndOneMatchingOtherNo"),
    ],
)
def test_add(benchmark: BenchmarkSession, elements: Tuple[Dummy]) -> None:
    """Test benchmark adding specified set of elements to MatchBox."""
    matchbox = MatchBox[bool, Dummy]("c")

    def add() -> None:
        """Fill in matchbox with entities."""
        for element in elements:
            matchbox.add(element)

    benchmark(add)
