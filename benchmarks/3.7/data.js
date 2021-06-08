window.BENCHMARK_DATA = {
  "lastUpdate": 1623143751989,
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
        "date": 1623143751068,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.113644819541469,
            "unit": "iter/sec",
            "range": "stddev: 0.0075828584419551075",
            "extra": "mean: 473.116386800001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.0402226916778354,
            "unit": "iter/sec",
            "range": "stddev: 0.002972573365912086",
            "extra": "mean: 490.14257319999786 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.506669806500809,
            "unit": "iter/sec",
            "range": "stddev: 0.014147628426494996",
            "extra": "mean: 1.9736719795999988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5267837752520204,
            "unit": "iter/sec",
            "range": "stddev: 0.009190766283235922",
            "extra": "mean: 1.8983120721999966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.2567924632635497,
            "unit": "iter/sec",
            "range": "stddev: 0.015015540691819764",
            "extra": "mean: 443.1067616000007 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 110797.292517125,
            "unit": "iter/sec",
            "range": "stddev: 0.000008881394076911503",
            "extra": "mean: 9.025491302916436 usec\nrounds: 38461"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 106763.22316334728,
            "unit": "iter/sec",
            "range": "stddev: 0.000010013702895448836",
            "extra": "mean: 9.36652126425599 usec\nrounds: 46510"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 115439.68244488646,
            "unit": "iter/sec",
            "range": "stddev: 0.000015261891288291095",
            "extra": "mean: 8.662532491610264 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 117252.65652998486,
            "unit": "iter/sec",
            "range": "stddev: 0.000016343412507515836",
            "extra": "mean: 8.52859141612942 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 112942.15848175461,
            "unit": "iter/sec",
            "range": "stddev: 0.000023518788404557904",
            "extra": "mean: 8.854089681326094 usec\nrounds: 49018"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 116019.47493770668,
            "unit": "iter/sec",
            "range": "stddev: 0.000008001149520332534",
            "extra": "mean: 8.619242592995024 usec\nrounds: 46510"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 80.38320708170696,
            "unit": "iter/sec",
            "range": "stddev: 0.001360891115600097",
            "extra": "mean: 12.440409338029172 msec\nrounds: 71"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 8.666684972631321,
            "unit": "iter/sec",
            "range": "stddev: 0.005751416863271852",
            "extra": "mean: 115.38437166666584 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 13.377022832592536,
            "unit": "iter/sec",
            "range": "stddev: 0.005094433398238198",
            "extra": "mean: 74.75504920000162 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}