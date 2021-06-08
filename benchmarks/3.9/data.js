window.BENCHMARK_DATA = {
  "lastUpdate": 1623145206473,
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
        "date": 1623145205843,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.80486417717368,
            "unit": "iter/sec",
            "range": "stddev: 0.0029807610718455345",
            "extra": "mean: 262.8214710000023 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.682565461526672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005793570162927638",
            "extra": "mean: 271.5498232000016 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7081933372377099,
            "unit": "iter/sec",
            "range": "stddev: 0.010991814739480866",
            "extra": "mean: 1.412043784399998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7081793673784005,
            "unit": "iter/sec",
            "range": "stddev: 0.0007716618537009284",
            "extra": "mean: 1.4120716389999983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.31513765842338,
            "unit": "iter/sec",
            "range": "stddev: 0.0012968769302035084",
            "extra": "mean: 231.74231719999625 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 208489.7984725379,
            "unit": "iter/sec",
            "range": "stddev: 2.580876590310164e-7",
            "extra": "mean: 4.796397748601207 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 195787.15039831205,
            "unit": "iter/sec",
            "range": "stddev: 2.462629451059893e-7",
            "extra": "mean: 5.107587489605862 usec\nrounds: 70917"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 223000.48494072692,
            "unit": "iter/sec",
            "range": "stddev: 2.1090037426026164e-7",
            "extra": "mean: 4.484295181088051 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 220090.47630290946,
            "unit": "iter/sec",
            "range": "stddev: 2.3205663839401536e-7",
            "extra": "mean: 4.54358596881632 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 214392.2013779475,
            "unit": "iter/sec",
            "range": "stddev: 2.683670605233502e-7",
            "extra": "mean: 4.664348766292675 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 203299.8130764116,
            "unit": "iter/sec",
            "range": "stddev: 2.2919442072989093e-7",
            "extra": "mean: 4.918843676576048 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 107.13034712410177,
            "unit": "iter/sec",
            "range": "stddev: 0.0002570471802421984",
            "extra": "mean: 9.334423222222751 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 19.8294284925307,
            "unit": "iter/sec",
            "range": "stddev: 0.0005705047007504644",
            "extra": "mean: 50.43009688235228 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 35.25919998169117,
            "unit": "iter/sec",
            "range": "stddev: 0.0007682693333239265",
            "extra": "mean: 28.36139221874756 msec\nrounds: 32"
          }
        ]
      }
    ]
  }
}