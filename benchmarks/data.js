window.BENCHMARK_DATA = {
  "lastUpdate": 1623150414845,
  "repoUrl": "https://github.com/ClearcodeHQ/matchbox",
  "entries": {
    "Matchbox performance benchmarks on Python 3.9": [
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
          "id": "d1e23ff3de4d51297b78ed529fbbf04b241d7903",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/d1e23ff3de4d51297b78ed529fbbf04b241d7903"
        },
        "date": 1623150396957,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.159669682826745,
            "unit": "iter/sec",
            "range": "stddev: 0.0071418956000953455",
            "extra": "mean: 240.40370420000272 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 4.051908267471101,
            "unit": "iter/sec",
            "range": "stddev: 0.005574777357146471",
            "extra": "mean: 246.79729499999894 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7909565120308695,
            "unit": "iter/sec",
            "range": "stddev: 0.005494231822423286",
            "extra": "mean: 1.2642920119999872 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.779017201710821,
            "unit": "iter/sec",
            "range": "stddev: 0.003327887582280026",
            "extra": "mean: 1.2836687018000021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.444352140188758,
            "unit": "iter/sec",
            "range": "stddev: 0.0038181863034754404",
            "extra": "mean: 225.00467299999514 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 242366.15242891124,
            "unit": "iter/sec",
            "range": "stddev: 7.909099533007053e-7",
            "extra": "mean: 4.125988674484204 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 223874.55682250968,
            "unit": "iter/sec",
            "range": "stddev: 7.948656881281832e-7",
            "extra": "mean: 4.466787178468036 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 255676.11715006336,
            "unit": "iter/sec",
            "range": "stddev: 7.537716540663069e-7",
            "extra": "mean: 3.9111983205418923 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 251162.90612139448,
            "unit": "iter/sec",
            "range": "stddev: 7.388114538295867e-7",
            "extra": "mean: 3.981479651763029 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 250108.33296645165,
            "unit": "iter/sec",
            "range": "stddev: 7.965663126003579e-7",
            "extra": "mean: 3.99826742331746 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 236071.61180297623,
            "unit": "iter/sec",
            "range": "stddev: 6.610465601983109e-7",
            "extra": "mean: 4.236002763579186 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 122.47282641621862,
            "unit": "iter/sec",
            "range": "stddev: 0.00042902049304249996",
            "extra": "mean: 8.165076525641233 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 21.979043050831937,
            "unit": "iter/sec",
            "range": "stddev: 0.00231689128853682",
            "extra": "mean: 45.497886222218796 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 41.38046263155711,
            "unit": "iter/sec",
            "range": "stddev: 0.0008820279846361841",
            "extra": "mean: 24.165993717948215 msec\nrounds: 39"
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
          "id": "d1e23ff3de4d51297b78ed529fbbf04b241d7903",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/d1e23ff3de4d51297b78ed529fbbf04b241d7903"
        },
        "date": 1623150407211,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.447262548082594,
            "unit": "iter/sec",
            "range": "stddev: 0.005987738770197171",
            "extra": "mean: 408.6198274000026 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.3910332206683944,
            "unit": "iter/sec",
            "range": "stddev: 0.006838875688489392",
            "extra": "mean: 418.2292371999992 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6020084011878546,
            "unit": "iter/sec",
            "range": "stddev: 0.002400826580968652",
            "extra": "mean: 1.6611063865999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6046204482294103,
            "unit": "iter/sec",
            "range": "stddev: 0.00999903446138958",
            "extra": "mean: 1.6539301687999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.752489709792436,
            "unit": "iter/sec",
            "range": "stddev: 0.0017292936179156572",
            "extra": "mean: 363.30744360000153 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 142788.45042194574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016476422053328238",
            "extra": "mean: 7.0033675486004565 usec\nrounds: 44639"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 133109.52659850087,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017321406170786717",
            "extra": "mean: 7.512610295852877 usec\nrounds: 60238"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 150734.51198862286,
            "unit": "iter/sec",
            "range": "stddev: 0.000001593750209084688",
            "extra": "mean: 6.634180764624613 usec\nrounds: 46508"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 146170.39284186528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016811658280059907",
            "extra": "mean: 6.841330727501375 usec\nrounds: 33898"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 141481.56308300782,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016666500328655193",
            "extra": "mean: 7.068058750618241 usec\nrounds: 49259"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 137575.01467339785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017096647291949776",
            "extra": "mean: 7.26876171791799 usec\nrounds: 45870"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 91.91624744255223,
            "unit": "iter/sec",
            "range": "stddev: 0.0006628148905659459",
            "extra": "mean: 10.87946938461561 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 9.928915813725489,
            "unit": "iter/sec",
            "range": "stddev: 0.0056146249326488595",
            "extra": "mean: 100.71593100000148 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 14.169384689992446,
            "unit": "iter/sec",
            "range": "stddev: 0.001897326472735439",
            "extra": "mean: 70.57469479999932 msec\nrounds: 15"
          }
        ]
      }
    ],
    "Matchbox performance benchmarks on Python 3.8": [
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
          "id": "d1e23ff3de4d51297b78ed529fbbf04b241d7903",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/d1e23ff3de4d51297b78ed529fbbf04b241d7903"
        },
        "date": 1623150414324,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.6343902494017892,
            "unit": "iter/sec",
            "range": "stddev: 0.005796644106110159",
            "extra": "mean: 379.5944811999959 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.540119828649181,
            "unit": "iter/sec",
            "range": "stddev: 0.010187204787684388",
            "extra": "mean: 393.6822147999976 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6154406741902668,
            "unit": "iter/sec",
            "range": "stddev: 0.004728843827425934",
            "extra": "mean: 1.6248519832 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6104014894970271,
            "unit": "iter/sec",
            "range": "stddev: 0.01636984006025359",
            "extra": "mean: 1.6382659891999993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.9704505137633386,
            "unit": "iter/sec",
            "range": "stddev: 0.003812762233550301",
            "extra": "mean: 336.64927099999886 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 147574.34252255454,
            "unit": "iter/sec",
            "range": "stddev: 0.000001333370182473525",
            "extra": "mean: 6.776245673242047 usec\nrounds: 49749"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 142159.82447274352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014747221566837148",
            "extra": "mean: 7.034336203698192 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 152710.52857757642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012549597246207147",
            "extra": "mean: 6.548336970047245 usec\nrounds: 50503"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 150516.23196257232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012209881192816188",
            "extra": "mean: 6.643801714679265 usec\nrounds: 53186"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 151257.26159458654,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014795174149299438",
            "extra": "mean: 6.611252838097062 usec\nrounds: 56815"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 149140.03302685847,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015190658063271356",
            "extra": "mean: 6.705107808444103 usec\nrounds: 45451"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 98.34127219779157,
            "unit": "iter/sec",
            "range": "stddev: 0.0004420052589351372",
            "extra": "mean: 10.16867056578974 msec\nrounds: 76"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 16.488222892727595,
            "unit": "iter/sec",
            "range": "stddev: 0.00275301538147875",
            "extra": "mean: 60.64934993334343 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.531791979896653,
            "unit": "iter/sec",
            "range": "stddev: 0.0016001919364463848",
            "extra": "mean: 36.32164592592399 msec\nrounds: 27"
          }
        ]
      }
    ]
  }
}