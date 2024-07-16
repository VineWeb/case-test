const fs = require('fs')

const lishi2023List  = [
        {
                "id": "0",
                "totalScore": 667,
                "persons": 3,
                "totalPersons": 23,
                "place": 21
        },
        {
                "id": "1",
                "totalScore": 666,
                "persons": 1,
                "totalPersons": 24,
                "place": 24
        },
        {
                "id": "2",
                "totalScore": 664,
                "persons": 3,
                "totalPersons": 27,
                "place": 25
        },
        {
                "id": "3",
                "totalScore": 663,
                "persons": 4,
                "totalPersons": 31,
                "place": 28
        },
        {
                "id": "4",
                "totalScore": 662,
                "persons": 4,
                "totalPersons": 35,
                "place": 32
        },
        {
                "id": "5",
                "totalScore": 660,
                "persons": 8,
                "totalPersons": 43,
                "place": 36
        },
        {
                "id": "6",
                "totalScore": 659,
                "persons": 2,
                "totalPersons": 45,
                "place": 44
        },
        {
                "id": "7",
                "totalScore": 658,
                "persons": 4,
                "totalPersons": 49,
                "place": 46
        },
        {
                "id": "8",
                "totalScore": 657,
                "persons": 5,
                "totalPersons": 54,
                "place": 50
        },
        {
                "id": "9",
                "totalScore": 656,
                "persons": 7,
                "totalPersons": 61,
                "place": 55
        },
        {
                "id": "10",
                "totalScore": 655,
                "persons": 5,
                "totalPersons": 66,
                "place": 62
        },
        {
                "id": "11",
                "totalScore": 654,
                "persons": 6,
                "totalPersons": 72,
                "place": 67
        },
        {
                "id": "12",
                "totalScore": 653,
                "persons": 9,
                "totalPersons": 81,
                "place": 73
        },
        {
                "id": "13",
                "totalScore": 652,
                "persons": 4,
                "totalPersons": 85,
                "place": 82
        },
        {
                "id": "14",
                "totalScore": 651,
                "persons": 6,
                "totalPersons": 91,
                "place": 86
        },
        {
                "id": "15",
                "totalScore": 650,
                "persons": 10,
                "totalPersons": 101,
                "place": 92
        },
        {
                "id": "16",
                "totalScore": 649,
                "persons": 4,
                "totalPersons": 105,
                "place": 102
        },
        {
                "id": "17",
                "totalScore": 648,
                "persons": 13,
                "totalPersons": 118,
                "place": 106
        },
        {
                "id": "18",
                "totalScore": 647,
                "persons": 10,
                "totalPersons": 128,
                "place": 119
        },
        {
                "id": "19",
                "totalScore": 646,
                "persons": 9,
                "totalPersons": 137,
                "place": 129
        },
        {
                "id": "20",
                "totalScore": 645,
                "persons": 11,
                "totalPersons": 148,
                "place": 138
        },
        {
                "id": "21",
                "totalScore": 644,
                "persons": 7,
                "totalPersons": 155,
                "place": 149
        },
        {
                "id": "22",
                "totalScore": 643,
                "persons": 8,
                "totalPersons": 163,
                "place": 156
        },
        {
                "id": "23",
                "totalScore": 642,
                "persons": 18,
                "totalPersons": 181,
                "place": 164
        },
        {
                "id": "24",
                "totalScore": 641,
                "persons": 8,
                "totalPersons": 189,
                "place": 182
        },
        {
                "id": "25",
                "totalScore": 640,
                "persons": 11,
                "totalPersons": 200,
                "place": 190
        },
        {
                "id": "26",
                "totalScore": 639,
                "persons": 13,
                "totalPersons": 213,
                "place": 201
        },
        {
                "id": "27",
                "totalScore": 638,
                "persons": 15,
                "totalPersons": 228,
                "place": 214
        },
        {
                "id": "28",
                "totalScore": 637,
                "persons": 12,
                "totalPersons": 240,
                "place": 229
        },
        {
                "id": "29",
                "totalScore": 636,
                "persons": 24,
                "totalPersons": 264,
                "place": 241
        },
        {
                "id": "30",
                "totalScore": 635,
                "persons": 21,
                "totalPersons": 285,
                "place": 265
        },
        {
                "id": "31",
                "totalScore": 634,
                "persons": 22,
                "totalPersons": 307,
                "place": 286
        },
        {
                "id": "32",
                "totalScore": 633,
                "persons": 10,
                "totalPersons": 317,
                "place": 308
        },
        {
                "id": "33",
                "totalScore": 632,
                "persons": 27,
                "totalPersons": 344,
                "place": 318
        },
        {
                "id": "34",
                "totalScore": 631,
                "persons": 17,
                "totalPersons": 361,
                "place": 345
        },
        {
                "id": "35",
                "totalScore": 630,
                "persons": 16,
                "totalPersons": 377,
                "place": 362
        },
        {
                "id": "36",
                "totalScore": 629,
                "persons": 20,
                "totalPersons": 397,
                "place": 378
        },
        {
                "id": "37",
                "totalScore": 628,
                "persons": 18,
                "totalPersons": 415,
                "place": 398
        },
        {
                "id": "38",
                "totalScore": 627,
                "persons": 26,
                "totalPersons": 441,
                "place": 416
        },
        {
                "id": "39",
                "totalScore": 626,
                "persons": 26,
                "totalPersons": 467,
                "place": 442
        },
        {
                "id": "40",
                "totalScore": 625,
                "persons": 31,
                "totalPersons": 498,
                "place": 468
        },
        {
                "id": "41",
                "totalScore": 624,
                "persons": 11,
                "totalPersons": 509,
                "place": 499
        },
        {
                "id": "42",
                "totalScore": 623,
                "persons": 30,
                "totalPersons": 539,
                "place": 510
        },
        {
                "id": "43",
                "totalScore": 622,
                "persons": 22,
                "totalPersons": 561,
                "place": 540
        },
        {
                "id": "44",
                "totalScore": 621,
                "persons": 30,
                "totalPersons": 591,
                "place": 562
        },
        {
                "id": "45",
                "totalScore": 620,
                "persons": 27,
                "totalPersons": 618,
                "place": 592
        },
        {
                "id": "46",
                "totalScore": 619,
                "persons": 32,
                "totalPersons": 650,
                "place": 619
        },
        {
                "id": "47",
                "totalScore": 618,
                "persons": 26,
                "totalPersons": 676,
                "place": 651
        },
        {
                "id": "48",
                "totalScore": 617,
                "persons": 34,
                "totalPersons": 710,
                "place": 677
        },
        {
                "id": "49",
                "totalScore": 616,
                "persons": 31,
                "totalPersons": 741,
                "place": 711
        },
        {
                "id": "50",
                "totalScore": 615,
                "persons": 42,
                "totalPersons": 783,
                "place": 742
        },
        {
                "id": "51",
                "totalScore": 614,
                "persons": 38,
                "totalPersons": 821,
                "place": 784
        },
        {
                "id": "52",
                "totalScore": 613,
                "persons": 46,
                "totalPersons": 867,
                "place": 822
        },
        {
                "id": "53",
                "totalScore": 612,
                "persons": 38,
                "totalPersons": 905,
                "place": 868
        },
        {
                "id": "54",
                "totalScore": 611,
                "persons": 44,
                "totalPersons": 949,
                "place": 906
        },
        {
                "id": "55",
                "totalScore": 610,
                "persons": 34,
                "totalPersons": 983,
                "place": 950
        },
        {
                "id": "56",
                "totalScore": 609,
                "persons": 46,
                "totalPersons": 1029,
                "place": 984
        },
        {
                "id": "57",
                "totalScore": 608,
                "persons": 55,
                "totalPersons": 1084,
                "place": 1030
        },
        {
                "id": "58",
                "totalScore": 607,
                "persons": 45,
                "totalPersons": 1129,
                "place": 1085
        },
        {
                "id": "59",
                "totalScore": 606,
                "persons": 46,
                "totalPersons": 1175,
                "place": 1130
        },
        {
                "id": "60",
                "totalScore": 605,
                "persons": 55,
                "totalPersons": 1230,
                "place": 1176
        },
        {
                "id": "61",
                "totalScore": 604,
                "persons": 64,
                "totalPersons": 1294,
                "place": 1231
        },
        {
                "id": "62",
                "totalScore": 603,
                "persons": 50,
                "totalPersons": 1344,
                "place": 1295
        },
        {
                "id": "63",
                "totalScore": 602,
                "persons": 52,
                "totalPersons": 1396,
                "place": 1345
        },
        {
                "id": "64",
                "totalScore": 601,
                "persons": 52,
                "totalPersons": 1448,
                "place": 1397
        },
        {
                "id": "65",
                "totalScore": 600,
                "persons": 59,
                "totalPersons": 1507,
                "place": 1449
        },
        {
                "id": "66",
                "totalScore": 599,
                "persons": 54,
                "totalPersons": 1561,
                "place": 1508
        },
        {
                "id": "67",
                "totalScore": 598,
                "persons": 56,
                "totalPersons": 1617,
                "place": 1562
        },
        {
                "id": "68",
                "totalScore": 597,
                "persons": 65,
                "totalPersons": 1682,
                "place": 1618
        },
        {
                "id": "69",
                "totalScore": 596,
                "persons": 60,
                "totalPersons": 1742,
                "place": 1683
        },
        {
                "id": "70",
                "totalScore": 595,
                "persons": 59,
                "totalPersons": 1801,
                "place": 1743
        },
        {
                "id": "71",
                "totalScore": 594,
                "persons": 75,
                "totalPersons": 1876,
                "place": 1802
        },
        {
                "id": "72",
                "totalScore": 593,
                "persons": 63,
                "totalPersons": 1939,
                "place": 1877
        },
        {
                "id": "73",
                "totalScore": 592,
                "persons": 65,
                "totalPersons": 2004,
                "place": 1940
        },
        {
                "id": "74",
                "totalScore": 591,
                "persons": 75,
                "totalPersons": 2079,
                "place": 2005
        },
        {
                "id": "75",
                "totalScore": 590,
                "persons": 86,
                "totalPersons": 2165,
                "place": 2080
        },
        {
                "id": "76",
                "totalScore": 589,
                "persons": 59,
                "totalPersons": 2224,
                "place": 2166
        },
        {
                "id": "77",
                "totalScore": 588,
                "persons": 89,
                "totalPersons": 2313,
                "place": 2225
        },
        {
                "id": "78",
                "totalScore": 587,
                "persons": 92,
                "totalPersons": 2405,
                "place": 2314
        },
        {
                "id": "79",
                "totalScore": 586,
                "persons": 87,
                "totalPersons": 2492,
                "place": 2406
        },
        {
                "id": "80",
                "totalScore": 585,
                "persons": 93,
                "totalPersons": 2585,
                "place": 2493
        },
        {
                "id": "81",
                "totalScore": 584,
                "persons": 105,
                "totalPersons": 2690,
                "place": 2586
        },
        {
                "id": "82",
                "totalScore": 583,
                "persons": 98,
                "totalPersons": 2788,
                "place": 2691
        },
        {
                "id": "83",
                "totalScore": 582,
                "persons": 105,
                "totalPersons": 2893,
                "place": 2789
        },
        {
                "id": "84",
                "totalScore": 581,
                "persons": 108,
                "totalPersons": 3001,
                "place": 2894
        },
        {
                "id": "85",
                "totalScore": 580,
                "persons": 118,
                "totalPersons": 3119,
                "place": 3002
        },
        {
                "id": "86",
                "totalScore": 579,
                "persons": 112,
                "totalPersons": 3231,
                "place": 3120
        },
        {
                "id": "87",
                "totalScore": 578,
                "persons": 114,
                "totalPersons": 3345,
                "place": 3232
        },
        {
                "id": "88",
                "totalScore": 577,
                "persons": 100,
                "totalPersons": 3445,
                "place": 3346
        },
        {
                "id": "89",
                "totalScore": 576,
                "persons": 110,
                "totalPersons": 3555,
                "place": 3446
        },
        {
                "id": "90",
                "totalScore": 575,
                "persons": 110,
                "totalPersons": 3665,
                "place": 3556
        },
        {
                "id": "91",
                "totalScore": 574,
                "persons": 122,
                "totalPersons": 3787,
                "place": 3666
        },
        {
                "id": "92",
                "totalScore": 573,
                "persons": 119,
                "totalPersons": 3906,
                "place": 3788
        },
        {
                "id": "93",
                "totalScore": 572,
                "persons": 120,
                "totalPersons": 4026,
                "place": 3907
        },
        {
                "id": "94",
                "totalScore": 571,
                "persons": 134,
                "totalPersons": 4160,
                "place": 4027
        },
        {
                "id": "95",
                "totalScore": 570,
                "persons": 145,
                "totalPersons": 4305,
                "place": 4161
        },
        {
                "id": "96",
                "totalScore": 569,
                "persons": 151,
                "totalPersons": 4456,
                "place": 4306
        },
        {
                "id": "97",
                "totalScore": 568,
                "persons": 128,
                "totalPersons": 4584,
                "place": 4457
        },
        {
                "id": "98",
                "totalScore": 567,
                "persons": 136,
                "totalPersons": 4720,
                "place": 4585
        },
        {
                "id": "99",
                "totalScore": 566,
                "persons": 127,
                "totalPersons": 4847,
                "place": 4721
        },
        {
                "id": "100",
                "totalScore": 565,
                "persons": 133,
                "totalPersons": 4980,
                "place": 4848
        },
        {
                "id": "101",
                "totalScore": 564,
                "persons": 136,
                "totalPersons": 5116,
                "place": 4981
        },
        {
                "id": "102",
                "totalScore": 563,
                "persons": 149,
                "totalPersons": 5265,
                "place": 5117
        },
        {
                "id": "103",
                "totalScore": 562,
                "persons": 150,
                "totalPersons": 5415,
                "place": 5266
        },
        {
                "id": "104",
                "totalScore": 561,
                "persons": 157,
                "totalPersons": 5572,
                "place": 5416
        },
        {
                "id": "105",
                "totalScore": 560,
                "persons": 140,
                "totalPersons": 5712,
                "place": 5573
        },
        {
                "id": "106",
                "totalScore": 559,
                "persons": 161,
                "totalPersons": 5873,
                "place": 5713
        },
        {
                "id": "107",
                "totalScore": 558,
                "persons": 169,
                "totalPersons": 6042,
                "place": 5874
        },
        {
                "id": "108",
                "totalScore": 557,
                "persons": 160,
                "totalPersons": 6202,
                "place": 6043
        },
        {
                "id": "109",
                "totalScore": 556,
                "persons": 172,
                "totalPersons": 6374,
                "place": 6203
        },
        {
                "id": "110",
                "totalScore": 555,
                "persons": 198,
                "totalPersons": 6572,
                "place": 6375
        },
        {
                "id": "111",
                "totalScore": 554,
                "persons": 166,
                "totalPersons": 6738,
                "place": 6573
        },
        {
                "id": "112",
                "totalScore": 553,
                "persons": 190,
                "totalPersons": 6928,
                "place": 6739
        },
        {
                "id": "113",
                "totalScore": 552,
                "persons": 192,
                "totalPersons": 7120,
                "place": 6929
        },
        {
                "id": "114",
                "totalScore": 551,
                "persons": 172,
                "totalPersons": 7292,
                "place": 7121
        },
        {
                "id": "115",
                "totalScore": 550,
                "persons": 183,
                "totalPersons": 7475,
                "place": 7293
        },
        {
                "id": "116",
                "totalScore": 549,
                "persons": 178,
                "totalPersons": 7653,
                "place": 7476
        },
        {
                "id": "117",
                "totalScore": 548,
                "persons": 189,
                "totalPersons": 7842,
                "place": 7654
        },
        {
                "id": "118",
                "totalScore": 547,
                "persons": 188,
                "totalPersons": 8030,
                "place": 7843
        },
        {
                "id": "119",
                "totalScore": 546,
                "persons": 191,
                "totalPersons": 8221,
                "place": 8031
        },
        {
                "id": "120",
                "totalScore": 545,
                "persons": 196,
                "totalPersons": 8417,
                "place": 8222
        },
        {
                "id": "121",
                "totalScore": 544,
                "persons": 198,
                "totalPersons": 8615,
                "place": 8418
        },
        {
                "id": "122",
                "totalScore": 543,
                "persons": 181,
                "totalPersons": 8796,
                "place": 8616
        },
        {
                "id": "123",
                "totalScore": 542,
                "persons": 209,
                "totalPersons": 9005,
                "place": 8797
        },
        {
                "id": "124",
                "totalScore": 541,
                "persons": 212,
                "totalPersons": 9217,
                "place": 9006
        },
        {
                "id": "125",
                "totalScore": 540,
                "persons": 213,
                "totalPersons": 9430,
                "place": 9218
        },
        {
                "id": "126",
                "totalScore": 539,
                "persons": 242,
                "totalPersons": 9672,
                "place": 9431
        },
        {
                "id": "127",
                "totalScore": 538,
                "persons": 252,
                "totalPersons": 9924,
                "place": 9673
        },
        {
                "id": "128",
                "totalScore": 537,
                "persons": 242,
                "totalPersons": 10166,
                "place": 9925
        },
        {
                "id": "129",
                "totalScore": 536,
                "persons": 234,
                "totalPersons": 10400,
                "place": 10167
        },
        {
                "id": "130",
                "totalScore": 535,
                "persons": 239,
                "totalPersons": 10639,
                "place": 10401
        },
        {
                "id": "131",
                "totalScore": 534,
                "persons": 238,
                "totalPersons": 10877,
                "place": 10640
        },
        {
                "id": "132",
                "totalScore": 533,
                "persons": 224,
                "totalPersons": 11101,
                "place": 10878
        },
        {
                "id": "133",
                "totalScore": 532,
                "persons": 225,
                "totalPersons": 11326,
                "place": 11102
        },
        {
                "id": "134",
                "totalScore": 531,
                "persons": 228,
                "totalPersons": 11554,
                "place": 11327
        },
        {
                "id": "135",
                "totalScore": 530,
                "persons": 261,
                "totalPersons": 11815,
                "place": 11555
        },
        {
                "id": "136",
                "totalScore": 529,
                "persons": 221,
                "totalPersons": 12036,
                "place": 11816
        },
        {
                "id": "137",
                "totalScore": 528,
                "persons": 253,
                "totalPersons": 12289,
                "place": 12037
        },
        {
                "id": "138",
                "totalScore": 527,
                "persons": 257,
                "totalPersons": 12546,
                "place": 12290
        },
        {
                "id": "139",
                "totalScore": 526,
                "persons": 261,
                "totalPersons": 12807,
                "place": 12547
        },
        {
                "id": "140",
                "totalScore": 525,
                "persons": 255,
                "totalPersons": 13062,
                "place": 12808
        },
        {
                "id": "141",
                "totalScore": 524,
                "persons": 252,
                "totalPersons": 13314,
                "place": 13063
        },
        {
                "id": "142",
                "totalScore": 523,
                "persons": 266,
                "totalPersons": 13580,
                "place": 13315
        },
        {
                "id": "143",
                "totalScore": 522,
                "persons": 252,
                "totalPersons": 13832,
                "place": 13581
        },
        {
                "id": "144",
                "totalScore": 521,
                "persons": 285,
                "totalPersons": 14117,
                "place": 13833
        },
        {
                "id": "145",
                "totalScore": 520,
                "persons": 264,
                "totalPersons": 14381,
                "place": 14118
        },
        {
                "id": "146",
                "totalScore": 519,
                "persons": 308,
                "totalPersons": 14689,
                "place": 14382
        },
        {
                "id": "147",
                "totalScore": 518,
                "persons": 304,
                "totalPersons": 14993,
                "place": 14690
        },
        {
                "id": "148",
                "totalScore": 517,
                "persons": 274,
                "totalPersons": 15267,
                "place": 14994
        },
        {
                "id": "149",
                "totalScore": 516,
                "persons": 271,
                "totalPersons": 15538,
                "place": 15268
        },
        {
                "id": "150",
                "totalScore": 515,
                "persons": 338,
                "totalPersons": 15876,
                "place": 15539
        },
        {
                "id": "151",
                "totalScore": 514,
                "persons": 308,
                "totalPersons": 16184,
                "place": 15877
        },
        {
                "id": "152",
                "totalScore": 513,
                "persons": 310,
                "totalPersons": 16494,
                "place": 16185
        },
        {
                "id": "153",
                "totalScore": 512,
                "persons": 310,
                "totalPersons": 16804,
                "place": 16495
        },
        {
                "id": "154",
                "totalScore": 511,
                "persons": 287,
                "totalPersons": 17091,
                "place": 16805
        },
        {
                "id": "155",
                "totalScore": 510,
                "persons": 288,
                "totalPersons": 17379,
                "place": 17092
        },
        {
                "id": "156",
                "totalScore": 509,
                "persons": 318,
                "totalPersons": 17697,
                "place": 17380
        },
        {
                "id": "157",
                "totalScore": 508,
                "persons": 332,
                "totalPersons": 18029,
                "place": 17698
        },
        {
                "id": "158",
                "totalScore": 507,
                "persons": 316,
                "totalPersons": 18345,
                "place": 18030
        },
        {
                "id": "159",
                "totalScore": 506,
                "persons": 328,
                "totalPersons": 18673,
                "place": 18346
        },
        {
                "id": "160",
                "totalScore": 505,
                "persons": 377,
                "totalPersons": 19050,
                "place": 18674
        },
        {
                "id": "161",
                "totalScore": 504,
                "persons": 337,
                "totalPersons": 19387,
                "place": 19051
        },
        {
                "id": "162",
                "totalScore": 503,
                "persons": 346,
                "totalPersons": 19733,
                "place": 19388
        },
        {
                "id": "163",
                "totalScore": 502,
                "persons": 347,
                "totalPersons": 20080,
                "place": 19734
        },
        {
                "id": "164",
                "totalScore": 501,
                "persons": 346,
                "totalPersons": 20426,
                "place": 20081
        },
        {
                "id": "165",
                "totalScore": 500,
                "persons": 344,
                "totalPersons": 20770,
                "place": 20427
        },
        {
                "id": "166",
                "totalScore": 499,
                "persons": 373,
                "totalPersons": 21143,
                "place": 20771
        },
        {
                "id": "167",
                "totalScore": 498,
                "persons": 353,
                "totalPersons": 21496,
                "place": 21144
        },
        {
                "id": "168",
                "totalScore": 497,
                "persons": 372,
                "totalPersons": 21868,
                "place": 21497
        },
        {
                "id": "169",
                "totalScore": 496,
                "persons": 346,
                "totalPersons": 22214,
                "place": 21869
        },
        {
                "id": "170",
                "totalScore": 495,
                "persons": 397,
                "totalPersons": 22611,
                "place": 22215
        },
        {
                "id": "171",
                "totalScore": 494,
                "persons": 382,
                "totalPersons": 22993,
                "place": 22612
        },
        {
                "id": "172",
                "totalScore": 493,
                "persons": 387,
                "totalPersons": 23380,
                "place": 22994
        },
        {
                "id": "173",
                "totalScore": 492,
                "persons": 404,
                "totalPersons": 23784,
                "place": 23381
        },
        {
                "id": "174",
                "totalScore": 491,
                "persons": 363,
                "totalPersons": 24147,
                "place": 23785
        },
        {
                "id": "175",
                "totalScore": 490,
                "persons": 408,
                "totalPersons": 24555,
                "place": 24148
        },
        {
                "id": "176",
                "totalScore": 489,
                "persons": 403,
                "totalPersons": 24958,
                "place": 24556
        },
        {
                "id": "177",
                "totalScore": 488,
                "persons": 391,
                "totalPersons": 25349,
                "place": 24959
        },
        {
                "id": "178",
                "totalScore": 487,
                "persons": 409,
                "totalPersons": 25758,
                "place": 25350
        },
        {
                "id": "179",
                "totalScore": 486,
                "persons": 419,
                "totalPersons": 26177,
                "place": 25759
        },
        {
                "id": "180",
                "totalScore": 485,
                "persons": 391,
                "totalPersons": 26568,
                "place": 26178
        },
        {
                "id": "181",
                "totalScore": 484,
                "persons": 408,
                "totalPersons": 26976,
                "place": 26569
        },
        {
                "id": "182",
                "totalScore": 483,
                "persons": 414,
                "totalPersons": 27390,
                "place": 26977
        },
        {
                "id": "183",
                "totalScore": 482,
                "persons": 453,
                "totalPersons": 27843,
                "place": 27391
        },
        {
                "id": "184",
                "totalScore": 481,
                "persons": 458,
                "totalPersons": 28301,
                "place": 27844
        },
        {
                "id": "185",
                "totalScore": 480,
                "persons": 447,
                "totalPersons": 28748,
                "place": 28302
        },
        {
                "id": "186",
                "totalScore": 479,
                "persons": 404,
                "totalPersons": 29152,
                "place": 28749
        },
        {
                "id": "187",
                "totalScore": 478,
                "persons": 427,
                "totalPersons": 29579,
                "place": 29153
        },
        {
                "id": "188",
                "totalScore": 477,
                "persons": 437,
                "totalPersons": 30016,
                "place": 29580
        },
        {
                "id": "189",
                "totalScore": 476,
                "persons": 456,
                "totalPersons": 30472,
                "place": 30017
        },
        {
                "id": "190",
                "totalScore": 475,
                "persons": 453,
                "totalPersons": 30925,
                "place": 30473
        },
        {
                "id": "191",
                "totalScore": 474,
                "persons": 498,
                "totalPersons": 31423,
                "place": 30926
        },
        {
                "id": "192",
                "totalScore": 473,
                "persons": 465,
                "totalPersons": 31888,
                "place": 31424
        },
        {
                "id": "193",
                "totalScore": 472,
                "persons": 525,
                "totalPersons": 32413,
                "place": 31889
        },
        {
                "id": "194",
                "totalScore": 471,
                "persons": 471,
                "totalPersons": 32884,
                "place": 32414
        },
        {
                "id": "195",
                "totalScore": 470,
                "persons": 421,
                "totalPersons": 33305,
                "place": 32885
        },
        {
                "id": "196",
                "totalScore": 469,
                "persons": 465,
                "totalPersons": 33770,
                "place": 33306
        },
        {
                "id": "197",
                "totalScore": 468,
                "persons": 516,
                "totalPersons": 34286,
                "place": 33771
        },
        {
                "id": "198",
                "totalScore": 467,
                "persons": 474,
                "totalPersons": 34760,
                "place": 34287
        },
        {
                "id": "199",
                "totalScore": 466,
                "persons": 509,
                "totalPersons": 35269,
                "place": 34761
        },
        {
                "id": "200",
                "totalScore": 465,
                "persons": 497,
                "totalPersons": 35766,
                "place": 35270
        },
        {
                "id": "201",
                "totalScore": 464,
                "persons": 467,
                "totalPersons": 36233,
                "place": 35767
        },
        {
                "id": "202",
                "totalScore": 463,
                "persons": 521,
                "totalPersons": 36754,
                "place": 36234
        },
        {
                "id": "203",
                "totalScore": 462,
                "persons": 484,
                "totalPersons": 37238,
                "place": 36755
        },
        {
                "id": "204",
                "totalScore": 461,
                "persons": 475,
                "totalPersons": 37713,
                "place": 37239
        },
        {
                "id": "205",
                "totalScore": 460,
                "persons": 577,
                "totalPersons": 38290,
                "place": 37714
        },
        {
                "id": "206",
                "totalScore": 459,
                "persons": 529,
                "totalPersons": 38819,
                "place": 38291
        },
        {
                "id": "207",
                "totalScore": 458,
                "persons": 533,
                "totalPersons": 39352,
                "place": 38820
        },
        {
                "id": "208",
                "totalScore": 457,
                "persons": 515,
                "totalPersons": 39867,
                "place": 39353
        },
        {
                "id": "209",
                "totalScore": 456,
                "persons": 509,
                "totalPersons": 40376,
                "place": 39868
        },
        {
                "id": "210",
                "totalScore": 455,
                "persons": 526,
                "totalPersons": 40902,
                "place": 40377
        },
        {
                "id": "211",
                "totalScore": 454,
                "persons": 564,
                "totalPersons": 41466,
                "place": 40903
        },
        {
                "id": "212",
                "totalScore": 453,
                "persons": 578,
                "totalPersons": 42044,
                "place": 41467
        },
        {
                "id": "213",
                "totalScore": 452,
                "persons": 543,
                "totalPersons": 42587,
                "place": 42045
        },
        {
                "id": "214",
                "totalScore": 451,
                "persons": 507,
                "totalPersons": 43094,
                "place": 42588
        },
        {
                "id": "215",
                "totalScore": 450,
                "persons": 555,
                "totalPersons": 43649,
                "place": 43095
        },
        {
                "id": "216",
                "totalScore": 449,
                "persons": 522,
                "totalPersons": 44171,
                "place": 43650
        },
        {
                "id": "217",
                "totalScore": 448,
                "persons": 583,
                "totalPersons": 44754,
                "place": 44172
        },
        {
                "id": "218",
                "totalScore": 447,
                "persons": 558,
                "totalPersons": 45312,
                "place": 44755
        },
        {
                "id": "219",
                "totalScore": 446,
                "persons": 553,
                "totalPersons": 45865,
                "place": 45313
        },
        {
                "id": "220",
                "totalScore": 445,
                "persons": 546,
                "totalPersons": 46411,
                "place": 45866
        },
        {
                "id": "221",
                "totalScore": 444,
                "persons": 508,
                "totalPersons": 46919,
                "place": 46412
        },
        {
                "id": "222",
                "totalScore": 443,
                "persons": 503,
                "totalPersons": 47422,
                "place": 46920
        },
        {
                "id": "223",
                "totalScore": 442,
                "persons": 568,
                "totalPersons": 47990,
                "place": 47423
        },
        {
                "id": "224",
                "totalScore": 441,
                "persons": 589,
                "totalPersons": 48579,
                "place": 47991
        },
        {
                "id": "225",
                "totalScore": 440,
                "persons": 524,
                "totalPersons": 49103,
                "place": 48580
        },
        {
                "id": "226",
                "totalScore": 439,
                "persons": 593,
                "totalPersons": 49696,
                "place": 49104
        },
        {
                "id": "227",
                "totalScore": 438,
                "persons": 573,
                "totalPersons": 50269,
                "place": 49697
        },
        {
                "id": "228",
                "totalScore": 437,
                "persons": 594,
                "totalPersons": 50863,
                "place": 50270
        },
        {
                "id": "229",
                "totalScore": 436,
                "persons": 569,
                "totalPersons": 51432,
                "place": 50864
        },
        {
                "id": "230",
                "totalScore": 435,
                "persons": 573,
                "totalPersons": 52005,
                "place": 51433
        },
        {
                "id": "231",
                "totalScore": 434,
                "persons": 579,
                "totalPersons": 52584,
                "place": 52006
        },
        {
                "id": "232",
                "totalScore": 433,
                "persons": 590,
                "totalPersons": 53174,
                "place": 52585
        },
        {
                "id": "233",
                "totalScore": 432,
                "persons": 582,
                "totalPersons": 53756,
                "place": 53175
        },
        {
                "id": "234",
                "totalScore": 431,
                "persons": 575,
                "totalPersons": 54331,
                "place": 53757
        },
        {
                "id": "235",
                "totalScore": 430,
                "persons": 596,
                "totalPersons": 54927,
                "place": 54332
        },
        {
                "id": "236",
                "totalScore": 429,
                "persons": 559,
                "totalPersons": 55486,
                "place": 54928
        },
        {
                "id": "237",
                "totalScore": 428,
                "persons": 658,
                "totalPersons": 56144,
                "place": 55487
        },
        {
                "id": "238",
                "totalScore": 427,
                "persons": 617,
                "totalPersons": 56761,
                "place": 56145
        },
        {
                "id": "239",
                "totalScore": 426,
                "persons": 594,
                "totalPersons": 57355,
                "place": 56762
        },
        {
                "id": "240",
                "totalScore": 425,
                "persons": 562,
                "totalPersons": 57917,
                "place": 57356
        },
        {
                "id": "241",
                "totalScore": 424,
                "persons": 617,
                "totalPersons": 58534,
                "place": 57918
        },
        {
                "id": "242",
                "totalScore": 423,
                "persons": 617,
                "totalPersons": 59151,
                "place": 58535
        },
        {
                "id": "243",
                "totalScore": 422,
                "persons": 616,
                "totalPersons": 59767,
                "place": 59152
        },
        {
                "id": "244",
                "totalScore": 421,
                "persons": 627,
                "totalPersons": 60394,
                "place": 59768
        },
        {
                "id": "245",
                "totalScore": 420,
                "persons": 597,
                "totalPersons": 60991,
                "place": 60395
        },
        {
                "id": "246",
                "totalScore": 419,
                "persons": 646,
                "totalPersons": 61637,
                "place": 60992
        },
        {
                "id": "247",
                "totalScore": 418,
                "persons": 625,
                "totalPersons": 62262,
                "place": 61638
        },
        {
                "id": "248",
                "totalScore": 417,
                "persons": 632,
                "totalPersons": 62894,
                "place": 62263
        },
        {
                "id": "249",
                "totalScore": 416,
                "persons": 600,
                "totalPersons": 63494,
                "place": 62895
        },
        {
                "id": "250",
                "totalScore": 415,
                "persons": 637,
                "totalPersons": 64131,
                "place": 63495
        },
        {
                "id": "251",
                "totalScore": 414,
                "persons": 637,
                "totalPersons": 64768,
                "place": 64132
        },
        {
                "id": "252",
                "totalScore": 413,
                "persons": 662,
                "totalPersons": 65430,
                "place": 64769
        },
        {
                "id": "253",
                "totalScore": 412,
                "persons": 634,
                "totalPersons": 66064,
                "place": 65431
        },
        {
                "id": "254",
                "totalScore": 411,
                "persons": 600,
                "totalPersons": 66664,
                "place": 66065
        },
        {
                "id": "255",
                "totalScore": 410,
                "persons": 637,
                "totalPersons": 67301,
                "place": 66665
        },
        {
                "id": "256",
                "totalScore": 409,
                "persons": 623,
                "totalPersons": 67924,
                "place": 67302
        },
        {
                "id": "257",
                "totalScore": 408,
                "persons": 566,
                "totalPersons": 68490,
                "place": 67925
        },
        {
                "id": "258",
                "totalScore": 407,
                "persons": 639,
                "totalPersons": 69129,
                "place": 68491
        },
        {
                "id": "259",
                "totalScore": 406,
                "persons": 571,
                "totalPersons": 69700,
                "place": 69130
        },
        {
                "id": "260",
                "totalScore": 405,
                "persons": 582,
                "totalPersons": 70282,
                "place": 69701
        },
        {
                "id": "261",
                "totalScore": 404,
                "persons": 620,
                "totalPersons": 70902,
                "place": 70283
        },
        {
                "id": "262",
                "totalScore": 403,
                "persons": 586,
                "totalPersons": 71488,
                "place": 70903
        },
        {
                "id": "263",
                "totalScore": 402,
                "persons": 659,
                "totalPersons": 72147,
                "place": 71489
        },
        {
                "id": "264",
                "totalScore": 401,
                "persons": 629,
                "totalPersons": 72776,
                "place": 72148
        },
        {
                "id": "265",
                "totalScore": 400,
                "persons": 660,
                "totalPersons": 73436,
                "place": 72777
        },
        {
                "id": "266",
                "totalScore": 399,
                "persons": 624,
                "totalPersons": 74060,
                "place": 73437
        },
        {
                "id": "267",
                "totalScore": 398,
                "persons": 611,
                "totalPersons": 74671,
                "place": 74061
        },
        {
                "id": "268",
                "totalScore": 397,
                "persons": 668,
                "totalPersons": 75339,
                "place": 74672
        },
        {
                "id": "269",
                "totalScore": 396,
                "persons": 613,
                "totalPersons": 75952,
                "place": 75340
        },
        {
                "id": "270",
                "totalScore": 395,
                "persons": 638,
                "totalPersons": 76590,
                "place": 75953
        },
        {
                "id": "271",
                "totalScore": 394,
                "persons": 669,
                "totalPersons": 77259,
                "place": 76591
        },
        {
                "id": "272",
                "totalScore": 393,
                "persons": 633,
                "totalPersons": 77892,
                "place": 77260
        },
        {
                "id": "273",
                "totalScore": 392,
                "persons": 611,
                "totalPersons": 78503,
                "place": 77893
        },
        {
                "id": "274",
                "totalScore": 391,
                "persons": 634,
                "totalPersons": 79137,
                "place": 78504
        },
        {
                "id": "275",
                "totalScore": 390,
                "persons": 661,
                "totalPersons": 79798,
                "place": 79138
        },
        {
                "id": "276",
                "totalScore": 389,
                "persons": 614,
                "totalPersons": 80412,
                "place": 79799
        },
        {
                "id": "277",
                "totalScore": 388,
                "persons": 625,
                "totalPersons": 81037,
                "place": 80413
        },
        {
                "id": "278",
                "totalScore": 387,
                "persons": 637,
                "totalPersons": 81674,
                "place": 81038
        },
        {
                "id": "279",
                "totalScore": 386,
                "persons": 635,
                "totalPersons": 82309,
                "place": 81675
        },
        {
                "id": "280",
                "totalScore": 385,
                "persons": 605,
                "totalPersons": 82914,
                "place": 82310
        },
        {
                "id": "281",
                "totalScore": 384,
                "persons": 647,
                "totalPersons": 83561,
                "place": 82915
        },
        {
                "id": "282",
                "totalScore": 383,
                "persons": 627,
                "totalPersons": 84188,
                "place": 83562
        },
        {
                "id": "283",
                "totalScore": 382,
                "persons": 626,
                "totalPersons": 84814,
                "place": 84189
        },
        {
                "id": "284",
                "totalScore": 381,
                "persons": 659,
                "totalPersons": 85473,
                "place": 84815
        },
        {
                "id": "285",
                "totalScore": 380,
                "persons": 648,
                "totalPersons": 86121,
                "place": 85474
        },
        {
                "id": "286",
                "totalScore": 379,
                "persons": 620,
                "totalPersons": 86741,
                "place": 86122
        },
        {
                "id": "287",
                "totalScore": 378,
                "persons": 663,
                "totalPersons": 87404,
                "place": 86742
        },
        {
                "id": "288",
                "totalScore": 377,
                "persons": 644,
                "totalPersons": 88048,
                "place": 87405
        },
        {
                "id": "289",
                "totalScore": 376,
                "persons": 650,
                "totalPersons": 88698,
                "place": 88049
        },
        {
                "id": "290",
                "totalScore": 375,
                "persons": 621,
                "totalPersons": 89319,
                "place": 88699
        },
        {
                "id": "291",
                "totalScore": 374,
                "persons": 602,
                "totalPersons": 89921,
                "place": 89320
        },
        {
                "id": "292",
                "totalScore": 373,
                "persons": 625,
                "totalPersons": 90546,
                "place": 89922
        },
        {
                "id": "293",
                "totalScore": 372,
                "persons": 557,
                "totalPersons": 91103,
                "place": 90547
        },
        {
                "id": "294",
                "totalScore": 371,
                "persons": 623,
                "totalPersons": 91726,
                "place": 91104
        },
        {
                "id": "295",
                "totalScore": 370,
                "persons": 629,
                "totalPersons": 92355,
                "place": 91727
        },
        {
                "id": "296",
                "totalScore": 369,
                "persons": 634,
                "totalPersons": 92989,
                "place": 92356
        },
        {
                "id": "297",
                "totalScore": 368,
                "persons": 590,
                "totalPersons": 93579,
                "place": 92990
        },
        {
                "id": "298",
                "totalScore": 367,
                "persons": 602,
                "totalPersons": 94181,
                "place": 93580
        },
        {
                "id": "299",
                "totalScore": 366,
                "persons": 607,
                "totalPersons": 94788,
                "place": 94182
        },
        {
                "id": "300",
                "totalScore": 365,
                "persons": 588,
                "totalPersons": 95376,
                "place": 94789
        },
        {
                "id": "301",
                "totalScore": 364,
                "persons": 586,
                "totalPersons": 95962,
                "place": 95377
        },
        {
                "id": "302",
                "totalScore": 363,
                "persons": 614,
                "totalPersons": 96576,
                "place": 95963
        },
        {
                "id": "303",
                "totalScore": 362,
                "persons": 583,
                "totalPersons": 97159,
                "place": 96577
        },
        {
                "id": "304",
                "totalScore": 361,
                "persons": 566,
                "totalPersons": 97725,
                "place": 97160
        },
        {
                "id": "305",
                "totalScore": 360,
                "persons": 588,
                "totalPersons": 98313,
                "place": 97726
        },
        {
                "id": "306",
                "totalScore": 359,
                "persons": 624,
                "totalPersons": 98937,
                "place": 98314
        },
        {
                "id": "307",
                "totalScore": 358,
                "persons": 549,
                "totalPersons": 99486,
                "place": 98938
        },
        {
                "id": "308",
                "totalScore": 357,
                "persons": 577,
                "totalPersons": 100063,
                "place": 99487
        },
        {
                "id": "309",
                "totalScore": 356,
                "persons": 576,
                "totalPersons": 100639,
                "place": 100064
        },
        {
                "id": "310",
                "totalScore": 355,
                "persons": 572,
                "totalPersons": 101211,
                "place": 100640
        },
        {
                "id": "311",
                "totalScore": 354,
                "persons": 569,
                "totalPersons": 101780,
                "place": 101212
        },
        {
                "id": "312",
                "totalScore": 353,
                "persons": 566,
                "totalPersons": 102346,
                "place": 101781
        },
        {
                "id": "313",
                "totalScore": 352,
                "persons": 548,
                "totalPersons": 102894,
                "place": 102347
        },
        {
                "id": "314",
                "totalScore": 351,
                "persons": 539,
                "totalPersons": 103433,
                "place": 102895
        },
        {
                "id": "315",
                "totalScore": 350,
                "persons": 517,
                "totalPersons": 103950,
                "place": 103434
        },
        {
                "id": "316",
                "totalScore": 349,
                "persons": 597,
                "totalPersons": 104547,
                "place": 103951
        },
        {
                "id": "317",
                "totalScore": 348,
                "persons": 583,
                "totalPersons": 105130,
                "place": 104548
        },
        {
                "id": "318",
                "totalScore": 347,
                "persons": 586,
                "totalPersons": 105716,
                "place": 105131
        },
        {
                "id": "319",
                "totalScore": 346,
                "persons": 543,
                "totalPersons": 106259,
                "place": 105717
        },
        {
                "id": "320",
                "totalScore": 345,
                "persons": 514,
                "totalPersons": 106773,
                "place": 106260
        },
        {
                "id": "321",
                "totalScore": 344,
                "persons": 534,
                "totalPersons": 107307,
                "place": 106774
        },
        {
                "id": "322",
                "totalScore": 343,
                "persons": 541,
                "totalPersons": 107848,
                "place": 107308
        },
        {
                "id": "323",
                "totalScore": 342,
                "persons": 505,
                "totalPersons": 108353,
                "place": 107849
        },
        {
                "id": "324",
                "totalScore": 341,
                "persons": 537,
                "totalPersons": 108890,
                "place": 108354
        },
        {
                "id": "325",
                "totalScore": 340,
                "persons": 503,
                "totalPersons": 109393,
                "place": 108891
        },
        {
                "id": "326",
                "totalScore": 339,
                "persons": 492,
                "totalPersons": 109885,
                "place": 109394
        },
        {
                "id": "327",
                "totalScore": 338,
                "persons": 508,
                "totalPersons": 110393,
                "place": 109886
        },
        {
                "id": "328",
                "totalScore": 337,
                "persons": 510,
                "totalPersons": 110903,
                "place": 110394
        },
        {
                "id": "329",
                "totalScore": 336,
                "persons": 531,
                "totalPersons": 111434,
                "place": 110904
        },
        {
                "id": "330",
                "totalScore": 335,
                "persons": 448,
                "totalPersons": 111882,
                "place": 111435
        },
        {
                "id": "331",
                "totalScore": 334,
                "persons": 510,
                "totalPersons": 112392,
                "place": 111883
        },
        {
                "id": "332",
                "totalScore": 333,
                "persons": 488,
                "totalPersons": 112880,
                "place": 112393
        },
        {
                "id": "333",
                "totalScore": 332,
                "persons": 505,
                "totalPersons": 113385,
                "place": 112881
        },
        {
                "id": "334",
                "totalScore": 331,
                "persons": 467,
                "totalPersons": 113852,
                "place": 113386
        },
        {
                "id": "335",
                "totalScore": 330,
                "persons": 477,
                "totalPersons": 114329,
                "place": 113853
        },
        {
                "id": "336",
                "totalScore": 329,
                "persons": 478,
                "totalPersons": 114807,
                "place": 114330
        },
        {
                "id": "337",
                "totalScore": 328,
                "persons": 465,
                "totalPersons": 115272,
                "place": 114808
        },
        {
                "id": "338",
                "totalScore": 327,
                "persons": 414,
                "totalPersons": 115686,
                "place": 115273
        },
        {
                "id": "339",
                "totalScore": 326,
                "persons": 455,
                "totalPersons": 116141,
                "place": 115687
        },
        {
                "id": "340",
                "totalScore": 325,
                "persons": 484,
                "totalPersons": 116625,
                "place": 116142
        },
        {
                "id": "341",
                "totalScore": 324,
                "persons": 453,
                "totalPersons": 117078,
                "place": 116626
        },
        {
                "id": "342",
                "totalScore": 323,
                "persons": 455,
                "totalPersons": 117533,
                "place": 117079
        },
        {
                "id": "343",
                "totalScore": 322,
                "persons": 460,
                "totalPersons": 117993,
                "place": 117534
        },
        {
                "id": "344",
                "totalScore": 321,
                "persons": 403,
                "totalPersons": 118396,
                "place": 117994
        },
        {
                "id": "345",
                "totalScore": 320,
                "persons": 428,
                "totalPersons": 118824,
                "place": 118397
        },
        {
                "id": "346",
                "totalScore": 319,
                "persons": 417,
                "totalPersons": 119241,
                "place": 118825
        },
        {
                "id": "347",
                "totalScore": 318,
                "persons": 440,
                "totalPersons": 119681,
                "place": 119242
        },
        {
                "id": "348",
                "totalScore": 317,
                "persons": 418,
                "totalPersons": 120099,
                "place": 119682
        },
        {
                "id": "349",
                "totalScore": 316,
                "persons": 410,
                "totalPersons": 120509,
                "place": 120100
        },
        {
                "id": "350",
                "totalScore": 315,
                "persons": 408,
                "totalPersons": 120917,
                "place": 120510
        },
        {
                "id": "351",
                "totalScore": 314,
                "persons": 402,
                "totalPersons": 121319,
                "place": 120918
        },
        {
                "id": "352",
                "totalScore": 313,
                "persons": 390,
                "totalPersons": 121709,
                "place": 121320
        },
        {
                "id": "353",
                "totalScore": 312,
                "persons": 389,
                "totalPersons": 122098,
                "place": 121710
        },
        {
                "id": "354",
                "totalScore": 311,
                "persons": 397,
                "totalPersons": 122495,
                "place": 122099
        },
        {
                "id": "355",
                "totalScore": 310,
                "persons": 406,
                "totalPersons": 122901,
                "place": 122496
        },
        {
                "id": "356",
                "totalScore": 309,
                "persons": 342,
                "totalPersons": 123243,
                "place": 122902
        },
        {
                "id": "357",
                "totalScore": 308,
                "persons": 378,
                "totalPersons": 123621,
                "place": 123244
        },
        {
                "id": "358",
                "totalScore": 307,
                "persons": 393,
                "totalPersons": 124014,
                "place": 123622
        },
        {
                "id": "359",
                "totalScore": 306,
                "persons": 405,
                "totalPersons": 124419,
                "place": 124015
        },
        {
                "id": "360",
                "totalScore": 305,
                "persons": 367,
                "totalPersons": 124786,
                "place": 124420
        },
        {
                "id": "361",
                "totalScore": 304,
                "persons": 369,
                "totalPersons": 125155,
                "place": 124787
        },
        {
                "id": "362",
                "totalScore": 303,
                "persons": 390,
                "totalPersons": 125545,
                "place": 125156
        },
        {
                "id": "363",
                "totalScore": 302,
                "persons": 383,
                "totalPersons": 125928,
                "place": 125546
        },
        {
                "id": "364",
                "totalScore": 301,
                "persons": 370,
                "totalPersons": 126298,
                "place": 125929
        },
        {
                "id": "365",
                "totalScore": 300,
                "persons": 368,
                "totalPersons": 126666,
                "place": 126299
        },
        {
                "id": "366",
                "totalScore": 299,
                "persons": 333,
                "totalPersons": 126999,
                "place": 126667
        },
        {
                "id": "367",
                "totalScore": 298,
                "persons": 362,
                "totalPersons": 127361,
                "place": 127000
        },
        {
                "id": "368",
                "totalScore": 297,
                "persons": 340,
                "totalPersons": 127701,
                "place": 127362
        },
        {
                "id": "369",
                "totalScore": 296,
                "persons": 339,
                "totalPersons": 128040,
                "place": 127702
        },
        {
                "id": "370",
                "totalScore": 295,
                "persons": 313,
                "totalPersons": 128353,
                "place": 128041
        },
        {
                "id": "371",
                "totalScore": 294,
                "persons": 321,
                "totalPersons": 128674,
                "place": 128354
        },
        {
                "id": "372",
                "totalScore": 293,
                "persons": 336,
                "totalPersons": 129010,
                "place": 128675
        },
        {
                "id": "373",
                "totalScore": 292,
                "persons": 327,
                "totalPersons": 129337,
                "place": 129011
        },
        {
                "id": "374",
                "totalScore": 291,
                "persons": 322,
                "totalPersons": 129659,
                "place": 129338
        },
        {
                "id": "375",
                "totalScore": 290,
                "persons": 310,
                "totalPersons": 129969,
                "place": 129660
        },
        {
                "id": "376",
                "totalScore": 289,
                "persons": 315,
                "totalPersons": 130284,
                "place": 129970
        },
        {
                "id": "377",
                "totalScore": 288,
                "persons": 310,
                "totalPersons": 130594,
                "place": 130285
        },
        {
                "id": "378",
                "totalScore": 287,
                "persons": 286,
                "totalPersons": 130880,
                "place": 130595
        },
        {
                "id": "379",
                "totalScore": 286,
                "persons": 273,
                "totalPersons": 131153,
                "place": 130881
        },
        {
                "id": "380",
                "totalScore": 285,
                "persons": 296,
                "totalPersons": 131449,
                "place": 131154
        },
        {
                "id": "381",
                "totalScore": 284,
                "persons": 301,
                "totalPersons": 131750,
                "place": 131450
        },
        {
                "id": "382",
                "totalScore": 283,
                "persons": 289,
                "totalPersons": 132039,
                "place": 131751
        },
        {
                "id": "383",
                "totalScore": 282,
                "persons": 281,
                "totalPersons": 132320,
                "place": 132040
        },
        {
                "id": "384",
                "totalScore": 281,
                "persons": 270,
                "totalPersons": 132590,
                "place": 132321
        },
        {
                "id": "385",
                "totalScore": 280,
                "persons": 318,
                "totalPersons": 132908,
                "place": 132591
        },
        {
                "id": "386",
                "totalScore": 279,
                "persons": 293,
                "totalPersons": 133201,
                "place": 132909
        },
        {
                "id": "387",
                "totalScore": 278,
                "persons": 282,
                "totalPersons": 133483,
                "place": 133202
        },
        {
                "id": "388",
                "totalScore": 277,
                "persons": 298,
                "totalPersons": 133781,
                "place": 133484
        },
        {
                "id": "389",
                "totalScore": 276,
                "persons": 287,
                "totalPersons": 134068,
                "place": 133782
        },
        {
                "id": "390",
                "totalScore": 275,
                "persons": 297,
                "totalPersons": 134365,
                "place": 134069
        },
        {
                "id": "391",
                "totalScore": 274,
                "persons": 257,
                "totalPersons": 134622,
                "place": 134366
        },
        {
                "id": "392",
                "totalScore": 273,
                "persons": 251,
                "totalPersons": 134873,
                "place": 134623
        },
        {
                "id": "393",
                "totalScore": 272,
                "persons": 245,
                "totalPersons": 135118,
                "place": 134874
        },
        {
                "id": "394",
                "totalScore": 271,
                "persons": 249,
                "totalPersons": 135367,
                "place": 135119
        },
        {
                "id": "395",
                "totalScore": 270,
                "persons": 246,
                "totalPersons": 135613,
                "place": 135368
        },
        {
                "id": "396",
                "totalScore": 269,
                "persons": 222,
                "totalPersons": 135835,
                "place": 135614
        },
        {
                "id": "397",
                "totalScore": 268,
                "persons": 265,
                "totalPersons": 136100,
                "place": 135836
        },
        {
                "id": "398",
                "totalScore": 267,
                "persons": 255,
                "totalPersons": 136355,
                "place": 136101
        },
        {
                "id": "399",
                "totalScore": 266,
                "persons": 248,
                "totalPersons": 136603,
                "place": 136356
        },
        {
                "id": "400",
                "totalScore": 265,
                "persons": 231,
                "totalPersons": 136834,
                "place": 136604
        },
        {
                "id": "401",
                "totalScore": 264,
                "persons": 245,
                "totalPersons": 137079,
                "place": 136835
        },
        {
                "id": "402",
                "totalScore": 263,
                "persons": 257,
                "totalPersons": 137336,
                "place": 137080
        },
        {
                "id": "403",
                "totalScore": 262,
                "persons": 259,
                "totalPersons": 137595,
                "place": 137337
        },
        {
                "id": "404",
                "totalScore": 261,
                "persons": 266,
                "totalPersons": 137861,
                "place": 137596
        },
        {
                "id": "405",
                "totalScore": 260,
                "persons": 230,
                "totalPersons": 138091,
                "place": 137862
        },
        {
                "id": "406",
                "totalScore": 259,
                "persons": 234,
                "totalPersons": 138325,
                "place": 138092
        },
        {
                "id": "407",
                "totalScore": 258,
                "persons": 253,
                "totalPersons": 138578,
                "place": 138326
        },
        {
                "id": "408",
                "totalScore": 257,
                "persons": 216,
                "totalPersons": 138794,
                "place": 138579
        },
        {
                "id": "409",
                "totalScore": 256,
                "persons": 248,
                "totalPersons": 139042,
                "place": 138795
        },
        {
                "id": "410",
                "totalScore": 255,
                "persons": 219,
                "totalPersons": 139261,
                "place": 139043
        },
        {
                "id": "411",
                "totalScore": 254,
                "persons": 207,
                "totalPersons": 139468,
                "place": 139262
        },
        {
                "id": "412",
                "totalScore": 253,
                "persons": 228,
                "totalPersons": 139696,
                "place": 139469
        },
        {
                "id": "413",
                "totalScore": 252,
                "persons": 213,
                "totalPersons": 139909,
                "place": 139697
        },
        {
                "id": "414",
                "totalScore": 251,
                "persons": 240,
                "totalPersons": 140149,
                "place": 139910
        },
        {
                "id": "415",
                "totalScore": 250,
                "persons": 211,
                "totalPersons": 140360,
                "place": 140150
        },
        {
                "id": "416",
                "totalScore": 249,
                "persons": 193,
                "totalPersons": 140553,
                "place": 140361
        },
        {
                "id": "417",
                "totalScore": 248,
                "persons": 199,
                "totalPersons": 140752,
                "place": 140554
        },
        {
                "id": "418",
                "totalScore": 247,
                "persons": 189,
                "totalPersons": 140941,
                "place": 140753
        },
        {
                "id": "419",
                "totalScore": 246,
                "persons": 220,
                "totalPersons": 141161,
                "place": 140942
        },
        {
                "id": "420",
                "totalScore": 245,
                "persons": 179,
                "totalPersons": 141340,
                "place": 141162
        },
        {
                "id": "421",
                "totalScore": 244,
                "persons": 194,
                "totalPersons": 141534,
                "place": 141341
        },
        {
                "id": "422",
                "totalScore": 243,
                "persons": 199,
                "totalPersons": 141733,
                "place": 141535
        },
        {
                "id": "423",
                "totalScore": 242,
                "persons": 192,
                "totalPersons": 141925,
                "place": 141734
        },
        {
                "id": "424",
                "totalScore": 241,
                "persons": 179,
                "totalPersons": 142104,
                "place": 141926
        },
        {
                "id": "425",
                "totalScore": 240,
                "persons": 169,
                "totalPersons": 142273,
                "place": 142105
        },
        {
                "id": "426",
                "totalScore": 239,
                "persons": 166,
                "totalPersons": 142439,
                "place": 142274
        },
        {
                "id": "427",
                "totalScore": 238,
                "persons": 189,
                "totalPersons": 142628,
                "place": 142440
        },
        {
                "id": "428",
                "totalScore": 237,
                "persons": 183,
                "totalPersons": 142811,
                "place": 142629
        },
        {
                "id": "429",
                "totalScore": 236,
                "persons": 188,
                "totalPersons": 142999,
                "place": 142812
        },
        {
                "id": "430",
                "totalScore": 235,
                "persons": 166,
                "totalPersons": 143165,
                "place": 143000
        },
        {
                "id": "431",
                "totalScore": 234,
                "persons": 185,
                "totalPersons": 143350,
                "place": 143166
        },
        {
                "id": "432",
                "totalScore": 233,
                "persons": 151,
                "totalPersons": 143501,
                "place": 143351
        },
        {
                "id": "433",
                "totalScore": 232,
                "persons": 134,
                "totalPersons": 143635,
                "place": 143502
        },
        {
                "id": "434",
                "totalScore": 231,
                "persons": 168,
                "totalPersons": 143803,
                "place": 143636
        },
        {
                "id": "435",
                "totalScore": 230,
                "persons": 153,
                "totalPersons": 143956,
                "place": 143804
        },
        {
                "id": "436",
                "totalScore": 229,
                "persons": 157,
                "totalPersons": 144113,
                "place": 143957
        },
        {
                "id": "437",
                "totalScore": 228,
                "persons": 137,
                "totalPersons": 144250,
                "place": 144114
        },
        {
                "id": "438",
                "totalScore": 227,
                "persons": 152,
                "totalPersons": 144402,
                "place": 144251
        },
        {
                "id": "439",
                "totalScore": 226,
                "persons": 146,
                "totalPersons": 144548,
                "place": 144403
        },
        {
                "id": "440",
                "totalScore": 225,
                "persons": 131,
                "totalPersons": 144679,
                "place": 144549
        },
        {
                "id": "441",
                "totalScore": 224,
                "persons": 142,
                "totalPersons": 144821,
                "place": 144680
        },
        {
                "id": "442",
                "totalScore": 223,
                "persons": 124,
                "totalPersons": 144945,
                "place": 144822
        },
        {
                "id": "443",
                "totalScore": 222,
                "persons": 146,
                "totalPersons": 145091,
                "place": 144946
        },
        {
                "id": "444",
                "totalScore": 221,
                "persons": 128,
                "totalPersons": 145219,
                "place": 145092
        },
        {
                "id": "445",
                "totalScore": 220,
                "persons": 136,
                "totalPersons": 145355,
                "place": 145220
        },
        {
                "id": "446",
                "totalScore": 219,
                "persons": 129,
                "totalPersons": 145484,
                "place": 145356
        },
        {
                "id": "447",
                "totalScore": 218,
                "persons": 132,
                "totalPersons": 145616,
                "place": 145485
        },
        {
                "id": "448",
                "totalScore": 217,
                "persons": 116,
                "totalPersons": 145732,
                "place": 145617
        },
        {
                "id": "449",
                "totalScore": 216,
                "persons": 142,
                "totalPersons": 145874,
                "place": 145733
        },
        {
                "id": "450",
                "totalScore": 215,
                "persons": 125,
                "totalPersons": 145999,
                "place": 145875
        },
        {
                "id": "451",
                "totalScore": 214,
                "persons": 113,
                "totalPersons": 146112,
                "place": 146000
        },
        {
                "id": "452",
                "totalScore": 213,
                "persons": 103,
                "totalPersons": 146215,
                "place": 146113
        },
        {
                "id": "453",
                "totalScore": 212,
                "persons": 121,
                "totalPersons": 146336,
                "place": 146216
        },
        {
                "id": "454",
                "totalScore": 211,
                "persons": 114,
                "totalPersons": 146450,
                "place": 146337
        },
        {
                "id": "455",
                "totalScore": 210,
                "persons": 124,
                "totalPersons": 146574,
                "place": 146451
        },
        {
                "id": "456",
                "totalScore": 209,
                "persons": 118,
                "totalPersons": 146692,
                "place": 146575
        },
        {
                "id": "457",
                "totalScore": 208,
                "persons": 116,
                "totalPersons": 146808,
                "place": 146693
        },
        {
                "id": "458",
                "totalScore": 207,
                "persons": 103,
                "totalPersons": 146911,
                "place": 146809
        },
        {
                "id": "459",
                "totalScore": 206,
                "persons": 100,
                "totalPersons": 147011,
                "place": 146912
        },
        {
                "id": "460",
                "totalScore": 205,
                "persons": 91,
                "totalPersons": 147102,
                "place": 147012
        },
        {
                "id": "461",
                "totalScore": 204,
                "persons": 96,
                "totalPersons": 147198,
                "place": 147103
        },
        {
                "id": "462",
                "totalScore": 203,
                "persons": 107,
                "totalPersons": 147305,
                "place": 147199
        },
        {
                "id": "463",
                "totalScore": 202,
                "persons": 96,
                "totalPersons": 147401,
                "place": 147306
        },
        {
                "id": "464",
                "totalScore": 201,
                "persons": 95,
                "totalPersons": 147496,
                "place": 147402
        },
        {
                "id": "465",
                "totalScore": 200,
                "persons": 82,
                "totalPersons": 147578,
                "place": 147497
        },
        {
                "id": "466",
                "totalScore": 199,
                "persons": 96,
                "totalPersons": 147674,
                "place": 147579
        },
        {
                "id": "467",
                "totalScore": 198,
                "persons": 92,
                "totalPersons": 147766,
                "place": 147675
        },
        {
                "id": "468",
                "totalScore": 197,
                "persons": 85,
                "totalPersons": 147851,
                "place": 147767
        },
        {
                "id": "469",
                "totalScore": 196,
                "persons": 88,
                "totalPersons": 147939,
                "place": 147852
        },
        {
                "id": "470",
                "totalScore": 195,
                "persons": 73,
                "totalPersons": 148012,
                "place": 147940
        },
        {
                "id": "471",
                "totalScore": 194,
                "persons": 86,
                "totalPersons": 148098,
                "place": 148013
        },
        {
                "id": "472",
                "totalScore": 193,
                "persons": 60,
                "totalPersons": 148158,
                "place": 148099
        },
        {
                "id": "473",
                "totalScore": 192,
                "persons": 76,
                "totalPersons": 148234,
                "place": 148159
        },
        {
                "id": "474",
                "totalScore": 191,
                "persons": 62,
                "totalPersons": 148296,
                "place": 148235
        },
        {
                "id": "475",
                "totalScore": 190,
                "persons": 78,
                "totalPersons": 148374,
                "place": 148297
        },
        {
                "id": "476",
                "totalScore": 189,
                "persons": 69,
                "totalPersons": 148443,
                "place": 148375
        },
        {
                "id": "477",
                "totalScore": 188,
                "persons": 65,
                "totalPersons": 148508,
                "place": 148444
        },
        {
                "id": "478",
                "totalScore": 187,
                "persons": 65,
                "totalPersons": 148573,
                "place": 148509
        },
        {
                "id": "479",
                "totalScore": 186,
                "persons": 59,
                "totalPersons": 148632,
                "place": 148574
        },
        {
                "id": "480",
                "totalScore": 185,
                "persons": 58,
                "totalPersons": 148690,
                "place": 148633
        },
        {
                "id": "481",
                "totalScore": 184,
                "persons": 47,
                "totalPersons": 148737,
                "place": 148691
        },
        {
                "id": "482",
                "totalScore": 183,
                "persons": 55,
                "totalPersons": 148792,
                "place": 148738
        },
        {
                "id": "483",
                "totalScore": 182,
                "persons": 54,
                "totalPersons": 148846,
                "place": 148793
        },
        {
                "id": "484",
                "totalScore": 181,
                "persons": 44,
                "totalPersons": 148890,
                "place": 148847
        },
        {
                "id": "485",
                "totalScore": 180,
                "persons": 51,
                "totalPersons": 148941,
                "place": 148891
        }
]

const jsonData = JSON.stringify({ data: lishi2023List }, null, 2);

fs.writeFile('2023lishi.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing to file: ', err)
  } else {
    console.log('File has been saves')
  }
})