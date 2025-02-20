Usage
=====


To create a MatchBox, you have to decide which characteristic must it work on.

.. code-block:: python

    box = MatchBox('colour')

A :class:`~matchbox.MatchBox` instance can work on only one characteristic at once.

All entities that will be added and process by this matchbox, should have two attributes defined on them,
which in combination create our *characteristic*. These are **colour** which should describe a colour
and **colour_match** which should describe whether this entity is of that colour (or colours) or it's
not that colour (or colours). In the example let's use entities defined by this :func:`collections.namedtuple`:

.. code-block:: python

    HomeObject = namedtuple('HomeObject', 'colour colour_match')
    chair = HomeObject('red', True)
    table = HomeObject('blue', True)
    wall = HomeObject('pink', False)
    paint_bucket = HomeObject('orange', True)


And add these entities to our box.

.. code-block:: python

    box.add(chair)
    box.add(table)
    box.add(wall)
    box.add(paint_bucket)

match mehod performs simple set operation on passed collection, from which rejects a set of objects
that MatchBox determine, won't fit red colour:

.. code-block:: python

    home_objects = {chair, table, wall, paint_bucket}
    box.match(home_objects, 'red')

Method match, will return set that consists of only *chair* and *wall*. **chair** because it explicitly
says it's red, and **wall** because it says it's not pink, so it might as well be red or blue.
Replacing **red** with **pink** in the above example will return an empty set from a box.
