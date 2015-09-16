Rationale
=========

Matchbox is not as much about actually matching data as about preprocessing it in such way,
that the actual matching consists of a set operations on actual data.

Assumptions
-----------

Now, please note that matchbox makes some assumptions about data that is being processed.

Characteristics
+++++++++++++++

Every one of us, has up to two eyes, up to two hands, legs, has determined hair colour and height.
It's not something that identifies us, but rather describes us. That's what we call characteristic.
In database we'd set up an index on a column with values for given characteristic to make the search
faster, here, each characteristic makes a separate MatchBox.

Characteristic always have to have some value
+++++++++++++++++++++++++++++++++++++++++++++

For MatchBox this means, that no value set for characteristic means that it actually any value fits,
even that we do not know yet, no value is actually a *Match all* flag for given characteristic.
On the contrary, if we'd to say, that this characteristic has no value, then the object would be always
left out of the search/match, at least on selected few characteristic. To keep implementation consistent,
we'd rather not use that objects in matching and preprocessing process at all. It also makes the pool
data smaller, and whole process this bit faster. And sometimes even a millisecond is not fast enough.

Characteristic can never both match and not match
+++++++++++++++++++++++++++++++++++++++++++++++++

There's no point of setting a characteristic value to actually match, and other values not to match
on the same object. Setting few that matches means also that all other values doesn't fit this object
At all, and probably matching process would never get there anyway. It's like saying this couch is red,
there's no point to say it's not pink.

Computational complexity
------------------------

For each box, the computational complexity can be quickly reviewed on python's wiki page `Time Complexity <https://wiki.python.org/moin/TimeComplexity>`_

Accessing key in a dictionary is at worst O(n), and intersection of two sets is 0(s*t) with average for the combination being O(1)+O(min(s, t)).
*Honestly, don't quite understand the reason behind the worst case for set intersection*.
