window.BENCHMARK_DATA = {
  "lastUpdate": 1623143738194,
  "repoUrl": "https://github.com/ClearcodeHQ/matchbox",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "name": "ClearcodeHQ",
            "username": "ClearcodeHQ"
          },
          "committer": {
            "name": "ClearcodeHQ",
            "username": "ClearcodeHQ"
          },
          "id": "093386caf7462d9c4ff17f2a882aa903894c5dd0",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/093386caf7462d9c4ff17f2a882aa903894c5dd0"
        },
        "date": 1623143737254,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.3020344058512605,
            "unit": "iter/sec",
            "range": "stddev: 0.007909933575746462",
            "extra": "mean: 302.8436040000017 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.1073269845555407,
            "unit": "iter/sec",
            "range": "stddev: 0.009287985299394811",
            "extra": "mean: 321.82000959999897 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6409018141937911,
            "unit": "iter/sec",
            "range": "stddev: 0.01782382575593842",
            "extra": "mean: 1.5603014032000033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6225859898302497,
            "unit": "iter/sec",
            "range": "stddev: 0.031105126559443697",
            "extra": "mean: 1.6062038278000017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.508536010938909,
            "unit": "iter/sec",
            "range": "stddev: 0.00792926746687922",
            "extra": "mean: 285.01916380000125 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 179053.7540830992,
            "unit": "iter/sec",
            "range": "stddev: 0.00000410076946705818",
            "extra": "mean: 5.584915016838451 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 162457.52652398768,
            "unit": "iter/sec",
            "range": "stddev: 0.000013144944420483308",
            "extra": "mean: 6.155455037365382 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 189452.5711213909,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043873754828979976",
            "extra": "mean: 5.278365947112189 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 183566.72434799175,
            "unit": "iter/sec",
            "range": "stddev: 0.000005296520630578203",
            "extra": "mean: 5.447610418238311 usec\nrounds: 66230"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 173655.26162997182,
            "unit": "iter/sec",
            "range": "stddev: 0.000014298294093343609",
            "extra": "mean: 5.758535564161715 usec\nrounds: 31647"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 179484.36718711688,
            "unit": "iter/sec",
            "range": "stddev: 0.000007508174249283066",
            "extra": "mean: 5.5715158688860935 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 105.16829332657043,
            "unit": "iter/sec",
            "range": "stddev: 0.0011147340942707516",
            "extra": "mean: 9.508569249999924 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.797753978221813,
            "unit": "iter/sec",
            "range": "stddev: 0.004761077065908149",
            "extra": "mean: 63.300137562501746 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 28.296732976105073,
            "unit": "iter/sec",
            "range": "stddev: 0.0034666803675376164",
            "extra": "mean: 35.33976875862105 msec\nrounds: 29"
          }
        ]
      }
    ]
  }
}