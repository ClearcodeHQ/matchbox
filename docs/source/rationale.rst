Rationale
=========

Main reason MatchBox got created was to limit any data processing within the process of looking up
for the desired set of entities. MatchBox achieves that through pre-processing entities and setting
them up in a hashmap.

Assumptions
-----------

Now, please note that matchbox makes some assumptions about entities it is processing

Characteristics
+++++++++++++++

Every one of us, has up to two eyes, up to two hands, legs, has determined hair colour and height.
It's not something that identifies us, but rather describes us. That's what we call characteristic.
In database we'd set up an index on a column with traits - values for given characteristic to make
the search faster, here, each characteristic is being categorised by a separate MatchBox.

Characteristic always have to have some trait
+++++++++++++++++++++++++++++++++++++++++++++

It means that even the lack of characteristic trait is a trait of it's own. Entity with no trait for
given characteristic simple means that it fits any trait the characteristic might have.
Otherwise, if we'd want to say, that this characteristic has no trait, then the entity would be always
left out of the search/matching, removed from resulting set, at least on selected few characteristic.
Such object should not be used in the process which should the pool data smaller, and whole process
this bit faster. And sometimes, even in a operations that get constantly repeated, even a nanosecond is a huge gain.

A trait can never be both matched and missed
++++++++++++++++++++++++++++++++++++++++++++

There's no point of setting a characteristic trait to actually match, and other traits to missmatch
on the same entity. Setting few selected traits that matches means also that all other traits doesn't
fit this entity at all, and probably matching process would never get there anyway.
It's like saying this couch is red, there's no point to say it's not pink.

Computational complexity
------------------------

For each box, the computational complexity can be quickly reviewed on python's wiki page
`Time Complexity <https://wiki.python.org/moin/TimeComplexity>`_

Accessing key in a dictionary is at worst `O(n)` while average `O(1)`, and difference between
two sets s and t is `O(len(s))` with average for the combination being `O(1)+O(len(s))`.
