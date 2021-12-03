window.BENCHMARK_DATA = {
  "lastUpdate": 1638535055527,
  "repoUrl": "https://github.com/JiangDonglai98/RocksDict",
  "entries": {
    "pytest-bench": [
      {
        "commit": {
          "author": {
            "email": "51168630+JiangDonglai98@users.noreply.github.com",
            "name": "JiangDonglai98",
            "username": "JiangDonglai98"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2419e3b2f3358db26f2e4dee986c48b0bdca8f0",
          "message": "Update benchmark.py",
          "timestamp": "2021-12-02T23:59:53+08:00",
          "tree_id": "b99177a74557e6c8973910817c60347f2768edcf",
          "url": "https://github.com/JiangDonglai98/RocksDict/commit/d2419e3b2f3358db26f2e4dee986c48b0bdca8f0"
        },
        "date": 1638463277628,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark.py::test_insert_key4_data4_Rdict",
            "value": 186091.79984077846,
            "unit": "iter/sec",
            "range": "stddev: 0.000002156642030893502",
            "extra": "mean: 5.373691913644812 usec\nrounds: 2733"
          },
          {
            "name": "test/benchmark.py::test_insert_key4_data4_Mdict",
            "value": 854063.9748313589,
            "unit": "iter/sec",
            "range": "stddev: 0.000013289538257213483",
            "extra": "mean: 1.1708724749776003 usec\nrounds: 32574"
          },
          {
            "name": "test/benchmark.py::test_insert_key8_data128_Rdict",
            "value": 160109.2601035415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020347688535311676",
            "extra": "mean: 6.245734939711214 usec\nrounds: 4150"
          },
          {
            "name": "test/benchmark.py::test_insert_key8_data128_Mdict",
            "value": 719555.6534843285,
            "unit": "iter/sec",
            "range": "stddev: 0.000006884113687850346",
            "extra": "mean: 1.3897465681183467 usec\nrounds: 28410"
          },
          {
            "name": "test/benchmark.py::test_insert_key16_data1024_Rdict",
            "value": 107702.65786225813,
            "unit": "iter/sec",
            "range": "stddev: 0.000008281625070409452",
            "extra": "mean: 9.284821933353852 usec\nrounds: 3538"
          },
          {
            "name": "test/benchmark.py::test_insert_key16_data1024_Mdict",
            "value": 377754.1989852426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000286961762869382",
            "extra": "mean: 2.6472240485646226 usec\nrounds: 38023"
          },
          {
            "name": "test/benchmark.py::test_insert_key128_data16_Rdict",
            "value": 162142.15612902102,
            "unit": "iter/sec",
            "range": "stddev: 0.000001641949692819191",
            "extra": "mean: 6.167427545519207 usec\nrounds: 3899"
          },
          {
            "name": "test/benchmark.py::test_insert_key128_data16_Mdict",
            "value": 646387.7036530619,
            "unit": "iter/sec",
            "range": "stddev: 0.00002181969903770029",
            "extra": "mean: 1.5470591323883442 usec\nrounds: 57143"
          },
          {
            "name": "test/benchmark.py::test_insert_key128_data16_Pdict",
            "value": 1055467.3541650344,
            "unit": "iter/sec",
            "range": "stddev: 0.000009115453262289824",
            "extra": "mean: 947.4475890266507 nsec\nrounds: 86957"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key4_data4_Rdict",
            "value": 60465.050493732924,
            "unit": "iter/sec",
            "range": "stddev: 0.000004519419532746949",
            "extra": "mean: 16.53847953213316 usec\nrounds: 2565"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key4_data4_Mdict",
            "value": 417714.28823260457,
            "unit": "iter/sec",
            "range": "stddev: 8.74418414904508e-7",
            "extra": "mean: 2.393980833720366 usec\nrounds: 75758"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key8_data128_Rdict",
            "value": 65030.181287690284,
            "unit": "iter/sec",
            "range": "stddev: 0.000016783180447103225",
            "extra": "mean: 15.37747519995446 usec\nrounds: 31250"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key8_data128_Mdict",
            "value": 228434.66802330333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021376306384686308",
            "extra": "mean: 4.377619249535219 usec\nrounds: 47170"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key16_data1024_Rdict",
            "value": 53648.70925189408,
            "unit": "iter/sec",
            "range": "stddev: 0.00001488059522290185",
            "extra": "mean: 18.63977743257066 usec\nrounds: 15456"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key16_data1024_Mdict",
            "value": 188112.86773763748,
            "unit": "iter/sec",
            "range": "stddev: 0.000027336425331948",
            "extra": "mean: 5.315957446327957 usec\nrounds: 470"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key128_data16_Rdict",
            "value": 56967.86403664463,
            "unit": "iter/sec",
            "range": "stddev: 0.000006006551502273795",
            "extra": "mean: 17.553756260841183 usec\nrounds: 26955"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key128_data16_Mdict",
            "value": 336542.68816485576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010738574856752467",
            "extra": "mean: 2.971391253373923 usec\nrounds: 57804"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key128_data16_Pdict",
            "value": 469578.66613033385,
            "unit": "iter/sec",
            "range": "stddev: 8.409421748694488e-7",
            "extra": "mean: 2.1295686370096827 usec\nrounds: 82645"
          },
          {
            "name": "test/benchmark.py::test_mixture_key4_data4_Rdict",
            "value": 98156.50009626415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018263678882719645",
            "extra": "mean: 10.187812310130036 usec\nrounds: 1641"
          },
          {
            "name": "test/benchmark.py::test_mixture_key4_data4_Mdict",
            "value": 431155.1576295864,
            "unit": "iter/sec",
            "range": "stddev: 6.220340764976848e-7",
            "extra": "mean: 2.3193506613670594 usec\nrounds: 54055"
          },
          {
            "name": "test/benchmark.py::test_mixture_key8_data128_Rdict",
            "value": 101868.9773346206,
            "unit": "iter/sec",
            "range": "stddev: 0.000010501578467805993",
            "extra": "mean: 9.816531255783458 usec\nrounds: 26955"
          },
          {
            "name": "test/benchmark.py::test_mixture_key8_data128_Mdict",
            "value": 425824.62737820554,
            "unit": "iter/sec",
            "range": "stddev: 5.548887168390335e-7",
            "extra": "mean: 2.348384606491601 usec\nrounds: 51814"
          },
          {
            "name": "test/benchmark.py::test_mixture_key16_data1024_Rdict",
            "value": 89434.05292182995,
            "unit": "iter/sec",
            "range": "stddev: 0.00003668887384104401",
            "extra": "mean: 11.181423264738461 usec\nrounds: 22076"
          },
          {
            "name": "test/benchmark.py::test_mixture_key16_data1024_Mdict",
            "value": 3834.0490224306554,
            "unit": "iter/sec",
            "range": "stddev: 0.0005409574029688776",
            "extra": "mean: 260.8208695688597 usec\nrounds: 345"
          },
          {
            "name": "test/benchmark.py::test_mixture_key128_data16_Rdict",
            "value": 93360.57074149906,
            "unit": "iter/sec",
            "range": "stddev: 0.000003660390356039957",
            "extra": "mean: 10.711159883210707 usec\nrounds: 1595"
          },
          {
            "name": "test/benchmark.py::test_mixture_key128_data16_Mdict",
            "value": 383964.44510423695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011169800940932476",
            "extra": "mean: 2.604407811063143 usec\nrounds: 47620"
          },
          {
            "name": "test/benchmark.py::test_mixture_key128_data16_Pdict",
            "value": 462665.57882426586,
            "unit": "iter/sec",
            "range": "stddev: 7.846334027568659e-7",
            "extra": "mean: 2.1613883672548497 usec\nrounds: 44844"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key4_data4_Rdict",
            "value": 123342.60142264992,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018580943525649848",
            "extra": "mean: 8.107498856565918 usec\nrounds: 2187"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key4_data4_Mdict",
            "value": 690498.336740552,
            "unit": "iter/sec",
            "range": "stddev: 0.000006333943879878253",
            "extra": "mean: 1.4482294117034784 usec\nrounds: 128206"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key8_data128_Rdict",
            "value": 100053.94557565333,
            "unit": "iter/sec",
            "range": "stddev: 0.000003185103446074699",
            "extra": "mean: 9.994608350990763 usec\nrounds: 51283"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key8_data128_Mdict",
            "value": 608885.3687341448,
            "unit": "iter/sec",
            "range": "stddev: 0.000002794128611976354",
            "extra": "mean: 1.6423452612746654 usec\nrounds: 125001"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key16_data1024_Rdict",
            "value": 43974.08891532067,
            "unit": "iter/sec",
            "range": "stddev: 0.001197704249816663",
            "extra": "mean: 22.740664438225526 usec\nrounds: 43104"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key16_data1024_Mdict",
            "value": 216913.15910554686,
            "unit": "iter/sec",
            "range": "stddev: 0.000028554377464718476",
            "extra": "mean: 4.610139855615741 usec\nrounds: 1430"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key128_data16_Rdict",
            "value": 92933.5038658377,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034939342039799174",
            "extra": "mean: 10.76038197638214 usec\nrounds: 37594"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key128_data16_Mdict",
            "value": 576891.8446164159,
            "unit": "iter/sec",
            "range": "stddev: 0.000005034810708607114",
            "extra": "mean: 1.7334271741437342 usec\nrounds: 98040"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key128_data16_Pdict",
            "value": 808980.9238894588,
            "unit": "iter/sec",
            "range": "stddev: 6.80728431477485e-7",
            "extra": "mean: 1.2361230907549094 usec\nrounds: 138889"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51168630+JiangDonglai98@users.noreply.github.com",
            "name": "JiangDonglai98",
            "username": "JiangDonglai98"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88f36dfe6202d32572753a61b67fcb1b899118f6",
          "message": "Update bench.yml",
          "timestamp": "2021-12-03T19:52:18+08:00",
          "tree_id": "68a8134925c726f061b219de8ef22c4d540cbe9b",
          "url": "https://github.com/JiangDonglai98/RocksDict/commit/88f36dfe6202d32572753a61b67fcb1b899118f6"
        },
        "date": 1638535051591,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/benchmark.py::test_insert_key4_data4_Rdict",
            "value": 177089.390495236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017763961378037573",
            "extra": "mean: 5.646865671644523 usec\nrounds: 3015"
          },
          {
            "name": "test/benchmark.py::test_insert_key4_data4_Mdict",
            "value": 849675.5489231033,
            "unit": "iter/sec",
            "range": "stddev: 0.000020023147211463368",
            "extra": "mean: 1.1769198269473815 usec\nrounds: 59172"
          },
          {
            "name": "test/benchmark.py::test_insert_key8_data128_Rdict",
            "value": 169624.69495880124,
            "unit": "iter/sec",
            "range": "stddev: 0.000001241475897414375",
            "extra": "mean: 5.895368007841558 usec\nrounds: 5095"
          },
          {
            "name": "test/benchmark.py::test_insert_key8_data128_Mdict",
            "value": 775919.7156232526,
            "unit": "iter/sec",
            "range": "stddev: 0.000011897508862412666",
            "extra": "mean: 1.288793131383131 usec\nrounds: 30865"
          },
          {
            "name": "test/benchmark.py::test_insert_key16_data1024_Rdict",
            "value": 106285.58496931291,
            "unit": "iter/sec",
            "range": "stddev: 0.00001526793973883954",
            "extra": "mean: 9.40861359787146 usec\nrounds: 4133"
          },
          {
            "name": "test/benchmark.py::test_insert_key16_data1024_Mdict",
            "value": 474819.7330116208,
            "unit": "iter/sec",
            "range": "stddev: 0.000014425090981533393",
            "extra": "mean: 2.106062428486993 usec\nrounds: 51547"
          },
          {
            "name": "test/benchmark.py::test_insert_key128_data16_Rdict",
            "value": 156884.9521074189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016355435717671076",
            "extra": "mean: 6.3740976210089375 usec\nrounds: 4876"
          },
          {
            "name": "test/benchmark.py::test_insert_key128_data16_Mdict",
            "value": 715057.4441888729,
            "unit": "iter/sec",
            "range": "stddev: 0.000016741102025141412",
            "extra": "mean: 1.3984890418620175 usec\nrounds: 53476"
          },
          {
            "name": "test/benchmark.py::test_insert_key128_data16_Pdict",
            "value": 1109734.014002181,
            "unit": "iter/sec",
            "range": "stddev: 0.000014916723910670814",
            "extra": "mean: 901.1168328467894 nsec\nrounds: 121952"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key4_data4_Rdict",
            "value": 64347.78858381139,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029680521953041872",
            "extra": "mean: 15.540549597870408 usec\nrounds: 1492"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key4_data4_Mdict",
            "value": 444880.59282161325,
            "unit": "iter/sec",
            "range": "stddev: 7.760292712399001e-7",
            "extra": "mean: 2.2477941635026024 usec\nrounds: 96154"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key8_data128_Rdict",
            "value": 68662.52100255268,
            "unit": "iter/sec",
            "range": "stddev: 0.000005627477805378889",
            "extra": "mean: 14.563986078559841 usec\nrounds: 32468"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key8_data128_Mdict",
            "value": 425369.2762441168,
            "unit": "iter/sec",
            "range": "stddev: 9.65542279731029e-7",
            "extra": "mean: 2.3508985153551762 usec\nrounds: 78741"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key16_data1024_Rdict",
            "value": 51853.57561957518,
            "unit": "iter/sec",
            "range": "stddev: 0.000023673610737813253",
            "extra": "mean: 19.285073170971284 usec\nrounds: 1025"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key16_data1024_Mdict",
            "value": 16173.6939201324,
            "unit": "iter/sec",
            "range": "stddev: 0.0008346643314101759",
            "extra": "mean: 61.828794642591696 usec\nrounds: 448"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key128_data16_Rdict",
            "value": 54354.72010083107,
            "unit": "iter/sec",
            "range": "stddev: 0.00000580204148910235",
            "extra": "mean: 18.39766625869738 usec\nrounds: 24510"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key128_data16_Mdict",
            "value": 353735.2918757031,
            "unit": "iter/sec",
            "range": "stddev: 7.370693113551464e-7",
            "extra": "mean: 2.8269726627994585 usec\nrounds: 74075"
          },
          {
            "name": "test/benchmark.py::test_insert_drop_key128_data16_Pdict",
            "value": 484318.9663498659,
            "unit": "iter/sec",
            "range": "stddev: 7.481583333777343e-7",
            "extra": "mean: 2.0647549847915982 usec\nrounds: 95239"
          },
          {
            "name": "test/benchmark.py::test_mixture_key4_data4_Rdict",
            "value": 113137.28991834579,
            "unit": "iter/sec",
            "range": "stddev: 0.000001348215496705032",
            "extra": "mean: 8.838818754821922 usec\nrounds: 2218"
          },
          {
            "name": "test/benchmark.py::test_mixture_key4_data4_Mdict",
            "value": 488964.4895524184,
            "unit": "iter/sec",
            "range": "stddev: 4.625413335635011e-7",
            "extra": "mean: 2.0451382899305557 usec\nrounds: 64936"
          },
          {
            "name": "test/benchmark.py::test_mixture_key8_data128_Rdict",
            "value": 115375.54613781364,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031451571814055725",
            "extra": "mean: 8.667347921417605 usec\nrounds: 33223"
          },
          {
            "name": "test/benchmark.py::test_mixture_key8_data128_Mdict",
            "value": 466831.3972868332,
            "unit": "iter/sec",
            "range": "stddev: 6.599939329720976e-7",
            "extra": "mean: 2.1421009936604034 usec\nrounds: 64103"
          },
          {
            "name": "test/benchmark.py::test_mixture_key16_data1024_Rdict",
            "value": 50323.50825601866,
            "unit": "iter/sec",
            "range": "stddev: 0.00001104043218131747",
            "extra": "mean: 19.87142857593599 usec\nrounds: 21"
          },
          {
            "name": "test/benchmark.py::test_mixture_key16_data1024_Mdict",
            "value": 99128.86763249476,
            "unit": "iter/sec",
            "range": "stddev: 0.000026836376405094842",
            "extra": "mean: 10.087878777223082 usec\nrounds: 33"
          },
          {
            "name": "test/benchmark.py::test_mixture_key128_data16_Rdict",
            "value": 93440.4200366849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034488767011438446",
            "extra": "mean: 10.702006686264873 usec\nrounds: 897"
          },
          {
            "name": "test/benchmark.py::test_mixture_key128_data16_Mdict",
            "value": 446065.6787977614,
            "unit": "iter/sec",
            "range": "stddev: 5.401301422331914e-7",
            "extra": "mean: 2.241822331400177 usec\nrounds: 61350"
          },
          {
            "name": "test/benchmark.py::test_mixture_key128_data16_Pdict",
            "value": 505547.3596595599,
            "unit": "iter/sec",
            "range": "stddev: 6.419940203604211e-7",
            "extra": "mean: 1.9780540455663913 usec\nrounds: 70423"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key4_data4_Rdict",
            "value": 128231.91542727908,
            "unit": "iter/sec",
            "range": "stddev: 0.000002251415553150084",
            "extra": "mean: 7.798370605850496 usec\nrounds: 28170"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key4_data4_Mdict",
            "value": 756200.5539926637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030458740989550667",
            "extra": "mean: 1.3224005122980926 usec\nrounds: 123457"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key8_data128_Rdict",
            "value": 109184.0813029003,
            "unit": "iter/sec",
            "range": "stddev: 0.000008185875840089712",
            "extra": "mean: 9.158844293663865 usec\nrounds: 45046"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key8_data128_Mdict",
            "value": 658466.7460737806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024843072153015506",
            "extra": "mean: 1.5186795779174411 usec\nrounds: 147059"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key16_data1024_Rdict",
            "value": 97939.83494578123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046988150472607945",
            "extra": "mean: 10.2103500639305 usec\nrounds: 48077"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key16_data1024_Mdict",
            "value": 249570.95975059716,
            "unit": "iter/sec",
            "range": "stddev: 0.00002158347906609633",
            "extra": "mean: 4.006876445077289 usec\nrounds: 858"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key128_data16_Rdict",
            "value": 109151.32593745629,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032633380065102765",
            "extra": "mean: 9.161592783334578 usec\nrounds: 45455"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key128_data16_Mdict",
            "value": 623591.2125351642,
            "unit": "iter/sec",
            "range": "stddev: 0.000004328038123047601",
            "extra": "mean: 1.6036146435331786 usec\nrounds: 149254"
          },
          {
            "name": "test/benchmark.py::test_pressure_insert_key128_data16_Pdict",
            "value": 955306.0941465566,
            "unit": "iter/sec",
            "range": "stddev: 6.115598134589606e-7",
            "extra": "mean: 1.0467849060393273 usec\nrounds: 166667"
          }
        ]
      }
    ]
  }
}