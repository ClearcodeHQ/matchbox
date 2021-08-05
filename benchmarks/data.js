window.BENCHMARK_DATA = {
  "lastUpdate": 1628176978072,
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
      }
    ]
  }
}