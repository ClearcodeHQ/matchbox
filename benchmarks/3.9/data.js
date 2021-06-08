window.BENCHMARK_DATA = {
  "lastUpdate": 1623149905727,
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
    ],
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
          "id": "4c356d05af4a2f405d06d3b3c6ffc3e846df9339",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/4c356d05af4a2f405d06d3b3c6ffc3e846df9339"
        },
        "date": 1623145721189,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.1087645084422793,
            "unit": "iter/sec",
            "range": "stddev: 0.00046771825419691937",
            "extra": "mean: 321.6711968000027 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.9774106048782083,
            "unit": "iter/sec",
            "range": "stddev: 0.0005996410047239615",
            "extra": "mean: 335.86230880000016 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6128374814870869,
            "unit": "iter/sec",
            "range": "stddev: 0.0012083342834609565",
            "extra": "mean: 1.6317539807999992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6088753192407754,
            "unit": "iter/sec",
            "range": "stddev: 0.00060989828500177",
            "extra": "mean: 1.6423723681999944 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.461938996429298,
            "unit": "iter/sec",
            "range": "stddev: 0.0015833881799390101",
            "extra": "mean: 288.8554654000018 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements0]",
            "value": 169765.42968759921,
            "unit": "iter/sec",
            "range": "stddev: 2.865390109116634e-7",
            "extra": "mean: 5.890480775975361 usec\nrounds: 53761"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements1]",
            "value": 158665.7059389288,
            "unit": "iter/sec",
            "range": "stddev: 3.6005603131109674e-7",
            "extra": "mean: 6.302559170441689 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements2]",
            "value": 179600.1412665897,
            "unit": "iter/sec",
            "range": "stddev: 2.585373159419941e-7",
            "extra": "mean: 5.567924350992847 usec\nrounds: 56815"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements3]",
            "value": 181016.13065867007,
            "unit": "iter/sec",
            "range": "stddev: 3.1782669477214915e-7",
            "extra": "mean: 5.524369548510749 usec\nrounds: 57140"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements4]",
            "value": 172657.2538787259,
            "unit": "iter/sec",
            "range": "stddev: 2.996487608955402e-7",
            "extra": "mean: 5.791821528114874 usec\nrounds: 59169"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[elements5]",
            "value": 165483.18318054706,
            "unit": "iter/sec",
            "range": "stddev: 3.1780232421302313e-7",
            "extra": "mean: 6.042910105910704 usec\nrounds: 53474"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 88.20409214240632,
            "unit": "iter/sec",
            "range": "stddev: 0.00013778300739109115",
            "extra": "mean: 11.337342471429679 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.59288411622935,
            "unit": "iter/sec",
            "range": "stddev: 0.0028990297892854708",
            "extra": "mean: 64.1318176000027 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 27.13392947093389,
            "unit": "iter/sec",
            "range": "stddev: 0.0008327745155798735",
            "extra": "mean: 36.85422714285482 msec\nrounds: 28"
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
          "id": "fe0ddf3fa29bfefff1690de24258c6129f428e5f",
          "message": "Add benchmark flow on Github Actions - closes #260",
          "timestamp": "2021-06-07T22:38:32Z",
          "url": "https://github.com/ClearcodeHQ/matchbox/pull/262/commits/fe0ddf3fa29bfefff1690de24258c6129f428e5f"
        },
        "date": 1623149902914,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 3.0691863569471622,
            "unit": "iter/sec",
            "range": "stddev: 0.02266433625886729",
            "extra": "mean: 325.81925100001854 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 2.984506756301771,
            "unit": "iter/sec",
            "range": "stddev: 0.009313212370269537",
            "extra": "mean: 335.0637413999834 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 0.6055721619045927,
            "unit": "iter/sec",
            "range": "stddev: 0.05763282316648829",
            "extra": "mean: 1.6513308617999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 0.6053142036082587,
            "unit": "iter/sec",
            "range": "stddev: 0.012019401745462666",
            "extra": "mean: 1.652034586399975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 3.359313683077227,
            "unit": "iter/sec",
            "range": "stddev: 0.02273482486351125",
            "extra": "mean: 297.67985199999885 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 168299.6276785536,
            "unit": "iter/sec",
            "range": "stddev: 0.000013410371334980306",
            "extra": "mean: 5.941783792356124 usec\nrounds: 70423"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 161730.16283829763,
            "unit": "iter/sec",
            "range": "stddev: 0.000010443609414387406",
            "extra": "mean: 6.183138521908421 usec\nrounds: 74075"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 189022.76828145597,
            "unit": "iter/sec",
            "range": "stddev: 0.00000765453511138549",
            "extra": "mean: 5.290367975729751 usec\nrounds: 34130"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 182306.96282461885,
            "unit": "iter/sec",
            "range": "stddev: 0.000014316391507502309",
            "extra": "mean: 5.485254016117914 usec\nrounds: 84034"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 181363.83205173406,
            "unit": "iter/sec",
            "range": "stddev: 0.000021149936928557606",
            "extra": "mean: 5.513778511885158 usec\nrounds: 74627"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 173215.75550149794,
            "unit": "iter/sec",
            "range": "stddev: 0.000014771754129898913",
            "extra": "mean: 5.773146889004287 usec\nrounds: 79366"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 99.75748264314664,
            "unit": "iter/sec",
            "range": "stddev: 0.0010748496572940366",
            "extra": "mean: 10.024310693336247 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 15.252868818192658,
            "unit": "iter/sec",
            "range": "stddev: 0.005183097162262186",
            "extra": "mean: 65.56143712501239 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 29.48131660112589,
            "unit": "iter/sec",
            "range": "stddev: 0.0035561265147460684",
            "extra": "mean: 33.9197876923112 msec\nrounds: 26"
          }
        ]
      }
    ]
  }
}