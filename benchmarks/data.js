window.BENCHMARK_DATA = {
  "lastUpdate": 1676632515093,
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
      },
      {
        "commit": {
          "author": {
            "email": "g.sliwinski@clearcode.cc",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de54f7c9f03b06b5b153e6929139c5ff3fe8a259",
          "message": "Merge pull request #263 from ClearcodeHQ/cfg\n\nMove package configuration to setup.cfg",
          "timestamp": "2021-06-08T15:45:01+02:00",
          "tree_id": "e501787f0beeb09692623bde2463ebf851fde4ec",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/de54f7c9f03b06b5b153e6929139c5ff3fe8a259"
        },
        "date": 1623159982702,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.654456221880482,
            "unit": "iter/sec",
            "range": "stddev: 0.00033322806524841315",
            "extra": "mean: 273.6385222000081 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.4339332842420167,
            "unit": "iter/sec",
            "range": "stddev: 0.0004915830236609591",
            "extra": "mean: 291.2112487999991 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7080211260663334,
            "unit": "iter/sec",
            "range": "stddev: 0.0009574747387555019",
            "extra": "mean: 1.4123872342000028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7042874704659704,
            "unit": "iter/sec",
            "range": "stddev: 0.0017743311003778745",
            "extra": "mean: 1.419874755599983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.956305852361493,
            "unit": "iter/sec",
            "range": "stddev: 0.0011288691459761687",
            "extra": "mean: 252.76104460000397 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 210426.64521960856,
            "unit": "iter/sec",
            "range": "stddev: 3.063687808176452e-7",
            "extra": "mean: 4.752249882406124 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 194767.01578854746,
            "unit": "iter/sec",
            "range": "stddev: 2.7014317077832907e-7",
            "extra": "mean: 5.134339590054966 usec\nrounds: 72988"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 223037.56703801508,
            "unit": "iter/sec",
            "range": "stddev: 2.3298090417432752e-7",
            "extra": "mean: 4.48354962475697 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 217188.96631007167,
            "unit": "iter/sec",
            "range": "stddev: 2.5450552512021207e-7",
            "extra": "mean: 4.604285461593576 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 215379.59768875764,
            "unit": "iter/sec",
            "range": "stddev: 3.837930804052538e-7",
            "extra": "mean: 4.642965307443315 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 203547.1372814374,
            "unit": "iter/sec",
            "range": "stddev: 2.4162161545926497e-7",
            "extra": "mean: 4.9128669327210215 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 92.05962474355061,
            "unit": "iter/sec",
            "range": "stddev: 0.0006893774827202888",
            "extra": "mean: 10.86252526865809 msec\nrounds: 67"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.198236617346453,
            "unit": "iter/sec",
            "range": "stddev: 0.00335679912643094",
            "extra": "mean: 70.43128150000452 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 29.333868795799773,
            "unit": "iter/sec",
            "range": "stddev: 0.0005156607514170014",
            "extra": "mean: 34.09028679310064 msec\nrounds: 29"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c64d7db2d1b6a436ed4d1ca6e1bc3cf4d8d7252c",
          "message": "Merge pull request #265 from ClearcodeHQ/issue-264\n\nPEP 561 Support",
          "timestamp": "2021-06-08T16:30:18+02:00",
          "tree_id": "8db6fe2f57f1be7c63cc5f151a3b83e8bdf30329",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c64d7db2d1b6a436ed4d1ca6e1bc3cf4d8d7252c"
        },
        "date": 1623162707580,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.532134383754345,
            "unit": "iter/sec",
            "range": "stddev: 0.0019339740127851128",
            "extra": "mean: 283.11493599999693 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.309772354751074,
            "unit": "iter/sec",
            "range": "stddev: 0.004110523551788567",
            "extra": "mean: 302.13558300000045 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.604452645602062,
            "unit": "iter/sec",
            "range": "stddev: 0.028418690758126364",
            "extra": "mean: 1.654389317799999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6102171884590007,
            "unit": "iter/sec",
            "range": "stddev: 0.012885802375547218",
            "extra": "mean: 1.6387607870000012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.7213033377002676,
            "unit": "iter/sec",
            "range": "stddev: 0.007220157988744653",
            "extra": "mean: 268.72305460000234 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 180921.7175618253,
            "unit": "iter/sec",
            "range": "stddev: 0.000019448968472781274",
            "extra": "mean: 5.527252413233784 usec\nrounds: 60603"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 173386.34119567543,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072543835718206785",
            "extra": "mean: 5.76746699367425 usec\nrounds: 69926"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 198847.77746070173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064560960259421075",
            "extra": "mean: 5.0289724771886375 usec\nrounds: 68961"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 195077.0759864374,
            "unit": "iter/sec",
            "range": "stddev: 0.000006684431015484785",
            "extra": "mean: 5.126178947184569 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 188552.36016845139,
            "unit": "iter/sec",
            "range": "stddev: 0.00000794576923942297",
            "extra": "mean: 5.30356660137591 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 182199.51546637496,
            "unit": "iter/sec",
            "range": "stddev: 0.000013191579021268803",
            "extra": "mean: 5.488488799985589 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 98.3238844854239,
            "unit": "iter/sec",
            "range": "stddev: 0.001291324608137783",
            "extra": "mean: 10.17046880555503 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.4513423678995,
            "unit": "iter/sec",
            "range": "stddev: 0.003091823321765211",
            "extra": "mean: 57.302182200002484 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 32.7827827346179,
            "unit": "iter/sec",
            "range": "stddev: 0.0014183503219443415",
            "extra": "mean: 30.503816838709724 msec\nrounds: 31"
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
          "id": "c81cc92dae42e72b9a4161fdab55d9210eb15f07",
          "message": "\"Release 1.1.0\"",
          "timestamp": "2021-06-08T16:43:59+02:00",
          "tree_id": "00d2d952fcf8c150ada66ea9e957a6a9763412a5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c81cc92dae42e72b9a4161fdab55d9210eb15f07"
        },
        "date": 1623163540072,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.438039552175251,
            "unit": "iter/sec",
            "range": "stddev: 0.0050149314103215695",
            "extra": "mean: 290.8634367999923 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.241844628759606,
            "unit": "iter/sec",
            "range": "stddev: 0.008817411500518204",
            "extra": "mean: 308.4663561999946 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6553357255936716,
            "unit": "iter/sec",
            "range": "stddev: 0.02710575168583393",
            "extra": "mean: 1.5259354266000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6509666458968927,
            "unit": "iter/sec",
            "range": "stddev: 0.02316269840142937",
            "extra": "mean: 1.5361770166000042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.5312094976449124,
            "unit": "iter/sec",
            "range": "stddev: 0.002787267194842014",
            "extra": "mean: 283.1890888000089 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 185567.41012254148,
            "unit": "iter/sec",
            "range": "stddev: 9.722399843516673e-7",
            "extra": "mean: 5.388877278287384 usec\nrounds: 62108"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 169407.13937324253,
            "unit": "iter/sec",
            "range": "stddev: 8.415870599085998e-7",
            "extra": "mean: 5.902938941650931 usec\nrounds: 64512"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 198054.40630101677,
            "unit": "iter/sec",
            "range": "stddev: 9.695535063255822e-7",
            "extra": "mean: 5.049117657499277 usec\nrounds: 67110"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 199950.82181083312,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010252107604134457",
            "extra": "mean: 5.001229757115312 usec\nrounds: 67110"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 185135.6336239631,
            "unit": "iter/sec",
            "range": "stddev: 9.612106354361721e-7",
            "extra": "mean: 5.401445310259087 usec\nrounds: 61721"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 182405.8265896471,
            "unit": "iter/sec",
            "range": "stddev: 9.633102095415431e-7",
            "extra": "mean: 5.482281014244516 usec\nrounds: 60972"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 86.40605226009198,
            "unit": "iter/sec",
            "range": "stddev: 0.00045830660662594995",
            "extra": "mean: 11.573263374999321 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 13.780655511133544,
            "unit": "iter/sec",
            "range": "stddev: 0.002473167774864533",
            "extra": "mean: 72.56548857143181 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 24.754859630699922,
            "unit": "iter/sec",
            "range": "stddev: 0.0004120881993503812",
            "extra": "mean: 40.39610868000409 msec\nrounds: 25"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fizyk@fizyk.dev",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "committer": {
            "email": "fizyk@fizyk.dev",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "distinct": true,
          "id": "af7c74b57d7edbab8169eb4132189ec1359af747",
          "message": "Dependabot to keep github-actions up to date",
          "timestamp": "2021-08-05T17:15:51+02:00",
          "tree_id": "cf1343692cd19d9199d93b17590da7e6aacc357a",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/af7c74b57d7edbab8169eb4132189ec1359af747"
        },
        "date": 1628176977588,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.6944700654095532,
            "unit": "iter/sec",
            "range": "stddev: 0.0012324800045802843",
            "extra": "mean: 270.6748146000052 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.477748441779467,
            "unit": "iter/sec",
            "range": "stddev: 0.0008993244109059717",
            "extra": "mean: 287.54236160000346 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7080171537353808,
            "unit": "iter/sec",
            "range": "stddev: 0.001172465089073432",
            "extra": "mean: 1.4123951583999996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7047775464121981,
            "unit": "iter/sec",
            "range": "stddev: 0.0017471522848613833",
            "extra": "mean: 1.4188874278000014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.114861090186066,
            "unit": "iter/sec",
            "range": "stddev: 0.0017470770433744246",
            "extra": "mean: 243.0215693999969 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 212073.94742156056,
            "unit": "iter/sec",
            "range": "stddev: 3.321537932711557e-7",
            "extra": "mean: 4.715336382229921 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 196270.44310014535,
            "unit": "iter/sec",
            "range": "stddev: 3.398061020952127e-7",
            "extra": "mean: 5.095010660824556 usec\nrounds: 63691"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 222476.41770251028,
            "unit": "iter/sec",
            "range": "stddev: 2.969833399311275e-7",
            "extra": "mean: 4.494858422869673 usec\nrounds: 71424"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 222806.2605191543,
            "unit": "iter/sec",
            "range": "stddev: 2.5258359514903515e-7",
            "extra": "mean: 4.488204225814524 usec\nrounds: 72459"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 215033.1801663721,
            "unit": "iter/sec",
            "range": "stddev: 2.500472973169048e-7",
            "extra": "mean: 4.650445104454558 usec\nrounds: 66663"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 206744.96280066765,
            "unit": "iter/sec",
            "range": "stddev: 2.3195553355632628e-7",
            "extra": "mean: 4.836877215548637 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 104.23869673778871,
            "unit": "iter/sec",
            "range": "stddev: 0.0002863355946372758",
            "extra": "mean: 9.593366295776788 msec\nrounds: 71"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.052293502194814,
            "unit": "iter/sec",
            "range": "stddev: 0.002022175973470396",
            "extra": "mean: 58.6431379375032 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 29.870719168987087,
            "unit": "iter/sec",
            "range": "stddev: 0.003556773623209867",
            "extra": "mean: 33.477600400001016 msec\nrounds: 30"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67bf963ab7af687f1a24927117f34b5698b15970",
          "message": "Merge pull request #271 from ClearcodeHQ/dependabot/github_actions/codecov/codecov-action-2.0.2\n\nBump codecov/codecov-action from 1 to 2.0.2",
          "timestamp": "2021-08-05T17:18:53+02:00",
          "tree_id": "be1179ce6c40e949326ce2cdb8b69eb029f573fa",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/67bf963ab7af687f1a24927117f34b5698b15970"
        },
        "date": 1628177276760,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.226427034745742,
            "unit": "iter/sec",
            "range": "stddev: 0.008232041102524396",
            "extra": "mean: 236.60647439999138 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 4.1023300871429225,
            "unit": "iter/sec",
            "range": "stddev: 0.007408129505578204",
            "extra": "mean: 243.76390459999584 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.720015855451864,
            "unit": "iter/sec",
            "range": "stddev: 0.01737664761465191",
            "extra": "mean: 1.3888583042000164 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7096836198926767,
            "unit": "iter/sec",
            "range": "stddev: 0.009134028449892268",
            "extra": "mean: 1.4090785977999984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.335320414149974,
            "unit": "iter/sec",
            "range": "stddev: 0.011798432673303303",
            "extra": "mean: 230.66345840001077 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 201592.24998393457,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031417452589671477",
            "extra": "mean: 4.960508154850659 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 186238.8456657695,
            "unit": "iter/sec",
            "range": "stddev: 0.000004019992123463821",
            "extra": "mean: 5.369449087945023 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 223234.90906485435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026456095983401058",
            "extra": "mean: 4.479586119344261 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 218159.79574880344,
            "unit": "iter/sec",
            "range": "stddev: 0.000006849710837285064",
            "extra": "mean: 4.583796004060408 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 214405.8707944436,
            "unit": "iter/sec",
            "range": "stddev: 0.000003158045711762573",
            "extra": "mean: 4.664051391385294 usec\nrounds: 78126"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 203590.70877325253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029633937636194998",
            "extra": "mean: 4.911815504870321 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 127.21880396073388,
            "unit": "iter/sec",
            "range": "stddev: 0.0004760198118542352",
            "extra": "mean: 7.8604732073149375 msec\nrounds: 82"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 20.468819611154625,
            "unit": "iter/sec",
            "range": "stddev: 0.0038225204013649476",
            "extra": "mean: 48.8547956842144 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 38.15197873932821,
            "unit": "iter/sec",
            "range": "stddev: 0.0022937034050152173",
            "extra": "mean: 26.21096029730091 msec\nrounds: 37"
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
          "id": "34b4f52441bb7fa8b7c3f31f3063e1ae64787a7e",
          "message": "Update the frequency of the dependencies updates",
          "timestamp": "2021-09-07T16:33:47+02:00",
          "tree_id": "1d7053e72e76e7f71a9cec5926f1bc40d802cb38",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/34b4f52441bb7fa8b7c3f31f3063e1ae64787a7e"
        },
        "date": 1631025328785,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.29400593514931,
            "unit": "iter/sec",
            "range": "stddev: 0.0034911774340628003",
            "extra": "mean: 303.5817237999822 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.1603351503063797,
            "unit": "iter/sec",
            "range": "stddev: 0.003977470022784411",
            "extra": "mean: 316.42213640001273 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.592504049770512,
            "unit": "iter/sec",
            "range": "stddev: 0.018759747977853177",
            "extra": "mean: 1.6877521772000024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5920456859432781,
            "unit": "iter/sec",
            "range": "stddev: 0.015591819020892446",
            "extra": "mean: 1.6890588408000098 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.685168526217084,
            "unit": "iter/sec",
            "range": "stddev: 0.00344609926145642",
            "extra": "mean: 271.3580105999995 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 183056.01530641166,
            "unit": "iter/sec",
            "range": "stddev: 9.370951762591719e-7",
            "extra": "mean: 5.462808738222186 usec\nrounds: 59165"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 173286.43263694854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011239452168548482",
            "extra": "mean: 5.770792235622362 usec\nrounds: 57801"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 196449.8274203029,
            "unit": "iter/sec",
            "range": "stddev: 9.579079639601908e-7",
            "extra": "mean: 5.090358251425224 usec\nrounds: 28734"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 192855.85666933886,
            "unit": "iter/sec",
            "range": "stddev: 9.89783875096055e-7",
            "extra": "mean: 5.185219766048125 usec\nrounds: 32571"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 190325.36988211807,
            "unit": "iter/sec",
            "range": "stddev: 9.615486944741483e-7",
            "extra": "mean: 5.254160286772964 usec\nrounds: 60972"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 178104.0958816576,
            "unit": "iter/sec",
            "range": "stddev: 9.139756782620532e-7",
            "extra": "mean: 5.614694008297577 usec\nrounds: 59165"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 84.06267199548799,
            "unit": "iter/sec",
            "range": "stddev: 0.00043058637179488524",
            "extra": "mean: 11.895886441174204 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 13.99778718673215,
            "unit": "iter/sec",
            "range": "stddev: 0.0017556234672432077",
            "extra": "mean: 71.43986307691928 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 24.57729921368801,
            "unit": "iter/sec",
            "range": "stddev: 0.0008246199834422075",
            "extra": "mean: 40.687953192312634 msec\nrounds: 26"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffe410329dc26906d9cbfa06cf96bfb180a693a6",
          "message": "Merge pull request #288 from ClearcodeHQ/dependabot/pip/black-21.9b0\n\nBump black from 21.8b0 to 21.9b0",
          "timestamp": "2021-09-16T15:18:19+02:00",
          "tree_id": "29d583543f24099fe189c345b0086f012970d47e",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/ffe410329dc26906d9cbfa06cf96bfb180a693a6"
        },
        "date": 1631798387718,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.769326141764641,
            "unit": "iter/sec",
            "range": "stddev: 0.01483489585457006",
            "extra": "mean: 265.2994095999986 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.6501575978539385,
            "unit": "iter/sec",
            "range": "stddev: 0.0074746248153349185",
            "extra": "mean: 273.9607737999961 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6828026710418937,
            "unit": "iter/sec",
            "range": "stddev: 0.02983669676624294",
            "extra": "mean: 1.4645519744000013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6944345425794599,
            "unit": "iter/sec",
            "range": "stddev: 0.030392968316423703",
            "extra": "mean: 1.4400205328000026 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.423592952378631,
            "unit": "iter/sec",
            "range": "stddev: 0.00914927191109421",
            "extra": "mean: 226.06058260000736 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 217171.66072672227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034489841412478265",
            "extra": "mean: 4.604652359583643 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 204566.96255754182,
            "unit": "iter/sec",
            "range": "stddev: 0.000003907568470311261",
            "extra": "mean: 4.888374874895618 usec\nrounds: 80000"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 236255.7750321627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030397401305430743",
            "extra": "mean: 4.232700766209271 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 227024.5498095322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056926293920925115",
            "extra": "mean: 4.404809968080432 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 216514.69172772559,
            "unit": "iter/sec",
            "range": "stddev: 0.000004903457329670069",
            "extra": "mean: 4.618624223697176 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 214596.05589121525,
            "unit": "iter/sec",
            "range": "stddev: 0.000005964239007352605",
            "extra": "mean: 4.65991789013554 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 127.01475770189005,
            "unit": "iter/sec",
            "range": "stddev: 0.0005032608796659617",
            "extra": "mean: 7.873100874994775 msec\nrounds: 80"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 20.037970930746003,
            "unit": "iter/sec",
            "range": "stddev: 0.0038358692647054954",
            "extra": "mean: 49.905252555567536 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 36.04488702736712,
            "unit": "iter/sec",
            "range": "stddev: 0.0046724294900358",
            "extra": "mean: 27.74318585714387 msec\nrounds: 35"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd15de8fd8266e0672a1948babd860707ddea963",
          "message": "Merge pull request #431 from ClearcodeHQ/pipenv\n\nMove dependency management to pipenv - closes #423",
          "timestamp": "2023-01-12T17:30:27+01:00",
          "tree_id": "6d0eadca1984cc719693c3efb59b19453926a281",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/bd15de8fd8266e0672a1948babd860707ddea963"
        },
        "date": 1673541128533,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.0060068487765994,
            "unit": "iter/sec",
            "range": "stddev: 0.0053738549325388395",
            "extra": "mean: 332.6672393999985 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.8489543177559464,
            "unit": "iter/sec",
            "range": "stddev: 0.01287319690858618",
            "extra": "mean: 351.0059792000021 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.576981386351298,
            "unit": "iter/sec",
            "range": "stddev: 0.014625539140592133",
            "extra": "mean: 1.7331581636000037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5737329597637613,
            "unit": "iter/sec",
            "range": "stddev: 0.02268525407111353",
            "extra": "mean: 1.7429711558000036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.1592511496838642,
            "unit": "iter/sec",
            "range": "stddev: 0.011812152690126435",
            "extra": "mean: 316.53070700000114 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 185458.5419033863,
            "unit": "iter/sec",
            "range": "stddev: 0.00001528251232392588",
            "extra": "mean: 5.39204066707774 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 167225.78758302412,
            "unit": "iter/sec",
            "range": "stddev: 0.0000159094141965567",
            "extra": "mean: 5.979938946339367 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 184389.4525956572,
            "unit": "iter/sec",
            "range": "stddev: 0.000018460305736771254",
            "extra": "mean: 5.423303697272066 usec\nrounds: 44248"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 184619.7862077156,
            "unit": "iter/sec",
            "range": "stddev: 0.000012524532601982705",
            "extra": "mean: 5.416537525803982 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 181354.13452474575,
            "unit": "iter/sec",
            "range": "stddev: 0.000012081183469504736",
            "extra": "mean: 5.514073349474975 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 166507.26959548844,
            "unit": "iter/sec",
            "range": "stddev: 0.00004985911390689526",
            "extra": "mean: 6.005743787820153 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 58.874528853953265,
            "unit": "iter/sec",
            "range": "stddev: 0.0017552280670748285",
            "extra": "mean: 16.98527392857179 msec\nrounds: 56"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.516466934888122,
            "unit": "iter/sec",
            "range": "stddev: 0.004338204314722488",
            "extra": "mean: 86.8321860909085 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 20.30180242373388,
            "unit": "iter/sec",
            "range": "stddev: 0.003625505498220465",
            "extra": "mean: 49.256710272726686 msec\nrounds: 22"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e80e98c27426bc0d25bea678e699040bfc0844f",
          "message": "Merge pull request #432 from ClearcodeHQ/automerge-shared\n\nMigrate to shared automerge action based on the github application",
          "timestamp": "2023-01-12T21:43:55+01:00",
          "tree_id": "f4730074b3f6e0be335f7e8d350c4bf3b95eaeef",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/3e80e98c27426bc0d25bea678e699040bfc0844f"
        },
        "date": 1673556322602,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.059389485195593,
            "unit": "iter/sec",
            "range": "stddev: 0.00020511440222503017",
            "extra": "mean: 246.3424620000012 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.826275781301822,
            "unit": "iter/sec",
            "range": "stddev: 0.0021609354081808386",
            "extra": "mean: 261.3507381999966 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7565172542224826,
            "unit": "iter/sec",
            "range": "stddev: 0.003311730888254411",
            "extra": "mean: 1.3218469168000127 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7599297309939377,
            "unit": "iter/sec",
            "range": "stddev: 0.002900143644040692",
            "extra": "mean: 1.315911141800001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.408787301400171,
            "unit": "iter/sec",
            "range": "stddev: 0.001402369226611516",
            "extra": "mean: 226.819742400005 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 232923.87416276368,
            "unit": "iter/sec",
            "range": "stddev: 2.58189911152904e-7",
            "extra": "mean: 4.2932481850323985 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 217946.14961922172,
            "unit": "iter/sec",
            "range": "stddev: 2.822080046477723e-7",
            "extra": "mean: 4.588289362978521 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 248645.92695941366,
            "unit": "iter/sec",
            "range": "stddev: 2.4710306990981984e-7",
            "extra": "mean: 4.021783152567906 usec\nrounds: 90091"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 243182.146022535,
            "unit": "iter/sec",
            "range": "stddev: 2.704760399374443e-7",
            "extra": "mean: 4.112143989005397 usec\nrounds: 86965"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 240286.66363161575,
            "unit": "iter/sec",
            "range": "stddev: 2.3877106832665346e-7",
            "extra": "mean: 4.1616958048620765 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 225920.81004553149,
            "unit": "iter/sec",
            "range": "stddev: 0.000028893239493989394",
            "extra": "mean: 4.4263297382762685 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 85.38191459538959,
            "unit": "iter/sec",
            "range": "stddev: 0.0006348109888696718",
            "extra": "mean: 11.712082174999594 msec\nrounds: 80"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.089733709197512,
            "unit": "iter/sec",
            "range": "stddev: 0.0011500471997607916",
            "extra": "mean: 66.27022181249487 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.61680620899769,
            "unit": "iter/sec",
            "range": "stddev: 0.00031183556822300706",
            "extra": "mean: 36.209835142855695 msec\nrounds: 28"
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
          "id": "563fe4087960fe21b8c0cc02eba8ffd5157b2c22",
          "message": "Test attempt at automerge change with app_id as regular input",
          "timestamp": "2023-01-13T10:03:11+01:00",
          "tree_id": "3525d6b65c2a3ff0f21046981be3c5b641701100",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/563fe4087960fe21b8c0cc02eba8ffd5157b2c22"
        },
        "date": 1673600691938,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.013045447619361,
            "unit": "iter/sec",
            "range": "stddev: 0.0008082227012708051",
            "extra": "mean: 249.1873099999964 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.7936129171476036,
            "unit": "iter/sec",
            "range": "stddev: 0.00031596704160509367",
            "extra": "mean: 263.60095819999856 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7689287632318658,
            "unit": "iter/sec",
            "range": "stddev: 0.0019709443904093356",
            "extra": "mean: 1.3005105905999983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7655621029415703,
            "unit": "iter/sec",
            "range": "stddev: 0.0033818502844974096",
            "extra": "mean: 1.3062297573999984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.451271000698243,
            "unit": "iter/sec",
            "range": "stddev: 0.000609119296240625",
            "extra": "mean: 224.65493559999743 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 228371.58224771457,
            "unit": "iter/sec",
            "range": "stddev: 3.293422864144008e-7",
            "extra": "mean: 4.378828530930352 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 215814.64705583127,
            "unit": "iter/sec",
            "range": "stddev: 2.486110231607621e-7",
            "extra": "mean: 4.6336057985040275 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 241052.21342611907,
            "unit": "iter/sec",
            "range": "stddev: 3.229362547154067e-7",
            "extra": "mean: 4.148478812066554 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 241640.21446276715,
            "unit": "iter/sec",
            "range": "stddev: 2.2903355362248568e-7",
            "extra": "mean: 4.138384011217983 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 234451.09086618462,
            "unit": "iter/sec",
            "range": "stddev: 2.408704471585811e-7",
            "extra": "mean: 4.265281924283135 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 221587.35133759968,
            "unit": "iter/sec",
            "range": "stddev: 0.000029484873719003415",
            "extra": "mean: 4.512892969583127 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 88.51791414647076,
            "unit": "iter/sec",
            "range": "stddev: 0.00021658613646887773",
            "extra": "mean: 11.297148262500833 msec\nrounds: 80"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.329235564432416,
            "unit": "iter/sec",
            "range": "stddev: 0.002958251034198324",
            "extra": "mean: 57.70594994117693 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 28.27623712432554,
            "unit": "iter/sec",
            "range": "stddev: 0.0009520064313173687",
            "extra": "mean: 35.365384566665625 msec\nrounds: 30"
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
          "id": "b4dfa220711777733283a10bdde86ff1d5c4000f",
          "message": "Revert these changes",
          "timestamp": "2023-01-13T12:54:14+01:00",
          "tree_id": "f4730074b3f6e0be335f7e8d350c4bf3b95eaeef",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/b4dfa220711777733283a10bdde86ff1d5c4000f"
        },
        "date": 1673610945476,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.476621473848563,
            "unit": "iter/sec",
            "range": "stddev: 0.003098882787393556",
            "extra": "mean: 287.6355702000012 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.2914784414422495,
            "unit": "iter/sec",
            "range": "stddev: 0.004527654266093804",
            "extra": "mean: 303.8148411999998 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.587321138094247,
            "unit": "iter/sec",
            "range": "stddev: 0.01596846678632642",
            "extra": "mean: 1.702646022999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5935069024438447,
            "unit": "iter/sec",
            "range": "stddev: 0.010375205301051838",
            "extra": "mean: 1.6849003708000112 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.918531848249177,
            "unit": "iter/sec",
            "range": "stddev: 0.0071334933037550926",
            "extra": "mean: 255.19761960000554 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 201111.00278629124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071064466108757335",
            "extra": "mean: 4.972378368888354 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 194234.37028253,
            "unit": "iter/sec",
            "range": "stddev: 0.000005193910833707999",
            "extra": "mean: 5.148419399436963 usec\nrounds: 78126"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 222269.3815131497,
            "unit": "iter/sec",
            "range": "stddev: 0.000006191274815067371",
            "extra": "mean: 4.499045226977602 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 219370.33025216576,
            "unit": "iter/sec",
            "range": "stddev: 0.000006231386062352406",
            "extra": "mean: 4.558501593403729 usec\nrounds: 88488"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 216239.95548633658,
            "unit": "iter/sec",
            "range": "stddev: 0.000004735866456339948",
            "extra": "mean: 4.624492257922179 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 199363.4502623587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000467747601505387",
            "extra": "mean: 5.015964554606263 usec\nrounds: 74622"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 72.24776283659548,
            "unit": "iter/sec",
            "range": "stddev: 0.0011127566766978934",
            "extra": "mean: 13.841259033331237 msec\nrounds: 60"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.55690238573823,
            "unit": "iter/sec",
            "range": "stddev: 0.005319575231928424",
            "extra": "mean: 64.28014878570869 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 28.175480721103067,
            "unit": "iter/sec",
            "range": "stddev: 0.002489857573689692",
            "extra": "mean: 35.491852291663406 msec\nrounds: 24"
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
          "id": "553cb16e40d4fedb0bab82e31095959fd4d20003",
          "message": "It's secrets",
          "timestamp": "2023-01-13T13:44:07+01:00",
          "tree_id": "00769b7768d69454078d61c34878936154d873eb",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/553cb16e40d4fedb0bab82e31095959fd4d20003"
        },
        "date": 1673613938474,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.3409627268614313,
            "unit": "iter/sec",
            "range": "stddev: 0.0015497180083488724",
            "extra": "mean: 299.3149225999957 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.1913396804020437,
            "unit": "iter/sec",
            "range": "stddev: 0.0015231456766973297",
            "extra": "mean: 313.34802939999804 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6518491341720973,
            "unit": "iter/sec",
            "range": "stddev: 0.003099098888687696",
            "extra": "mean: 1.534097305000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6465454960097564,
            "unit": "iter/sec",
            "range": "stddev: 0.004836171832589396",
            "extra": "mean: 1.5466815656000024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.6716614083261527,
            "unit": "iter/sec",
            "range": "stddev: 0.0013936615180888928",
            "extra": "mean: 272.3562684000001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 196291.64789942873,
            "unit": "iter/sec",
            "range": "stddev: 8.089842321920121e-7",
            "extra": "mean: 5.0944602620706325 usec\nrounds: 62497"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 183552.49255908086,
            "unit": "iter/sec",
            "range": "stddev: 8.689188225359014e-7",
            "extra": "mean: 5.4480328000891936 usec\nrounds: 64512"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 208201.2696472544,
            "unit": "iter/sec",
            "range": "stddev: 6.225959853986923e-7",
            "extra": "mean: 4.803044677365575 usec\nrounds: 71938"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 207410.7646126116,
            "unit": "iter/sec",
            "range": "stddev: 6.963573488022593e-7",
            "extra": "mean: 4.8213505305172335 usec\nrounds: 65786"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 194288.52053646636,
            "unit": "iter/sec",
            "range": "stddev: 7.47983784835857e-7",
            "extra": "mean: 5.146984480806257 usec\nrounds: 25839"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 186314.43834308564,
            "unit": "iter/sec",
            "range": "stddev: 0.000041350151493749175",
            "extra": "mean: 5.367270560956562 usec\nrounds: 62108"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 69.95128206856084,
            "unit": "iter/sec",
            "range": "stddev: 0.00038578550529356755",
            "extra": "mean: 14.295663645162033 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 12.577317511423997,
            "unit": "iter/sec",
            "range": "stddev: 0.0012901708152871102",
            "extra": "mean: 79.50820984615348 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 23.929880785842307,
            "unit": "iter/sec",
            "range": "stddev: 0.0002984356364261241",
            "extra": "mean: 41.78875812000001 msec\nrounds: 25"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7267b59e9006a222f95fa8ab413793e6046c6cef",
          "message": "Bump rhysd/github-action-benchmark from 1.14.0 to 1.15.0",
          "timestamp": "2023-01-13T13:34:41Z",
          "tree_id": "f72621b71a7811d175244e9da079d89bc142d85d",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/7267b59e9006a222f95fa8ab413793e6046c6cef"
        },
        "date": 1673616961358,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.463115709350688,
            "unit": "iter/sec",
            "range": "stddev: 0.00989034560894576",
            "extra": "mean: 288.75731679999035 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.6188856189780605,
            "unit": "iter/sec",
            "range": "stddev: 0.006717058860531047",
            "extra": "mean: 276.3281587999984 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6333442133466807,
            "unit": "iter/sec",
            "range": "stddev: 0.033109783006748224",
            "extra": "mean: 1.5789202442000032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7166198177177411,
            "unit": "iter/sec",
            "range": "stddev: 0.019125595918906956",
            "extra": "mean: 1.3954400580000084 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.142445147808402,
            "unit": "iter/sec",
            "range": "stddev: 0.021692607498474705",
            "extra": "mean: 241.40331720000177 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 224179.3904776403,
            "unit": "iter/sec",
            "range": "stddev: 0.000019661217952933567",
            "extra": "mean: 4.460713350452883 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 214834.19522700633,
            "unit": "iter/sec",
            "range": "stddev: 0.000009203767566798898",
            "extra": "mean: 4.6547524659346795 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 230355.1451305836,
            "unit": "iter/sec",
            "range": "stddev: 0.000003977685144258434",
            "extra": "mean: 4.341122918843946 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 238252.91131054173,
            "unit": "iter/sec",
            "range": "stddev: 0.00001676206887646493",
            "extra": "mean: 4.197220485153224 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 228076.25482168767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036628948799960907",
            "extra": "mean: 4.384498512490089 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 215624.63193754482,
            "unit": "iter/sec",
            "range": "stddev: 0.000037149221551928116",
            "extra": "mean: 4.637689075752939 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 105.51133053998227,
            "unit": "iter/sec",
            "range": "stddev: 0.0008885801802461274",
            "extra": "mean: 9.477655099999538 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 18.430697830445528,
            "unit": "iter/sec",
            "range": "stddev: 0.004572996523959435",
            "extra": "mean: 54.25730534999644 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 36.00725332229164,
            "unit": "iter/sec",
            "range": "stddev: 0.0014567544924084898",
            "extra": "mean: 27.772182205881077 msec\nrounds: 34"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4a5dd6b409da422428c82469a1ca376f74afd03",
          "message": "Bump mypy from 0.982 to 0.991",
          "timestamp": "2023-01-13T13:53:44Z",
          "tree_id": "b18d94cfbb77e9e650a0fe7bd99f5e9a584e39b0",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c4a5dd6b409da422428c82469a1ca376f74afd03"
        },
        "date": 1673618097638,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.0775214629210526,
            "unit": "iter/sec",
            "range": "stddev: 0.000177734079456724",
            "extra": "mean: 245.24702300000172 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.885556720927236,
            "unit": "iter/sec",
            "range": "stddev: 0.0005984663673267735",
            "extra": "mean: 257.3633772000022 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7687817699258616,
            "unit": "iter/sec",
            "range": "stddev: 0.00924130175864391",
            "extra": "mean: 1.3007592520000002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7650070954997156,
            "unit": "iter/sec",
            "range": "stddev: 0.0027659386764940386",
            "extra": "mean: 1.3071774182000013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.441546443960977,
            "unit": "iter/sec",
            "range": "stddev: 0.00037983946393854555",
            "extra": "mean: 225.14680699999587 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 229487.62783533966,
            "unit": "iter/sec",
            "range": "stddev: 2.835406151971876e-7",
            "extra": "mean: 4.357533386146259 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 209945.91639457128,
            "unit": "iter/sec",
            "range": "stddev: 2.6250731118976865e-7",
            "extra": "mean: 4.763131463441304 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 242959.79583904226,
            "unit": "iter/sec",
            "range": "stddev: 2.6249757409287903e-7",
            "extra": "mean: 4.115907311111206 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 238633.49113094964,
            "unit": "iter/sec",
            "range": "stddev: 3.370787332423692e-7",
            "extra": "mean: 4.190526632538985 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 233276.2250972647,
            "unit": "iter/sec",
            "range": "stddev: 3.1646966546494886e-7",
            "extra": "mean: 4.286763469286462 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 221181.01564296265,
            "unit": "iter/sec",
            "range": "stddev: 0.000029097277350940523",
            "extra": "mean: 4.521183687908511 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 85.99331701834012,
            "unit": "iter/sec",
            "range": "stddev: 0.00015407498912994134",
            "extra": "mean: 11.62881064102605 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.042757805555727,
            "unit": "iter/sec",
            "range": "stddev: 0.002604898349411327",
            "extra": "mean: 66.47717213333522 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.217326025619965,
            "unit": "iter/sec",
            "range": "stddev: 0.0001802535812774819",
            "extra": "mean: 36.741302178571445 msec\nrounds: 28"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37e346700923e5afc9fc09453822ed51d3a2c55d",
          "message": "Bump pycodestyle from 2.9.1 to 2.10.0",
          "timestamp": "2023-01-13T13:58:32Z",
          "tree_id": "2288eb78571525f0d384af9a13f4ad26d4e70ee5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/37e346700923e5afc9fc09453822ed51d3a2c55d"
        },
        "date": 1673618404791,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.9318942262655026,
            "unit": "iter/sec",
            "range": "stddev: 0.005709977779208533",
            "extra": "mean: 341.07642459999283 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.773111413901868,
            "unit": "iter/sec",
            "range": "stddev: 0.014998292370317927",
            "extra": "mean: 360.60577839999723 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5764107900155411,
            "unit": "iter/sec",
            "range": "stddev: 0.020188520360243798",
            "extra": "mean: 1.7348738387999958 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5820530360104997,
            "unit": "iter/sec",
            "range": "stddev: 0.017095455427551864",
            "extra": "mean: 1.7180564967999943 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.1868186775266634,
            "unit": "iter/sec",
            "range": "stddev: 0.0076497785596507314",
            "extra": "mean: 313.7925628000005 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 177105.52968352355,
            "unit": "iter/sec",
            "range": "stddev: 0.000004275677655648317",
            "extra": "mean: 5.646351086761306 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 160328.0434839303,
            "unit": "iter/sec",
            "range": "stddev: 0.000018138794025455424",
            "extra": "mean: 6.237212020242922 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 187260.5034323692,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036139033448875814",
            "extra": "mean: 5.340154392787686 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 187365.90495909395,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040505861814063085",
            "extra": "mean: 5.337150322084062 usec\nrounds: 21414"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 178880.99291766674,
            "unit": "iter/sec",
            "range": "stddev: 0.000004809678545645712",
            "extra": "mean: 5.590308862273972 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 167513.17905757588,
            "unit": "iter/sec",
            "range": "stddev: 0.00004633411975757977",
            "extra": "mean: 5.969679553728071 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 56.28054697037156,
            "unit": "iter/sec",
            "range": "stddev: 0.0008384015514424184",
            "extra": "mean: 17.768128666667756 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 10.39277595800136,
            "unit": "iter/sec",
            "range": "stddev: 0.0011859360877057052",
            "extra": "mean: 96.22068290908393 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 21.21421348291864,
            "unit": "iter/sec",
            "range": "stddev: 0.0015890255268204748",
            "extra": "mean: 47.13820763636534 msec\nrounds: 22"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee90559274c45496347f2144e48fd20c8ccc65a0",
          "message": "Bump pydocstyle from 6.1.1 to 6.2.3",
          "timestamp": "2023-01-13T14:03:04Z",
          "tree_id": "bedd5e5ed2c1d82f26a5c584143b8be13313ee91",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/ee90559274c45496347f2144e48fd20c8ccc65a0"
        },
        "date": 1673618661314,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.9768436886547742,
            "unit": "iter/sec",
            "range": "stddev: 0.0005844485415773703",
            "extra": "mean: 251.45569660000007 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.7653602080445463,
            "unit": "iter/sec",
            "range": "stddev: 0.0004123690135145699",
            "extra": "mean: 265.5788410000028 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7687479606221675,
            "unit": "iter/sec",
            "range": "stddev: 0.004264316694882664",
            "extra": "mean: 1.3008164590000006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7600163745527913,
            "unit": "iter/sec",
            "range": "stddev: 0.003272084082553397",
            "extra": "mean: 1.3157611249999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.424143947302784,
            "unit": "iter/sec",
            "range": "stddev: 0.0016386776860577846",
            "extra": "mean: 226.0324283999978 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 237790.14729490763,
            "unit": "iter/sec",
            "range": "stddev: 4.1776764261194566e-7",
            "extra": "mean: 4.205388706706165 usec\nrounds: 62497"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 217589.4126106883,
            "unit": "iter/sec",
            "range": "stddev: 2.40168228982904e-7",
            "extra": "mean: 4.595811845814406 usec\nrounds: 72988"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 252919.26104630486,
            "unit": "iter/sec",
            "range": "stddev: 3.3007872987835225e-7",
            "extra": "mean: 3.953830941396426 usec\nrounds: 74069"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 249889.34983030107,
            "unit": "iter/sec",
            "range": "stddev: 2.629662071552382e-7",
            "extra": "mean: 4.001771186643594 usec\nrounds: 69926"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 240026.5239634179,
            "unit": "iter/sec",
            "range": "stddev: 2.58543514668002e-7",
            "extra": "mean: 4.166206232076288 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 223737.02824455418,
            "unit": "iter/sec",
            "range": "stddev: 0.00003649756498828027",
            "extra": "mean: 4.469532861171987 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 86.58760724534956,
            "unit": "iter/sec",
            "range": "stddev: 0.0005080534325809455",
            "extra": "mean: 11.548996811592897 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.801967544898176,
            "unit": "iter/sec",
            "range": "stddev: 0.004050079468665739",
            "extra": "mean: 56.173566066667036 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 29.1470717954698,
            "unit": "iter/sec",
            "range": "stddev: 0.0005677698360586823",
            "extra": "mean: 34.30876374193532 msec\nrounds: 31"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "651b8bc90fd50260b612c93f4a0b56e5cef67183",
          "message": "Bump black from 22.10.0 to 22.12.0",
          "timestamp": "2023-01-13T14:09:32Z",
          "tree_id": "c57ca5b4cd01a3d932bdc3a3080e69511434612b",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/651b8bc90fd50260b612c93f4a0b56e5cef67183"
        },
        "date": 1673619047203,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.044919854301797,
            "unit": "iter/sec",
            "range": "stddev: 0.0001809758383074535",
            "extra": "mean: 247.22368700000175 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.9218879890968426,
            "unit": "iter/sec",
            "range": "stddev: 0.00020282673467995272",
            "extra": "mean: 254.97923520000543 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7783708574006839,
            "unit": "iter/sec",
            "range": "stddev: 0.013795593457189182",
            "extra": "mean: 1.2847346357999982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7706115714360361,
            "unit": "iter/sec",
            "range": "stddev: 0.0026879131964456272",
            "extra": "mean: 1.2976706256 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.449316754776892,
            "unit": "iter/sec",
            "range": "stddev: 0.0011444203618307112",
            "extra": "mean: 224.75360939999973 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 225195.31490084357,
            "unit": "iter/sec",
            "range": "stddev: 2.6254966448912847e-7",
            "extra": "mean: 4.4405897184864305 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 212927.86444100708,
            "unit": "iter/sec",
            "range": "stddev: 2.5794874590983097e-7",
            "extra": "mean: 4.696426194031809 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 244694.6683892172,
            "unit": "iter/sec",
            "range": "stddev: 3.2446668983176264e-7",
            "extra": "mean: 4.086725741034031 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 239414.38513613946,
            "unit": "iter/sec",
            "range": "stddev: 6.183546596164201e-7",
            "extra": "mean: 4.176858459993391 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 233943.0223675508,
            "unit": "iter/sec",
            "range": "stddev: 8.930778831889657e-7",
            "extra": "mean: 4.274545100254744 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 224210.30618044466,
            "unit": "iter/sec",
            "range": "stddev: 0.000028081936383314834",
            "extra": "mean: 4.4600982757465175 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 86.24259085111044,
            "unit": "iter/sec",
            "range": "stddev: 0.00014919366602670587",
            "extra": "mean: 11.595198962962558 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.393820565863024,
            "unit": "iter/sec",
            "range": "stddev: 0.0010290808806644992",
            "extra": "mean: 69.47425774999871 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 26.237332397649322,
            "unit": "iter/sec",
            "range": "stddev: 0.00014375270724365782",
            "extra": "mean: 38.11363079310581 msec\nrounds: 29"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d964be808b134e8bc7741426793b80bb1c662b74",
          "message": "Merge pull request #433 from ClearcodeHQ/tbump\n\nMigrate version management tool to tbump - closes #427",
          "timestamp": "2023-01-13T17:50:23+01:00",
          "tree_id": "3d5e68b155fd2cb21cca728524fd32d7c78b733e",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/d964be808b134e8bc7741426793b80bb1c662b74"
        },
        "date": 1673628700901,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.066142393175628,
            "unit": "iter/sec",
            "range": "stddev: 0.0005648092694765037",
            "extra": "mean: 245.9333450000031 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.8410723939797125,
            "unit": "iter/sec",
            "range": "stddev: 0.00014659926742332735",
            "extra": "mean: 260.3439605999995 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7858433191553245,
            "unit": "iter/sec",
            "range": "stddev: 0.0043705253999005685",
            "extra": "mean: 1.2725182942000004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7800904996874332,
            "unit": "iter/sec",
            "range": "stddev: 0.0003033898501032098",
            "extra": "mean: 1.2819025489999945 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.3553980297519805,
            "unit": "iter/sec",
            "range": "stddev: 0.0005020318862187319",
            "extra": "mean: 229.60014059999594 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 228492.65375875126,
            "unit": "iter/sec",
            "range": "stddev: 3.072041999346741e-7",
            "extra": "mean: 4.37650831897566 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 217402.2309205577,
            "unit": "iter/sec",
            "range": "stddev: 2.3509790269826002e-7",
            "extra": "mean: 4.599768805341359 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 246644.08222092758,
            "unit": "iter/sec",
            "range": "stddev: 2.4458452638863226e-7",
            "extra": "mean: 4.0544252714089675 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 243332.529008277,
            "unit": "iter/sec",
            "range": "stddev: 2.3041931149763594e-7",
            "extra": "mean: 4.109602625163136 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 238195.0443898021,
            "unit": "iter/sec",
            "range": "stddev: 2.443828775431323e-7",
            "extra": "mean: 4.198240154667186 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 225775.10920500316,
            "unit": "iter/sec",
            "range": "stddev: 0.00002867307891360043",
            "extra": "mean: 4.42918620888365 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 91.53166556785276,
            "unit": "iter/sec",
            "range": "stddev: 0.00017161048204683901",
            "extra": "mean: 10.925180851851716 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 18.403160263517883,
            "unit": "iter/sec",
            "range": "stddev: 0.0031017812090805576",
            "extra": "mean: 54.3384932631589 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 30.529623510489433,
            "unit": "iter/sec",
            "range": "stddev: 0.0013162276841513368",
            "extra": "mean: 32.755071468746344 msec\nrounds: 32"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf",
          "message": "Merge pull request #436 from ClearcodeHQ/python3.11\n\nAdd support for python 3.11 - closes #424",
          "timestamp": "2023-01-13T18:28:20+01:00",
          "tree_id": "cab7a8b0b5d8af18de9e5e1a8e4fc00d20792147",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf"
        },
        "date": 1673630980171,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.9920444239302846,
            "unit": "iter/sec",
            "range": "stddev: 0.0008401967215496301",
            "extra": "mean: 250.49821439999675 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.8301174654665364,
            "unit": "iter/sec",
            "range": "stddev: 0.003422644846332494",
            "extra": "mean: 261.08859820000134 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7939925280348609,
            "unit": "iter/sec",
            "range": "stddev: 0.001232353934550062",
            "extra": "mean: 1.2594576959999984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7870027698870997,
            "unit": "iter/sec",
            "range": "stddev: 0.0016332396522235064",
            "extra": "mean: 1.270643558399999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.606338710103204,
            "unit": "iter/sec",
            "range": "stddev: 0.0013884239370335583",
            "extra": "mean: 217.09215559999393 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 226179.71776080245,
            "unit": "iter/sec",
            "range": "stddev: 3.7515073082836574e-7",
            "extra": "mean: 4.421262922688564 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 211080.00111593367,
            "unit": "iter/sec",
            "range": "stddev: 2.4123376064769156e-7",
            "extra": "mean: 4.7375402440459515 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 240850.9205003964,
            "unit": "iter/sec",
            "range": "stddev: 2.2495083296959744e-7",
            "extra": "mean: 4.151945933701982 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 239587.63710662848,
            "unit": "iter/sec",
            "range": "stddev: 2.012764687584302e-7",
            "extra": "mean: 4.173838066423061 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 229607.39737693878,
            "unit": "iter/sec",
            "range": "stddev: 3.43891473558635e-7",
            "extra": "mean: 4.355260376730517 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 215714.60619851397,
            "unit": "iter/sec",
            "range": "stddev: 0.000028496998110793925",
            "extra": "mean: 4.635754702116638 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 94.09042951958276,
            "unit": "iter/sec",
            "range": "stddev: 0.00013622303510583752",
            "extra": "mean: 10.628073493828328 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 19.347297021616022,
            "unit": "iter/sec",
            "range": "stddev: 0.0006503695514482776",
            "extra": "mean: 51.68680663157943 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 34.18057532709058,
            "unit": "iter/sec",
            "range": "stddev: 0.00025095149899597336",
            "extra": "mean: 29.256382914287215 msec\nrounds: 35"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3baaefdfd013139d2162ed574675bae14b0be27",
          "message": "Bump pytest from 7.2.0 to 7.2.1",
          "timestamp": "2023-01-16T04:12:28Z",
          "tree_id": "7a297e3c4218d1b4126aaa2c115e9cbd68d653df",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c3baaefdfd013139d2162ed574675bae14b0be27"
        },
        "date": 1673842420101,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.930820687969654,
            "unit": "iter/sec",
            "range": "stddev: 0.0008299682342842293",
            "extra": "mean: 254.39980080000024 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.7061327690072803,
            "unit": "iter/sec",
            "range": "stddev: 0.0007564332323139165",
            "extra": "mean: 269.8230372000026 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7674777463894797,
            "unit": "iter/sec",
            "range": "stddev: 0.0014789629578970107",
            "extra": "mean: 1.3029693756000058 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7664934877341222,
            "unit": "iter/sec",
            "range": "stddev: 0.0012634677774936893",
            "extra": "mean: 1.3046425260000063 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.36474013435838,
            "unit": "iter/sec",
            "range": "stddev: 0.0017969475266951358",
            "extra": "mean: 229.10871420000376 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 232575.3311167928,
            "unit": "iter/sec",
            "range": "stddev: 3.311987221276527e-7",
            "extra": "mean: 4.299682151147096 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 211178.97724201856,
            "unit": "iter/sec",
            "range": "stddev: 7.693603039475808e-7",
            "extra": "mean: 4.735319836566709 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 248354.34581432235,
            "unit": "iter/sec",
            "range": "stddev: 2.8000434321719243e-7",
            "extra": "mean: 4.026504938824916 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 240452.28771272665,
            "unit": "iter/sec",
            "range": "stddev: 2.8765287914025206e-7",
            "extra": "mean: 4.158829219353159 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 230435.6342326577,
            "unit": "iter/sec",
            "range": "stddev: 2.39873542142047e-7",
            "extra": "mean: 4.339606603509756 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 217337.46645868334,
            "unit": "iter/sec",
            "range": "stddev: 0.000036967659874989476",
            "extra": "mean: 4.601139491934327 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 87.77923318290655,
            "unit": "iter/sec",
            "range": "stddev: 0.000511831724778279",
            "extra": "mean: 11.392216173913129 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.07802017090934,
            "unit": "iter/sec",
            "range": "stddev: 0.002326720595317322",
            "extra": "mean: 58.55479675000019 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.942216753154003,
            "unit": "iter/sec",
            "range": "stddev: 0.0033995635160357636",
            "extra": "mean: 35.788141250000294 msec\nrounds: 24"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f321b36ac5981710681bf2ec9661b587ebdf756d",
          "message": "Merge pull request #437 from ClearcodeHQ/order\n\nRun benchmarks only after tests",
          "timestamp": "2023-01-16T10:09:22+01:00",
          "tree_id": "f9722ee8a25d0d75f3fa9f130017ffb46662ad73",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f321b36ac5981710681bf2ec9661b587ebdf756d"
        },
        "date": 1673860486649,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.3117939180437497,
            "unit": "iter/sec",
            "range": "stddev: 0.0027552498793769627",
            "extra": "mean: 301.95115539999904 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.1480013757320435,
            "unit": "iter/sec",
            "range": "stddev: 0.0048377822027721",
            "extra": "mean: 317.6618687999962 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5978036802544208,
            "unit": "iter/sec",
            "range": "stddev: 0.009543856628573065",
            "extra": "mean: 1.6727899694000001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5899934205786317,
            "unit": "iter/sec",
            "range": "stddev: 0.03324754229155099",
            "extra": "mean: 1.6949341554 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.7061103309608474,
            "unit": "iter/sec",
            "range": "stddev: 0.006823208348961318",
            "extra": "mean: 269.82467080000276 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 193659.99889644343,
            "unit": "iter/sec",
            "range": "stddev: 0.000013065738235192823",
            "extra": "mean: 5.163688968803174 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 180231.99003061096,
            "unit": "iter/sec",
            "range": "stddev: 0.000010596987048552626",
            "extra": "mean: 5.548404585834945 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 206113.6772068049,
            "unit": "iter/sec",
            "range": "stddev: 0.000005118419286238057",
            "extra": "mean: 4.851691617711746 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 206285.13113924963,
            "unit": "iter/sec",
            "range": "stddev: 0.000011676122161335179",
            "extra": "mean: 4.84765913314889 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 200296.19277316175,
            "unit": "iter/sec",
            "range": "stddev: 0.000005052368505245562",
            "extra": "mean: 4.992606130724182 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 185347.42672767615,
            "unit": "iter/sec",
            "range": "stddev: 0.00004347441047595545",
            "extra": "mean: 5.395273177810348 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 69.29207274424513,
            "unit": "iter/sec",
            "range": "stddev: 0.0008867097332505083",
            "extra": "mean: 14.431665274193323 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.272241464533995,
            "unit": "iter/sec",
            "range": "stddev: 0.0063967985607939525",
            "extra": "mean: 70.06607914285671 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 26.73030150979232,
            "unit": "iter/sec",
            "range": "stddev: 0.002748145921197514",
            "extra": "mean: 37.410726535713124 msec\nrounds: 28"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6b72a545782dfc9f883d35e8bf5413198a629a3",
          "message": "Bump pydocstyle from 6.2.3 to 6.3.0",
          "timestamp": "2023-01-18T04:09:33Z",
          "tree_id": "3b3f6febdf72fc4eaaf2820e32b1cbf670ff91c0",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f6b72a545782dfc9f883d35e8bf5413198a629a3"
        },
        "date": 1674015228135,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.8989546841667586,
            "unit": "iter/sec",
            "range": "stddev: 0.0005784294152549993",
            "extra": "mean: 256.4790004000031 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.7053256125542484,
            "unit": "iter/sec",
            "range": "stddev: 0.0004708884039257896",
            "extra": "mean: 269.8818146000008 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7531624674414678,
            "unit": "iter/sec",
            "range": "stddev: 0.0012497358936373363",
            "extra": "mean: 1.327734775999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.748705571323243,
            "unit": "iter/sec",
            "range": "stddev: 0.00357776653562822",
            "extra": "mean: 1.3356385183999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.3366556877550835,
            "unit": "iter/sec",
            "range": "stddev: 0.0005158911151293266",
            "extra": "mean: 230.5924361999928 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 237577.8946371089,
            "unit": "iter/sec",
            "range": "stddev: 2.702747830219013e-7",
            "extra": "mean: 4.209145811008477 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 221307.234835818,
            "unit": "iter/sec",
            "range": "stddev: 3.2400037021025736e-7",
            "extra": "mean: 4.518605100017962 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 250137.23444517568,
            "unit": "iter/sec",
            "range": "stddev: 2.58793363497403e-7",
            "extra": "mean: 3.997805453546649 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 246439.54581830418,
            "unit": "iter/sec",
            "range": "stddev: 3.368248275175189e-7",
            "extra": "mean: 4.057790305851658 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 238722.87246610376,
            "unit": "iter/sec",
            "range": "stddev: 2.599282852455229e-7",
            "extra": "mean: 4.188957638074625 usec\nrounds: 80001"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 224846.1206027556,
            "unit": "iter/sec",
            "range": "stddev: 0.00003735601064084737",
            "extra": "mean: 4.4474861177024225 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 84.11567924670778,
            "unit": "iter/sec",
            "range": "stddev: 0.0003424845525375532",
            "extra": "mean: 11.888390000002754 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.422071372702893,
            "unit": "iter/sec",
            "range": "stddev: 0.0015055100117140209",
            "extra": "mean: 64.84213280000782 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 28.751564703042956,
            "unit": "iter/sec",
            "range": "stddev: 0.000389485515829798",
            "extra": "mean: 34.78071577419798 msec\nrounds: 31"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d20cb0908943f121295eabac957a91fb74cf43bd",
          "message": "Merge pull request #440 from ClearcodeHQ/dependabot/pip/black-23.1.0\n\nBump black from 22.12.0 to 23.1.0",
          "timestamp": "2023-02-01T09:58:31+01:00",
          "tree_id": "91dea9c2af28eb7217db916a6b7105b7ed37347b",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/d20cb0908943f121295eabac957a91fb74cf43bd"
        },
        "date": 1675242419272,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.0180580426609125,
            "unit": "iter/sec",
            "range": "stddev: 0.005592228947524635",
            "extra": "mean: 331.3388893999985 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.887316549203607,
            "unit": "iter/sec",
            "range": "stddev: 0.025430494774222694",
            "extra": "mean: 346.3423504000019 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5705694119205785,
            "unit": "iter/sec",
            "range": "stddev: 0.013800917152850945",
            "extra": "mean: 1.7526351379999965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5949046513934558,
            "unit": "iter/sec",
            "range": "stddev: 0.03927086716080917",
            "extra": "mean: 1.680941639399998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.058843463012791,
            "unit": "iter/sec",
            "range": "stddev: 0.004716479388096905",
            "extra": "mean: 246.37560159999907 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 210283.91954829107,
            "unit": "iter/sec",
            "range": "stddev: 0.000002563477374184143",
            "extra": "mean: 4.75547536943429 usec\nrounds: 47847"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 198354.80567706938,
            "unit": "iter/sec",
            "range": "stddev: 0.000004073322196519933",
            "extra": "mean: 5.041470997320052 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 221306.0048556702,
            "unit": "iter/sec",
            "range": "stddev: 0.000010885796990428765",
            "extra": "mean: 4.518630213636421 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 226043.10544220146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034541470910161334",
            "extra": "mean: 4.423934974896623 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 208126.86055647884,
            "unit": "iter/sec",
            "range": "stddev: 0.000005606488284836616",
            "extra": "mean: 4.8047618521042965 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 199973.38668184943,
            "unit": "iter/sec",
            "range": "stddev: 0.00004286086515721124",
            "extra": "mean: 5.000665421499135 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 76.02303848693232,
            "unit": "iter/sec",
            "range": "stddev: 0.0013072838497261835",
            "extra": "mean: 13.153907287879463 msec\nrounds: 66"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.799581189907055,
            "unit": "iter/sec",
            "range": "stddev: 0.005569950153629074",
            "extra": "mean: 63.2928169411738 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.534622731869664,
            "unit": "iter/sec",
            "range": "stddev: 0.0049131718918744485",
            "extra": "mean: 36.31791180645306 msec\nrounds: 31"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc672b755740bbbb88b91789eb87e6315538ec20",
          "message": "Merge pull request #441 from ClearcodeHQ/publish-docs\n\nPublish documentation to the github-pages",
          "timestamp": "2023-02-03T21:14:46+01:00",
          "tree_id": "672a5ab7bde84d965fdf3f2519922d01e4e35c25",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/cc672b755740bbbb88b91789eb87e6315538ec20"
        },
        "date": 1675455650899,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.9209324215691654,
            "unit": "iter/sec",
            "range": "stddev: 0.0010155399064569746",
            "extra": "mean: 255.04137599999694 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.686812607246175,
            "unit": "iter/sec",
            "range": "stddev: 0.0008777597612384888",
            "extra": "mean: 271.23700240000517 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7679238546266364,
            "unit": "iter/sec",
            "range": "stddev: 0.0019283082955983447",
            "extra": "mean: 1.3022124445999907 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7672403518167725,
            "unit": "iter/sec",
            "range": "stddev: 0.0005635569011379669",
            "extra": "mean: 1.3033725320000031 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.410004146621099,
            "unit": "iter/sec",
            "range": "stddev: 0.0004287327602668991",
            "extra": "mean: 226.75715639999794 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 225703.7620647535,
            "unit": "iter/sec",
            "range": "stddev: 2.4562431068912506e-7",
            "extra": "mean: 4.430586317445183 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 206677.28499133757,
            "unit": "iter/sec",
            "range": "stddev: 3.761024620281271e-7",
            "extra": "mean: 4.838461082174138 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 242345.60142687653,
            "unit": "iter/sec",
            "range": "stddev: 2.2978137966119274e-7",
            "extra": "mean: 4.126338559941771 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 246253.62144935483,
            "unit": "iter/sec",
            "range": "stddev: 2.4843699411484594e-7",
            "extra": "mean: 4.0608539850678405 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 231928.9292476951,
            "unit": "iter/sec",
            "range": "stddev: 2.2127158037220905e-7",
            "extra": "mean: 4.311665660871575 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 217751.5048342793,
            "unit": "iter/sec",
            "range": "stddev: 0.00003585871115264277",
            "extra": "mean: 4.592390765616312 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 89.93528518976649,
            "unit": "iter/sec",
            "range": "stddev: 0.00042026829513779345",
            "extra": "mean: 11.119106342854934 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 16.219439615715807,
            "unit": "iter/sec",
            "range": "stddev: 0.002869621099619867",
            "extra": "mean: 61.65441123077095 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 28.907929909959055,
            "unit": "iter/sec",
            "range": "stddev: 0.00038463371923257167",
            "extra": "mean: 34.592584218750666 msec\nrounds: 32"
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
          "id": "7ab370de05b97bfc5fd3bc101feef2b7f70f5312",
          "message": "Branch is main",
          "timestamp": "2023-02-03T21:23:43+01:00",
          "tree_id": "0da3786310aa184a9fc92b2e0ca0d08ed04aa78c",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/7ab370de05b97bfc5fd3bc101feef2b7f70f5312"
        },
        "date": 1675456320590,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.9420738424227104,
            "unit": "iter/sec",
            "range": "stddev: 0.0003729375230614636",
            "extra": "mean: 253.6735839999949 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.753777076771152,
            "unit": "iter/sec",
            "range": "stddev: 0.0008833891401098911",
            "extra": "mean: 266.39834479999536 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7674825609684504,
            "unit": "iter/sec",
            "range": "stddev: 0.002317912594116707",
            "extra": "mean: 1.302961201800008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7637774291725866,
            "unit": "iter/sec",
            "range": "stddev: 0.0013974943349198232",
            "extra": "mean: 1.309281947599993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.35958211713897,
            "unit": "iter/sec",
            "range": "stddev: 0.0005636239470318186",
            "extra": "mean: 229.379782999996 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 233829.6734716615,
            "unit": "iter/sec",
            "range": "stddev: 2.42017020303398e-7",
            "extra": "mean: 4.276617185291468 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 210533.5538582667,
            "unit": "iter/sec",
            "range": "stddev: 3.319109738638243e-7",
            "extra": "mean: 4.74983669668736 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 246468.01248833237,
            "unit": "iter/sec",
            "range": "stddev: 3.157828654541166e-7",
            "extra": "mean: 4.057321637416698 usec\nrounds: 78119"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 237330.26262285435,
            "unit": "iter/sec",
            "range": "stddev: 2.4534862149431274e-7",
            "extra": "mean: 4.213537662447698 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 234180.79453387245,
            "unit": "iter/sec",
            "range": "stddev: 3.7713980511164406e-7",
            "extra": "mean: 4.270205001184919 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 215460.34046598768,
            "unit": "iter/sec",
            "range": "stddev: 0.00003687540939116959",
            "extra": "mean: 4.6412253774279115 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 81.70858250259148,
            "unit": "iter/sec",
            "range": "stddev: 0.0003987034220905358",
            "extra": "mean: 12.238616426472504 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.155292968033951,
            "unit": "iter/sec",
            "range": "stddev: 0.00283290937410342",
            "extra": "mean: 65.9835479333348 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 28.610662048131488,
            "unit": "iter/sec",
            "range": "stddev: 0.00020497703172297395",
            "extra": "mean: 34.95200489655598 msec\nrounds: 29"
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
          "id": "81c93969ee43f0c73ea1735bcdf3a64172c6029f",
          "message": "Publish documentation on tag only",
          "timestamp": "2023-02-03T21:31:04+01:00",
          "tree_id": "96fc4bcb7bd43110c801b601a750d1be8ab48eba",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/81c93969ee43f0c73ea1735bcdf3a64172c6029f"
        },
        "date": 1675456627239,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.810308585034742,
            "unit": "iter/sec",
            "range": "stddev: 0.000745120377183229",
            "extra": "mean: 262.4459351999917 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.765723064936132,
            "unit": "iter/sec",
            "range": "stddev: 0.001080851778139795",
            "extra": "mean: 265.55325039998934 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7495056627157017,
            "unit": "iter/sec",
            "range": "stddev: 0.011509729667048814",
            "extra": "mean: 1.3342127347999964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7638900425750463,
            "unit": "iter/sec",
            "range": "stddev: 0.0014496578231348062",
            "extra": "mean: 1.3090889319999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.330832667819941,
            "unit": "iter/sec",
            "range": "stddev: 0.0007890829982320304",
            "extra": "mean: 230.90247920000593 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 223102.42080943246,
            "unit": "iter/sec",
            "range": "stddev: 2.8300836463290846e-7",
            "extra": "mean: 4.482246299129899 usec\nrounds: 68023"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 206940.36764645277,
            "unit": "iter/sec",
            "range": "stddev: 3.679680572060291e-7",
            "extra": "mean: 4.83230996143029 usec\nrounds: 71938"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 235305.39169890207,
            "unit": "iter/sec",
            "range": "stddev: 3.1457586730854995e-7",
            "extra": "mean: 4.249796372195351 usec\nrounds: 79994"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 234889.27694674488,
            "unit": "iter/sec",
            "range": "stddev: 3.4832166067135056e-7",
            "extra": "mean: 4.257325038412564 usec\nrounds: 84027"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 223558.5509151533,
            "unit": "iter/sec",
            "range": "stddev: 3.625928782686955e-7",
            "extra": "mean: 4.473101099941948 usec\nrounds: 75183"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 214337.87667918426,
            "unit": "iter/sec",
            "range": "stddev: 0.00003109860941750625",
            "extra": "mean: 4.665530962111637 usec\nrounds: 77514"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 84.28012982181934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002600028543428319",
            "extra": "mean: 11.865192924051588 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 13.683066766927151,
            "unit": "iter/sec",
            "range": "stddev: 0.0012804721489884875",
            "extra": "mean: 73.08303153333023 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 26.59266033134728,
            "unit": "iter/sec",
            "range": "stddev: 0.00018570488693906762",
            "extra": "mean: 37.604361035710504 msec\nrounds: 28"
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
          "id": "0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc",
          "message": "Release 1.2.0",
          "timestamp": "2023-02-03T21:32:46+01:00",
          "tree_id": "10f78c8f4e7a2858db3db56f43ad1e29bc1f49f5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc"
        },
        "date": 1675456698888,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.2920054421458826,
            "unit": "iter/sec",
            "range": "stddev: 0.0018629961935057106",
            "extra": "mean: 303.76620499999945 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.1190264911484316,
            "unit": "iter/sec",
            "range": "stddev: 0.0010381937455809008",
            "extra": "mean: 320.6128587999899 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6393458481704483,
            "unit": "iter/sec",
            "range": "stddev: 0.0014236389365852203",
            "extra": "mean: 1.5640986843999998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6395775908675497,
            "unit": "iter/sec",
            "range": "stddev: 0.0014388395317343748",
            "extra": "mean: 1.5635319533999905 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.627146461035161,
            "unit": "iter/sec",
            "range": "stddev: 0.0006456837573775014",
            "extra": "mean: 275.6988202000002 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 196887.40585737262,
            "unit": "iter/sec",
            "range": "stddev: 7.117530627336333e-7",
            "extra": "mean: 5.079045029037617 usec\nrounds: 51811"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 180711.17751640078,
            "unit": "iter/sec",
            "range": "stddev: 7.253819352136651e-7",
            "extra": "mean: 5.533692014757875 usec\nrounds: 58821"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 210879.55139331246,
            "unit": "iter/sec",
            "range": "stddev: 6.388099290167213e-7",
            "extra": "mean: 4.742043471701508 usec\nrounds: 59165"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 210886.8302633834,
            "unit": "iter/sec",
            "range": "stddev: 6.73333204457324e-7",
            "extra": "mean: 4.741879797572317 usec\nrounds: 59874"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 197220.86485669765,
            "unit": "iter/sec",
            "range": "stddev: 6.596788461146793e-7",
            "extra": "mean: 5.070457432212401 usec\nrounds: 61725"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 185740.74402475657,
            "unit": "iter/sec",
            "range": "stddev: 0.000042036763397201134",
            "extra": "mean: 5.383848359446188 usec\nrounds: 56812"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 62.00161672805407,
            "unit": "iter/sec",
            "range": "stddev: 0.00045356631061339625",
            "extra": "mean: 16.128611684209954 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.600364003181319,
            "unit": "iter/sec",
            "range": "stddev: 0.0009548670295375356",
            "extra": "mean: 86.2041915000044 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 23.418604570830365,
            "unit": "iter/sec",
            "range": "stddev: 0.00017587460704093205",
            "extra": "mean: 42.701092500002126 msec\nrounds: 24"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3ad0af6782add57837c6e45a9be88ac488b647e",
          "message": "Bump mypy from 0.991 to 1.0.0",
          "timestamp": "2023-02-07T04:12:30Z",
          "tree_id": "16ec4634a8db7fdf2d185c96629ab6c03df5aa70",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/e3ad0af6782add57837c6e45a9be88ac488b647e"
        },
        "date": 1675743456884,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.268386299569565,
            "unit": "iter/sec",
            "range": "stddev: 0.0016404126556250945",
            "extra": "mean: 234.28057580000257 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.9947894714549355,
            "unit": "iter/sec",
            "range": "stddev: 0.0025372222817310755",
            "extra": "mean: 250.3260828000009 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7792263427349477,
            "unit": "iter/sec",
            "range": "stddev: 0.0004124023200534425",
            "extra": "mean: 1.2833241706000025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7747286536481072,
            "unit": "iter/sec",
            "range": "stddev: 0.0014846720104714744",
            "extra": "mean: 1.2907745122000023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.716489638259062,
            "unit": "iter/sec",
            "range": "stddev: 0.002395846449302094",
            "extra": "mean: 212.022091999998 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 227081.89590005876,
            "unit": "iter/sec",
            "range": "stddev: 2.3554841192973838e-7",
            "extra": "mean: 4.403697600094509 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 212656.50513748755,
            "unit": "iter/sec",
            "range": "stddev: 2.4170495169043843e-7",
            "extra": "mean: 4.702419045932669 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 239809.62752656714,
            "unit": "iter/sec",
            "range": "stddev: 2.6244870218925403e-7",
            "extra": "mean: 4.1699743680608305 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 243789.83202047256,
            "unit": "iter/sec",
            "range": "stddev: 2.1095089216777785e-7",
            "extra": "mean: 4.101893798081061 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 230565.60888449376,
            "unit": "iter/sec",
            "range": "stddev: 2.5871637877530574e-7",
            "extra": "mean: 4.337160276583005 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 221365.79947580813,
            "unit": "iter/sec",
            "range": "stddev: 0.000027174774349645777",
            "extra": "mean: 4.517409655728163 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 94.2475765899604,
            "unit": "iter/sec",
            "range": "stddev: 0.00010887078084262319",
            "extra": "mean: 10.610352395061197 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 19.78280374391189,
            "unit": "iter/sec",
            "range": "stddev: 0.0006484008128431127",
            "extra": "mean: 50.548952157893574 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 34.80858851160602,
            "unit": "iter/sec",
            "range": "stddev: 0.00005616472069382283",
            "extra": "mean: 28.72854208571474 msec\nrounds: 35"
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
      },
      {
        "commit": {
          "author": {
            "email": "g.sliwinski@clearcode.cc",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de54f7c9f03b06b5b153e6929139c5ff3fe8a259",
          "message": "Merge pull request #263 from ClearcodeHQ/cfg\n\nMove package configuration to setup.cfg",
          "timestamp": "2021-06-08T15:45:01+02:00",
          "tree_id": "e501787f0beeb09692623bde2463ebf851fde4ec",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/de54f7c9f03b06b5b153e6929139c5ff3fe8a259"
        },
        "date": 1623160001874,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.0605576946463766,
            "unit": "iter/sec",
            "range": "stddev: 0.0051472541851912785",
            "extra": "mean: 485.30550859999835 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 1.9821353447578716,
            "unit": "iter/sec",
            "range": "stddev: 0.0057124045688416005",
            "extra": "mean: 504.5064166000003 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.495661879301933,
            "unit": "iter/sec",
            "range": "stddev: 0.028687756295488746",
            "extra": "mean: 2.0175043547999962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.49322913947730795,
            "unit": "iter/sec",
            "range": "stddev: 0.020197650612247632",
            "extra": "mean: 2.0274552331999987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.1547782611963067,
            "unit": "iter/sec",
            "range": "stddev: 0.011530306449298472",
            "extra": "mean: 464.0848749999975 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 107231.5836137282,
            "unit": "iter/sec",
            "range": "stddev: 0.00001056093955700952",
            "extra": "mean: 9.325610667116699 usec\nrounds: 43667"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 102505.5790859399,
            "unit": "iter/sec",
            "range": "stddev: 0.000012774804000135513",
            "extra": "mean: 9.755566564446289 usec\nrounds: 51544"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 112026.47397143573,
            "unit": "iter/sec",
            "range": "stddev: 0.000011742163395217424",
            "extra": "mean: 8.926461438525486 usec\nrounds: 49259"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 112807.72849600561,
            "unit": "iter/sec",
            "range": "stddev: 0.000014824265935281707",
            "extra": "mean: 8.864640865766647 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 105977.13287998298,
            "unit": "iter/sec",
            "range": "stddev: 0.000023231495877989673",
            "extra": "mean: 9.435997868827801 usec\nrounds: 47392"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 108265.84479622556,
            "unit": "iter/sec",
            "range": "stddev: 0.000016332261630347824",
            "extra": "mean: 9.236523317969462 usec\nrounds: 49018"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 83.24469104132253,
            "unit": "iter/sec",
            "range": "stddev: 0.0013390961786546411",
            "extra": "mean: 12.01277808219147 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 8.085719755357207,
            "unit": "iter/sec",
            "range": "stddev: 0.0032606302746563363",
            "extra": "mean: 123.67482799999942 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 12.513585385145985,
            "unit": "iter/sec",
            "range": "stddev: 0.002982755441196575",
            "extra": "mean: 79.91314792857297 msec\nrounds: 14"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c64d7db2d1b6a436ed4d1ca6e1bc3cf4d8d7252c",
          "message": "Merge pull request #265 from ClearcodeHQ/issue-264\n\nPEP 561 Support",
          "timestamp": "2021-06-08T16:30:18+02:00",
          "tree_id": "8db6fe2f57f1be7c63cc5f151a3b83e8bdf30329",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c64d7db2d1b6a436ed4d1ca6e1bc3cf4d8d7252c"
        },
        "date": 1623162718034,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.149006924043564,
            "unit": "iter/sec",
            "range": "stddev: 0.004980248161608217",
            "extra": "mean: 465.3312136000025 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 1.4583807723938138,
            "unit": "iter/sec",
            "range": "stddev: 0.44417725794711815",
            "extra": "mean: 685.6919804000029 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.49112833530029965,
            "unit": "iter/sec",
            "range": "stddev: 0.0255773387332668",
            "extra": "mean: 2.0361276841999993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.49379846292673946,
            "unit": "iter/sec",
            "range": "stddev: 0.01942508293637529",
            "extra": "mean: 2.025117684800006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.3163711019838904,
            "unit": "iter/sec",
            "range": "stddev: 0.006639857813568424",
            "extra": "mean: 431.70975460000136 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 114359.26244667059,
            "unit": "iter/sec",
            "range": "stddev: 0.000006145941467985279",
            "extra": "mean: 8.744372590426002 usec\nrounds: 39840"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 108226.38421230181,
            "unit": "iter/sec",
            "range": "stddev: 0.000012415177809782323",
            "extra": "mean: 9.239891060560192 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 118560.37711773874,
            "unit": "iter/sec",
            "range": "stddev: 0.00000521589728956639",
            "extra": "mean: 8.434521079558731 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 116514.64804683845,
            "unit": "iter/sec",
            "range": "stddev: 0.000006057992150581161",
            "extra": "mean: 8.582611858364828 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 114272.30854676403,
            "unit": "iter/sec",
            "range": "stddev: 0.000009183456064777326",
            "extra": "mean: 8.751026497296731 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 112895.30323611472,
            "unit": "iter/sec",
            "range": "stddev: 0.000006372548098892105",
            "extra": "mean: 8.85776441831731 usec\nrounds: 49503"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 79.82164222875426,
            "unit": "iter/sec",
            "range": "stddev: 0.0011606022465465696",
            "extra": "mean: 12.52793067241316 msec\nrounds: 58"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 9.04873830975966,
            "unit": "iter/sec",
            "range": "stddev: 0.007622257146555417",
            "extra": "mean: 110.51264449999998 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 13.175569069297339,
            "unit": "iter/sec",
            "range": "stddev: 0.0017812425381735306",
            "extra": "mean: 75.8980500000013 msec\nrounds: 14"
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
          "id": "c81cc92dae42e72b9a4161fdab55d9210eb15f07",
          "message": "\"Release 1.1.0\"",
          "timestamp": "2021-06-08T16:43:59+02:00",
          "tree_id": "00d2d952fcf8c150ada66ea9e957a6a9763412a5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c81cc92dae42e72b9a4161fdab55d9210eb15f07"
        },
        "date": 1623163543809,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.2943716521667574,
            "unit": "iter/sec",
            "range": "stddev: 0.0010035049367696077",
            "extra": "mean: 435.84917859999734 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.171286334555234,
            "unit": "iter/sec",
            "range": "stddev: 0.004534149532072651",
            "extra": "mean: 460.5564839999971 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5502992582175992,
            "unit": "iter/sec",
            "range": "stddev: 0.005860023036656719",
            "extra": "mean: 1.8171930728000008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5449424345928556,
            "unit": "iter/sec",
            "range": "stddev: 0.003522711770125958",
            "extra": "mean: 1.8350562123999992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.40680774929557,
            "unit": "iter/sec",
            "range": "stddev: 0.004707780299940121",
            "extra": "mean: 415.4881087999996 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 121478.31826416486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012206194003615728",
            "extra": "mean: 8.231921665440046 usec\nrounds: 37876"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 115885.1422250805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011119989184936893",
            "extra": "mean: 8.62923391902758 usec\nrounds: 38757"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 126787.05026435635,
            "unit": "iter/sec",
            "range": "stddev: 9.760019550027156e-7",
            "extra": "mean: 7.887240833468069 usec\nrounds: 41319"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 127679.63441991902,
            "unit": "iter/sec",
            "range": "stddev: 9.764451222192003e-7",
            "extra": "mean: 7.832102625788786 usec\nrounds: 44443"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 125373.58406949315,
            "unit": "iter/sec",
            "range": "stddev: 7.671624614532314e-7",
            "extra": "mean: 7.97616186393548 usec\nrounds: 45044"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 122558.63948576702,
            "unit": "iter/sec",
            "range": "stddev: 8.664220304920284e-7",
            "extra": "mean: 8.159359504934224 usec\nrounds: 40158"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 83.49655773562648,
            "unit": "iter/sec",
            "range": "stddev: 0.0002880719889555511",
            "extra": "mean: 11.9765416338034 msec\nrounds: 71"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 8.894040712560523,
            "unit": "iter/sec",
            "range": "stddev: 0.0020736074457127556",
            "extra": "mean: 112.43483499999722 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 12.765023088901938,
            "unit": "iter/sec",
            "range": "stddev: 0.0005244310616028234",
            "extra": "mean: 78.33906707692616 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fizyk@fizyk.dev",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "committer": {
            "email": "fizyk@fizyk.dev",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "distinct": true,
          "id": "af7c74b57d7edbab8169eb4132189ec1359af747",
          "message": "Dependabot to keep github-actions up to date",
          "timestamp": "2021-08-05T17:15:51+02:00",
          "tree_id": "cf1343692cd19d9199d93b17590da7e6aacc357a",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/af7c74b57d7edbab8169eb4132189ec1359af747"
        },
        "date": 1628177019041,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.1659980993687378,
            "unit": "iter/sec",
            "range": "stddev: 0.005633096368261482",
            "extra": "mean: 461.6809221999972 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.053053753707037,
            "unit": "iter/sec",
            "range": "stddev: 0.010429932026721076",
            "extra": "mean: 487.0793072000083 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5303613175502282,
            "unit": "iter/sec",
            "range": "stddev: 0.010778667891352076",
            "extra": "mean: 1.8855070437999928 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5218302808986017,
            "unit": "iter/sec",
            "range": "stddev: 0.019010557930893103",
            "extra": "mean: 1.9163318738000044 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.161018238254907,
            "unit": "iter/sec",
            "range": "stddev: 0.003835645337608518",
            "extra": "mean: 462.74482199999056 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 105821.5328966266,
            "unit": "iter/sec",
            "range": "stddev: 0.000013441362527183187",
            "extra": "mean: 9.44987256021764 usec\nrounds: 9785"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 101069.27153591276,
            "unit": "iter/sec",
            "range": "stddev: 0.00001016228864766337",
            "extra": "mean: 9.894204091939772 usec\nrounds: 45455"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 108433.93206216398,
            "unit": "iter/sec",
            "range": "stddev: 0.000009279717071282283",
            "extra": "mean: 9.222205457113839 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 112568.30835991156,
            "unit": "iter/sec",
            "range": "stddev: 0.000010837362110085862",
            "extra": "mean: 8.88349496025762 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 110970.87314471671,
            "unit": "iter/sec",
            "range": "stddev: 0.000019371768810469526",
            "extra": "mean: 9.011373630411141 usec\nrounds: 44445"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 109738.2768966601,
            "unit": "iter/sec",
            "range": "stddev: 0.000005176708159932827",
            "extra": "mean: 9.112590686490313 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 99.10128117819393,
            "unit": "iter/sec",
            "range": "stddev: 0.0007368555671117847",
            "extra": "mean: 10.090686902441764 msec\nrounds: 82"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 8.709163137934231,
            "unit": "iter/sec",
            "range": "stddev: 0.007382473052866125",
            "extra": "mean: 114.8215946999926 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 13.079170929019984,
            "unit": "iter/sec",
            "range": "stddev: 0.0030410872749991563",
            "extra": "mean: 76.45744561539495 msec\nrounds: 13"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67bf963ab7af687f1a24927117f34b5698b15970",
          "message": "Merge pull request #271 from ClearcodeHQ/dependabot/github_actions/codecov/codecov-action-2.0.2\n\nBump codecov/codecov-action from 1 to 2.0.2",
          "timestamp": "2021-08-05T17:18:53+02:00",
          "tree_id": "be1179ce6c40e949326ce2cdb8b69eb029f573fa",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/67bf963ab7af687f1a24927117f34b5698b15970"
        },
        "date": 1628177270790,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.4559292074908514,
            "unit": "iter/sec",
            "range": "stddev: 0.003984563447306972",
            "extra": "mean: 407.17786040000306 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.2842885534097146,
            "unit": "iter/sec",
            "range": "stddev: 0.014204226532848717",
            "extra": "mean: 437.7730643999939 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.586143925901088,
            "unit": "iter/sec",
            "range": "stddev: 0.016561316325974986",
            "extra": "mean: 1.7060656194000217 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5687128278049437,
            "unit": "iter/sec",
            "range": "stddev: 0.02122103733377858",
            "extra": "mean: 1.7583566804000044 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.5738879342927126,
            "unit": "iter/sec",
            "range": "stddev: 0.0020095088627827516",
            "extra": "mean: 388.5173036000083 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 120018.40400493133,
            "unit": "iter/sec",
            "range": "stddev: 0.00003851647478277322",
            "extra": "mean: 8.332055473416492 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 113598.90331951813,
            "unit": "iter/sec",
            "range": "stddev: 0.00001861324899393249",
            "extra": "mean: 8.802901883544713 usec\nrounds: 52081"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 128470.32092436434,
            "unit": "iter/sec",
            "range": "stddev: 0.000003447215707544245",
            "extra": "mean: 7.783898979973284 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 132541.35490333766,
            "unit": "iter/sec",
            "range": "stddev: 0.000003967801114938461",
            "extra": "mean: 7.544814980421013 usec\nrounds: 52081"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 124534.88922806119,
            "unit": "iter/sec",
            "range": "stddev: 0.000007956312453269437",
            "extra": "mean: 8.029878263019903 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 124599.52453397546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046648322084890105",
            "extra": "mean: 8.025712808617682 usec\nrounds: 49998"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 108.72578228182954,
            "unit": "iter/sec",
            "range": "stddev: 0.0009379021387514483",
            "extra": "mean: 9.197450494381238 msec\nrounds: 89"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 10.732371027838397,
            "unit": "iter/sec",
            "range": "stddev: 0.00252824305495837",
            "extra": "mean: 93.17605563636664 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 14.939932446911584,
            "unit": "iter/sec",
            "range": "stddev: 0.004214860685704102",
            "extra": "mean: 66.93470693749504 msec\nrounds: 16"
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
          "id": "34b4f52441bb7fa8b7c3f31f3063e1ae64787a7e",
          "message": "Update the frequency of the dependencies updates",
          "timestamp": "2021-09-07T16:33:47+02:00",
          "tree_id": "1d7053e72e76e7f71a9cec5926f1bc40d802cb38",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/34b4f52441bb7fa8b7c3f31f3063e1ae64787a7e"
        },
        "date": 1631025333470,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.178438396909109,
            "unit": "iter/sec",
            "range": "stddev: 0.004905242027130173",
            "extra": "mean: 459.0444243999997 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.0249295524578854,
            "unit": "iter/sec",
            "range": "stddev: 0.00213214135125079",
            "extra": "mean: 493.84434079999835 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5469979556021429,
            "unit": "iter/sec",
            "range": "stddev: 0.045211655309200585",
            "extra": "mean: 1.8281603975999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5450751994973341,
            "unit": "iter/sec",
            "range": "stddev: 0.015963247524066023",
            "extra": "mean: 1.8346092446000029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.2124047998176875,
            "unit": "iter/sec",
            "range": "stddev: 0.009762095536933385",
            "extra": "mean: 451.99684980000256 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 107106.46954238667,
            "unit": "iter/sec",
            "range": "stddev: 0.00000501386466343242",
            "extra": "mean: 9.33650417451447 usec\nrounds: 39526"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 102715.62554086967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057415561400268145",
            "extra": "mean: 9.73561709559086 usec\nrounds: 44643"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 111732.91285271487,
            "unit": "iter/sec",
            "range": "stddev: 0.000005085627235645645",
            "extra": "mean: 8.94991434903509 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 112136.57882732926,
            "unit": "iter/sec",
            "range": "stddev: 0.000006169131498495023",
            "extra": "mean: 8.917696709294345 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 111729.08254006595,
            "unit": "iter/sec",
            "range": "stddev: 0.000005527035420399058",
            "extra": "mean: 8.95022117129979 usec\nrounds: 22625"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 107169.44409811485,
            "unit": "iter/sec",
            "range": "stddev: 0.000007203060919113544",
            "extra": "mean: 9.33101788868559 usec\nrounds: 42373"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 88.13161811197878,
            "unit": "iter/sec",
            "range": "stddev: 0.0008856052450623515",
            "extra": "mean: 11.346665605633317 msec\nrounds: 71"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 8.235001348816574,
            "unit": "iter/sec",
            "range": "stddev: 0.007402966558031743",
            "extra": "mean: 121.43288842857406 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 11.931150692862875,
            "unit": "iter/sec",
            "range": "stddev: 0.0030950280446004194",
            "extra": "mean: 83.81421253845971 msec\nrounds: 13"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffe410329dc26906d9cbfa06cf96bfb180a693a6",
          "message": "Merge pull request #288 from ClearcodeHQ/dependabot/pip/black-21.9b0\n\nBump black from 21.8b0 to 21.9b0",
          "timestamp": "2021-09-16T15:18:19+02:00",
          "tree_id": "29d583543f24099fe189c345b0086f012970d47e",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/ffe410329dc26906d9cbfa06cf96bfb180a693a6"
        },
        "date": 1631798395778,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.23103406110241,
            "unit": "iter/sec",
            "range": "stddev: 0.0018978175514799166",
            "extra": "mean: 448.22265040000104 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.186318207282936,
            "unit": "iter/sec",
            "range": "stddev: 0.004729031176567408",
            "extra": "mean: 457.38996120000195 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5342191561637369,
            "unit": "iter/sec",
            "range": "stddev: 0.006638203549509466",
            "extra": "mean: 1.8718909429999968 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5311369291073835,
            "unit": "iter/sec",
            "range": "stddev: 0.006995352045800847",
            "extra": "mean: 1.882753665200002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.3667920310331745,
            "unit": "iter/sec",
            "range": "stddev: 0.003452152197636998",
            "extra": "mean: 422.51283040000374 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 122488.40543493778,
            "unit": "iter/sec",
            "range": "stddev: 5.230113653698822e-7",
            "extra": "mean: 8.164038028327264 usec\nrounds: 37735"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 116246.62594117939,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013381155865280684",
            "extra": "mean: 8.602400215090961 usec\nrounds: 41840"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 127322.32151337076,
            "unit": "iter/sec",
            "range": "stddev: 0.00000137718320153872",
            "extra": "mean: 7.854082364457869 usec\nrounds: 42919"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 128273.55237985509,
            "unit": "iter/sec",
            "range": "stddev: 0.000001294162341798313",
            "extra": "mean: 7.795839293814136 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 126445.90989840083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014012484635220852",
            "extra": "mean: 7.908519941874743 usec\nrounds: 44053"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 120411.51858357772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012036437541978297",
            "extra": "mean: 8.30485332103755 usec\nrounds: 45453"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 78.84400387095017,
            "unit": "iter/sec",
            "range": "stddev: 0.00030579344583849856",
            "extra": "mean: 12.68327267647105 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 8.158207173276681,
            "unit": "iter/sec",
            "range": "stddev: 0.0013418927317177685",
            "extra": "mean: 122.57595066666562 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 12.499780869226216,
            "unit": "iter/sec",
            "range": "stddev: 0.0008882448546063715",
            "extra": "mean: 80.00140246153802 msec\nrounds: 13"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd15de8fd8266e0672a1948babd860707ddea963",
          "message": "Merge pull request #431 from ClearcodeHQ/pipenv\n\nMove dependency management to pipenv - closes #423",
          "timestamp": "2023-01-12T17:30:27+01:00",
          "tree_id": "6d0eadca1984cc719693c3efb59b19453926a281",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/bd15de8fd8266e0672a1948babd860707ddea963"
        },
        "date": 1673541136687,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.535831126451974,
            "unit": "iter/sec",
            "range": "stddev: 0.001619055224156091",
            "extra": "mean: 394.3480263999902 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.4185752059208627,
            "unit": "iter/sec",
            "range": "stddev: 0.0014342292593813879",
            "extra": "mean: 413.46657219999656 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6399108320193004,
            "unit": "iter/sec",
            "range": "stddev: 0.002123998856638817",
            "extra": "mean: 1.5627177255999924 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6366705178968205,
            "unit": "iter/sec",
            "range": "stddev: 0.0010019128310948132",
            "extra": "mean: 1.5706711271999894 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.6708813159587206,
            "unit": "iter/sec",
            "range": "stddev: 0.0008716734945755896",
            "extra": "mean: 374.4082502000083 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 136968.0970120143,
            "unit": "iter/sec",
            "range": "stddev: 3.9063908966566317e-7",
            "extra": "mean: 7.300970239166599 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 132605.775820987,
            "unit": "iter/sec",
            "range": "stddev: 3.103978310915001e-7",
            "extra": "mean: 7.541149650600166 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 144863.4359566375,
            "unit": "iter/sec",
            "range": "stddev: 2.6354802943339695e-7",
            "extra": "mean: 6.903053164494413 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 144181.08986996138,
            "unit": "iter/sec",
            "range": "stddev: 2.837943575982861e-7",
            "extra": "mean: 6.935722298270265 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 141703.1584184414,
            "unit": "iter/sec",
            "range": "stddev: 2.867332303311526e-7",
            "extra": "mean: 7.057005723521395 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 137804.47897173077,
            "unit": "iter/sec",
            "range": "stddev: 2.993119703096186e-7",
            "extra": "mean: 7.256658183114209 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 98.01576801270872,
            "unit": "iter/sec",
            "range": "stddev: 0.00007488594610057775",
            "extra": "mean: 10.202440079542509 msec\nrounds: 88"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 12.310146271979377,
            "unit": "iter/sec",
            "range": "stddev: 0.005000221534451837",
            "extra": "mean: 81.23380323077247 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 18.266154085371443,
            "unit": "iter/sec",
            "range": "stddev: 0.002072343600746884",
            "extra": "mean: 54.746061777769405 msec\nrounds: 18"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e80e98c27426bc0d25bea678e699040bfc0844f",
          "message": "Merge pull request #432 from ClearcodeHQ/automerge-shared\n\nMigrate to shared automerge action based on the github application",
          "timestamp": "2023-01-12T21:43:55+01:00",
          "tree_id": "f4730074b3f6e0be335f7e8d350c4bf3b95eaeef",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/3e80e98c27426bc0d25bea678e699040bfc0844f"
        },
        "date": 1673556318850,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5613458702934824,
            "unit": "iter/sec",
            "range": "stddev: 0.0004176809323548261",
            "extra": "mean: 390.419744400009 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.404305542656741,
            "unit": "iter/sec",
            "range": "stddev: 0.0008715085283577868",
            "extra": "mean: 415.920515199997 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6266748642456828,
            "unit": "iter/sec",
            "range": "stddev: 0.004237944999924475",
            "extra": "mean: 1.5957238068000095 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6270956236085338,
            "unit": "iter/sec",
            "range": "stddev: 0.001967355295900175",
            "extra": "mean: 1.5946531315999948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.736256954351601,
            "unit": "iter/sec",
            "range": "stddev: 0.0006741192993155355",
            "extra": "mean: 365.4627532000063 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 141988.68949159357,
            "unit": "iter/sec",
            "range": "stddev: 3.39779318781385e-7",
            "extra": "mean: 7.0428144916374125 usec\nrounds: 53189"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 136902.07875969342,
            "unit": "iter/sec",
            "range": "stddev: 3.0554488722611975e-7",
            "extra": "mean: 7.30449098406546 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 151344.71490943027,
            "unit": "iter/sec",
            "range": "stddev: 3.3560011586932935e-7",
            "extra": "mean: 6.607432579316914 usec\nrounds: 56177"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 150026.86563449632,
            "unit": "iter/sec",
            "range": "stddev: 3.066822671425794e-7",
            "extra": "mean: 6.665472852284036 usec\nrounds: 56819"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 145513.9026490082,
            "unit": "iter/sec",
            "range": "stddev: 4.911964292832054e-7",
            "extra": "mean: 6.872195589531293 usec\nrounds: 54052"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 140503.85386883738,
            "unit": "iter/sec",
            "range": "stddev: 4.609122665405992e-7",
            "extra": "mean: 7.117242498796625 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 91.47363376646591,
            "unit": "iter/sec",
            "range": "stddev: 0.0003550678423906601",
            "extra": "mean: 10.932111897435066 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 8.932069665680066,
            "unit": "iter/sec",
            "range": "stddev: 0.0013614077337837007",
            "extra": "mean: 111.95613530001083 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 14.327717531595109,
            "unit": "iter/sec",
            "range": "stddev: 0.00023995828121468996",
            "extra": "mean: 69.79478746665866 msec\nrounds: 15"
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
          "id": "563fe4087960fe21b8c0cc02eba8ffd5157b2c22",
          "message": "Test attempt at automerge change with app_id as regular input",
          "timestamp": "2023-01-13T10:03:11+01:00",
          "tree_id": "3525d6b65c2a3ff0f21046981be3c5b641701100",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/563fe4087960fe21b8c0cc02eba8ffd5157b2c22"
        },
        "date": 1673600693784,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.4949286197204703,
            "unit": "iter/sec",
            "range": "stddev: 0.012861395169416647",
            "extra": "mean: 400.813070199996 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.336192397517367,
            "unit": "iter/sec",
            "range": "stddev: 0.00900742658920141",
            "extra": "mean: 428.046937000002 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6025860427141908,
            "unit": "iter/sec",
            "range": "stddev: 0.030669250129842684",
            "extra": "mean: 1.6595140430000044 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6019746588459141,
            "unit": "iter/sec",
            "range": "stddev: 0.031546025824328625",
            "extra": "mean: 1.6611994962000012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.5439946438777605,
            "unit": "iter/sec",
            "range": "stddev: 0.017819489865522398",
            "extra": "mean: 393.08258859999796 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 141030.44641574516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015734269378196177",
            "extra": "mean: 7.090667479361793 usec\nrounds: 47170"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 129445.46301899552,
            "unit": "iter/sec",
            "range": "stddev: 0.000001520810703027604",
            "extra": "mean: 7.7252610997517515 usec\nrounds: 50249"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 137724.0625935283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012261626366771111",
            "extra": "mean: 7.260895308841915 usec\nrounds: 52908"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 137559.234942003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011128334297062364",
            "extra": "mean: 7.2695955340374985 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 139558.59033106547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014868157151348142",
            "extra": "mean: 7.1654492756609764 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 133063.5627896898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014931419062774437",
            "extra": "mean: 7.515205357762173 usec\nrounds: 56180"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 91.98639695833413,
            "unit": "iter/sec",
            "range": "stddev: 0.00047697081565375586",
            "extra": "mean: 10.871172619718509 msec\nrounds: 71"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 9.441811705404628,
            "unit": "iter/sec",
            "range": "stddev: 0.005961749269943847",
            "extra": "mean: 105.91187700000262 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 13.582265288507184,
            "unit": "iter/sec",
            "range": "stddev: 0.003461389827694279",
            "extra": "mean: 73.62542099999796 msec\nrounds: 15"
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
          "id": "b4dfa220711777733283a10bdde86ff1d5c4000f",
          "message": "Revert these changes",
          "timestamp": "2023-01-13T12:54:14+01:00",
          "tree_id": "f4730074b3f6e0be335f7e8d350c4bf3b95eaeef",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/b4dfa220711777733283a10bdde86ff1d5c4000f"
        },
        "date": 1673610967977,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 1.8195868786878178,
            "unit": "iter/sec",
            "range": "stddev: 0.011946542166367856",
            "extra": "mean: 549.5752974000027 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 1.7170709808145568,
            "unit": "iter/sec",
            "range": "stddev: 0.01006726321976591",
            "extra": "mean: 582.3871064000002 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.46305374447806835,
            "unit": "iter/sec",
            "range": "stddev: 0.06600497446129949",
            "extra": "mean: 2.159576532799991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.4876266692450644,
            "unit": "iter/sec",
            "range": "stddev: 0.028534922914803335",
            "extra": "mean: 2.0507491962000017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 1.913003600885747,
            "unit": "iter/sec",
            "range": "stddev: 0.01404344113889373",
            "extra": "mean: 522.7381691999881 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 81845.96659887955,
            "unit": "iter/sec",
            "range": "stddev: 0.00002929017947042813",
            "extra": "mean: 12.218073065236299 usec\nrounds: 9690"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 86648.75084691157,
            "unit": "iter/sec",
            "range": "stddev: 0.000015204936363635323",
            "extra": "mean: 11.540847273918237 usec\nrounds: 5978"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 89179.54918341197,
            "unit": "iter/sec",
            "range": "stddev: 0.0000327870930182948",
            "extra": "mean: 11.213333204267949 usec\nrounds: 41323"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 97823.15931473486,
            "unit": "iter/sec",
            "range": "stddev: 0.000022894298079943413",
            "extra": "mean: 10.222528151872647 usec\nrounds: 49020"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 94468.81257303864,
            "unit": "iter/sec",
            "range": "stddev: 0.000027511283835426548",
            "extra": "mean: 10.585504070212052 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 88603.96091289856,
            "unit": "iter/sec",
            "range": "stddev: 0.000024673905484422928",
            "extra": "mean: 11.2861771606694 usec\nrounds: 46297"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 67.62170271947514,
            "unit": "iter/sec",
            "range": "stddev: 0.0024961586557897264",
            "extra": "mean: 14.788151729163701 msec\nrounds: 48"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 6.198350148983554,
            "unit": "iter/sec",
            "range": "stddev: 0.011056678498798801",
            "extra": "mean: 161.33325416667313 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 10.186832238440514,
            "unit": "iter/sec",
            "range": "stddev: 0.006393783763195293",
            "extra": "mean: 98.16594369999052 msec\nrounds: 10"
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
          "id": "553cb16e40d4fedb0bab82e31095959fd4d20003",
          "message": "It's secrets",
          "timestamp": "2023-01-13T13:44:07+01:00",
          "tree_id": "00769b7768d69454078d61c34878936154d873eb",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/553cb16e40d4fedb0bab82e31095959fd4d20003"
        },
        "date": 1673613949074,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.221637738954957,
            "unit": "iter/sec",
            "range": "stddev: 0.00041572482218795413",
            "extra": "mean: 450.11838899999645 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.088218251824555,
            "unit": "iter/sec",
            "range": "stddev: 0.0030638123248342302",
            "extra": "mean: 478.8771475999994 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5464948976761274,
            "unit": "iter/sec",
            "range": "stddev: 0.005689599587453145",
            "extra": "mean: 1.829843250600001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5420702456619584,
            "unit": "iter/sec",
            "range": "stddev: 0.002797892257215975",
            "extra": "mean: 1.8447793584000038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.4043806314771623,
            "unit": "iter/sec",
            "range": "stddev: 0.005584445322863767",
            "extra": "mean: 415.90752600000656 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 126757.88812838845,
            "unit": "iter/sec",
            "range": "stddev: 8.998099336752308e-7",
            "extra": "mean: 7.889055385548365 usec\nrounds: 46727"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 119635.13366058175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011828195871711673",
            "extra": "mean: 8.358748549879268 usec\nrounds: 49998"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 128730.11547383206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010459814349251599",
            "extra": "mean: 7.768190033227131 usec\nrounds: 52354"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 132074.93566894572,
            "unit": "iter/sec",
            "range": "stddev: 9.932291089537504e-7",
            "extra": "mean: 7.571459300245763 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 131008.35599932211,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010673091615342046",
            "extra": "mean: 7.633100899343965 usec\nrounds: 51814"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 126578.84981204639,
            "unit": "iter/sec",
            "range": "stddev: 0.000001027575975207409",
            "extra": "mean: 7.900213989026396 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 80.79583341889487,
            "unit": "iter/sec",
            "range": "stddev: 0.0005764896744307731",
            "extra": "mean: 12.376875857142165 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 7.800210562589003,
            "unit": "iter/sec",
            "range": "stddev: 0.002310469346151901",
            "extra": "mean: 128.2016673750004 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 12.156805502130096,
            "unit": "iter/sec",
            "range": "stddev: 0.0009002930743481134",
            "extra": "mean: 82.25845184615164 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7267b59e9006a222f95fa8ab413793e6046c6cef",
          "message": "Bump rhysd/github-action-benchmark from 1.14.0 to 1.15.0",
          "timestamp": "2023-01-13T13:34:41Z",
          "tree_id": "f72621b71a7811d175244e9da079d89bc142d85d",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/7267b59e9006a222f95fa8ab413793e6046c6cef"
        },
        "date": 1673616967882,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.526377559458189,
            "unit": "iter/sec",
            "range": "stddev: 0.0006308306939447091",
            "extra": "mean: 395.82365520000167 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.418567000261626,
            "unit": "iter/sec",
            "range": "stddev: 0.0007664383537289312",
            "extra": "mean: 413.46797500000037 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6458917996985607,
            "unit": "iter/sec",
            "range": "stddev: 0.0010849071872266333",
            "extra": "mean: 1.5482469361999989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.637748701451679,
            "unit": "iter/sec",
            "range": "stddev: 0.0026701205914061196",
            "extra": "mean: 1.5680157368000038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.6483124363376755,
            "unit": "iter/sec",
            "range": "stddev: 0.0003706255667885601",
            "extra": "mean: 377.59895179999603 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 134200.87870078278,
            "unit": "iter/sec",
            "range": "stddev: 3.3104835781886647e-7",
            "extra": "mean: 7.451516038353384 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 129555.87560284743,
            "unit": "iter/sec",
            "range": "stddev: 3.499108594801778e-7",
            "extra": "mean: 7.71867733012351 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 140213.7907551598,
            "unit": "iter/sec",
            "range": "stddev: 3.577588923235284e-7",
            "extra": "mean: 7.1319660827528155 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 140816.80788567715,
            "unit": "iter/sec",
            "range": "stddev: 3.2530165658923726e-7",
            "extra": "mean: 7.101425000429318 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 136669.85811769174,
            "unit": "iter/sec",
            "range": "stddev: 3.4804543135103453e-7",
            "extra": "mean: 7.316902305838798 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 133548.0687597234,
            "unit": "iter/sec",
            "range": "stddev: 3.516862623568297e-7",
            "extra": "mean: 7.48794055419234 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 94.20383288730613,
            "unit": "iter/sec",
            "range": "stddev: 0.00011924360908193647",
            "extra": "mean: 10.615279329411967 msec\nrounds: 85"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.320265841689222,
            "unit": "iter/sec",
            "range": "stddev: 0.0032089336712418466",
            "extra": "mean: 88.33714808333326 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 17.144447837382813,
            "unit": "iter/sec",
            "range": "stddev: 0.0003326513771480522",
            "extra": "mean: 58.327921055558186 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4a5dd6b409da422428c82469a1ca376f74afd03",
          "message": "Bump mypy from 0.982 to 0.991",
          "timestamp": "2023-01-13T13:53:44Z",
          "tree_id": "b18d94cfbb77e9e650a0fe7bd99f5e9a584e39b0",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c4a5dd6b409da422428c82469a1ca376f74afd03"
        },
        "date": 1673618104473,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5368910266216487,
            "unit": "iter/sec",
            "range": "stddev: 0.0009124703444645423",
            "extra": "mean: 394.1832697999999 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.424505411079064,
            "unit": "iter/sec",
            "range": "stddev: 0.0008750959026284565",
            "extra": "mean: 412.4552559999998 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6423956605438219,
            "unit": "iter/sec",
            "range": "stddev: 0.005308489149888523",
            "extra": "mean: 1.5566730310000025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6359595339737133,
            "unit": "iter/sec",
            "range": "stddev: 0.0016560389715226246",
            "extra": "mean: 1.5724270909999973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.646538855082662,
            "unit": "iter/sec",
            "range": "stddev: 0.0015107087656121968",
            "extra": "mean: 377.85200019999934 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 137701.27710406444,
            "unit": "iter/sec",
            "range": "stddev: 3.183387008408838e-7",
            "extra": "mean: 7.262096772307158 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 132298.80169524555,
            "unit": "iter/sec",
            "range": "stddev: 4.039541909184365e-7",
            "extra": "mean: 7.558647449457112 usec\nrounds: 55870"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 143415.59035620166,
            "unit": "iter/sec",
            "range": "stddev: 4.0484461640735766e-7",
            "extra": "mean: 6.972742625235496 usec\nrounds: 48781"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 143486.819748712,
            "unit": "iter/sec",
            "range": "stddev: 3.065295442847158e-7",
            "extra": "mean: 6.969281232598902 usec\nrounds: 57472"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 139906.40955171664,
            "unit": "iter/sec",
            "range": "stddev: 3.9387745633435716e-7",
            "extra": "mean: 7.147635359982192 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 134801.70074799846,
            "unit": "iter/sec",
            "range": "stddev: 2.9363368251649907e-7",
            "extra": "mean: 7.418304030669643 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 95.73260741166635,
            "unit": "iter/sec",
            "range": "stddev: 0.00009546251711194041",
            "extra": "mean: 10.44576165882364 msec\nrounds: 85"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 12.329990950896303,
            "unit": "iter/sec",
            "range": "stddev: 0.0025095702619886678",
            "extra": "mean: 81.10306033333359 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 17.262003927573982,
            "unit": "iter/sec",
            "range": "stddev: 0.0011131386121946104",
            "extra": "mean: 57.93070168421291 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37e346700923e5afc9fc09453822ed51d3a2c55d",
          "message": "Bump pycodestyle from 2.9.1 to 2.10.0",
          "timestamp": "2023-01-13T13:58:32Z",
          "tree_id": "2288eb78571525f0d384af9a13f4ad26d4e70ee5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/37e346700923e5afc9fc09453822ed51d3a2c55d"
        },
        "date": 1673618395154,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5140056119976526,
            "unit": "iter/sec",
            "range": "stddev: 0.0017787815680872056",
            "extra": "mean: 397.7715861999968 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.4296738803909244,
            "unit": "iter/sec",
            "range": "stddev: 0.0018131442030592793",
            "extra": "mean: 411.5778698000014 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6349105919653603,
            "unit": "iter/sec",
            "range": "stddev: 0.002155318648942355",
            "extra": "mean: 1.5750249131999965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6378745800177339,
            "unit": "iter/sec",
            "range": "stddev: 0.0018440151224888728",
            "extra": "mean: 1.5677063035999936 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.6874047427218164,
            "unit": "iter/sec",
            "range": "stddev: 0.0021595737475582663",
            "extra": "mean: 372.1062123999957 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 138114.74893680037,
            "unit": "iter/sec",
            "range": "stddev: 3.6707222615337087e-7",
            "extra": "mean: 7.240356353669279 usec\nrounds: 48783"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 128874.93270728295,
            "unit": "iter/sec",
            "range": "stddev: 4.4426571451897286e-7",
            "extra": "mean: 7.759460889662123 usec\nrounds: 59524"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 143177.97946163727,
            "unit": "iter/sec",
            "range": "stddev: 4.3711554349288934e-7",
            "extra": "mean: 6.9843142343542945 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 144511.47966300772,
            "unit": "iter/sec",
            "range": "stddev: 3.4207365319229613e-7",
            "extra": "mean: 6.919865482880262 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 140870.61290708452,
            "unit": "iter/sec",
            "range": "stddev: 4.1559441220412414e-7",
            "extra": "mean: 7.098712636819294 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 135249.31971583783,
            "unit": "iter/sec",
            "range": "stddev: 3.6016093718246945e-7",
            "extra": "mean: 7.39375253125875 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 89.41661285814727,
            "unit": "iter/sec",
            "range": "stddev: 0.00011307536627676537",
            "extra": "mean: 11.183604120482899 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 10.608534101223345,
            "unit": "iter/sec",
            "range": "stddev: 0.0009686198905805849",
            "extra": "mean: 94.26373054545613 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 16.868183514327683,
            "unit": "iter/sec",
            "range": "stddev: 0.002589656587472141",
            "extra": "mean: 59.28320611111499 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee90559274c45496347f2144e48fd20c8ccc65a0",
          "message": "Bump pydocstyle from 6.1.1 to 6.2.3",
          "timestamp": "2023-01-13T14:03:04Z",
          "tree_id": "bedd5e5ed2c1d82f26a5c584143b8be13313ee91",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/ee90559274c45496347f2144e48fd20c8ccc65a0"
        },
        "date": 1673618682545,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.4888282287337953,
            "unit": "iter/sec",
            "range": "stddev: 0.0008560880558105733",
            "extra": "mean: 401.7955069999971 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.3849805233355896,
            "unit": "iter/sec",
            "range": "stddev: 0.001380389230430335",
            "extra": "mean: 419.2906358000016 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6454290032800235,
            "unit": "iter/sec",
            "range": "stddev: 0.0019342943621881048",
            "extra": "mean: 1.5493570864000106 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6398461052385184,
            "unit": "iter/sec",
            "range": "stddev: 0.0018819686411624273",
            "extra": "mean: 1.5628758100000084 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.6411567199406756,
            "unit": "iter/sec",
            "range": "stddev: 0.0019510332302481337",
            "extra": "mean: 378.62198499998954 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 132852.5103551828,
            "unit": "iter/sec",
            "range": "stddev: 6.011902170737174e-7",
            "extra": "mean: 7.527144179108755 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 128417.13563791086,
            "unit": "iter/sec",
            "range": "stddev: 3.9323766205543093e-7",
            "extra": "mean: 7.7871227623362715 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 139647.0944332759,
            "unit": "iter/sec",
            "range": "stddev: 3.8770218002234645e-7",
            "extra": "mean: 7.160908030763254 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 141327.92508877546,
            "unit": "iter/sec",
            "range": "stddev: 4.2744964007283975e-7",
            "extra": "mean: 7.075742457634242 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 137160.36543240832,
            "unit": "iter/sec",
            "range": "stddev: 4.186776520088467e-7",
            "extra": "mean: 7.290735897702118 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 134473.37875246324,
            "unit": "iter/sec",
            "range": "stddev: 4.522770299319652e-7",
            "extra": "mean: 7.436416109100571 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 86.86346262285811,
            "unit": "iter/sec",
            "range": "stddev: 0.00021934468142836253",
            "extra": "mean: 11.512320253013378 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 10.259180761327167,
            "unit": "iter/sec",
            "range": "stddev: 0.0006109833973294637",
            "extra": "mean: 97.47367000000456 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 17.32790761119923,
            "unit": "iter/sec",
            "range": "stddev: 0.00019444447284969944",
            "extra": "mean: 57.71037233333863 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "651b8bc90fd50260b612c93f4a0b56e5cef67183",
          "message": "Bump black from 22.10.0 to 22.12.0",
          "timestamp": "2023-01-13T14:09:32Z",
          "tree_id": "c57ca5b4cd01a3d932bdc3a3080e69511434612b",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/651b8bc90fd50260b612c93f4a0b56e5cef67183"
        },
        "date": 1673619078431,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.0008863926719678,
            "unit": "iter/sec",
            "range": "stddev: 0.02142308269695817",
            "extra": "mean: 499.7784999999965 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 1.8637887853337425,
            "unit": "iter/sec",
            "range": "stddev: 0.016847781314570275",
            "extra": "mean: 536.5414835999957 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.4820843087869423,
            "unit": "iter/sec",
            "range": "stddev: 0.02875892006362609",
            "extra": "mean: 2.0743259669999987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.4842102668402495,
            "unit": "iter/sec",
            "range": "stddev: 0.0061631483464189805",
            "extra": "mean: 2.0652184980000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.052610365132823,
            "unit": "iter/sec",
            "range": "stddev: 0.008467408463858581",
            "extra": "mean: 487.18452219999904 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 107812.26503125866,
            "unit": "iter/sec",
            "range": "stddev: 0.000015514446289004315",
            "extra": "mean: 9.275382533796725 usec\nrounds: 37879"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 99597.34718202462,
            "unit": "iter/sec",
            "range": "stddev: 0.000018801174337860752",
            "extra": "mean: 10.040428066546742 usec\nrounds: 43860"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 107482.75651355254,
            "unit": "iter/sec",
            "range": "stddev: 0.00002100042558116676",
            "extra": "mean: 9.303817955896113 usec\nrounds: 48307"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 104317.2952126267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000307751269399711",
            "extra": "mean: 9.586138117957631 usec\nrounds: 44643"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 103705.11754447,
            "unit": "iter/sec",
            "range": "stddev: 0.000026894334046035703",
            "extra": "mean: 9.642725679098604 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 104099.72807729444,
            "unit": "iter/sec",
            "range": "stddev: 0.000013871404614830186",
            "extra": "mean: 9.606173027248412 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 68.04523872128239,
            "unit": "iter/sec",
            "range": "stddev: 0.0015703573685977303",
            "extra": "mean: 14.696105396823773 msec\nrounds: 63"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 6.624260334854642,
            "unit": "iter/sec",
            "range": "stddev: 0.003482341545917917",
            "extra": "mean: 150.96025057142373 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 10.834322794415485,
            "unit": "iter/sec",
            "range": "stddev: 0.0023323636240664344",
            "extra": "mean: 92.29926216666229 msec\nrounds: 12"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d964be808b134e8bc7741426793b80bb1c662b74",
          "message": "Merge pull request #433 from ClearcodeHQ/tbump\n\nMigrate version management tool to tbump - closes #427",
          "timestamp": "2023-01-13T17:50:23+01:00",
          "tree_id": "3d5e68b155fd2cb21cca728524fd32d7c78b733e",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/d964be808b134e8bc7741426793b80bb1c662b74"
        },
        "date": 1673628710303,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.514486946233391,
            "unit": "iter/sec",
            "range": "stddev: 0.0010142838005492566",
            "extra": "mean: 397.6954429999978 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.3788979069467584,
            "unit": "iter/sec",
            "range": "stddev: 0.0004138102098999346",
            "extra": "mean: 420.3627221999909 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.623284284959234,
            "unit": "iter/sec",
            "range": "stddev: 0.005656594496430088",
            "extra": "mean: 1.6044043210000154 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.622503211982741,
            "unit": "iter/sec",
            "range": "stddev: 0.0009852029116315317",
            "extra": "mean: 1.6064174139999863 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.694823921749115,
            "unit": "iter/sec",
            "range": "stddev: 0.0008722098899777822",
            "extra": "mean: 371.0817585999962 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 140328.49846965558,
            "unit": "iter/sec",
            "range": "stddev: 3.426837915876741e-7",
            "extra": "mean: 7.1261362510498065 usec\nrounds: 49262"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 130545.93693642187,
            "unit": "iter/sec",
            "range": "stddev: 3.668165515911665e-7",
            "extra": "mean: 7.6601388252092235 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 146011.92612311055,
            "unit": "iter/sec",
            "range": "stddev: 5.080729871214597e-7",
            "extra": "mean: 6.848755622584184 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 145311.32062750982,
            "unit": "iter/sec",
            "range": "stddev: 3.365688127946839e-7",
            "extra": "mean: 6.881776283372953 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 142088.78401375175,
            "unit": "iter/sec",
            "range": "stddev: 4.2193617020666546e-7",
            "extra": "mean: 7.037853177089735 usec\nrounds: 50503"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 138236.88702564273,
            "unit": "iter/sec",
            "range": "stddev: 4.067936516662261e-7",
            "extra": "mean: 7.233959195091694 usec\nrounds: 49259"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 93.19664880645294,
            "unit": "iter/sec",
            "range": "stddev: 0.00033518064973727627",
            "extra": "mean: 10.729999552631554 msec\nrounds: 76"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 9.041686569345293,
            "unit": "iter/sec",
            "range": "stddev: 0.0009373131814723514",
            "extra": "mean: 110.59883488887736 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 13.994285489498852,
            "unit": "iter/sec",
            "range": "stddev: 0.00004999026367579474",
            "extra": "mean: 71.45773899999313 msec\nrounds: 15"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf",
          "message": "Merge pull request #436 from ClearcodeHQ/python3.11\n\nAdd support for python 3.11 - closes #424",
          "timestamp": "2023-01-13T18:28:20+01:00",
          "tree_id": "cab7a8b0b5d8af18de9e5e1a8e4fc00d20792147",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf"
        },
        "date": 1673630989799,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5220792222471067,
            "unit": "iter/sec",
            "range": "stddev: 0.0015205350485953087",
            "extra": "mean: 396.49825079999914 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.3808166279219787,
            "unit": "iter/sec",
            "range": "stddev: 0.001086697088247627",
            "extra": "mean: 420.02394820000006 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6384810156205835,
            "unit": "iter/sec",
            "range": "stddev: 0.0020949179821502994",
            "extra": "mean: 1.5662172806000059 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6311478695467726,
            "unit": "iter/sec",
            "range": "stddev: 0.008411050858485468",
            "extra": "mean: 1.5844147595999971 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.640131316498861,
            "unit": "iter/sec",
            "range": "stddev: 0.0011823670790347535",
            "extra": "mean: 378.7690384000001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 135178.20684404066,
            "unit": "iter/sec",
            "range": "stddev: 3.278747936141052e-7",
            "extra": "mean: 7.397642144741063 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 129526.1335352387,
            "unit": "iter/sec",
            "range": "stddev: 4.997748000105185e-7",
            "extra": "mean: 7.720449709308595 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 142065.05970042825,
            "unit": "iter/sec",
            "range": "stddev: 3.4877443884945353e-7",
            "extra": "mean: 7.039028471241937 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 142135.28935858372,
            "unit": "iter/sec",
            "range": "stddev: 3.8982198484895495e-7",
            "extra": "mean: 7.035550456981631 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 139605.1217569947,
            "unit": "iter/sec",
            "range": "stddev: 3.234197630407304e-7",
            "extra": "mean: 7.163060978096935 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 135310.4199015814,
            "unit": "iter/sec",
            "range": "stddev: 4.049164513983128e-7",
            "extra": "mean: 7.390413840466641 usec\nrounds: 66226"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 91.65865435449372,
            "unit": "iter/sec",
            "range": "stddev: 0.0001742355248327491",
            "extra": "mean: 10.910044523809589 msec\nrounds: 84"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 10.695075868354625,
            "unit": "iter/sec",
            "range": "stddev: 0.001197774188652863",
            "extra": "mean: 93.50097300000212 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 16.619519874994403,
            "unit": "iter/sec",
            "range": "stddev: 0.00012572341483880505",
            "extra": "mean: 60.17020994117839 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3baaefdfd013139d2162ed574675bae14b0be27",
          "message": "Bump pytest from 7.2.0 to 7.2.1",
          "timestamp": "2023-01-16T04:12:28Z",
          "tree_id": "7a297e3c4218d1b4126aaa2c115e9cbd68d653df",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c3baaefdfd013139d2162ed574675bae14b0be27"
        },
        "date": 1673842431669,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5612189244919508,
            "unit": "iter/sec",
            "range": "stddev: 0.001120574241031029",
            "extra": "mean: 390.4390954000007 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.442993426327337,
            "unit": "iter/sec",
            "range": "stddev: 0.0056270534836162294",
            "extra": "mean: 409.3338889999984 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6370767138274513,
            "unit": "iter/sec",
            "range": "stddev: 0.003993870617564379",
            "extra": "mean: 1.5696696775999954 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6374828178427376,
            "unit": "iter/sec",
            "range": "stddev: 0.005266558900609555",
            "extra": "mean: 1.5686697304000006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.697598788925758,
            "unit": "iter/sec",
            "range": "stddev: 0.006108549835042082",
            "extra": "mean: 370.70004779999977 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 136964.09973859575,
            "unit": "iter/sec",
            "range": "stddev: 3.473687725868561e-7",
            "extra": "mean: 7.301183316712629 usec\nrounds: 57147"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 131764.2654202253,
            "unit": "iter/sec",
            "range": "stddev: 3.538363313630709e-7",
            "extra": "mean: 7.589311083781171 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 143421.6432960947,
            "unit": "iter/sec",
            "range": "stddev: 3.1840769617314826e-7",
            "extra": "mean: 6.972448348925239 usec\nrounds: 61354"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 144476.19284717555,
            "unit": "iter/sec",
            "range": "stddev: 3.073324064578854e-7",
            "extra": "mean: 6.921555588454514 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 141476.7155056424,
            "unit": "iter/sec",
            "range": "stddev: 3.4573017025307576e-7",
            "extra": "mean: 7.068300931541754 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 137929.21608987093,
            "unit": "iter/sec",
            "range": "stddev: 3.420795949659298e-7",
            "extra": "mean: 7.2500955805362315 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 94.43881623873146,
            "unit": "iter/sec",
            "range": "stddev: 0.00011554477675376116",
            "extra": "mean: 10.588866313954048 msec\nrounds: 86"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.747915646135679,
            "unit": "iter/sec",
            "range": "stddev: 0.0019224965588338435",
            "extra": "mean: 85.1214828333345 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 17.290937140215206,
            "unit": "iter/sec",
            "range": "stddev: 0.0002223958417468064",
            "extra": "mean: 57.83376527777683 msec\nrounds: 18"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f321b36ac5981710681bf2ec9661b587ebdf756d",
          "message": "Merge pull request #437 from ClearcodeHQ/order\n\nRun benchmarks only after tests",
          "timestamp": "2023-01-16T10:09:22+01:00",
          "tree_id": "f9722ee8a25d0d75f3fa9f130017ffb46662ad73",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f321b36ac5981710681bf2ec9661b587ebdf756d"
        },
        "date": 1673860473921,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5332493499024817,
            "unit": "iter/sec",
            "range": "stddev: 0.00109789610118279",
            "extra": "mean: 394.7499285999996 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.4185620235458964,
            "unit": "iter/sec",
            "range": "stddev: 0.0022463160478676117",
            "extra": "mean: 413.46882580000255 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6366592581396143,
            "unit": "iter/sec",
            "range": "stddev: 0.004095285192042806",
            "extra": "mean: 1.5706989055999998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6318652448723555,
            "unit": "iter/sec",
            "range": "stddev: 0.005140402929521657",
            "extra": "mean: 1.582615926600002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.6583794642985294,
            "unit": "iter/sec",
            "range": "stddev: 0.002571577941961343",
            "extra": "mean: 376.1690207999976 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 138754.58832290198,
            "unit": "iter/sec",
            "range": "stddev: 3.6819143241126025e-7",
            "extra": "mean: 7.206968879997362 usec\nrounds: 50000"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 135392.9512782713,
            "unit": "iter/sec",
            "range": "stddev: 4.6324517022226173e-7",
            "extra": "mean: 7.385908871612625 usec\nrounds: 53474"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 145286.92605466023,
            "unit": "iter/sec",
            "range": "stddev: 3.815393388918825e-7",
            "extra": "mean: 6.882931776144657 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 149693.93802678733,
            "unit": "iter/sec",
            "range": "stddev: 4.522108259464926e-7",
            "extra": "mean: 6.680297233018565 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 144653.39656322525,
            "unit": "iter/sec",
            "range": "stddev: 3.3186330276150906e-7",
            "extra": "mean: 6.913076524704479 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 141468.6637058835,
            "unit": "iter/sec",
            "range": "stddev: 4.826982551859787e-7",
            "extra": "mean: 7.06870322942346 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 86.27200296902464,
            "unit": "iter/sec",
            "range": "stddev: 0.0003677257288030687",
            "extra": "mean: 11.591245891891985 msec\nrounds: 74"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 8.896311628638857,
            "unit": "iter/sec",
            "range": "stddev: 0.0009412773037811539",
            "extra": "mean: 112.40613433333617 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 13.954085198979588,
            "unit": "iter/sec",
            "range": "stddev: 0.00023017265053290652",
            "extra": "mean: 71.66360142857135 msec\nrounds: 14"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6b72a545782dfc9f883d35e8bf5413198a629a3",
          "message": "Bump pydocstyle from 6.2.3 to 6.3.0",
          "timestamp": "2023-01-18T04:09:33Z",
          "tree_id": "3b3f6febdf72fc4eaaf2820e32b1cbf670ff91c0",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f6b72a545782dfc9f883d35e8bf5413198a629a3"
        },
        "date": 1674015235832,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5291763302869237,
            "unit": "iter/sec",
            "range": "stddev: 0.0012732585500136741",
            "extra": "mean: 395.38563919999774 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.4300986261359654,
            "unit": "iter/sec",
            "range": "stddev: 0.0015129297498324148",
            "extra": "mean: 411.50593200000003 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6397976475434879,
            "unit": "iter/sec",
            "range": "stddev: 0.0014033330873469137",
            "extra": "mean: 1.5629941807999983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6348617677965338,
            "unit": "iter/sec",
            "range": "stddev: 0.003184968187564946",
            "extra": "mean: 1.5751460408000013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.630947211247652,
            "unit": "iter/sec",
            "range": "stddev: 0.012129608414228",
            "extra": "mean: 380.0912445999927 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 138078.2924367777,
            "unit": "iter/sec",
            "range": "stddev: 3.9109153211469926e-7",
            "extra": "mean: 7.242268008621796 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 131989.32955583555,
            "unit": "iter/sec",
            "range": "stddev: 3.338701394956368e-7",
            "extra": "mean: 7.576370024494815 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 143475.43718353726,
            "unit": "iter/sec",
            "range": "stddev: 4.846120605803302e-7",
            "extra": "mean: 6.969834137677348 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 144330.1768258197,
            "unit": "iter/sec",
            "range": "stddev: 3.331447674090844e-7",
            "extra": "mean: 6.928557991076379 usec\nrounds: 62501"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 141625.91670603066,
            "unit": "iter/sec",
            "range": "stddev: 3.682445991689572e-7",
            "extra": "mean: 7.060854561497206 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 137097.56938590776,
            "unit": "iter/sec",
            "range": "stddev: 3.589963113094078e-7",
            "extra": "mean: 7.2940753397688605 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 92.76557279871251,
            "unit": "iter/sec",
            "range": "stddev: 0.00014391823021340564",
            "extra": "mean: 10.779861211764963 msec\nrounds: 85"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.104833189030716,
            "unit": "iter/sec",
            "range": "stddev: 0.0023578803463050295",
            "extra": "mean: 90.0508799166649 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 16.305717360385948,
            "unit": "iter/sec",
            "range": "stddev: 0.0005664191267869279",
            "extra": "mean: 61.3281818823536 msec\nrounds: 17"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d20cb0908943f121295eabac957a91fb74cf43bd",
          "message": "Merge pull request #440 from ClearcodeHQ/dependabot/pip/black-23.1.0\n\nBump black from 22.12.0 to 23.1.0",
          "timestamp": "2023-02-01T09:58:31+01:00",
          "tree_id": "91dea9c2af28eb7217db916a6b7105b7ed37347b",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/d20cb0908943f121295eabac957a91fb74cf43bd"
        },
        "date": 1675242421340,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5268152724428434,
            "unit": "iter/sec",
            "range": "stddev: 0.0014448678373481288",
            "extra": "mean: 395.75508780000064 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.397833590728607,
            "unit": "iter/sec",
            "range": "stddev: 0.0035127501457955165",
            "extra": "mean: 417.04311920000237 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6456511696082647,
            "unit": "iter/sec",
            "range": "stddev: 0.0025123215119890194",
            "extra": "mean: 1.548823957999997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6441370081709474,
            "unit": "iter/sec",
            "range": "stddev: 0.0009506359821525235",
            "extra": "mean: 1.552464751000008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.6741778689403666,
            "unit": "iter/sec",
            "range": "stddev: 0.0029597246395416388",
            "extra": "mean: 373.9467040000022 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 134296.36410688105,
            "unit": "iter/sec",
            "range": "stddev: 0.000001530367997491077",
            "extra": "mean: 7.446217972097446 usec\nrounds: 54351"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 126824.9976738311,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016289022867273665",
            "extra": "mean: 7.88488088579984 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 143358.86339249232,
            "unit": "iter/sec",
            "range": "stddev: 3.179009937041632e-7",
            "extra": "mean: 6.9755017327541795 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 143741.35898333573,
            "unit": "iter/sec",
            "range": "stddev: 3.0142100034068246e-7",
            "extra": "mean: 6.956939930670423 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 135885.6754117747,
            "unit": "iter/sec",
            "range": "stddev: 9.60418534434623e-7",
            "extra": "mean: 7.35912742067696 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 133605.98274187403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010126054632343495",
            "extra": "mean: 7.484694767988003 usec\nrounds: 62500"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 95.71751715069513,
            "unit": "iter/sec",
            "range": "stddev: 0.00016035775540945599",
            "extra": "mean: 10.447408476189645 msec\nrounds: 84"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.730935509260414,
            "unit": "iter/sec",
            "range": "stddev: 0.00489608995700237",
            "extra": "mean: 85.24469333333211 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 17.602641061146944,
            "unit": "iter/sec",
            "range": "stddev: 0.0017217675880848975",
            "extra": "mean: 56.80965694444732 msec\nrounds: 18"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc672b755740bbbb88b91789eb87e6315538ec20",
          "message": "Merge pull request #441 from ClearcodeHQ/publish-docs\n\nPublish documentation to the github-pages",
          "timestamp": "2023-02-03T21:14:46+01:00",
          "tree_id": "672a5ab7bde84d965fdf3f2519922d01e4e35c25",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/cc672b755740bbbb88b91789eb87e6315538ec20"
        },
        "date": 1675455653163,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.4900871002088363,
            "unit": "iter/sec",
            "range": "stddev: 0.0037122212849536582",
            "extra": "mean: 401.5923780000037 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.3861996920257162,
            "unit": "iter/sec",
            "range": "stddev: 0.0007650387564068604",
            "extra": "mean: 419.0764097999988 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6183788662850549,
            "unit": "iter/sec",
            "range": "stddev: 0.0015343375786730745",
            "extra": "mean: 1.6171315911999955 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6172182040007964,
            "unit": "iter/sec",
            "range": "stddev: 0.004439821566442616",
            "extra": "mean: 1.620172563799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.6645823947897407,
            "unit": "iter/sec",
            "range": "stddev: 0.0009893468595513983",
            "extra": "mean: 375.29332999999383 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 138015.75638117502,
            "unit": "iter/sec",
            "range": "stddev: 3.8396359522470267e-7",
            "extra": "mean: 7.245549538837997 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 131202.15185870224,
            "unit": "iter/sec",
            "range": "stddev: 4.117190720597019e-7",
            "extra": "mean: 7.621826211180949 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 147257.9868088014,
            "unit": "iter/sec",
            "range": "stddev: 4.30691803051872e-7",
            "extra": "mean: 6.790803145355994 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 150072.65957342208,
            "unit": "iter/sec",
            "range": "stddev: 3.643412615548393e-7",
            "extra": "mean: 6.663438915805689 usec\nrounds: 56815"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 142014.24497908945,
            "unit": "iter/sec",
            "range": "stddev: 3.705990740977092e-7",
            "extra": "mean: 7.041547135973879 usec\nrounds: 57472"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 140801.0977859816,
            "unit": "iter/sec",
            "range": "stddev: 4.3439751370709194e-7",
            "extra": "mean: 7.1022173528789185 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 84.09020252426129,
            "unit": "iter/sec",
            "range": "stddev: 0.0002744060484095397",
            "extra": "mean: 11.891991813332652 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 8.726628027265793,
            "unit": "iter/sec",
            "range": "stddev: 0.0007780003629213382",
            "extra": "mean: 114.5917984444351 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 13.746260985100584,
            "unit": "iter/sec",
            "range": "stddev: 0.00019043264684892792",
            "extra": "mean: 72.7470547142884 msec\nrounds: 14"
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
          "id": "7ab370de05b97bfc5fd3bc101feef2b7f70f5312",
          "message": "Branch is main",
          "timestamp": "2023-02-03T21:23:43+01:00",
          "tree_id": "0da3786310aa184a9fc92b2e0ca0d08ed04aa78c",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/7ab370de05b97bfc5fd3bc101feef2b7f70f5312"
        },
        "date": 1675456327632,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.4933099693900256,
            "unit": "iter/sec",
            "range": "stddev: 0.0022965176019121994",
            "extra": "mean: 401.07327699998905 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.378982119289698,
            "unit": "iter/sec",
            "range": "stddev: 0.0017307600197386918",
            "extra": "mean: 420.34784199999535 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6417219796338735,
            "unit": "iter/sec",
            "range": "stddev: 0.013096062720823382",
            "extra": "mean: 1.5583072291999998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6441406258132261,
            "unit": "iter/sec",
            "range": "stddev: 0.005479693931205045",
            "extra": "mean: 1.5524560320000034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.590460495660586,
            "unit": "iter/sec",
            "range": "stddev: 0.0018754778461726352",
            "extra": "mean: 386.0317506000001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 133305.57188161876,
            "unit": "iter/sec",
            "range": "stddev: 7.380860510239902e-7",
            "extra": "mean: 7.501561906864961 usec\nrounds: 54057"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 129318.92988365109,
            "unit": "iter/sec",
            "range": "stddev: 3.4823726046880474e-7",
            "extra": "mean: 7.732819942909403 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 140957.71088190094,
            "unit": "iter/sec",
            "range": "stddev: 3.690711473278258e-7",
            "extra": "mean: 7.094326331943863 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 142362.2688581952,
            "unit": "iter/sec",
            "range": "stddev: 3.485550143721294e-7",
            "extra": "mean: 7.02433311874289 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 136894.84846255602,
            "unit": "iter/sec",
            "range": "stddev: 3.574110016881709e-7",
            "extra": "mean: 7.3048767811998685 usec\nrounds: 57475"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 134534.8810821695,
            "unit": "iter/sec",
            "range": "stddev: 3.5452397403573033e-7",
            "extra": "mean: 7.433016567571295 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 93.0150997390957,
            "unit": "iter/sec",
            "range": "stddev: 0.00022027484366418743",
            "extra": "mean: 10.750942619047521 msec\nrounds: 84"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 10.646688616189818,
            "unit": "iter/sec",
            "range": "stddev: 0.0019501467337527884",
            "extra": "mean: 93.92591781818024 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 17.142297232213572,
            "unit": "iter/sec",
            "range": "stddev: 0.00012390973187281459",
            "extra": "mean: 58.335238647059136 msec\nrounds: 17"
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
          "id": "81c93969ee43f0c73ea1735bcdf3a64172c6029f",
          "message": "Publish documentation on tag only",
          "timestamp": "2023-02-03T21:31:04+01:00",
          "tree_id": "96fc4bcb7bd43110c801b601a750d1be8ab48eba",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/81c93969ee43f0c73ea1735bcdf3a64172c6029f"
        },
        "date": 1675456625416,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.804349525474001,
            "unit": "iter/sec",
            "range": "stddev: 0.0009686022728686153",
            "extra": "mean: 356.5889311999996 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.6830791548704185,
            "unit": "iter/sec",
            "range": "stddev: 0.0011220327195049853",
            "extra": "mean: 372.7061120000002 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6768454606424529,
            "unit": "iter/sec",
            "range": "stddev: 0.002272450271317539",
            "extra": "mean: 1.4774421313999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6758012440217155,
            "unit": "iter/sec",
            "range": "stddev: 0.0006441993863296196",
            "extra": "mean: 1.479725006199999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.0199749940272413,
            "unit": "iter/sec",
            "range": "stddev: 0.0016198193179996724",
            "extra": "mean: 331.12856959999704 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 159006.6889643047,
            "unit": "iter/sec",
            "range": "stddev: 2.471637343434526e-7",
            "extra": "mean: 6.289043602590136 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 151981.6170952077,
            "unit": "iter/sec",
            "range": "stddev: 2.413817992163723e-7",
            "extra": "mean: 6.579743123627628 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 169872.64719807528,
            "unit": "iter/sec",
            "range": "stddev: 2.5692948654922723e-7",
            "extra": "mean: 5.886762916186134 usec\nrounds: 61725"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 171444.2499279723,
            "unit": "iter/sec",
            "range": "stddev: 2.3563031763487926e-7",
            "extra": "mean: 5.8327998776285765 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 166626.1611022012,
            "unit": "iter/sec",
            "range": "stddev: 2.2315892092842103e-7",
            "extra": "mean: 6.001458554798269 usec\nrounds: 58137"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 157899.2525747751,
            "unit": "iter/sec",
            "range": "stddev: 2.6336386593284685e-7",
            "extra": "mean: 6.3331522074586 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 109.96986809267229,
            "unit": "iter/sec",
            "range": "stddev: 0.00034315118952877986",
            "extra": "mean: 9.093400013513646 msec\nrounds: 74"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.053015000765614,
            "unit": "iter/sec",
            "range": "stddev: 0.004239819839771369",
            "extra": "mean: 90.47305191667003 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 16.03367114703325,
            "unit": "iter/sec",
            "range": "stddev: 0.0009643816564324405",
            "extra": "mean: 62.368748294119314 msec\nrounds: 17"
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
          "id": "0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc",
          "message": "Release 1.2.0",
          "timestamp": "2023-02-03T21:32:46+01:00",
          "tree_id": "10f78c8f4e7a2858db3db56f43ad1e29bc1f49f5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc"
        },
        "date": 1675456705563,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.2847119755206826,
            "unit": "iter/sec",
            "range": "stddev: 0.005625359373169623",
            "extra": "mean: 437.69193259999497 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.14998132188668,
            "unit": "iter/sec",
            "range": "stddev: 0.005320611499549184",
            "extra": "mean: 465.12031980001893 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5542684066719423,
            "unit": "iter/sec",
            "range": "stddev: 0.009210842474392255",
            "extra": "mean: 1.8041800469999998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5487240417136898,
            "unit": "iter/sec",
            "range": "stddev: 0.00815031257998904",
            "extra": "mean: 1.8224096703999977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.4396129569851506,
            "unit": "iter/sec",
            "range": "stddev: 0.005119276724070199",
            "extra": "mean: 409.9010858000156 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 126190.29473590621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010408638996917573",
            "extra": "mean: 7.924539696914265 usec\nrounds: 48077"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 124019.91449610167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013969349880285503",
            "extra": "mean: 8.063221169463338 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 133716.17518644498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010758576265082147",
            "extra": "mean: 7.478526802054175 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 136657.54845324418,
            "unit": "iter/sec",
            "range": "stddev: 0.000001181538381673998",
            "extra": "mean: 7.3175613884376 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 132774.95994125778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013074241659365189",
            "extra": "mean: 7.531540588996747 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 130302.18221189111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014028794210615818",
            "extra": "mean: 7.674468554746446 usec\nrounds: 62108"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 77.65775610419502,
            "unit": "iter/sec",
            "range": "stddev: 0.0006263233179703003",
            "extra": "mean: 12.87701383823503 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 8.131149200004293,
            "unit": "iter/sec",
            "range": "stddev: 0.00676362183545801",
            "extra": "mean: 122.98384587500522 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 12.420004565821573,
            "unit": "iter/sec",
            "range": "stddev: 0.0022887805537186346",
            "extra": "mean: 80.51526830770136 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3ad0af6782add57837c6e45a9be88ac488b647e",
          "message": "Bump mypy from 0.991 to 1.0.0",
          "timestamp": "2023-02-07T04:12:30Z",
          "tree_id": "16ec4634a8db7fdf2d185c96629ab6c03df5aa70",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/e3ad0af6782add57837c6e45a9be88ac488b647e"
        },
        "date": 1675743462375,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5103391833742164,
            "unit": "iter/sec",
            "range": "stddev: 0.0014208851274477704",
            "extra": "mean: 398.3525439999994 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.3949241104734367,
            "unit": "iter/sec",
            "range": "stddev: 0.0021106224804677666",
            "extra": "mean: 417.549765199999 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6376749602067896,
            "unit": "iter/sec",
            "range": "stddev: 0.002235455140107906",
            "extra": "mean: 1.5681970634000009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6350326267748809,
            "unit": "iter/sec",
            "range": "stddev: 0.0027088401594687235",
            "extra": "mean: 1.5747222392000026 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.6687010751401976,
            "unit": "iter/sec",
            "range": "stddev: 0.0016818503663207653",
            "extra": "mean: 374.7141293999988 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 138583.81004682352,
            "unit": "iter/sec",
            "range": "stddev: 9.148638017308002e-7",
            "extra": "mean: 7.215850102996364 usec\nrounds: 50001"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 133863.23964291156,
            "unit": "iter/sec",
            "range": "stddev: 4.3244380889383604e-7",
            "extra": "mean: 7.4703107639375945 usec\nrounds: 50762"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 144026.8770472974,
            "unit": "iter/sec",
            "range": "stddev: 4.338339810241708e-7",
            "extra": "mean: 6.943148532420148 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 148617.8521340589,
            "unit": "iter/sec",
            "range": "stddev: 2.79427942307215e-7",
            "extra": "mean: 6.728666749254069 usec\nrounds: 56498"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 141950.4576865024,
            "unit": "iter/sec",
            "range": "stddev: 2.8675477740194923e-7",
            "extra": "mean: 7.044711347169447 usec\nrounds: 53476"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 136688.24143700808,
            "unit": "iter/sec",
            "range": "stddev: 4.297769178798089e-7",
            "extra": "mean: 7.315918249345858 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 93.41819419447643,
            "unit": "iter/sec",
            "range": "stddev: 0.00026005860030155583",
            "extra": "mean: 10.704552883116289 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 9.436502677499847,
            "unit": "iter/sec",
            "range": "stddev: 0.002917965130185844",
            "extra": "mean: 105.97146360000238 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 14.368283570390982,
            "unit": "iter/sec",
            "range": "stddev: 0.0003191939936985362",
            "extra": "mean: 69.59773553333264 msec\nrounds: 15"
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
        "date": 1623157184912,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.3589302583981953,
            "unit": "iter/sec",
            "range": "stddev: 0.00487440737703906",
            "extra": "mean: 423.92096859999526 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.2495759186086866,
            "unit": "iter/sec",
            "range": "stddev: 0.010351936275068179",
            "extra": "mean: 444.5282294000009 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5295843591082705,
            "unit": "iter/sec",
            "range": "stddev: 0.02701988174048151",
            "extra": "mean: 1.888273289800003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5523957226997376,
            "unit": "iter/sec",
            "range": "stddev: 0.022429768295271973",
            "extra": "mean: 1.8102964213999968 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.367828124167895,
            "unit": "iter/sec",
            "range": "stddev: 0.012707764671821092",
            "extra": "mean: 422.32795099999976 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 118421.15112930044,
            "unit": "iter/sec",
            "range": "stddev: 0.000007301503667863812",
            "extra": "mean: 8.444437420711528 usec\nrounds: 42554"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 112940.02405372898,
            "unit": "iter/sec",
            "range": "stddev: 0.000007124719366581425",
            "extra": "mean: 8.854257012768741 usec\nrounds: 45453"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 122982.0952589864,
            "unit": "iter/sec",
            "range": "stddev: 0.000006908746622947621",
            "extra": "mean: 8.131264944658104 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 129449.62333915898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022744445639978575",
            "extra": "mean: 7.72501282124238 usec\nrounds: 156"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 118242.84599762312,
            "unit": "iter/sec",
            "range": "stddev: 0.000021713511304943114",
            "extra": "mean: 8.457171269542188 usec\nrounds: 49752"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 114540.74581651714,
            "unit": "iter/sec",
            "range": "stddev: 0.000017704377421806666",
            "extra": "mean: 8.730517623849773 usec\nrounds: 42017"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 76.05772748195074,
            "unit": "iter/sec",
            "range": "stddev: 0.001206544854243803",
            "extra": "mean: 13.147907952381432 msec\nrounds: 63"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 10.73829933204397,
            "unit": "iter/sec",
            "range": "stddev: 0.0030547972359380145",
            "extra": "mean: 93.12461583333942 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 20.51066358674294,
            "unit": "iter/sec",
            "range": "stddev: 0.0024699970814744017",
            "extra": "mean: 48.75512660869489 msec\nrounds: 23"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de54f7c9f03b06b5b153e6929139c5ff3fe8a259",
          "message": "Merge pull request #263 from ClearcodeHQ/cfg\n\nMove package configuration to setup.cfg",
          "timestamp": "2021-06-08T15:45:01+02:00",
          "tree_id": "e501787f0beeb09692623bde2463ebf851fde4ec",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/de54f7c9f03b06b5b153e6929139c5ff3fe8a259"
        },
        "date": 1623159995030,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5341399331798167,
            "unit": "iter/sec",
            "range": "stddev: 0.004857645925058299",
            "extra": "mean: 394.6111999999971 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.343882772169485,
            "unit": "iter/sec",
            "range": "stddev: 0.014513179968693035",
            "extra": "mean: 426.6424975999996 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5660289399088483,
            "unit": "iter/sec",
            "range": "stddev: 0.015230886432912212",
            "extra": "mean: 1.7666941201999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5758936089760733,
            "unit": "iter/sec",
            "range": "stddev: 0.03582410263959",
            "extra": "mean: 1.7364318416000117 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.550864424105144,
            "unit": "iter/sec",
            "range": "stddev: 0.012242578094564976",
            "extra": "mean: 392.0239706000075 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 128228.14682154196,
            "unit": "iter/sec",
            "range": "stddev: 0.000005878429518460361",
            "extra": "mean: 7.798599798776807 usec\nrounds: 42736"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 114327.44551881247,
            "unit": "iter/sec",
            "range": "stddev: 0.000027002289685710136",
            "extra": "mean: 8.746806118706212 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 130769.60592983816,
            "unit": "iter/sec",
            "range": "stddev: 0.00001046495130101516",
            "extra": "mean: 7.647036885134686 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 132258.9415830853,
            "unit": "iter/sec",
            "range": "stddev: 0.000017462540778864878",
            "extra": "mean: 7.560925469615968 usec\nrounds: 48544"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 131943.96643332424,
            "unit": "iter/sec",
            "range": "stddev: 0.000006183746800337733",
            "extra": "mean: 7.578974825691131 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 126444.32738852095,
            "unit": "iter/sec",
            "range": "stddev: 0.000007612791878331814",
            "extra": "mean: 7.908618920699667 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 84.62571630695496,
            "unit": "iter/sec",
            "range": "stddev: 0.0011265046078018839",
            "extra": "mean: 11.816738972971212 msec\nrounds: 74"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 12.956655155674081,
            "unit": "iter/sec",
            "range": "stddev: 0.008110131281115622",
            "extra": "mean: 77.18041330767934 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 25.2536859272439,
            "unit": "iter/sec",
            "range": "stddev: 0.002647605808057189",
            "extra": "mean: 39.59817995998719 msec\nrounds: 25"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c64d7db2d1b6a436ed4d1ca6e1bc3cf4d8d7252c",
          "message": "Merge pull request #265 from ClearcodeHQ/issue-264\n\nPEP 561 Support",
          "timestamp": "2021-06-08T16:30:18+02:00",
          "tree_id": "8db6fe2f57f1be7c63cc5f151a3b83e8bdf30329",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c64d7db2d1b6a436ed4d1ca6e1bc3cf4d8d7252c"
        },
        "date": 1623162715838,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.3229226806892327,
            "unit": "iter/sec",
            "range": "stddev: 0.008012491604081294",
            "extra": "mean: 430.4921590000106 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.257174622412969,
            "unit": "iter/sec",
            "range": "stddev: 0.007820040482334494",
            "extra": "mean: 443.0317397999886 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5832116869716217,
            "unit": "iter/sec",
            "range": "stddev: 0.031501775196755004",
            "extra": "mean: 1.714643280200005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5586404220299875,
            "unit": "iter/sec",
            "range": "stddev: 0.02248817715162831",
            "extra": "mean: 1.7900602257999878 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.458988019139465,
            "unit": "iter/sec",
            "range": "stddev: 0.00334144400870623",
            "extra": "mean: 406.67135920001556 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 112777.25326597663,
            "unit": "iter/sec",
            "range": "stddev: 0.00003957772513736087",
            "extra": "mean: 8.867036313090331 usec\nrounds: 46512"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 109576.13566702398,
            "unit": "iter/sec",
            "range": "stddev: 0.000006517896686057946",
            "extra": "mean: 9.126074705159928 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 127325.49561682246,
            "unit": "iter/sec",
            "range": "stddev: 0.000006998631157483278",
            "extra": "mean: 7.853886569657918 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 126711.32420646815,
            "unit": "iter/sec",
            "range": "stddev: 0.000011031589376957139",
            "extra": "mean: 7.8919544583920755 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 122899.17501502318,
            "unit": "iter/sec",
            "range": "stddev: 0.000009783523893215757",
            "extra": "mean: 8.136751120402232 usec\nrounds: 51547"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 121814.16562181425,
            "unit": "iter/sec",
            "range": "stddev: 0.000014139477641684943",
            "extra": "mean: 8.20922587201075 usec\nrounds: 44844"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 70.63976459954516,
            "unit": "iter/sec",
            "range": "stddev: 0.001336672743308936",
            "extra": "mean: 14.15633256521977 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 10.862110600259337,
            "unit": "iter/sec",
            "range": "stddev: 0.004502938837316892",
            "extra": "mean: 92.06313918182022 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 22.686088688802666,
            "unit": "iter/sec",
            "range": "stddev: 0.001119187651505623",
            "extra": "mean: 44.07987704348423 msec\nrounds: 23"
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
          "id": "c81cc92dae42e72b9a4161fdab55d9210eb15f07",
          "message": "\"Release 1.1.0\"",
          "timestamp": "2021-06-08T16:43:59+02:00",
          "tree_id": "00d2d952fcf8c150ada66ea9e957a6a9763412a5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c81cc92dae42e72b9a4161fdab55d9210eb15f07"
        },
        "date": 1623163548291,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5127944558378648,
            "unit": "iter/sec",
            "range": "stddev: 0.009779425484569842",
            "extra": "mean: 397.9633103999987 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.4438576026561534,
            "unit": "iter/sec",
            "range": "stddev: 0.008831266933972355",
            "extra": "mean: 409.1891438000033 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5966017862228133,
            "unit": "iter/sec",
            "range": "stddev: 0.031737909826464274",
            "extra": "mean: 1.6761599161999983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6040899459623559,
            "unit": "iter/sec",
            "range": "stddev: 0.023395670134979223",
            "extra": "mean: 1.6553826241999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.7546581446902247,
            "unit": "iter/sec",
            "range": "stddev: 0.01162070043030005",
            "extra": "mean: 363.02145219999886 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 131633.7171380935,
            "unit": "iter/sec",
            "range": "stddev: 0.000010656276714323016",
            "extra": "mean: 7.596837814364279 usec\nrounds: 46083"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 124015.14251222643,
            "unit": "iter/sec",
            "range": "stddev: 0.000008071094154351585",
            "extra": "mean: 8.063531434489235 usec\nrounds: 45046"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 138036.88528869598,
            "unit": "iter/sec",
            "range": "stddev: 0.000009478701303434206",
            "extra": "mean: 7.2444404834878675 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 138362.61316326642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000360955592909385",
            "extra": "mean: 7.227385903878605 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 134357.11489433586,
            "unit": "iter/sec",
            "range": "stddev: 0.00001144344617312971",
            "extra": "mean: 7.442851097140948 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 130552.05295644978,
            "unit": "iter/sec",
            "range": "stddev: 0.000019859261480419186",
            "extra": "mean: 7.659779967869101 usec\nrounds: 53474"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 95.48529801683246,
            "unit": "iter/sec",
            "range": "stddev: 0.0010001952390113688",
            "extra": "mean: 10.472816452054397 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 13.710084616522408,
            "unit": "iter/sec",
            "range": "stddev: 0.004699299742191066",
            "extra": "mean: 72.93901007692337 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 23.519613885554573,
            "unit": "iter/sec",
            "range": "stddev: 0.001358380061770794",
            "extra": "mean: 42.517704791666944 msec\nrounds: 24"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fizyk@fizyk.dev",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "committer": {
            "email": "fizyk@fizyk.dev",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "distinct": true,
          "id": "af7c74b57d7edbab8169eb4132189ec1359af747",
          "message": "Dependabot to keep github-actions up to date",
          "timestamp": "2021-08-05T17:15:51+02:00",
          "tree_id": "cf1343692cd19d9199d93b17590da7e6aacc357a",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/af7c74b57d7edbab8169eb4132189ec1359af747"
        },
        "date": 1628176905209,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5045757195834417,
            "unit": "iter/sec",
            "range": "stddev: 0.007194929095776892",
            "extra": "mean: 399.26922239999953 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.3580368074577014,
            "unit": "iter/sec",
            "range": "stddev: 0.004845598763727056",
            "extra": "mean: 424.0815905999966 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5858295188275453,
            "unit": "iter/sec",
            "range": "stddev: 0.007759865854003251",
            "extra": "mean: 1.7069812425999942 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5735770591365964,
            "unit": "iter/sec",
            "range": "stddev: 0.0328072469891132",
            "extra": "mean: 1.7434449026000038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.675881192709649,
            "unit": "iter/sec",
            "range": "stddev: 0.0038522600385545096",
            "extra": "mean: 373.708669399997 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 124702.40601333839,
            "unit": "iter/sec",
            "range": "stddev: 0.000029991529179032602",
            "extra": "mean: 8.01909146719301 usec\nrounds: 47394"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 114780.68410739768,
            "unit": "iter/sec",
            "range": "stddev: 0.000020553070594553824",
            "extra": "mean: 8.712267292851493 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 127129.7522211098,
            "unit": "iter/sec",
            "range": "stddev: 0.000028970948867218107",
            "extra": "mean: 7.8659793048346 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 131410.32294227034,
            "unit": "iter/sec",
            "range": "stddev: 0.000021678477465726094",
            "extra": "mean: 7.609752244801258 usec\nrounds: 54348"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 125186.05415021758,
            "unit": "iter/sec",
            "range": "stddev: 0.00002063122327250852",
            "extra": "mean: 7.9881102315122545 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 125093.80645737359,
            "unit": "iter/sec",
            "range": "stddev: 0.00001017143038513494",
            "extra": "mean: 7.994000888771065 usec\nrounds: 49505"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 98.08532479652186,
            "unit": "iter/sec",
            "range": "stddev: 0.0012403013594334208",
            "extra": "mean: 10.195205063290572 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.819849763773066,
            "unit": "iter/sec",
            "range": "stddev: 0.004112071475419084",
            "extra": "mean: 67.4770673076921 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 25.671633416112744,
            "unit": "iter/sec",
            "range": "stddev: 0.003561155788854049",
            "extra": "mean: 38.953501080003434 msec\nrounds: 25"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67bf963ab7af687f1a24927117f34b5698b15970",
          "message": "Merge pull request #271 from ClearcodeHQ/dependabot/github_actions/codecov/codecov-action-2.0.2\n\nBump codecov/codecov-action from 1 to 2.0.2",
          "timestamp": "2021-08-05T17:18:53+02:00",
          "tree_id": "be1179ce6c40e949326ce2cdb8b69eb029f573fa",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/67bf963ab7af687f1a24927117f34b5698b15970"
        },
        "date": 1628177274994,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.8195555903546605,
            "unit": "iter/sec",
            "range": "stddev: 0.01534765464324754",
            "extra": "mean: 354.6658215999969 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.8155863916024773,
            "unit": "iter/sec",
            "range": "stddev: 0.0043703693124117335",
            "extra": "mean: 355.16580239999485 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6591035638254104,
            "unit": "iter/sec",
            "range": "stddev: 0.03580071433572855",
            "extra": "mean: 1.5172122483999941 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6432195006179493,
            "unit": "iter/sec",
            "range": "stddev: 0.030707017663794994",
            "extra": "mean: 1.5546792331999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.8536613739600534,
            "unit": "iter/sec",
            "range": "stddev: 0.0062953501697207825",
            "extra": "mean: 350.42700199999217 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 140391.1865086235,
            "unit": "iter/sec",
            "range": "stddev: 0.00001220289757833796",
            "extra": "mean: 7.122954259942629 usec\nrounds: 55553"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 133425.2386624412,
            "unit": "iter/sec",
            "range": "stddev: 0.000006526666153921585",
            "extra": "mean: 7.494833886188108 usec\nrounds: 29239"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 151265.12634664512,
            "unit": "iter/sec",
            "range": "stddev: 0.000005837675641534822",
            "extra": "mean: 6.610909098164242 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 150397.83052682132,
            "unit": "iter/sec",
            "range": "stddev: 0.0000173822022405762",
            "extra": "mean: 6.649032080430604 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 136892.0510908703,
            "unit": "iter/sec",
            "range": "stddev: 0.000009038537229781197",
            "extra": "mean: 7.305026055429544 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 132844.7955087542,
            "unit": "iter/sec",
            "range": "stddev: 0.000025881466425300257",
            "extra": "mean: 7.527581311486922 usec\nrounds: 54943"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 117.00981335306389,
            "unit": "iter/sec",
            "range": "stddev: 0.0007629515388583868",
            "extra": "mean: 8.546291728392157 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 18.59837164013864,
            "unit": "iter/sec",
            "range": "stddev: 0.004876854360256804",
            "extra": "mean: 53.76814805882358 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 30.75862621412558,
            "unit": "iter/sec",
            "range": "stddev: 0.003251785721565176",
            "extra": "mean: 32.51120492308465 msec\nrounds: 26"
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
          "id": "34b4f52441bb7fa8b7c3f31f3063e1ae64787a7e",
          "message": "Update the frequency of the dependencies updates",
          "timestamp": "2021-09-07T16:33:47+02:00",
          "tree_id": "1d7053e72e76e7f71a9cec5926f1bc40d802cb38",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/34b4f52441bb7fa8b7c3f31f3063e1ae64787a7e"
        },
        "date": 1631025320921,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.9270555779495946,
            "unit": "iter/sec",
            "range": "stddev: 0.020734649679103673",
            "extra": "mean: 341.64025019999826 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.8430048555526026,
            "unit": "iter/sec",
            "range": "stddev: 0.005843263059004845",
            "extra": "mean: 351.7405178000047 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6974030961034162,
            "unit": "iter/sec",
            "range": "stddev: 0.021529350308470092",
            "extra": "mean: 1.433890967199997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6928989616999827,
            "unit": "iter/sec",
            "range": "stddev: 0.017378684367066164",
            "extra": "mean: 1.4432118610000004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.1697359795992655,
            "unit": "iter/sec",
            "range": "stddev: 0.008443960448285298",
            "extra": "mean: 315.48368899999844 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 148600.85390574616,
            "unit": "iter/sec",
            "range": "stddev: 0.000012108123178349082",
            "extra": "mean: 6.729436431329495 usec\nrounds: 46729"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 144495.05024943934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055368451380544525",
            "extra": "mean: 6.920652287214801 usec\nrounds: 59877"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 154180.80960188352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055577043551124885",
            "extra": "mean: 6.485891484044871 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 150987.81359182205,
            "unit": "iter/sec",
            "range": "stddev: 0.00000943744127747813",
            "extra": "mean: 6.623051067574124 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 146158.95132887317,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061969863922021104",
            "extra": "mean: 6.841866275777348 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 144462.9541630708,
            "unit": "iter/sec",
            "range": "stddev: 0.000021282979686365537",
            "extra": "mean: 6.922189884551252 usec\nrounds: 28491"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 115.0511813276461,
            "unit": "iter/sec",
            "range": "stddev: 0.0009705842025814756",
            "extra": "mean: 8.691783851850865 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.820022646826164,
            "unit": "iter/sec",
            "range": "stddev: 0.004785769839368077",
            "extra": "mean: 56.116651466663825 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 34.75597111493546,
            "unit": "iter/sec",
            "range": "stddev: 0.0030505454191000407",
            "extra": "mean: 28.772034500002114 msec\nrounds: 28"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffe410329dc26906d9cbfa06cf96bfb180a693a6",
          "message": "Merge pull request #288 from ClearcodeHQ/dependabot/pip/black-21.9b0\n\nBump black from 21.8b0 to 21.9b0",
          "timestamp": "2021-09-16T15:18:19+02:00",
          "tree_id": "29d583543f24099fe189c345b0086f012970d47e",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/ffe410329dc26906d9cbfa06cf96bfb180a693a6"
        },
        "date": 1631798382297,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.069059743577129,
            "unit": "iter/sec",
            "range": "stddev: 0.011515626850105546",
            "extra": "mean: 325.8326925999995 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.0471782591797543,
            "unit": "iter/sec",
            "range": "stddev: 0.01244938705520809",
            "extra": "mean: 328.1724648000022 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6324939416798677,
            "unit": "iter/sec",
            "range": "stddev: 0.03384661282701046",
            "extra": "mean: 1.5810428117999948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6259991614087699,
            "unit": "iter/sec",
            "range": "stddev: 0.05588756050530276",
            "extra": "mean: 1.5974462293999978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.502998381305778,
            "unit": "iter/sec",
            "range": "stddev: 0.021254288523342484",
            "extra": "mean: 285.46972940000046 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 166237.88831267416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014038193326739827",
            "extra": "mean: 6.01547583496198 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 141794.40253952716,
            "unit": "iter/sec",
            "range": "stddev: 0.000001289943019554598",
            "extra": "mean: 7.052464569052619 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 152224.51761843523,
            "unit": "iter/sec",
            "range": "stddev: 0.000001287089509014448",
            "extra": "mean: 6.569244006452313 usec\nrounds: 53474"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 157931.39850170456,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012280921975039176",
            "extra": "mean: 6.331863134797778 usec\nrounds: 51021"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 155242.8644646772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012445352829524765",
            "extra": "mean: 6.441519894961307 usec\nrounds: 51018"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 147762.11605858835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012897869187234459",
            "extra": "mean: 6.767634537688235 usec\nrounds: 51283"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 93.83561818579865,
            "unit": "iter/sec",
            "range": "stddev: 0.0005609426459431505",
            "extra": "mean: 10.656934108111868 msec\nrounds: 74"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.43953848289152,
            "unit": "iter/sec",
            "range": "stddev: 0.0030284498255560327",
            "extra": "mean: 69.25429100000916 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.040233219885735,
            "unit": "iter/sec",
            "range": "stddev: 0.0009740334334348481",
            "extra": "mean: 36.98192955172396 msec\nrounds: 29"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd15de8fd8266e0672a1948babd860707ddea963",
          "message": "Merge pull request #431 from ClearcodeHQ/pipenv\n\nMove dependency management to pipenv - closes #423",
          "timestamp": "2023-01-12T17:30:27+01:00",
          "tree_id": "6d0eadca1984cc719693c3efb59b19453926a281",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/bd15de8fd8266e0672a1948babd860707ddea963"
        },
        "date": 1673541124600,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.4925765859784716,
            "unit": "iter/sec",
            "range": "stddev: 0.00042854680525555627",
            "extra": "mean: 401.1912835999965 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.4119903191719905,
            "unit": "iter/sec",
            "range": "stddev: 0.0010409664822147403",
            "extra": "mean: 414.5953621999979 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5677774294180634,
            "unit": "iter/sec",
            "range": "stddev: 0.00414840612213734",
            "extra": "mean: 1.761253526799996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5664497988574657,
            "unit": "iter/sec",
            "range": "stddev: 0.0015863968451362738",
            "extra": "mean: 1.7653815078000008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.74473611981783,
            "unit": "iter/sec",
            "range": "stddev: 0.0013044216594493003",
            "extra": "mean: 364.33374880000144 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 143686.06626041542,
            "unit": "iter/sec",
            "range": "stddev: 5.403642957551055e-7",
            "extra": "mean: 6.959617073708513 usec\nrounds: 49503"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 134150.1856052011,
            "unit": "iter/sec",
            "range": "stddev: 3.763239528082964e-7",
            "extra": "mean: 7.454331840754675 usec\nrounds: 51811"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 147549.5057488571,
            "unit": "iter/sec",
            "range": "stddev: 4.939104177349314e-7",
            "extra": "mean: 6.777386307901921 usec\nrounds: 51811"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 149908.0322664146,
            "unit": "iter/sec",
            "range": "stddev: 5.889032175495764e-7",
            "extra": "mean: 6.670756629123201 usec\nrounds: 52081"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 145066.22784747483,
            "unit": "iter/sec",
            "range": "stddev: 3.6662434807525716e-7",
            "extra": "mean: 6.893403205130676 usec\nrounds: 51542"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 140131.38262575128,
            "unit": "iter/sec",
            "range": "stddev: 4.959044022070108e-7",
            "extra": "mean: 7.136160232363501 usec\nrounds: 48542"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 75.78852180852901,
            "unit": "iter/sec",
            "range": "stddev: 0.00041371203384840265",
            "extra": "mean: 13.194610161765459 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 12.160802296247297,
            "unit": "iter/sec",
            "range": "stddev: 0.002550109646525231",
            "extra": "mean: 82.23141661538153 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 23.86851550861751,
            "unit": "iter/sec",
            "range": "stddev: 0.0003847711801503087",
            "extra": "mean: 41.89619583333363 msec\nrounds: 24"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e80e98c27426bc0d25bea678e699040bfc0844f",
          "message": "Merge pull request #432 from ClearcodeHQ/automerge-shared\n\nMigrate to shared automerge action based on the github application",
          "timestamp": "2023-01-12T21:43:55+01:00",
          "tree_id": "f4730074b3f6e0be335f7e8d350c4bf3b95eaeef",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/3e80e98c27426bc0d25bea678e699040bfc0844f"
        },
        "date": 1673556314941,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.9391219741903303,
            "unit": "iter/sec",
            "range": "stddev: 0.0072479077235263955",
            "extra": "mean: 340.237665799998 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.877521980832218,
            "unit": "iter/sec",
            "range": "stddev: 0.00019188219478303618",
            "extra": "mean: 347.5212375999945 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7043501744712843,
            "unit": "iter/sec",
            "range": "stddev: 0.0015590466056764419",
            "extra": "mean: 1.4197483528000021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6972340401691547,
            "unit": "iter/sec",
            "range": "stddev: 0.0013655178288116765",
            "extra": "mean: 1.4342386378000014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.172939007377759,
            "unit": "iter/sec",
            "range": "stddev: 0.0017815514377169158",
            "extra": "mean: 315.16521360000525 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 159850.04928309764,
            "unit": "iter/sec",
            "range": "stddev: 3.15579413743555e-7",
            "extra": "mean: 6.255862944583645 usec\nrounds: 58480"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 151735.68145830548,
            "unit": "iter/sec",
            "range": "stddev: 3.238702957088128e-7",
            "extra": "mean: 6.59040767727915 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 167076.34413322664,
            "unit": "iter/sec",
            "range": "stddev: 3.3261676281648807e-7",
            "extra": "mean: 5.985287774806709 usec\nrounds: 68498"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 168095.6892634102,
            "unit": "iter/sec",
            "range": "stddev: 3.282970660530883e-7",
            "extra": "mean: 5.948992531468042 usec\nrounds: 70428"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 163525.48735444027,
            "unit": "iter/sec",
            "range": "stddev: 3.1952297201106074e-7",
            "extra": "mean: 6.115254668726396 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 159672.34041671737,
            "unit": "iter/sec",
            "range": "stddev: 5.124231739964188e-7",
            "extra": "mean: 6.26282546739261 usec\nrounds: 60980"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 93.26493688108616,
            "unit": "iter/sec",
            "range": "stddev: 0.00012379885231272433",
            "extra": "mean: 10.72214310588138 msec\nrounds: 85"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.896541507659961,
            "unit": "iter/sec",
            "range": "stddev: 0.0018417522651166653",
            "extra": "mean: 62.9067649411752 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.56980351254919,
            "unit": "iter/sec",
            "range": "stddev: 0.00024879665234079203",
            "extra": "mean: 36.27156789655107 msec\nrounds: 29"
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
          "id": "563fe4087960fe21b8c0cc02eba8ffd5157b2c22",
          "message": "Test attempt at automerge change with app_id as regular input",
          "timestamp": "2023-01-13T10:03:11+01:00",
          "tree_id": "3525d6b65c2a3ff0f21046981be3c5b641701100",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/563fe4087960fe21b8c0cc02eba8ffd5157b2c22"
        },
        "date": 1673600703789,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.2768497099037917,
            "unit": "iter/sec",
            "range": "stddev: 0.016080353234538443",
            "extra": "mean: 439.2033412000018 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.2360341185123085,
            "unit": "iter/sec",
            "range": "stddev: 0.00800438304881073",
            "extra": "mean: 447.22036739999567 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5550379192365319,
            "unit": "iter/sec",
            "range": "stddev: 0.030488032579962958",
            "extra": "mean: 1.8016787058000006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.57272028679247,
            "unit": "iter/sec",
            "range": "stddev: 0.02748351095905359",
            "extra": "mean: 1.7460530437999977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.5616073194899354,
            "unit": "iter/sec",
            "range": "stddev: 0.009070956563243159",
            "extra": "mean: 390.37989640001456 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 132876.66163694306,
            "unit": "iter/sec",
            "range": "stddev: 0.000031971053927191654",
            "extra": "mean: 7.525776066923515 usec\nrounds: 42017"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 132481.51088973717,
            "unit": "iter/sec",
            "range": "stddev: 0.000015053155382815746",
            "extra": "mean: 7.5482230938043005 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 141119.67659750028,
            "unit": "iter/sec",
            "range": "stddev: 0.00004865334971202981",
            "extra": "mean: 7.086184039750792 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 147671.36878398008,
            "unit": "iter/sec",
            "range": "stddev: 0.00002816253989435984",
            "extra": "mean: 6.771793396611921 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 137400.9708182243,
            "unit": "iter/sec",
            "range": "stddev: 0.000018199543788188337",
            "extra": "mean: 7.277968954986191 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 133437.4283973658,
            "unit": "iter/sec",
            "range": "stddev: 0.00001623129904262092",
            "extra": "mean: 7.4941492204277305 usec\nrounds: 52084"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 92.08836535437092,
            "unit": "iter/sec",
            "range": "stddev: 0.0018239137853606458",
            "extra": "mean: 10.859135094339424 msec\nrounds: 53"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 12.509016368696257,
            "unit": "iter/sec",
            "range": "stddev: 0.0064413786767006705",
            "extra": "mean: 79.94233683333363 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 21.65974501688007,
            "unit": "iter/sec",
            "range": "stddev: 0.004176953855798291",
            "extra": "mean: 46.16859520833098 msec\nrounds: 24"
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
          "id": "b4dfa220711777733283a10bdde86ff1d5c4000f",
          "message": "Revert these changes",
          "timestamp": "2023-01-13T12:54:14+01:00",
          "tree_id": "f4730074b3f6e0be335f7e8d350c4bf3b95eaeef",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/b4dfa220711777733283a10bdde86ff1d5c4000f"
        },
        "date": 1673610941783,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.018060044748996,
            "unit": "iter/sec",
            "range": "stddev: 0.0005918496098422263",
            "extra": "mean: 331.33866959998386 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.853431078124783,
            "unit": "iter/sec",
            "range": "stddev: 0.0005035580815507566",
            "extra": "mean: 350.45528439999316 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7000234840238345,
            "unit": "iter/sec",
            "range": "stddev: 0.0036467443808733072",
            "extra": "mean: 1.4285235035999904 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6925322152579121,
            "unit": "iter/sec",
            "range": "stddev: 0.001799588304141341",
            "extra": "mean: 1.4439761471999986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.173778602741014,
            "unit": "iter/sec",
            "range": "stddev: 0.0006068339142239227",
            "extra": "mean: 315.0818393999998 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 163000.7149156448,
            "unit": "iter/sec",
            "range": "stddev: 3.0536249871571604e-7",
            "extra": "mean: 6.1349424173845755 usec\nrounds: 56180"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 153398.0930215591,
            "unit": "iter/sec",
            "range": "stddev: 3.732229453734643e-7",
            "extra": "mean: 6.518985864181875 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 168226.57977862962,
            "unit": "iter/sec",
            "range": "stddev: 2.980905322346567e-7",
            "extra": "mean: 5.944363853297773 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 171994.13826359558,
            "unit": "iter/sec",
            "range": "stddev: 3.711896236866156e-7",
            "extra": "mean: 5.814151633862169 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 165899.65014373494,
            "unit": "iter/sec",
            "range": "stddev: 2.8736997005244384e-7",
            "extra": "mean: 6.027740258244084 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 160799.0032890668,
            "unit": "iter/sec",
            "range": "stddev: 4.304316760132093e-7",
            "extra": "mean: 6.218944020457077 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 91.9346277509088,
            "unit": "iter/sec",
            "range": "stddev: 0.00016591586571776068",
            "extra": "mean: 10.877294273812021 msec\nrounds: 84"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.024549783809654,
            "unit": "iter/sec",
            "range": "stddev: 0.001979403417025359",
            "extra": "mean: 66.55773479998666 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.75986690602647,
            "unit": "iter/sec",
            "range": "stddev: 0.0010686717116857147",
            "extra": "mean: 36.023227466660046 msec\nrounds: 30"
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
          "id": "553cb16e40d4fedb0bab82e31095959fd4d20003",
          "message": "It's secrets",
          "timestamp": "2023-01-13T13:44:07+01:00",
          "tree_id": "00769b7768d69454078d61c34878936154d873eb",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/553cb16e40d4fedb0bab82e31095959fd4d20003"
        },
        "date": 1673613937400,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.756003366857269,
            "unit": "iter/sec",
            "range": "stddev: 0.0019355426576865402",
            "extra": "mean: 362.8442591999885 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.6475476561384466,
            "unit": "iter/sec",
            "range": "stddev: 0.0036968566375076267",
            "extra": "mean: 377.70802640000056 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6314315582153018,
            "unit": "iter/sec",
            "range": "stddev: 0.005800729204779515",
            "extra": "mean: 1.5837029160000042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6217670504073125,
            "unit": "iter/sec",
            "range": "stddev: 0.01019144549547891",
            "extra": "mean: 1.6083193848000008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.9757122296400818,
            "unit": "iter/sec",
            "range": "stddev: 0.001252770352937462",
            "extra": "mean: 336.0540007999873 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 163096.56480282926,
            "unit": "iter/sec",
            "range": "stddev: 4.6692364721169587e-7",
            "extra": "mean: 6.131336985600648 usec\nrounds: 54943"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 151080.1085472577,
            "unit": "iter/sec",
            "range": "stddev: 4.7313436316220893e-7",
            "extra": "mean: 6.619005040542455 usec\nrounds: 53764"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 161645.69579514966,
            "unit": "iter/sec",
            "range": "stddev: 3.1924558091867654e-7",
            "extra": "mean: 6.186369485935957 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 167069.4998129869,
            "unit": "iter/sec",
            "range": "stddev: 5.18366835059138e-7",
            "extra": "mean: 5.985532973519242 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 162380.20811682634,
            "unit": "iter/sec",
            "range": "stddev: 3.279638514740335e-7",
            "extra": "mean: 6.158385997883056 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 156639.25592324915,
            "unit": "iter/sec",
            "range": "stddev: 4.2291459384621694e-7",
            "extra": "mean: 6.384095698781823 usec\nrounds: 57472"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 64.47693255666337,
            "unit": "iter/sec",
            "range": "stddev: 0.00033061544111503635",
            "extra": "mean: 15.509422677966013 msec\nrounds: 59"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 13.072877186520662,
            "unit": "iter/sec",
            "range": "stddev: 0.004984056668417549",
            "extra": "mean: 76.49425491666761 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 26.21183121039264,
            "unit": "iter/sec",
            "range": "stddev: 0.0010581665135922253",
            "extra": "mean: 38.1507111034468 msec\nrounds: 29"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7267b59e9006a222f95fa8ab413793e6046c6cef",
          "message": "Bump rhysd/github-action-benchmark from 1.14.0 to 1.15.0",
          "timestamp": "2023-01-13T13:34:41Z",
          "tree_id": "f72621b71a7811d175244e9da079d89bc142d85d",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/7267b59e9006a222f95fa8ab413793e6046c6cef"
        },
        "date": 1673616960681,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.8771731529787608,
            "unit": "iter/sec",
            "range": "stddev: 0.0011626078156814453",
            "extra": "mean: 347.5633710000011 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.752515402440365,
            "unit": "iter/sec",
            "range": "stddev: 0.0007545800703616336",
            "extra": "mean: 363.3040523999995 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6624712862702052,
            "unit": "iter/sec",
            "range": "stddev: 0.0011388512649842053",
            "extra": "mean: 1.509499386200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.659481492004619,
            "unit": "iter/sec",
            "range": "stddev: 0.0032038223973847074",
            "extra": "mean: 1.5163427815999966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.1351918935645844,
            "unit": "iter/sec",
            "range": "stddev: 0.0012137231283970604",
            "extra": "mean: 318.9597427999985 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 165397.25428100888,
            "unit": "iter/sec",
            "range": "stddev: 2.964811730445862e-7",
            "extra": "mean: 6.046049581337103 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 154306.30373708814,
            "unit": "iter/sec",
            "range": "stddev: 3.324696450490219e-7",
            "extra": "mean: 6.480616642232783 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 168093.19025789257,
            "unit": "iter/sec",
            "range": "stddev: 2.796033095436565e-7",
            "extra": "mean: 5.949080973867985 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 172308.80013146586,
            "unit": "iter/sec",
            "range": "stddev: 3.14130855781157e-7",
            "extra": "mean: 5.803534115709896 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 167860.93813984358,
            "unit": "iter/sec",
            "range": "stddev: 2.927538321575553e-7",
            "extra": "mean: 5.957312112523214 usec\nrounds: 64512"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 161334.87478362958,
            "unit": "iter/sec",
            "range": "stddev: 3.3806887710369516e-7",
            "extra": "mean: 6.198287886243604 usec\nrounds: 60972"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 89.57284580117663,
            "unit": "iter/sec",
            "range": "stddev: 0.00048483647654290376",
            "extra": "mean: 11.164097680000964 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.634960844855232,
            "unit": "iter/sec",
            "range": "stddev: 0.0021665998315095985",
            "extra": "mean: 68.3295302666655 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 28.343159780858603,
            "unit": "iter/sec",
            "range": "stddev: 0.00021319361312687653",
            "extra": "mean: 35.28188133333477 msec\nrounds: 30"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4a5dd6b409da422428c82469a1ca376f74afd03",
          "message": "Bump mypy from 0.982 to 0.991",
          "timestamp": "2023-01-13T13:53:44Z",
          "tree_id": "b18d94cfbb77e9e650a0fe7bd99f5e9a584e39b0",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c4a5dd6b409da422428c82469a1ca376f74afd03"
        },
        "date": 1673618104784,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.949216748461055,
            "unit": "iter/sec",
            "range": "stddev: 0.0007395136275905438",
            "extra": "mean: 339.07307780000053 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.809753886863083,
            "unit": "iter/sec",
            "range": "stddev: 0.000716507914118092",
            "extra": "mean: 355.90305779999767 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6925151030421463,
            "unit": "iter/sec",
            "range": "stddev: 0.0019837266647005987",
            "extra": "mean: 1.4440118281999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.691159274275126,
            "unit": "iter/sec",
            "range": "stddev: 0.00204154011568598",
            "extra": "mean: 1.4468445078000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.1471164354944094,
            "unit": "iter/sec",
            "range": "stddev: 0.0005719535144369387",
            "extra": "mean: 317.75119240000436 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 159413.5704371019,
            "unit": "iter/sec",
            "range": "stddev: 3.6128209838455264e-7",
            "extra": "mean: 6.272991673532331 usec\nrounds: 54645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 150542.63109820196,
            "unit": "iter/sec",
            "range": "stddev: 4.321495311759669e-7",
            "extra": "mean: 6.642636658500276 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 164997.1429790207,
            "unit": "iter/sec",
            "range": "stddev: 3.7539260316716846e-7",
            "extra": "mean: 6.060711003505979 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 167737.0245623981,
            "unit": "iter/sec",
            "range": "stddev: 3.342699605841199e-7",
            "extra": "mean: 5.961713000506937 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 161555.0825466075,
            "unit": "iter/sec",
            "range": "stddev: 8.17001974859614e-7",
            "extra": "mean: 6.189839305807708 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 158879.3714546533,
            "unit": "iter/sec",
            "range": "stddev: 3.2282896358580913e-7",
            "extra": "mean: 6.294083308892091 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 83.93704448092033,
            "unit": "iter/sec",
            "range": "stddev: 0.00020427804396822198",
            "extra": "mean: 11.91369086419655 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 13.305630339349175,
            "unit": "iter/sec",
            "range": "stddev: 0.0004283480743448873",
            "extra": "mean: 75.15615378571486 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 26.556864562644204,
            "unit": "iter/sec",
            "range": "stddev: 0.00009073811231793474",
            "extra": "mean: 37.655047629629976 msec\nrounds: 27"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37e346700923e5afc9fc09453822ed51d3a2c55d",
          "message": "Bump pycodestyle from 2.9.1 to 2.10.0",
          "timestamp": "2023-01-13T13:58:32Z",
          "tree_id": "2288eb78571525f0d384af9a13f4ad26d4e70ee5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/37e346700923e5afc9fc09453822ed51d3a2c55d"
        },
        "date": 1673618390327,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.837144152258627,
            "unit": "iter/sec",
            "range": "stddev: 0.0027248727762364017",
            "extra": "mean: 352.4671100000006 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.7347154876746407,
            "unit": "iter/sec",
            "range": "stddev: 0.0012369261399522936",
            "extra": "mean: 365.66875219999986 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6404311577655031,
            "unit": "iter/sec",
            "range": "stddev: 0.001765200124405212",
            "extra": "mean: 1.5614480773999986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6426583323155802,
            "unit": "iter/sec",
            "range": "stddev: 0.002942865429067808",
            "extra": "mean: 1.556036776800002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.076254441188525,
            "unit": "iter/sec",
            "range": "stddev: 0.0021162341788471773",
            "extra": "mean: 325.0706400000013 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 167359.50153407306,
            "unit": "iter/sec",
            "range": "stddev: 2.6251218059443767e-7",
            "extra": "mean: 5.975161199894037 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 159363.51654964325,
            "unit": "iter/sec",
            "range": "stddev: 2.6812796451623167e-7",
            "extra": "mean: 6.274961933890876 usec\nrounds: 64099"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 169487.82905099826,
            "unit": "iter/sec",
            "range": "stddev: 4.965520333591086e-7",
            "extra": "mean: 5.90012867354094 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 175044.14738942002,
            "unit": "iter/sec",
            "range": "stddev: 4.0145372433357237e-7",
            "extra": "mean: 5.712844530444677 usec\nrounds: 58140"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 169479.77588564347,
            "unit": "iter/sec",
            "range": "stddev: 3.6076303217741406e-7",
            "extra": "mean: 5.900409029775625 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 162596.53105499354,
            "unit": "iter/sec",
            "range": "stddev: 2.743970083648926e-7",
            "extra": "mean: 6.150192710210891 usec\nrounds: 61346"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 98.13354181160089,
            "unit": "iter/sec",
            "range": "stddev: 0.00033164486126903057",
            "extra": "mean: 10.190195742856442 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 16.365111044249424,
            "unit": "iter/sec",
            "range": "stddev: 0.0037465661237466117",
            "extra": "mean: 61.10560431249823 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 31.11503162238128,
            "unit": "iter/sec",
            "range": "stddev: 0.0009191080969851408",
            "extra": "mean: 32.13880712500039 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee90559274c45496347f2144e48fd20c8ccc65a0",
          "message": "Bump pydocstyle from 6.1.1 to 6.2.3",
          "timestamp": "2023-01-13T14:03:04Z",
          "tree_id": "bedd5e5ed2c1d82f26a5c584143b8be13313ee91",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/ee90559274c45496347f2144e48fd20c8ccc65a0"
        },
        "date": 1673618664279,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.9790742200354714,
            "unit": "iter/sec",
            "range": "stddev: 0.0004938532605984717",
            "extra": "mean: 335.6747519999999 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.828751035382246,
            "unit": "iter/sec",
            "range": "stddev: 0.006969482728606522",
            "extra": "mean: 353.51290640000457 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6965545259703869,
            "unit": "iter/sec",
            "range": "stddev: 0.0015399984880898308",
            "extra": "mean: 1.435637789599997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7011273299574544,
            "unit": "iter/sec",
            "range": "stddev: 0.0014070445024148732",
            "extra": "mean: 1.4262744544000043 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.180041202547235,
            "unit": "iter/sec",
            "range": "stddev: 0.002409997152425979",
            "extra": "mean: 314.46133440000494 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 161783.34890454292,
            "unit": "iter/sec",
            "range": "stddev: 2.8877896303823736e-7",
            "extra": "mean: 6.181105823134062 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 151457.6271687861,
            "unit": "iter/sec",
            "range": "stddev: 3.7289531707677164e-7",
            "extra": "mean: 6.602506712227762 usec\nrounds: 57804"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 167795.40445700358,
            "unit": "iter/sec",
            "range": "stddev: 6.456303361708392e-7",
            "extra": "mean: 5.9596387829336726 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 171572.563698996,
            "unit": "iter/sec",
            "range": "stddev: 2.9825047839860587e-7",
            "extra": "mean: 5.828437708457764 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 164351.9065862965,
            "unit": "iter/sec",
            "range": "stddev: 2.988394458970046e-7",
            "extra": "mean: 6.084505015917953 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 158798.31899619606,
            "unit": "iter/sec",
            "range": "stddev: 3.204127746044458e-7",
            "extra": "mean: 6.297295880216179 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 95.43129683413858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000957336925728505",
            "extra": "mean: 10.478742647058638 msec\nrounds: 85"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 18.443724334180608,
            "unit": "iter/sec",
            "range": "stddev: 0.0016761399114279144",
            "extra": "mean: 54.21898429411907 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 32.47638472073487,
            "unit": "iter/sec",
            "range": "stddev: 0.0008444784693262667",
            "extra": "mean: 30.791604687498975 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "651b8bc90fd50260b612c93f4a0b56e5cef67183",
          "message": "Bump black from 22.10.0 to 22.12.0",
          "timestamp": "2023-01-13T14:09:32Z",
          "tree_id": "c57ca5b4cd01a3d932bdc3a3080e69511434612b",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/651b8bc90fd50260b612c93f4a0b56e5cef67183"
        },
        "date": 1673619056595,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.6821466970707473,
            "unit": "iter/sec",
            "range": "stddev: 0.009024282032200919",
            "extra": "mean: 372.8356845999997 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.481451289332775,
            "unit": "iter/sec",
            "range": "stddev: 0.005730783188344845",
            "extra": "mean: 402.9899778000015 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.583266792080163,
            "unit": "iter/sec",
            "range": "stddev: 0.0071269017466867954",
            "extra": "mean: 1.7144812864000016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5825354456889267,
            "unit": "iter/sec",
            "range": "stddev: 0.006820544318970581",
            "extra": "mean: 1.716633738600001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.782816478250099,
            "unit": "iter/sec",
            "range": "stddev: 0.0035036421160660343",
            "extra": "mean: 359.3481667999981 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 147177.37699511857,
            "unit": "iter/sec",
            "range": "stddev: 9.332137758712419e-7",
            "extra": "mean: 6.7945225035038295 usec\nrounds: 49259"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 137285.82620975687,
            "unit": "iter/sec",
            "range": "stddev: 9.173133115508948e-7",
            "extra": "mean: 7.284073145847668 usec\nrounds: 52908"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 150778.36302284076,
            "unit": "iter/sec",
            "range": "stddev: 8.49027659754085e-7",
            "extra": "mean: 6.632251338665313 usec\nrounds: 54345"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 154955.9825366625,
            "unit": "iter/sec",
            "range": "stddev: 8.520389544582202e-7",
            "extra": "mean: 6.453445576155155 usec\nrounds: 50759"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 146219.12430509698,
            "unit": "iter/sec",
            "range": "stddev: 7.77817264721785e-7",
            "extra": "mean: 6.8390506696882305 usec\nrounds: 50247"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 143973.0261207739,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010209259841681128",
            "extra": "mean: 6.94574551180952 usec\nrounds: 52081"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 77.12671553759051,
            "unit": "iter/sec",
            "range": "stddev: 0.000368670719251941",
            "extra": "mean: 12.965675940298711 msec\nrounds: 67"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.904292982451933,
            "unit": "iter/sec",
            "range": "stddev: 0.0018821018400979033",
            "extra": "mean: 84.00330884615286 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 22.920582839249647,
            "unit": "iter/sec",
            "range": "stddev: 0.0002654809029956077",
            "extra": "mean: 43.62890799999993 msec\nrounds: 24"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d964be808b134e8bc7741426793b80bb1c662b74",
          "message": "Merge pull request #433 from ClearcodeHQ/tbump\n\nMigrate version management tool to tbump - closes #427",
          "timestamp": "2023-01-13T17:50:23+01:00",
          "tree_id": "3d5e68b155fd2cb21cca728524fd32d7c78b733e",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/d964be808b134e8bc7741426793b80bb1c662b74"
        },
        "date": 1673628703744,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.922711672248901,
            "unit": "iter/sec",
            "range": "stddev: 0.0032118436065448766",
            "extra": "mean: 342.14801599999873 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.794571342839573,
            "unit": "iter/sec",
            "range": "stddev: 0.00034637360667007607",
            "extra": "mean: 357.83663299999944 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6600555302341402,
            "unit": "iter/sec",
            "range": "stddev: 0.0015862214710308936",
            "extra": "mean: 1.5150240459999964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6642745080563714,
            "unit": "iter/sec",
            "range": "stddev: 0.011455436056753006",
            "extra": "mean: 1.5054017396000063 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.158425636274845,
            "unit": "iter/sec",
            "range": "stddev: 0.0018371560302990425",
            "extra": "mean: 316.61343819999956 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 165683.23673767256,
            "unit": "iter/sec",
            "range": "stddev: 2.798592482563759e-7",
            "extra": "mean: 6.03561361843327 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 155525.85866505356,
            "unit": "iter/sec",
            "range": "stddev: 4.084343196135755e-7",
            "extra": "mean: 6.4297989323668565 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 171205.1147268657,
            "unit": "iter/sec",
            "range": "stddev: 2.665106308099894e-7",
            "extra": "mean: 5.840946992707333 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 175880.09421735103,
            "unit": "iter/sec",
            "range": "stddev: 4.769217914891016e-7",
            "extra": "mean: 5.685691746129094 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 166850.06995178253,
            "unit": "iter/sec",
            "range": "stddev: 5.24721598345029e-7",
            "extra": "mean: 5.99340473929071 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 162728.18938809822,
            "unit": "iter/sec",
            "range": "stddev: 2.732488911128322e-7",
            "extra": "mean: 6.1452167799584645 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 88.16964550872248,
            "unit": "iter/sec",
            "range": "stddev: 0.000401032131624498",
            "extra": "mean: 11.34177181081069 msec\nrounds: 74"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 13.987420748847978,
            "unit": "iter/sec",
            "range": "stddev: 0.004626459452771332",
            "extra": "mean: 71.49280899999819 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 28.37967132168674,
            "unit": "iter/sec",
            "range": "stddev: 0.0005864188021666388",
            "extra": "mean: 35.23648983333487 msec\nrounds: 30"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf",
          "message": "Merge pull request #436 from ClearcodeHQ/python3.11\n\nAdd support for python 3.11 - closes #424",
          "timestamp": "2023-01-13T18:28:20+01:00",
          "tree_id": "cab7a8b0b5d8af18de9e5e1a8e4fc00d20792147",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf"
        },
        "date": 1673630986005,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.8553751107282284,
            "unit": "iter/sec",
            "range": "stddev: 0.0005777218816896955",
            "extra": "mean: 350.2166830000007 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.759878231787846,
            "unit": "iter/sec",
            "range": "stddev: 0.00020813470713867445",
            "extra": "mean: 362.3348264000043 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6442203137035665,
            "unit": "iter/sec",
            "range": "stddev: 0.0007223026089486447",
            "extra": "mean: 1.5522639983999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.644851020129435,
            "unit": "iter/sec",
            "range": "stddev: 0.0026560055118305995",
            "extra": "mean: 1.5507457828000013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.094295121913624,
            "unit": "iter/sec",
            "range": "stddev: 0.0023256929644017705",
            "extra": "mean: 323.1753793999985 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 166277.12185032305,
            "unit": "iter/sec",
            "range": "stddev: 3.882133380600981e-7",
            "extra": "mean: 6.014056467131814 usec\nrounds: 58140"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 153540.4746506401,
            "unit": "iter/sec",
            "range": "stddev: 4.923374826252243e-7",
            "extra": "mean: 6.512940657994971 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 171493.70669122966,
            "unit": "iter/sec",
            "range": "stddev: 3.6013610168188237e-7",
            "extra": "mean: 5.831117766907192 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 173752.57493490196,
            "unit": "iter/sec",
            "range": "stddev: 3.2003096333389916e-7",
            "extra": "mean: 5.755310391081453 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 163725.5091772807,
            "unit": "iter/sec",
            "range": "stddev: 3.4320159405621124e-7",
            "extra": "mean: 6.1077837230434735 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 163000.2075508282,
            "unit": "iter/sec",
            "range": "stddev: 4.0424270786799653e-7",
            "extra": "mean: 6.134961513396668 usec\nrounds: 61346"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 90.10282036335705,
            "unit": "iter/sec",
            "range": "stddev: 0.0005727066232148485",
            "extra": "mean: 11.098431724637546 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.307946410845652,
            "unit": "iter/sec",
            "range": "stddev: 0.0025569246706127835",
            "extra": "mean: 69.89123185714367 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.298396699645906,
            "unit": "iter/sec",
            "range": "stddev: 0.0009869717139014468",
            "extra": "mean: 36.632187999999694 msec\nrounds: 28"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3baaefdfd013139d2162ed574675bae14b0be27",
          "message": "Bump pytest from 7.2.0 to 7.2.1",
          "timestamp": "2023-01-16T04:12:28Z",
          "tree_id": "7a297e3c4218d1b4126aaa2c115e9cbd68d653df",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c3baaefdfd013139d2162ed574675bae14b0be27"
        },
        "date": 1673842428817,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.893594051705395,
            "unit": "iter/sec",
            "range": "stddev: 0.002391799779965085",
            "extra": "mean: 345.5909785999978 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.797450065183436,
            "unit": "iter/sec",
            "range": "stddev: 0.0008024282630921865",
            "extra": "mean: 357.4684004000005 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6588872744889996,
            "unit": "iter/sec",
            "range": "stddev: 0.000866417572412294",
            "extra": "mean: 1.5177102953999992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6591882265109886,
            "unit": "iter/sec",
            "range": "stddev: 0.0018498170516695303",
            "extra": "mean: 1.517017385599999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.1161863576866153,
            "unit": "iter/sec",
            "range": "stddev: 0.00042205369759756455",
            "extra": "mean: 320.905069600002 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 165760.88014032558,
            "unit": "iter/sec",
            "range": "stddev: 3.3098504391711983e-7",
            "extra": "mean: 6.032786500369965 usec\nrounds: 55246"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 159895.21669731202,
            "unit": "iter/sec",
            "range": "stddev: 4.2069369299093595e-7",
            "extra": "mean: 6.2540957800697665 usec\nrounds: 56494"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 175709.01121696588,
            "unit": "iter/sec",
            "range": "stddev: 2.580836233890487e-7",
            "extra": "mean: 5.691227746795511 usec\nrounds: 62890"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 176793.13644764756,
            "unit": "iter/sec",
            "range": "stddev: 4.1929436698853547e-7",
            "extra": "mean: 5.656328181587087 usec\nrounds: 60238"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 168625.14480995556,
            "unit": "iter/sec",
            "range": "stddev: 2.8465244874006384e-7",
            "extra": "mean: 5.93031366186237 usec\nrounds: 59172"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 165512.17022201605,
            "unit": "iter/sec",
            "range": "stddev: 3.75282424759928e-7",
            "extra": "mean: 6.041851778383498 usec\nrounds: 57468"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 89.81386424663242,
            "unit": "iter/sec",
            "range": "stddev: 0.000423819587989828",
            "extra": "mean: 11.134138458333787 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.029378708088656,
            "unit": "iter/sec",
            "range": "stddev: 0.002278567888526767",
            "extra": "mean: 66.53634986666552 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.615750955902914,
            "unit": "iter/sec",
            "range": "stddev: 0.0009307181618169088",
            "extra": "mean: 36.211218793101416 msec\nrounds: 29"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f321b36ac5981710681bf2ec9661b587ebdf756d",
          "message": "Merge pull request #437 from ClearcodeHQ/order\n\nRun benchmarks only after tests",
          "timestamp": "2023-01-16T10:09:22+01:00",
          "tree_id": "f9722ee8a25d0d75f3fa9f130017ffb46662ad73",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f321b36ac5981710681bf2ec9661b587ebdf756d"
        },
        "date": 1673860469125,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.881690182573562,
            "unit": "iter/sec",
            "range": "stddev: 0.0007976222296005007",
            "extra": "mean: 347.0185678000007 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.7871301385077265,
            "unit": "iter/sec",
            "range": "stddev: 0.0005958632135097299",
            "extra": "mean: 358.7920011999927 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6673294166909485,
            "unit": "iter/sec",
            "range": "stddev: 0.001101345105224245",
            "extra": "mean: 1.498510293399994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6634169651903271,
            "unit": "iter/sec",
            "range": "stddev: 0.0012904953889589438",
            "extra": "mean: 1.5073476447999952 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.1427356673239606,
            "unit": "iter/sec",
            "range": "stddev: 0.0004684755672009961",
            "extra": "mean: 318.194116799998 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 166663.2042931895,
            "unit": "iter/sec",
            "range": "stddev: 3.194548140994592e-7",
            "extra": "mean: 6.000124648034646 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 156164.33846914204,
            "unit": "iter/sec",
            "range": "stddev: 3.6199551480391295e-7",
            "extra": "mean: 6.403510620944995 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 170209.9011578936,
            "unit": "iter/sec",
            "range": "stddev: 3.0671586672546696e-7",
            "extra": "mean: 5.875098882011333 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 173620.21550472328,
            "unit": "iter/sec",
            "range": "stddev: 2.5797521120159525e-7",
            "extra": "mean: 5.759697953910185 usec\nrounds: 61729"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 167431.1322468026,
            "unit": "iter/sec",
            "range": "stddev: 3.199389464154017e-7",
            "extra": "mean: 5.972604894805022 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 163345.10410175615,
            "unit": "iter/sec",
            "range": "stddev: 2.9257641652085365e-7",
            "extra": "mean: 6.122007791412273 usec\nrounds: 62890"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 97.6841798357113,
            "unit": "iter/sec",
            "range": "stddev: 0.00027140233818528074",
            "extra": "mean: 10.23707218181936 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 16.13752178206092,
            "unit": "iter/sec",
            "range": "stddev: 0.002338098946559593",
            "extra": "mean: 61.96738343750141 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 29.78680322356766,
            "unit": "iter/sec",
            "range": "stddev: 0.0007223189943757263",
            "extra": "mean: 33.571914129032436 msec\nrounds: 31"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6b72a545782dfc9f883d35e8bf5413198a629a3",
          "message": "Bump pydocstyle from 6.2.3 to 6.3.0",
          "timestamp": "2023-01-18T04:09:33Z",
          "tree_id": "3b3f6febdf72fc4eaaf2820e32b1cbf670ff91c0",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f6b72a545782dfc9f883d35e8bf5413198a629a3"
        },
        "date": 1674015251994,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.281245624314247,
            "unit": "iter/sec",
            "range": "stddev: 0.011468806565103625",
            "extra": "mean: 438.357005200001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.27553833625556,
            "unit": "iter/sec",
            "range": "stddev: 0.008782914878527502",
            "extra": "mean: 439.4564504000044 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5401242689269767,
            "unit": "iter/sec",
            "range": "stddev: 0.019674650353430613",
            "extra": "mean: 1.851425787599996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5504879012527708,
            "unit": "iter/sec",
            "range": "stddev: 0.01540308096462083",
            "extra": "mean: 1.8165703510000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.523039386461402,
            "unit": "iter/sec",
            "range": "stddev: 0.007674988813071878",
            "extra": "mean: 396.34736000000146 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 124080.76819968966,
            "unit": "iter/sec",
            "range": "stddev: 0.000019152580745204664",
            "extra": "mean: 8.05926667370924 usec\nrounds: 47620"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 119619.95834040869,
            "unit": "iter/sec",
            "range": "stddev: 0.00002277283050891499",
            "extra": "mean: 8.359808963937677 usec\nrounds: 54351"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 138527.3757723646,
            "unit": "iter/sec",
            "range": "stddev: 0.00000888828038537148",
            "extra": "mean: 7.218789747690391 usec\nrounds: 52632"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 135728.4129104358,
            "unit": "iter/sec",
            "range": "stddev: 0.000012066797870755063",
            "extra": "mean: 7.367654115722092 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 128046.01799331373,
            "unit": "iter/sec",
            "range": "stddev: 0.00001059156472288233",
            "extra": "mean: 7.809692294001816 usec\nrounds: 56177"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 122464.12599397363,
            "unit": "iter/sec",
            "range": "stddev: 0.000014331462197563673",
            "extra": "mean: 8.165656610730306 usec\nrounds: 51280"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 77.49822795189189,
            "unit": "iter/sec",
            "range": "stddev: 0.0010954037850713907",
            "extra": "mean: 12.903520847222005 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.342238628979972,
            "unit": "iter/sec",
            "range": "stddev: 0.009153284359076985",
            "extra": "mean: 88.1660166666703 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 22.518299221420786,
            "unit": "iter/sec",
            "range": "stddev: 0.0013841998525588527",
            "extra": "mean: 44.4083272083328 msec\nrounds: 24"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d20cb0908943f121295eabac957a91fb74cf43bd",
          "message": "Merge pull request #440 from ClearcodeHQ/dependabot/pip/black-23.1.0\n\nBump black from 22.12.0 to 23.1.0",
          "timestamp": "2023-02-01T09:58:31+01:00",
          "tree_id": "91dea9c2af28eb7217db916a6b7105b7ed37347b",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/d20cb0908943f121295eabac957a91fb74cf43bd"
        },
        "date": 1675242418076,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.5746094952809178,
            "unit": "iter/sec",
            "range": "stddev: 0.008271783206231122",
            "extra": "mean: 388.4084176000016 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.4026648293918154,
            "unit": "iter/sec",
            "range": "stddev: 0.003125546883338277",
            "extra": "mean: 416.2045357999972 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5676306451486802,
            "unit": "iter/sec",
            "range": "stddev: 0.014829505515468983",
            "extra": "mean: 1.7617089714000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5626922417787115,
            "unit": "iter/sec",
            "range": "stddev: 0.012533148803705534",
            "extra": "mean: 1.7771704064000005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.8054906812487768,
            "unit": "iter/sec",
            "range": "stddev: 0.0040947192264326245",
            "extra": "mean: 356.44388579999884 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 147718.62343565654,
            "unit": "iter/sec",
            "range": "stddev: 0.000001445545332534249",
            "extra": "mean: 6.769627124474128 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 141237.30090473237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015537431678126231",
            "extra": "mean: 7.080282571206324 usec\nrounds: 56177"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 153952.64031223397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014627384311806708",
            "extra": "mean: 6.49550405872795 usec\nrounds: 60241"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 150973.32619068597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013820730776543149",
            "extra": "mean: 6.623686615587682 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 149049.67548924166,
            "unit": "iter/sec",
            "range": "stddev: 0.000001376057483444371",
            "extra": "mean: 6.70917260784093 usec\nrounds: 62894"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 142991.48619585807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013642684671030226",
            "extra": "mean: 6.993423361096349 usec\nrounds: 54946"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 100.10102863150577,
            "unit": "iter/sec",
            "range": "stddev: 0.0005817323242655322",
            "extra": "mean: 9.98990733333244 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.808009823729632,
            "unit": "iter/sec",
            "range": "stddev: 0.0032267483195493408",
            "extra": "mean: 63.25906999999997 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.972646945255807,
            "unit": "iter/sec",
            "range": "stddev: 0.0021495718222392275",
            "extra": "mean: 35.749208931034005 msec\nrounds: 29"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc672b755740bbbb88b91789eb87e6315538ec20",
          "message": "Merge pull request #441 from ClearcodeHQ/publish-docs\n\nPublish documentation to the github-pages",
          "timestamp": "2023-02-03T21:14:46+01:00",
          "tree_id": "672a5ab7bde84d965fdf3f2519922d01e4e35c25",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/cc672b755740bbbb88b91789eb87e6315538ec20"
        },
        "date": 1675455666754,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.481424840257492,
            "unit": "iter/sec",
            "range": "stddev: 0.0010620999238888978",
            "extra": "mean: 402.99427320000234 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.3616120836216297,
            "unit": "iter/sec",
            "range": "stddev: 0.0013503594704840079",
            "extra": "mean: 423.43956779999985 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5559924711191366,
            "unit": "iter/sec",
            "range": "stddev: 0.0036237869841112824",
            "extra": "mean: 1.798585505999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5547192388272373,
            "unit": "iter/sec",
            "range": "stddev: 0.015220024629997797",
            "extra": "mean: 1.8027137513999976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 2.693649267433362,
            "unit": "iter/sec",
            "range": "stddev: 0.0014153113287218482",
            "extra": "mean: 371.2435810000045 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 142206.79309775206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012089953633699685",
            "extra": "mean: 7.032012875169798 usec\nrounds: 50252"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 134297.01006114302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012990176666753498",
            "extra": "mean: 7.446182156585004 usec\nrounds: 50506"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 149419.6456926357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014002749449477197",
            "extra": "mean: 6.692560374939277 usec\nrounds: 52911"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 147984.11820882637,
            "unit": "iter/sec",
            "range": "stddev: 9.68114544803116e-7",
            "extra": "mean: 6.757481898083547 usec\nrounds: 54055"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 144324.39774767964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011969513095051097",
            "extra": "mean: 6.928835426344798 usec\nrounds: 53192"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 140692.2741184684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013005761794371238",
            "extra": "mean: 7.1077108268074545 usec\nrounds: 48075"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 83.70506994350306,
            "unit": "iter/sec",
            "range": "stddev: 0.0005410608742529669",
            "extra": "mean: 11.946707656716043 msec\nrounds: 67"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 13.304312479598892,
            "unit": "iter/sec",
            "range": "stddev: 0.0037217911255320187",
            "extra": "mean: 75.16359838461557 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 23.163369587739275,
            "unit": "iter/sec",
            "range": "stddev: 0.00036584024420578367",
            "extra": "mean: 43.17161180769292 msec\nrounds: 26"
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
          "id": "7ab370de05b97bfc5fd3bc101feef2b7f70f5312",
          "message": "Branch is main",
          "timestamp": "2023-02-03T21:23:43+01:00",
          "tree_id": "0da3786310aa184a9fc92b2e0ca0d08ed04aa78c",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/7ab370de05b97bfc5fd3bc101feef2b7f70f5312"
        },
        "date": 1675456323511,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.969593532994907,
            "unit": "iter/sec",
            "range": "stddev: 0.004597071180156288",
            "extra": "mean: 336.74642300001096 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.8367898608836843,
            "unit": "iter/sec",
            "range": "stddev: 0.005672520467903114",
            "extra": "mean: 352.51113019999707 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6835794779419481,
            "unit": "iter/sec",
            "range": "stddev: 0.002806453727324559",
            "extra": "mean: 1.4628876849999926 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6857227496489627,
            "unit": "iter/sec",
            "range": "stddev: 0.0012803178213876495",
            "extra": "mean: 1.4583153329999958 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.1610334041047774,
            "unit": "iter/sec",
            "range": "stddev: 0.0021311019635065587",
            "extra": "mean: 316.3522406000027 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 157660.84016908502,
            "unit": "iter/sec",
            "range": "stddev: 3.729135610536799e-7",
            "extra": "mean: 6.3427291071615475 usec\nrounds: 60607"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 151275.53280507147,
            "unit": "iter/sec",
            "range": "stddev: 3.329809283028972e-7",
            "extra": "mean: 6.610454324352411 usec\nrounds: 65790"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 164621.25181074103,
            "unit": "iter/sec",
            "range": "stddev: 2.9429185585109413e-7",
            "extra": "mean: 6.0745498470006964 usec\nrounds: 65360"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 167271.60009549622,
            "unit": "iter/sec",
            "range": "stddev: 3.368747258110875e-7",
            "extra": "mean: 5.978301154703457 usec\nrounds: 67115"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 161345.78417243407,
            "unit": "iter/sec",
            "range": "stddev: 2.650143304029048e-7",
            "extra": "mean: 6.197868789253746 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 157112.9104256496,
            "unit": "iter/sec",
            "range": "stddev: 2.9045386648477237e-7",
            "extra": "mean: 6.364849313088302 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 94.21454786838099,
            "unit": "iter/sec",
            "range": "stddev: 0.00015099918449816763",
            "extra": "mean: 10.614072058139191 msec\nrounds: 86"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 16.766301865086692,
            "unit": "iter/sec",
            "range": "stddev: 0.00258910346530257",
            "extra": "mean: 59.64344481249917 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.76909150145277,
            "unit": "iter/sec",
            "range": "stddev: 0.0004330067451120332",
            "extra": "mean: 36.01126093547871 msec\nrounds: 31"
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
          "id": "81c93969ee43f0c73ea1735bcdf3a64172c6029f",
          "message": "Publish documentation on tag only",
          "timestamp": "2023-02-03T21:31:04+01:00",
          "tree_id": "96fc4bcb7bd43110c801b601a750d1be8ab48eba",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/81c93969ee43f0c73ea1735bcdf3a64172c6029f"
        },
        "date": 1675456629538,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.87217322685629,
            "unit": "iter/sec",
            "range": "stddev: 0.0018859137998562092",
            "extra": "mean: 348.1684150000035 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.7730190998373643,
            "unit": "iter/sec",
            "range": "stddev: 0.0014670876819238116",
            "extra": "mean: 360.61778299999787 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6808201713972252,
            "unit": "iter/sec",
            "range": "stddev: 0.0015663869306409856",
            "extra": "mean: 1.468816645000004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6848823832381901,
            "unit": "iter/sec",
            "range": "stddev: 0.0006889607833257828",
            "extra": "mean: 1.460104719399999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.1036729272000545,
            "unit": "iter/sec",
            "range": "stddev: 0.004141232964045539",
            "extra": "mean: 322.19889900001135 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 159014.46423333557,
            "unit": "iter/sec",
            "range": "stddev: 2.7683693169496414e-7",
            "extra": "mean: 6.288736089646626 usec\nrounds: 62112"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 152076.64297383523,
            "unit": "iter/sec",
            "range": "stddev: 2.7200938948789004e-7",
            "extra": "mean: 6.575631737031767 usec\nrounds: 69931"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 166280.76279845144,
            "unit": "iter/sec",
            "range": "stddev: 3.2760123419445433e-7",
            "extra": "mean: 6.0139247810168985 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 167243.74586079194,
            "unit": "iter/sec",
            "range": "stddev: 2.983963030516669e-7",
            "extra": "mean: 5.979296833212325 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 161006.05319291272,
            "unit": "iter/sec",
            "range": "stddev: 3.2241204846100864e-7",
            "extra": "mean: 6.21094660833546 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 155382.24160208882,
            "unit": "iter/sec",
            "range": "stddev: 2.7482485878524334e-7",
            "extra": "mean: 6.4357418820154075 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 94.81512881844414,
            "unit": "iter/sec",
            "range": "stddev: 0.00009216102258223936",
            "extra": "mean: 10.546840071428269 msec\nrounds: 84"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.991268710298506,
            "unit": "iter/sec",
            "range": "stddev: 0.0016293485627272791",
            "extra": "mean: 55.58251705882105 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 30.898202319169258,
            "unit": "iter/sec",
            "range": "stddev: 0.0010132450892750583",
            "extra": "mean: 32.36434241935167 msec\nrounds: 31"
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
          "id": "0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc",
          "message": "Release 1.2.0",
          "timestamp": "2023-02-03T21:32:46+01:00",
          "tree_id": "10f78c8f4e7a2858db3db56f43ad1e29bc1f49f5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc"
        },
        "date": 1675456693905,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.8145702259935157,
            "unit": "iter/sec",
            "range": "stddev: 0.0003962199306681779",
            "extra": "mean: 355.2940306000039 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.7194183573134656,
            "unit": "iter/sec",
            "range": "stddev: 0.0011808837370885386",
            "extra": "mean: 367.7256929999942 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6358366546321403,
            "unit": "iter/sec",
            "range": "stddev: 0.0004479906437624072",
            "extra": "mean: 1.5727309721999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6327897215198115,
            "unit": "iter/sec",
            "range": "stddev: 0.003000113697923828",
            "extra": "mean: 1.5803037975999927 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.0051632172030627,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960382581666825",
            "extra": "mean: 332.76062819999197 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 161063.87749996112,
            "unit": "iter/sec",
            "range": "stddev: 3.009668353780223e-7",
            "extra": "mean: 6.208716786917298 usec\nrounds: 57801"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 153768.87507954516,
            "unit": "iter/sec",
            "range": "stddev: 2.676703176117838e-7",
            "extra": "mean: 6.503266668776087 usec\nrounds: 62497"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 170909.78220702946,
            "unit": "iter/sec",
            "range": "stddev: 2.8295117424154166e-7",
            "extra": "mean: 5.851040163334023 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 170345.49100758004,
            "unit": "iter/sec",
            "range": "stddev: 2.529049073608884e-7",
            "extra": "mean: 5.87042248130596 usec\nrounds: 63288"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 164864.0740146123,
            "unit": "iter/sec",
            "range": "stddev: 2.7318721861394244e-7",
            "extra": "mean: 6.065602866949458 usec\nrounds: 60972"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 160734.7730467823,
            "unit": "iter/sec",
            "range": "stddev: 3.218613280287232e-7",
            "extra": "mean: 6.221429134745767 usec\nrounds: 55556"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 96.93220380059893,
            "unit": "iter/sec",
            "range": "stddev: 0.0005181989973499251",
            "extra": "mean: 10.316488852942197 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.004232093704616,
            "unit": "iter/sec",
            "range": "stddev: 0.0038766084071330405",
            "extra": "mean: 66.64786266666549 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 26.761194934085903,
            "unit": "iter/sec",
            "range": "stddev: 0.0004380401726554204",
            "extra": "mean: 37.36753917241168 msec\nrounds: 29"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3ad0af6782add57837c6e45a9be88ac488b647e",
          "message": "Bump mypy from 0.991 to 1.0.0",
          "timestamp": "2023-02-07T04:12:30Z",
          "tree_id": "16ec4634a8db7fdf2d185c96629ab6c03df5aa70",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/e3ad0af6782add57837c6e45a9be88ac488b647e"
        },
        "date": 1675743467094,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 2.907001784964173,
            "unit": "iter/sec",
            "range": "stddev: 0.0025336890725047084",
            "extra": "mean: 343.9970368000047 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.752369764081674,
            "unit": "iter/sec",
            "range": "stddev: 0.0012692682705570054",
            "extra": "mean: 363.3232762000091 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6864305268755684,
            "unit": "iter/sec",
            "range": "stddev: 0.0030996685469579575",
            "extra": "mean: 1.4568116668000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6826655719550813,
            "unit": "iter/sec",
            "range": "stddev: 0.013334729620396382",
            "extra": "mean: 1.4648460989999932 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.084123592611263,
            "unit": "iter/sec",
            "range": "stddev: 0.0015636573028174844",
            "extra": "mean: 324.24122119999765 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 157033.9580256704,
            "unit": "iter/sec",
            "range": "stddev: 3.398390595312624e-7",
            "extra": "mean: 6.36804938608584 usec\nrounds: 55866"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 149528.49793705824,
            "unit": "iter/sec",
            "range": "stddev: 4.325613541630901e-7",
            "extra": "mean: 6.687688392489135 usec\nrounds: 58824"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 165301.58792525297,
            "unit": "iter/sec",
            "range": "stddev: 7.101639399320869e-7",
            "extra": "mean: 6.049548661638906 usec\nrounds: 64517"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 166694.87258908368,
            "unit": "iter/sec",
            "range": "stddev: 2.633695750030608e-7",
            "extra": "mean: 5.998984758607906 usec\nrounds: 56819"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 160446.0222978892,
            "unit": "iter/sec",
            "range": "stddev: 2.849739877766627e-7",
            "extra": "mean: 6.232625687306651 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 155650.2120063598,
            "unit": "iter/sec",
            "range": "stddev: 3.460978055687664e-7",
            "extra": "mean: 6.424661984778668 usec\nrounds: 55249"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 92.73711724459454,
            "unit": "iter/sec",
            "range": "stddev: 0.00017215567169066525",
            "extra": "mean: 10.783168915661847 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.695148900902483,
            "unit": "iter/sec",
            "range": "stddev: 0.003027202937129159",
            "extra": "mean: 63.71395431250093 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.606488145860368,
            "unit": "iter/sec",
            "range": "stddev: 0.0005549974148109937",
            "extra": "mean: 36.22336874999986 msec\nrounds: 28"
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
        "date": 1623157258625,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.853015287713379,
            "unit": "iter/sec",
            "range": "stddev: 0.0011085163083274503",
            "extra": "mean: 145.92116871428524 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.322324513519002,
            "unit": "iter/sec",
            "range": "stddev: 0.0008192797955108545",
            "extra": "mean: 158.16967285714358 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5466106696963395,
            "unit": "iter/sec",
            "range": "stddev: 0.09563456753210227",
            "extra": "mean: 1.8294556901999983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5543717040826126,
            "unit": "iter/sec",
            "range": "stddev: 0.09836552906290853",
            "extra": "mean: 1.8038438697999992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 10.103299314733427,
            "unit": "iter/sec",
            "range": "stddev: 0.004366372849788394",
            "extra": "mean: 98.97756849999695 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 515155.2094824609,
            "unit": "iter/sec",
            "range": "stddev: 0.000005377634404047014",
            "extra": "mean: 1.9411625498354397 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 215033.97730869905,
            "unit": "iter/sec",
            "range": "stddev: 0.00002824681804274827",
            "extra": "mean: 4.650427865008595 usec\nrounds: 200000"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 292216.78748802084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000188335804413555",
            "extra": "mean: 3.4221168762968417 usec\nrounds: 181819"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 541699.9269947195,
            "unit": "iter/sec",
            "range": "stddev: 0.000005512791276809111",
            "extra": "mean: 1.8460404924694722 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 290490.8229237159,
            "unit": "iter/sec",
            "range": "stddev: 0.000018783247009727454",
            "extra": "mean: 3.4424495408675924 usec\nrounds: 175439"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 280012.9275332831,
            "unit": "iter/sec",
            "range": "stddev: 0.00001989205638694059",
            "extra": "mean: 3.5712636870350463 usec\nrounds: 172414"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 53.0378458055362,
            "unit": "iter/sec",
            "range": "stddev: 0.0004831274317607768",
            "extra": "mean: 18.854461089285376 msec\nrounds: 56"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 26.990840003302406,
            "unit": "iter/sec",
            "range": "stddev: 0.018781746608234184",
            "extra": "mean: 37.04960645454707 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 151.02747809037746,
            "unit": "iter/sec",
            "range": "stddev: 0.0005934788583706862",
            "extra": "mean: 6.621311649007228 msec\nrounds: 151"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de54f7c9f03b06b5b153e6929139c5ff3fe8a259",
          "message": "Merge pull request #263 from ClearcodeHQ/cfg\n\nMove package configuration to setup.cfg",
          "timestamp": "2021-06-08T15:45:01+02:00",
          "tree_id": "e501787f0beeb09692623bde2463ebf851fde4ec",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/de54f7c9f03b06b5b153e6929139c5ff3fe8a259"
        },
        "date": 1623160084105,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 7.100171721912846,
            "unit": "iter/sec",
            "range": "stddev: 0.0027887107257291424",
            "extra": "mean: 140.84166400000697 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.42922721105906,
            "unit": "iter/sec",
            "range": "stddev: 0.0012946803137239946",
            "extra": "mean: 155.53968885714247 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5748008872425102,
            "unit": "iter/sec",
            "range": "stddev: 0.02758943084376926",
            "extra": "mean: 1.739732874799995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.572246542991514,
            "unit": "iter/sec",
            "range": "stddev: 0.06892492382022208",
            "extra": "mean: 1.7474985427999854 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 12.095473562475041,
            "unit": "iter/sec",
            "range": "stddev: 0.0027270275491548444",
            "extra": "mean: 82.675555846147 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 509454.7470921201,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060126855109496554",
            "extra": "mean: 1.962882877640923 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 222901.640679029,
            "unit": "iter/sec",
            "range": "stddev: 0.000030416257170460388",
            "extra": "mean: 4.486283712195583 usec\nrounds: 196079"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 308848.3368270751,
            "unit": "iter/sec",
            "range": "stddev: 0.00002147860625140366",
            "extra": "mean: 3.2378351467694415 usec\nrounds: 172414"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 294052.529044992,
            "unit": "iter/sec",
            "range": "stddev: 0.00003329494257969768",
            "extra": "mean: 3.400752930939775 usec\nrounds: 172385"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 300376.0503846621,
            "unit": "iter/sec",
            "range": "stddev: 0.000020630060007788205",
            "extra": "mean: 3.329160226720465 usec\nrounds: 172414"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 223874.60618421875,
            "unit": "iter/sec",
            "range": "stddev: 0.00004965189837727128",
            "extra": "mean: 4.466786193594168 usec\nrounds: 188680"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 50.83190351892667,
            "unit": "iter/sec",
            "range": "stddev: 0.0008162330576933539",
            "extra": "mean: 19.672684490905628 msec\nrounds: 55"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 24.24097696038385,
            "unit": "iter/sec",
            "range": "stddev: 0.019837882935227123",
            "extra": "mean: 41.25246278787623 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 131.05701992675966,
            "unit": "iter/sec",
            "range": "stddev: 0.0010138176263644828",
            "extra": "mean: 7.630266585939793 msec\nrounds: 128"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c64d7db2d1b6a436ed4d1ca6e1bc3cf4d8d7252c",
          "message": "Merge pull request #265 from ClearcodeHQ/issue-264\n\nPEP 561 Support",
          "timestamp": "2021-06-08T16:30:18+02:00",
          "tree_id": "8db6fe2f57f1be7c63cc5f151a3b83e8bdf30329",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c64d7db2d1b6a436ed4d1ca6e1bc3cf4d8d7252c"
        },
        "date": 1623162824485,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.777807608226993,
            "unit": "iter/sec",
            "range": "stddev: 0.006931629858304298",
            "extra": "mean: 147.54033424999946 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.2734212187846765,
            "unit": "iter/sec",
            "range": "stddev: 0.008523230067870095",
            "extra": "mean: 159.4026552857112 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5267075958329849,
            "unit": "iter/sec",
            "range": "stddev: 0.019527124153330952",
            "extra": "mean: 1.8985866312000041 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5230293719629582,
            "unit": "iter/sec",
            "range": "stddev: 0.02121580088208775",
            "extra": "mean: 1.9119385136000004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 9.671639954351226,
            "unit": "iter/sec",
            "range": "stddev: 0.007347538230844574",
            "extra": "mean: 103.39508136364243 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 322416.99345982284,
            "unit": "iter/sec",
            "range": "stddev: 0.000007756059599943631",
            "extra": "mean: 3.1015734911150403 usec\nrounds: 63292"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 162788.91922343106,
            "unit": "iter/sec",
            "range": "stddev: 0.00003582693927742618",
            "extra": "mean: 6.142924252893896 usec\nrounds: 175439"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 174911.51467641725,
            "unit": "iter/sec",
            "range": "stddev: 0.00003441220424907474",
            "extra": "mean: 5.717176492639606 usec\nrounds: 196079"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 242016.22884799456,
            "unit": "iter/sec",
            "range": "stddev: 0.00002202365661086213",
            "extra": "mean: 4.131954310502263 usec\nrounds: 169492"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 203010.48736011333,
            "unit": "iter/sec",
            "range": "stddev: 0.000034554093656989256",
            "extra": "mean: 4.925853895548434 usec\nrounds: 161291"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 161644.78291444125,
            "unit": "iter/sec",
            "range": "stddev: 0.00003469181193834509",
            "extra": "mean: 6.186404423143685 usec\nrounds: 185186"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 51.43376325548448,
            "unit": "iter/sec",
            "range": "stddev: 0.0014183988237606144",
            "extra": "mean: 19.442481683339945 msec\nrounds: 60"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 24.81116003187247,
            "unit": "iter/sec",
            "range": "stddev: 0.01340396930371628",
            "extra": "mean: 40.30444359374563 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 154.10035958478366,
            "unit": "iter/sec",
            "range": "stddev: 0.0009022931101936954",
            "extra": "mean: 6.4892775246888075 msec\nrounds: 162"
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
          "id": "c81cc92dae42e72b9a4161fdab55d9210eb15f07",
          "message": "\"Release 1.1.0\"",
          "timestamp": "2021-06-08T16:43:59+02:00",
          "tree_id": "00d2d952fcf8c150ada66ea9e957a6a9763412a5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c81cc92dae42e72b9a4161fdab55d9210eb15f07"
        },
        "date": 1623163671441,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.204593081566322,
            "unit": "iter/sec",
            "range": "stddev: 0.00636868575332922",
            "extra": "mean: 161.1709239999917 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 5.280001990349655,
            "unit": "iter/sec",
            "range": "stddev: 0.003803579542244998",
            "extra": "mean: 189.39386799999625 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.47434798092003416,
            "unit": "iter/sec",
            "range": "stddev: 0.040715010782693434",
            "extra": "mean: 2.1081569654000076 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.47064842646600613,
            "unit": "iter/sec",
            "range": "stddev: 0.015293045738554174",
            "extra": "mean: 2.1247282340000084 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 7.991998730550823,
            "unit": "iter/sec",
            "range": "stddev: 0.004222332426855889",
            "extra": "mean: 125.12514500000155 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 131001.76430267759,
            "unit": "iter/sec",
            "range": "stddev: 0.00004506870016939265",
            "extra": "mean: 7.633484978793989 usec\nrounds: 144928"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 124605.36736891947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000644799923997812",
            "extra": "mean: 8.025336477194415 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 136657.81944575405,
            "unit": "iter/sec",
            "range": "stddev: 0.00004551992400205408",
            "extra": "mean: 7.317546877710479 usec\nrounds: 153847"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 146856.94367784265,
            "unit": "iter/sec",
            "range": "stddev: 0.00004056815385892899",
            "extra": "mean: 6.809347756778062 usec\nrounds: 163935"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 135145.51603344086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000624338133400327",
            "extra": "mean: 7.399431585673598 usec\nrounds: 163935"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 130631.29951661127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000431071417956268",
            "extra": "mean: 7.655133216161864 usec\nrounds: 142858"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 47.79699950775579,
            "unit": "iter/sec",
            "range": "stddev: 0.0014527677100662128",
            "extra": "mean: 20.92181539215102 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 22.045244972652835,
            "unit": "iter/sec",
            "range": "stddev: 0.014789971087456649",
            "extra": "mean: 45.3612559642908 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 123.35693257775894,
            "unit": "iter/sec",
            "range": "stddev: 0.0014805126297342127",
            "extra": "mean: 8.106556957142582 msec\nrounds: 140"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fizyk@fizyk.dev",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "committer": {
            "email": "fizyk@fizyk.dev",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "distinct": true,
          "id": "af7c74b57d7edbab8169eb4132189ec1359af747",
          "message": "Dependabot to keep github-actions up to date",
          "timestamp": "2021-08-05T17:15:51+02:00",
          "tree_id": "cf1343692cd19d9199d93b17590da7e6aacc357a",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/af7c74b57d7edbab8169eb4132189ec1359af747"
        },
        "date": 1628177238025,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.727081916651811,
            "unit": "iter/sec",
            "range": "stddev: 0.0009522748917654095",
            "extra": "mean: 148.65286500000252 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.253538899997175,
            "unit": "iter/sec",
            "range": "stddev: 0.003389856343197091",
            "extra": "mean: 159.90945542858168 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5348896242781307,
            "unit": "iter/sec",
            "range": "stddev: 0.027856096413562976",
            "extra": "mean: 1.8695445838000069 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5294605566763099,
            "unit": "iter/sec",
            "range": "stddev: 0.017834920472130356",
            "extra": "mean: 1.888714820000007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 10.362106720747457,
            "unit": "iter/sec",
            "range": "stddev: 0.0019281837044820645",
            "extra": "mean: 96.50547199998982 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 513777.40681015124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053547454382135536",
            "extra": "mean: 1.9463681873608107 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 294249.2045982998,
            "unit": "iter/sec",
            "range": "stddev: 0.000017880231061899077",
            "extra": "mean: 3.3984798747890523 usec\nrounds: 158731"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 319079.25176983257,
            "unit": "iter/sec",
            "range": "stddev: 0.00003044736508520647",
            "extra": "mean: 3.134017628702724 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 594365.4134839023,
            "unit": "iter/sec",
            "range": "stddev: 0.000005380676270912861",
            "extra": "mean: 1.6824666733860647 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 309421.6747886163,
            "unit": "iter/sec",
            "range": "stddev: 0.000018152905162612878",
            "extra": "mean: 3.231835651730465 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 290659.38223505276,
            "unit": "iter/sec",
            "range": "stddev: 0.000019787035539730185",
            "extra": "mean: 3.4404531940803356 usec\nrounds: 172414"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 53.739836389808204,
            "unit": "iter/sec",
            "range": "stddev: 0.0004801573912311965",
            "extra": "mean: 18.608169789472054 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 27.026290632545155,
            "unit": "iter/sec",
            "range": "stddev: 0.014239803659100035",
            "extra": "mean: 37.00100815151438 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 151.62958465295327,
            "unit": "iter/sec",
            "range": "stddev: 0.0007660819016932616",
            "extra": "mean: 6.595019054419887 msec\nrounds: 147"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67bf963ab7af687f1a24927117f34b5698b15970",
          "message": "Merge pull request #271 from ClearcodeHQ/dependabot/github_actions/codecov/codecov-action-2.0.2\n\nBump codecov/codecov-action from 1 to 2.0.2",
          "timestamp": "2021-08-05T17:18:53+02:00",
          "tree_id": "be1179ce6c40e949326ce2cdb8b69eb029f573fa",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/67bf963ab7af687f1a24927117f34b5698b15970"
        },
        "date": 1628177369093,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 8.157689523484208,
            "unit": "iter/sec",
            "range": "stddev: 0.004802259008257625",
            "extra": "mean: 122.58372877776462 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 7.832496761977131,
            "unit": "iter/sec",
            "range": "stddev: 0.0021175986852449108",
            "extra": "mean: 127.67320950000283 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.601658877226436,
            "unit": "iter/sec",
            "range": "stddev: 0.04608079628547564",
            "extra": "mean: 1.662071379400004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5689325994191502,
            "unit": "iter/sec",
            "range": "stddev: 0.07415250977382738",
            "extra": "mean: 1.7576774490000162 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 10.080767724254473,
            "unit": "iter/sec",
            "range": "stddev: 0.0017071866083278678",
            "extra": "mean: 99.19879391665631 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 299627.9034327313,
            "unit": "iter/sec",
            "range": "stddev: 0.000019512739188552713",
            "extra": "mean: 3.3374728739996313 usec\nrounds: 149254"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 209977.75186827002,
            "unit": "iter/sec",
            "range": "stddev: 0.000033020471350323585",
            "extra": "mean: 4.762409308141141 usec\nrounds: 181819"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 581935.0505058016,
            "unit": "iter/sec",
            "range": "stddev: 0.000005759987212322636",
            "extra": "mean: 1.7184048273614707 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 589864.4168890282,
            "unit": "iter/sec",
            "range": "stddev: 0.00000601087355769423",
            "extra": "mean: 1.6953048384814406 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 317332.8309017166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000200869747946699",
            "extra": "mean: 3.1512654935779576 usec\nrounds: 188680"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 508490.21653454384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060584347486862065",
            "extra": "mean: 1.9666061754642705 usec\nrounds: 79994"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 51.11428928193419,
            "unit": "iter/sec",
            "range": "stddev: 0.0005038500583750891",
            "extra": "mean: 19.564000870367956 msec\nrounds: 54"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 27.75486184059699,
            "unit": "iter/sec",
            "range": "stddev: 0.01899707139440053",
            "extra": "mean: 36.02972357575571 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 147.40824015254248,
            "unit": "iter/sec",
            "range": "stddev: 0.0005802488561522795",
            "extra": "mean: 6.783881273971997 msec\nrounds: 146"
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
          "id": "34b4f52441bb7fa8b7c3f31f3063e1ae64787a7e",
          "message": "Update the frequency of the dependencies updates",
          "timestamp": "2021-09-07T16:33:47+02:00",
          "tree_id": "1d7053e72e76e7f71a9cec5926f1bc40d802cb38",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/34b4f52441bb7fa8b7c3f31f3063e1ae64787a7e"
        },
        "date": 1631025380473,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 8.781127866934773,
            "unit": "iter/sec",
            "range": "stddev: 0.006333769032420727",
            "extra": "mean: 113.88058745454414 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 8.939642395233136,
            "unit": "iter/sec",
            "range": "stddev: 0.002556967586143761",
            "extra": "mean: 111.86129777777548 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7180805522206274,
            "unit": "iter/sec",
            "range": "stddev: 0.008182363385611352",
            "extra": "mean: 1.3926014245999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.712930695087308,
            "unit": "iter/sec",
            "range": "stddev: 0.007091895523473103",
            "extra": "mean: 1.402660885399999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 14.031173108157029,
            "unit": "iter/sec",
            "range": "stddev: 0.0034344296708943086",
            "extra": "mean: 71.26987831250187 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 678738.8736041836,
            "unit": "iter/sec",
            "range": "stddev: 0.000004559650372169404",
            "extra": "mean: 1.4733206523001972 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 616876.2493029676,
            "unit": "iter/sec",
            "range": "stddev: 0.000010154126249198199",
            "extra": "mean: 1.62107067848688 usec\nrounds: 78734"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 748826.5467926873,
            "unit": "iter/sec",
            "range": "stddev: 0.000004477541238589161",
            "extra": "mean: 1.3354227414652582 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 796592.1763036193,
            "unit": "iter/sec",
            "range": "stddev: 0.000004510470953262646",
            "extra": "mean: 1.2553475037129513 usec\nrounds: 103093"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 746335.4001657834,
            "unit": "iter/sec",
            "range": "stddev: 0.000004556441634007565",
            "extra": "mean: 1.339880166179909 usec\nrounds: 96154"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 703246.6149626822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045160730136508975",
            "extra": "mean: 1.421976272225796 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 65.77307705934761,
            "unit": "iter/sec",
            "range": "stddev: 0.00040559450424568325",
            "extra": "mean: 15.20378922059084 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 38.62798143291204,
            "unit": "iter/sec",
            "range": "stddev: 0.0006657637918341539",
            "extra": "mean: 25.8879693658539 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 190.58861689100632,
            "unit": "iter/sec",
            "range": "stddev: 0.0002704444463027728",
            "extra": "mean: 5.246903074866633 msec\nrounds: 187"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffe410329dc26906d9cbfa06cf96bfb180a693a6",
          "message": "Merge pull request #288 from ClearcodeHQ/dependabot/pip/black-21.9b0\n\nBump black from 21.8b0 to 21.9b0",
          "timestamp": "2021-09-16T15:18:19+02:00",
          "tree_id": "29d583543f24099fe189c345b0086f012970d47e",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/ffe410329dc26906d9cbfa06cf96bfb180a693a6"
        },
        "date": 1631798508532,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 7.668454950077284,
            "unit": "iter/sec",
            "range": "stddev: 0.004129658160837677",
            "extra": "mean: 130.4043652222175 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.00181704861062,
            "unit": "iter/sec",
            "range": "stddev: 0.008095004545021326",
            "extra": "mean: 166.6162083750109 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5258457380165039,
            "unit": "iter/sec",
            "range": "stddev: 0.04126298804549102",
            "extra": "mean: 1.9016984025999932 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5064860737787974,
            "unit": "iter/sec",
            "range": "stddev: 0.035684404125994856",
            "extra": "mean: 1.9743879482000124 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 9.757512690228424,
            "unit": "iter/sec",
            "range": "stddev: 0.006452911608773902",
            "extra": "mean: 102.48513445454611 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 347310.7408179826,
            "unit": "iter/sec",
            "range": "stddev: 0.000006997743331724195",
            "extra": "mean: 2.879265978486058 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 162207.1830768451,
            "unit": "iter/sec",
            "range": "stddev: 0.000054394505315766405",
            "extra": "mean: 6.1649550965092175 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 171222.01531955958,
            "unit": "iter/sec",
            "range": "stddev: 0.00003363215758125738",
            "extra": "mean: 5.840370457815566 usec\nrounds: 196079"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 232250.80541129096,
            "unit": "iter/sec",
            "range": "stddev: 0.000022394706222732274",
            "extra": "mean: 4.305690127657753 usec\nrounds: 172414"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 174959.4310732437,
            "unit": "iter/sec",
            "range": "stddev: 0.000034043962834060994",
            "extra": "mean: 5.715610721101211 usec\nrounds: 185186"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 152463.9999965201,
            "unit": "iter/sec",
            "range": "stddev: 0.00003834312359613635",
            "extra": "mean: 6.558925385814517 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 52.17548748622074,
            "unit": "iter/sec",
            "range": "stddev: 0.0014755493080166634",
            "extra": "mean: 19.166088295084823 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 24.484874976928296,
            "unit": "iter/sec",
            "range": "stddev: 0.013731394942429654",
            "extra": "mean: 40.8415399687474 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 153.49203900447645,
            "unit": "iter/sec",
            "range": "stddev: 0.0009617154878576767",
            "extra": "mean: 6.514995868748841 msec\nrounds: 160"
          }
        ]
      }
    ],
    "Matchbox performance benchmarks on Python 3.10": [
      {
        "commit": {
          "author": {
            "email": "g.sliwinski@clearcode.cc",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd15de8fd8266e0672a1948babd860707ddea963",
          "message": "Merge pull request #431 from ClearcodeHQ/pipenv\n\nMove dependency management to pipenv - closes #423",
          "timestamp": "2023-01-12T17:30:27+01:00",
          "tree_id": "6d0eadca1984cc719693c3efb59b19453926a281",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/bd15de8fd8266e0672a1948babd860707ddea963"
        },
        "date": 1673541121551,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.413263860761924,
            "unit": "iter/sec",
            "range": "stddev: 0.010222528999478078",
            "extra": "mean: 292.974713000001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.291076715714442,
            "unit": "iter/sec",
            "range": "stddev: 0.004929706571002387",
            "extra": "mean: 303.85192639999445 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6517273002494273,
            "unit": "iter/sec",
            "range": "stddev: 0.020446172133540417",
            "extra": "mean: 1.5343840892000116 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6508361523551713,
            "unit": "iter/sec",
            "range": "stddev: 0.02058000773318331",
            "extra": "mean: 1.536485022200003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.8838506227893026,
            "unit": "iter/sec",
            "range": "stddev: 0.0096677392123613",
            "extra": "mean: 257.4764318000007 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 211188.8042306958,
            "unit": "iter/sec",
            "range": "stddev: 0.000012095019771825011",
            "extra": "mean: 4.735099493757408 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 203657.05831885812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059146594011862125",
            "extra": "mean: 4.910215281781876 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 215130.9866129351,
            "unit": "iter/sec",
            "range": "stddev: 0.000009002840287504352",
            "extra": "mean: 4.648330841336239 usec\nrounds: 78119"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 224726.64661318084,
            "unit": "iter/sec",
            "range": "stddev: 0.000013236285459351042",
            "extra": "mean: 4.449850585459442 usec\nrounds: 78734"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 213628.89440655045,
            "unit": "iter/sec",
            "range": "stddev: 0.000008388732075707765",
            "extra": "mean: 4.681014723115737 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 223699.84112141244,
            "unit": "iter/sec",
            "range": "stddev: 4.2152750165951746e-7",
            "extra": "mean: 4.470275861560639 usec\nrounds: 87"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 75.1977623222377,
            "unit": "iter/sec",
            "range": "stddev: 0.0012500256085543936",
            "extra": "mean: 13.298268048386822 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.671544829390598,
            "unit": "iter/sec",
            "range": "stddev: 0.004207058540040344",
            "extra": "mean: 68.15914831250502 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 24.38925058180022,
            "unit": "iter/sec",
            "range": "stddev: 0.003441320370793302",
            "extra": "mean: 41.00166983999998 msec\nrounds: 25"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e80e98c27426bc0d25bea678e699040bfc0844f",
          "message": "Merge pull request #432 from ClearcodeHQ/automerge-shared\n\nMigrate to shared automerge action based on the github application",
          "timestamp": "2023-01-12T21:43:55+01:00",
          "tree_id": "f4730074b3f6e0be335f7e8d350c4bf3b95eaeef",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/3e80e98c27426bc0d25bea678e699040bfc0844f"
        },
        "date": 1673556311811,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.122691126309544,
            "unit": "iter/sec",
            "range": "stddev: 0.00011745126984262735",
            "extra": "mean: 242.56000979999612 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.8691737513483315,
            "unit": "iter/sec",
            "range": "stddev: 0.0010655363706302953",
            "extra": "mean: 258.45311279999237 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.8117376812841827,
            "unit": "iter/sec",
            "range": "stddev: 0.0038140195388246334",
            "extra": "mean: 1.2319250701999978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.8096268563472325,
            "unit": "iter/sec",
            "range": "stddev: 0.0010839471908206048",
            "extra": "mean: 1.2351368931999958 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.420799001312447,
            "unit": "iter/sec",
            "range": "stddev: 0.0003213937793742757",
            "extra": "mean: 226.20345320000297 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 226403.83072205,
            "unit": "iter/sec",
            "range": "stddev: 2.690335492111746e-7",
            "extra": "mean: 4.416886396359934 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 216660.31998313908,
            "unit": "iter/sec",
            "range": "stddev: 2.609982106330573e-7",
            "extra": "mean: 4.615519814970374 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 244796.7758385679,
            "unit": "iter/sec",
            "range": "stddev: 2.359759648891001e-7",
            "extra": "mean: 4.085021122416471 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 248186.61292714634,
            "unit": "iter/sec",
            "range": "stddev: 3.434792109560442e-7",
            "extra": "mean: 4.029226186722424 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 238394.18943863778,
            "unit": "iter/sec",
            "range": "stddev: 2.2942528515573885e-7",
            "extra": "mean: 4.194733111384823 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 222130.14267038018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012008033053346503",
            "extra": "mean: 4.501865383861497 usec\nrounds: 104"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 86.60740875206018,
            "unit": "iter/sec",
            "range": "stddev: 0.0001879591583179925",
            "extra": "mean: 11.54635630379846 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.368515098192285,
            "unit": "iter/sec",
            "range": "stddev: 0.002968695753466121",
            "extra": "mean: 69.59661406666933 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 24.61461769357309,
            "unit": "iter/sec",
            "range": "stddev: 0.0036097016293125256",
            "extra": "mean: 40.62626576000412 msec\nrounds: 25"
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
          "id": "563fe4087960fe21b8c0cc02eba8ffd5157b2c22",
          "message": "Test attempt at automerge change with app_id as regular input",
          "timestamp": "2023-01-13T10:03:11+01:00",
          "tree_id": "3525d6b65c2a3ff0f21046981be3c5b641701100",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/563fe4087960fe21b8c0cc02eba8ffd5157b2c22"
        },
        "date": 1673600679698,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.081440655429234,
            "unit": "iter/sec",
            "range": "stddev: 0.000684727170916616",
            "extra": "mean: 245.0115251999989 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.9132763304527716,
            "unit": "iter/sec",
            "range": "stddev: 0.0010213456339042961",
            "extra": "mean: 255.54034920000106 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.8116780595092368,
            "unit": "iter/sec",
            "range": "stddev: 0.0005243513216505437",
            "extra": "mean: 1.2320155612000008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7939780478348247,
            "unit": "iter/sec",
            "range": "stddev: 0.0007173252031691341",
            "extra": "mean: 1.2594806654000024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.598596833459128,
            "unit": "iter/sec",
            "range": "stddev: 0.0007829380371932118",
            "extra": "mean: 217.45763680000323 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 220883.8381194278,
            "unit": "iter/sec",
            "range": "stddev: 2.230769149516997e-7",
            "extra": "mean: 4.527266496787866 usec\nrounds: 72999"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 204743.7714696046,
            "unit": "iter/sec",
            "range": "stddev: 2.7945170347150615e-7",
            "extra": "mean: 4.884153460797491 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 244160.17048893837,
            "unit": "iter/sec",
            "range": "stddev: 2.081302619046536e-7",
            "extra": "mean: 4.095672107360791 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 247646.9480768886,
            "unit": "iter/sec",
            "range": "stddev: 2.537952588100458e-7",
            "extra": "mean: 4.03800655637203 usec\nrounds: 75194"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 240156.9630147967,
            "unit": "iter/sec",
            "range": "stddev: 2.185491243554326e-7",
            "extra": "mean: 4.163943395380077 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 217169.18925363978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013107179543936964",
            "extra": "mean: 4.604704762387189 usec\nrounds: 105"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 93.39207969411862,
            "unit": "iter/sec",
            "range": "stddev: 0.00009150209173686873",
            "extra": "mean: 10.707546113923568 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 19.028514177752456,
            "unit": "iter/sec",
            "range": "stddev: 0.0006256138126656719",
            "extra": "mean: 52.552710666667224 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 30.929522942571488,
            "unit": "iter/sec",
            "range": "stddev: 0.0004050323397971984",
            "extra": "mean: 32.33156883333616 msec\nrounds: 30"
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
          "id": "b4dfa220711777733283a10bdde86ff1d5c4000f",
          "message": "Revert these changes",
          "timestamp": "2023-01-13T12:54:14+01:00",
          "tree_id": "f4730074b3f6e0be335f7e8d350c4bf3b95eaeef",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/b4dfa220711777733283a10bdde86ff1d5c4000f"
        },
        "date": 1673610933448,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.9520491365288337,
            "unit": "iter/sec",
            "range": "stddev: 0.0009722886132207872",
            "extra": "mean: 253.03329119999773 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.857144435045501,
            "unit": "iter/sec",
            "range": "stddev: 0.0006277602549495007",
            "extra": "mean: 259.25915320000286 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7687317494991758,
            "unit": "iter/sec",
            "range": "stddev: 0.0019390324672545211",
            "extra": "mean: 1.3008438908000017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7707630828804255,
            "unit": "iter/sec",
            "range": "stddev: 0.0009734081332272194",
            "extra": "mean: 1.297415538200002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.459083297820899,
            "unit": "iter/sec",
            "range": "stddev: 0.0010780727520377205",
            "extra": "mean: 224.26134099999615 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 236412.00748720995,
            "unit": "iter/sec",
            "range": "stddev: 2.462119975876982e-7",
            "extra": "mean: 4.229903593429368 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 219627.36950484104,
            "unit": "iter/sec",
            "range": "stddev: 3.0734231650278794e-7",
            "extra": "mean: 4.55316658508701 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 247544.45778635915,
            "unit": "iter/sec",
            "range": "stddev: 2.1331555319778108e-7",
            "extra": "mean: 4.039678403396291 usec\nrounds: 73530"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 252048.12191394423,
            "unit": "iter/sec",
            "range": "stddev: 2.9128035662089883e-7",
            "extra": "mean: 3.9674963352491317 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 240513.05182775232,
            "unit": "iter/sec",
            "range": "stddev: 2.1569769129764348e-7",
            "extra": "mean: 4.157778517218133 usec\nrounds: 76331"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 217388.67885288506,
            "unit": "iter/sec",
            "range": "stddev: 6.068985880142778e-7",
            "extra": "mean: 4.600055556143919 usec\nrounds: 90"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 89.16016666438668,
            "unit": "iter/sec",
            "range": "stddev: 0.00040819575237463967",
            "extra": "mean: 11.215770869565128 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 16.720479579469945,
            "unit": "iter/sec",
            "range": "stddev: 0.0030059444593612933",
            "extra": "mean: 59.806897000002245 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.50323528807696,
            "unit": "iter/sec",
            "range": "stddev: 0.0010608114529849927",
            "extra": "mean: 36.35935879999958 msec\nrounds: 30"
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
          "id": "553cb16e40d4fedb0bab82e31095959fd4d20003",
          "message": "It's secrets",
          "timestamp": "2023-01-13T13:44:07+01:00",
          "tree_id": "00769b7768d69454078d61c34878936154d873eb",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/553cb16e40d4fedb0bab82e31095959fd4d20003"
        },
        "date": 1673613926076,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.92077020795611,
            "unit": "iter/sec",
            "range": "stddev: 0.000694588250087438",
            "extra": "mean: 255.05192779999675 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.745349568917382,
            "unit": "iter/sec",
            "range": "stddev: 0.0005406738517734078",
            "extra": "mean: 266.99777459999723 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7410424743534346,
            "unit": "iter/sec",
            "range": "stddev: 0.002279715197448914",
            "extra": "mean: 1.349450314400005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7446435438677598,
            "unit": "iter/sec",
            "range": "stddev: 0.000781053607538843",
            "extra": "mean: 1.3429244210000006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.297203050830911,
            "unit": "iter/sec",
            "range": "stddev: 0.0006221111778453172",
            "extra": "mean: 232.70950620000121 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 231691.70222928197,
            "unit": "iter/sec",
            "range": "stddev: 2.722857315582333e-7",
            "extra": "mean: 4.316080335973364 usec\nrounds: 63695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 218420.4938885511,
            "unit": "iter/sec",
            "range": "stddev: 3.5039793567097e-7",
            "extra": "mean: 4.578324964827931 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 247706.31779081744,
            "unit": "iter/sec",
            "range": "stddev: 2.157305809887527e-7",
            "extra": "mean: 4.037038735703456 usec\nrounds: 69445"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 247282.21263636166,
            "unit": "iter/sec",
            "range": "stddev: 3.450583441893759e-7",
            "extra": "mean: 4.043962520953903 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 238640.59078272193,
            "unit": "iter/sec",
            "range": "stddev: 2.48444948327254e-7",
            "extra": "mean: 4.190401962717576 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 224680.66841382743,
            "unit": "iter/sec",
            "range": "stddev: 5.156220455211777e-7",
            "extra": "mean: 4.450761193918797 usec\nrounds: 67"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 85.26750064436993,
            "unit": "iter/sec",
            "range": "stddev: 0.0005509072157711065",
            "extra": "mean: 11.727797724138268 msec\nrounds: 58"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.035933687205686,
            "unit": "iter/sec",
            "range": "stddev: 0.0044241435824445225",
            "extra": "mean: 66.50734306250072 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 24.006236733006055,
            "unit": "iter/sec",
            "range": "stddev: 0.0023169094748040544",
            "extra": "mean: 41.655841818184896 msec\nrounds: 22"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7267b59e9006a222f95fa8ab413793e6046c6cef",
          "message": "Bump rhysd/github-action-benchmark from 1.14.0 to 1.15.0",
          "timestamp": "2023-01-13T13:34:41Z",
          "tree_id": "f72621b71a7811d175244e9da079d89bc142d85d",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/7267b59e9006a222f95fa8ab413793e6046c6cef"
        },
        "date": 1673616960071,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.224715846668362,
            "unit": "iter/sec",
            "range": "stddev: 0.0017847233493035173",
            "extra": "mean: 236.7023099999983 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 4.061378624170645,
            "unit": "iter/sec",
            "range": "stddev: 0.002868062695959787",
            "extra": "mean: 246.22181100000375 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.8199503962349083,
            "unit": "iter/sec",
            "range": "stddev: 0.0003170067751759167",
            "extra": "mean: 1.2195859708000056 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.8100922776145849,
            "unit": "iter/sec",
            "range": "stddev: 0.0008623903368239308",
            "extra": "mean: 1.2344272715999978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.480063156704852,
            "unit": "iter/sec",
            "range": "stddev: 0.0022554196735804465",
            "extra": "mean: 223.21113899999432 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 221429.85293070157,
            "unit": "iter/sec",
            "range": "stddev: 2.221512086964794e-7",
            "extra": "mean: 4.5161028956333125 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 214321.89088567308,
            "unit": "iter/sec",
            "range": "stddev: 2.8904697896559247e-7",
            "extra": "mean: 4.665878953696968 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 239625.4925408533,
            "unit": "iter/sec",
            "range": "stddev: 8.696557220158137e-7",
            "extra": "mean: 4.173178693955159 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 243488.2278263553,
            "unit": "iter/sec",
            "range": "stddev: 2.049988533486838e-7",
            "extra": "mean: 4.106974735193993 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 238459.9235992144,
            "unit": "iter/sec",
            "range": "stddev: 2.105457184171335e-7",
            "extra": "mean: 4.193576786012585 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 219398.0701168966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010352357374409044",
            "extra": "mean: 4.557925233650388 usec\nrounds: 107"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 92.32584912535303,
            "unit": "iter/sec",
            "range": "stddev: 0.00019886442783710338",
            "extra": "mean: 10.831202848102441 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 18.674412630431753,
            "unit": "iter/sec",
            "range": "stddev: 0.0012836871562823165",
            "extra": "mean: 53.54920766666598 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 28.529480425558578,
            "unit": "iter/sec",
            "range": "stddev: 0.0007637866394204417",
            "extra": "mean: 35.05146203448327 msec\nrounds: 29"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4a5dd6b409da422428c82469a1ca376f74afd03",
          "message": "Bump mypy from 0.982 to 0.991",
          "timestamp": "2023-01-13T13:53:44Z",
          "tree_id": "b18d94cfbb77e9e650a0fe7bd99f5e9a584e39b0",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c4a5dd6b409da422428c82469a1ca376f74afd03"
        },
        "date": 1673618105860,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.9650738279935207,
            "unit": "iter/sec",
            "range": "stddev: 0.0006406172029661144",
            "extra": "mean: 252.20211359999777 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.77858824414734,
            "unit": "iter/sec",
            "range": "stddev: 0.000543191478821209",
            "extra": "mean: 264.6491058000038 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7409867546004887,
            "unit": "iter/sec",
            "range": "stddev: 0.0008497707361914965",
            "extra": "mean: 1.3495517886000017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.73736202352593,
            "unit": "iter/sec",
            "range": "stddev: 0.0013464012005696498",
            "extra": "mean: 1.3561859278000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.386940691032654,
            "unit": "iter/sec",
            "range": "stddev: 0.0003130524786239726",
            "extra": "mean: 227.94928639999625 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 230660.25247110875,
            "unit": "iter/sec",
            "range": "stddev: 2.6275665119588657e-7",
            "extra": "mean: 4.33538067043109 usec\nrounds: 72459"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 220321.26742992538,
            "unit": "iter/sec",
            "range": "stddev: 2.2539068795101134e-7",
            "extra": "mean: 4.538826467662984 usec\nrounds: 65786"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 251852.56862581472,
            "unit": "iter/sec",
            "range": "stddev: 3.058261027759061e-7",
            "extra": "mean: 3.970576934975523 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 250946.68095128998,
            "unit": "iter/sec",
            "range": "stddev: 2.2964162282841732e-7",
            "extra": "mean: 3.9849102455118945 usec\nrounds: 72988"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 243638.50791279948,
            "unit": "iter/sec",
            "range": "stddev: 2.524427056834758e-7",
            "extra": "mean: 4.104441488198201 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 232865.63921378282,
            "unit": "iter/sec",
            "range": "stddev: 4.949301202219195e-7",
            "extra": "mean: 4.29432183887786 usec\nrounds: 87"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 81.82386832525988,
            "unit": "iter/sec",
            "range": "stddev: 0.0004239803880253405",
            "extra": "mean: 12.221372815385331 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.13305762099551,
            "unit": "iter/sec",
            "range": "stddev: 0.003964207816277251",
            "extra": "mean: 66.08049906666622 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 25.76131562729819,
            "unit": "iter/sec",
            "range": "stddev: 0.0008152516321613331",
            "extra": "mean: 38.81789324999931 msec\nrounds: 28"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37e346700923e5afc9fc09453822ed51d3a2c55d",
          "message": "Bump pycodestyle from 2.9.1 to 2.10.0",
          "timestamp": "2023-01-13T13:58:32Z",
          "tree_id": "2288eb78571525f0d384af9a13f4ad26d4e70ee5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/37e346700923e5afc9fc09453822ed51d3a2c55d"
        },
        "date": 1673618395712,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.341612378497829,
            "unit": "iter/sec",
            "range": "stddev: 0.013826284831176207",
            "extra": "mean: 299.2567319999978 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.3539162705306933,
            "unit": "iter/sec",
            "range": "stddev: 0.005005553383274267",
            "extra": "mean: 298.1589042000053 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6710914751111543,
            "unit": "iter/sec",
            "range": "stddev: 0.025321582522626784",
            "extra": "mean: 1.4901098241999988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6816923159151749,
            "unit": "iter/sec",
            "range": "stddev: 0.03141736950774783",
            "extra": "mean: 1.4669374681999983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.8156060017757563,
            "unit": "iter/sec",
            "range": "stddev: 0.004731893087609863",
            "extra": "mean: 262.0815670000013 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 204075.82160345523,
            "unit": "iter/sec",
            "range": "stddev: 0.000024973744577879895",
            "extra": "mean: 4.900139527273959 usec\nrounds: 30675"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 188551.74846568066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000193935320202596",
            "extra": "mean: 5.303583807296358 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 207578.67330474715,
            "unit": "iter/sec",
            "range": "stddev: 0.000014773668214476248",
            "extra": "mean: 4.817450579481716 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 214712.3059592334,
            "unit": "iter/sec",
            "range": "stddev: 0.000026028679675873053",
            "extra": "mean: 4.657394905860059 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 219515.3279699224,
            "unit": "iter/sec",
            "range": "stddev: 0.000007256424903538875",
            "extra": "mean: 4.555490540218759 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 254235.38701314418,
            "unit": "iter/sec",
            "range": "stddev: 4.120255385482264e-7",
            "extra": "mean: 3.9333627460299185 usec\nrounds: 102"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 88.87589338776466,
            "unit": "iter/sec",
            "range": "stddev: 0.0017019990015998525",
            "extra": "mean: 11.251644983606631 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.738162629120902,
            "unit": "iter/sec",
            "range": "stddev: 0.00647410285873409",
            "extra": "mean: 67.85106292857128 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 25.803537858381034,
            "unit": "iter/sec",
            "range": "stddev: 0.00486070302564929",
            "extra": "mean: 38.754375678573794 msec\nrounds: 28"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee90559274c45496347f2144e48fd20c8ccc65a0",
          "message": "Bump pydocstyle from 6.1.1 to 6.2.3",
          "timestamp": "2023-01-13T14:03:04Z",
          "tree_id": "bedd5e5ed2c1d82f26a5c584143b8be13313ee91",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/ee90559274c45496347f2144e48fd20c8ccc65a0"
        },
        "date": 1673618667704,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.4121218589395785,
            "unit": "iter/sec",
            "range": "stddev: 0.00404359919445813",
            "extra": "mean: 293.07276859999973 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.3652159342595174,
            "unit": "iter/sec",
            "range": "stddev: 0.0016256267963914049",
            "extra": "mean: 297.1577513999975 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6840377332144951,
            "unit": "iter/sec",
            "range": "stddev: 0.005574062813304203",
            "extra": "mean: 1.4619076571999983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6806659457714571,
            "unit": "iter/sec",
            "range": "stddev: 0.009212995387774313",
            "extra": "mean: 1.469149450200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.831522931213011,
            "unit": "iter/sec",
            "range": "stddev: 0.003396754997283513",
            "extra": "mean: 260.9928265999997 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 204088.69668321402,
            "unit": "iter/sec",
            "range": "stddev: 9.664941494534096e-7",
            "extra": "mean: 4.899830398506575 usec\nrounds: 70418"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 202424.30729849546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011506125019739064",
            "extra": "mean: 4.940118177237466 usec\nrounds: 67568"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 232951.74546525485,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010514543427920054",
            "extra": "mean: 4.2927345232068745 usec\nrounds: 64936"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 228210.10097132396,
            "unit": "iter/sec",
            "range": "stddev: 0.000001058008186601611",
            "extra": "mean: 4.381926986332898 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 219718.6475081051,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011533027257666051",
            "extra": "mean: 4.551275057175616 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 243062.0094341041,
            "unit": "iter/sec",
            "range": "stddev: 4.5463908204549123e-7",
            "extra": "mean: 4.1141764701451935 usec\nrounds: 85"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 71.94395848691504,
            "unit": "iter/sec",
            "range": "stddev: 0.0004722871039172842",
            "extra": "mean: 13.899707786886331 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.937425507666878,
            "unit": "iter/sec",
            "range": "stddev: 0.001098231006525043",
            "extra": "mean: 83.77015625000084 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 22.092276370453703,
            "unit": "iter/sec",
            "range": "stddev: 0.0004009839541144757",
            "extra": "mean: 45.26468813043656 msec\nrounds: 23"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "651b8bc90fd50260b612c93f4a0b56e5cef67183",
          "message": "Bump black from 22.10.0 to 22.12.0",
          "timestamp": "2023-01-13T14:09:32Z",
          "tree_id": "c57ca5b4cd01a3d932bdc3a3080e69511434612b",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/651b8bc90fd50260b612c93f4a0b56e5cef67183"
        },
        "date": 1673619043600,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.121764650308377,
            "unit": "iter/sec",
            "range": "stddev: 0.0007491838167966156",
            "extra": "mean: 242.61453159999888 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.8878194093826064,
            "unit": "iter/sec",
            "range": "stddev: 0.0001758566110453762",
            "extra": "mean: 257.2135931999995 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.8177544017601043,
            "unit": "iter/sec",
            "range": "stddev: 0.0016845022377060964",
            "extra": "mean: 1.2228610422000017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.8123159242462856,
            "unit": "iter/sec",
            "range": "stddev: 0.0013093935754840706",
            "extra": "mean: 1.2310481305999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.503700395171975,
            "unit": "iter/sec",
            "range": "stddev: 0.00030528239594081516",
            "extra": "mean: 222.03963679999958 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 220218.5454628689,
            "unit": "iter/sec",
            "range": "stddev: 5.752471958341721e-7",
            "extra": "mean: 4.540943624426083 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 217655.8063611834,
            "unit": "iter/sec",
            "range": "stddev: 2.95265647693531e-7",
            "extra": "mean: 4.5944099388765 usec\nrounds: 77514"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 243481.02860723,
            "unit": "iter/sec",
            "range": "stddev: 2.5296011738861984e-7",
            "extra": "mean: 4.1070961697518715 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 238843.72683255313,
            "unit": "iter/sec",
            "range": "stddev: 0.000001251091595716032",
            "extra": "mean: 4.186838035319525 usec\nrounds: 76918"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 232994.35795407472,
            "unit": "iter/sec",
            "range": "stddev: 2.3978653226829893e-7",
            "extra": "mean: 4.2919494222135155 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 225393.62610567053,
            "unit": "iter/sec",
            "range": "stddev: 6.661676406027806e-7",
            "extra": "mean: 4.43668269275358 usec\nrounds: 104"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 87.83812136059679,
            "unit": "iter/sec",
            "range": "stddev: 0.0001287244843207767",
            "extra": "mean: 11.384578637500198 msec\nrounds: 80"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.478529801449243,
            "unit": "iter/sec",
            "range": "stddev: 0.002958296072341721",
            "extra": "mean: 64.60561906250106 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 25.990849592185008,
            "unit": "iter/sec",
            "range": "stddev: 0.00044921853928772736",
            "extra": "mean: 38.475079333331315 msec\nrounds: 27"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d964be808b134e8bc7741426793b80bb1c662b74",
          "message": "Merge pull request #433 from ClearcodeHQ/tbump\n\nMigrate version management tool to tbump - closes #427",
          "timestamp": "2023-01-13T17:50:23+01:00",
          "tree_id": "3d5e68b155fd2cb21cca728524fd32d7c78b733e",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/d964be808b134e8bc7741426793b80bb1c662b74"
        },
        "date": 1673628710139,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.4832059582853105,
            "unit": "iter/sec",
            "range": "stddev: 0.0016809015450768721",
            "extra": "mean: 287.0918377999885 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.3485990808588038,
            "unit": "iter/sec",
            "range": "stddev: 0.0027305205383868474",
            "extra": "mean: 298.6323461999916 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6663502854169303,
            "unit": "iter/sec",
            "range": "stddev: 0.00902704755784951",
            "extra": "mean: 1.5007121958000027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6750087251864056,
            "unit": "iter/sec",
            "range": "stddev: 0.011998355850655201",
            "extra": "mean: 1.481462331800003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.8683948041680534,
            "unit": "iter/sec",
            "range": "stddev: 0.004600122493606757",
            "extra": "mean: 258.50515539999606 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 212877.09362353807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010661123850556399",
            "extra": "mean: 4.69754628353038 usec\nrounds: 57137"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 197830.18810226716,
            "unit": "iter/sec",
            "range": "stddev: 9.917293446895724e-7",
            "extra": "mean: 5.054840262715899 usec\nrounds: 64099"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 223185.72155717012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010894281019612137",
            "extra": "mean: 4.480573367431326 usec\nrounds: 65356"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 221814.3420005856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010765960945151386",
            "extra": "mean: 4.508274762491959 usec\nrounds: 65351"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 212157.9297050927,
            "unit": "iter/sec",
            "range": "stddev: 9.89752237721459e-7",
            "extra": "mean: 4.713469825945402 usec\nrounds: 66663"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 211395.70327683375,
            "unit": "iter/sec",
            "range": "stddev: 5.498491918622688e-7",
            "extra": "mean: 4.730465115889548 usec\nrounds: 86"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 77.19389267540514,
            "unit": "iter/sec",
            "range": "stddev: 0.0006904594181748637",
            "extra": "mean: 12.95439270312393 msec\nrounds: 64"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 13.357792787706595,
            "unit": "iter/sec",
            "range": "stddev: 0.0035121047325045165",
            "extra": "mean: 74.86266750000173 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 23.309151567816876,
            "unit": "iter/sec",
            "range": "stddev: 0.0010734236311516034",
            "extra": "mean: 42.90160442307594 msec\nrounds: 26"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf",
          "message": "Merge pull request #436 from ClearcodeHQ/python3.11\n\nAdd support for python 3.11 - closes #424",
          "timestamp": "2023-01-13T18:28:20+01:00",
          "tree_id": "cab7a8b0b5d8af18de9e5e1a8e4fc00d20792147",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf"
        },
        "date": 1673630978027,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.1567877349994315,
            "unit": "iter/sec",
            "range": "stddev: 0.0006742427291138839",
            "extra": "mean: 240.57037879999825 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.8920593751591834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005825460266841054",
            "extra": "mean: 256.933387600003 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.8116634949451919,
            "unit": "iter/sec",
            "range": "stddev: 0.003829067421108625",
            "extra": "mean: 1.2320376685999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.8130415653911146,
            "unit": "iter/sec",
            "range": "stddev: 0.0011793820738684186",
            "extra": "mean: 1.2299494177999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.524422467357881,
            "unit": "iter/sec",
            "range": "stddev: 0.0013256396219689503",
            "extra": "mean: 221.02268460000118 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 226892.23023624797,
            "unit": "iter/sec",
            "range": "stddev: 2.0755159190504274e-7",
            "extra": "mean: 4.407378776076932 usec\nrounds: 72993"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 216861.90566383742,
            "unit": "iter/sec",
            "range": "stddev: 2.1315297573515857e-7",
            "extra": "mean: 4.611229422423884 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 243790.99694724224,
            "unit": "iter/sec",
            "range": "stddev: 2.759752977786346e-7",
            "extra": "mean: 4.101874197661227 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 245888.1736632053,
            "unit": "iter/sec",
            "range": "stddev: 1.9578859915383691e-7",
            "extra": "mean: 4.066889371303017 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 237823.86673349244,
            "unit": "iter/sec",
            "range": "stddev: 2.747295551643502e-7",
            "extra": "mean: 4.204792453066156 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 226525.97134881464,
            "unit": "iter/sec",
            "range": "stddev: 3.936896324943063e-7",
            "extra": "mean: 4.4145048536627005 usec\nrounds: 103"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 92.47610694824343,
            "unit": "iter/sec",
            "range": "stddev: 0.00020690683313714437",
            "extra": "mean: 10.81360400000051 msec\nrounds: 80"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.817452837077013,
            "unit": "iter/sec",
            "range": "stddev: 0.0009784299876477857",
            "extra": "mean: 56.12474516666389 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.77785986082282,
            "unit": "iter/sec",
            "range": "stddev: 0.0028474674769458546",
            "extra": "mean: 35.99989362068798 msec\nrounds: 29"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3baaefdfd013139d2162ed574675bae14b0be27",
          "message": "Bump pytest from 7.2.0 to 7.2.1",
          "timestamp": "2023-01-16T04:12:28Z",
          "tree_id": "7a297e3c4218d1b4126aaa2c115e9cbd68d653df",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c3baaefdfd013139d2162ed574675bae14b0be27"
        },
        "date": 1673842441251,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.194771856555923,
            "unit": "iter/sec",
            "range": "stddev: 0.008461998464854945",
            "extra": "mean: 313.01139640000315 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.874434228129003,
            "unit": "iter/sec",
            "range": "stddev: 0.004670822447702868",
            "extra": "mean: 347.89454920000367 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6254059100903276,
            "unit": "iter/sec",
            "range": "stddev: 0.03923435449651043",
            "extra": "mean: 1.5989615446000016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6218014261048508,
            "unit": "iter/sec",
            "range": "stddev: 0.02043150091641846",
            "extra": "mean: 1.608230470400008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.460167951029925,
            "unit": "iter/sec",
            "range": "stddev: 0.005254767055260389",
            "extra": "mean: 289.00331259999916 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 190315.77068598376,
            "unit": "iter/sec",
            "range": "stddev: 0.00001325426116510329",
            "extra": "mean: 5.254425297470354 usec\nrounds: 61350"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 182454.22121249975,
            "unit": "iter/sec",
            "range": "stddev: 0.000013992805001736725",
            "extra": "mean: 5.480826880049684 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 206383.98688311782,
            "unit": "iter/sec",
            "range": "stddev: 0.000010240795234860242",
            "extra": "mean: 4.845337155766516 usec\nrounds: 71943"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 207480.37582819563,
            "unit": "iter/sec",
            "range": "stddev: 0.000020042377822901473",
            "extra": "mean: 4.819732931407697 usec\nrounds: 78126"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 204659.9667664471,
            "unit": "iter/sec",
            "range": "stddev: 0.000011911533844144092",
            "extra": "mean: 4.886153436842758 usec\nrounds: 68028"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 226198.51457608223,
            "unit": "iter/sec",
            "range": "stddev: 8.195596228638879e-7",
            "extra": "mean: 4.4208955212376 usec\nrounds: 67"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 58.2995472601864,
            "unit": "iter/sec",
            "range": "stddev: 0.00177818831649343",
            "extra": "mean: 17.152791865382362 msec\nrounds: 52"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.052697085084445,
            "unit": "iter/sec",
            "range": "stddev: 0.002992861055022383",
            "extra": "mean: 90.47565424999249 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 20.697309996049423,
            "unit": "iter/sec",
            "range": "stddev: 0.0016728263526721674",
            "extra": "mean: 48.31545742856796 msec\nrounds: 21"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f321b36ac5981710681bf2ec9661b587ebdf756d",
          "message": "Merge pull request #437 from ClearcodeHQ/order\n\nRun benchmarks only after tests",
          "timestamp": "2023-01-16T10:09:22+01:00",
          "tree_id": "f9722ee8a25d0d75f3fa9f130017ffb46662ad73",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f321b36ac5981710681bf2ec9661b587ebdf756d"
        },
        "date": 1673860487619,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.1338364885399828,
            "unit": "iter/sec",
            "range": "stddev: 0.006596022559849648",
            "extra": "mean: 319.09769499999925 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.963236939899454,
            "unit": "iter/sec",
            "range": "stddev: 0.005518552233730268",
            "extra": "mean: 337.4687951999988 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5601989131354994,
            "unit": "iter/sec",
            "range": "stddev: 0.013445643590459565",
            "extra": "mean: 1.7850802216000061 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5588506748107642,
            "unit": "iter/sec",
            "range": "stddev: 0.021577183988531496",
            "extra": "mean: 1.7893867630000018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.4790086156096947,
            "unit": "iter/sec",
            "range": "stddev: 0.0034953042831806203",
            "extra": "mean: 287.4382073999982 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 186641.40106254866,
            "unit": "iter/sec",
            "range": "stddev: 0.000008169998186968104",
            "extra": "mean: 5.35786805235604 usec\nrounds: 36901"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 173139.57308932673,
            "unit": "iter/sec",
            "range": "stddev: 0.000004989577836610151",
            "extra": "mean: 5.775687106979736 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 194084.42717106614,
            "unit": "iter/sec",
            "range": "stddev: 0.00002065038200381956",
            "extra": "mean: 5.1523968953913 usec\nrounds: 75758"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 206608.14456449667,
            "unit": "iter/sec",
            "range": "stddev: 0.000003631390205327387",
            "extra": "mean: 4.840080250020497 usec\nrounds: 40486"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 198873.08093933074,
            "unit": "iter/sec",
            "range": "stddev: 0.000004534544386506881",
            "extra": "mean: 5.028332619360713 usec\nrounds: 39216"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 225843.33900819358,
            "unit": "iter/sec",
            "range": "stddev: 5.753341736161394e-7",
            "extra": "mean: 4.427848102102848 usec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 65.67704463961049,
            "unit": "iter/sec",
            "range": "stddev: 0.0005012717681959539",
            "extra": "mean: 15.226020072725532 msec\nrounds: 55"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 12.420461113655893,
            "unit": "iter/sec",
            "range": "stddev: 0.006059311946785554",
            "extra": "mean: 80.51230874999742 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 22.175753733743257,
            "unit": "iter/sec",
            "range": "stddev: 0.0019100789426994892",
            "extra": "mean: 45.09429586956369 msec\nrounds: 23"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6b72a545782dfc9f883d35e8bf5413198a629a3",
          "message": "Bump pydocstyle from 6.2.3 to 6.3.0",
          "timestamp": "2023-01-18T04:09:33Z",
          "tree_id": "3b3f6febdf72fc4eaaf2820e32b1cbf670ff91c0",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f6b72a545782dfc9f883d35e8bf5413198a629a3"
        },
        "date": 1674015228750,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.9431850939111612,
            "unit": "iter/sec",
            "range": "stddev: 0.00017316772410875712",
            "extra": "mean: 253.60209479999867 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.762071368746437,
            "unit": "iter/sec",
            "range": "stddev: 0.0002833781059591983",
            "extra": "mean: 265.81101260001105 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7703119305861462,
            "unit": "iter/sec",
            "range": "stddev: 0.004177012763111174",
            "extra": "mean: 1.2981754017999947 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.770784584150208,
            "unit": "iter/sec",
            "range": "stddev: 0.0008062963933952635",
            "extra": "mean: 1.2973793464000096 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.472604767139461,
            "unit": "iter/sec",
            "range": "stddev: 0.001934977957112233",
            "extra": "mean: 223.58335959999636 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 233062.2116459918,
            "unit": "iter/sec",
            "range": "stddev: 2.3591482811678963e-7",
            "extra": "mean: 4.290699864802377 usec\nrounds: 72464"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 217485.90121925646,
            "unit": "iter/sec",
            "range": "stddev: 2.4016698732053885e-7",
            "extra": "mean: 4.597999200839501 usec\nrounds: 76336"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 250095.4457431092,
            "unit": "iter/sec",
            "range": "stddev: 2.3430086138029572e-7",
            "extra": "mean: 3.998473450920698 usec\nrounds: 78741"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 250096.05123010188,
            "unit": "iter/sec",
            "range": "stddev: 2.256673179971903e-7",
            "extra": "mean: 3.9984637705452855 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 241262.25573386473,
            "unit": "iter/sec",
            "range": "stddev: 3.344056555040103e-7",
            "extra": "mean: 4.144867156937699 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 222911.1154453365,
            "unit": "iter/sec",
            "range": "stddev: 6.382528648945268e-7",
            "extra": "mean: 4.48609302412838 usec\nrounds: 86"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 83.02291536996539,
            "unit": "iter/sec",
            "range": "stddev: 0.00048133080732970404",
            "extra": "mean: 12.044867318183371 msec\nrounds: 66"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.217211266485682,
            "unit": "iter/sec",
            "range": "stddev: 0.0015352537288493015",
            "extra": "mean: 70.33728213333272 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 25.988131441751275,
            "unit": "iter/sec",
            "range": "stddev: 0.00019341932826472783",
            "extra": "mean: 38.47910351851801 msec\nrounds: 27"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d20cb0908943f121295eabac957a91fb74cf43bd",
          "message": "Merge pull request #440 from ClearcodeHQ/dependabot/pip/black-23.1.0\n\nBump black from 22.12.0 to 23.1.0",
          "timestamp": "2023-02-01T09:58:31+01:00",
          "tree_id": "91dea9c2af28eb7217db916a6b7105b7ed37347b",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/d20cb0908943f121295eabac957a91fb74cf43bd"
        },
        "date": 1675242423770,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.0239724100163325,
            "unit": "iter/sec",
            "range": "stddev: 0.0002467227466050649",
            "extra": "mean: 248.5106501999951 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.917932644603961,
            "unit": "iter/sec",
            "range": "stddev: 0.0015398145312363726",
            "extra": "mean: 255.2366491999976 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.795684274188495,
            "unit": "iter/sec",
            "range": "stddev: 0.0003290967493578667",
            "extra": "mean: 1.2567798968000006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.8029603231572634,
            "unit": "iter/sec",
            "range": "stddev: 0.0007992964173825454",
            "extra": "mean: 1.2453915482000042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.4608944188772695,
            "unit": "iter/sec",
            "range": "stddev: 0.0004460218853919318",
            "extra": "mean: 224.1702910000015 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 228399.5570518053,
            "unit": "iter/sec",
            "range": "stddev: 3.220763550387819e-7",
            "extra": "mean: 4.378292203838123 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 215640.40196853172,
            "unit": "iter/sec",
            "range": "stddev: 3.147514792869157e-7",
            "extra": "mean: 4.637349916208788 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 241672.6815748653,
            "unit": "iter/sec",
            "range": "stddev: 2.5388128164798347e-7",
            "extra": "mean: 4.137828046941335 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 246957.63143747175,
            "unit": "iter/sec",
            "range": "stddev: 3.0360918480561246e-7",
            "extra": "mean: 4.049277579232024 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 237693.43539295506,
            "unit": "iter/sec",
            "range": "stddev: 2.744093342074601e-7",
            "extra": "mean: 4.20709978105537 usec\nrounds: 81308"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 230267.23916677217,
            "unit": "iter/sec",
            "range": "stddev: 2.5664352803921115e-7",
            "extra": "mean: 4.342780169765032 usec\nrounds: 48310"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 88.42950806673016,
            "unit": "iter/sec",
            "range": "stddev: 0.00016103468684847762",
            "extra": "mean: 11.308442417720855 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.60883752026473,
            "unit": "iter/sec",
            "range": "stddev: 0.002814391204201638",
            "extra": "mean: 64.06627006666668 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 26.46085504336723,
            "unit": "iter/sec",
            "range": "stddev: 0.0006566828877678533",
            "extra": "mean: 37.79167371428776 msec\nrounds: 28"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc672b755740bbbb88b91789eb87e6315538ec20",
          "message": "Merge pull request #441 from ClearcodeHQ/publish-docs\n\nPublish documentation to the github-pages",
          "timestamp": "2023-02-03T21:14:46+01:00",
          "tree_id": "672a5ab7bde84d965fdf3f2519922d01e4e35c25",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/cc672b755740bbbb88b91789eb87e6315538ec20"
        },
        "date": 1675455645180,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.9944596652709756,
            "unit": "iter/sec",
            "range": "stddev: 0.00032299876532508934",
            "extra": "mean: 250.34675119999295 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.8772401138604566,
            "unit": "iter/sec",
            "range": "stddev: 0.00018151289976712018",
            "extra": "mean: 257.91541680000023 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.8174342984889711,
            "unit": "iter/sec",
            "range": "stddev: 0.001828363891465752",
            "extra": "mean: 1.2233399085999963 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.8149146662726583,
            "unit": "iter/sec",
            "range": "stddev: 0.0034348073360790207",
            "extra": "mean: 1.2271223495999948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.407433866734636,
            "unit": "iter/sec",
            "range": "stddev: 0.0002837420954517946",
            "extra": "mean: 226.88939420000338 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 226368.10217489713,
            "unit": "iter/sec",
            "range": "stddev: 2.63108404952484e-7",
            "extra": "mean: 4.4175835305072155 usec\nrounds: 71429"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 209824.41043673694,
            "unit": "iter/sec",
            "range": "stddev: 2.8114315680178826e-7",
            "extra": "mean: 4.7658897166376395 usec\nrounds: 78126"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 240715.43279545312,
            "unit": "iter/sec",
            "range": "stddev: 2.830728757539737e-7",
            "extra": "mean: 4.154282874126087 usec\nrounds: 83341"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 243399.40700586056,
            "unit": "iter/sec",
            "range": "stddev: 2.899786051425653e-7",
            "extra": "mean: 4.108473444127668 usec\nrounds: 83334"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 232155.71053779262,
            "unit": "iter/sec",
            "range": "stddev: 2.672396836496989e-7",
            "extra": "mean: 4.307453810563104 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 221639.96024059926,
            "unit": "iter/sec",
            "range": "stddev: 3.5335663142653127e-7",
            "extra": "mean: 4.5118217803073914 usec\nrounds: 101"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 89.06032610916067,
            "unit": "iter/sec",
            "range": "stddev: 0.00012707832136840043",
            "extra": "mean: 11.228344243589525 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 16.299395345609703,
            "unit": "iter/sec",
            "range": "stddev: 0.0027383054980847747",
            "extra": "mean: 61.35196912499907 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 26.262114359041636,
            "unit": "iter/sec",
            "range": "stddev: 0.0005911650921094465",
            "extra": "mean: 38.07766527586214 msec\nrounds: 29"
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
          "id": "7ab370de05b97bfc5fd3bc101feef2b7f70f5312",
          "message": "Branch is main",
          "timestamp": "2023-02-03T21:23:43+01:00",
          "tree_id": "0da3786310aa184a9fc92b2e0ca0d08ed04aa78c",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/7ab370de05b97bfc5fd3bc101feef2b7f70f5312"
        },
        "date": 1675456318716,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.093734215968072,
            "unit": "iter/sec",
            "range": "stddev: 0.0016485550861239857",
            "extra": "mean: 244.2757510000007 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.8789740575060643,
            "unit": "iter/sec",
            "range": "stddev: 0.0005624787523772721",
            "extra": "mean: 257.80012580000005 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.8160134633499886,
            "unit": "iter/sec",
            "range": "stddev: 0.004061029355126121",
            "extra": "mean: 1.2254699768000024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.8133166757142521,
            "unit": "iter/sec",
            "range": "stddev: 0.00202540843120853",
            "extra": "mean: 1.229533378399998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.447022155895975,
            "unit": "iter/sec",
            "range": "stddev: 0.0010999378004981374",
            "extra": "mean: 224.86957899999993 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 228096.28720539893,
            "unit": "iter/sec",
            "range": "stddev: 2.5134973904775227e-7",
            "extra": "mean: 4.384113447228134 usec\nrounds: 68966"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 212231.2540302714,
            "unit": "iter/sec",
            "range": "stddev: 2.51015923101569e-7",
            "extra": "mean: 4.711841357057458 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 240563.6472373222,
            "unit": "iter/sec",
            "range": "stddev: 2.425638749812534e-7",
            "extra": "mean: 4.156904052146642 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 243266.86434134952,
            "unit": "iter/sec",
            "range": "stddev: 3.3460780246408953e-7",
            "extra": "mean: 4.110711924155895 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 232260.56453910013,
            "unit": "iter/sec",
            "range": "stddev: 2.3675385008520343e-7",
            "extra": "mean: 4.305509211106968 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 222898.85369593644,
            "unit": "iter/sec",
            "range": "stddev: 4.5827882390054353e-7",
            "extra": "mean: 4.486339805785329 usec\nrounds: 103"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 91.23850158698937,
            "unit": "iter/sec",
            "range": "stddev: 0.00020439353573603676",
            "extra": "mean: 10.96028521519034 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.345434430761053,
            "unit": "iter/sec",
            "range": "stddev: 0.0014164033305946312",
            "extra": "mean: 57.65205847058878 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.185499779279002,
            "unit": "iter/sec",
            "range": "stddev: 0.0015453000048666445",
            "extra": "mean: 36.78431546666682 msec\nrounds: 30"
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
          "id": "81c93969ee43f0c73ea1735bcdf3a64172c6029f",
          "message": "Publish documentation on tag only",
          "timestamp": "2023-02-03T21:31:04+01:00",
          "tree_id": "96fc4bcb7bd43110c801b601a750d1be8ab48eba",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/81c93969ee43f0c73ea1735bcdf3a64172c6029f"
        },
        "date": 1675456621679,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.9669092552799374,
            "unit": "iter/sec",
            "range": "stddev: 0.0002507637956311868",
            "extra": "mean: 252.08542359999907 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.9237211531788496,
            "unit": "iter/sec",
            "range": "stddev: 0.0017353121912650525",
            "extra": "mean: 254.8601087999941 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7932839310603654,
            "unit": "iter/sec",
            "range": "stddev: 0.003050869400854646",
            "extra": "mean: 1.2605827003999963 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7981738949809413,
            "unit": "iter/sec",
            "range": "stddev: 0.0006803570034287937",
            "extra": "mean: 1.252859817000001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.404326937628149,
            "unit": "iter/sec",
            "range": "stddev: 0.0009049976396382878",
            "extra": "mean: 227.04944799999964 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 228426.40223376473,
            "unit": "iter/sec",
            "range": "stddev: 2.858777099095077e-7",
            "extra": "mean: 4.3777776571406575 usec\nrounds: 70922"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 212881.57648859388,
            "unit": "iter/sec",
            "range": "stddev: 2.352370466168589e-7",
            "extra": "mean: 4.697447362494422 usec\nrounds: 80000"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 244094.9599446459,
            "unit": "iter/sec",
            "range": "stddev: 2.286884694238727e-7",
            "extra": "mean: 4.096766275824674 usec\nrounds: 76924"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 242382.03637406128,
            "unit": "iter/sec",
            "range": "stddev: 5.497082184673782e-7",
            "extra": "mean: 4.125718287376415 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 238332.10081281606,
            "unit": "iter/sec",
            "range": "stddev: 2.4167281379767126e-7",
            "extra": "mean: 4.195825894160146 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 225431.76750513958,
            "unit": "iter/sec",
            "range": "stddev: 3.982463584755555e-7",
            "extra": "mean: 4.4359320386253955 usec\nrounds: 103"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 83.42994258837841,
            "unit": "iter/sec",
            "range": "stddev: 0.00022625593138080274",
            "extra": "mean: 11.986104376623382 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 16.015064817541766,
            "unit": "iter/sec",
            "range": "stddev: 0.0023856707593445975",
            "extra": "mean: 62.44120841176184 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 26.895844463209727,
            "unit": "iter/sec",
            "range": "stddev: 0.0013673836756861667",
            "extra": "mean: 37.180464862067424 msec\nrounds: 29"
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
          "id": "0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc",
          "message": "Release 1.2.0",
          "timestamp": "2023-02-03T21:32:46+01:00",
          "tree_id": "10f78c8f4e7a2858db3db56f43ad1e29bc1f49f5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc"
        },
        "date": 1675456691719,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.5237068733286425,
            "unit": "iter/sec",
            "range": "stddev: 0.0023559865789642524",
            "extra": "mean: 283.79205080000247 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.355755439711481,
            "unit": "iter/sec",
            "range": "stddev: 0.0026118070162275578",
            "extra": "mean: 297.99549399999705 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6016118510812029,
            "unit": "iter/sec",
            "range": "stddev: 0.038007632243188816",
            "extra": "mean: 1.6622012983999952 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6105407966089405,
            "unit": "iter/sec",
            "range": "stddev: 0.0018579506532622689",
            "extra": "mean: 1.637892186000002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.03259069145853,
            "unit": "iter/sec",
            "range": "stddev: 0.0026274999314560097",
            "extra": "mean: 247.9795437999968 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 230184.58030756534,
            "unit": "iter/sec",
            "range": "stddev: 2.2629421302192037e-7",
            "extra": "mean: 4.3443396541324875 usec\nrounds: 72459"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 215155.174032075,
            "unit": "iter/sec",
            "range": "stddev: 3.703220553298346e-7",
            "extra": "mean: 4.647808283015873 usec\nrounds: 69926"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 244252.77690004284,
            "unit": "iter/sec",
            "range": "stddev: 2.1906015614590647e-7",
            "extra": "mean: 4.094119267308214 usec\nrounds: 66221"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 249427.49736029093,
            "unit": "iter/sec",
            "range": "stddev: 4.2209781310145814e-7",
            "extra": "mean: 4.009181066975661 usec\nrounds: 68494"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 238339.5721311036,
            "unit": "iter/sec",
            "range": "stddev: 2.097813758792257e-7",
            "extra": "mean: 4.195694366061585 usec\nrounds: 74069"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 229001.8065499099,
            "unit": "iter/sec",
            "range": "stddev: 7.01752595181185e-7",
            "extra": "mean: 4.366777778157198 usec\nrounds: 54"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 66.57347127118291,
            "unit": "iter/sec",
            "range": "stddev: 0.0009541740847580355",
            "extra": "mean: 15.020998318182356 msec\nrounds: 44"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.613497195751439,
            "unit": "iter/sec",
            "range": "stddev: 0.0038705058815596168",
            "extra": "mean: 68.42988961538438 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 26.497611794708867,
            "unit": "iter/sec",
            "range": "stddev: 0.0015111100881228126",
            "extra": "mean: 37.73925015384531 msec\nrounds: 26"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3ad0af6782add57837c6e45a9be88ac488b647e",
          "message": "Bump mypy from 0.991 to 1.0.0",
          "timestamp": "2023-02-07T04:12:30Z",
          "tree_id": "16ec4634a8db7fdf2d185c96629ab6c03df5aa70",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/e3ad0af6782add57837c6e45a9be88ac488b647e"
        },
        "date": 1675743461512,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.106063260194995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006902320795230288",
            "extra": "mean: 243.54227800000103 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.8778984631742657,
            "unit": "iter/sec",
            "range": "stddev: 0.0014164798180739",
            "extra": "mean: 257.87163060000466 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.8171729172277846,
            "unit": "iter/sec",
            "range": "stddev: 0.0019746410182566263",
            "extra": "mean: 1.2237312066000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.8169078211448766,
            "unit": "iter/sec",
            "range": "stddev: 0.001277373848030152",
            "extra": "mean: 1.2241283216000114 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.502072999772063,
            "unit": "iter/sec",
            "range": "stddev: 0.0006354253848919849",
            "extra": "mean: 222.1198990000005 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 229125.32836302085,
            "unit": "iter/sec",
            "range": "stddev: 2.036615275527328e-7",
            "extra": "mean: 4.364423641613394 usec\nrounds: 78125"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 216242.34531413985,
            "unit": "iter/sec",
            "range": "stddev: 2.93652751916595e-7",
            "extra": "mean: 4.62444114980014 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 243268.52894338168,
            "unit": "iter/sec",
            "range": "stddev: 2.7153391998619493e-7",
            "extra": "mean: 4.110683795982259 usec\nrounds: 86207"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 245866.86935886086,
            "unit": "iter/sec",
            "range": "stddev: 2.1490721102744835e-7",
            "extra": "mean: 4.0672417662764735 usec\nrounds: 93458"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 237508.33292957078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011510081966383003",
            "extra": "mean: 4.210378590365222 usec\nrounds: 98040"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 224673.06765661636,
            "unit": "iter/sec",
            "range": "stddev: 4.517756195325373e-7",
            "extra": "mean: 4.450911764503836 usec\nrounds: 102"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 91.68476853488721,
            "unit": "iter/sec",
            "range": "stddev: 0.0001933916182929039",
            "extra": "mean: 10.906937062501143 msec\nrounds: 80"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 17.39025878161911,
            "unit": "iter/sec",
            "range": "stddev: 0.002459859621067357",
            "extra": "mean: 57.50345711111353 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 26.90624388534534,
            "unit": "iter/sec",
            "range": "stddev: 0.0010582645107840957",
            "extra": "mean: 37.16609439285788 msec\nrounds: 28"
          }
        ]
      }
    ],
    "Matchbox performance benchmarks on Python pypy-3.8": [
      {
        "commit": {
          "author": {
            "email": "g.sliwinski@clearcode.cc",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd15de8fd8266e0672a1948babd860707ddea963",
          "message": "Merge pull request #431 from ClearcodeHQ/pipenv\n\nMove dependency management to pipenv - closes #423",
          "timestamp": "2023-01-12T17:30:27+01:00",
          "tree_id": "6d0eadca1984cc719693c3efb59b19453926a281",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/bd15de8fd8266e0672a1948babd860707ddea963"
        },
        "date": 1673541201227,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.8915458359444175,
            "unit": "iter/sec",
            "range": "stddev: 0.0015653159388291614",
            "extra": "mean: 145.1053252500003 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.169895861914843,
            "unit": "iter/sec",
            "range": "stddev: 0.00169465586544743",
            "extra": "mean: 162.07728985714962 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.510797736860732,
            "unit": "iter/sec",
            "range": "stddev: 0.010349719252178945",
            "extra": "mean: 1.9577220646 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.48862891548579274,
            "unit": "iter/sec",
            "range": "stddev: 0.0339127681519595",
            "extra": "mean: 2.0465428228000064 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 9.656505553655512,
            "unit": "iter/sec",
            "range": "stddev: 0.002294909844839145",
            "extra": "mean: 103.55712990000256 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 829326.6028304098,
            "unit": "iter/sec",
            "range": "stddev: 8.968521615529657e-7",
            "extra": "mean: 1.2057975670707894 usec\nrounds: 94331"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 737140.8675710061,
            "unit": "iter/sec",
            "range": "stddev: 2.722878051434832e-7",
            "extra": "mean: 1.356592808773657 usec\nrounds: 92585"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1079269.4645652373,
            "unit": "iter/sec",
            "range": "stddev: 6.728282496884295e-7",
            "extra": "mean: 926.5526662544522 nsec\nrounds: 120468"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1244119.4407716114,
            "unit": "iter/sec",
            "range": "stddev: 1.9807632408616786e-7",
            "extra": "mean: 803.7813470544636 nsec\nrounds: 158731"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1065392.013703764,
            "unit": "iter/sec",
            "range": "stddev: 3.5828347773939535e-7",
            "extra": "mean: 938.6216408019664 nsec\nrounds: 125000"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 917837.3576919624,
            "unit": "iter/sec",
            "range": "stddev: 5.786112161410106e-7",
            "extra": "mean: 1.0895176488725995 usec\nrounds: 111112"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 42.566579479776756,
            "unit": "iter/sec",
            "range": "stddev: 0.011132267693239143",
            "extra": "mean: 23.492608807693763 msec\nrounds: 52"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 24.985331669487863,
            "unit": "iter/sec",
            "range": "stddev: 0.0018817011811102817",
            "extra": "mean: 40.023483107138496 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 128.7598910077923,
            "unit": "iter/sec",
            "range": "stddev: 0.0008611386874878032",
            "extra": "mean: 7.766393650795198 msec\nrounds: 126"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e80e98c27426bc0d25bea678e699040bfc0844f",
          "message": "Merge pull request #432 from ClearcodeHQ/automerge-shared\n\nMigrate to shared automerge action based on the github application",
          "timestamp": "2023-01-12T21:43:55+01:00",
          "tree_id": "f4730074b3f6e0be335f7e8d350c4bf3b95eaeef",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/3e80e98c27426bc0d25bea678e699040bfc0844f"
        },
        "date": 1673556422650,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.799656224340675,
            "unit": "iter/sec",
            "range": "stddev: 0.01019602787883678",
            "extra": "mean: 147.0662584999971 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 5.783565778725428,
            "unit": "iter/sec",
            "range": "stddev: 0.013607213173457613",
            "extra": "mean: 172.90371342856557 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.41674151139313387,
            "unit": "iter/sec",
            "range": "stddev: 0.03805658940428386",
            "extra": "mean: 2.3995689717999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.412379377118754,
            "unit": "iter/sec",
            "range": "stddev: 0.044742398625664474",
            "extra": "mean: 2.4249515263999912 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 7.948977618264632,
            "unit": "iter/sec",
            "range": "stddev: 0.001737933340653629",
            "extra": "mean: 125.80234188888222 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 783660.8783927192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022576551509350703",
            "extra": "mean: 1.276062168690861 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 692320.5217625507,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021317910294210614",
            "extra": "mean: 1.4444176773124424 usec\nrounds: 107539"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 948923.5142164016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024266712167327603",
            "extra": "mean: 1.0538257141048397 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1114684.1062453853,
            "unit": "iter/sec",
            "range": "stddev: 8.918879327379261e-7",
            "extra": "mean: 897.1151507383864 nsec\nrounds: 172414"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 950399.9557912481,
            "unit": "iter/sec",
            "range": "stddev: 0.000010992408617485274",
            "extra": "mean: 1.0521886011320898 usec\nrounds: 140865"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 777486.1498180433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024328574737577906",
            "extra": "mean: 1.2861965454098907 usec\nrounds: 116280"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 47.1560008235569,
            "unit": "iter/sec",
            "range": "stddev: 0.0019476869315214773",
            "extra": "mean: 21.206208807691077 msec\nrounds: 52"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 23.670016656229247,
            "unit": "iter/sec",
            "range": "stddev: 0.0019930839113910873",
            "extra": "mean: 42.24754103571066 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 138.5028589577766,
            "unit": "iter/sec",
            "range": "stddev: 0.0011404175655475588",
            "extra": "mean: 7.220067567737759 msec\nrounds: 155"
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
          "id": "563fe4087960fe21b8c0cc02eba8ffd5157b2c22",
          "message": "Test attempt at automerge change with app_id as regular input",
          "timestamp": "2023-01-13T10:03:11+01:00",
          "tree_id": "3525d6b65c2a3ff0f21046981be3c5b641701100",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/563fe4087960fe21b8c0cc02eba8ffd5157b2c22"
        },
        "date": 1673600748766,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 9.781299236781349,
            "unit": "iter/sec",
            "range": "stddev: 0.0014384615579542909",
            "extra": "mean: 102.23590709091339 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 8.813516582951536,
            "unit": "iter/sec",
            "range": "stddev: 0.001688128034565762",
            "extra": "mean: 113.46208866666846 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6468862108178114,
            "unit": "iter/sec",
            "range": "stddev: 0.0015531777719558987",
            "extra": "mean: 1.545866928800001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6437712880157034,
            "unit": "iter/sec",
            "range": "stddev: 0.0038000054929716374",
            "extra": "mean: 1.5533466909999987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 13.838294891137208,
            "unit": "iter/sec",
            "range": "stddev: 0.0010075485687107753",
            "extra": "mean: 72.26323819999342 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 985318.1416031161,
            "unit": "iter/sec",
            "range": "stddev: 6.687421418716734e-7",
            "extra": "mean: 1.0149006272968613 usec\nrounds: 117648"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 904983.7483776786,
            "unit": "iter/sec",
            "range": "stddev: 1.5629662928573144e-7",
            "extra": "mean: 1.1049922186919316 usec\nrounds: 107527"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1286154.2178266721,
            "unit": "iter/sec",
            "range": "stddev: 4.943884258445574e-7",
            "extra": "mean: 777.5117370370922 nsec\nrounds: 149254"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1511761.6871457342,
            "unit": "iter/sec",
            "range": "stddev: 1.3422746181175774e-7",
            "extra": "mean: 661.4799200845218 nsec\nrounds: 175439"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1392972.6822392892,
            "unit": "iter/sec",
            "range": "stddev: 2.4938686639554416e-7",
            "extra": "mean: 717.8891680721412 nsec\nrounds: 156251"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1237892.0309490908,
            "unit": "iter/sec",
            "range": "stddev: 3.6023192847112253e-7",
            "extra": "mean: 807.8248950624347 nsec\nrounds: 136987"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 58.66907769362298,
            "unit": "iter/sec",
            "range": "stddev: 0.006749529688350769",
            "extra": "mean: 17.044754056338174 msec\nrounds: 71"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 31.18963473621335,
            "unit": "iter/sec",
            "range": "stddev: 0.01192423825397648",
            "extra": "mean: 32.061933666665546 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 163.02442971535686,
            "unit": "iter/sec",
            "range": "stddev: 0.00040963823159351063",
            "extra": "mean: 6.134049981012141 msec\nrounds: 158"
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
          "id": "b4dfa220711777733283a10bdde86ff1d5c4000f",
          "message": "Revert these changes",
          "timestamp": "2023-01-13T12:54:14+01:00",
          "tree_id": "f4730074b3f6e0be335f7e8d350c4bf3b95eaeef",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/b4dfa220711777733283a10bdde86ff1d5c4000f"
        },
        "date": 1673610996440,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 10.079682883499574,
            "unit": "iter/sec",
            "range": "stddev: 0.003761414411289109",
            "extra": "mean: 99.20947033333742 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 8.958154333546302,
            "unit": "iter/sec",
            "range": "stddev: 0.003800534079479729",
            "extra": "mean: 111.63013750000061 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6565685616494219,
            "unit": "iter/sec",
            "range": "stddev: 0.0030257527539949884",
            "extra": "mean: 1.5230701839999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6521297909908973,
            "unit": "iter/sec",
            "range": "stddev: 0.004345011463727066",
            "extra": "mean: 1.533437076200002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 14.887519532775007,
            "unit": "iter/sec",
            "range": "stddev: 0.0012971678494867384",
            "extra": "mean: 67.17035687499795 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 1046737.6363752636,
            "unit": "iter/sec",
            "range": "stddev: 6.593257366813651e-7",
            "extra": "mean: 955.3492348500978 nsec\nrounds: 119062"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 968659.2240121228,
            "unit": "iter/sec",
            "range": "stddev: 1.5301036777208747e-7",
            "extra": "mean: 1.032354800543879 usec\nrounds: 108696"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1399794.1999365522,
            "unit": "iter/sec",
            "range": "stddev: 4.7222443210376425e-7",
            "extra": "mean: 714.3907297553259 nsec\nrounds: 153847"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1633104.7689040822,
            "unit": "iter/sec",
            "range": "stddev: 1.0155623599350166e-7",
            "extra": "mean: 612.3305859129092 nsec\nrounds: 181819"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1448428.5681083612,
            "unit": "iter/sec",
            "range": "stddev: 0.000001018567042638557",
            "extra": "mean: 690.4033944222343 nsec\nrounds: 158731"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1227129.6056567505,
            "unit": "iter/sec",
            "range": "stddev: 3.696932303710129e-7",
            "extra": "mean: 814.9098476562149 nsec\nrounds: 136987"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 59.468474663014945,
            "unit": "iter/sec",
            "range": "stddev: 0.0067782311256222826",
            "extra": "mean: 16.815632243245126 msec\nrounds: 74"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 31.822921285964505,
            "unit": "iter/sec",
            "range": "stddev: 0.013733789219235674",
            "extra": "mean: 31.4238906923058 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 162.2484112250723,
            "unit": "iter/sec",
            "range": "stddev: 0.00041450064777466035",
            "extra": "mean: 6.163388549998139 msec\nrounds: 160"
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
          "id": "553cb16e40d4fedb0bab82e31095959fd4d20003",
          "message": "It's secrets",
          "timestamp": "2023-01-13T13:44:07+01:00",
          "tree_id": "00769b7768d69454078d61c34878936154d873eb",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/553cb16e40d4fedb0bab82e31095959fd4d20003"
        },
        "date": 1673614021322,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.57903194360798,
            "unit": "iter/sec",
            "range": "stddev: 0.0018349496277742278",
            "extra": "mean: 151.99804600000076 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.0666550304179765,
            "unit": "iter/sec",
            "range": "stddev: 0.001126592077815107",
            "extra": "mean: 164.83548099999723 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.4740719126095581,
            "unit": "iter/sec",
            "range": "stddev: 0.010138581704920914",
            "extra": "mean: 2.109384617400002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.46850901876989187,
            "unit": "iter/sec",
            "range": "stddev: 0.0024525835152829694",
            "extra": "mean: 2.1344306297999993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 9.505722767825679,
            "unit": "iter/sec",
            "range": "stddev: 0.0010789138967566227",
            "extra": "mean: 105.19978589999823 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 826299.5263772355,
            "unit": "iter/sec",
            "range": "stddev: 8.522031080072195e-7",
            "extra": "mean: 1.210214901591829 usec\nrounds: 103083"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 775658.3342159181,
            "unit": "iter/sec",
            "range": "stddev: 2.678855106400602e-7",
            "extra": "mean: 1.2892274289953347 usec\nrounds: 109891"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1090635.4704202744,
            "unit": "iter/sec",
            "range": "stddev: 6.174746328436003e-7",
            "extra": "mean: 916.8966415649401 nsec\nrounds: 131579"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1268099.4043883132,
            "unit": "iter/sec",
            "range": "stddev: 2.1597284340667781e-7",
            "extra": "mean: 788.5817125530153 nsec\nrounds: 161291"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1113428.992374511,
            "unit": "iter/sec",
            "range": "stddev: 3.213026424886276e-7",
            "extra": "mean: 898.1264246293671 nsec\nrounds: 178572"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 978113.1305767321,
            "unit": "iter/sec",
            "range": "stddev: 4.94108174423878e-7",
            "extra": "mean: 1.0223766236635117 usec\nrounds: 120468"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 42.09518870622567,
            "unit": "iter/sec",
            "range": "stddev: 0.011564298494759947",
            "extra": "mean: 23.75568398039049 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 25.2937729678579,
            "unit": "iter/sec",
            "range": "stddev: 0.0015846060708800851",
            "extra": "mean: 39.535422464286036 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 132.45870861412374,
            "unit": "iter/sec",
            "range": "stddev: 0.0005763366229966844",
            "extra": "mean: 7.549522492425783 msec\nrounds: 132"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7267b59e9006a222f95fa8ab413793e6046c6cef",
          "message": "Bump rhysd/github-action-benchmark from 1.14.0 to 1.15.0",
          "timestamp": "2023-01-13T13:34:41Z",
          "tree_id": "f72621b71a7811d175244e9da079d89bc142d85d",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/7267b59e9006a222f95fa8ab413793e6046c6cef"
        },
        "date": 1673617034999,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 7.1395882632471235,
            "unit": "iter/sec",
            "range": "stddev: 0.005309777314755804",
            "extra": "mean: 140.06409937499598 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.425800852081015,
            "unit": "iter/sec",
            "range": "stddev: 0.004668885663919779",
            "extra": "mean: 155.62262557143316 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5126199496605808,
            "unit": "iter/sec",
            "range": "stddev: 0.02711907817386179",
            "extra": "mean: 1.9507629397999948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5044618836888493,
            "unit": "iter/sec",
            "range": "stddev: 0.011740011453784161",
            "extra": "mean: 1.9823103237999988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 9.979727797880342,
            "unit": "iter/sec",
            "range": "stddev: 0.002493511970027382",
            "extra": "mean: 100.20313381817853 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 859955.8009079554,
            "unit": "iter/sec",
            "range": "stddev: 7.442570095508792e-7",
            "extra": "mean: 1.16285046155186 usec\nrounds: 113637"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 809183.2183517752,
            "unit": "iter/sec",
            "range": "stddev: 2.689123813903979e-7",
            "extra": "mean: 1.2358140620326874 usec\nrounds: 104167"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1139605.9525400868,
            "unit": "iter/sec",
            "range": "stddev: 5.740633396220147e-7",
            "extra": "mean: 877.4962940225769 nsec\nrounds: 144928"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1361317.5504105936,
            "unit": "iter/sec",
            "range": "stddev: 2.14607468488255e-7",
            "extra": "mean: 734.5824636569085 nsec\nrounds: 178572"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1173614.1531122231,
            "unit": "iter/sec",
            "range": "stddev: 3.1893494764461283e-7",
            "extra": "mean: 852.0687973540241 nsec\nrounds: 151516"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 993035.224998641,
            "unit": "iter/sec",
            "range": "stddev: 4.3400322710291493e-7",
            "extra": "mean: 1.0070136233096367 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 45.287855818437606,
            "unit": "iter/sec",
            "range": "stddev: 0.012059543020990268",
            "extra": "mean: 22.080974732146178 msec\nrounds: 56"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 26.321773768532957,
            "unit": "iter/sec",
            "range": "stddev: 0.0010581487713861358",
            "extra": "mean: 37.99136064285591 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 141.5401590498382,
            "unit": "iter/sec",
            "range": "stddev: 0.0006292720028273946",
            "extra": "mean: 7.065132657141403 msec\nrounds: 140"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4a5dd6b409da422428c82469a1ca376f74afd03",
          "message": "Bump mypy from 0.982 to 0.991",
          "timestamp": "2023-01-13T13:53:44Z",
          "tree_id": "b18d94cfbb77e9e650a0fe7bd99f5e9a584e39b0",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c4a5dd6b409da422428c82469a1ca376f74afd03"
        },
        "date": 1673618180673,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 7.362047887609219,
            "unit": "iter/sec",
            "range": "stddev: 0.007011962976504828",
            "extra": "mean: 135.83177062499985 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.704709006778868,
            "unit": "iter/sec",
            "range": "stddev: 0.006837408045147729",
            "extra": "mean: 149.14890400000047 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5365934588347312,
            "unit": "iter/sec",
            "range": "stddev: 0.01642050720546766",
            "extra": "mean: 1.8636082559999978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.512565503754486,
            "unit": "iter/sec",
            "range": "stddev: 0.07834024287365345",
            "extra": "mean: 1.9509701543999938 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 10.714610357412656,
            "unit": "iter/sec",
            "range": "stddev: 0.00546492010216963",
            "extra": "mean: 93.33050541666903 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 935753.8522087809,
            "unit": "iter/sec",
            "range": "stddev: 9.5007625751609e-7",
            "extra": "mean: 1.0686571021209939 usec\nrounds: 123442"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 869257.7029001801,
            "unit": "iter/sec",
            "range": "stddev: 2.4411641391307923e-7",
            "extra": "mean: 1.150406831787136 usec\nrounds: 116280"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1179105.0765322766,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010163062724348663",
            "extra": "mean: 848.1008350341501 nsec\nrounds: 147059"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1330178.8807022148,
            "unit": "iter/sec",
            "range": "stddev: 1.987377122001687e-7",
            "extra": "mean: 751.7785874574433 nsec\nrounds: 181786"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1217620.9091667559,
            "unit": "iter/sec",
            "range": "stddev: 3.46538264611477e-7",
            "extra": "mean: 821.2736759623677 nsec\nrounds: 142858"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1082089.9681532232,
            "unit": "iter/sec",
            "range": "stddev: 4.3254884362438174e-7",
            "extra": "mean: 924.1375758308228 nsec\nrounds: 166639"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 44.02746588433989,
            "unit": "iter/sec",
            "range": "stddev: 0.011212243758732731",
            "extra": "mean: 22.713094653846284 msec\nrounds: 52"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 25.368677450562004,
            "unit": "iter/sec",
            "range": "stddev: 0.001171271237557745",
            "extra": "mean: 39.41868873333192 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 149.69665378425012,
            "unit": "iter/sec",
            "range": "stddev: 0.0006147736287879575",
            "extra": "mean: 6.680176040816832 msec\nrounds: 147"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37e346700923e5afc9fc09453822ed51d3a2c55d",
          "message": "Bump pycodestyle from 2.9.1 to 2.10.0",
          "timestamp": "2023-01-13T13:58:32Z",
          "tree_id": "2288eb78571525f0d384af9a13f4ad26d4e70ee5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/37e346700923e5afc9fc09453822ed51d3a2c55d"
        },
        "date": 1673618465587,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 7.211852718887362,
            "unit": "iter/sec",
            "range": "stddev: 0.00207527547454193",
            "extra": "mean: 138.66062425000257 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.54594953213546,
            "unit": "iter/sec",
            "range": "stddev: 0.0022282657675548744",
            "extra": "mean: 152.76622514285927 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.510545392949545,
            "unit": "iter/sec",
            "range": "stddev: 0.01063941960447562",
            "extra": "mean: 1.958689695000001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.506408077635597,
            "unit": "iter/sec",
            "range": "stddev: 0.017961625788704184",
            "extra": "mean: 1.9746920402000057 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 10.011154018260306,
            "unit": "iter/sec",
            "range": "stddev: 0.0013717800963988706",
            "extra": "mean: 99.8885840909054 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 885329.4639915334,
            "unit": "iter/sec",
            "range": "stddev: 8.563697104562563e-7",
            "extra": "mean: 1.129523008859876 usec\nrounds: 99001"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 830761.6224628763,
            "unit": "iter/sec",
            "range": "stddev: 2.045419288004671e-7",
            "extra": "mean: 1.2037147274996016 usec\nrounds: 95230"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1125987.0636161857,
            "unit": "iter/sec",
            "range": "stddev: 8.109914567531329e-7",
            "extra": "mean: 888.1096704507383 nsec\nrounds: 133334"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1349788.269773253,
            "unit": "iter/sec",
            "range": "stddev: 1.713253143488976e-7",
            "extra": "mean: 740.8569346716914 nsec\nrounds: 156251"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1188824.6861146057,
            "unit": "iter/sec",
            "range": "stddev: 3.11234451992862e-7",
            "extra": "mean: 841.1669203036702 nsec\nrounds: 142858"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1065530.3375998766,
            "unit": "iter/sec",
            "range": "stddev: 4.6329026058309944e-7",
            "extra": "mean: 938.4997918056162 nsec\nrounds: 123442"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 41.70628300148396,
            "unit": "iter/sec",
            "range": "stddev: 0.010765276241034547",
            "extra": "mean: 23.9772026666682 msec\nrounds: 54"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 25.977117216073825,
            "unit": "iter/sec",
            "range": "stddev: 0.0014022854830262129",
            "extra": "mean: 38.49541855172565 msec\nrounds: 29"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 135.37560936599968,
            "unit": "iter/sec",
            "range": "stddev: 0.0007724474198766128",
            "extra": "mean: 7.386855022727273 msec\nrounds: 132"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee90559274c45496347f2144e48fd20c8ccc65a0",
          "message": "Bump pydocstyle from 6.1.1 to 6.2.3",
          "timestamp": "2023-01-13T14:03:04Z",
          "tree_id": "bedd5e5ed2c1d82f26a5c584143b8be13313ee91",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/ee90559274c45496347f2144e48fd20c8ccc65a0"
        },
        "date": 1673618747395,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 7.437549917174477,
            "unit": "iter/sec",
            "range": "stddev: 0.0056843308731406375",
            "extra": "mean: 134.45287912499816 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.895360610035274,
            "unit": "iter/sec",
            "range": "stddev: 0.003860172460000712",
            "extra": "mean: 145.02504750000077 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.4937974385699575,
            "unit": "iter/sec",
            "range": "stddev: 0.012218673561994313",
            "extra": "mean: 2.025121885799996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.49429530511192843,
            "unit": "iter/sec",
            "range": "stddev: 0.010319689984546456",
            "extra": "mean: 2.023082132599984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 10.294898625226041,
            "unit": "iter/sec",
            "range": "stddev: 0.0022326836101502615",
            "extra": "mean: 97.1354878181759 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 899575.6489902497,
            "unit": "iter/sec",
            "range": "stddev: 7.508169115191338e-7",
            "extra": "mean: 1.1116352483779766 usec\nrounds: 136968"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 825334.7450798331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017457126912933816",
            "extra": "mean: 1.211629591461397 usec\nrounds: 128189"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1168105.960429711,
            "unit": "iter/sec",
            "range": "stddev: 5.298292554112398e-7",
            "extra": "mean: 856.0867197630913 nsec\nrounds: 181819"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1386943.5053478936,
            "unit": "iter/sec",
            "range": "stddev: 1.6941989905213747e-7",
            "extra": "mean: 721.0099013721723 nsec\nrounds: 163935"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1226058.427536257,
            "unit": "iter/sec",
            "range": "stddev: 3.526453872782958e-7",
            "extra": "mean: 815.6218150300693 nsec\nrounds: 131579"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1065431.7094662993,
            "unit": "iter/sec",
            "range": "stddev: 4.0271074542142164e-7",
            "extra": "mean: 938.5866697179819 nsec\nrounds: 163935"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 47.284937706628554,
            "unit": "iter/sec",
            "range": "stddev: 0.00924747274857749",
            "extra": "mean: 21.148383576273947 msec\nrounds: 59"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 24.299438272163933,
            "unit": "iter/sec",
            "range": "stddev: 0.02029193522359822",
            "extra": "mean: 41.15321468749933 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 139.13379845982965,
            "unit": "iter/sec",
            "range": "stddev: 0.0006655772707235821",
            "extra": "mean: 7.187326236110181 msec\nrounds: 144"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "651b8bc90fd50260b612c93f4a0b56e5cef67183",
          "message": "Bump black from 22.10.0 to 22.12.0",
          "timestamp": "2023-01-13T14:09:32Z",
          "tree_id": "c57ca5b4cd01a3d932bdc3a3080e69511434612b",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/651b8bc90fd50260b612c93f4a0b56e5cef67183"
        },
        "date": 1673619105547,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 9.369497285460294,
            "unit": "iter/sec",
            "range": "stddev: 0.003184583219473677",
            "extra": "mean: 106.72931210000058 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 8.84257225522233,
            "unit": "iter/sec",
            "range": "stddev: 0.0015657245608307125",
            "extra": "mean: 113.08926533333225 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6536277785902342,
            "unit": "iter/sec",
            "range": "stddev: 0.008083627296375549",
            "extra": "mean: 1.5299227369999984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.645487048396224,
            "unit": "iter/sec",
            "range": "stddev: 0.0034370106207732014",
            "extra": "mean: 1.549217761200009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 14.124972754928148,
            "unit": "iter/sec",
            "range": "stddev: 0.0007546921792596736",
            "extra": "mean: 70.79659673333556 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 993122.2875228742,
            "unit": "iter/sec",
            "range": "stddev: 6.772623606675332e-7",
            "extra": "mean: 1.006925342995041 usec\nrounds: 114943"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 899907.6892289943,
            "unit": "iter/sec",
            "range": "stddev: 1.5236043908373646e-7",
            "extra": "mean: 1.1112250867161473 usec\nrounds: 106383"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1335826.2498589484,
            "unit": "iter/sec",
            "range": "stddev: 4.841237651185618e-7",
            "extra": "mean: 748.6003513597825 nsec\nrounds: 156250"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1517807.4791349564,
            "unit": "iter/sec",
            "range": "stddev: 1.1846039429200582e-7",
            "extra": "mean: 658.8450865783739 nsec\nrounds: 178572"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1372089.5522961076,
            "unit": "iter/sec",
            "range": "stddev: 2.473040703142e-7",
            "extra": "mean: 728.8154029936007 nsec\nrounds: 151516"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1201360.249605488,
            "unit": "iter/sec",
            "range": "stddev: 3.619354460101569e-7",
            "extra": "mean: 832.3897851026595 nsec\nrounds: 135136"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 60.7498371877369,
            "unit": "iter/sec",
            "range": "stddev: 0.007824713942632042",
            "extra": "mean: 16.460949465752023 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 32.25545651973335,
            "unit": "iter/sec",
            "range": "stddev: 0.016381566389585305",
            "extra": "mean: 31.002506487180444 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 157.13949856669436,
            "unit": "iter/sec",
            "range": "stddev: 0.00042270132605658206",
            "extra": "mean: 6.36377237499948 msec\nrounds: 152"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d964be808b134e8bc7741426793b80bb1c662b74",
          "message": "Merge pull request #433 from ClearcodeHQ/tbump\n\nMigrate version management tool to tbump - closes #427",
          "timestamp": "2023-01-13T17:50:23+01:00",
          "tree_id": "3d5e68b155fd2cb21cca728524fd32d7c78b733e",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/d964be808b134e8bc7741426793b80bb1c662b74"
        },
        "date": 1673628812935,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.44113689273851,
            "unit": "iter/sec",
            "range": "stddev: 0.011086181916347847",
            "extra": "mean: 155.25209549999806 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 5.3343839895397,
            "unit": "iter/sec",
            "range": "stddev: 0.012672975883144835",
            "extra": "mean: 187.46307014285435 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.4254585097946316,
            "unit": "iter/sec",
            "range": "stddev: 0.0663420560547879",
            "extra": "mean: 2.3504054496000064 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.4282294671906228,
            "unit": "iter/sec",
            "range": "stddev: 0.05396265678032156",
            "extra": "mean: 2.3351966097999934 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 8.57391466372439,
            "unit": "iter/sec",
            "range": "stddev: 0.008390675618136915",
            "extra": "mean: 116.63283800000102 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 927862.9911556928,
            "unit": "iter/sec",
            "range": "stddev: 0.000001907379431427152",
            "extra": "mean: 1.0777453239668457 usec\nrounds: 135136"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 798587.7877548821,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020063289091256682",
            "extra": "mean: 1.252210483723233 usec\nrounds: 120482"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1110133.2942425979,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020229067485542675",
            "extra": "mean: 900.7927292931737 nsec\nrounds: 161291"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1273040.4740967376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017683076977868004",
            "extra": "mean: 785.5209793777666 nsec\nrounds: 175439"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1200984.4628721615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021293652127208055",
            "extra": "mean: 832.6502389617971 nsec\nrounds: 172414"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1021377.0128853634,
            "unit": "iter/sec",
            "range": "stddev: 0.00000240330656694016",
            "extra": "mean: 979.0703994551775 nsec\nrounds: 149254"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 49.90099986774421,
            "unit": "iter/sec",
            "range": "stddev: 0.0029049117961163205",
            "extra": "mean: 20.039678616668272 msec\nrounds: 60"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 20.97594264942209,
            "unit": "iter/sec",
            "range": "stddev: 0.017321531922356567",
            "extra": "mean: 47.673662000003176 msec\nrounds: 31"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 146.39913833243108,
            "unit": "iter/sec",
            "range": "stddev: 0.0013307764281773652",
            "extra": "mean: 6.830641296052457 msec\nrounds: 152"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf",
          "message": "Merge pull request #436 from ClearcodeHQ/python3.11\n\nAdd support for python 3.11 - closes #424",
          "timestamp": "2023-01-13T18:28:20+01:00",
          "tree_id": "cab7a8b0b5d8af18de9e5e1a8e4fc00d20792147",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf"
        },
        "date": 1673631049921,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 8.504152608900187,
            "unit": "iter/sec",
            "range": "stddev: 0.007076300782559505",
            "extra": "mean: 117.58961133334209 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 7.602460546492779,
            "unit": "iter/sec",
            "range": "stddev: 0.0058021702664910035",
            "extra": "mean: 131.5363616666616 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5797251945263789,
            "unit": "iter/sec",
            "range": "stddev: 0.011385685580858309",
            "extra": "mean: 1.7249552191999782 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.578594810954879,
            "unit": "iter/sec",
            "range": "stddev: 0.011622922091428674",
            "extra": "mean: 1.7283252131999916 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 12.48298511172717,
            "unit": "iter/sec",
            "range": "stddev: 0.0035011047838098114",
            "extra": "mean: 80.10904371427533 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 1058940.5003225736,
            "unit": "iter/sec",
            "range": "stddev: 6.495248833845868e-7",
            "extra": "mean: 944.3401208049692 nsec\nrounds: 119048"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 963032.2345337948,
            "unit": "iter/sec",
            "range": "stddev: 1.6677190784778735e-7",
            "extra": "mean: 1.0383868412090083 usec\nrounds: 111112"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1341224.7064743638,
            "unit": "iter/sec",
            "range": "stddev: 4.645121069120223e-7",
            "extra": "mean: 745.5872197795828 nsec\nrounds: 149254"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1613310.163517756,
            "unit": "iter/sec",
            "range": "stddev: 1.3709431159270658e-7",
            "extra": "mean: 619.8436126005629 nsec\nrounds: 181819"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1376897.2577709332,
            "unit": "iter/sec",
            "range": "stddev: 2.6153325800250224e-7",
            "extra": "mean: 726.2706017868386 nsec\nrounds: 156251"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1246984.8610893108,
            "unit": "iter/sec",
            "range": "stddev: 3.602314665769283e-7",
            "extra": "mean: 801.934354781594 nsec\nrounds: 138889"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 59.15016362854158,
            "unit": "iter/sec",
            "range": "stddev: 0.0006661290817569621",
            "extra": "mean: 16.906123984371746 msec\nrounds: 64"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 28.81418676858587,
            "unit": "iter/sec",
            "range": "stddev: 0.012541831747486958",
            "extra": "mean: 34.70512661111198 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 167.84653807079704,
            "unit": "iter/sec",
            "range": "stddev: 0.0004034852875408761",
            "extra": "mean: 5.957823208591909 msec\nrounds: 163"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3baaefdfd013139d2162ed574675bae14b0be27",
          "message": "Bump pytest from 7.2.0 to 7.2.1",
          "timestamp": "2023-01-16T04:12:28Z",
          "tree_id": "7a297e3c4218d1b4126aaa2c115e9cbd68d653df",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c3baaefdfd013139d2162ed574675bae14b0be27"
        },
        "date": 1673842484806,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 10.439260161698963,
            "unit": "iter/sec",
            "range": "stddev: 0.0025597471212262936",
            "extra": "mean: 95.79222899999577 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 9.238384300188999,
            "unit": "iter/sec",
            "range": "stddev: 0.0019869709727684095",
            "extra": "mean: 108.24403570000243 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.665782786400014,
            "unit": "iter/sec",
            "range": "stddev: 0.002781414631960351",
            "extra": "mean: 1.501991370799999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6582933866709141,
            "unit": "iter/sec",
            "range": "stddev: 0.0017023812838416479",
            "extra": "mean: 1.5190795171999922 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 15.246838820973235,
            "unit": "iter/sec",
            "range": "stddev: 0.0017809493420258692",
            "extra": "mean: 65.58736612499771 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 1095241.3812803442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015564357629025667",
            "extra": "mean: 913.0407388651789 nsec\nrounds: 120482"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 988114.207454144,
            "unit": "iter/sec",
            "range": "stddev: 1.205245212371296e-7",
            "extra": "mean: 1.012028763938433 usec\nrounds: 107527"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1416314.6712931285,
            "unit": "iter/sec",
            "range": "stddev: 4.575344708480809e-7",
            "extra": "mean: 706.0577852289259 nsec\nrounds: 156251"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1644252.0145327465,
            "unit": "iter/sec",
            "range": "stddev: 9.546003172420649e-8",
            "extra": "mean: 608.1792761460043 nsec\nrounds: 178572"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1431557.0473364273,
            "unit": "iter/sec",
            "range": "stddev: 2.3017007204190846e-7",
            "extra": "mean: 698.5400979030983 nsec\nrounds: 156275"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1232667.3271649652,
            "unit": "iter/sec",
            "range": "stddev: 3.568125239957086e-7",
            "extra": "mean: 811.2488892683328 nsec\nrounds: 135136"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 62.8677189938518,
            "unit": "iter/sec",
            "range": "stddev: 0.007740817684066724",
            "extra": "mean: 15.90641454794623 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 32.794999992313464,
            "unit": "iter/sec",
            "range": "stddev: 0.00994720076752209",
            "extra": "mean: 30.492453125000196 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 162.6811438805557,
            "unit": "iter/sec",
            "range": "stddev: 0.00036334449241212",
            "extra": "mean: 6.146993905662622 msec\nrounds: 159"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f321b36ac5981710681bf2ec9661b587ebdf756d",
          "message": "Merge pull request #437 from ClearcodeHQ/order\n\nRun benchmarks only after tests",
          "timestamp": "2023-01-16T10:09:22+01:00",
          "tree_id": "f9722ee8a25d0d75f3fa9f130017ffb46662ad73",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f321b36ac5981710681bf2ec9661b587ebdf756d"
        },
        "date": 1673860539793,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 7.713843444377666,
            "unit": "iter/sec",
            "range": "stddev: 0.007004576438898987",
            "extra": "mean: 129.63706188889054 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.976260358054834,
            "unit": "iter/sec",
            "range": "stddev: 0.006109401702312211",
            "extra": "mean: 143.34327400000114 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5601072222755016,
            "unit": "iter/sec",
            "range": "stddev: 0.0163678473476654",
            "extra": "mean: 1.7853724434000013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5548243530954363,
            "unit": "iter/sec",
            "range": "stddev: 0.01877053432561655",
            "extra": "mean: 1.8023722181999973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 11.735830439760402,
            "unit": "iter/sec",
            "range": "stddev: 0.004159070368807057",
            "extra": "mean: 85.20913838462171 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 1088321.3785458459,
            "unit": "iter/sec",
            "range": "stddev: 6.365293373191099e-7",
            "extra": "mean: 918.8462339461765 nsec\nrounds: 149254"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 948696.8856694828,
            "unit": "iter/sec",
            "range": "stddev: 2.5320370329403886e-7",
            "extra": "mean: 1.0540774562512487 usec\nrounds: 136987"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1294553.4774154383,
            "unit": "iter/sec",
            "range": "stddev: 5.017656088803254e-7",
            "extra": "mean: 772.4671227925218 nsec\nrounds: 181819"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1473968.4079768877,
            "unit": "iter/sec",
            "range": "stddev: 1.6689539389264224e-7",
            "extra": "mean: 678.4405924768647 nsec\nrounds: 181819"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1258090.569051142,
            "unit": "iter/sec",
            "range": "stddev: 3.065888257216813e-7",
            "extra": "mean: 794.855334425137 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1213904.8029549029,
            "unit": "iter/sec",
            "range": "stddev: 4.1975486430734156e-7",
            "extra": "mean: 823.7878271556152 nsec\nrounds: 169492"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 56.41803256057363,
            "unit": "iter/sec",
            "range": "stddev: 0.0008832003274394404",
            "extra": "mean: 17.724829360654198 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 27.454009780640792,
            "unit": "iter/sec",
            "range": "stddev: 0.016596630869669518",
            "extra": "mean: 36.42455175000158 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 155.97120642524936,
            "unit": "iter/sec",
            "range": "stddev: 0.0004812083898103311",
            "extra": "mean: 6.411439796609249 msec\nrounds: 177"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6b72a545782dfc9f883d35e8bf5413198a629a3",
          "message": "Bump pydocstyle from 6.2.3 to 6.3.0",
          "timestamp": "2023-01-18T04:09:33Z",
          "tree_id": "3b3f6febdf72fc4eaaf2820e32b1cbf670ff91c0",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f6b72a545782dfc9f883d35e8bf5413198a629a3"
        },
        "date": 1674015338449,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 5.501466698095043,
            "unit": "iter/sec",
            "range": "stddev: 0.009327058812641868",
            "extra": "mean: 181.76970885714232 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 5.345528705198862,
            "unit": "iter/sec",
            "range": "stddev: 0.006019662529729113",
            "extra": "mean: 187.0722346000008 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.4210765646844067,
            "unit": "iter/sec",
            "range": "stddev: 0.08512097918459126",
            "extra": "mean: 2.374865010000002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.41286858642398905,
            "unit": "iter/sec",
            "range": "stddev: 0.06750762964664143",
            "extra": "mean: 2.422078193599998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 7.98973208369943,
            "unit": "iter/sec",
            "range": "stddev: 0.006828623945902026",
            "extra": "mean: 125.16064237500402 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 761114.6477181859,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018650544312153263",
            "extra": "mean: 1.3138625080965152 usec\nrounds: 111112"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 573200.6630194868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024806354841023",
            "extra": "mean: 1.7445897475628336 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 887656.1074134547,
            "unit": "iter/sec",
            "range": "stddev: 0.000004270578524878566",
            "extra": "mean: 1.1265624059230495 usec\nrounds: 119048"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1077547.0574771015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019965309783642362",
            "extra": "mean: 928.0337160785841 nsec\nrounds: 161291"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1004851.5226487181,
            "unit": "iter/sec",
            "range": "stddev: 0.000001956822320265788",
            "extra": "mean: 995.1719009830173 nsec\nrounds: 136987"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 785442.6582432151,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032466108185550493",
            "extra": "mean: 1.27316741649436 usec\nrounds: 128206"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 46.3175981027559,
            "unit": "iter/sec",
            "range": "stddev: 0.0020359807919084296",
            "extra": "mean: 21.590066000000547 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 21.67398523353341,
            "unit": "iter/sec",
            "range": "stddev: 0.004958484365764159",
            "extra": "mean: 46.1382615714265 msec\nrounds: 28"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 117.87618688482762,
            "unit": "iter/sec",
            "range": "stddev: 0.0009734995399329282",
            "extra": "mean: 8.483477676259263 msec\nrounds: 139"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d20cb0908943f121295eabac957a91fb74cf43bd",
          "message": "Merge pull request #440 from ClearcodeHQ/dependabot/pip/black-23.1.0\n\nBump black from 22.12.0 to 23.1.0",
          "timestamp": "2023-02-01T09:58:31+01:00",
          "tree_id": "91dea9c2af28eb7217db916a6b7105b7ed37347b",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/d20cb0908943f121295eabac957a91fb74cf43bd"
        },
        "date": 1675242467502,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 10.155808212244585,
            "unit": "iter/sec",
            "range": "stddev: 0.0015497148737271633",
            "extra": "mean: 98.46582163636438 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 8.896738952205089,
            "unit": "iter/sec",
            "range": "stddev: 0.0008117615659275177",
            "extra": "mean: 112.40073529999961 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6521100277803853,
            "unit": "iter/sec",
            "range": "stddev: 0.013563156038696707",
            "extra": "mean: 1.5334835494000032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6425771458509855,
            "unit": "iter/sec",
            "range": "stddev: 0.0035657655098072076",
            "extra": "mean: 1.5562333744 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 13.835815099306869,
            "unit": "iter/sec",
            "range": "stddev: 0.0011555991122135793",
            "extra": "mean: 72.27618993333445 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 970082.1053614761,
            "unit": "iter/sec",
            "range": "stddev: 6.845376151578284e-7",
            "extra": "mean: 1.0308405798572744 usec\nrounds: 113650"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 874926.8620906663,
            "unit": "iter/sec",
            "range": "stddev: 3.290255213647235e-7",
            "extra": "mean: 1.142952677907815 usec\nrounds: 104167"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1296933.2562910817,
            "unit": "iter/sec",
            "range": "stddev: 4.980104763450593e-7",
            "extra": "mean: 771.0497014007971 nsec\nrounds: 151539"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1487071.6328714555,
            "unit": "iter/sec",
            "range": "stddev: 1.2307805786734412e-7",
            "extra": "mean: 672.4625619204404 nsec\nrounds: 175439"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1362952.599601233,
            "unit": "iter/sec",
            "range": "stddev: 7.768456451587027e-8",
            "extra": "mean: 733.7012309104321 nsec\nrounds: 153870"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1165326.3173760655,
            "unit": "iter/sec",
            "range": "stddev: 3.806874512372602e-7",
            "extra": "mean: 858.1287362081075 nsec\nrounds: 129871"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 58.72688208840754,
            "unit": "iter/sec",
            "range": "stddev: 0.00840393428626028",
            "extra": "mean: 17.02797704285745 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 31.138507677005972,
            "unit": "iter/sec",
            "range": "stddev: 0.012883961733130065",
            "extra": "mean: 32.11457692105275 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 160.91642730563402,
            "unit": "iter/sec",
            "range": "stddev: 0.0004233123443701563",
            "extra": "mean: 6.214405929487025 msec\nrounds: 156"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc672b755740bbbb88b91789eb87e6315538ec20",
          "message": "Merge pull request #441 from ClearcodeHQ/publish-docs\n\nPublish documentation to the github-pages",
          "timestamp": "2023-02-03T21:14:46+01:00",
          "tree_id": "672a5ab7bde84d965fdf3f2519922d01e4e35c25",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/cc672b755740bbbb88b91789eb87e6315538ec20"
        },
        "date": 1675455716633,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 8.751883497223243,
            "unit": "iter/sec",
            "range": "stddev: 0.01031930146998462",
            "extra": "mean: 114.26111880000178 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 7.588570093069701,
            "unit": "iter/sec",
            "range": "stddev: 0.008755302213915272",
            "extra": "mean: 131.77713162500203 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.593864378691333,
            "unit": "iter/sec",
            "range": "stddev: 0.020813486866613485",
            "extra": "mean: 1.6838861461999897 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.575076672698341,
            "unit": "iter/sec",
            "range": "stddev: 0.014590462706252074",
            "extra": "mean: 1.7388985634000051 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 13.01097583710018,
            "unit": "iter/sec",
            "range": "stddev: 0.007148347255686065",
            "extra": "mean: 76.85818592857174 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 1128216.214081852,
            "unit": "iter/sec",
            "range": "stddev: 5.36806049508791e-7",
            "extra": "mean: 886.3549269355603 nsec\nrounds: 147059"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 1001861.9110911153,
            "unit": "iter/sec",
            "range": "stddev: 2.478443403524136e-7",
            "extra": "mean: 998.1415491790408 nsec\nrounds: 131579"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1342844.1028348391,
            "unit": "iter/sec",
            "range": "stddev: 4.917133350312049e-7",
            "extra": "mean: 744.6880824728946 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1574628.4997723375,
            "unit": "iter/sec",
            "range": "stddev: 1.6901601057621231e-7",
            "extra": "mean: 635.070430990276 nsec\nrounds: 185186"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1390385.1360186022,
            "unit": "iter/sec",
            "range": "stddev: 2.9431410975077133e-7",
            "extra": "mean: 719.225180199805 nsec\nrounds: 188680"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1265627.1154113617,
            "unit": "iter/sec",
            "range": "stddev: 3.765035687630621e-7",
            "extra": "mean: 790.1221361514571 nsec\nrounds: 169492"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 54.96360010490832,
            "unit": "iter/sec",
            "range": "stddev: 0.008423468644551386",
            "extra": "mean: 18.193859173913513 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 29.241282799038537,
            "unit": "iter/sec",
            "range": "stddev: 0.012674501684030438",
            "extra": "mean: 34.19822607894891 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 171.567317623202,
            "unit": "iter/sec",
            "range": "stddev: 0.0005494390517087657",
            "extra": "mean: 5.828615926701207 msec\nrounds: 191"
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
          "id": "7ab370de05b97bfc5fd3bc101feef2b7f70f5312",
          "message": "Branch is main",
          "timestamp": "2023-02-03T21:23:43+01:00",
          "tree_id": "0da3786310aa184a9fc92b2e0ca0d08ed04aa78c",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/7ab370de05b97bfc5fd3bc101feef2b7f70f5312"
        },
        "date": 1675456447525,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 5.033856265815289,
            "unit": "iter/sec",
            "range": "stddev: 0.002736200475929169",
            "extra": "mean: 198.6548576666678 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 4.503001568907874,
            "unit": "iter/sec",
            "range": "stddev: 0.004298104393821659",
            "extra": "mean: 222.07409540000072 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.3775887049175696,
            "unit": "iter/sec",
            "range": "stddev: 0.05412814017546507",
            "extra": "mean: 2.648384305399992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.3746417723327115,
            "unit": "iter/sec",
            "range": "stddev: 0.03035964100132244",
            "extra": "mean: 2.6692164991999903 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 6.87884035876379,
            "unit": "iter/sec",
            "range": "stddev: 0.006414111222779165",
            "extra": "mean: 145.37334024999993 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 703656.2440232561,
            "unit": "iter/sec",
            "range": "stddev: 0.000003125337713523996",
            "extra": "mean: 1.4211484776747714 usec\nrounds: 106383"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 648596.4385110762,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031972225257924865",
            "extra": "mean: 1.5417907663748691 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 869425.214174798,
            "unit": "iter/sec",
            "range": "stddev: 0.000004615399427848458",
            "extra": "mean: 1.1501851840690975 usec\nrounds: 133316"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1028432.5515064364,
            "unit": "iter/sec",
            "range": "stddev: 0.000002688847790895913",
            "extra": "mean: 972.3535087791688 nsec\nrounds: 156251"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 895954.8167778648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018056167026906905",
            "extra": "mean: 1.1161277123284994 usec\nrounds: 117648"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 789062.3488849651,
            "unit": "iter/sec",
            "range": "stddev: 0.000002593285244523421",
            "extra": "mean: 1.2673269753817638 usec\nrounds: 123457"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 44.30079916222835,
            "unit": "iter/sec",
            "range": "stddev: 0.0016285488585966875",
            "extra": "mean: 22.57295622000015 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 21.790238073926663,
            "unit": "iter/sec",
            "range": "stddev: 0.004005677710183681",
            "extra": "mean: 45.89210987999991 msec\nrounds: 25"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 119.02010043001893,
            "unit": "iter/sec",
            "range": "stddev: 0.0016468913443815983",
            "extra": "mean: 8.401942162601156 msec\nrounds: 123"
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
          "id": "81c93969ee43f0c73ea1735bcdf3a64172c6029f",
          "message": "Publish documentation on tag only",
          "timestamp": "2023-02-03T21:31:04+01:00",
          "tree_id": "96fc4bcb7bd43110c801b601a750d1be8ab48eba",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/81c93969ee43f0c73ea1735bcdf3a64172c6029f"
        },
        "date": 1675456699087,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 8.207289145545255,
            "unit": "iter/sec",
            "range": "stddev: 0.005058865256221384",
            "extra": "mean: 121.84291088888699 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 7.32517910449776,
            "unit": "iter/sec",
            "range": "stddev: 0.0083686156872281",
            "extra": "mean: 136.51543337499916 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5600030063470196,
            "unit": "iter/sec",
            "range": "stddev: 0.016001378125241633",
            "extra": "mean: 1.7857046991999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5685501217849207,
            "unit": "iter/sec",
            "range": "stddev: 0.024298407202901905",
            "extra": "mean: 1.758859881799998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 11.232943588469574,
            "unit": "iter/sec",
            "range": "stddev: 0.004281200589465007",
            "extra": "mean: 89.02386023076649 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 1072467.0087579212,
            "unit": "iter/sec",
            "range": "stddev: 6.516610782235294e-7",
            "extra": "mean: 932.4296149287829 nsec\nrounds: 121952"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 966078.9208214713,
            "unit": "iter/sec",
            "range": "stddev: 1.7710376609236388e-7",
            "extra": "mean: 1.0351121201874482 usec\nrounds: 109891"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1361400.722870528,
            "unit": "iter/sec",
            "range": "stddev: 4.841961018837906e-7",
            "extra": "mean: 734.5375855915516 nsec\nrounds: 149254"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1594621.286296324,
            "unit": "iter/sec",
            "range": "stddev: 1.2804758215631421e-7",
            "extra": "mean: 627.1081469898567 nsec\nrounds: 175439"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1409069.1411106877,
            "unit": "iter/sec",
            "range": "stddev: 2.611501907801707e-7",
            "extra": "mean: 709.6883827942244 nsec\nrounds: 156251"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1215232.1090894362,
            "unit": "iter/sec",
            "range": "stddev: 3.686424999971139e-7",
            "extra": "mean: 822.8880660084542 nsec\nrounds: 138889"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 51.175999822073486,
            "unit": "iter/sec",
            "range": "stddev: 0.009551284315828907",
            "extra": "mean: 19.54040963492178 msec\nrounds: 63"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 27.313522625971327,
            "unit": "iter/sec",
            "range": "stddev: 0.01576440818821679",
            "extra": "mean: 36.61190149999694 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 167.77488346423428,
            "unit": "iter/sec",
            "range": "stddev: 0.0002753896457297916",
            "extra": "mean: 5.960367722223315 msec\nrounds: 162"
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
          "id": "0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc",
          "message": "Release 1.2.0",
          "timestamp": "2023-02-03T21:32:46+01:00",
          "tree_id": "10f78c8f4e7a2858db3db56f43ad1e29bc1f49f5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc"
        },
        "date": 1675456804903,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.106784752667751,
            "unit": "iter/sec",
            "range": "stddev: 0.00228972789585094",
            "extra": "mean: 163.75229200000044 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 5.1141579394605925,
            "unit": "iter/sec",
            "range": "stddev: 0.0049750415839506104",
            "extra": "mean: 195.53561149999865 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.40305944464097976,
            "unit": "iter/sec",
            "range": "stddev: 0.027391360095939586",
            "extra": "mean: 2.4810236140000086 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.4043811567779744,
            "unit": "iter/sec",
            "range": "stddev: 0.06957906496931435",
            "extra": "mean: 2.4729144353999915 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 7.8407287811736275,
            "unit": "iter/sec",
            "range": "stddev: 0.007717491891631389",
            "extra": "mean: 127.53916477778185 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 800504.2320841328,
            "unit": "iter/sec",
            "range": "stddev: 0.000001577771418889579",
            "extra": "mean: 1.2492126336377505 usec\nrounds: 111124"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 716506.8493455636,
            "unit": "iter/sec",
            "range": "stddev: 0.000002056950390531172",
            "extra": "mean: 1.3956600706795321 usec\nrounds: 101021"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 977602.0282343834,
            "unit": "iter/sec",
            "range": "stddev: 0.000003592211917235369",
            "extra": "mean: 1.0229111347140565 usec\nrounds: 121952"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1204805.173710205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012453306915105114",
            "extra": "mean: 830.0097159447167 nsec\nrounds: 166695"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1037148.3716732331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012724119578773586",
            "extra": "mean: 964.1822012281 nsec\nrounds: 136987"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 911794.048851764,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010245215555150043",
            "extra": "mean: 1.0967388976264025 usec\nrounds: 126599"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 47.37669173224846,
            "unit": "iter/sec",
            "range": "stddev: 0.0010629308269839387",
            "extra": "mean: 21.107425686275135 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 23.029663117898032,
            "unit": "iter/sec",
            "range": "stddev: 0.0035388017629761014",
            "extra": "mean: 43.42225914815172 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 131.78486253978113,
            "unit": "iter/sec",
            "range": "stddev: 0.001144678680122819",
            "extra": "mean: 7.588124923665916 msec\nrounds: 131"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3ad0af6782add57837c6e45a9be88ac488b647e",
          "message": "Bump mypy from 0.991 to 1.0.0",
          "timestamp": "2023-02-07T04:12:30Z",
          "tree_id": "16ec4634a8db7fdf2d185c96629ab6c03df5aa70",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/e3ad0af6782add57837c6e45a9be88ac488b647e"
        },
        "date": 1675743522054,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 10.305992709246521,
            "unit": "iter/sec",
            "range": "stddev: 0.002140387182277801",
            "extra": "mean: 97.0309244545459 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 9.9686746063844,
            "unit": "iter/sec",
            "range": "stddev: 0.0017447308012096755",
            "extra": "mean: 100.31423829999966 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6646025534492129,
            "unit": "iter/sec",
            "range": "stddev: 0.004706441069706408",
            "extra": "mean: 1.5046586788000014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6488113537301972,
            "unit": "iter/sec",
            "range": "stddev: 0.002873319870765351",
            "extra": "mean: 1.5412800565999987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 15.668863345661586,
            "unit": "iter/sec",
            "range": "stddev: 0.0014075812555699866",
            "extra": "mean: 63.82083868750321 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 1105312.9655198727,
            "unit": "iter/sec",
            "range": "stddev: 0.000002286654779963064",
            "extra": "mean: 904.7211343708688 nsec\nrounds: 119062"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 1000826.454351466,
            "unit": "iter/sec",
            "range": "stddev: 1.0675469713913955e-7",
            "extra": "mean: 999.1742281112349 nsec\nrounds: 106395"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 1414844.9746451797,
            "unit": "iter/sec",
            "range": "stddev: 4.688714147285481e-7",
            "extra": "mean: 706.7912159429108 nsec\nrounds: 153847"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 1626982.7106330793,
            "unit": "iter/sec",
            "range": "stddev: 8.744082719483097e-8",
            "extra": "mean: 614.6346814041073 nsec\nrounds: 172444"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 1477764.4436535782,
            "unit": "iter/sec",
            "range": "stddev: 2.326231207024758e-7",
            "extra": "mean: 676.6978352299774 nsec\nrounds: 156275"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 1302267.2759758702,
            "unit": "iter/sec",
            "range": "stddev: 3.3931153943447137e-7",
            "extra": "mean: 767.8915215394777 nsec\nrounds: 137006"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 63.78983970198137,
            "unit": "iter/sec",
            "range": "stddev: 0.007900471484064428",
            "extra": "mean: 15.67647770666743 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 32.45762570410865,
            "unit": "iter/sec",
            "range": "stddev: 0.012149490958056331",
            "extra": "mean: 30.809400820510874 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 165.53420916429212,
            "unit": "iter/sec",
            "range": "stddev: 0.00033969575603635",
            "extra": "mean: 6.041047376542595 msec\nrounds: 162"
          }
        ]
      }
    ],
    "Matchbox performance benchmarks on Python 3.11": [
      {
        "commit": {
          "author": {
            "email": "g.sliwinski@clearcode.cc",
            "name": "Grzegorz Śliwiński",
            "username": "fizyk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf",
          "message": "Merge pull request #436 from ClearcodeHQ/python3.11\n\nAdd support for python 3.11 - closes #424",
          "timestamp": "2023-01-13T18:28:20+01:00",
          "tree_id": "cab7a8b0b5d8af18de9e5e1a8e4fc00d20792147",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/454b3fd5ff268cafe5cdc57ea3cc2dcc247ec2cf"
        },
        "date": 1673630977477,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 5.281656836651252,
            "unit": "iter/sec",
            "range": "stddev: 0.00019650440748599963",
            "extra": "mean: 189.33452719999764 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 4.927653686580364,
            "unit": "iter/sec",
            "range": "stddev: 0.0011514148508493466",
            "extra": "mean: 202.93633919999934 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.9620944190846306,
            "unit": "iter/sec",
            "range": "stddev: 0.0010661046106734563",
            "extra": "mean: 1.0393990238000073 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.9464449683408954,
            "unit": "iter/sec",
            "range": "stddev: 0.0016854477724159822",
            "extra": "mean: 1.0565854682000009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 5.822231251295544,
            "unit": "iter/sec",
            "range": "stddev: 0.00042165818364803026",
            "extra": "mean: 171.75545883332668 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 315703.76170196966,
            "unit": "iter/sec",
            "range": "stddev: 2.409336102157039e-7",
            "extra": "mean: 3.1675264007275876 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 301906.5959103824,
            "unit": "iter/sec",
            "range": "stddev: 2.0531606700977321e-7",
            "extra": "mean: 3.312282717721208 usec\nrounds: 105264"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 311324.70846740884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024770912265929973",
            "extra": "mean: 3.212080418938818 usec\nrounds: 104167"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 339353.99762947997,
            "unit": "iter/sec",
            "range": "stddev: 2.0268896047630487e-7",
            "extra": "mean: 2.946775364325719 usec\nrounds: 108696"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 325847.1365807958,
            "unit": "iter/sec",
            "range": "stddev: 2.8783195336526877e-7",
            "extra": "mean: 3.0689236999081126 usec\nrounds: 103093"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 318287.87173936673,
            "unit": "iter/sec",
            "range": "stddev: 1.9923669157808354e-7",
            "extra": "mean: 3.1418099424751573 usec\nrounds: 92593"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 89.54676090594852,
            "unit": "iter/sec",
            "range": "stddev: 0.0002570292518643186",
            "extra": "mean: 11.167349772152068 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 18.665524020527496,
            "unit": "iter/sec",
            "range": "stddev: 0.002837882659920706",
            "extra": "mean: 53.574708049998776 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 29.257191006120998,
            "unit": "iter/sec",
            "range": "stddev: 0.001250398010605595",
            "extra": "mean: 34.1796312499989 msec\nrounds: 32"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3baaefdfd013139d2162ed574675bae14b0be27",
          "message": "Bump pytest from 7.2.0 to 7.2.1",
          "timestamp": "2023-01-16T04:12:28Z",
          "tree_id": "7a297e3c4218d1b4126aaa2c115e9cbd68d653df",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/c3baaefdfd013139d2162ed574675bae14b0be27"
        },
        "date": 1673842429092,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 5.186858593325762,
            "unit": "iter/sec",
            "range": "stddev: 0.00016252199426970406",
            "extra": "mean: 192.7949223999974 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 4.908807839741545,
            "unit": "iter/sec",
            "range": "stddev: 0.00040334825784091896",
            "extra": "mean: 203.7154504 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.9582955097369831,
            "unit": "iter/sec",
            "range": "stddev: 0.0017320604172890888",
            "extra": "mean: 1.0435194465999984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.9565642388303955,
            "unit": "iter/sec",
            "range": "stddev: 0.0010968970982356465",
            "extra": "mean: 1.0454080964000014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 5.734059312006623,
            "unit": "iter/sec",
            "range": "stddev: 0.0005224824945039394",
            "extra": "mean: 174.39652183333484 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 314305.13917249115,
            "unit": "iter/sec",
            "range": "stddev: 3.1594096048690836e-7",
            "extra": "mean: 3.181621537060514 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 295889.83098149154,
            "unit": "iter/sec",
            "range": "stddev: 2.901153249360284e-7",
            "extra": "mean: 3.379636254084554 usec\nrounds: 102041"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 332757.3107792933,
            "unit": "iter/sec",
            "range": "stddev: 2.193064453896069e-7",
            "extra": "mean: 3.005193177147853 usec\nrounds: 95239"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 336993.39590390265,
            "unit": "iter/sec",
            "range": "stddev: 2.045895858806702e-7",
            "extra": "mean: 2.9674172021019687 usec\nrounds: 101011"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 330314.38536370837,
            "unit": "iter/sec",
            "range": "stddev: 2.331603281290599e-7",
            "extra": "mean: 3.027418860062369 usec\nrounds: 113637"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 314466.7222879632,
            "unit": "iter/sec",
            "range": "stddev: 2.241956525076299e-7",
            "extra": "mean: 3.1799867175906797 usec\nrounds: 86957"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 84.83104888429001,
            "unit": "iter/sec",
            "range": "stddev: 0.00021758857453590705",
            "extra": "mean: 11.7881366923095 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.181892154806068,
            "unit": "iter/sec",
            "range": "stddev: 0.0020427030578623667",
            "extra": "mean: 65.86794253333133 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 28.103656853450087,
            "unit": "iter/sec",
            "range": "stddev: 0.0004094508576624492",
            "extra": "mean: 35.582558000000525 msec\nrounds: 28"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f321b36ac5981710681bf2ec9661b587ebdf756d",
          "message": "Merge pull request #437 from ClearcodeHQ/order\n\nRun benchmarks only after tests",
          "timestamp": "2023-01-16T10:09:22+01:00",
          "tree_id": "f9722ee8a25d0d75f3fa9f130017ffb46662ad73",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f321b36ac5981710681bf2ec9661b587ebdf756d"
        },
        "date": 1673860467098,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 5.522816813967998,
            "unit": "iter/sec",
            "range": "stddev: 0.001140411986899406",
            "extra": "mean: 181.06702316666676 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 5.22529183837526,
            "unit": "iter/sec",
            "range": "stddev: 0.0012075224103925673",
            "extra": "mean: 191.37687060000417 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.9579838392900927,
            "unit": "iter/sec",
            "range": "stddev: 0.001644784876385941",
            "extra": "mean: 1.0438589451999973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.9484985703182418,
            "unit": "iter/sec",
            "range": "stddev: 0.001444372954012162",
            "extra": "mean: 1.0542978463999986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 6.263663961093129,
            "unit": "iter/sec",
            "range": "stddev: 0.0013409915346323205",
            "extra": "mean: 159.65096566666404 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 317608.89131741883,
            "unit": "iter/sec",
            "range": "stddev: 2.0556418461900705e-7",
            "extra": "mean: 3.1485264655283167 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 301120.54730937735,
            "unit": "iter/sec",
            "range": "stddev: 2.0308921312140836e-7",
            "extra": "mean: 3.320929139294436 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 329218.6205196576,
            "unit": "iter/sec",
            "range": "stddev: 2.1871066301204563e-7",
            "extra": "mean: 3.037495262028443 usec\nrounds: 97088"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 333214.10377191927,
            "unit": "iter/sec",
            "range": "stddev: 1.877724706466656e-7",
            "extra": "mean: 3.0010734500136493 usec\nrounds: 100000"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 327749.4728718924,
            "unit": "iter/sec",
            "range": "stddev: 1.9896864290253993e-7",
            "extra": "mean: 3.051110933108565 usec\nrounds: 111112"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 313656.3502051562,
            "unit": "iter/sec",
            "range": "stddev: 2.1682864225451692e-7",
            "extra": "mean: 3.1882026279586575 usec\nrounds: 100001"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 93.61937604721821,
            "unit": "iter/sec",
            "range": "stddev: 0.00010325718974886867",
            "extra": "mean: 10.681549506329079 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 21.42019603247123,
            "unit": "iter/sec",
            "range": "stddev: 0.0006290046876040491",
            "extra": "mean: 46.68491355000128 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 36.080707455198294,
            "unit": "iter/sec",
            "range": "stddev: 0.00020472716125751332",
            "extra": "mean: 27.715642805554964 msec\nrounds: 36"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6b72a545782dfc9f883d35e8bf5413198a629a3",
          "message": "Bump pydocstyle from 6.2.3 to 6.3.0",
          "timestamp": "2023-01-18T04:09:33Z",
          "tree_id": "3b3f6febdf72fc4eaaf2820e32b1cbf670ff91c0",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/f6b72a545782dfc9f883d35e8bf5413198a629a3"
        },
        "date": 1674015222265,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 5.215448650406345,
            "unit": "iter/sec",
            "range": "stddev: 0.00041169614722009784",
            "extra": "mean: 191.73805880000145 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 5.018504002124066,
            "unit": "iter/sec",
            "range": "stddev: 0.0015868494981221722",
            "extra": "mean: 199.26256899999544 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.955022342625454,
            "unit": "iter/sec",
            "range": "stddev: 0.0005777179744496903",
            "extra": "mean: 1.0470959216000097 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.9535430583728587,
            "unit": "iter/sec",
            "range": "stddev: 0.00043534841015442557",
            "extra": "mean: 1.0487203395999927 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 5.8102686520257,
            "unit": "iter/sec",
            "range": "stddev: 0.002157392786312184",
            "extra": "mean: 172.10908133333191 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 312355.0590204764,
            "unit": "iter/sec",
            "range": "stddev: 1.9393982520025648e-7",
            "extra": "mean: 3.20148488433621 usec\nrounds: 81968"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 294701.18768034095,
            "unit": "iter/sec",
            "range": "stddev: 1.9419878840187137e-7",
            "extra": "mean: 3.3932676276984965 usec\nrounds: 94340"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 332887.4169402106,
            "unit": "iter/sec",
            "range": "stddev: 2.493074840285964e-7",
            "extra": "mean: 3.004018623448325 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 326101.18244659656,
            "unit": "iter/sec",
            "range": "stddev: 2.080573386743724e-7",
            "extra": "mean: 3.0665328855830305 usec\nrounds: 99010"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 324571.81609524245,
            "unit": "iter/sec",
            "range": "stddev: 1.928655231110324e-7",
            "extra": "mean: 3.0809822369375404 usec\nrounds: 109891"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 313154.97687552933,
            "unit": "iter/sec",
            "range": "stddev: 2.473266427758092e-7",
            "extra": "mean: 3.1933070646917203 usec\nrounds: 88496"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 92.28142055103272,
            "unit": "iter/sec",
            "range": "stddev: 0.000174550914000793",
            "extra": "mean: 10.836417493670766 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 20.937089851897984,
            "unit": "iter/sec",
            "range": "stddev: 0.0010522521398091081",
            "extra": "mean: 47.762129649997576 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 36.27995560005203,
            "unit": "iter/sec",
            "range": "stddev: 0.000227225873827551",
            "extra": "mean: 27.563429542856607 msec\nrounds: 35"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d20cb0908943f121295eabac957a91fb74cf43bd",
          "message": "Merge pull request #440 from ClearcodeHQ/dependabot/pip/black-23.1.0\n\nBump black from 22.12.0 to 23.1.0",
          "timestamp": "2023-02-01T09:58:31+01:00",
          "tree_id": "91dea9c2af28eb7217db916a6b7105b7ed37347b",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/d20cb0908943f121295eabac957a91fb74cf43bd"
        },
        "date": 1675242413808,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.247672229106409,
            "unit": "iter/sec",
            "range": "stddev: 0.000649265479868094",
            "extra": "mean: 235.42306140000164 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 4.033034898591466,
            "unit": "iter/sec",
            "range": "stddev: 0.0008823589416212252",
            "extra": "mean: 247.95223079999857 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7688842104054854,
            "unit": "iter/sec",
            "range": "stddev: 0.0034156458057057974",
            "extra": "mean: 1.3005859483999955 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7665302859814497,
            "unit": "iter/sec",
            "range": "stddev: 0.007816692118649129",
            "extra": "mean: 1.3045798950000005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.882291725394566,
            "unit": "iter/sec",
            "range": "stddev: 0.000565608332667239",
            "extra": "mean: 204.82184519999862 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 276175.7909891541,
            "unit": "iter/sec",
            "range": "stddev: 5.889530102376139e-7",
            "extra": "mean: 3.6208821794929587 usec\nrounds: 74622"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 260169.6241949806,
            "unit": "iter/sec",
            "range": "stddev: 3.587667733494202e-7",
            "extra": "mean: 3.843646248458904 usec\nrounds: 79994"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 284369.15075755306,
            "unit": "iter/sec",
            "range": "stddev: 2.607550376241982e-7",
            "extra": "mean: 3.5165558476931214 usec\nrounds: 80639"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 292802.39442053897,
            "unit": "iter/sec",
            "range": "stddev: 5.572618029788578e-7",
            "extra": "mean: 3.41527261749009 usec\nrounds: 81961"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 281608.97653224366,
            "unit": "iter/sec",
            "range": "stddev: 4.819782407471506e-7",
            "extra": "mean: 3.5510231680611994 usec\nrounds: 90901"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 269940.61038482154,
            "unit": "iter/sec",
            "range": "stddev: 5.955493892482899e-7",
            "extra": "mean: 3.7045185553015583 usec\nrounds: 72459"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 69.7168062113125,
            "unit": "iter/sec",
            "range": "stddev: 0.0004802697980291944",
            "extra": "mean: 14.343743701755178 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.21590728959208,
            "unit": "iter/sec",
            "range": "stddev: 0.0030942187581758022",
            "extra": "mean: 70.3437339333334 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 24.933738290364733,
            "unit": "iter/sec",
            "range": "stddev: 0.00044474049014890676",
            "extra": "mean: 40.10630048148195 msec\nrounds: 27"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc672b755740bbbb88b91789eb87e6315538ec20",
          "message": "Merge pull request #441 from ClearcodeHQ/publish-docs\n\nPublish documentation to the github-pages",
          "timestamp": "2023-02-03T21:14:46+01:00",
          "tree_id": "672a5ab7bde84d965fdf3f2519922d01e4e35c25",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/cc672b755740bbbb88b91789eb87e6315538ec20"
        },
        "date": 1675455658317,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.8415844233251915,
            "unit": "iter/sec",
            "range": "stddev: 0.007714415163282559",
            "extra": "mean: 260.3092604000153 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.638239962707195,
            "unit": "iter/sec",
            "range": "stddev: 0.007134845652153709",
            "extra": "mean: 274.8581759999979 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7325072275433274,
            "unit": "iter/sec",
            "range": "stddev: 0.011620463697992333",
            "extra": "mean: 1.3651742432000105 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.72839078371126,
            "unit": "iter/sec",
            "range": "stddev: 0.019524098623855877",
            "extra": "mean: 1.3728894192000212 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.282024400446234,
            "unit": "iter/sec",
            "range": "stddev: 0.007279772998216542",
            "extra": "mean: 233.53440020000562 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 257628.7183950342,
            "unit": "iter/sec",
            "range": "stddev: 0.000015197438808445247",
            "extra": "mean: 3.8815548446219927 usec\nrounds: 80646"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 225427.01145761902,
            "unit": "iter/sec",
            "range": "stddev: 0.000014928647459982006",
            "extra": "mean: 4.4360256276919285 usec\nrounds: 82645"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 276811.2983398235,
            "unit": "iter/sec",
            "range": "stddev: 0.000008851072940583095",
            "extra": "mean: 3.6125693062295605 usec\nrounds: 75188"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 282352.0706102494,
            "unit": "iter/sec",
            "range": "stddev: 0.000005748751981965185",
            "extra": "mean: 3.5416775865630923 usec\nrounds: 85471"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 272255.68731331313,
            "unit": "iter/sec",
            "range": "stddev: 0.000004618554556004905",
            "extra": "mean: 3.673017852696665 usec\nrounds: 89286"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 262966.9901892858,
            "unit": "iter/sec",
            "range": "stddev: 0.000012288503343677671",
            "extra": "mean: 3.8027586629036283 usec\nrounds: 77514"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 76.82392963047732,
            "unit": "iter/sec",
            "range": "stddev: 0.0018128920078238236",
            "extra": "mean: 13.016777517239673 msec\nrounds: 58"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.988961154723357,
            "unit": "iter/sec",
            "range": "stddev: 0.004836375487112464",
            "extra": "mean: 66.71576433333257 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 22.785618181903818,
            "unit": "iter/sec",
            "range": "stddev: 0.002562181894203277",
            "extra": "mean: 43.88733243999468 msec\nrounds: 25"
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
          "id": "7ab370de05b97bfc5fd3bc101feef2b7f70f5312",
          "message": "Branch is main",
          "timestamp": "2023-02-03T21:23:43+01:00",
          "tree_id": "0da3786310aa184a9fc92b2e0ca0d08ed04aa78c",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/7ab370de05b97bfc5fd3bc101feef2b7f70f5312"
        },
        "date": 1675456331544,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.11929696907714,
            "unit": "iter/sec",
            "range": "stddev: 0.0037978072324468862",
            "extra": "mean: 242.7598708000005 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.7707387691125698,
            "unit": "iter/sec",
            "range": "stddev: 0.003806821660027911",
            "extra": "mean: 265.2000207999947 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7165081904455356,
            "unit": "iter/sec",
            "range": "stddev: 0.011409070867751636",
            "extra": "mean: 1.395657458400001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7167146869807229,
            "unit": "iter/sec",
            "range": "stddev: 0.015782201212763382",
            "extra": "mean: 1.3952553480000005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.61507205146469,
            "unit": "iter/sec",
            "range": "stddev: 0.0024056204136087608",
            "extra": "mean: 216.68134080000527 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 254708.35858392614,
            "unit": "iter/sec",
            "range": "stddev: 0.000025150406564469897",
            "extra": "mean: 3.926058828848764 usec\nrounds: 67110"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 239415.26754584615,
            "unit": "iter/sec",
            "range": "stddev: 0.00002900310704750666",
            "extra": "mean: 4.176843065401031 usec\nrounds: 81295"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 283157.57800568774,
            "unit": "iter/sec",
            "range": "stddev: 0.000006964553017690317",
            "extra": "mean: 3.5316024633460916 usec\nrounds: 75183"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 279695.0093972153,
            "unit": "iter/sec",
            "range": "stddev: 0.00001087706576177759",
            "extra": "mean: 3.575322999702962 usec\nrounds: 77514"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 270966.9622311473,
            "unit": "iter/sec",
            "range": "stddev: 0.000008107936752524983",
            "extra": "mean: 3.6904868097792454 usec\nrounds: 86200"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 261813.4343445375,
            "unit": "iter/sec",
            "range": "stddev: 0.000009512763816987844",
            "extra": "mean: 3.819513702585767 usec\nrounds: 75752"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 61.06205531807517,
            "unit": "iter/sec",
            "range": "stddev: 0.0016198544886050306",
            "extra": "mean: 16.376782517243356 msec\nrounds: 58"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 12.801023149149447,
            "unit": "iter/sec",
            "range": "stddev: 0.001546725987075442",
            "extra": "mean: 78.11875569230918 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 22.750715982808423,
            "unit": "iter/sec",
            "range": "stddev: 0.002168343876249577",
            "extra": "mean: 43.95466062499528 msec\nrounds: 24"
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
          "id": "0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc",
          "message": "Release 1.2.0",
          "timestamp": "2023-02-03T21:32:46+01:00",
          "tree_id": "10f78c8f4e7a2858db3db56f43ad1e29bc1f49f5",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/0dcf05c1f422ac93e64b5b7885f41aa5ae6789cc"
        },
        "date": 1675456677600,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 5.214345479102451,
            "unit": "iter/sec",
            "range": "stddev: 0.0003886672836988488",
            "extra": "mean: 191.77862379999624 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 4.979415514533958,
            "unit": "iter/sec",
            "range": "stddev: 0.0006822724882863236",
            "extra": "mean: 200.82678319999445 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.9636533388910311,
            "unit": "iter/sec",
            "range": "stddev: 0.0009375542830345683",
            "extra": "mean: 1.0377175687999967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.9483117610646908,
            "unit": "iter/sec",
            "range": "stddev: 0.003995302189372112",
            "extra": "mean: 1.0545055339999976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 5.745700396870699,
            "unit": "iter/sec",
            "range": "stddev: 0.0004789277588079192",
            "extra": "mean: 174.0431855000016 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 314399.9523546246,
            "unit": "iter/sec",
            "range": "stddev: 2.1229206658742561e-7",
            "extra": "mean: 3.1806620596178057 usec\nrounds: 91744"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 296787.98377711565,
            "unit": "iter/sec",
            "range": "stddev: 2.1649099997042688e-7",
            "extra": "mean: 3.3694086508266063 usec\nrounds: 107527"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 319081.6215414984,
            "unit": "iter/sec",
            "range": "stddev: 2.760849770819493e-7",
            "extra": "mean: 3.133994352820926 usec\nrounds: 96154"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 328505.0504198792,
            "unit": "iter/sec",
            "range": "stddev: 2.0080247274609655e-7",
            "extra": "mean: 3.0440932299879364 usec\nrounds: 100000"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 314034.3717482636,
            "unit": "iter/sec",
            "range": "stddev: 2.636338940944332e-7",
            "extra": "mean: 3.1843648019574764 usec\nrounds: 113637"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 306372.22693352756,
            "unit": "iter/sec",
            "range": "stddev: 2.1550386647963679e-7",
            "extra": "mean: 3.2640034314107926 usec\nrounds: 87720"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 90.43214169950006,
            "unit": "iter/sec",
            "range": "stddev: 0.00021972660748493595",
            "extra": "mean: 11.058015227848223 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 19.515923482054223,
            "unit": "iter/sec",
            "range": "stddev: 0.003066613752221152",
            "extra": "mean: 51.240209099997 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 31.994709060171477,
            "unit": "iter/sec",
            "range": "stddev: 0.001207800634552041",
            "extra": "mean: 31.255167787877998 msec\nrounds: 33"
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
          "id": "81c93969ee43f0c73ea1735bcdf3a64172c6029f",
          "message": "Publish documentation on tag only",
          "timestamp": "2023-02-03T21:31:04+01:00",
          "tree_id": "96fc4bcb7bd43110c801b601a750d1be8ab48eba",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/81c93969ee43f0c73ea1735bcdf3a64172c6029f"
        },
        "date": 1675456690141,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 4.303183762230733,
            "unit": "iter/sec",
            "range": "stddev: 0.0015223584325709091",
            "extra": "mean: 232.38607860000116 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 4.019316184059047,
            "unit": "iter/sec",
            "range": "stddev: 0.003641327184207826",
            "extra": "mean: 248.79854040000282 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.7871155036851615,
            "unit": "iter/sec",
            "range": "stddev: 0.007182353178531393",
            "extra": "mean: 1.2704615718000014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7828519765431774,
            "unit": "iter/sec",
            "range": "stddev: 0.003307772272331238",
            "extra": "mean: 1.2773806925999964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.913921853030315,
            "unit": "iter/sec",
            "range": "stddev: 0.0021541517306534466",
            "extra": "mean: 203.50343979998797 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 285304.95439420897,
            "unit": "iter/sec",
            "range": "stddev: 9.076995119742504e-7",
            "extra": "mean: 3.5050215027752 usec\nrounds: 78734"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 262472.34080680256,
            "unit": "iter/sec",
            "range": "stddev: 8.896566730227066e-7",
            "extra": "mean: 3.809925255080755 usec\nrounds: 78119"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 290172.6525981089,
            "unit": "iter/sec",
            "range": "stddev: 7.157935154083894e-7",
            "extra": "mean: 3.4462241394781152 usec\nrounds: 75752"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 302262.47070175613,
            "unit": "iter/sec",
            "range": "stddev: 7.462491910818424e-7",
            "extra": "mean: 3.30838293513026 usec\nrounds: 82638"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 288911.215309894,
            "unit": "iter/sec",
            "range": "stddev: 8.181739312516671e-7",
            "extra": "mean: 3.4612709614868113 usec\nrounds: 84739"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 277610.4169237845,
            "unit": "iter/sec",
            "range": "stddev: 8.177681317314405e-7",
            "extra": "mean: 3.602170304274069 usec\nrounds: 78119"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 71.91232929879706,
            "unit": "iter/sec",
            "range": "stddev: 0.000741352536022891",
            "extra": "mean: 13.905821293105129 msec\nrounds: 58"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 14.053805901825488,
            "unit": "iter/sec",
            "range": "stddev: 0.008008593737910298",
            "extra": "mean: 71.15510253845952 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 25.504817386123204,
            "unit": "iter/sec",
            "range": "stddev: 0.001544176519588135",
            "extra": "mean: 39.20827916000235 msec\nrounds: 25"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "119339316+merger-application[bot]@users.noreply.github.com",
            "name": "merger-application[bot]",
            "username": "merger-application[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3ad0af6782add57837c6e45a9be88ac488b647e",
          "message": "Bump mypy from 0.991 to 1.0.0",
          "timestamp": "2023-02-07T04:12:30Z",
          "tree_id": "16ec4634a8db7fdf2d185c96629ab6c03df5aa70",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/e3ad0af6782add57837c6e45a9be88ac488b647e"
        },
        "date": 1675743472503,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.7546756647519604,
            "unit": "iter/sec",
            "range": "stddev: 0.0029340147904248276",
            "extra": "mean: 266.33458899999596 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 3.5651414394070935,
            "unit": "iter/sec",
            "range": "stddev: 0.004109508327434085",
            "extra": "mean: 280.4937804000019 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.719205007596737,
            "unit": "iter/sec",
            "range": "stddev: 0.009634022356391936",
            "extra": "mean: 1.3904241342000034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.7124380591033974,
            "unit": "iter/sec",
            "range": "stddev: 0.009702976259214518",
            "extra": "mean: 1.4036307960000045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 4.171503382312216,
            "unit": "iter/sec",
            "range": "stddev: 0.003421259726944757",
            "extra": "mean: 239.72172819999287 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 250003.91776791037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031732830498711696",
            "extra": "mean: 3.9999373166957484 usec\nrounds: 70928"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 238208.40208886514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033948872499530867",
            "extra": "mean: 4.198004735479246 usec\nrounds: 81301"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 266856.1473886174,
            "unit": "iter/sec",
            "range": "stddev: 0.000006256969313680703",
            "extra": "mean: 3.747337319322532 usec\nrounds: 77520"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 269582.3166840081,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033565785086443665",
            "extra": "mean: 3.7094421188321247 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 256900.21687483307,
            "unit": "iter/sec",
            "range": "stddev: 0.00001170943813369724",
            "extra": "mean: 3.8925619143685664 usec\nrounds: 84746"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 253476.74135202926,
            "unit": "iter/sec",
            "range": "stddev: 0.000002847853931896318",
            "extra": "mean: 3.9451351420491756 usec\nrounds: 30960"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 60.31535940288041,
            "unit": "iter/sec",
            "range": "stddev: 0.0011213419031171718",
            "extra": "mean: 16.57952484905933 msec\nrounds: 53"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 11.86467357393924,
            "unit": "iter/sec",
            "range": "stddev: 0.0036047722613205455",
            "extra": "mean: 84.28381900000186 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 21.738353607113144,
            "unit": "iter/sec",
            "range": "stddev: 0.0015876350283981233",
            "extra": "mean: 46.00164382608919 msec\nrounds: 23"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b164e9856426be4e970b671d950a456b00ddb431",
          "message": "Merge pull request #443 from ClearcodeHQ/cleanup\n\nChangelog reformatting after towncrier",
          "timestamp": "2023-02-17T12:09:38+01:00",
          "tree_id": "db604e4bfe7862d854cde53526e6ce7320e29268",
          "url": "https://github.com/ClearcodeHQ/matchbox/commit/b164e9856426be4e970b671d950a456b00ddb431"
        },
        "date": 1676632514235,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 5.279026994407966,
            "unit": "iter/sec",
            "range": "stddev: 0.0006546780439658502",
            "extra": "mean: 189.4288476000014 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 5.11701726067355,
            "unit": "iter/sec",
            "range": "stddev: 0.0006145726749330931",
            "extra": "mean: 195.4263487999981 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.9579405917883951,
            "unit": "iter/sec",
            "range": "stddev: 0.0025682278275211126",
            "extra": "mean: 1.0439060715999973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.9511117215067144,
            "unit": "iter/sec",
            "range": "stddev: 0.0014631717597331953",
            "extra": "mean: 1.0514011944000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 5.813175486086603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005770885027777404",
            "extra": "mean: 172.0230195000004 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 315687.1793321946,
            "unit": "iter/sec",
            "range": "stddev: 2.1185762084715517e-7",
            "extra": "mean: 3.167692784088991 usec\nrounds: 90910"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 295315.4566346689,
            "unit": "iter/sec",
            "range": "stddev: 2.2337970024163725e-7",
            "extra": "mean: 3.386209483904825 usec\nrounds: 99010"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 334546.085861566,
            "unit": "iter/sec",
            "range": "stddev: 2.185267151578607e-7",
            "extra": "mean: 2.9891247940464516 usec\nrounds: 97088"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 340981.99095495243,
            "unit": "iter/sec",
            "range": "stddev: 2.5146351713990576e-7",
            "extra": "mean: 2.932706203044346 usec\nrounds: 106383"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 326749.9421949653,
            "unit": "iter/sec",
            "range": "stddev: 4.49375870342281e-7",
            "extra": "mean: 3.060444305766149 usec\nrounds: 104167"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 317022.3363784044,
            "unit": "iter/sec",
            "range": "stddev: 2.443885650201154e-7",
            "extra": "mean: 3.1543518713027825 usec\nrounds: 41842"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 91.90187870759294,
            "unit": "iter/sec",
            "range": "stddev: 0.0001820997761519911",
            "extra": "mean: 10.881170375001048 msec\nrounds: 80"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 21.041172566913907,
            "unit": "iter/sec",
            "range": "stddev: 0.0008630295503385635",
            "extra": "mean: 47.52586847619154 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 34.88305299509908,
            "unit": "iter/sec",
            "range": "stddev: 0.0009590469333434262",
            "extra": "mean: 28.6672155714265 msec\nrounds: 35"
          }
        ]
      }
    ]
  }
}