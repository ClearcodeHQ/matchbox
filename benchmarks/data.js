window.BENCHMARK_DATA = {
  "lastUpdate": 1623157175079,
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
          "id": "463781ea3f6550fc756d0ce20f48a50db304e1a2",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/463781ea3f6550fc756d0ce20f48a50db304e1a2"
        },
        "date": 1623151175475,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.0705347547282655,
            "unit": "iter/sec",
            "range": "stddev: 0.009180846359161752",
            "extra": "mean: 325.67617039999845 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.1915652374308046,
            "unit": "iter/sec",
            "range": "stddev: 0.006679376752594049",
            "extra": "mean: 313.3258842000032 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6522127507531477,
            "unit": "iter/sec",
            "range": "stddev: 0.015381350521006974",
            "extra": "mean: 1.5332420269999971 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6572583142218115,
            "unit": "iter/sec",
            "range": "stddev: 0.004888857657327204",
            "extra": "mean: 1.5214718146000052 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.6018462219460927,
            "unit": "iter/sec",
            "range": "stddev: 0.002837968873214772",
            "extra": "mean: 277.6353954000001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 184481.93965464915,
            "unit": "iter/sec",
            "range": "stddev: 0.000002045183699087756",
            "extra": "mean: 5.420584811022714 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 177039.1821009178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012735489498933777",
            "extra": "mean: 5.648467125373236 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 194747.30839442302,
            "unit": "iter/sec",
            "range": "stddev: 0.000008139251816436975",
            "extra": "mean: 5.1348591579745655 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 186593.0220641568,
            "unit": "iter/sec",
            "range": "stddev: 0.000015229872574863324",
            "extra": "mean: 5.3592572162541385 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 191409.39102159336,
            "unit": "iter/sec",
            "range": "stddev: 0.000007436793303883209",
            "extra": "mean: 5.224404062218596 usec\nrounds: 56177"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 185385.5138464259,
            "unit": "iter/sec",
            "range": "stddev: 0.000001333872076188689",
            "extra": "mean: 5.394164728687507 usec\nrounds: 64931"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 92.61953061418818,
            "unit": "iter/sec",
            "range": "stddev: 0.0005403346205271718",
            "extra": "mean: 10.796858863014062 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.21831551525006,
            "unit": "iter/sec",
            "range": "stddev: 0.00331433607114647",
            "extra": "mean: 58.07769053333421 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 31.163203441563702,
            "unit": "iter/sec",
            "range": "stddev: 0.002320466541855923",
            "extra": "mean: 32.089127225805576 msec\nrounds: 31"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "g.sliwinski@clearcode.cc",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "committer": {
            "email": "g.sliwinski@clearcode.cc",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "distinct": true,
          "id": "06097395ace00c6dc127f151202d6cbff79ef277",
          "message": "Use correct branch name",
          "timestamp": "2021-06-08T14:58:00+02:00",
          "tree_id": "4fc37a28e9a65865356da2e94a7d685488877f63",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/06097395ace00c6dc127f151202d6cbff79ef277"
        },
        "date": 1623157171182,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.2412298081058104,
            "unit": "iter/sec",
            "range": "stddev: 0.0009610384799632705",
            "extra": "mean: 308.52486839999926 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.029675608354714,
            "unit": "iter/sec",
            "range": "stddev: 0.0011022999991544512",
            "extra": "mean: 330.0683403999997 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.631007147024206,
            "unit": "iter/sec",
            "range": "stddev: 0.0029846735477660003",
            "extra": "mean: 1.5847681039999997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6292048089992655,
            "unit": "iter/sec",
            "range": "stddev: 0.0016647273407297272",
            "extra": "mean: 1.5893076240000057 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.5264910401906193,
            "unit": "iter/sec",
            "range": "stddev: 0.0015840868323115734",
            "extra": "mean: 283.5679967999994 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 181686.94376883403,
            "unit": "iter/sec",
            "range": "stddev: 7.403363164418728e-7",
            "extra": "mean: 5.503972818610078 usec\nrounds: 42014"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 171059.76063556073,
            "unit": "iter/sec",
            "range": "stddev: 9.219626355580997e-7",
            "extra": "mean: 5.845910202870442 usec\nrounds: 56494"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 195521.83267479198,
            "unit": "iter/sec",
            "range": "stddev: 7.294606253647855e-7",
            "extra": "mean: 5.114518344676537 usec\nrounds: 63288"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 191459.1707437104,
            "unit": "iter/sec",
            "range": "stddev: 6.948783708239521e-7",
            "extra": "mean: 5.223045707946852 usec\nrounds: 61346"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 183174.19710957803,
            "unit": "iter/sec",
            "range": "stddev: 7.192912697082402e-7",
            "extra": "mean: 5.459284199301184 usec\nrounds: 59877"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 176518.80402757815,
            "unit": "iter/sec",
            "range": "stddev: 8.140811083261385e-7",
            "extra": "mean: 5.665118826908472 usec\nrounds: 59877"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 87.92361995751826,
            "unit": "iter/sec",
            "range": "stddev: 0.00033401812730760456",
            "extra": "mean: 11.373508057142852 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.283221703205765,
            "unit": "iter/sec",
            "range": "stddev: 0.002331490199232798",
            "extra": "mean: 70.01221578571152 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 25.863422327402578,
            "unit": "iter/sec",
            "range": "stddev: 0.0007533323011271198",
            "extra": "mean: 38.6646433461549 msec\nrounds: 26"
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
          "id": "463781ea3f6550fc756d0ce20f48a50db304e1a2",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/463781ea3f6550fc756d0ce20f48a50db304e1a2"
        },
        "date": 1623151173487,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.714500336409947,
            "unit": "iter/sec",
            "range": "stddev: 0.0007420543032638302",
            "extra": "mean: 368.39192339999727 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.5887752316175283,
            "unit": "iter/sec",
            "range": "stddev: 0.0006560739872151209",
            "extra": "mean: 386.28305299999965 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6564202220837723,
            "unit": "iter/sec",
            "range": "stddev: 0.003094713807040481",
            "extra": "mean: 1.5234143714000026 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6520237909157631,
            "unit": "iter/sec",
            "range": "stddev: 0.002991739370524716",
            "extra": "mean: 1.5336863684000037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.9424617448018844,
            "unit": "iter/sec",
            "range": "stddev: 0.0007801939537249639",
            "extra": "mean: 339.85148719999074 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 155990.59027046734,
            "unit": "iter/sec",
            "range": "stddev: 3.7552696319933017e-7",
            "extra": "mean: 6.410643092420706 usec\nrounds: 49503"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 144993.87516037445,
            "unit": "iter/sec",
            "range": "stddev: 5.157475203352519e-7",
            "extra": "mean: 6.896843048673073 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 161339.9005751779,
            "unit": "iter/sec",
            "range": "stddev: 3.7087229281028674e-7",
            "extra": "mean: 6.198094807515022 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 162399.92272888776,
            "unit": "iter/sec",
            "range": "stddev: 3.859458065385944e-7",
            "extra": "mean: 6.157638397829851 usec\nrounds: 57472"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 157601.14192037244,
            "unit": "iter/sec",
            "range": "stddev: 4.3903991422742935e-7",
            "extra": "mean: 6.345131690132343 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 151830.5699038733,
            "unit": "iter/sec",
            "range": "stddev: 3.5513391110227894e-7",
            "extra": "mean: 6.586288918187676 usec\nrounds: 53195"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 82.16271592996983,
            "unit": "iter/sec",
            "range": "stddev: 0.00038570825453659386",
            "extra": "mean: 12.170970600002258 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 9.58001916402455,
            "unit": "iter/sec",
            "range": "stddev: 0.000822740523730729",
            "extra": "mean: 104.38392479998981 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 15.942074528465442,
            "unit": "iter/sec",
            "range": "stddev: 0.00019766521321439904",
            "extra": "mean: 62.72709352941774 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "g.sliwinski@clearcode.cc",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "committer": {
            "email": "g.sliwinski@clearcode.cc",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "distinct": true,
          "id": "06097395ace00c6dc127f151202d6cbff79ef277",
          "message": "Use correct branch name",
          "timestamp": "2021-06-08T14:58:00+02:00",
          "tree_id": "4fc37a28e9a65865356da2e94a7d685488877f63",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/06097395ace00c6dc127f151202d6cbff79ef277"
        },
        "date": 1623157173990,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.2176534667593315,
            "unit": "iter/sec",
            "range": "stddev: 0.010210279003195532",
            "extra": "mean: 450.92707899999596 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.1243978309904006,
            "unit": "iter/sec",
            "range": "stddev: 0.0068118890547946755",
            "extra": "mean: 470.72162539998317 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5483633474654045,
            "unit": "iter/sec",
            "range": "stddev: 0.0283858537675644",
            "extra": "mean: 1.8236083878000044 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5419226459961923,
            "unit": "iter/sec",
            "range": "stddev: 0.0230764548794734",
            "extra": "mean: 1.8452818080000042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.468904180242147,
            "unit": "iter/sec",
            "range": "stddev: 0.0046151317984094616",
            "extra": "mean: 405.03799540001637 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 125052.67816949154,
            "unit": "iter/sec",
            "range": "stddev: 0.000002900985540048867",
            "extra": "mean: 7.9966300173486795 usec\nrounds: 43475"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 117988.35471884412,
            "unit": "iter/sec",
            "range": "stddev: 0.000003855636167332218",
            "extra": "mean: 8.475412699693221 usec\nrounds: 44049"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 130002.69995652535,
            "unit": "iter/sec",
            "range": "stddev: 0.000003038324869544513",
            "extra": "mean: 7.692147934884534 usec\nrounds: 46081"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 129135.75933335209,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070661089055225435",
            "extra": "mean: 7.743788437551151 usec\nrounds: 42016"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 126819.70304656861,
            "unit": "iter/sec",
            "range": "stddev: 0.000004008830653127475",
            "extra": "mean: 7.885210073649177 usec\nrounds: 38020"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 124497.40109527274,
            "unit": "iter/sec",
            "range": "stddev: 0.000002847822351151021",
            "extra": "mean: 8.032296186124729 usec\nrounds: 40981"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 86.02479600911329,
            "unit": "iter/sec",
            "range": "stddev: 0.0005712993506988239",
            "extra": "mean: 11.624555318841582 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 9.250193897939106,
            "unit": "iter/sec",
            "range": "stddev: 0.005291684030892496",
            "extra": "mean: 108.10584200000335 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 12.920669615475248,
            "unit": "iter/sec",
            "range": "stddev: 0.002097953431742859",
            "extra": "mean: 77.39536957142589 msec\nrounds: 14"
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
          "id": "463781ea3f6550fc756d0ce20f48a50db304e1a2",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/463781ea3f6550fc756d0ce20f48a50db304e1a2"
        },
        "date": 1623151184625,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.3854571884925417,
            "unit": "iter/sec",
            "range": "stddev: 0.0037245588491622785",
            "extra": "mean: 419.20685259999857 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.2520239274587652,
            "unit": "iter/sec",
            "range": "stddev: 0.0013912697538872244",
            "extra": "mean: 444.0450155999997 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5515633339546262,
            "unit": "iter/sec",
            "range": "stddev: 0.0010432405911065398",
            "extra": "mean: 1.8130284201999984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5509961854218929,
            "unit": "iter/sec",
            "range": "stddev: 0.002767393183669752",
            "extra": "mean: 1.814894597199995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.5474741227260473,
            "unit": "iter/sec",
            "range": "stddev: 0.0008673777321047452",
            "extra": "mean: 392.5456949999955 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 131416.29957251536,
            "unit": "iter/sec",
            "range": "stddev: 5.052554234394459e-7",
            "extra": "mean: 7.609406163869355 usec\nrounds: 37736"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 124950.7109537693,
            "unit": "iter/sec",
            "range": "stddev: 4.1297220175463014e-7",
            "extra": "mean: 8.003155743307387 usec\nrounds: 45453"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 136593.82198719104,
            "unit": "iter/sec",
            "range": "stddev: 4.1065512871747635e-7",
            "extra": "mean: 7.3209753226890015 usec\nrounds: 45872"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 136764.07288180385,
            "unit": "iter/sec",
            "range": "stddev: 4.207733464345038e-7",
            "extra": "mean: 7.311861799145408 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 133157.8055918039,
            "unit": "iter/sec",
            "range": "stddev: 4.1105713175876396e-7",
            "extra": "mean: 7.509886450558568 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 128573.768575771,
            "unit": "iter/sec",
            "range": "stddev: 4.5497206891866667e-7",
            "extra": "mean: 7.777636224535807 usec\nrounds: 44445"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 78.33724372795858,
            "unit": "iter/sec",
            "range": "stddev: 0.0002750183670202286",
            "extra": "mean: 12.765320202899858 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.715295097695641,
            "unit": "iter/sec",
            "range": "stddev: 0.002658228439657853",
            "extra": "mean: 85.3584985833346 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 22.83129467867435,
            "unit": "iter/sec",
            "range": "stddev: 0.00006847809509592493",
            "extra": "mean: 43.799531041665084 msec\nrounds: 24"
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
          "id": "d1e23ff3de4d51297b78ed529fbbf04b241d7903",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/d1e23ff3de4d51297b78ed529fbbf04b241d7903"
        },
        "date": 1623150482329,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 7.330887214475398,
            "unit": "iter/sec",
            "range": "stddev: 0.002475116352066373",
            "extra": "mean: 136.409137222221 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.755535397037837,
            "unit": "iter/sec",
            "range": "stddev: 0.0033612646162327823",
            "extra": "mean: 148.02675750000205 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5984631953011871,
            "unit": "iter/sec",
            "range": "stddev: 0.06797056517874303",
            "extra": "mean: 1.6709465307999978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5792116754939137,
            "unit": "iter/sec",
            "range": "stddev: 0.05453645877316941",
            "extra": "mean: 1.7264845346000073 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 10.422255295112498,
            "unit": "iter/sec",
            "range": "stddev: 0.0029373539194794377",
            "extra": "mean: 95.9485228181801 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 523356.1724051756,
            "unit": "iter/sec",
            "range": "stddev: 0.00000566022311262497",
            "extra": "mean: 1.910744637641947 usec\nrounds: 78734"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 522981.7602566728,
            "unit": "iter/sec",
            "range": "stddev: 0.000005525635021021218",
            "extra": "mean: 1.912112574459962 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 583698.4606808275,
            "unit": "iter/sec",
            "range": "stddev: 0.000005659811661451843",
            "extra": "mean: 1.7132133582014042 usec\nrounds: 99991"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 661046.7240721532,
            "unit": "iter/sec",
            "range": "stddev: 0.000006152368635517954",
            "extra": "mean: 1.5127523722374079 usec\nrounds: 96154"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 592070.3215029222,
            "unit": "iter/sec",
            "range": "stddev: 0.000005686632745296307",
            "extra": "mean: 1.6889885604492745 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 536699.9143430514,
            "unit": "iter/sec",
            "range": "stddev: 0.000005804826482404057",
            "extra": "mean: 1.8632386055512076 usec\nrounds: 94331"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 56.17294489308653,
            "unit": "iter/sec",
            "range": "stddev: 0.0007006399307751562",
            "extra": "mean: 17.802164403224563 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 33.3655710602807,
            "unit": "iter/sec",
            "range": "stddev: 0.001503027539174732",
            "extra": "mean: 29.971014078953612 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 147.94854117069536,
            "unit": "iter/sec",
            "range": "stddev: 0.0006955336808519084",
            "extra": "mean: 6.759106863015647 msec\nrounds: 146"
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
          "id": "463781ea3f6550fc756d0ce20f48a50db304e1a2",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/463781ea3f6550fc756d0ce20f48a50db304e1a2"
        },
        "date": 1623151275532,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.878928857223372,
            "unit": "iter/sec",
            "range": "stddev: 0.0024179110875490687",
            "extra": "mean: 145.37147000000263 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.618025171210736,
            "unit": "iter/sec",
            "range": "stddev: 0.0033204787034592505",
            "extra": "mean: 151.10247757142557 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5463296180333737,
            "unit": "iter/sec",
            "range": "stddev: 0.014746059313709144",
            "extra": "mean: 1.8303968281999914 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.545924789881916,
            "unit": "iter/sec",
            "range": "stddev: 0.017671506043491252",
            "extra": "mean: 1.8317541509999955 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 9.984354027099245,
            "unit": "iter/sec",
            "range": "stddev: 0.0012410899399978032",
            "extra": "mean: 100.15670490908364 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 436413.2982768927,
            "unit": "iter/sec",
            "range": "stddev: 0.000006352220078454958",
            "extra": "mean: 2.291405885082641 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 214038.66295031674,
            "unit": "iter/sec",
            "range": "stddev: 0.00003153926061214824",
            "extra": "mean: 4.672053105807911 usec\nrounds: 188680"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 284281.5746745257,
            "unit": "iter/sec",
            "range": "stddev: 0.00003492732027873969",
            "extra": "mean: 3.5176391616126543 usec\nrounds: 156250"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 296536.22732577764,
            "unit": "iter/sec",
            "range": "stddev: 0.00003280627728939634",
            "extra": "mean: 3.372269246891693 usec\nrounds: 185151"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 280921.48574648506,
            "unit": "iter/sec",
            "range": "stddev: 0.000021637228716795126",
            "extra": "mean: 3.5597134813051055 usec\nrounds: 156226"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 213840.61685595033,
            "unit": "iter/sec",
            "range": "stddev: 0.00004777561745911098",
            "extra": "mean: 4.676380075510309 usec\nrounds: 196040"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 48.837885937523595,
            "unit": "iter/sec",
            "range": "stddev: 0.0004798992306113137",
            "extra": "mean: 20.47590678432029 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 24.83799187975371,
            "unit": "iter/sec",
            "range": "stddev: 0.014908434711630019",
            "extra": "mean: 40.260903733330146 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 131.64323411740054,
            "unit": "iter/sec",
            "range": "stddev: 0.0006971059174111675",
            "extra": "mean: 7.5962886106869085 msec\nrounds: 131"
          }
        ]
      }
    ]
  }
}