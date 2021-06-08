window.BENCHMARK_DATA = {
  "lastUpdate": 1623145220122,
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
      },
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
          "id": "b26c7f6ec6f21bb3f97cb5f22d8980419c9d7c50",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/b26c7f6ec6f21bb3f97cb5f22d8980419c9d7c50"
        },
        "date": 1623145219056,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.3360723463888617,
            "unit": "iter/sec",
            "range": "stddev: 0.02544436250113458",
            "extra": "mean: 428.0689344000052 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.114352640602645,
            "unit": "iter/sec",
            "range": "stddev: 0.025246442160716642",
            "extra": "mean: 472.95800180000924 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5348152205679494,
            "unit": "iter/sec",
            "range": "stddev: 0.04418148962012308",
            "extra": "mean: 1.8698046756000053 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5512814250942046,
            "unit": "iter/sec",
            "range": "stddev: 0.05892614532910784",
            "extra": "mean: 1.8139555487999928 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.4825675410614094,
            "unit": "iter/sec",
            "range": "stddev: 0.03053761541624695",
            "extra": "mean: 402.8087790000086 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 102262.4793738484,
            "unit": "iter/sec",
            "range": "stddev: 0.000029403949231725452",
            "extra": "mean: 9.778757625699912 usec\nrounds: 41667"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 118767.19756424257,
            "unit": "iter/sec",
            "range": "stddev: 0.000009409084661277894",
            "extra": "mean: 8.41983325790851 usec\nrounds: 42017"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 123916.3118111086,
            "unit": "iter/sec",
            "range": "stddev: 0.00003849824646153315",
            "extra": "mean: 8.0699625851062 usec\nrounds: 57143"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 126044.88468449803,
            "unit": "iter/sec",
            "range": "stddev: 0.000016469659125085523",
            "extra": "mean: 7.933681739668311 usec\nrounds: 46949"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 118704.1364851264,
            "unit": "iter/sec",
            "range": "stddev: 0.000027887218360866023",
            "extra": "mean: 8.424306259329892 usec\nrounds: 22223"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 126528.9258911253,
            "unit": "iter/sec",
            "range": "stddev: 0.000006288468898195002",
            "extra": "mean: 7.903331139161593 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 96.45115994571475,
            "unit": "iter/sec",
            "range": "stddev: 0.0018109978660169257",
            "extra": "mean: 10.36794166667178 msec\nrounds: 66"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 7.43511178360153,
            "unit": "iter/sec",
            "range": "stddev: 0.012408639889065168",
            "extra": "mean: 134.49696912500286 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 11.938088664454341,
            "unit": "iter/sec",
            "range": "stddev: 0.007869911780583445",
            "extra": "mean: 83.76550284615493 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}