window.BENCHMARK_DATA = {
  "lastUpdate": 1623142582378,
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
          "id": "bde2a622123cca633b2a65723b317784f648a353",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/bde2a622123cca633b2a65723b317784f648a353"
        },
        "date": 1623142581465,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.8157968244996665,
            "unit": "iter/sec",
            "range": "stddev: 0.013968134727493376",
            "extra": "mean: 355.13925979999925 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.7760646251144077,
            "unit": "iter/sec",
            "range": "stddev: 0.00632123983485571",
            "extra": "mean: 360.222161599998 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6662025361508168,
            "unit": "iter/sec",
            "range": "stddev: 0.03053699760417757",
            "extra": "mean: 1.5010450212000053 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6681552332296178,
            "unit": "iter/sec",
            "range": "stddev: 0.03101439033868651",
            "extra": "mean: 1.496658186999997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.091360583110519,
            "unit": "iter/sec",
            "range": "stddev: 0.010753261608031072",
            "extra": "mean: 323.4821604000018 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 140497.01950927806,
            "unit": "iter/sec",
            "range": "stddev: 0.000007876796090512653",
            "extra": "mean: 7.117588711082676 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 126198.33806324875,
            "unit": "iter/sec",
            "range": "stddev: 0.00004317740836577889",
            "extra": "mean: 7.924034621587605 usec\nrounds: 54648"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 150407.09814733532,
            "unit": "iter/sec",
            "range": "stddev: 0.00000415746722480519",
            "extra": "mean: 6.64862238762444 usec\nrounds: 59524"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 152000.53882392813,
            "unit": "iter/sec",
            "range": "stddev: 0.000013565966269316117",
            "extra": "mean: 6.578924046830935 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 139628.36551424162,
            "unit": "iter/sec",
            "range": "stddev: 0.000013823861000361678",
            "extra": "mean: 7.161868552403869 usec\nrounds: 62116"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 136086.59997111885,
            "unit": "iter/sec",
            "range": "stddev: 0.000009869890815937437",
            "extra": "mean: 7.3482620640990834 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 112.00533543637268,
            "unit": "iter/sec",
            "range": "stddev: 0.0010277531367497068",
            "extra": "mean: 8.928146111111591 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.21336153068108,
            "unit": "iter/sec",
            "range": "stddev: 0.004654508194589317",
            "extra": "mean: 58.09440522222234 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 34.959790603539474,
            "unit": "iter/sec",
            "range": "stddev: 0.0019137939545942624",
            "extra": "mean: 28.60429032142875 msec\nrounds: 28"
          }
        ]
      }
    ]
  }
}