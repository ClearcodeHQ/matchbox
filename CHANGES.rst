CHANGELOG
=========

1.0.0
----------

- [enhancement] support only python 3.7 and up
- [enhancement] Add type hints
- small code enhancement during adding matching entities to boxes
- remove method - ability to remove entity from already built box
- fix license information

0.3.0
----------

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
----------

- extended tests to cover python 3.5
- merge MultiMatchBox into MatchBox - now anyone extending MatchBoxes will be able to work with value extractors rather than re-implementing MatchBoxes.

0.1.0
----------

- MatchBox - single value based Matching Box
- MultiMatchBox - multivalue based Matching Box
- package structure
- documentation
