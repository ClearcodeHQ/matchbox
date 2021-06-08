window.BENCHMARK_DATA = {
  "lastUpdate": 1623145767092,
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
        "date": 1623143833948,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 7.689190902433966,
            "unit": "iter/sec",
            "range": "stddev: 0.009292946717895972",
            "extra": "mean: 130.052695100008 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 7.66389115640941,
            "unit": "iter/sec",
            "range": "stddev: 0.012532755799508985",
            "extra": "mean: 130.48202011111383 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6021231701858765,
            "unit": "iter/sec",
            "range": "stddev: 0.04767326765475083",
            "extra": "mean: 1.6607897677999972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.615938857257455,
            "unit": "iter/sec",
            "range": "stddev: 0.02264101413030366",
            "extra": "mean: 1.6235377720000088 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 10.137134966322948,
            "unit": "iter/sec",
            "range": "stddev: 0.01099346271541307",
            "extra": "mean: 98.64720192856728 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 372934.86735591927,
            "unit": "iter/sec",
            "range": "stddev: 0.000007031266866575087",
            "extra": "mean: 2.681433374921274 usec\nrounds: 64099"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 182829.78261781618,
            "unit": "iter/sec",
            "range": "stddev: 0.00002979422479470673",
            "extra": "mean: 5.469568391329221 usec\nrounds: 175439"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 273147.43705825234,
            "unit": "iter/sec",
            "range": "stddev: 0.00001909051715494207",
            "extra": "mean: 3.6610264799471737 usec\nrounds: 166667"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 283599.00044065405,
            "unit": "iter/sec",
            "range": "stddev: 0.000019469645724407632",
            "extra": "mean: 3.526105516755006 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 187985.27571820022,
            "unit": "iter/sec",
            "range": "stddev: 0.000047498271841424904",
            "extra": "mean: 5.319565567991891 usec\nrounds: 196117"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 197904.29341346872,
            "unit": "iter/sec",
            "range": "stddev: 0.000028112136214885587",
            "extra": "mean: 5.052947476539906 usec\nrounds: 181852"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 57.156325678689036,
            "unit": "iter/sec",
            "range": "stddev: 0.0013600260581242926",
            "extra": "mean: 17.495876232870827 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 29.040974955381134,
            "unit": "iter/sec",
            "range": "stddev: 0.01284725574233536",
            "extra": "mean: 34.4341056571417 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 158.5194221534642,
            "unit": "iter/sec",
            "range": "stddev: 0.0010742652063297064",
            "extra": "mean: 6.308375254054927 msec\nrounds: 185"
          }
        ]
      }
    ],
    "Matchbox performance benchmarks on Python pypy-3.7-v7.3.3": [
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
        "date": 1623145766140,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 7.967117256749552,
            "unit": "iter/sec",
            "range": "stddev: 0.00410349670438835",
            "extra": "mean: 125.51591344445492 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 7.013752102214438,
            "unit": "iter/sec",
            "range": "stddev: 0.004806622050082609",
            "extra": "mean: 142.57703799999888 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.575538590641903,
            "unit": "iter/sec",
            "range": "stddev: 0.00934652308153548",
            "extra": "mean: 1.7375029515999814 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5525980475508723,
            "unit": "iter/sec",
            "range": "stddev: 0.013063281753463923",
            "extra": "mean: 1.8096336106000082 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 10.166561074503031,
            "unit": "iter/sec",
            "range": "stddev: 0.005330637599612432",
            "extra": "mean: 98.36167733334378 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 174083.4006871006,
            "unit": "iter/sec",
            "range": "stddev: 0.00003605616925323558",
            "extra": "mean: 5.744373076657727 usec\nrounds: 196079"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 174576.716217072,
            "unit": "iter/sec",
            "range": "stddev: 0.00003394293447319338",
            "extra": "mean: 5.728140737603181 usec\nrounds: 151516"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 181199.43485602216,
            "unit": "iter/sec",
            "range": "stddev: 0.000034809361807893173",
            "extra": "mean: 5.518781009414197 usec\nrounds: 166667"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 193019.72430554382,
            "unit": "iter/sec",
            "range": "stddev: 0.00003350397226397641",
            "extra": "mean: 5.180817678596584 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 184938.89305946222,
            "unit": "iter/sec",
            "range": "stddev: 0.00003436632091638996",
            "extra": "mean: 5.4071914428431045 usec\nrounds: 161291"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 171023.28304730044,
            "unit": "iter/sec",
            "range": "stddev: 0.00005237702503108062",
            "extra": "mean: 5.847157078158926 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 52.58315920384731,
            "unit": "iter/sec",
            "range": "stddev: 0.002011993598069484",
            "extra": "mean: 19.017495622949063 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 25.772437537815826,
            "unit": "iter/sec",
            "range": "stddev: 0.015616203305973854",
            "extra": "mean: 38.80114166666241 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 143.59940108232135,
            "unit": "iter/sec",
            "range": "stddev: 0.0010029766537538467",
            "extra": "mean: 6.963817345078823 msec\nrounds: 142"
          }
        ]
      }
    ]
  }
}