CHANGELOG
=========

.. towncrier release notes start

1.2.0 (2023-02-03)
==================

Features
--------

- Support python 3.11 (`#424 <https://github.com/ClearcodeHQ/matchbox/issues/424>`_)


Miscellaneus
------------

- Add towncrier to manage newsfragments and automatically build CHANGES.rst (`#422 <https://github.com/ClearcodeHQ/matchbox/issues/422>`_)
- Move dependency management from requirements to pipenv (`#423 <https://github.com/ClearcodeHQ/matchbox/issues/423>`_)
- Migrate most of setup.cfg to pyproject.toml (`#425 <https://github.com/ClearcodeHQ/matchbox/issues/425>`_)
- Migrate automerge to a shared workflow from `fizyk/actions-reuse` (`#426 <https://github.com/ClearcodeHQ/matchbox/issues/426>`_)
- Use tbump as version management tool. Also fix a number of places where bumpversion wasn't used previously. (`#427 <https://github.com/ClearcodeHQ/matchbox/issues/427>`_)
- Run benchmarks only after tests passes. (`#434 <https://github.com/ClearcodeHQ/matchbox/issues/434>`_)
- Publish documentation next to benchmarks on github pages. (`#435 <https://github.com/ClearcodeHQ/matchbox/issues/435>`_)


1.1.1
=====

Misc
----

- Run tests on python 3.10

1.1.0
=====

Feature
-------

- Add support for python 3.9
- Replace NamedTuple usage with dataclass for the Trait class
- Support `PEP 561 <https://www.python.org/dev/peps/pep-0561/>`_

1.0.0
=====

- [enhancement] support only python 3.7 and up
- [enhancement] Add type hints
- small code enhancement during adding matching entities to boxes
- remove method - ability to remove entity from already built box
- fix license information

0.3.0
=====

- added short glossary
- updated docs to reflect naming changes
- rewritten usage
- renamed various object's usages and index_object to entity [thanks Michael Sweeney]
- renamed characteristics_value and value references to traits, as in Characteristic's trait. [thanks Michael Sweeney]
- renamed MatchBox.not_matching method into MatchBox.mismatch - signature remained the same.
- only None and empty list will be treated as a value not used for matching
- added repr method to box
- renamed exclude_unknown to mismatch_unknown to clarify set's meaning
- Extracted indexing logic from MatchBox to a base class.

0.2.0
=====

- extended tests to cover python 3.5
- merge MultiMatchBox into MatchBox - now anyone extending MatchBoxes will be able to work with value extractors rather than re-implementing MatchBoxes.

0.1.0
=====

- MatchBox - single value based Matching Box
- MultiMatchBox - multivalue based Matching Box
- package structure
- documentation
