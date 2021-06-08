window.BENCHMARK_DATA = {
  "lastUpdate": 1623142686063,
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
        "date": 1623142594743,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.0868627731530385,
            "unit": "iter/sec",
            "range": "stddev: 0.006992105372510664",
            "extra": "mean: 323.95350019999825 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.9287157978594633,
            "unit": "iter/sec",
            "range": "stddev: 0.005642800951238274",
            "extra": "mean: 341.446582399999 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5724618844301099,
            "unit": "iter/sec",
            "range": "stddev: 0.03580177955150932",
            "extra": "mean: 1.7468411910000043 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5697866592141314,
            "unit": "iter/sec",
            "range": "stddev: 0.013016684822388226",
            "extra": "mean: 1.7550428459999978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.323787793701666,
            "unit": "iter/sec",
            "range": "stddev: 0.004277579767907105",
            "extra": "mean: 300.8615657999968 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 167099.21129779398,
            "unit": "iter/sec",
            "range": "stddev: 0.000011630864090907671",
            "extra": "mean: 5.984468701158986 usec\nrounds: 46727"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 157157.19662597033,
            "unit": "iter/sec",
            "range": "stddev: 0.00001065110610023318",
            "extra": "mean: 6.363055726808181 usec\nrounds: 60976"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 182987.3060207128,
            "unit": "iter/sec",
            "range": "stddev: 0.000009330479282188507",
            "extra": "mean: 5.464859949830659 usec\nrounds: 68961"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 174392.86682727208,
            "unit": "iter/sec",
            "range": "stddev: 0.000044998096417580115",
            "extra": "mean: 5.734179489063924 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 178124.6368112941,
            "unit": "iter/sec",
            "range": "stddev: 0.000009253255150830703",
            "extra": "mean: 5.614046534502713 usec\nrounds: 64103"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 168174.31051418226,
            "unit": "iter/sec",
            "range": "stddev: 0.000012654409540827267",
            "extra": "mean: 5.946211385927871 usec\nrounds: 59881"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 72.17527934034129,
            "unit": "iter/sec",
            "range": "stddev: 0.0008504027213191828",
            "extra": "mean: 13.855159400000616 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 12.413560113766765,
            "unit": "iter/sec",
            "range": "stddev: 0.004399919734168143",
            "extra": "mean: 80.55706749999862 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 24.378323001588655,
            "unit": "iter/sec",
            "range": "stddev: 0.0020208973147348348",
            "extra": "mean: 41.0200488333358 msec\nrounds: 24"
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
        "date": 1623142685077,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 8.178477244125055,
            "unit": "iter/sec",
            "range": "stddev: 0.01361058807910694",
            "extra": "mean: 122.27215044442927 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.594005533813319,
            "unit": "iter/sec",
            "range": "stddev: 0.015197870738748778",
            "extra": "mean: 151.65289062499454 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.5838928169489865,
            "unit": "iter/sec",
            "range": "stddev: 0.07827099319253844",
            "extra": "mean: 1.7126430930000083 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.5745609282234018,
            "unit": "iter/sec",
            "range": "stddev: 0.023589180021422487",
            "extra": "mean: 1.740459455000007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 10.954766200695548,
            "unit": "iter/sec",
            "range": "stddev: 0.008983656117648812",
            "extra": "mean: 91.2844675714309 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 405216.9733889532,
            "unit": "iter/sec",
            "range": "stddev: 0.000006290567832468341",
            "extra": "mean: 2.4678137039440733 usec\nrounds: 66667"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 190313.8142299752,
            "unit": "iter/sec",
            "range": "stddev: 0.00003318964577077754",
            "extra": "mean: 5.254479313790642 usec\nrounds: 185220"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 267132.4688259061,
            "unit": "iter/sec",
            "range": "stddev: 0.000020666806251765053",
            "extra": "mean: 3.7434610790491054 usec\nrounds: 163935"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 274016.9054941268,
            "unit": "iter/sec",
            "range": "stddev: 0.000020494217996761082",
            "extra": "mean: 3.6494098719812786 usec\nrounds: 172414"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 197077.61226503894,
            "unit": "iter/sec",
            "range": "stddev: 0.00003293037281351425",
            "extra": "mean: 5.07414306732697 usec\nrounds: 196079"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 189224.63913053498,
            "unit": "iter/sec",
            "range": "stddev: 0.00003456766398168087",
            "extra": "mean: 5.284724043311075 usec\nrounds: 188680"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 59.37975369038878,
            "unit": "iter/sec",
            "range": "stddev: 0.0012509180038631237",
            "extra": "mean: 16.840756955882423 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 28.595372121514263,
            "unit": "iter/sec",
            "range": "stddev: 0.010984608370283396",
            "extra": "mean: 34.97069371052637 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 171.02533957013202,
            "unit": "iter/sec",
            "range": "stddev: 0.000811627886155771",
            "extra": "mean: 5.84708676803961 msec\nrounds: 194"
          }
        ]
      }
    ]
  }
}