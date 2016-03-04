# pylama:ignore=W0621
"""Benchmark fixtuires."""

from random import Random

import pytest

from matchbox import MatchBox

from benchmarks import Chair, SIZE, COLOURS, MAX_LEGS

colour_randomizer = Random('colour')
colour_match_randomizer = Random('colour_match')
legs_randomzer = Random('legs')
legs_match_randomizer = Random('legs_match')
size_randomizer = Random('size')
size_match_randomizer = Random('size_match')
weight_randomizer = Random('weight')
weight_match_randomizer = Random('weight_match')
armrest_randomizer = Random('armrest')
armrest_match_randomizer = Random('armrest_match')


@pytest.fixture(scope='session')
def chairs():
    """Data fixtures for benchmarks."""
    chairs_list = []
    for i in range(SIZE):
        chairs_list.append(
            Chair(
                id=i,
                colour=colour_randomizer.choice(COLOURS),
                colour_match=colour_match_randomizer.choice([True, False]),
                legs=legs_randomzer.randint(0, MAX_LEGS),
                legs_match=legs_match_randomizer.choice([True, False]),
                size=size_randomizer.randint(0, 100),
                size_match=size_match_randomizer.choice([True, False]),
                weight=weight_randomizer.randint(0, 100),
                weight_match=weight_match_randomizer.choice([True, False]),
                armrest=armrest_randomizer.choice([True, False]),
                armrest_match=armrest_match_randomizer.choice([True, False]),
            )
        )
    return set(chairs_list)


@pytest.fixture(scope='session')
def boxes(chairs):
    """Fixture with built boxes."""
    boxes_list = [
        MatchBox('colour'),
        MatchBox('legs'),
        MatchBox('size'),
        MatchBox('weight'),
        MatchBox('armrest'),
    ]
    for sample in chairs:
        for box in boxes_list:
            box.add(sample)

    return boxes_list
