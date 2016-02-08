"""MatchBoxes benchamr tests."""


from collections import namedtuple

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
