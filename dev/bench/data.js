window.BENCHMARK_DATA = {
  "lastUpdate": 1623142587487,
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
          "id": "bde2a622123cca633b2a65723b317784f648a353",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/bde2a622123cca633b2a65723b317784f648a353"
        },
        "date": 1623142586583,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.3878065056183746,
            "unit": "iter/sec",
            "range": "stddev: 0.011139887095623227",
            "extra": "mean: 418.79440300001534 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.248963579640083,
            "unit": "iter/sec",
            "range": "stddev: 0.015048574784225366",
            "extra": "mean: 444.6492638000109 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5860934318059223,
            "unit": "iter/sec",
            "range": "stddev: 0.020088533912691636",
            "extra": "mean: 1.7062126031999925 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5695342855543778,
            "unit": "iter/sec",
            "range": "stddev: 0.02637972822339105",
            "extra": "mean: 1.7558205456000109 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.5083432525808305,
            "unit": "iter/sec",
            "range": "stddev: 0.007563865137422046",
            "extra": "mean: 398.66951980001204 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 122014.62025789601,
            "unit": "iter/sec",
            "range": "stddev: 0.000008951066431386018",
            "extra": "mean: 8.195739149016337 usec\nrounds: 41840"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 116894.64438871441,
            "unit": "iter/sec",
            "range": "stddev: 0.000009622152664446354",
            "extra": "mean: 8.554711853818214 usec\nrounds: 50759"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 126290.24559465237,
            "unit": "iter/sec",
            "range": "stddev: 0.000004917820970824478",
            "extra": "mean: 7.918267917616149 usec\nrounds: 51542"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 128815.79259353092,
            "unit": "iter/sec",
            "range": "stddev: 0.000007833781596669157",
            "extra": "mean: 7.763023305344469 usec\nrounds: 50503"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 122655.90435901143,
            "unit": "iter/sec",
            "range": "stddev: 0.000024020777644406795",
            "extra": "mean: 8.15288921659262 usec\nrounds: 46081"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 119208.68105952482,
            "unit": "iter/sec",
            "range": "stddev: 0.0000130309889286511",
            "extra": "mean: 8.388650818984122 usec\nrounds: 50249"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 96.0840597795006,
            "unit": "iter/sec",
            "range": "stddev: 0.0021654272582457418",
            "extra": "mean: 10.407553576471052 msec\nrounds: 85"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 10.016297563294128,
            "unit": "iter/sec",
            "range": "stddev: 0.00563920979167412",
            "extra": "mean: 99.83728954545188 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 15.043357443004902,
            "unit": "iter/sec",
            "range": "stddev: 0.0020958654630278",
            "extra": "mean: 66.47452231250384 msec\nrounds: 16"
          }
        ]
      }
    ]
  }
}