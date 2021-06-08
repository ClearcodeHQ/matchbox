window.BENCHMARK_DATA = {
  "lastUpdate": 1623145660072,
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
    ],
    "Matchbox performance benchmarks on Python 3.7": [
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
          "id": "4c356d05af4a2f405d06d3b3c6ffc3e846df9339",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/4c356d05af4a2f405d06d3b3c6ffc3e846df9339"
        },
        "date": 1623145656239,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.3971093086255553,
            "unit": "iter/sec",
            "range": "stddev: 0.004587900184112914",
            "extra": "mean: 417.1691279999976 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.27705614068528,
            "unit": "iter/sec",
            "range": "stddev: 0.004004295819026321",
            "extra": "mean: 439.1635243999957 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5757957853076523,
            "unit": "iter/sec",
            "range": "stddev: 0.004605292876835114",
            "extra": "mean: 1.7367268492000023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5737666694920054,
            "unit": "iter/sec",
            "range": "stddev: 0.005222406107106677",
            "extra": "mean: 1.7428687533999976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.5613586292032267,
            "unit": "iter/sec",
            "range": "stddev: 0.004128387445138537",
            "extra": "mean: 390.41779960000156 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 131848.34730169547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010137720818004603",
            "extra": "mean: 7.58447125402186 usec\nrounds: 44441"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 126151.19645887274,
            "unit": "iter/sec",
            "range": "stddev: 9.705025083457108e-7",
            "extra": "mean: 7.9269957643724425 usec\nrounds: 46510"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 136253.4822260074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010791888825252884",
            "extra": "mean: 7.339261967200754 usec\nrounds: 44246"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 138559.94491516644,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010002051651051034",
            "extra": "mean: 7.217092938455278 usec\nrounds: 45245"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 137392.07296567643,
            "unit": "iter/sec",
            "range": "stddev: 9.427072676726642e-7",
            "extra": "mean: 7.278440294367071 usec\nrounds: 44443"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 135493.12819739987,
            "unit": "iter/sec",
            "range": "stddev: 0.000001066575302984737",
            "extra": "mean: 7.38044809581118 usec\nrounds: 43667"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 92.08770302460081,
            "unit": "iter/sec",
            "range": "stddev: 0.0004476741185955774",
            "extra": "mean: 10.859213197367454 msec\nrounds: 76"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 10.25077624054333,
            "unit": "iter/sec",
            "range": "stddev: 0.001992198123797574",
            "extra": "mean: 97.55358780000023 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 14.023736042724376,
            "unit": "iter/sec",
            "range": "stddev: 0.0020636593120436967",
            "extra": "mean: 71.30767414285495 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}