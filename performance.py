"""Performance tests."""

import timeit
from random import Random
from collections import namedtuple

from matchbox import MatchBox

Chair = namedtuple(
    'Chair', (
        'id',
        'colour', 'colour_match',
        'legs', 'legs_match',
        'size', 'size_match',
        'weight', 'weight_match',
        'armrest', 'armrest_match'
    ))

SIZE = 100000
COLOURS = ['red', 'green', 'blue', 'pink', 'white', 'yellow', None]
MAX_LEGS = 4

TEST_REPEAT = 1000

sample_ranomizer = Random(('Chair', SIZE))
chairs_list = []
for i in range(SIZE):
    chairs_list.append(
        Chair(
            id=i,
            colour=sample_ranomizer.choice(COLOURS),
            colour_match=sample_ranomizer.choice([True, False]),
            legs=sample_ranomizer.randint(0, MAX_LEGS),
            legs_match=sample_ranomizer.choice([True, False]),
            size=sample_ranomizer.randint(0, 100),
            size_match=sample_ranomizer.choice([True, False]),
            weight=sample_ranomizer.randint(0, 100),
            weight_match=sample_ranomizer.choice([True, False]),
            armrest=sample_ranomizer.choice([True, False]),
            armrest_match=sample_ranomizer.choice([True, False]),
        )
    )
chairs = set(chairs_list)

boxes = [
    MatchBox('colour'),
    MatchBox('legs'),
    MatchBox('size'),
    MatchBox('weight'),
    MatchBox('armrest'),
]
for sample in chairs:
    for box in boxes:
        box.add(sample)

random_checker = Random(('Chair', SIZE*2))

colour = random_checker.choice(COLOURS)
legs = random_checker.randint(0, MAX_LEGS)
size = random_checker.randint(0, 100)
weight = random_checker.randint(0, 100)
armrest = random_checker.choice([True, False])
values = [colour, legs, size, weight, armrest]


def run_match_matchbox(chairs, values):
    """Test run with matchboxes."""
    for box, value in zip(boxes, values):
        if value is None:
            continue
        chairs = box.match(chairs, value)
    return chairs


def run_match_one_after_another(chairs, colour, legs, size, weight, armrest):
    """Test run with individual for loops and checking of each characteristic."""
    matched = set([])
    for chair in chairs:
        # if colour is not set, we do not care about it's value at all
        if chair.colour is not None and colour is not None:
            if chair.colour_match and chair.colour != colour:
                continue
            elif not chair.colour_match and chair.colour == colour:
                continue
        matched.add(chair)

    matched2 = set([])
    for chair in matched:
        # if legs is not set, we do not care about it's value at all
        if chair.legs is not None and legs is not None:
            if chair.legs_match and chair.legs != legs:
                continue
            elif not chair.legs_match and chair.legs == legs:
                continue
        matched2.add(chair)
    #
    matched3 = set([])
    for chair in matched2:
        # if size is not set, we do not care about it's value at all
        if chair.size is not None and size is not None:
            if chair.size_match and chair.size != size:
                continue
            elif not chair.size_match and chair.size == size:
                continue
        matched3.add(chair)

    matched4 = set([])
    for chair in matched3:
        if chair.weight is not None and weight is not None:
            if chair.weight_match and chair.weight != weight:
                continue
            elif not chair.weight_match and chair.weight == weight:
                continue
        matched4.add(chair)

    matched5 = set([])
    for chair in matched4:
        if chair.armrest is not None and armrest is not None:
            if chair.armrest_match and chair.armrest != armrest:
                continue
            elif not chair.armrest_match and chair.armrest == armrest:
                continue
        matched5.add(chair)
    return matched5


def run_match_one_for_multi_condition(chairs, colour, legs, size, weight, armrest):
    """One test with one for loop but multi condition."""
    matched = set([])
    for chair in chairs:
        if chair.colour is not None and colour is not None:
            if chair.colour_match:
                if chair.colour != colour:
                    continue
            else:
                if chair.colour == colour:
                    continue

        if chair.legs is not None and legs is not None:
            if chair.legs_match:
                if chair.legs != legs:
                    continue
            else:
                if chair.legs == legs:
                    continue

        if chair.size is not None and size is not None:
            if chair.size_match:
                if chair.size != size:
                    continue
            else:
                if chair.size == size:
                    continue

        if chair.weight is not None and weight is not None:
            if chair.weight_match:
                if chair.weight != weight:
                    continue
            else:
                if chair.weight == weight:
                    continue

        if chair.armrest is not None and armrest is not None:
            if chair.armrest_match:
                if chair.armrest != armrest:
                    continue
            else:
                if chair.armrest == armrest:
                    continue
        matched.add(chair)
    return matched


def test_matchbox():
    """test_matchbox."""
    return run_match_matchbox(chairs, values)


def test_multi_for_loops():
    """test_multi_for_loops."""
    return run_match_one_after_another(chairs_list, *values)


def test_one_for():
    """test_one_for."""
    return run_match_one_for_multi_condition(chairs_list, *values)

for test, name in [
    (test_matchbox, 'test_matchbox'),
    (test_multi_for_loops, 'test_multi_for_loops'),
    (test_one_for, 'test_one_for'),
]:

    for repeat in range(TEST_REPEAT):

        t_sum = 0
        t_max = 0
        t_min = 0

        timer = timeit.Timer(test)

        try:
            current = timer.timeit(number=1)
            if t_min == 0 or t_min > current:
                t_min = current
            if t_max < current:
                t_max = current
            t_sum += current
        except:
            timer.print_exc()
            raise

    print(
        "{name}: {0:.6f} s/run. t_min: {1:.6f}, t_max: {2:.6f}, matched: {matched}".format(
            (t_sum / TEST_REPEAT), t_min, t_max, matched=len(test()), name=name)
    )


matchbox_results = test_matchbox()
multi_for_results = set(test_multi_for_loops())
one_for_results = test_one_for()

assert matchbox_results == multi_for_results
assert matchbox_results == one_for_results
assert multi_for_results == one_for_results
