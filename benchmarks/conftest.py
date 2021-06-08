"""Benchmark fixtuires."""

from random import Random
from typing import List, Set

import pytest

from matchbox import MatchBox

from benchmarks import Chair, SIZE, COLOURS, MAX_LEGS

COLOUR_RANDOMIZER = Random("colour")
COLOUR_MATCH_RANDOMIZER = Random("colour_match")
LEGS_RANDOMIZER = Random("legs")
LEGS_MATCH_RANDOMIZER = Random("legs_match")
SIZE_RANDOMIZER = Random("size")
SIZE_MATCH_RANDOMIZER = Random("size_match")
WEIGHT_RANDOMIZER = Random("weight")
WEIGHT_MATCH_RANDOMIZER = Random("weight_match")
ARMREST_RANDOMIZER = Random("armrest")
ARMREST_MATCH_RANDOMIZER = Random("armrest_match")


@pytest.fixture(scope="session")
def chairs() -> Set[Chair]:
    """Return data fixtures for benchmarks."""
    chairs_list = []
    for i in range(SIZE):
        chairs_list.append(
            Chair(
                id=i,
                colour=COLOUR_RANDOMIZER.choice(COLOURS),
                colour_match=COLOUR_MATCH_RANDOMIZER.choice([True, False]),
                legs=LEGS_RANDOMIZER.randint(0, MAX_LEGS),
                legs_match=LEGS_MATCH_RANDOMIZER.choice([True, False]),
                size=SIZE_RANDOMIZER.randint(0, 100),
                size_match=SIZE_MATCH_RANDOMIZER.choice([True, False]),
                weight=WEIGHT_RANDOMIZER.randint(0, 100),
                weight_match=WEIGHT_MATCH_RANDOMIZER.choice([True, False]),
                armrest=ARMREST_RANDOMIZER.choice([True, False]),
                armrest_match=ARMREST_MATCH_RANDOMIZER.choice([True, False]),
            )
        )
    return set(chairs_list)


@pytest.fixture(scope="session")
def boxes(chairs: Set[Chair]) -> List[MatchBox]:  # pylint:disable=redefined-outer-name
    """Fixture with built boxes."""
    boxes_list: List[MatchBox] = [
        MatchBox[str, Chair]("colour"),
        MatchBox[int, Chair]("legs"),
        MatchBox[int, Chair]("size"),
        MatchBox[int, Chair]("weight"),
        MatchBox[bool, Chair]("armrest"),
    ]
    for sample in chairs:
        for box in boxes_list:
            box.add(sample)

    return boxes_list
