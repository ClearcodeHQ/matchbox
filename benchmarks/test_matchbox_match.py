"""Benchmark tests comparing different approaches to same problem - finiding fitting element."""

from random import Random
from typing import List, Optional, Set, Union

import pytest
from pytest_benchmark.session import BenchmarkSession

from benchmarks import COLOURS, MAX_LEGS, SIZE, Chair
from matchbox import MatchBox

RANDOM_CHECKER_COLOUR = Random(f"Chair{SIZE}colour")
RANDOM_CHECKER_LEGS = Random(f"Chair{SIZE}legs")
RANDOM_CHECKER_SIZE = Random(f"Chair{SIZE}size")
RANDOM_CHECKER_WEIGHT = Random(f"Chair{SIZE}weight")
RANDOM_CHECKER_ARMREST = Random(f"Chair{SIZE}armrest")

COLOUR_TRAIT = RANDOM_CHECKER_COLOUR.choice(COLOURS)
LEGS_TRAIT = RANDOM_CHECKER_LEGS.randint(0, MAX_LEGS)
SIZE_TRAIT = RANDOM_CHECKER_SIZE.randint(0, 100)
WEIGHT_TRAIT = RANDOM_CHECKER_WEIGHT.randint(0, 100)
ARMREST_TRAIT = RANDOM_CHECKER_ARMREST.choice([True, False])


def run_match_matchboxes(
    boxes: List[MatchBox], chairs: Set[Chair], values: List[Union[Optional[str], int, bool]]
) -> Set[Chair]:
    """Test run with matchboxes."""
    for box, value in zip(boxes, values):
        if value is None:
            continue
        chairs = box.match(chairs, value)
    return chairs


def run_match_one_after_another(
    chairs: Set[Chair], colour: Optional[str], legs: int, size: int, weight: int, armrest: bool
) -> Set[Chair]:  # pylint:disable=too-many-branches
    """Test run with individual for loops and checking of each characteristic."""
    matched = set([])
    for chair in chairs:
        # if colour is not set, we do not care about it's value at all
        if chair.colour is not None and colour is not None:
            if chair.colour_match and chair.colour != colour:
                continue
            if not chair.colour_match and chair.colour == colour:
                continue
        matched.add(chair)

    matched2 = set([])
    for chair in matched:
        # if legs is not set, we do not care about it's value at all
        if chair.legs is not None and legs is not None:
            if chair.legs_match and chair.legs != legs:
                continue
            if not chair.legs_match and chair.legs == legs:
                continue
        matched2.add(chair)
    #
    matched3 = set([])
    for chair in matched2:
        # if size is not set, we do not care about it's value at all
        if chair.size is not None and size is not None:
            if chair.size_match and chair.size != size:
                continue
            if not chair.size_match and chair.size == size:
                continue
        matched3.add(chair)

    matched4 = set([])
    for chair in matched3:
        if chair.weight is not None and weight is not None:
            if chair.weight_match and chair.weight != weight:
                continue
            if not chair.weight_match and chair.weight == weight:
                continue
        matched4.add(chair)

    matched5 = set([])
    for chair in matched4:
        if chair.armrest is not None and armrest is not None:
            if chair.armrest_match and chair.armrest != armrest:
                continue
            if not chair.armrest_match and chair.armrest == armrest:
                continue
        matched5.add(chair)
    return matched5


def run_match_one_for_multi_condition(
    chairs: Set[Chair], colour: Optional[str], legs: int, size: int, weight: int, armrest: bool
) -> Set[Chair]:
    """One test with one for loop but multi condition."""
    matched = set([])
    for chair in chairs:
        if chair.colour is not None and colour is not None:
            if chair.colour_match and chair.colour != colour:
                continue
            if not chair.colour_match and chair.colour == colour:
                continue

        if chair.legs is not None and legs is not None:
            if chair.legs_match and chair.legs != legs:
                continue
            if not chair.legs_match and chair.legs == legs:
                continue

        if chair.size is not None and size is not None:
            if chair.size_match and chair.size != size:
                continue
            if not chair.size_match and chair.size == size:
                continue

        if chair.weight is not None and weight is not None:
            if chair.weight_match and chair.weight != weight:
                continue
            if not chair.weight_match and chair.weight == weight:
                continue

        if chair.armrest is not None and armrest is not None:
            if chair.armrest_match and chair.armrest != armrest:
                continue
            if not chair.armrest_match and chair.armrest == armrest:
                continue
        matched.add(chair)
    return matched


@pytest.mark.benchmark(group="match_all_categories")
def test_match_matchbox(benchmark: BenchmarkSession, boxes: List[MatchBox], chairs: Set[Chair]) -> None:
    """Benchmark for finding matches using matchboxes."""
    benchmark(
        run_match_matchboxes,
        boxes,
        chairs,
        [COLOUR_TRAIT, LEGS_TRAIT, SIZE_TRAIT, WEIGHT_TRAIT, ARMREST_TRAIT],
    )


@pytest.mark.benchmark(group="match_all_categories")
def test_match_one_after_another(benchmark: BenchmarkSession, chairs: Set[Chair]) -> None:
    """Benchmark for finding matches using subsequent iterations per each characteristic."""
    benchmark(
        run_match_one_after_another,
        chairs,
        COLOUR_TRAIT,
        LEGS_TRAIT,
        SIZE_TRAIT,
        WEIGHT_TRAIT,
        ARMREST_TRAIT,
    )


@pytest.mark.benchmark(group="match_all_categories")
def test_match_one_for_multi_condition(benchmark: BenchmarkSession, chairs: Set[Chair]) -> None:
    """Benchmark for finding matches using one iteration, and checking each desired conditions."""
    benchmark(
        run_match_one_for_multi_condition,
        chairs,
        COLOUR_TRAIT,
        LEGS_TRAIT,
        SIZE_TRAIT,
        WEIGHT_TRAIT,
        ARMREST_TRAIT,
    )


def test_match_one_after_another_check_matchbox(boxes: List[MatchBox], chairs: Set[Chair]) -> None:
    """Check if subsequent iterations checking return same result as matchboxes."""
    assert run_match_matchboxes(
        boxes,
        chairs,
        [COLOUR_TRAIT, LEGS_TRAIT, SIZE_TRAIT, WEIGHT_TRAIT, ARMREST_TRAIT],
    ) == run_match_one_after_another(chairs, COLOUR_TRAIT, LEGS_TRAIT, SIZE_TRAIT, WEIGHT_TRAIT, ARMREST_TRAIT)


def test_match_one_for_multi_condition_check_matchbox(boxes: List[MatchBox], chairs: Set[Chair]) -> None:
    """Check if one interation result finiding return same result as matchboxes."""
    assert run_match_matchboxes(
        boxes,
        chairs,
        [COLOUR_TRAIT, LEGS_TRAIT, SIZE_TRAIT, WEIGHT_TRAIT, ARMREST_TRAIT],
    ) == run_match_one_for_multi_condition(chairs, COLOUR_TRAIT, LEGS_TRAIT, SIZE_TRAIT, WEIGHT_TRAIT, ARMREST_TRAIT)
