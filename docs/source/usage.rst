Usage
=====

To create a MatchBox, you have to decide which characteristic does it work on. And then add some objects to it.

.. code-block:: python

    box = MatchBox('colour')
    box.add(chair)
    box.add(table)
    box.add(wall)
    box.add(paint_bucket)

A :class:`~matchbox.MatchBox` instance can work on one characteristic at once.
All of the above objects should have two attributes defined on them, which in combination create our *characteristic*.
These are **colour** which should describe a colour and **colour_match** which should describe whether this object is
that colour or it's anything but that colour.

In the above example let's use this :func:`collections.namedtuple`:

.. code-block:: python

    HomeObject = namedtuple('HomeObject', 'colour colour_match')
    chair = HomeObject('red', True)
    table = HomeObject('blue', True)
    wall = HomeObject('pink', False)
    paint_bucket = HomeObject('orange', True)

    home_objects = {chair, table, wall, paint_bucket}

As you can see we also gathered these objects into a set of all objects. Now, to quickly get the list of objects that will respond favourably to colour red, we'll simply perform this query:

.. code-block:: python

    box.match(home_objects, 'red')

Method match, will return set that consists of only *chair* and *wall*. **chair** because it explicitly says it's red, and **wall** because it says it's not pink, so it might as well be red or blue. Hence replacing **red** with **pink** will return an empty set from a box.
