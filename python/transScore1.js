const fs = require('fs')
const lishiList  = [
        {
                "id": "0",
                "totalScore": 670,
                "persons": 1,
                "totalPersons": 21,
                "place": 21
        },
        {
                "id": "1",
                "totalScore": 668,
                "persons": 2,
                "totalPersons": 23,
                "place": 22
        },
        {
                "id": "2",
                "totalScore": 667,
                "persons": 3,
                "totalPersons": 26,
                "place": 24
        },
        {
                "id": "3",
                "totalScore": 666,
                "persons": 4,
                "totalPersons": 30,
                "place": 27
        },
        {
                "id": "4",
                "totalScore": 665,
                "persons": 6,
                "totalPersons": 36,
                "place": 31
        },
        {
                "id": "5",
                "totalScore": 663,
                "persons": 5,
                "totalPersons": 41,
                "place": 37
        },
        {
                "id": "6",
                "totalScore": 662,
                "persons": 2,
                "totalPersons": 43,
                "place": 42
        },
        {
                "id": "7",
                "totalScore": 661,
                "persons": 2,
                "totalPersons": 45,
                "place": 44
        },
        {
                "id": "8",
                "totalScore": 660,
                "persons": 2,
                "totalPersons": 47,
                "place": 46
        },
        {
                "id": "9",
                "totalScore": 659,
                "persons": 1,
                "totalPersons": 48,
                "place": 48
        },
        {
                "id": "10",
                "totalScore": 658,
                "persons": 9,
                "totalPersons": 57,
                "place": 49
        },
        {
                "id": "11",
                "totalScore": 657,
                "persons": 5,
                "totalPersons": 62,
                "place": 58
        },
        {
                "id": "12",
                "totalScore": 656,
                "persons": 2,
                "totalPersons": 64,
                "place": 63
        },
        {
                "id": "13",
                "totalScore": 655,
                "persons": 7,
                "totalPersons": 71,
                "place": 65
        },
        {
                "id": "14",
                "totalScore": 654,
                "persons": 7,
                "totalPersons": 78,
                "place": 72
        },
        {
                "id": "15",
                "totalScore": 653,
                "persons": 6,
                "totalPersons": 84,
                "place": 79
        },
        {
                "id": "16",
                "totalScore": 652,
                "persons": 3,
                "totalPersons": 87,
                "place": 85
        },
        {
                "id": "17",
                "totalScore": 651,
                "persons": 7,
                "totalPersons": 94,
                "place": 88
        },
        {
                "id": "18",
                "totalScore": 650,
                "persons": 3,
                "totalPersons": 97,
                "place": 95
        },
        {
                "id": "19",
                "totalScore": 649,
                "persons": 5,
                "totalPersons": 102,
                "place": 98
        },
        {
                "id": "20",
                "totalScore": 648,
                "persons": 10,
                "totalPersons": 112,
                "place": 103
        },
        {
                "id": "21",
                "totalScore": 647,
                "persons": 5,
                "totalPersons": 117,
                "place": 113
        },
        {
                "id": "22",
                "totalScore": 646,
                "persons": 7,
                "totalPersons": 124,
                "place": 118
        },
        {
                "id": "23",
                "totalScore": 645,
                "persons": 5,
                "totalPersons": 129,
                "place": 125
        },
        {
                "id": "24",
                "totalScore": 644,
                "persons": 9,
                "totalPersons": 138,
                "place": 130
        },
        {
                "id": "25",
                "totalScore": 643,
                "persons": 14,
                "totalPersons": 152,
                "place": 139
        },
        {
                "id": "26",
                "totalScore": 642,
                "persons": 14,
                "totalPersons": 166,
                "place": 153
        },
        {
                "id": "27",
                "totalScore": 641,
                "persons": 13,
                "totalPersons": 179,
                "place": 167
        },
        {
                "id": "28",
                "totalScore": 640,
                "persons": 14,
                "totalPersons": 193,
                "place": 180
        },
        {
                "id": "29",
                "totalScore": 639,
                "persons": 7,
                "totalPersons": 200,
                "place": 194
        },
        {
                "id": "30",
                "totalScore": 638,
                "persons": 13,
                "totalPersons": 213,
                "place": 201
        },
        {
                "id": "31",
                "totalScore": 637,
                "persons": 12,
                "totalPersons": 225,
                "place": 214
        },
        {
                "id": "32",
                "totalScore": 636,
                "persons": 15,
                "totalPersons": 240,
                "place": 226
        },
        {
                "id": "33",
                "totalScore": 635,
                "persons": 17,
                "totalPersons": 257,
                "place": 241
        },
        {
                "id": "34",
                "totalScore": 634,
                "persons": 9,
                "totalPersons": 266,
                "place": 258
        },
        {
                "id": "35",
                "totalScore": 633,
                "persons": 13,
                "totalPersons": 279,
                "place": 267
        },
        {
                "id": "36",
                "totalScore": 632,
                "persons": 20,
                "totalPersons": 299,
                "place": 280
        },
        {
                "id": "37",
                "totalScore": 631,
                "persons": 22,
                "totalPersons": 321,
                "place": 300
        },
        {
                "id": "38",
                "totalScore": 630,
                "persons": 20,
                "totalPersons": 341,
                "place": 322
        },
        {
                "id": "39",
                "totalScore": 629,
                "persons": 17,
                "totalPersons": 358,
                "place": 342
        },
        {
                "id": "40",
                "totalScore": 628,
                "persons": 23,
                "totalPersons": 381,
                "place": 359
        },
        {
                "id": "41",
                "totalScore": 627,
                "persons": 19,
                "totalPersons": 400,
                "place": 382
        },
        {
                "id": "42",
                "totalScore": 626,
                "persons": 21,
                "totalPersons": 421,
                "place": 401
        },
        {
                "id": "43",
                "totalScore": 625,
                "persons": 17,
                "totalPersons": 438,
                "place": 422
        },
        {
                "id": "44",
                "totalScore": 624,
                "persons": 27,
                "totalPersons": 465,
                "place": 439
        },
        {
                "id": "45",
                "totalScore": 623,
                "persons": 27,
                "totalPersons": 492,
                "place": 466
        },
        {
                "id": "46",
                "totalScore": 622,
                "persons": 28,
                "totalPersons": 520,
                "place": 493
        },
        {
                "id": "47",
                "totalScore": 621,
                "persons": 31,
                "totalPersons": 551,
                "place": 521
        },
        {
                "id": "48",
                "totalScore": 620,
                "persons": 31,
                "totalPersons": 582,
                "place": 552
        },
        {
                "id": "49",
                "totalScore": 619,
                "persons": 31,
                "totalPersons": 613,
                "place": 583
        },
        {
                "id": "50",
                "totalScore": 618,
                "persons": 28,
                "totalPersons": 641,
                "place": 614
        },
        {
                "id": "51",
                "totalScore": 617,
                "persons": 36,
                "totalPersons": 677,
                "place": 642
        },
        {
                "id": "52",
                "totalScore": 616,
                "persons": 30,
                "totalPersons": 707,
                "place": 678
        },
        {
                "id": "53",
                "totalScore": 615,
                "persons": 32,
                "totalPersons": 739,
                "place": 708
        },
        {
                "id": "54",
                "totalScore": 614,
                "persons": 24,
                "totalPersons": 763,
                "place": 740
        },
        {
                "id": "55",
                "totalScore": 613,
                "persons": 43,
                "totalPersons": 806,
                "place": 764
        },
        {
                "id": "56",
                "totalScore": 612,
                "persons": 39,
                "totalPersons": 845,
                "place": 807
        },
        {
                "id": "57",
                "totalScore": 611,
                "persons": 35,
                "totalPersons": 880,
                "place": 846
        },
        {
                "id": "58",
                "totalScore": 610,
                "persons": 49,
                "totalPersons": 929,
                "place": 881
        },
        {
                "id": "59",
                "totalScore": 609,
                "persons": 52,
                "totalPersons": 981,
                "place": 930
        },
        {
                "id": "60",
                "totalScore": 608,
                "persons": 52,
                "totalPersons": 1033,
                "place": 982
        },
        {
                "id": "61",
                "totalScore": 607,
                "persons": 45,
                "totalPersons": 1078,
                "place": 1034
        },
        {
                "id": "62",
                "totalScore": 606,
                "persons": 52,
                "totalPersons": 1130,
                "place": 1079
        },
        {
                "id": "63",
                "totalScore": 605,
                "persons": 34,
                "totalPersons": 1164,
                "place": 1131
        },
        {
                "id": "64",
                "totalScore": 604,
                "persons": 51,
                "totalPersons": 1215,
                "place": 1165
        },
        {
                "id": "65",
                "totalScore": 603,
                "persons": 36,
                "totalPersons": 1251,
                "place": 1216
        },
        {
                "id": "66",
                "totalScore": 602,
                "persons": 54,
                "totalPersons": 1305,
                "place": 1252
        },
        {
                "id": "67",
                "totalScore": 601,
                "persons": 46,
                "totalPersons": 1351,
                "place": 1306
        },
        {
                "id": "68",
                "totalScore": 600,
                "persons": 53,
                "totalPersons": 1404,
                "place": 1352
        },
        {
                "id": "69",
                "totalScore": 599,
                "persons": 51,
                "totalPersons": 1455,
                "place": 1405
        },
        {
                "id": "70",
                "totalScore": 598,
                "persons": 51,
                "totalPersons": 1506,
                "place": 1456
        },
        {
                "id": "71",
                "totalScore": 597,
                "persons": 40,
                "totalPersons": 1546,
                "place": 1507
        },
        {
                "id": "72",
                "totalScore": 596,
                "persons": 61,
                "totalPersons": 1607,
                "place": 1547
        },
        {
                "id": "73",
                "totalScore": 595,
                "persons": 66,
                "totalPersons": 1673,
                "place": 1608
        },
        {
                "id": "74",
                "totalScore": 594,
                "persons": 54,
                "totalPersons": 1727,
                "place": 1674
        },
        {
                "id": "75",
                "totalScore": 593,
                "persons": 66,
                "totalPersons": 1793,
                "place": 1728
        },
        {
                "id": "76",
                "totalScore": 592,
                "persons": 74,
                "totalPersons": 1867,
                "place": 1794
        },
        {
                "id": "77",
                "totalScore": 591,
                "persons": 74,
                "totalPersons": 1941,
                "place": 1868
        },
        {
                "id": "78",
                "totalScore": 590,
                "persons": 70,
                "totalPersons": 2011,
                "place": 1942
        },
        {
                "id": "79",
                "totalScore": 589,
                "persons": 59,
                "totalPersons": 2070,
                "place": 2012
        },
        {
                "id": "80",
                "totalScore": 588,
                "persons": 68,
                "totalPersons": 2138,
                "place": 2071
        },
        {
                "id": "81",
                "totalScore": 587,
                "persons": 73,
                "totalPersons": 2211,
                "place": 2139
        },
        {
                "id": "82",
                "totalScore": 586,
                "persons": 87,
                "totalPersons": 2298,
                "place": 2212
        },
        {
                "id": "83",
                "totalScore": 585,
                "persons": 90,
                "totalPersons": 2388,
                "place": 2299
        },
        {
                "id": "84",
                "totalScore": 584,
                "persons": 76,
                "totalPersons": 2464,
                "place": 2389
        },
        {
                "id": "85",
                "totalScore": 583,
                "persons": 91,
                "totalPersons": 2555,
                "place": 2465
        },
        {
                "id": "86",
                "totalScore": 582,
                "persons": 96,
                "totalPersons": 2651,
                "place": 2556
        },
        {
                "id": "87",
                "totalScore": 581,
                "persons": 77,
                "totalPersons": 2728,
                "place": 2652
        },
        {
                "id": "88",
                "totalScore": 580,
                "persons": 76,
                "totalPersons": 2804,
                "place": 2729
        },
        {
                "id": "89",
                "totalScore": 579,
                "persons": 97,
                "totalPersons": 2901,
                "place": 2805
        },
        {
                "id": "90",
                "totalScore": 578,
                "persons": 95,
                "totalPersons": 2996,
                "place": 2902
        },
        {
                "id": "91",
                "totalScore": 577,
                "persons": 85,
                "totalPersons": 3081,
                "place": 2997
        },
        {
                "id": "92",
                "totalScore": 576,
                "persons": 94,
                "totalPersons": 3175,
                "place": 3082
        },
        {
                "id": "93",
                "totalScore": 575,
                "persons": 101,
                "totalPersons": 3276,
                "place": 3176
        },
        {
                "id": "94",
                "totalScore": 574,
                "persons": 89,
                "totalPersons": 3365,
                "place": 3277
        },
        {
                "id": "95",
                "totalScore": 573,
                "persons": 93,
                "totalPersons": 3458,
                "place": 3366
        },
        {
                "id": "96",
                "totalScore": 572,
                "persons": 125,
                "totalPersons": 3583,
                "place": 3459
        },
        {
                "id": "97",
                "totalScore": 571,
                "persons": 95,
                "totalPersons": 3678,
                "place": 3584
        },
        {
                "id": "98",
                "totalScore": 570,
                "persons": 109,
                "totalPersons": 3787,
                "place": 3679
        },
        {
                "id": "99",
                "totalScore": 569,
                "persons": 96,
                "totalPersons": 3883,
                "place": 3788
        },
        {
                "id": "100",
                "totalScore": 568,
                "persons": 122,
                "totalPersons": 4005,
                "place": 3884
        },
        {
                "id": "101",
                "totalScore": 567,
                "persons": 113,
                "totalPersons": 4118,
                "place": 4006
        },
        {
                "id": "102",
                "totalScore": 566,
                "persons": 118,
                "totalPersons": 4236,
                "place": 4119
        },
        {
                "id": "103",
                "totalScore": 565,
                "persons": 100,
                "totalPersons": 4336,
                "place": 4237
        },
        {
                "id": "104",
                "totalScore": 564,
                "persons": 125,
                "totalPersons": 4461,
                "place": 4337
        },
        {
                "id": "105",
                "totalScore": 563,
                "persons": 130,
                "totalPersons": 4591,
                "place": 4462
        },
        {
                "id": "106",
                "totalScore": 562,
                "persons": 138,
                "totalPersons": 4729,
                "place": 4592
        },
        {
                "id": "107",
                "totalScore": 561,
                "persons": 130,
                "totalPersons": 4859,
                "place": 4730
        },
        {
                "id": "108",
                "totalScore": 560,
                "persons": 139,
                "totalPersons": 4998,
                "place": 4860
        },
        {
                "id": "109",
                "totalScore": 559,
                "persons": 122,
                "totalPersons": 5120,
                "place": 4999
        },
        {
                "id": "110",
                "totalScore": 558,
                "persons": 133,
                "totalPersons": 5253,
                "place": 5121
        },
        {
                "id": "111",
                "totalScore": 557,
                "persons": 155,
                "totalPersons": 5408,
                "place": 5254
        },
        {
                "id": "112",
                "totalScore": 556,
                "persons": 135,
                "totalPersons": 5543,
                "place": 5409
        },
        {
                "id": "113",
                "totalScore": 555,
                "persons": 141,
                "totalPersons": 5684,
                "place": 5544
        },
        {
                "id": "114",
                "totalScore": 554,
                "persons": 150,
                "totalPersons": 5834,
                "place": 5685
        },
        {
                "id": "115",
                "totalScore": 553,
                "persons": 111,
                "totalPersons": 5945,
                "place": 5835
        },
        {
                "id": "116",
                "totalScore": 552,
                "persons": 161,
                "totalPersons": 6106,
                "place": 5946
        },
        {
                "id": "117",
                "totalScore": 551,
                "persons": 151,
                "totalPersons": 6257,
                "place": 6107
        },
        {
                "id": "118",
                "totalScore": 550,
                "persons": 163,
                "totalPersons": 6420,
                "place": 6258
        },
        {
                "id": "119",
                "totalScore": 549,
                "persons": 145,
                "totalPersons": 6565,
                "place": 6421
        },
        {
                "id": "120",
                "totalScore": 548,
                "persons": 151,
                "totalPersons": 6716,
                "place": 6566
        },
        {
                "id": "121",
                "totalScore": 547,
                "persons": 165,
                "totalPersons": 6881,
                "place": 6717
        },
        {
                "id": "122",
                "totalScore": 546,
                "persons": 142,
                "totalPersons": 7023,
                "place": 6882
        },
        {
                "id": "123",
                "totalScore": 545,
                "persons": 164,
                "totalPersons": 7187,
                "place": 7024
        },
        {
                "id": "124",
                "totalScore": 544,
                "persons": 180,
                "totalPersons": 7367,
                "place": 7188
        },
        {
                "id": "125",
                "totalScore": 543,
                "persons": 147,
                "totalPersons": 7514,
                "place": 7368
        },
        {
                "id": "126",
                "totalScore": 542,
                "persons": 152,
                "totalPersons": 7666,
                "place": 7515
        },
        {
                "id": "127",
                "totalScore": 541,
                "persons": 191,
                "totalPersons": 7857,
                "place": 7667
        },
        {
                "id": "128",
                "totalScore": 540,
                "persons": 180,
                "totalPersons": 8037,
                "place": 7858
        },
        {
                "id": "129",
                "totalScore": 539,
                "persons": 162,
                "totalPersons": 8199,
                "place": 8038
        },
        {
                "id": "130",
                "totalScore": 538,
                "persons": 161,
                "totalPersons": 8360,
                "place": 8200
        },
        {
                "id": "131",
                "totalScore": 537,
                "persons": 176,
                "totalPersons": 8536,
                "place": 8361
        },
        {
                "id": "132",
                "totalScore": 536,
                "persons": 163,
                "totalPersons": 8699,
                "place": 8537
        },
        {
                "id": "133",
                "totalScore": 535,
                "persons": 191,
                "totalPersons": 8890,
                "place": 8700
        },
        {
                "id": "134",
                "totalScore": 534,
                "persons": 180,
                "totalPersons": 9070,
                "place": 8891
        },
        {
                "id": "135",
                "totalScore": 533,
                "persons": 213,
                "totalPersons": 9283,
                "place": 9071
        },
        {
                "id": "136",
                "totalScore": 532,
                "persons": 192,
                "totalPersons": 9475,
                "place": 9284
        },
        {
                "id": "137",
                "totalScore": 531,
                "persons": 211,
                "totalPersons": 9686,
                "place": 9476
        },
        {
                "id": "138",
                "totalScore": 530,
                "persons": 196,
                "totalPersons": 9882,
                "place": 9687
        },
        {
                "id": "139",
                "totalScore": 529,
                "persons": 203,
                "totalPersons": 10085,
                "place": 9883
        },
        {
                "id": "140",
                "totalScore": 528,
                "persons": 197,
                "totalPersons": 10282,
                "place": 10086
        },
        {
                "id": "141",
                "totalScore": 527,
                "persons": 204,
                "totalPersons": 10486,
                "place": 10283
        },
        {
                "id": "142",
                "totalScore": 526,
                "persons": 176,
                "totalPersons": 10662,
                "place": 10487
        },
        {
                "id": "143",
                "totalScore": 525,
                "persons": 168,
                "totalPersons": 10830,
                "place": 10663
        },
        {
                "id": "144",
                "totalScore": 524,
                "persons": 185,
                "totalPersons": 11015,
                "place": 10831
        },
        {
                "id": "145",
                "totalScore": 523,
                "persons": 194,
                "totalPersons": 11209,
                "place": 11016
        },
        {
                "id": "146",
                "totalScore": 522,
                "persons": 202,
                "totalPersons": 11411,
                "place": 11210
        },
        {
                "id": "147",
                "totalScore": 521,
                "persons": 203,
                "totalPersons": 11614,
                "place": 11412
        },
        {
                "id": "148",
                "totalScore": 520,
                "persons": 228,
                "totalPersons": 11842,
                "place": 11615
        },
        {
                "id": "149",
                "totalScore": 519,
                "persons": 208,
                "totalPersons": 12050,
                "place": 11843
        },
        {
                "id": "150",
                "totalScore": 518,
                "persons": 194,
                "totalPersons": 12244,
                "place": 12051
        },
        {
                "id": "151",
                "totalScore": 517,
                "persons": 204,
                "totalPersons": 12448,
                "place": 12245
        },
        {
                "id": "152",
                "totalScore": 516,
                "persons": 199,
                "totalPersons": 12647,
                "place": 12449
        },
        {
                "id": "153",
                "totalScore": 515,
                "persons": 212,
                "totalPersons": 12859,
                "place": 12648
        },
        {
                "id": "154",
                "totalScore": 514,
                "persons": 214,
                "totalPersons": 13073,
                "place": 12860
        },
        {
                "id": "155",
                "totalScore": 513,
                "persons": 235,
                "totalPersons": 13308,
                "place": 13074
        },
        {
                "id": "156",
                "totalScore": 512,
                "persons": 210,
                "totalPersons": 13518,
                "place": 13309
        },
        {
                "id": "157",
                "totalScore": 511,
                "persons": 233,
                "totalPersons": 13751,
                "place": 13519
        },
        {
                "id": "158",
                "totalScore": 510,
                "persons": 242,
                "totalPersons": 13993,
                "place": 13752
        },
        {
                "id": "159",
                "totalScore": 509,
                "persons": 232,
                "totalPersons": 14225,
                "place": 13994
        },
        {
                "id": "160",
                "totalScore": 508,
                "persons": 206,
                "totalPersons": 14431,
                "place": 14226
        },
        {
                "id": "161",
                "totalScore": 507,
                "persons": 237,
                "totalPersons": 14668,
                "place": 14432
        },
        {
                "id": "162",
                "totalScore": 506,
                "persons": 225,
                "totalPersons": 14893,
                "place": 14669
        },
        {
                "id": "163",
                "totalScore": 505,
                "persons": 224,
                "totalPersons": 15117,
                "place": 14894
        },
        {
                "id": "164",
                "totalScore": 504,
                "persons": 236,
                "totalPersons": 15353,
                "place": 15118
        },
        {
                "id": "165",
                "totalScore": 503,
                "persons": 273,
                "totalPersons": 15626,
                "place": 15354
        },
        {
                "id": "166",
                "totalScore": 502,
                "persons": 236,
                "totalPersons": 15862,
                "place": 15627
        },
        {
                "id": "167",
                "totalScore": 501,
                "persons": 254,
                "totalPersons": 16116,
                "place": 15863
        },
        {
                "id": "168",
                "totalScore": 500,
                "persons": 242,
                "totalPersons": 16358,
                "place": 16117
        },
        {
                "id": "169",
                "totalScore": 499,
                "persons": 260,
                "totalPersons": 16618,
                "place": 16359
        },
        {
                "id": "170",
                "totalScore": 498,
                "persons": 263,
                "totalPersons": 16881,
                "place": 16619
        },
        {
                "id": "171",
                "totalScore": 497,
                "persons": 214,
                "totalPersons": 17095,
                "place": 16882
        },
        {
                "id": "172",
                "totalScore": 496,
                "persons": 240,
                "totalPersons": 17335,
                "place": 17096
        },
        {
                "id": "173",
                "totalScore": 495,
                "persons": 252,
                "totalPersons": 17587,
                "place": 17336
        },
        {
                "id": "174",
                "totalScore": 494,
                "persons": 266,
                "totalPersons": 17853,
                "place": 17588
        },
        {
                "id": "175",
                "totalScore": 493,
                "persons": 297,
                "totalPersons": 18150,
                "place": 17854
        },
        {
                "id": "176",
                "totalScore": 492,
                "persons": 245,
                "totalPersons": 18395,
                "place": 18151
        },
        {
                "id": "177",
                "totalScore": 491,
                "persons": 267,
                "totalPersons": 18662,
                "place": 18396
        },
        {
                "id": "178",
                "totalScore": 490,
                "persons": 287,
                "totalPersons": 18949,
                "place": 18663
        },
        {
                "id": "179",
                "totalScore": 489,
                "persons": 268,
                "totalPersons": 19217,
                "place": 18950
        },
        {
                "id": "180",
                "totalScore": 488,
                "persons": 274,
                "totalPersons": 19491,
                "place": 19218
        },
        {
                "id": "181",
                "totalScore": 487,
                "persons": 264,
                "totalPersons": 19755,
                "place": 19492
        },
        {
                "id": "182",
                "totalScore": 486,
                "persons": 271,
                "totalPersons": 20026,
                "place": 19756
        },
        {
                "id": "183",
                "totalScore": 485,
                "persons": 264,
                "totalPersons": 20290,
                "place": 20027
        },
        {
                "id": "184",
                "totalScore": 484,
                "persons": 279,
                "totalPersons": 20569,
                "place": 20291
        },
        {
                "id": "185",
                "totalScore": 483,
                "persons": 266,
                "totalPersons": 20835,
                "place": 20570
        },
        {
                "id": "186",
                "totalScore": 482,
                "persons": 273,
                "totalPersons": 21108,
                "place": 20836
        },
        {
                "id": "187",
                "totalScore": 481,
                "persons": 289,
                "totalPersons": 21397,
                "place": 21109
        },
        {
                "id": "188",
                "totalScore": 480,
                "persons": 311,
                "totalPersons": 21708,
                "place": 21398
        },
        {
                "id": "189",
                "totalScore": 479,
                "persons": 285,
                "totalPersons": 21993,
                "place": 21709
        },
        {
                "id": "190",
                "totalScore": 478,
                "persons": 304,
                "totalPersons": 22297,
                "place": 21994
        },
        {
                "id": "191",
                "totalScore": 477,
                "persons": 281,
                "totalPersons": 22578,
                "place": 22298
        },
        {
                "id": "192",
                "totalScore": 476,
                "persons": 287,
                "totalPersons": 22865,
                "place": 22579
        },
        {
                "id": "193",
                "totalScore": 475,
                "persons": 287,
                "totalPersons": 23152,
                "place": 22866
        },
        {
                "id": "194",
                "totalScore": 474,
                "persons": 295,
                "totalPersons": 23447,
                "place": 23153
        },
        {
                "id": "195",
                "totalScore": 473,
                "persons": 315,
                "totalPersons": 23762,
                "place": 23448
        },
        {
                "id": "196",
                "totalScore": 472,
                "persons": 315,
                "totalPersons": 24077,
                "place": 23763
        },
        {
                "id": "197",
                "totalScore": 471,
                "persons": 306,
                "totalPersons": 24383,
                "place": 24078
        },
        {
                "id": "198",
                "totalScore": 470,
                "persons": 329,
                "totalPersons": 24712,
                "place": 24384
        },
        {
                "id": "199",
                "totalScore": 469,
                "persons": 316,
                "totalPersons": 25028,
                "place": 24713
        },
        {
                "id": "200",
                "totalScore": 468,
                "persons": 340,
                "totalPersons": 25368,
                "place": 25029
        },
        {
                "id": "201",
                "totalScore": 467,
                "persons": 321,
                "totalPersons": 25689,
                "place": 25369
        },
        {
                "id": "202",
                "totalScore": 466,
                "persons": 306,
                "totalPersons": 25995,
                "place": 25690
        },
        {
                "id": "203",
                "totalScore": 465,
                "persons": 295,
                "totalPersons": 26290,
                "place": 25996
        },
        {
                "id": "204",
                "totalScore": 464,
                "persons": 321,
                "totalPersons": 26611,
                "place": 26291
        },
        {
                "id": "205",
                "totalScore": 463,
                "persons": 309,
                "totalPersons": 26920,
                "place": 26612
        },
        {
                "id": "206",
                "totalScore": 462,
                "persons": 311,
                "totalPersons": 27231,
                "place": 26921
        },
        {
                "id": "207",
                "totalScore": 461,
                "persons": 343,
                "totalPersons": 27574,
                "place": 27232
        },
        {
                "id": "208",
                "totalScore": 460,
                "persons": 356,
                "totalPersons": 27930,
                "place": 27575
        },
        {
                "id": "209",
                "totalScore": 459,
                "persons": 367,
                "totalPersons": 28297,
                "place": 27931
        },
        {
                "id": "210",
                "totalScore": 458,
                "persons": 342,
                "totalPersons": 28639,
                "place": 28298
        },
        {
                "id": "211",
                "totalScore": 457,
                "persons": 358,
                "totalPersons": 28997,
                "place": 28640
        },
        {
                "id": "212",
                "totalScore": 456,
                "persons": 345,
                "totalPersons": 29342,
                "place": 28998
        },
        {
                "id": "213",
                "totalScore": 455,
                "persons": 333,
                "totalPersons": 29675,
                "place": 29343
        },
        {
                "id": "214",
                "totalScore": 454,
                "persons": 367,
                "totalPersons": 30042,
                "place": 29676
        },
        {
                "id": "215",
                "totalScore": 453,
                "persons": 373,
                "totalPersons": 30415,
                "place": 30043
        },
        {
                "id": "216",
                "totalScore": 452,
                "persons": 326,
                "totalPersons": 30741,
                "place": 30416
        },
        {
                "id": "217",
                "totalScore": 451,
                "persons": 368,
                "totalPersons": 31109,
                "place": 30742
        },
        {
                "id": "218",
                "totalScore": 450,
                "persons": 348,
                "totalPersons": 31457,
                "place": 31110
        },
        {
                "id": "219",
                "totalScore": 449,
                "persons": 348,
                "totalPersons": 31805,
                "place": 31458
        },
        {
                "id": "220",
                "totalScore": 448,
                "persons": 374,
                "totalPersons": 32179,
                "place": 31806
        },
        {
                "id": "221",
                "totalScore": 447,
                "persons": 380,
                "totalPersons": 32559,
                "place": 32180
        },
        {
                "id": "222",
                "totalScore": 446,
                "persons": 369,
                "totalPersons": 32928,
                "place": 32560
        },
        {
                "id": "223",
                "totalScore": 445,
                "persons": 360,
                "totalPersons": 33288,
                "place": 32929
        },
        {
                "id": "224",
                "totalScore": 444,
                "persons": 417,
                "totalPersons": 33705,
                "place": 33289
        },
        {
                "id": "225",
                "totalScore": 443,
                "persons": 401,
                "totalPersons": 34106,
                "place": 33706
        },
        {
                "id": "226",
                "totalScore": 442,
                "persons": 366,
                "totalPersons": 34472,
                "place": 34107
        },
        {
                "id": "227",
                "totalScore": 441,
                "persons": 348,
                "totalPersons": 34820,
                "place": 34473
        },
        {
                "id": "228",
                "totalScore": 440,
                "persons": 358,
                "totalPersons": 35178,
                "place": 34821
        },
        {
                "id": "229",
                "totalScore": 439,
                "persons": 345,
                "totalPersons": 35523,
                "place": 35179
        },
        {
                "id": "230",
                "totalScore": 438,
                "persons": 403,
                "totalPersons": 35926,
                "place": 35524
        },
        {
                "id": "231",
                "totalScore": 437,
                "persons": 415,
                "totalPersons": 36341,
                "place": 35927
        },
        {
                "id": "232",
                "totalScore": 436,
                "persons": 367,
                "totalPersons": 36708,
                "place": 36342
        },
        {
                "id": "233",
                "totalScore": 435,
                "persons": 390,
                "totalPersons": 37098,
                "place": 36709
        },
        {
                "id": "234",
                "totalScore": 434,
                "persons": 413,
                "totalPersons": 37511,
                "place": 37099
        },
        {
                "id": "235",
                "totalScore": 433,
                "persons": 415,
                "totalPersons": 37926,
                "place": 37512
        },
        {
                "id": "236",
                "totalScore": 432,
                "persons": 392,
                "totalPersons": 38318,
                "place": 37927
        },
        {
                "id": "237",
                "totalScore": 431,
                "persons": 371,
                "totalPersons": 38689,
                "place": 38319
        },
        {
                "id": "238",
                "totalScore": 430,
                "persons": 404,
                "totalPersons": 39093,
                "place": 38690
        },
        {
                "id": "239",
                "totalScore": 429,
                "persons": 426,
                "totalPersons": 39519,
                "place": 39094
        },
        {
                "id": "240",
                "totalScore": 428,
                "persons": 372,
                "totalPersons": 39891,
                "place": 39520
        },
        {
                "id": "241",
                "totalScore": 427,
                "persons": 398,
                "totalPersons": 40289,
                "place": 39892
        },
        {
                "id": "242",
                "totalScore": 426,
                "persons": 433,
                "totalPersons": 40722,
                "place": 40290
        },
        {
                "id": "243",
                "totalScore": 425,
                "persons": 432,
                "totalPersons": 41154,
                "place": 40723
        },
        {
                "id": "244",
                "totalScore": 424,
                "persons": 422,
                "totalPersons": 41576,
                "place": 41155
        },
        {
                "id": "245",
                "totalScore": 423,
                "persons": 420,
                "totalPersons": 41996,
                "place": 41577
        },
        {
                "id": "246",
                "totalScore": 422,
                "persons": 464,
                "totalPersons": 42460,
                "place": 41997
        },
        {
                "id": "247",
                "totalScore": 421,
                "persons": 475,
                "totalPersons": 42935,
                "place": 42461
        },
        {
                "id": "248",
                "totalScore": 420,
                "persons": 420,
                "totalPersons": 43355,
                "place": 42936
        },
        {
                "id": "249",
                "totalScore": 419,
                "persons": 439,
                "totalPersons": 43794,
                "place": 43356
        },
        {
                "id": "250",
                "totalScore": 418,
                "persons": 455,
                "totalPersons": 44249,
                "place": 43795
        },
        {
                "id": "251",
                "totalScore": 417,
                "persons": 490,
                "totalPersons": 44739,
                "place": 44250
        },
        {
                "id": "252",
                "totalScore": 416,
                "persons": 460,
                "totalPersons": 45199,
                "place": 44740
        },
        {
                "id": "253",
                "totalScore": 415,
                "persons": 449,
                "totalPersons": 45648,
                "place": 45200
        },
        {
                "id": "254",
                "totalScore": 414,
                "persons": 421,
                "totalPersons": 46069,
                "place": 45649
        },
        {
                "id": "255",
                "totalScore": 413,
                "persons": 451,
                "totalPersons": 46520,
                "place": 46070
        },
        {
                "id": "256",
                "totalScore": 412,
                "persons": 463,
                "totalPersons": 46983,
                "place": 46521
        },
        {
                "id": "257",
                "totalScore": 411,
                "persons": 466,
                "totalPersons": 47449,
                "place": 46984
        },
        {
                "id": "258",
                "totalScore": 410,
                "persons": 471,
                "totalPersons": 47920,
                "place": 47450
        },
        {
                "id": "259",
                "totalScore": 409,
                "persons": 459,
                "totalPersons": 48379,
                "place": 47921
        },
        {
                "id": "260",
                "totalScore": 408,
                "persons": 459,
                "totalPersons": 48838,
                "place": 48380
        },
        {
                "id": "261",
                "totalScore": 407,
                "persons": 503,
                "totalPersons": 49341,
                "place": 48839
        },
        {
                "id": "262",
                "totalScore": 406,
                "persons": 464,
                "totalPersons": 49805,
                "place": 49342
        },
        {
                "id": "263",
                "totalScore": 405,
                "persons": 465,
                "totalPersons": 50270,
                "place": 49806
        },
        {
                "id": "264",
                "totalScore": 404,
                "persons": 498,
                "totalPersons": 50768,
                "place": 50271
        },
        {
                "id": "265",
                "totalScore": 403,
                "persons": 504,
                "totalPersons": 51272,
                "place": 50769
        },
        {
                "id": "266",
                "totalScore": 402,
                "persons": 475,
                "totalPersons": 51747,
                "place": 51273
        },
        {
                "id": "267",
                "totalScore": 401,
                "persons": 458,
                "totalPersons": 52205,
                "place": 51748
        },
        {
                "id": "268",
                "totalScore": 400,
                "persons": 501,
                "totalPersons": 52706,
                "place": 52206
        },
        {
                "id": "269",
                "totalScore": 399,
                "persons": 512,
                "totalPersons": 53218,
                "place": 52707
        },
        {
                "id": "270",
                "totalScore": 398,
                "persons": 525,
                "totalPersons": 53743,
                "place": 53219
        },
        {
                "id": "271",
                "totalScore": 397,
                "persons": 528,
                "totalPersons": 54271,
                "place": 53744
        },
        {
                "id": "272",
                "totalScore": 396,
                "persons": 501,
                "totalPersons": 54772,
                "place": 54272
        },
        {
                "id": "273",
                "totalScore": 395,
                "persons": 499,
                "totalPersons": 55271,
                "place": 54773
        },
        {
                "id": "274",
                "totalScore": 394,
                "persons": 509,
                "totalPersons": 55780,
                "place": 55272
        },
        {
                "id": "275",
                "totalScore": 393,
                "persons": 528,
                "totalPersons": 56308,
                "place": 55781
        },
        {
                "id": "276",
                "totalScore": 392,
                "persons": 498,
                "totalPersons": 56806,
                "place": 56309
        },
        {
                "id": "277",
                "totalScore": 391,
                "persons": 536,
                "totalPersons": 57342,
                "place": 56807
        },
        {
                "id": "278",
                "totalScore": 390,
                "persons": 523,
                "totalPersons": 57865,
                "place": 57343
        },
        {
                "id": "279",
                "totalScore": 389,
                "persons": 548,
                "totalPersons": 58413,
                "place": 57866
        },
        {
                "id": "280",
                "totalScore": 388,
                "persons": 518,
                "totalPersons": 58931,
                "place": 58414
        },
        {
                "id": "281",
                "totalScore": 387,
                "persons": 501,
                "totalPersons": 59432,
                "place": 58932
        },
        {
                "id": "282",
                "totalScore": 386,
                "persons": 536,
                "totalPersons": 59968,
                "place": 59433
        },
        {
                "id": "283",
                "totalScore": 385,
                "persons": 517,
                "totalPersons": 60485,
                "place": 59969
        },
        {
                "id": "284",
                "totalScore": 384,
                "persons": 546,
                "totalPersons": 61031,
                "place": 60486
        },
        {
                "id": "285",
                "totalScore": 383,
                "persons": 523,
                "totalPersons": 61554,
                "place": 61032
        },
        {
                "id": "286",
                "totalScore": 382,
                "persons": 531,
                "totalPersons": 62085,
                "place": 61555
        },
        {
                "id": "287",
                "totalScore": 381,
                "persons": 560,
                "totalPersons": 62645,
                "place": 62086
        },
        {
                "id": "288",
                "totalScore": 380,
                "persons": 557,
                "totalPersons": 63202,
                "place": 62646
        },
        {
                "id": "289",
                "totalScore": 379,
                "persons": 496,
                "totalPersons": 63698,
                "place": 63203
        },
        {
                "id": "290",
                "totalScore": 378,
                "persons": 565,
                "totalPersons": 64263,
                "place": 63699
        },
        {
                "id": "291",
                "totalScore": 377,
                "persons": 536,
                "totalPersons": 64799,
                "place": 64264
        },
        {
                "id": "292",
                "totalScore": 376,
                "persons": 582,
                "totalPersons": 65381,
                "place": 64800
        },
        {
                "id": "293",
                "totalScore": 375,
                "persons": 552,
                "totalPersons": 65933,
                "place": 65382
        },
        {
                "id": "294",
                "totalScore": 374,
                "persons": 583,
                "totalPersons": 66516,
                "place": 65934
        },
        {
                "id": "295",
                "totalScore": 373,
                "persons": 585,
                "totalPersons": 67101,
                "place": 66517
        },
        {
                "id": "296",
                "totalScore": 372,
                "persons": 558,
                "totalPersons": 67659,
                "place": 67102
        },
        {
                "id": "297",
                "totalScore": 371,
                "persons": 537,
                "totalPersons": 68196,
                "place": 67660
        },
        {
                "id": "298",
                "totalScore": 370,
                "persons": 546,
                "totalPersons": 68742,
                "place": 68197
        },
        {
                "id": "299",
                "totalScore": 369,
                "persons": 553,
                "totalPersons": 69295,
                "place": 68743
        },
        {
                "id": "300",
                "totalScore": 368,
                "persons": 552,
                "totalPersons": 69847,
                "place": 69296
        },
        {
                "id": "301",
                "totalScore": 367,
                "persons": 572,
                "totalPersons": 70419,
                "place": 69848
        },
        {
                "id": "302",
                "totalScore": 366,
                "persons": 561,
                "totalPersons": 70980,
                "place": 70420
        },
        {
                "id": "303",
                "totalScore": 365,
                "persons": 606,
                "totalPersons": 71586,
                "place": 70981
        },
        {
                "id": "304",
                "totalScore": 364,
                "persons": 576,
                "totalPersons": 72162,
                "place": 71587
        },
        {
                "id": "305",
                "totalScore": 363,
                "persons": 563,
                "totalPersons": 72725,
                "place": 72163
        },
        {
                "id": "306",
                "totalScore": 362,
                "persons": 578,
                "totalPersons": 73303,
                "place": 72726
        },
        {
                "id": "307",
                "totalScore": 361,
                "persons": 602,
                "totalPersons": 73905,
                "place": 73304
        },
        {
                "id": "308",
                "totalScore": 360,
                "persons": 554,
                "totalPersons": 74459,
                "place": 73906
        },
        {
                "id": "309",
                "totalScore": 359,
                "persons": 573,
                "totalPersons": 75032,
                "place": 74460
        },
        {
                "id": "310",
                "totalScore": 358,
                "persons": 568,
                "totalPersons": 75600,
                "place": 75033
        },
        {
                "id": "311",
                "totalScore": 357,
                "persons": 572,
                "totalPersons": 76172,
                "place": 75601
        },
        {
                "id": "312",
                "totalScore": 356,
                "persons": 547,
                "totalPersons": 76719,
                "place": 76173
        },
        {
                "id": "313",
                "totalScore": 355,
                "persons": 579,
                "totalPersons": 77298,
                "place": 76720
        },
        {
                "id": "314",
                "totalScore": 354,
                "persons": 556,
                "totalPersons": 77854,
                "place": 77299
        },
        {
                "id": "315",
                "totalScore": 353,
                "persons": 591,
                "totalPersons": 78445,
                "place": 77855
        },
        {
                "id": "316",
                "totalScore": 352,
                "persons": 632,
                "totalPersons": 79077,
                "place": 78446
        },
        {
                "id": "317",
                "totalScore": 351,
                "persons": 614,
                "totalPersons": 79691,
                "place": 79078
        },
        {
                "id": "318",
                "totalScore": 350,
                "persons": 580,
                "totalPersons": 80271,
                "place": 79692
        },
        {
                "id": "319",
                "totalScore": 349,
                "persons": 561,
                "totalPersons": 80832,
                "place": 80272
        },
        {
                "id": "320",
                "totalScore": 348,
                "persons": 621,
                "totalPersons": 81453,
                "place": 80833
        },
        {
                "id": "321",
                "totalScore": 347,
                "persons": 575,
                "totalPersons": 82028,
                "place": 81454
        },
        {
                "id": "322",
                "totalScore": 346,
                "persons": 563,
                "totalPersons": 82591,
                "place": 82029
        },
        {
                "id": "323",
                "totalScore": 345,
                "persons": 608,
                "totalPersons": 83199,
                "place": 82592
        },
        {
                "id": "324",
                "totalScore": 344,
                "persons": 545,
                "totalPersons": 83744,
                "place": 83200
        },
        {
                "id": "325",
                "totalScore": 343,
                "persons": 585,
                "totalPersons": 84329,
                "place": 83745
        },
        {
                "id": "326",
                "totalScore": 342,
                "persons": 592,
                "totalPersons": 84921,
                "place": 84330
        },
        {
                "id": "327",
                "totalScore": 341,
                "persons": 531,
                "totalPersons": 85452,
                "place": 84922
        },
        {
                "id": "328",
                "totalScore": 340,
                "persons": 552,
                "totalPersons": 86004,
                "place": 85453
        },
        {
                "id": "329",
                "totalScore": 339,
                "persons": 579,
                "totalPersons": 86583,
                "place": 86005
        },
        {
                "id": "330",
                "totalScore": 338,
                "persons": 560,
                "totalPersons": 87143,
                "place": 86584
        },
        {
                "id": "331",
                "totalScore": 337,
                "persons": 548,
                "totalPersons": 87691,
                "place": 87144
        },
        {
                "id": "332",
                "totalScore": 336,
                "persons": 568,
                "totalPersons": 88259,
                "place": 87692
        },
        {
                "id": "333",
                "totalScore": 335,
                "persons": 542,
                "totalPersons": 88801,
                "place": 88260
        },
        {
                "id": "334",
                "totalScore": 334,
                "persons": 523,
                "totalPersons": 89324,
                "place": 88802
        },
        {
                "id": "335",
                "totalScore": 333,
                "persons": 534,
                "totalPersons": 89858,
                "place": 89325
        },
        {
                "id": "336",
                "totalScore": 332,
                "persons": 531,
                "totalPersons": 90389,
                "place": 89859
        },
        {
                "id": "337",
                "totalScore": 331,
                "persons": 560,
                "totalPersons": 90949,
                "place": 90390
        },
        {
                "id": "338",
                "totalScore": 330,
                "persons": 503,
                "totalPersons": 91452,
                "place": 90950
        },
        {
                "id": "339",
                "totalScore": 329,
                "persons": 554,
                "totalPersons": 92006,
                "place": 91453
        },
        {
                "id": "340",
                "totalScore": 328,
                "persons": 542,
                "totalPersons": 92548,
                "place": 92007
        },
        {
                "id": "341",
                "totalScore": 327,
                "persons": 567,
                "totalPersons": 93115,
                "place": 92549
        },
        {
                "id": "342",
                "totalScore": 326,
                "persons": 559,
                "totalPersons": 93674,
                "place": 93116
        },
        {
                "id": "343",
                "totalScore": 325,
                "persons": 503,
                "totalPersons": 94177,
                "place": 93675
        },
        {
                "id": "344",
                "totalScore": 324,
                "persons": 554,
                "totalPersons": 94731,
                "place": 94178
        },
        {
                "id": "345",
                "totalScore": 323,
                "persons": 512,
                "totalPersons": 95243,
                "place": 94732
        },
        {
                "id": "346",
                "totalScore": 322,
                "persons": 512,
                "totalPersons": 95755,
                "place": 95244
        },
        {
                "id": "347",
                "totalScore": 321,
                "persons": 525,
                "totalPersons": 96280,
                "place": 95756
        },
        {
                "id": "348",
                "totalScore": 320,
                "persons": 533,
                "totalPersons": 96813,
                "place": 96281
        },
        {
                "id": "349",
                "totalScore": 319,
                "persons": 523,
                "totalPersons": 97336,
                "place": 96814
        },
        {
                "id": "350",
                "totalScore": 318,
                "persons": 475,
                "totalPersons": 97811,
                "place": 97337
        },
        {
                "id": "351",
                "totalScore": 317,
                "persons": 529,
                "totalPersons": 98340,
                "place": 97812
        },
        {
                "id": "352",
                "totalScore": 316,
                "persons": 458,
                "totalPersons": 98798,
                "place": 98341
        },
        {
                "id": "353",
                "totalScore": 315,
                "persons": 513,
                "totalPersons": 99311,
                "place": 98799
        },
        {
                "id": "354",
                "totalScore": 314,
                "persons": 452,
                "totalPersons": 99763,
                "place": 99312
        },
        {
                "id": "355",
                "totalScore": 313,
                "persons": 487,
                "totalPersons": 100250,
                "place": 99764
        },
        {
                "id": "356",
                "totalScore": 312,
                "persons": 455,
                "totalPersons": 100705,
                "place": 100251
        },
        {
                "id": "357",
                "totalScore": 311,
                "persons": 432,
                "totalPersons": 101137,
                "place": 100706
        },
        {
                "id": "358",
                "totalScore": 310,
                "persons": 491,
                "totalPersons": 101628,
                "place": 101138
        },
        {
                "id": "359",
                "totalScore": 309,
                "persons": 433,
                "totalPersons": 102061,
                "place": 101629
        },
        {
                "id": "360",
                "totalScore": 308,
                "persons": 473,
                "totalPersons": 102534,
                "place": 102062
        },
        {
                "id": "361",
                "totalScore": 307,
                "persons": 474,
                "totalPersons": 103008,
                "place": 102535
        },
        {
                "id": "362",
                "totalScore": 306,
                "persons": 440,
                "totalPersons": 103448,
                "place": 103009
        },
        {
                "id": "363",
                "totalScore": 305,
                "persons": 451,
                "totalPersons": 103899,
                "place": 103449
        },
        {
                "id": "364",
                "totalScore": 304,
                "persons": 453,
                "totalPersons": 104352,
                "place": 103900
        },
        {
                "id": "365",
                "totalScore": 303,
                "persons": 429,
                "totalPersons": 104781,
                "place": 104353
        },
        {
                "id": "366",
                "totalScore": 302,
                "persons": 424,
                "totalPersons": 105205,
                "place": 104782
        },
        {
                "id": "367",
                "totalScore": 301,
                "persons": 406,
                "totalPersons": 105611,
                "place": 105206
        },
        {
                "id": "368",
                "totalScore": 300,
                "persons": 477,
                "totalPersons": 106088,
                "place": 105612
        },
        {
                "id": "369",
                "totalScore": 299,
                "persons": 407,
                "totalPersons": 106495,
                "place": 106089
        },
        {
                "id": "370",
                "totalScore": 298,
                "persons": 401,
                "totalPersons": 106896,
                "place": 106496
        },
        {
                "id": "371",
                "totalScore": 297,
                "persons": 426,
                "totalPersons": 107322,
                "place": 106897
        },
        {
                "id": "372",
                "totalScore": 296,
                "persons": 416,
                "totalPersons": 107738,
                "place": 107323
        },
        {
                "id": "373",
                "totalScore": 295,
                "persons": 401,
                "totalPersons": 108139,
                "place": 107739
        },
        {
                "id": "374",
                "totalScore": 294,
                "persons": 398,
                "totalPersons": 108537,
                "place": 108140
        },
        {
                "id": "375",
                "totalScore": 293,
                "persons": 397,
                "totalPersons": 108934,
                "place": 108538
        },
        {
                "id": "376",
                "totalScore": 292,
                "persons": 416,
                "totalPersons": 109350,
                "place": 108935
        },
        {
                "id": "377",
                "totalScore": 291,
                "persons": 380,
                "totalPersons": 109730,
                "place": 109351
        },
        {
                "id": "378",
                "totalScore": 290,
                "persons": 401,
                "totalPersons": 110131,
                "place": 109731
        },
        {
                "id": "379",
                "totalScore": 289,
                "persons": 377,
                "totalPersons": 110508,
                "place": 110132
        },
        {
                "id": "380",
                "totalScore": 288,
                "persons": 386,
                "totalPersons": 110894,
                "place": 110509
        },
        {
                "id": "381",
                "totalScore": 287,
                "persons": 354,
                "totalPersons": 111248,
                "place": 110895
        },
        {
                "id": "382",
                "totalScore": 286,
                "persons": 375,
                "totalPersons": 111623,
                "place": 111249
        },
        {
                "id": "383",
                "totalScore": 285,
                "persons": 349,
                "totalPersons": 111972,
                "place": 111624
        },
        {
                "id": "384",
                "totalScore": 284,
                "persons": 393,
                "totalPersons": 112365,
                "place": 111973
        },
        {
                "id": "385",
                "totalScore": 283,
                "persons": 328,
                "totalPersons": 112693,
                "place": 112366
        },
        {
                "id": "386",
                "totalScore": 282,
                "persons": 360,
                "totalPersons": 113053,
                "place": 112694
        },
        {
                "id": "387",
                "totalScore": 281,
                "persons": 350,
                "totalPersons": 113403,
                "place": 113054
        },
        {
                "id": "388",
                "totalScore": 280,
                "persons": 324,
                "totalPersons": 113727,
                "place": 113404
        },
        {
                "id": "389",
                "totalScore": 279,
                "persons": 320,
                "totalPersons": 114047,
                "place": 113728
        },
        {
                "id": "390",
                "totalScore": 278,
                "persons": 326,
                "totalPersons": 114373,
                "place": 114048
        },
        {
                "id": "391",
                "totalScore": 277,
                "persons": 309,
                "totalPersons": 114682,
                "place": 114374
        },
        {
                "id": "392",
                "totalScore": 276,
                "persons": 301,
                "totalPersons": 114983,
                "place": 114683
        },
        {
                "id": "393",
                "totalScore": 275,
                "persons": 325,
                "totalPersons": 115308,
                "place": 114984
        },
        {
                "id": "394",
                "totalScore": 274,
                "persons": 298,
                "totalPersons": 115606,
                "place": 115309
        },
        {
                "id": "395",
                "totalScore": 273,
                "persons": 297,
                "totalPersons": 115903,
                "place": 115607
        },
        {
                "id": "396",
                "totalScore": 272,
                "persons": 299,
                "totalPersons": 116202,
                "place": 115904
        },
        {
                "id": "397",
                "totalScore": 271,
                "persons": 315,
                "totalPersons": 116517,
                "place": 116203
        },
        {
                "id": "398",
                "totalScore": 270,
                "persons": 309,
                "totalPersons": 116826,
                "place": 116518
        },
        {
                "id": "399",
                "totalScore": 269,
                "persons": 312,
                "totalPersons": 117138,
                "place": 116827
        },
        {
                "id": "400",
                "totalScore": 268,
                "persons": 298,
                "totalPersons": 117436,
                "place": 117139
        },
        {
                "id": "401",
                "totalScore": 267,
                "persons": 261,
                "totalPersons": 117697,
                "place": 117437
        },
        {
                "id": "402",
                "totalScore": 266,
                "persons": 256,
                "totalPersons": 117953,
                "place": 117698
        },
        {
                "id": "403",
                "totalScore": 265,
                "persons": 269,
                "totalPersons": 118222,
                "place": 117954
        },
        {
                "id": "404",
                "totalScore": 264,
                "persons": 242,
                "totalPersons": 118464,
                "place": 118223
        },
        {
                "id": "405",
                "totalScore": 263,
                "persons": 240,
                "totalPersons": 118704,
                "place": 118465
        },
        {
                "id": "406",
                "totalScore": 262,
                "persons": 216,
                "totalPersons": 118920,
                "place": 118705
        },
        {
                "id": "407",
                "totalScore": 261,
                "persons": 271,
                "totalPersons": 119191,
                "place": 118921
        },
        {
                "id": "408",
                "totalScore": 260,
                "persons": 225,
                "totalPersons": 119416,
                "place": 119192
        },
        {
                "id": "409",
                "totalScore": 259,
                "persons": 242,
                "totalPersons": 119658,
                "place": 119417
        },
        {
                "id": "410",
                "totalScore": 258,
                "persons": 246,
                "totalPersons": 119904,
                "place": 119659
        },
        {
                "id": "411",
                "totalScore": 257,
                "persons": 239,
                "totalPersons": 120143,
                "place": 119905
        },
        {
                "id": "412",
                "totalScore": 256,
                "persons": 242,
                "totalPersons": 120385,
                "place": 120144
        },
        {
                "id": "413",
                "totalScore": 255,
                "persons": 209,
                "totalPersons": 120594,
                "place": 120386
        },
        {
                "id": "414",
                "totalScore": 254,
                "persons": 236,
                "totalPersons": 120830,
                "place": 120595
        },
        {
                "id": "415",
                "totalScore": 253,
                "persons": 207,
                "totalPersons": 121037,
                "place": 120831
        },
        {
                "id": "416",
                "totalScore": 252,
                "persons": 225,
                "totalPersons": 121262,
                "place": 121038
        },
        {
                "id": "417",
                "totalScore": 251,
                "persons": 232,
                "totalPersons": 121494,
                "place": 121263
        },
        {
                "id": "418",
                "totalScore": 250,
                "persons": 221,
                "totalPersons": 121715,
                "place": 121495
        },
        {
                "id": "419",
                "totalScore": 249,
                "persons": 241,
                "totalPersons": 121956,
                "place": 121716
        },
        {
                "id": "420",
                "totalScore": 248,
                "persons": 218,
                "totalPersons": 122174,
                "place": 121957
        },
        {
                "id": "421",
                "totalScore": 247,
                "persons": 201,
                "totalPersons": 122375,
                "place": 122175
        },
        {
                "id": "422",
                "totalScore": 246,
                "persons": 177,
                "totalPersons": 122552,
                "place": 122376
        },
        {
                "id": "423",
                "totalScore": 245,
                "persons": 181,
                "totalPersons": 122733,
                "place": 122553
        },
        {
                "id": "424",
                "totalScore": 244,
                "persons": 187,
                "totalPersons": 122920,
                "place": 122734
        },
        {
                "id": "425",
                "totalScore": 243,
                "persons": 214,
                "totalPersons": 123134,
                "place": 122921
        },
        {
                "id": "426",
                "totalScore": 242,
                "persons": 183,
                "totalPersons": 123317,
                "place": 123135
        },
        {
                "id": "427",
                "totalScore": 241,
                "persons": 169,
                "totalPersons": 123486,
                "place": 123318
        },
        {
                "id": "428",
                "totalScore": 240,
                "persons": 186,
                "totalPersons": 123672,
                "place": 123487
        },
        {
                "id": "429",
                "totalScore": 239,
                "persons": 154,
                "totalPersons": 123826,
                "place": 123673
        },
        {
                "id": "430",
                "totalScore": 238,
                "persons": 181,
                "totalPersons": 124007,
                "place": 123827
        },
        {
                "id": "431",
                "totalScore": 237,
                "persons": 201,
                "totalPersons": 124208,
                "place": 124008
        },
        {
                "id": "432",
                "totalScore": 236,
                "persons": 146,
                "totalPersons": 124354,
                "place": 124209
        },
        {
                "id": "433",
                "totalScore": 235,
                "persons": 188,
                "totalPersons": 124542,
                "place": 124355
        },
        {
                "id": "434",
                "totalScore": 234,
                "persons": 156,
                "totalPersons": 124698,
                "place": 124543
        },
        {
                "id": "435",
                "totalScore": 233,
                "persons": 172,
                "totalPersons": 124870,
                "place": 124699
        },
        {
                "id": "436",
                "totalScore": 232,
                "persons": 157,
                "totalPersons": 125027,
                "place": 124871
        },
        {
                "id": "437",
                "totalScore": 231,
                "persons": 142,
                "totalPersons": 125169,
                "place": 125028
        },
        {
                "id": "438",
                "totalScore": 230,
                "persons": 150,
                "totalPersons": 125319,
                "place": 125170
        },
        {
                "id": "439",
                "totalScore": 229,
                "persons": 147,
                "totalPersons": 125466,
                "place": 125320
        },
        {
                "id": "440",
                "totalScore": 228,
                "persons": 103,
                "totalPersons": 125569,
                "place": 125467
        },
        {
                "id": "441",
                "totalScore": 227,
                "persons": 142,
                "totalPersons": 125711,
                "place": 125570
        },
        {
                "id": "442",
                "totalScore": 226,
                "persons": 136,
                "totalPersons": 125847,
                "place": 125712
        },
        {
                "id": "443",
                "totalScore": 225,
                "persons": 132,
                "totalPersons": 125979,
                "place": 125848
        },
        {
                "id": "444",
                "totalScore": 224,
                "persons": 128,
                "totalPersons": 126107,
                "place": 125980
        },
        {
                "id": "445",
                "totalScore": 223,
                "persons": 139,
                "totalPersons": 126246,
                "place": 126108
        },
        {
                "id": "446",
                "totalScore": 222,
                "persons": 113,
                "totalPersons": 126359,
                "place": 126247
        },
        {
                "id": "447",
                "totalScore": 221,
                "persons": 99,
                "totalPersons": 126458,
                "place": 126360
        },
        {
                "id": "448",
                "totalScore": 220,
                "persons": 98,
                "totalPersons": 126556,
                "place": 126459
        },
        {
                "id": "449",
                "totalScore": 219,
                "persons": 92,
                "totalPersons": 126648,
                "place": 126557
        },
        {
                "id": "450",
                "totalScore": 218,
                "persons": 110,
                "totalPersons": 126758,
                "place": 126649
        },
        {
                "id": "451",
                "totalScore": 217,
                "persons": 106,
                "totalPersons": 126864,
                "place": 126759
        },
        {
                "id": "452",
                "totalScore": 216,
                "persons": 93,
                "totalPersons": 126957,
                "place": 126865
        },
        {
                "id": "453",
                "totalScore": 215,
                "persons": 92,
                "totalPersons": 127049,
                "place": 126958
        },
        {
                "id": "454",
                "totalScore": 214,
                "persons": 100,
                "totalPersons": 127149,
                "place": 127050
        },
        {
                "id": "455",
                "totalScore": 213,
                "persons": 85,
                "totalPersons": 127234,
                "place": 127150
        },
        {
                "id": "456",
                "totalScore": 212,
                "persons": 94,
                "totalPersons": 127328,
                "place": 127235
        },
        {
                "id": "457",
                "totalScore": 211,
                "persons": 104,
                "totalPersons": 127432,
                "place": 127329
        },
        {
                "id": "458",
                "totalScore": 210,
                "persons": 90,
                "totalPersons": 127522,
                "place": 127433
        },
        {
                "id": "459",
                "totalScore": 209,
                "persons": 79,
                "totalPersons": 127601,
                "place": 127523
        },
        {
                "id": "460",
                "totalScore": 208,
                "persons": 94,
                "totalPersons": 127695,
                "place": 127602
        },
        {
                "id": "461",
                "totalScore": 207,
                "persons": 78,
                "totalPersons": 127773,
                "place": 127696
        },
        {
                "id": "462",
                "totalScore": 206,
                "persons": 74,
                "totalPersons": 127847,
                "place": 127774
        },
        {
                "id": "463",
                "totalScore": 205,
                "persons": 71,
                "totalPersons": 127918,
                "place": 127848
        },
        {
                "id": "464",
                "totalScore": 204,
                "persons": 76,
                "totalPersons": 127994,
                "place": 127919
        },
        {
                "id": "465",
                "totalScore": 203,
                "persons": 77,
                "totalPersons": 128071,
                "place": 127995
        },
        {
                "id": "466",
                "totalScore": 202,
                "persons": 62,
                "totalPersons": 128133,
                "place": 128072
        },
        {
                "id": "467",
                "totalScore": 201,
                "persons": 72,
                "totalPersons": 128205,
                "place": 128134
        },
        {
                "id": "468",
                "totalScore": 200,
                "persons": 73,
                "totalPersons": 128278,
                "place": 128206
        }
]
const wuliList = [
  {
          "id": "0",
          "totalScore": 686,
          "persons": 6,
          "totalPersons": 26,
          "place": 21
  },
  {
          "id": "1",
          "totalScore": 685,
          "persons": 3,
          "totalPersons": 29,
          "place": 27
  },
  {
          "id": "2",
          "totalScore": 684,
          "persons": 5,
          "totalPersons": 34,
          "place": 30
  },
  {
          "id": "3",
          "totalScore": 683,
          "persons": 7,
          "totalPersons": 41,
          "place": 35
  },
  {
          "id": "4",
          "totalScore": 682,
          "persons": 10,
          "totalPersons": 51,
          "place": 42
  },
  {
          "id": "5",
          "totalScore": 681,
          "persons": 6,
          "totalPersons": 57,
          "place": 52
  },
  {
          "id": "6",
          "totalScore": 680,
          "persons": 7,
          "totalPersons": 64,
          "place": 58
  },
  {
          "id": "7",
          "totalScore": 679,
          "persons": 9,
          "totalPersons": 73,
          "place": 65
  },
  {
          "id": "8",
          "totalScore": 678,
          "persons": 11,
          "totalPersons": 84,
          "place": 74
  },
  {
          "id": "9",
          "totalScore": 677,
          "persons": 11,
          "totalPersons": 95,
          "place": 85
  },
  {
          "id": "10",
          "totalScore": 676,
          "persons": 9,
          "totalPersons": 104,
          "place": 96
  },
  {
          "id": "11",
          "totalScore": 675,
          "persons": 12,
          "totalPersons": 116,
          "place": 105
  },
  {
          "id": "12",
          "totalScore": 674,
          "persons": 15,
          "totalPersons": 131,
          "place": 117
  },
  {
          "id": "13",
          "totalScore": 673,
          "persons": 9,
          "totalPersons": 140,
          "place": 132
  },
  {
          "id": "14",
          "totalScore": 672,
          "persons": 22,
          "totalPersons": 162,
          "place": 141
  },
  {
          "id": "15",
          "totalScore": 671,
          "persons": 16,
          "totalPersons": 178,
          "place": 163
  },
  {
          "id": "16",
          "totalScore": 670,
          "persons": 20,
          "totalPersons": 198,
          "place": 179
  },
  {
          "id": "17",
          "totalScore": 669,
          "persons": 16,
          "totalPersons": 214,
          "place": 199
  },
  {
          "id": "18",
          "totalScore": 668,
          "persons": 20,
          "totalPersons": 234,
          "place": 215
  },
  {
          "id": "19",
          "totalScore": 667,
          "persons": 13,
          "totalPersons": 247,
          "place": 235
  },
  {
          "id": "20",
          "totalScore": 666,
          "persons": 22,
          "totalPersons": 269,
          "place": 248
  },
  {
          "id": "21",
          "totalScore": 665,
          "persons": 21,
          "totalPersons": 290,
          "place": 270
  },
  {
          "id": "22",
          "totalScore": 664,
          "persons": 23,
          "totalPersons": 313,
          "place": 291
  },
  {
          "id": "23",
          "totalScore": 663,
          "persons": 32,
          "totalPersons": 345,
          "place": 314
  },
  {
          "id": "24",
          "totalScore": 662,
          "persons": 21,
          "totalPersons": 366,
          "place": 346
  },
  {
          "id": "25",
          "totalScore": 661,
          "persons": 31,
          "totalPersons": 397,
          "place": 367
  },
  {
          "id": "26",
          "totalScore": 660,
          "persons": 38,
          "totalPersons": 435,
          "place": 398
  },
  {
          "id": "27",
          "totalScore": 659,
          "persons": 38,
          "totalPersons": 473,
          "place": 436
  },
  {
          "id": "28",
          "totalScore": 658,
          "persons": 34,
          "totalPersons": 507,
          "place": 474
  },
  {
          "id": "29",
          "totalScore": 657,
          "persons": 28,
          "totalPersons": 535,
          "place": 508
  },
  {
          "id": "30",
          "totalScore": 656,
          "persons": 33,
          "totalPersons": 568,
          "place": 536
  },
  {
          "id": "31",
          "totalScore": 655,
          "persons": 41,
          "totalPersons": 609,
          "place": 569
  },
  {
          "id": "32",
          "totalScore": 654,
          "persons": 50,
          "totalPersons": 659,
          "place": 610
  },
  {
          "id": "33",
          "totalScore": 653,
          "persons": 52,
          "totalPersons": 711,
          "place": 660
  },
  {
          "id": "34",
          "totalScore": 652,
          "persons": 48,
          "totalPersons": 759,
          "place": 712
  },
  {
          "id": "35",
          "totalScore": 651,
          "persons": 42,
          "totalPersons": 801,
          "place": 760
  },
  {
          "id": "36",
          "totalScore": 650,
          "persons": 62,
          "totalPersons": 863,
          "place": 802
  },
  {
          "id": "37",
          "totalScore": 649,
          "persons": 44,
          "totalPersons": 907,
          "place": 864
  },
  {
          "id": "38",
          "totalScore": 648,
          "persons": 49,
          "totalPersons": 956,
          "place": 908
  },
  {
          "id": "39",
          "totalScore": 647,
          "persons": 56,
          "totalPersons": 1012,
          "place": 957
  },
  {
          "id": "40",
          "totalScore": 646,
          "persons": 56,
          "totalPersons": 1068,
          "place": 1013
  },
  {
          "id": "41",
          "totalScore": 645,
          "persons": 79,
          "totalPersons": 1147,
          "place": 1069
  },
  {
          "id": "42",
          "totalScore": 644,
          "persons": 50,
          "totalPersons": 1197,
          "place": 1148
  },
  {
          "id": "43",
          "totalScore": 643,
          "persons": 60,
          "totalPersons": 1257,
          "place": 1198
  },
  {
          "id": "44",
          "totalScore": 642,
          "persons": 67,
          "totalPersons": 1324,
          "place": 1258
  },
  {
          "id": "45",
          "totalScore": 641,
          "persons": 69,
          "totalPersons": 1393,
          "place": 1325
  },
  {
          "id": "46",
          "totalScore": 640,
          "persons": 62,
          "totalPersons": 1455,
          "place": 1394
  },
  {
          "id": "47",
          "totalScore": 639,
          "persons": 68,
          "totalPersons": 1523,
          "place": 1456
  },
  {
          "id": "48",
          "totalScore": 638,
          "persons": 83,
          "totalPersons": 1606,
          "place": 1524
  },
  {
          "id": "49",
          "totalScore": 637,
          "persons": 88,
          "totalPersons": 1694,
          "place": 1607
  },
  {
          "id": "50",
          "totalScore": 636,
          "persons": 99,
          "totalPersons": 1793,
          "place": 1695
  },
  {
          "id": "51",
          "totalScore": 635,
          "persons": 107,
          "totalPersons": 1900,
          "place": 1794
  },
  {
          "id": "52",
          "totalScore": 634,
          "persons": 83,
          "totalPersons": 1983,
          "place": 1901
  },
  {
          "id": "53",
          "totalScore": 633,
          "persons": 99,
          "totalPersons": 2082,
          "place": 1984
  },
  {
          "id": "54",
          "totalScore": 632,
          "persons": 110,
          "totalPersons": 2192,
          "place": 2083
  },
  {
          "id": "55",
          "totalScore": 631,
          "persons": 99,
          "totalPersons": 2291,
          "place": 2193
  },
  {
          "id": "56",
          "totalScore": 630,
          "persons": 101,
          "totalPersons": 2392,
          "place": 2292
  },
  {
          "id": "57",
          "totalScore": 629,
          "persons": 113,
          "totalPersons": 2505,
          "place": 2393
  },
  {
          "id": "58",
          "totalScore": 628,
          "persons": 118,
          "totalPersons": 2623,
          "place": 2506
  },
  {
          "id": "59",
          "totalScore": 627,
          "persons": 121,
          "totalPersons": 2744,
          "place": 2624
  },
  {
          "id": "60",
          "totalScore": 626,
          "persons": 117,
          "totalPersons": 2861,
          "place": 2745
  },
  {
          "id": "61",
          "totalScore": 625,
          "persons": 119,
          "totalPersons": 2980,
          "place": 2862
  },
  {
          "id": "62",
          "totalScore": 624,
          "persons": 116,
          "totalPersons": 3096,
          "place": 2981
  },
  {
          "id": "63",
          "totalScore": 623,
          "persons": 138,
          "totalPersons": 3234,
          "place": 3097
  },
  {
          "id": "64",
          "totalScore": 622,
          "persons": 146,
          "totalPersons": 3380,
          "place": 3235
  },
  {
          "id": "65",
          "totalScore": 621,
          "persons": 146,
          "totalPersons": 3526,
          "place": 3381
  },
  {
          "id": "66",
          "totalScore": 620,
          "persons": 152,
          "totalPersons": 3678,
          "place": 3527
  },
  {
          "id": "67",
          "totalScore": 619,
          "persons": 151,
          "totalPersons": 3829,
          "place": 3679
  },
  {
          "id": "68",
          "totalScore": 618,
          "persons": 142,
          "totalPersons": 3971,
          "place": 3830
  },
  {
          "id": "69",
          "totalScore": 617,
          "persons": 159,
          "totalPersons": 4130,
          "place": 3972
  },
  {
          "id": "70",
          "totalScore": 616,
          "persons": 159,
          "totalPersons": 4289,
          "place": 4131
  },
  {
          "id": "71",
          "totalScore": 615,
          "persons": 159,
          "totalPersons": 4448,
          "place": 4290
  },
  {
          "id": "72",
          "totalScore": 614,
          "persons": 171,
          "totalPersons": 4619,
          "place": 4449
  },
  {
          "id": "73",
          "totalScore": 613,
          "persons": 202,
          "totalPersons": 4821,
          "place": 4620
  },
  {
          "id": "74",
          "totalScore": 612,
          "persons": 160,
          "totalPersons": 4981,
          "place": 4822
  },
  {
          "id": "75",
          "totalScore": 611,
          "persons": 185,
          "totalPersons": 5166,
          "place": 4982
  },
  {
          "id": "76",
          "totalScore": 610,
          "persons": 191,
          "totalPersons": 5357,
          "place": 5167
  },
  {
          "id": "77",
          "totalScore": 609,
          "persons": 203,
          "totalPersons": 5560,
          "place": 5358
  },
  {
          "id": "78",
          "totalScore": 608,
          "persons": 211,
          "totalPersons": 5771,
          "place": 5561
  },
  {
          "id": "79",
          "totalScore": 607,
          "persons": 190,
          "totalPersons": 5961,
          "place": 5772
  },
  {
          "id": "80",
          "totalScore": 606,
          "persons": 224,
          "totalPersons": 6185,
          "place": 5962
  },
  {
          "id": "81",
          "totalScore": 605,
          "persons": 218,
          "totalPersons": 6403,
          "place": 6186
  },
  {
          "id": "82",
          "totalScore": 604,
          "persons": 202,
          "totalPersons": 6605,
          "place": 6404
  },
  {
          "id": "83",
          "totalScore": 603,
          "persons": 228,
          "totalPersons": 6833,
          "place": 6606
  },
  {
          "id": "84",
          "totalScore": 602,
          "persons": 245,
          "totalPersons": 7078,
          "place": 6834
  },
  {
          "id": "85",
          "totalScore": 601,
          "persons": 238,
          "totalPersons": 7316,
          "place": 7079
  },
  {
          "id": "86",
          "totalScore": 600,
          "persons": 238,
          "totalPersons": 7554,
          "place": 7317
  },
  {
          "id": "87",
          "totalScore": 599,
          "persons": 228,
          "totalPersons": 7782,
          "place": 7555
  },
  {
          "id": "88",
          "totalScore": 598,
          "persons": 239,
          "totalPersons": 8021,
          "place": 7783
  },
  {
          "id": "89",
          "totalScore": 597,
          "persons": 247,
          "totalPersons": 8268,
          "place": 8022
  },
  {
          "id": "90",
          "totalScore": 596,
          "persons": 242,
          "totalPersons": 8510,
          "place": 8269
  },
  {
          "id": "91",
          "totalScore": 595,
          "persons": 273,
          "totalPersons": 8783,
          "place": 8511
  },
  {
          "id": "92",
          "totalScore": 594,
          "persons": 260,
          "totalPersons": 9043,
          "place": 8784
  },
  {
          "id": "93",
          "totalScore": 593,
          "persons": 263,
          "totalPersons": 9306,
          "place": 9044
  },
  {
          "id": "94",
          "totalScore": 592,
          "persons": 263,
          "totalPersons": 9569,
          "place": 9307
  },
  {
          "id": "95",
          "totalScore": 591,
          "persons": 295,
          "totalPersons": 9864,
          "place": 9570
  },
  {
          "id": "96",
          "totalScore": 590,
          "persons": 286,
          "totalPersons": 10150,
          "place": 9865
  },
  {
          "id": "97",
          "totalScore": 589,
          "persons": 278,
          "totalPersons": 10428,
          "place": 10151
  },
  {
          "id": "98",
          "totalScore": 588,
          "persons": 300,
          "totalPersons": 10728,
          "place": 10429
  },
  {
          "id": "99",
          "totalScore": 587,
          "persons": 305,
          "totalPersons": 11033,
          "place": 10729
  },
  {
          "id": "100",
          "totalScore": 586,
          "persons": 317,
          "totalPersons": 11350,
          "place": 11034
  },
  {
          "id": "101",
          "totalScore": 585,
          "persons": 347,
          "totalPersons": 11697,
          "place": 11351
  },
  {
          "id": "102",
          "totalScore": 584,
          "persons": 306,
          "totalPersons": 12003,
          "place": 11698
  },
  {
          "id": "103",
          "totalScore": 583,
          "persons": 306,
          "totalPersons": 12309,
          "place": 12004
  },
  {
          "id": "104",
          "totalScore": 582,
          "persons": 326,
          "totalPersons": 12635,
          "place": 12310
  },
  {
          "id": "105",
          "totalScore": 581,
          "persons": 334,
          "totalPersons": 12969,
          "place": 12636
  },
  {
          "id": "106",
          "totalScore": 580,
          "persons": 325,
          "totalPersons": 13294,
          "place": 12970
  },
  {
          "id": "107",
          "totalScore": 579,
          "persons": 385,
          "totalPersons": 13679,
          "place": 13295
  },
  {
          "id": "108",
          "totalScore": 578,
          "persons": 368,
          "totalPersons": 14047,
          "place": 13680
  },
  {
          "id": "109",
          "totalScore": 577,
          "persons": 347,
          "totalPersons": 14394,
          "place": 14048
  },
  {
          "id": "110",
          "totalScore": 576,
          "persons": 354,
          "totalPersons": 14748,
          "place": 14395
  },
  {
          "id": "111",
          "totalScore": 575,
          "persons": 379,
          "totalPersons": 15127,
          "place": 14749
  },
  {
          "id": "112",
          "totalScore": 574,
          "persons": 396,
          "totalPersons": 15523,
          "place": 15128
  },
  {
          "id": "113",
          "totalScore": 573,
          "persons": 348,
          "totalPersons": 15871,
          "place": 15524
  },
  {
          "id": "114",
          "totalScore": 572,
          "persons": 365,
          "totalPersons": 16236,
          "place": 15872
  },
  {
          "id": "115",
          "totalScore": 571,
          "persons": 378,
          "totalPersons": 16614,
          "place": 16237
  },
  {
          "id": "116",
          "totalScore": 570,
          "persons": 422,
          "totalPersons": 17036,
          "place": 16615
  },
  {
          "id": "117",
          "totalScore": 569,
          "persons": 407,
          "totalPersons": 17443,
          "place": 17037
  },
  {
          "id": "118",
          "totalScore": 568,
          "persons": 394,
          "totalPersons": 17837,
          "place": 17444
  },
  {
          "id": "119",
          "totalScore": 567,
          "persons": 406,
          "totalPersons": 18243,
          "place": 17838
  },
  {
          "id": "120",
          "totalScore": 566,
          "persons": 427,
          "totalPersons": 18670,
          "place": 18244
  },
  {
          "id": "121",
          "totalScore": 565,
          "persons": 461,
          "totalPersons": 19131,
          "place": 18671
  },
  {
          "id": "122",
          "totalScore": 564,
          "persons": 401,
          "totalPersons": 19532,
          "place": 19132
  },
  {
          "id": "123",
          "totalScore": 563,
          "persons": 435,
          "totalPersons": 19967,
          "place": 19533
  },
  {
          "id": "124",
          "totalScore": 562,
          "persons": 425,
          "totalPersons": 20392,
          "place": 19968
  },
  {
          "id": "125",
          "totalScore": 561,
          "persons": 465,
          "totalPersons": 20857,
          "place": 20393
  },
  {
          "id": "126",
          "totalScore": 560,
          "persons": 452,
          "totalPersons": 21309,
          "place": 20858
  },
  {
          "id": "127",
          "totalScore": 559,
          "persons": 427,
          "totalPersons": 21736,
          "place": 21310
  },
  {
          "id": "128",
          "totalScore": 558,
          "persons": 426,
          "totalPersons": 22162,
          "place": 21737
  },
  {
          "id": "129",
          "totalScore": 557,
          "persons": 451,
          "totalPersons": 22613,
          "place": 22163
  },
  {
          "id": "130",
          "totalScore": 556,
          "persons": 482,
          "totalPersons": 23095,
          "place": 22614
  },
  {
          "id": "131",
          "totalScore": 555,
          "persons": 501,
          "totalPersons": 23596,
          "place": 23096
  },
  {
          "id": "132",
          "totalScore": 554,
          "persons": 456,
          "totalPersons": 24052,
          "place": 23597
  },
  {
          "id": "133",
          "totalScore": 553,
          "persons": 488,
          "totalPersons": 24540,
          "place": 24053
  },
  {
          "id": "134",
          "totalScore": 552,
          "persons": 490,
          "totalPersons": 25030,
          "place": 24541
  },
  {
          "id": "135",
          "totalScore": 551,
          "persons": 482,
          "totalPersons": 25512,
          "place": 25031
  },
  {
          "id": "136",
          "totalScore": 550,
          "persons": 490,
          "totalPersons": 26002,
          "place": 25513
  },
  {
          "id": "137",
          "totalScore": 549,
          "persons": 494,
          "totalPersons": 26496,
          "place": 26003
  },
  {
          "id": "138",
          "totalScore": 548,
          "persons": 497,
          "totalPersons": 26993,
          "place": 26497
  },
  {
          "id": "139",
          "totalScore": 547,
          "persons": 531,
          "totalPersons": 27524,
          "place": 26994
  },
  {
          "id": "140",
          "totalScore": 546,
          "persons": 540,
          "totalPersons": 28064,
          "place": 27525
  },
  {
          "id": "141",
          "totalScore": 545,
          "persons": 528,
          "totalPersons": 28592,
          "place": 28065
  },
  {
          "id": "142",
          "totalScore": 544,
          "persons": 506,
          "totalPersons": 29098,
          "place": 28593
  },
  {
          "id": "143",
          "totalScore": 543,
          "persons": 526,
          "totalPersons": 29624,
          "place": 29099
  },
  {
          "id": "144",
          "totalScore": 542,
          "persons": 537,
          "totalPersons": 30161,
          "place": 29625
  },
  {
          "id": "145",
          "totalScore": 541,
          "persons": 564,
          "totalPersons": 30725,
          "place": 30162
  },
  {
          "id": "146",
          "totalScore": 540,
          "persons": 538,
          "totalPersons": 31263,
          "place": 30726
  },
  {
          "id": "147",
          "totalScore": 539,
          "persons": 620,
          "totalPersons": 31883,
          "place": 31264
  },
  {
          "id": "148",
          "totalScore": 538,
          "persons": 579,
          "totalPersons": 32462,
          "place": 31884
  },
  {
          "id": "149",
          "totalScore": 537,
          "persons": 569,
          "totalPersons": 33031,
          "place": 32463
  },
  {
          "id": "150",
          "totalScore": 536,
          "persons": 537,
          "totalPersons": 33568,
          "place": 33032
  },
  {
          "id": "151",
          "totalScore": 535,
          "persons": 540,
          "totalPersons": 34108,
          "place": 33569
  },
  {
          "id": "152",
          "totalScore": 534,
          "persons": 525,
          "totalPersons": 34633,
          "place": 34109
  },
  {
          "id": "153",
          "totalScore": 533,
          "persons": 546,
          "totalPersons": 35179,
          "place": 34634
  },
  {
          "id": "154",
          "totalScore": 532,
          "persons": 626,
          "totalPersons": 35805,
          "place": 35180
  },
  {
          "id": "155",
          "totalScore": 531,
          "persons": 596,
          "totalPersons": 36401,
          "place": 35806
  },
  {
          "id": "156",
          "totalScore": 530,
          "persons": 578,
          "totalPersons": 36979,
          "place": 36402
  },
  {
          "id": "157",
          "totalScore": 529,
          "persons": 617,
          "totalPersons": 37596,
          "place": 36980
  },
  {
          "id": "158",
          "totalScore": 528,
          "persons": 585,
          "totalPersons": 38181,
          "place": 37597
  },
  {
          "id": "159",
          "totalScore": 527,
          "persons": 600,
          "totalPersons": 38781,
          "place": 38182
  },
  {
          "id": "160",
          "totalScore": 526,
          "persons": 600,
          "totalPersons": 39381,
          "place": 38782
  },
  {
          "id": "161",
          "totalScore": 525,
          "persons": 559,
          "totalPersons": 39940,
          "place": 39382
  },
  {
          "id": "162",
          "totalScore": 524,
          "persons": 641,
          "totalPersons": 40581,
          "place": 39941
  },
  {
          "id": "163",
          "totalScore": 523,
          "persons": 604,
          "totalPersons": 41185,
          "place": 40582
  },
  {
          "id": "164",
          "totalScore": 522,
          "persons": 601,
          "totalPersons": 41786,
          "place": 41186
  },
  {
          "id": "165",
          "totalScore": 521,
          "persons": 600,
          "totalPersons": 42386,
          "place": 41787
  },
  {
          "id": "166",
          "totalScore": 520,
          "persons": 653,
          "totalPersons": 43039,
          "place": 42387
  },
  {
          "id": "167",
          "totalScore": 519,
          "persons": 623,
          "totalPersons": 43662,
          "place": 43040
  },
  {
          "id": "168",
          "totalScore": 518,
          "persons": 603,
          "totalPersons": 44265,
          "place": 43663
  },
  {
          "id": "169",
          "totalScore": 517,
          "persons": 628,
          "totalPersons": 44893,
          "place": 44266
  },
  {
          "id": "170",
          "totalScore": 516,
          "persons": 655,
          "totalPersons": 45548,
          "place": 44894
  },
  {
          "id": "171",
          "totalScore": 515,
          "persons": 688,
          "totalPersons": 46236,
          "place": 45549
  },
  {
          "id": "172",
          "totalScore": 514,
          "persons": 663,
          "totalPersons": 46899,
          "place": 46237
  },
  {
          "id": "173",
          "totalScore": 513,
          "persons": 639,
          "totalPersons": 47538,
          "place": 46900
  },
  {
          "id": "174",
          "totalScore": 512,
          "persons": 656,
          "totalPersons": 48194,
          "place": 47539
  },
  {
          "id": "175",
          "totalScore": 511,
          "persons": 651,
          "totalPersons": 48845,
          "place": 48195
  },
  {
          "id": "176",
          "totalScore": 510,
          "persons": 690,
          "totalPersons": 49535,
          "place": 48846
  },
  {
          "id": "177",
          "totalScore": 509,
          "persons": 670,
          "totalPersons": 50205,
          "place": 49536
  },
  {
          "id": "178",
          "totalScore": 508,
          "persons": 693,
          "totalPersons": 50898,
          "place": 50206
  },
  {
          "id": "179",
          "totalScore": 507,
          "persons": 680,
          "totalPersons": 51578,
          "place": 50899
  },
  {
          "id": "180",
          "totalScore": 506,
          "persons": 724,
          "totalPersons": 52302,
          "place": 51579
  },
  {
          "id": "181",
          "totalScore": 505,
          "persons": 645,
          "totalPersons": 52947,
          "place": 52303
  },
  {
          "id": "182",
          "totalScore": 504,
          "persons": 659,
          "totalPersons": 53606,
          "place": 52948
  },
  {
          "id": "183",
          "totalScore": 503,
          "persons": 653,
          "totalPersons": 54259,
          "place": 53607
  },
  {
          "id": "184",
          "totalScore": 502,
          "persons": 700,
          "totalPersons": 54959,
          "place": 54260
  },
  {
          "id": "185",
          "totalScore": 501,
          "persons": 662,
          "totalPersons": 55621,
          "place": 54960
  },
  {
          "id": "186",
          "totalScore": 500,
          "persons": 653,
          "totalPersons": 56274,
          "place": 55622
  },
  {
          "id": "187",
          "totalScore": 499,
          "persons": 595,
          "totalPersons": 56869,
          "place": 56275
  },
  {
          "id": "188",
          "totalScore": 498,
          "persons": 665,
          "totalPersons": 57534,
          "place": 56870
  },
  {
          "id": "189",
          "totalScore": 497,
          "persons": 697,
          "totalPersons": 58231,
          "place": 57535
  },
  {
          "id": "190",
          "totalScore": 496,
          "persons": 680,
          "totalPersons": 58911,
          "place": 58232
  },
  {
          "id": "191",
          "totalScore": 495,
          "persons": 622,
          "totalPersons": 59533,
          "place": 58912
  },
  {
          "id": "192",
          "totalScore": 494,
          "persons": 709,
          "totalPersons": 60242,
          "place": 59534
  },
  {
          "id": "193",
          "totalScore": 493,
          "persons": 660,
          "totalPersons": 60902,
          "place": 60243
  },
  {
          "id": "194",
          "totalScore": 492,
          "persons": 723,
          "totalPersons": 61625,
          "place": 60903
  },
  {
          "id": "195",
          "totalScore": 491,
          "persons": 706,
          "totalPersons": 62331,
          "place": 61626
  },
  {
          "id": "196",
          "totalScore": 490,
          "persons": 721,
          "totalPersons": 63052,
          "place": 62332
  },
  {
          "id": "197",
          "totalScore": 489,
          "persons": 714,
          "totalPersons": 63766,
          "place": 63053
  },
  {
          "id": "198",
          "totalScore": 488,
          "persons": 730,
          "totalPersons": 64496,
          "place": 63767
  },
  {
          "id": "199",
          "totalScore": 487,
          "persons": 702,
          "totalPersons": 65198,
          "place": 64497
  },
  {
          "id": "200",
          "totalScore": 486,
          "persons": 712,
          "totalPersons": 65910,
          "place": 65199
  },
  {
          "id": "201",
          "totalScore": 485,
          "persons": 748,
          "totalPersons": 66658,
          "place": 65911
  },
  {
          "id": "202",
          "totalScore": 484,
          "persons": 640,
          "totalPersons": 67298,
          "place": 66659
  },
  {
          "id": "203",
          "totalScore": 483,
          "persons": 739,
          "totalPersons": 68037,
          "place": 67299
  },
  {
          "id": "204",
          "totalScore": 482,
          "persons": 733,
          "totalPersons": 68770,
          "place": 68038
  },
  {
          "id": "205",
          "totalScore": 481,
          "persons": 719,
          "totalPersons": 69489,
          "place": 68771
  },
  {
          "id": "206",
          "totalScore": 480,
          "persons": 722,
          "totalPersons": 70211,
          "place": 69490
  },
  {
          "id": "207",
          "totalScore": 479,
          "persons": 705,
          "totalPersons": 70916,
          "place": 70212
  },
  {
          "id": "208",
          "totalScore": 478,
          "persons": 698,
          "totalPersons": 71614,
          "place": 70917
  },
  {
          "id": "209",
          "totalScore": 477,
          "persons": 722,
          "totalPersons": 72336,
          "place": 71615
  },
  {
          "id": "210",
          "totalScore": 476,
          "persons": 769,
          "totalPersons": 73105,
          "place": 72337
  },
  {
          "id": "211",
          "totalScore": 475,
          "persons": 743,
          "totalPersons": 73848,
          "place": 73106
  },
  {
          "id": "212",
          "totalScore": 474,
          "persons": 696,
          "totalPersons": 74544,
          "place": 73849
  },
  {
          "id": "213",
          "totalScore": 473,
          "persons": 772,
          "totalPersons": 75316,
          "place": 74545
  },
  {
          "id": "214",
          "totalScore": 472,
          "persons": 793,
          "totalPersons": 76109,
          "place": 75317
  },
  {
          "id": "215",
          "totalScore": 471,
          "persons": 776,
          "totalPersons": 76885,
          "place": 76110
  },
  {
          "id": "216",
          "totalScore": 470,
          "persons": 748,
          "totalPersons": 77633,
          "place": 76886
  },
  {
          "id": "217",
          "totalScore": 469,
          "persons": 742,
          "totalPersons": 78375,
          "place": 77634
  },
  {
          "id": "218",
          "totalScore": 468,
          "persons": 783,
          "totalPersons": 79158,
          "place": 78376
  },
  {
          "id": "219",
          "totalScore": 467,
          "persons": 736,
          "totalPersons": 79894,
          "place": 79159
  },
  {
          "id": "220",
          "totalScore": 466,
          "persons": 788,
          "totalPersons": 80682,
          "place": 79895
  },
  {
          "id": "221",
          "totalScore": 465,
          "persons": 790,
          "totalPersons": 81472,
          "place": 80683
  },
  {
          "id": "222",
          "totalScore": 464,
          "persons": 755,
          "totalPersons": 82227,
          "place": 81473
  },
  {
          "id": "223",
          "totalScore": 463,
          "persons": 766,
          "totalPersons": 82993,
          "place": 82228
  },
  {
          "id": "224",
          "totalScore": 462,
          "persons": 828,
          "totalPersons": 83821,
          "place": 82994
  },
  {
          "id": "225",
          "totalScore": 461,
          "persons": 791,
          "totalPersons": 84612,
          "place": 83822
  },
  {
          "id": "226",
          "totalScore": 460,
          "persons": 765,
          "totalPersons": 85377,
          "place": 84613
  },
  {
          "id": "227",
          "totalScore": 459,
          "persons": 768,
          "totalPersons": 86145,
          "place": 85378
  },
  {
          "id": "228",
          "totalScore": 458,
          "persons": 784,
          "totalPersons": 86929,
          "place": 86146
  },
  {
          "id": "229",
          "totalScore": 457,
          "persons": 776,
          "totalPersons": 87705,
          "place": 86930
  },
  {
          "id": "230",
          "totalScore": 456,
          "persons": 782,
          "totalPersons": 88487,
          "place": 87706
  },
  {
          "id": "231",
          "totalScore": 455,
          "persons": 815,
          "totalPersons": 89302,
          "place": 88488
  },
  {
          "id": "232",
          "totalScore": 454,
          "persons": 800,
          "totalPersons": 90102,
          "place": 89303
  },
  {
          "id": "233",
          "totalScore": 453,
          "persons": 726,
          "totalPersons": 90828,
          "place": 90103
  },
  {
          "id": "234",
          "totalScore": 452,
          "persons": 759,
          "totalPersons": 91587,
          "place": 90829
  },
  {
          "id": "235",
          "totalScore": 451,
          "persons": 828,
          "totalPersons": 92415,
          "place": 91588
  },
  {
          "id": "236",
          "totalScore": 450,
          "persons": 772,
          "totalPersons": 93187,
          "place": 92416
  },
  {
          "id": "237",
          "totalScore": 449,
          "persons": 798,
          "totalPersons": 93985,
          "place": 93188
  },
  {
          "id": "238",
          "totalScore": 448,
          "persons": 827,
          "totalPersons": 94812,
          "place": 93986
  },
  {
          "id": "239",
          "totalScore": 447,
          "persons": 799,
          "totalPersons": 95611,
          "place": 94813
  },
  {
          "id": "240",
          "totalScore": 446,
          "persons": 811,
          "totalPersons": 96422,
          "place": 95612
  },
  {
          "id": "241",
          "totalScore": 445,
          "persons": 844,
          "totalPersons": 97266,
          "place": 96423
  },
  {
          "id": "242",
          "totalScore": 444,
          "persons": 768,
          "totalPersons": 98034,
          "place": 97267
  },
  {
          "id": "243",
          "totalScore": 443,
          "persons": 835,
          "totalPersons": 98869,
          "place": 98035
  },
  {
          "id": "244",
          "totalScore": 442,
          "persons": 809,
          "totalPersons": 99678,
          "place": 98870
  },
  {
          "id": "245",
          "totalScore": 441,
          "persons": 833,
          "totalPersons": 100511,
          "place": 99679
  },
  {
          "id": "246",
          "totalScore": 440,
          "persons": 822,
          "totalPersons": 101333,
          "place": 100512
  },
  {
          "id": "247",
          "totalScore": 439,
          "persons": 853,
          "totalPersons": 102186,
          "place": 101334
  },
  {
          "id": "248",
          "totalScore": 438,
          "persons": 824,
          "totalPersons": 103010,
          "place": 102187
  },
  {
          "id": "249",
          "totalScore": 437,
          "persons": 775,
          "totalPersons": 103785,
          "place": 103011
  },
  {
          "id": "250",
          "totalScore": 436,
          "persons": 800,
          "totalPersons": 104585,
          "place": 103786
  },
  {
          "id": "251",
          "totalScore": 435,
          "persons": 868,
          "totalPersons": 105453,
          "place": 104586
  },
  {
          "id": "252",
          "totalScore": 434,
          "persons": 861,
          "totalPersons": 106314,
          "place": 105454
  },
  {
          "id": "253",
          "totalScore": 433,
          "persons": 853,
          "totalPersons": 107167,
          "place": 106315
  },
  {
          "id": "254",
          "totalScore": 432,
          "persons": 872,
          "totalPersons": 108039,
          "place": 107168
  },
  {
          "id": "255",
          "totalScore": 431,
          "persons": 903,
          "totalPersons": 108942,
          "place": 108040
  },
  {
          "id": "256",
          "totalScore": 430,
          "persons": 885,
          "totalPersons": 109827,
          "place": 108943
  },
  {
          "id": "257",
          "totalScore": 429,
          "persons": 884,
          "totalPersons": 110711,
          "place": 109828
  },
  {
          "id": "258",
          "totalScore": 428,
          "persons": 837,
          "totalPersons": 111548,
          "place": 110712
  },
  {
          "id": "259",
          "totalScore": 427,
          "persons": 866,
          "totalPersons": 112414,
          "place": 111549
  },
  {
          "id": "260",
          "totalScore": 426,
          "persons": 915,
          "totalPersons": 113329,
          "place": 112415
  },
  {
          "id": "261",
          "totalScore": 425,
          "persons": 837,
          "totalPersons": 114166,
          "place": 113330
  },
  {
          "id": "262",
          "totalScore": 424,
          "persons": 854,
          "totalPersons": 115020,
          "place": 114167
  },
  {
          "id": "263",
          "totalScore": 423,
          "persons": 830,
          "totalPersons": 115850,
          "place": 115021
  },
  {
          "id": "264",
          "totalScore": 422,
          "persons": 886,
          "totalPersons": 116736,
          "place": 115851
  },
  {
          "id": "265",
          "totalScore": 421,
          "persons": 904,
          "totalPersons": 117640,
          "place": 116737
  },
  {
          "id": "266",
          "totalScore": 420,
          "persons": 840,
          "totalPersons": 118480,
          "place": 117641
  },
  {
          "id": "267",
          "totalScore": 419,
          "persons": 895,
          "totalPersons": 119375,
          "place": 118481
  },
  {
          "id": "268",
          "totalScore": 418,
          "persons": 897,
          "totalPersons": 120272,
          "place": 119376
  },
  {
          "id": "269",
          "totalScore": 417,
          "persons": 836,
          "totalPersons": 121108,
          "place": 120273
  },
  {
          "id": "270",
          "totalScore": 416,
          "persons": 870,
          "totalPersons": 121978,
          "place": 121109
  },
  {
          "id": "271",
          "totalScore": 415,
          "persons": 901,
          "totalPersons": 122879,
          "place": 121979
  },
  {
          "id": "272",
          "totalScore": 414,
          "persons": 885,
          "totalPersons": 123764,
          "place": 122880
  },
  {
          "id": "273",
          "totalScore": 413,
          "persons": 919,
          "totalPersons": 124683,
          "place": 123765
  },
  {
          "id": "274",
          "totalScore": 412,
          "persons": 878,
          "totalPersons": 125561,
          "place": 124684
  },
  {
          "id": "275",
          "totalScore": 411,
          "persons": 904,
          "totalPersons": 126465,
          "place": 125562
  },
  {
          "id": "276",
          "totalScore": 410,
          "persons": 869,
          "totalPersons": 127334,
          "place": 126466
  },
  {
          "id": "277",
          "totalScore": 409,
          "persons": 912,
          "totalPersons": 128246,
          "place": 127335
  },
  {
          "id": "278",
          "totalScore": 408,
          "persons": 888,
          "totalPersons": 129134,
          "place": 128247
  },
  {
          "id": "279",
          "totalScore": 407,
          "persons": 874,
          "totalPersons": 130008,
          "place": 129135
  },
  {
          "id": "280",
          "totalScore": 406,
          "persons": 963,
          "totalPersons": 130971,
          "place": 130009
  },
  {
          "id": "281",
          "totalScore": 405,
          "persons": 844,
          "totalPersons": 131815,
          "place": 130972
  },
  {
          "id": "282",
          "totalScore": 404,
          "persons": 861,
          "totalPersons": 132676,
          "place": 131816
  },
  {
          "id": "283",
          "totalScore": 403,
          "persons": 907,
          "totalPersons": 133583,
          "place": 132677
  },
  {
          "id": "284",
          "totalScore": 402,
          "persons": 840,
          "totalPersons": 134423,
          "place": 133584
  },
  {
          "id": "285",
          "totalScore": 401,
          "persons": 874,
          "totalPersons": 135297,
          "place": 134424
  },
  {
          "id": "286",
          "totalScore": 400,
          "persons": 879,
          "totalPersons": 136176,
          "place": 135298
  },
  {
          "id": "287",
          "totalScore": 399,
          "persons": 890,
          "totalPersons": 137066,
          "place": 136177
  },
  {
          "id": "288",
          "totalScore": 398,
          "persons": 888,
          "totalPersons": 137954,
          "place": 137067
  },
  {
          "id": "289",
          "totalScore": 397,
          "persons": 851,
          "totalPersons": 138805,
          "place": 137955
  },
  {
          "id": "290",
          "totalScore": 396,
          "persons": 850,
          "totalPersons": 139655,
          "place": 138806
  },
  {
          "id": "291",
          "totalScore": 395,
          "persons": 894,
          "totalPersons": 140549,
          "place": 139656
  },
  {
          "id": "292",
          "totalScore": 394,
          "persons": 952,
          "totalPersons": 141501,
          "place": 140550
  },
  {
          "id": "293",
          "totalScore": 393,
          "persons": 906,
          "totalPersons": 142407,
          "place": 141502
  },
  {
          "id": "294",
          "totalScore": 392,
          "persons": 914,
          "totalPersons": 143321,
          "place": 142408
  },
  {
          "id": "295",
          "totalScore": 391,
          "persons": 897,
          "totalPersons": 144218,
          "place": 143322
  },
  {
          "id": "296",
          "totalScore": 390,
          "persons": 894,
          "totalPersons": 145112,
          "place": 144219
  },
  {
          "id": "297",
          "totalScore": 389,
          "persons": 883,
          "totalPersons": 145995,
          "place": 145113
  },
  {
          "id": "298",
          "totalScore": 388,
          "persons": 873,
          "totalPersons": 146868,
          "place": 145996
  },
  {
          "id": "299",
          "totalScore": 387,
          "persons": 867,
          "totalPersons": 147735,
          "place": 146869
  },
  {
          "id": "300",
          "totalScore": 386,
          "persons": 857,
          "totalPersons": 148592,
          "place": 147736
  },
  {
          "id": "301",
          "totalScore": 385,
          "persons": 884,
          "totalPersons": 149476,
          "place": 148593
  },
  {
          "id": "302",
          "totalScore": 384,
          "persons": 894,
          "totalPersons": 150370,
          "place": 149477
  },
  {
          "id": "303",
          "totalScore": 383,
          "persons": 939,
          "totalPersons": 151309,
          "place": 150371
  },
  {
          "id": "304",
          "totalScore": 382,
          "persons": 900,
          "totalPersons": 152209,
          "place": 151310
  },
  {
          "id": "305",
          "totalScore": 381,
          "persons": 870,
          "totalPersons": 153079,
          "place": 152210
  },
  {
          "id": "306",
          "totalScore": 380,
          "persons": 870,
          "totalPersons": 153949,
          "place": 153080
  },
  {
          "id": "307",
          "totalScore": 379,
          "persons": 872,
          "totalPersons": 154821,
          "place": 153950
  },
  {
          "id": "308",
          "totalScore": 378,
          "persons": 918,
          "totalPersons": 155739,
          "place": 154822
  },
  {
          "id": "309",
          "totalScore": 377,
          "persons": 878,
          "totalPersons": 156617,
          "place": 155740
  },
  {
          "id": "310",
          "totalScore": 376,
          "persons": 923,
          "totalPersons": 157540,
          "place": 156618
  },
  {
          "id": "311",
          "totalScore": 375,
          "persons": 864,
          "totalPersons": 158404,
          "place": 157541
  },
  {
          "id": "312",
          "totalScore": 374,
          "persons": 851,
          "totalPersons": 159255,
          "place": 158405
  },
  {
          "id": "313",
          "totalScore": 373,
          "persons": 881,
          "totalPersons": 160136,
          "place": 159256
  },
  {
          "id": "314",
          "totalScore": 372,
          "persons": 910,
          "totalPersons": 161046,
          "place": 160137
  },
  {
          "id": "315",
          "totalScore": 371,
          "persons": 852,
          "totalPersons": 161898,
          "place": 161047
  },
  {
          "id": "316",
          "totalScore": 370,
          "persons": 857,
          "totalPersons": 162755,
          "place": 161899
  },
  {
          "id": "317",
          "totalScore": 369,
          "persons": 841,
          "totalPersons": 163596,
          "place": 162756
  },
  {
          "id": "318",
          "totalScore": 368,
          "persons": 891,
          "totalPersons": 164487,
          "place": 163597
  },
  {
          "id": "319",
          "totalScore": 367,
          "persons": 880,
          "totalPersons": 165367,
          "place": 164488
  },
  {
          "id": "320",
          "totalScore": 366,
          "persons": 861,
          "totalPersons": 166228,
          "place": 165368
  },
  {
          "id": "321",
          "totalScore": 365,
          "persons": 882,
          "totalPersons": 167110,
          "place": 166229
  },
  {
          "id": "322",
          "totalScore": 364,
          "persons": 856,
          "totalPersons": 167966,
          "place": 167111
  },
  {
          "id": "323",
          "totalScore": 363,
          "persons": 844,
          "totalPersons": 168810,
          "place": 167967
  },
  {
          "id": "324",
          "totalScore": 362,
          "persons": 861,
          "totalPersons": 169671,
          "place": 168811
  },
  {
          "id": "325",
          "totalScore": 361,
          "persons": 888,
          "totalPersons": 170559,
          "place": 169672
  },
  {
          "id": "326",
          "totalScore": 360,
          "persons": 870,
          "totalPersons": 171429,
          "place": 170560
  },
  {
          "id": "327",
          "totalScore": 359,
          "persons": 871,
          "totalPersons": 172300,
          "place": 171430
  },
  {
          "id": "328",
          "totalScore": 358,
          "persons": 854,
          "totalPersons": 173154,
          "place": 172301
  },
  {
          "id": "329",
          "totalScore": 357,
          "persons": 816,
          "totalPersons": 173970,
          "place": 173155
  },
  {
          "id": "330",
          "totalScore": 356,
          "persons": 823,
          "totalPersons": 174793,
          "place": 173971
  },
  {
          "id": "331",
          "totalScore": 355,
          "persons": 791,
          "totalPersons": 175584,
          "place": 174794
  },
  {
          "id": "332",
          "totalScore": 354,
          "persons": 832,
          "totalPersons": 176416,
          "place": 175585
  },
  {
          "id": "333",
          "totalScore": 353,
          "persons": 779,
          "totalPersons": 177195,
          "place": 176417
  },
  {
          "id": "334",
          "totalScore": 352,
          "persons": 841,
          "totalPersons": 178036,
          "place": 177196
  },
  {
          "id": "335",
          "totalScore": 351,
          "persons": 844,
          "totalPersons": 178880,
          "place": 178037
  },
  {
          "id": "336",
          "totalScore": 350,
          "persons": 830,
          "totalPersons": 179710,
          "place": 178881
  },
  {
          "id": "337",
          "totalScore": 349,
          "persons": 838,
          "totalPersons": 180548,
          "place": 179711
  },
  {
          "id": "338",
          "totalScore": 348,
          "persons": 789,
          "totalPersons": 181337,
          "place": 180549
  },
  {
          "id": "339",
          "totalScore": 347,
          "persons": 846,
          "totalPersons": 182183,
          "place": 181338
  },
  {
          "id": "340",
          "totalScore": 346,
          "persons": 821,
          "totalPersons": 183004,
          "place": 182184
  },
  {
          "id": "341",
          "totalScore": 345,
          "persons": 826,
          "totalPersons": 183830,
          "place": 183005
  },
  {
          "id": "342",
          "totalScore": 344,
          "persons": 793,
          "totalPersons": 184623,
          "place": 183831
  },
  {
          "id": "343",
          "totalScore": 343,
          "persons": 820,
          "totalPersons": 185443,
          "place": 184624
  },
  {
          "id": "344",
          "totalScore": 342,
          "persons": 867,
          "totalPersons": 186310,
          "place": 185444
  },
  {
          "id": "345",
          "totalScore": 341,
          "persons": 836,
          "totalPersons": 187146,
          "place": 186311
  },
  {
          "id": "346",
          "totalScore": 340,
          "persons": 773,
          "totalPersons": 187919,
          "place": 187147
  },
  {
          "id": "347",
          "totalScore": 339,
          "persons": 831,
          "totalPersons": 188750,
          "place": 187920
  },
  {
          "id": "348",
          "totalScore": 338,
          "persons": 779,
          "totalPersons": 189529,
          "place": 188751
  },
  {
          "id": "349",
          "totalScore": 337,
          "persons": 818,
          "totalPersons": 190347,
          "place": 189530
  },
  {
          "id": "350",
          "totalScore": 336,
          "persons": 799,
          "totalPersons": 191146,
          "place": 190348
  },
  {
          "id": "351",
          "totalScore": 335,
          "persons": 797,
          "totalPersons": 191943,
          "place": 191147
  },
  {
          "id": "352",
          "totalScore": 334,
          "persons": 776,
          "totalPersons": 192719,
          "place": 191944
  },
  {
          "id": "353",
          "totalScore": 333,
          "persons": 819,
          "totalPersons": 193538,
          "place": 192720
  },
  {
          "id": "354",
          "totalScore": 332,
          "persons": 813,
          "totalPersons": 194351,
          "place": 193539
  },
  {
          "id": "355",
          "totalScore": 331,
          "persons": 769,
          "totalPersons": 195120,
          "place": 194352
  },
  {
          "id": "356",
          "totalScore": 330,
          "persons": 762,
          "totalPersons": 195882,
          "place": 195121
  },
  {
          "id": "357",
          "totalScore": 329,
          "persons": 772,
          "totalPersons": 196654,
          "place": 195883
  },
  {
          "id": "358",
          "totalScore": 328,
          "persons": 733,
          "totalPersons": 197387,
          "place": 196655
  },
  {
          "id": "359",
          "totalScore": 327,
          "persons": 796,
          "totalPersons": 198183,
          "place": 197388
  },
  {
          "id": "360",
          "totalScore": 326,
          "persons": 698,
          "totalPersons": 198881,
          "place": 198184
  },
  {
          "id": "361",
          "totalScore": 325,
          "persons": 760,
          "totalPersons": 199641,
          "place": 198882
  },
  {
          "id": "362",
          "totalScore": 324,
          "persons": 768,
          "totalPersons": 200409,
          "place": 199642
  },
  {
          "id": "363",
          "totalScore": 323,
          "persons": 739,
          "totalPersons": 201148,
          "place": 200410
  },
  {
          "id": "364",
          "totalScore": 322,
          "persons": 746,
          "totalPersons": 201894,
          "place": 201149
  },
  {
          "id": "365",
          "totalScore": 321,
          "persons": 729,
          "totalPersons": 202623,
          "place": 201895
  },
  {
          "id": "366",
          "totalScore": 320,
          "persons": 693,
          "totalPersons": 203316,
          "place": 202624
  },
  {
          "id": "367",
          "totalScore": 319,
          "persons": 745,
          "totalPersons": 204061,
          "place": 203317
  },
  {
          "id": "368",
          "totalScore": 318,
          "persons": 699,
          "totalPersons": 204760,
          "place": 204062
  },
  {
          "id": "369",
          "totalScore": 317,
          "persons": 694,
          "totalPersons": 205454,
          "place": 204761
  },
  {
          "id": "370",
          "totalScore": 316,
          "persons": 710,
          "totalPersons": 206164,
          "place": 205455
  },
  {
          "id": "371",
          "totalScore": 315,
          "persons": 788,
          "totalPersons": 206952,
          "place": 206165
  },
  {
          "id": "372",
          "totalScore": 314,
          "persons": 694,
          "totalPersons": 207646,
          "place": 206953
  },
  {
          "id": "373",
          "totalScore": 313,
          "persons": 688,
          "totalPersons": 208334,
          "place": 207647
  },
  {
          "id": "374",
          "totalScore": 312,
          "persons": 687,
          "totalPersons": 209021,
          "place": 208335
  },
  {
          "id": "375",
          "totalScore": 311,
          "persons": 632,
          "totalPersons": 209653,
          "place": 209022
  },
  {
          "id": "376",
          "totalScore": 310,
          "persons": 672,
          "totalPersons": 210325,
          "place": 209654
  },
  {
          "id": "377",
          "totalScore": 309,
          "persons": 663,
          "totalPersons": 210988,
          "place": 210326
  },
  {
          "id": "378",
          "totalScore": 308,
          "persons": 649,
          "totalPersons": 211637,
          "place": 210989
  },
  {
          "id": "379",
          "totalScore": 307,
          "persons": 660,
          "totalPersons": 212297,
          "place": 211638
  },
  {
          "id": "380",
          "totalScore": 306,
          "persons": 676,
          "totalPersons": 212973,
          "place": 212298
  },
  {
          "id": "381",
          "totalScore": 305,
          "persons": 709,
          "totalPersons": 213682,
          "place": 212974
  },
  {
          "id": "382",
          "totalScore": 304,
          "persons": 627,
          "totalPersons": 214309,
          "place": 213683
  },
  {
          "id": "383",
          "totalScore": 303,
          "persons": 630,
          "totalPersons": 214939,
          "place": 214310
  },
  {
          "id": "384",
          "totalScore": 302,
          "persons": 662,
          "totalPersons": 215601,
          "place": 214940
  },
  {
          "id": "385",
          "totalScore": 301,
          "persons": 642,
          "totalPersons": 216243,
          "place": 215602
  },
  {
          "id": "386",
          "totalScore": 300,
          "persons": 610,
          "totalPersons": 216853,
          "place": 216244
  },
  {
          "id": "387",
          "totalScore": 299,
          "persons": 608,
          "totalPersons": 217461,
          "place": 216854
  },
  {
          "id": "388",
          "totalScore": 298,
          "persons": 586,
          "totalPersons": 218047,
          "place": 217462
  },
  {
          "id": "389",
          "totalScore": 297,
          "persons": 584,
          "totalPersons": 218631,
          "place": 218048
  },
  {
          "id": "390",
          "totalScore": 296,
          "persons": 665,
          "totalPersons": 219296,
          "place": 218632
  },
  {
          "id": "391",
          "totalScore": 295,
          "persons": 585,
          "totalPersons": 219881,
          "place": 219297
  },
  {
          "id": "392",
          "totalScore": 294,
          "persons": 536,
          "totalPersons": 220417,
          "place": 219882
  },
  {
          "id": "393",
          "totalScore": 293,
          "persons": 577,
          "totalPersons": 220994,
          "place": 220418
  },
  {
          "id": "394",
          "totalScore": 292,
          "persons": 536,
          "totalPersons": 221530,
          "place": 220995
  },
  {
          "id": "395",
          "totalScore": 291,
          "persons": 541,
          "totalPersons": 222071,
          "place": 221531
  },
  {
          "id": "396",
          "totalScore": 290,
          "persons": 593,
          "totalPersons": 222664,
          "place": 222072
  },
  {
          "id": "397",
          "totalScore": 289,
          "persons": 569,
          "totalPersons": 223233,
          "place": 222665
  },
  {
          "id": "398",
          "totalScore": 288,
          "persons": 515,
          "totalPersons": 223748,
          "place": 223234
  },
  {
          "id": "399",
          "totalScore": 287,
          "persons": 563,
          "totalPersons": 224311,
          "place": 223749
  },
  {
          "id": "400",
          "totalScore": 286,
          "persons": 534,
          "totalPersons": 224845,
          "place": 224312
  },
  {
          "id": "401",
          "totalScore": 285,
          "persons": 516,
          "totalPersons": 225361,
          "place": 224846
  },
  {
          "id": "402",
          "totalScore": 284,
          "persons": 557,
          "totalPersons": 225918,
          "place": 225362
  },
  {
          "id": "403",
          "totalScore": 283,
          "persons": 550,
          "totalPersons": 226468,
          "place": 225919
  },
  {
          "id": "404",
          "totalScore": 282,
          "persons": 504,
          "totalPersons": 226972,
          "place": 226469
  },
  {
          "id": "405",
          "totalScore": 281,
          "persons": 497,
          "totalPersons": 227469,
          "place": 226973
  },
  {
          "id": "406",
          "totalScore": 280,
          "persons": 514,
          "totalPersons": 227983,
          "place": 227470
  },
  {
          "id": "407",
          "totalScore": 279,
          "persons": 515,
          "totalPersons": 228498,
          "place": 227984
  },
  {
          "id": "408",
          "totalScore": 278,
          "persons": 480,
          "totalPersons": 228978,
          "place": 228499
  },
  {
          "id": "409",
          "totalScore": 277,
          "persons": 492,
          "totalPersons": 229470,
          "place": 228979
  },
  {
          "id": "410",
          "totalScore": 276,
          "persons": 483,
          "totalPersons": 229953,
          "place": 229471
  },
  {
          "id": "411",
          "totalScore": 275,
          "persons": 455,
          "totalPersons": 230408,
          "place": 229954
  },
  {
          "id": "412",
          "totalScore": 274,
          "persons": 459,
          "totalPersons": 230867,
          "place": 230409
  },
  {
          "id": "413",
          "totalScore": 273,
          "persons": 512,
          "totalPersons": 231379,
          "place": 230868
  },
  {
          "id": "414",
          "totalScore": 272,
          "persons": 440,
          "totalPersons": 231819,
          "place": 231380
  },
  {
          "id": "415",
          "totalScore": 271,
          "persons": 432,
          "totalPersons": 232251,
          "place": 231820
  },
  {
          "id": "416",
          "totalScore": 270,
          "persons": 458,
          "totalPersons": 232709,
          "place": 232252
  },
  {
          "id": "417",
          "totalScore": 269,
          "persons": 437,
          "totalPersons": 233146,
          "place": 232710
  },
  {
          "id": "418",
          "totalScore": 268,
          "persons": 429,
          "totalPersons": 233575,
          "place": 233147
  },
  {
          "id": "419",
          "totalScore": 267,
          "persons": 428,
          "totalPersons": 234003,
          "place": 233576
  },
  {
          "id": "420",
          "totalScore": 266,
          "persons": 458,
          "totalPersons": 234461,
          "place": 234004
  },
  {
          "id": "421",
          "totalScore": 265,
          "persons": 416,
          "totalPersons": 234877,
          "place": 234462
  },
  {
          "id": "422",
          "totalScore": 264,
          "persons": 428,
          "totalPersons": 235305,
          "place": 234878
  },
  {
          "id": "423",
          "totalScore": 263,
          "persons": 418,
          "totalPersons": 235723,
          "place": 235306
  },
  {
          "id": "424",
          "totalScore": 262,
          "persons": 361,
          "totalPersons": 236084,
          "place": 235724
  },
  {
          "id": "425",
          "totalScore": 261,
          "persons": 388,
          "totalPersons": 236472,
          "place": 236085
  },
  {
          "id": "426",
          "totalScore": 260,
          "persons": 364,
          "totalPersons": 236836,
          "place": 236473
  },
  {
          "id": "427",
          "totalScore": 259,
          "persons": 405,
          "totalPersons": 237241,
          "place": 236837
  },
  {
          "id": "428",
          "totalScore": 258,
          "persons": 402,
          "totalPersons": 237643,
          "place": 237242
  },
  {
          "id": "429",
          "totalScore": 257,
          "persons": 354,
          "totalPersons": 237997,
          "place": 237644
  },
  {
          "id": "430",
          "totalScore": 256,
          "persons": 380,
          "totalPersons": 238377,
          "place": 237998
  },
  {
          "id": "431",
          "totalScore": 255,
          "persons": 353,
          "totalPersons": 238730,
          "place": 238378
  },
  {
          "id": "432",
          "totalScore": 254,
          "persons": 336,
          "totalPersons": 239066,
          "place": 238731
  },
  {
          "id": "433",
          "totalScore": 253,
          "persons": 346,
          "totalPersons": 239412,
          "place": 239067
  },
  {
          "id": "434",
          "totalScore": 252,
          "persons": 378,
          "totalPersons": 239790,
          "place": 239413
  },
  {
          "id": "435",
          "totalScore": 251,
          "persons": 358,
          "totalPersons": 240148,
          "place": 239791
  },
  {
          "id": "436",
          "totalScore": 250,
          "persons": 330,
          "totalPersons": 240478,
          "place": 240149
  },
  {
          "id": "437",
          "totalScore": 249,
          "persons": 375,
          "totalPersons": 240853,
          "place": 240479
  },
  {
          "id": "438",
          "totalScore": 248,
          "persons": 318,
          "totalPersons": 241171,
          "place": 240854
  },
  {
          "id": "439",
          "totalScore": 247,
          "persons": 314,
          "totalPersons": 241485,
          "place": 241172
  },
  {
          "id": "440",
          "totalScore": 246,
          "persons": 306,
          "totalPersons": 241791,
          "place": 241486
  },
  {
          "id": "441",
          "totalScore": 245,
          "persons": 330,
          "totalPersons": 242121,
          "place": 241792
  },
  {
          "id": "442",
          "totalScore": 244,
          "persons": 291,
          "totalPersons": 242412,
          "place": 242122
  },
  {
          "id": "443",
          "totalScore": 243,
          "persons": 282,
          "totalPersons": 242694,
          "place": 242413
  },
  {
          "id": "444",
          "totalScore": 242,
          "persons": 295,
          "totalPersons": 242989,
          "place": 242695
  },
  {
          "id": "445",
          "totalScore": 241,
          "persons": 297,
          "totalPersons": 243286,
          "place": 242990
  },
  {
          "id": "446",
          "totalScore": 240,
          "persons": 250,
          "totalPersons": 243536,
          "place": 243287
  },
  {
          "id": "447",
          "totalScore": 239,
          "persons": 274,
          "totalPersons": 243810,
          "place": 243537
  },
  {
          "id": "448",
          "totalScore": 238,
          "persons": 313,
          "totalPersons": 244123,
          "place": 243811
  },
  {
          "id": "449",
          "totalScore": 237,
          "persons": 268,
          "totalPersons": 244391,
          "place": 244124
  },
  {
          "id": "450",
          "totalScore": 236,
          "persons": 282,
          "totalPersons": 244673,
          "place": 244392
  },
  {
          "id": "451",
          "totalScore": 235,
          "persons": 284,
          "totalPersons": 244957,
          "place": 244674
  },
  {
          "id": "452",
          "totalScore": 234,
          "persons": 256,
          "totalPersons": 245213,
          "place": 244958
  },
  {
          "id": "453",
          "totalScore": 233,
          "persons": 226,
          "totalPersons": 245439,
          "place": 245214
  },
  {
          "id": "454",
          "totalScore": 232,
          "persons": 229,
          "totalPersons": 245668,
          "place": 245440
  },
  {
          "id": "455",
          "totalScore": 231,
          "persons": 218,
          "totalPersons": 245886,
          "place": 245669
  },
  {
          "id": "456",
          "totalScore": 230,
          "persons": 230,
          "totalPersons": 246116,
          "place": 245887
  },
  {
          "id": "457",
          "totalScore": 229,
          "persons": 209,
          "totalPersons": 246325,
          "place": 246117
  },
  {
          "id": "458",
          "totalScore": 228,
          "persons": 232,
          "totalPersons": 246557,
          "place": 246326
  },
  {
          "id": "459",
          "totalScore": 227,
          "persons": 215,
          "totalPersons": 246772,
          "place": 246558
  },
  {
          "id": "460",
          "totalScore": 226,
          "persons": 181,
          "totalPersons": 246953,
          "place": 246773
  },
  {
          "id": "461",
          "totalScore": 225,
          "persons": 195,
          "totalPersons": 247148,
          "place": 246954
  },
  {
          "id": "462",
          "totalScore": 224,
          "persons": 174,
          "totalPersons": 247322,
          "place": 247149
  },
  {
          "id": "463",
          "totalScore": 223,
          "persons": 191,
          "totalPersons": 247513,
          "place": 247323
  },
  {
          "id": "464",
          "totalScore": 222,
          "persons": 165,
          "totalPersons": 247678,
          "place": 247514
  },
  {
          "id": "465",
          "totalScore": 221,
          "persons": 208,
          "totalPersons": 247886,
          "place": 247679
  },
  {
          "id": "466",
          "totalScore": 220,
          "persons": 206,
          "totalPersons": 248092,
          "place": 247887
  },
  {
          "id": "467",
          "totalScore": 219,
          "persons": 197,
          "totalPersons": 248289,
          "place": 248093
  },
  {
          "id": "468",
          "totalScore": 218,
          "persons": 186,
          "totalPersons": 248475,
          "place": 248290
  },
  {
          "id": "469",
          "totalScore": 217,
          "persons": 158,
          "totalPersons": 248633,
          "place": 248476
  },
  {
          "id": "470",
          "totalScore": 216,
          "persons": 189,
          "totalPersons": 248822,
          "place": 248634
  },
  {
          "id": "471",
          "totalScore": 215,
          "persons": 156,
          "totalPersons": 248978,
          "place": 248823
  },
  {
          "id": "472",
          "totalScore": 214,
          "persons": 155,
          "totalPersons": 249133,
          "place": 248979
  },
  {
          "id": "473",
          "totalScore": 213,
          "persons": 155,
          "totalPersons": 249288,
          "place": 249134
  },
  {
          "id": "474",
          "totalScore": 212,
          "persons": 151,
          "totalPersons": 249439,
          "place": 249289
  },
  {
          "id": "475",
          "totalScore": 211,
          "persons": 129,
          "totalPersons": 249568,
          "place": 249440
  },
  {
          "id": "476",
          "totalScore": 210,
          "persons": 137,
          "totalPersons": 249705,
          "place": 249569
  },
  {
          "id": "477",
          "totalScore": 209,
          "persons": 144,
          "totalPersons": 249849,
          "place": 249706
  },
  {
          "id": "478",
          "totalScore": 208,
          "persons": 125,
          "totalPersons": 249974,
          "place": 249850
  },
  {
          "id": "479",
          "totalScore": 207,
          "persons": 115,
          "totalPersons": 250089,
          "place": 249975
  },
  {
          "id": "480",
          "totalScore": 206,
          "persons": 114,
          "totalPersons": 250203,
          "place": 250090
  },
  {
          "id": "481",
          "totalScore": 205,
          "persons": 126,
          "totalPersons": 250329,
          "place": 250204
  },
  {
          "id": "482",
          "totalScore": 204,
          "persons": 124,
          "totalPersons": 250453,
          "place": 250330
  },
  {
          "id": "483",
          "totalScore": 203,
          "persons": 121,
          "totalPersons": 250574,
          "place": 250454
  },
  {
          "id": "484",
          "totalScore": 202,
          "persons": 118,
          "totalPersons": 250692,
          "place": 250575
  },
  {
          "id": "485",
          "totalScore": 201,
          "persons": 101,
          "totalPersons": 250793,
          "place": 250693
  },
  {
          "id": "486",
          "totalScore": 200,
          "persons": 93,
          "totalPersons": 250886,
          "place": 250794
  }
]

const jsonData = JSON.stringify({ data: lishiList }, null, 2);

fs.writeFile('2024lishi.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing to file: ', err)
  } else {
    console.log('File has been saves')
  }
})