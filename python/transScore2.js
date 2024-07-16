const fs = require('fs')

const wuli2023List = [
        {
                "id": "0",
                "totalScore": 697,
                "persons": 4,
                "totalPersons": 26,
                "place": 23
        },
        {
                "id": "1",
                "totalScore": 696,
                "persons": 3,
                "totalPersons": 29,
                "place": 27
        },
        {
                "id": "2",
                "totalScore": 695,
                "persons": 3,
                "totalPersons": 32,
                "place": 30
        },
        {
                "id": "3",
                "totalScore": 694,
                "persons": 4,
                "totalPersons": 36,
                "place": 33
        },
        {
                "id": "4",
                "totalScore": 693,
                "persons": 5,
                "totalPersons": 41,
                "place": 37
        },
        {
                "id": "5",
                "totalScore": 692,
                "persons": 1,
                "totalPersons": 42,
                "place": 42
        },
        {
                "id": "6",
                "totalScore": 691,
                "persons": 6,
                "totalPersons": 48,
                "place": 43
        },
        {
                "id": "7",
                "totalScore": 690,
                "persons": 2,
                "totalPersons": 50,
                "place": 49
        },
        {
                "id": "8",
                "totalScore": 689,
                "persons": 10,
                "totalPersons": 60,
                "place": 51
        },
        {
                "id": "9",
                "totalScore": 688,
                "persons": 4,
                "totalPersons": 64,
                "place": 61
        },
        {
                "id": "10",
                "totalScore": 687,
                "persons": 3,
                "totalPersons": 67,
                "place": 65
        },
        {
                "id": "11",
                "totalScore": 686,
                "persons": 2,
                "totalPersons": 69,
                "place": 68
        },
        {
                "id": "12",
                "totalScore": 685,
                "persons": 2,
                "totalPersons": 71,
                "place": 70
        },
        {
                "id": "13",
                "totalScore": 684,
                "persons": 12,
                "totalPersons": 83,
                "place": 72
        },
        {
                "id": "14",
                "totalScore": 683,
                "persons": 3,
                "totalPersons": 86,
                "place": 84
        },
        {
                "id": "15",
                "totalScore": 682,
                "persons": 15,
                "totalPersons": 101,
                "place": 87
        },
        {
                "id": "16",
                "totalScore": 681,
                "persons": 9,
                "totalPersons": 110,
                "place": 102
        },
        {
                "id": "17",
                "totalScore": 680,
                "persons": 8,
                "totalPersons": 118,
                "place": 111
        },
        {
                "id": "18",
                "totalScore": 679,
                "persons": 14,
                "totalPersons": 132,
                "place": 119
        },
        {
                "id": "19",
                "totalScore": 678,
                "persons": 17,
                "totalPersons": 149,
                "place": 133
        },
        {
                "id": "20",
                "totalScore": 677,
                "persons": 19,
                "totalPersons": 168,
                "place": 150
        },
        {
                "id": "21",
                "totalScore": 676,
                "persons": 19,
                "totalPersons": 187,
                "place": 169
        },
        {
                "id": "22",
                "totalScore": 675,
                "persons": 14,
                "totalPersons": 201,
                "place": 188
        },
        {
                "id": "23",
                "totalScore": 674,
                "persons": 24,
                "totalPersons": 225,
                "place": 202
        },
        {
                "id": "24",
                "totalScore": 673,
                "persons": 18,
                "totalPersons": 243,
                "place": 226
        },
        {
                "id": "25",
                "totalScore": 672,
                "persons": 10,
                "totalPersons": 253,
                "place": 244
        },
        {
                "id": "26",
                "totalScore": 671,
                "persons": 22,
                "totalPersons": 275,
                "place": 254
        },
        {
                "id": "27",
                "totalScore": 670,
                "persons": 28,
                "totalPersons": 303,
                "place": 276
        },
        {
                "id": "28",
                "totalScore": 669,
                "persons": 16,
                "totalPersons": 319,
                "place": 304
        },
        {
                "id": "29",
                "totalScore": 668,
                "persons": 21,
                "totalPersons": 340,
                "place": 320
        },
        {
                "id": "30",
                "totalScore": 667,
                "persons": 32,
                "totalPersons": 372,
                "place": 341
        },
        {
                "id": "31",
                "totalScore": 666,
                "persons": 30,
                "totalPersons": 402,
                "place": 373
        },
        {
                "id": "32",
                "totalScore": 665,
                "persons": 29,
                "totalPersons": 431,
                "place": 403
        },
        {
                "id": "33",
                "totalScore": 664,
                "persons": 25,
                "totalPersons": 456,
                "place": 432
        },
        {
                "id": "34",
                "totalScore": 663,
                "persons": 25,
                "totalPersons": 481,
                "place": 457
        },
        {
                "id": "35",
                "totalScore": 662,
                "persons": 33,
                "totalPersons": 514,
                "place": 482
        },
        {
                "id": "36",
                "totalScore": 661,
                "persons": 28,
                "totalPersons": 542,
                "place": 515
        },
        {
                "id": "37",
                "totalScore": 660,
                "persons": 32,
                "totalPersons": 574,
                "place": 543
        },
        {
                "id": "38",
                "totalScore": 659,
                "persons": 37,
                "totalPersons": 611,
                "place": 575
        },
        {
                "id": "39",
                "totalScore": 658,
                "persons": 30,
                "totalPersons": 641,
                "place": 612
        },
        {
                "id": "40",
                "totalScore": 657,
                "persons": 27,
                "totalPersons": 668,
                "place": 642
        },
        {
                "id": "41",
                "totalScore": 656,
                "persons": 35,
                "totalPersons": 703,
                "place": 669
        },
        {
                "id": "42",
                "totalScore": 655,
                "persons": 44,
                "totalPersons": 747,
                "place": 704
        },
        {
                "id": "43",
                "totalScore": 654,
                "persons": 40,
                "totalPersons": 787,
                "place": 748
        },
        {
                "id": "44",
                "totalScore": 653,
                "persons": 56,
                "totalPersons": 843,
                "place": 788
        },
        {
                "id": "45",
                "totalScore": 652,
                "persons": 37,
                "totalPersons": 880,
                "place": 844
        },
        {
                "id": "46",
                "totalScore": 651,
                "persons": 44,
                "totalPersons": 924,
                "place": 881
        },
        {
                "id": "47",
                "totalScore": 650,
                "persons": 41,
                "totalPersons": 965,
                "place": 925
        },
        {
                "id": "48",
                "totalScore": 649,
                "persons": 43,
                "totalPersons": 1008,
                "place": 966
        },
        {
                "id": "49",
                "totalScore": 648,
                "persons": 56,
                "totalPersons": 1064,
                "place": 1009
        },
        {
                "id": "50",
                "totalScore": 647,
                "persons": 40,
                "totalPersons": 1104,
                "place": 1065
        },
        {
                "id": "51",
                "totalScore": 646,
                "persons": 44,
                "totalPersons": 1148,
                "place": 1105
        },
        {
                "id": "52",
                "totalScore": 645,
                "persons": 46,
                "totalPersons": 1194,
                "place": 1149
        },
        {
                "id": "53",
                "totalScore": 644,
                "persons": 64,
                "totalPersons": 1258,
                "place": 1195
        },
        {
                "id": "54",
                "totalScore": 643,
                "persons": 52,
                "totalPersons": 1310,
                "place": 1259
        },
        {
                "id": "55",
                "totalScore": 642,
                "persons": 60,
                "totalPersons": 1370,
                "place": 1311
        },
        {
                "id": "56",
                "totalScore": 641,
                "persons": 54,
                "totalPersons": 1424,
                "place": 1371
        },
        {
                "id": "57",
                "totalScore": 640,
                "persons": 50,
                "totalPersons": 1474,
                "place": 1425
        },
        {
                "id": "58",
                "totalScore": 639,
                "persons": 64,
                "totalPersons": 1538,
                "place": 1475
        },
        {
                "id": "59",
                "totalScore": 638,
                "persons": 68,
                "totalPersons": 1606,
                "place": 1539
        },
        {
                "id": "60",
                "totalScore": 637,
                "persons": 60,
                "totalPersons": 1666,
                "place": 1607
        },
        {
                "id": "61",
                "totalScore": 636,
                "persons": 67,
                "totalPersons": 1733,
                "place": 1667
        },
        {
                "id": "62",
                "totalScore": 635,
                "persons": 84,
                "totalPersons": 1817,
                "place": 1734
        },
        {
                "id": "63",
                "totalScore": 634,
                "persons": 68,
                "totalPersons": 1885,
                "place": 1818
        },
        {
                "id": "64",
                "totalScore": 633,
                "persons": 78,
                "totalPersons": 1963,
                "place": 1886
        },
        {
                "id": "65",
                "totalScore": 632,
                "persons": 83,
                "totalPersons": 2046,
                "place": 1964
        },
        {
                "id": "66",
                "totalScore": 631,
                "persons": 74,
                "totalPersons": 2120,
                "place": 2047
        },
        {
                "id": "67",
                "totalScore": 630,
                "persons": 76,
                "totalPersons": 2196,
                "place": 2121
        },
        {
                "id": "68",
                "totalScore": 629,
                "persons": 78,
                "totalPersons": 2274,
                "place": 2197
        },
        {
                "id": "69",
                "totalScore": 628,
                "persons": 76,
                "totalPersons": 2350,
                "place": 2275
        },
        {
                "id": "70",
                "totalScore": 627,
                "persons": 85,
                "totalPersons": 2435,
                "place": 2351
        },
        {
                "id": "71",
                "totalScore": 626,
                "persons": 91,
                "totalPersons": 2526,
                "place": 2436
        },
        {
                "id": "72",
                "totalScore": 625,
                "persons": 74,
                "totalPersons": 2600,
                "place": 2527
        },
        {
                "id": "73",
                "totalScore": 624,
                "persons": 89,
                "totalPersons": 2689,
                "place": 2601
        },
        {
                "id": "74",
                "totalScore": 623,
                "persons": 93,
                "totalPersons": 2782,
                "place": 2690
        },
        {
                "id": "75",
                "totalScore": 622,
                "persons": 73,
                "totalPersons": 2855,
                "place": 2783
        },
        {
                "id": "76",
                "totalScore": 621,
                "persons": 95,
                "totalPersons": 2950,
                "place": 2856
        },
        {
                "id": "77",
                "totalScore": 620,
                "persons": 80,
                "totalPersons": 3030,
                "place": 2951
        },
        {
                "id": "78",
                "totalScore": 619,
                "persons": 101,
                "totalPersons": 3131,
                "place": 3031
        },
        {
                "id": "79",
                "totalScore": 618,
                "persons": 110,
                "totalPersons": 3241,
                "place": 3132
        },
        {
                "id": "80",
                "totalScore": 617,
                "persons": 98,
                "totalPersons": 3339,
                "place": 3242
        },
        {
                "id": "81",
                "totalScore": 616,
                "persons": 73,
                "totalPersons": 3412,
                "place": 3340
        },
        {
                "id": "82",
                "totalScore": 615,
                "persons": 104,
                "totalPersons": 3516,
                "place": 3413
        },
        {
                "id": "83",
                "totalScore": 614,
                "persons": 92,
                "totalPersons": 3608,
                "place": 3517
        },
        {
                "id": "84",
                "totalScore": 613,
                "persons": 105,
                "totalPersons": 3713,
                "place": 3609
        },
        {
                "id": "85",
                "totalScore": 612,
                "persons": 96,
                "totalPersons": 3809,
                "place": 3714
        },
        {
                "id": "86",
                "totalScore": 611,
                "persons": 104,
                "totalPersons": 3913,
                "place": 3810
        },
        {
                "id": "87",
                "totalScore": 610,
                "persons": 114,
                "totalPersons": 4027,
                "place": 3914
        },
        {
                "id": "88",
                "totalScore": 609,
                "persons": 120,
                "totalPersons": 4147,
                "place": 4028
        },
        {
                "id": "89",
                "totalScore": 608,
                "persons": 143,
                "totalPersons": 4290,
                "place": 4148
        },
        {
                "id": "90",
                "totalScore": 607,
                "persons": 107,
                "totalPersons": 4397,
                "place": 4291
        },
        {
                "id": "91",
                "totalScore": 606,
                "persons": 111,
                "totalPersons": 4508,
                "place": 4398
        },
        {
                "id": "92",
                "totalScore": 605,
                "persons": 134,
                "totalPersons": 4642,
                "place": 4509
        },
        {
                "id": "93",
                "totalScore": 604,
                "persons": 143,
                "totalPersons": 4785,
                "place": 4643
        },
        {
                "id": "94",
                "totalScore": 603,
                "persons": 142,
                "totalPersons": 4927,
                "place": 4786
        },
        {
                "id": "95",
                "totalScore": 602,
                "persons": 130,
                "totalPersons": 5057,
                "place": 4928
        },
        {
                "id": "96",
                "totalScore": 601,
                "persons": 133,
                "totalPersons": 5190,
                "place": 5058
        },
        {
                "id": "97",
                "totalScore": 600,
                "persons": 137,
                "totalPersons": 5327,
                "place": 5191
        },
        {
                "id": "98",
                "totalScore": 599,
                "persons": 133,
                "totalPersons": 5460,
                "place": 5328
        },
        {
                "id": "99",
                "totalScore": 598,
                "persons": 145,
                "totalPersons": 5605,
                "place": 5461
        },
        {
                "id": "100",
                "totalScore": 597,
                "persons": 124,
                "totalPersons": 5729,
                "place": 5606
        },
        {
                "id": "101",
                "totalScore": 596,
                "persons": 149,
                "totalPersons": 5878,
                "place": 5730
        },
        {
                "id": "102",
                "totalScore": 595,
                "persons": 176,
                "totalPersons": 6054,
                "place": 5879
        },
        {
                "id": "103",
                "totalScore": 594,
                "persons": 140,
                "totalPersons": 6194,
                "place": 6055
        },
        {
                "id": "104",
                "totalScore": 593,
                "persons": 151,
                "totalPersons": 6345,
                "place": 6195
        },
        {
                "id": "105",
                "totalScore": 592,
                "persons": 184,
                "totalPersons": 6529,
                "place": 6346
        },
        {
                "id": "106",
                "totalScore": 591,
                "persons": 139,
                "totalPersons": 6668,
                "place": 6530
        },
        {
                "id": "107",
                "totalScore": 590,
                "persons": 162,
                "totalPersons": 6830,
                "place": 6669
        },
        {
                "id": "108",
                "totalScore": 589,
                "persons": 128,
                "totalPersons": 6958,
                "place": 6831
        },
        {
                "id": "109",
                "totalScore": 588,
                "persons": 183,
                "totalPersons": 7141,
                "place": 6959
        },
        {
                "id": "110",
                "totalScore": 587,
                "persons": 179,
                "totalPersons": 7320,
                "place": 7142
        },
        {
                "id": "111",
                "totalScore": 586,
                "persons": 166,
                "totalPersons": 7486,
                "place": 7321
        },
        {
                "id": "112",
                "totalScore": 585,
                "persons": 189,
                "totalPersons": 7675,
                "place": 7487
        },
        {
                "id": "113",
                "totalScore": 584,
                "persons": 191,
                "totalPersons": 7866,
                "place": 7676
        },
        {
                "id": "114",
                "totalScore": 583,
                "persons": 185,
                "totalPersons": 8051,
                "place": 7867
        },
        {
                "id": "115",
                "totalScore": 582,
                "persons": 177,
                "totalPersons": 8228,
                "place": 8052
        },
        {
                "id": "116",
                "totalScore": 581,
                "persons": 170,
                "totalPersons": 8398,
                "place": 8229
        },
        {
                "id": "117",
                "totalScore": 580,
                "persons": 203,
                "totalPersons": 8601,
                "place": 8399
        },
        {
                "id": "118",
                "totalScore": 579,
                "persons": 202,
                "totalPersons": 8803,
                "place": 8602
        },
        {
                "id": "119",
                "totalScore": 578,
                "persons": 182,
                "totalPersons": 8985,
                "place": 8804
        },
        {
                "id": "120",
                "totalScore": 577,
                "persons": 203,
                "totalPersons": 9188,
                "place": 8986
        },
        {
                "id": "121",
                "totalScore": 576,
                "persons": 205,
                "totalPersons": 9393,
                "place": 9189
        },
        {
                "id": "122",
                "totalScore": 575,
                "persons": 228,
                "totalPersons": 9621,
                "place": 9394
        },
        {
                "id": "123",
                "totalScore": 574,
                "persons": 222,
                "totalPersons": 9843,
                "place": 9622
        },
        {
                "id": "124",
                "totalScore": 573,
                "persons": 190,
                "totalPersons": 10033,
                "place": 9844
        },
        {
                "id": "125",
                "totalScore": 572,
                "persons": 214,
                "totalPersons": 10247,
                "place": 10034
        },
        {
                "id": "126",
                "totalScore": 571,
                "persons": 207,
                "totalPersons": 10454,
                "place": 10248
        },
        {
                "id": "127",
                "totalScore": 570,
                "persons": 223,
                "totalPersons": 10677,
                "place": 10455
        },
        {
                "id": "128",
                "totalScore": 569,
                "persons": 231,
                "totalPersons": 10908,
                "place": 10678
        },
        {
                "id": "129",
                "totalScore": 568,
                "persons": 235,
                "totalPersons": 11143,
                "place": 10909
        },
        {
                "id": "130",
                "totalScore": 567,
                "persons": 249,
                "totalPersons": 11392,
                "place": 11144
        },
        {
                "id": "131",
                "totalScore": 566,
                "persons": 248,
                "totalPersons": 11640,
                "place": 11393
        },
        {
                "id": "132",
                "totalScore": 565,
                "persons": 235,
                "totalPersons": 11875,
                "place": 11641
        },
        {
                "id": "133",
                "totalScore": 564,
                "persons": 282,
                "totalPersons": 12157,
                "place": 11876
        },
        {
                "id": "134",
                "totalScore": 563,
                "persons": 230,
                "totalPersons": 12387,
                "place": 12158
        },
        {
                "id": "135",
                "totalScore": 562,
                "persons": 263,
                "totalPersons": 12650,
                "place": 12388
        },
        {
                "id": "136",
                "totalScore": 561,
                "persons": 263,
                "totalPersons": 12913,
                "place": 12651
        },
        {
                "id": "137",
                "totalScore": 560,
                "persons": 252,
                "totalPersons": 13165,
                "place": 12914
        },
        {
                "id": "138",
                "totalScore": 559,
                "persons": 259,
                "totalPersons": 13424,
                "place": 13166
        },
        {
                "id": "139",
                "totalScore": 558,
                "persons": 253,
                "totalPersons": 13677,
                "place": 13425
        },
        {
                "id": "140",
                "totalScore": 557,
                "persons": 230,
                "totalPersons": 13907,
                "place": 13678
        },
        {
                "id": "141",
                "totalScore": 556,
                "persons": 260,
                "totalPersons": 14167,
                "place": 13908
        },
        {
                "id": "142",
                "totalScore": 555,
                "persons": 300,
                "totalPersons": 14467,
                "place": 14168
        },
        {
                "id": "143",
                "totalScore": 554,
                "persons": 279,
                "totalPersons": 14746,
                "place": 14468
        },
        {
                "id": "144",
                "totalScore": 553,
                "persons": 292,
                "totalPersons": 15038,
                "place": 14747
        },
        {
                "id": "145",
                "totalScore": 552,
                "persons": 268,
                "totalPersons": 15306,
                "place": 15039
        },
        {
                "id": "146",
                "totalScore": 551,
                "persons": 257,
                "totalPersons": 15563,
                "place": 15307
        },
        {
                "id": "147",
                "totalScore": 550,
                "persons": 302,
                "totalPersons": 15865,
                "place": 15564
        },
        {
                "id": "148",
                "totalScore": 549,
                "persons": 305,
                "totalPersons": 16170,
                "place": 15866
        },
        {
                "id": "149",
                "totalScore": 548,
                "persons": 296,
                "totalPersons": 16466,
                "place": 16171
        },
        {
                "id": "150",
                "totalScore": 547,
                "persons": 336,
                "totalPersons": 16802,
                "place": 16467
        },
        {
                "id": "151",
                "totalScore": 546,
                "persons": 327,
                "totalPersons": 17129,
                "place": 16803
        },
        {
                "id": "152",
                "totalScore": 545,
                "persons": 332,
                "totalPersons": 17461,
                "place": 17130
        },
        {
                "id": "153",
                "totalScore": 544,
                "persons": 298,
                "totalPersons": 17759,
                "place": 17462
        },
        {
                "id": "154",
                "totalScore": 543,
                "persons": 306,
                "totalPersons": 18065,
                "place": 17760
        },
        {
                "id": "155",
                "totalScore": 542,
                "persons": 355,
                "totalPersons": 18420,
                "place": 18066
        },
        {
                "id": "156",
                "totalScore": 541,
                "persons": 372,
                "totalPersons": 18792,
                "place": 18421
        },
        {
                "id": "157",
                "totalScore": 540,
                "persons": 354,
                "totalPersons": 19146,
                "place": 18793
        },
        {
                "id": "158",
                "totalScore": 539,
                "persons": 345,
                "totalPersons": 19491,
                "place": 19147
        },
        {
                "id": "159",
                "totalScore": 538,
                "persons": 342,
                "totalPersons": 19833,
                "place": 19492
        },
        {
                "id": "160",
                "totalScore": 537,
                "persons": 346,
                "totalPersons": 20179,
                "place": 19834
        },
        {
                "id": "161",
                "totalScore": 536,
                "persons": 327,
                "totalPersons": 20506,
                "place": 20180
        },
        {
                "id": "162",
                "totalScore": 535,
                "persons": 360,
                "totalPersons": 20866,
                "place": 20507
        },
        {
                "id": "163",
                "totalScore": 534,
                "persons": 358,
                "totalPersons": 21224,
                "place": 20867
        },
        {
                "id": "164",
                "totalScore": 533,
                "persons": 368,
                "totalPersons": 21592,
                "place": 21225
        },
        {
                "id": "165",
                "totalScore": 532,
                "persons": 342,
                "totalPersons": 21934,
                "place": 21593
        },
        {
                "id": "166",
                "totalScore": 531,
                "persons": 411,
                "totalPersons": 22345,
                "place": 21935
        },
        {
                "id": "167",
                "totalScore": 530,
                "persons": 374,
                "totalPersons": 22719,
                "place": 22346
        },
        {
                "id": "168",
                "totalScore": 529,
                "persons": 378,
                "totalPersons": 23097,
                "place": 22720
        },
        {
                "id": "169",
                "totalScore": 528,
                "persons": 407,
                "totalPersons": 23504,
                "place": 23098
        },
        {
                "id": "170",
                "totalScore": 527,
                "persons": 379,
                "totalPersons": 23883,
                "place": 23505
        },
        {
                "id": "171",
                "totalScore": 526,
                "persons": 410,
                "totalPersons": 24293,
                "place": 23884
        },
        {
                "id": "172",
                "totalScore": 525,
                "persons": 360,
                "totalPersons": 24653,
                "place": 24294
        },
        {
                "id": "173",
                "totalScore": 524,
                "persons": 393,
                "totalPersons": 25046,
                "place": 24654
        },
        {
                "id": "174",
                "totalScore": 523,
                "persons": 416,
                "totalPersons": 25462,
                "place": 25047
        },
        {
                "id": "175",
                "totalScore": 522,
                "persons": 364,
                "totalPersons": 25826,
                "place": 25463
        },
        {
                "id": "176",
                "totalScore": 521,
                "persons": 384,
                "totalPersons": 26210,
                "place": 25827
        },
        {
                "id": "177",
                "totalScore": 520,
                "persons": 370,
                "totalPersons": 26580,
                "place": 26211
        },
        {
                "id": "178",
                "totalScore": 519,
                "persons": 403,
                "totalPersons": 26983,
                "place": 26581
        },
        {
                "id": "179",
                "totalScore": 518,
                "persons": 443,
                "totalPersons": 27426,
                "place": 26984
        },
        {
                "id": "180",
                "totalScore": 517,
                "persons": 429,
                "totalPersons": 27855,
                "place": 27427
        },
        {
                "id": "181",
                "totalScore": 516,
                "persons": 485,
                "totalPersons": 28340,
                "place": 27856
        },
        {
                "id": "182",
                "totalScore": 515,
                "persons": 443,
                "totalPersons": 28783,
                "place": 28341
        },
        {
                "id": "183",
                "totalScore": 514,
                "persons": 424,
                "totalPersons": 29207,
                "place": 28784
        },
        {
                "id": "184",
                "totalScore": 513,
                "persons": 451,
                "totalPersons": 29658,
                "place": 29208
        },
        {
                "id": "185",
                "totalScore": 512,
                "persons": 409,
                "totalPersons": 30067,
                "place": 29659
        },
        {
                "id": "186",
                "totalScore": 511,
                "persons": 428,
                "totalPersons": 30495,
                "place": 30068
        },
        {
                "id": "187",
                "totalScore": 510,
                "persons": 464,
                "totalPersons": 30959,
                "place": 30496
        },
        {
                "id": "188",
                "totalScore": 509,
                "persons": 466,
                "totalPersons": 31425,
                "place": 30960
        },
        {
                "id": "189",
                "totalScore": 508,
                "persons": 424,
                "totalPersons": 31849,
                "place": 31426
        },
        {
                "id": "190",
                "totalScore": 507,
                "persons": 464,
                "totalPersons": 32313,
                "place": 31850
        },
        {
                "id": "191",
                "totalScore": 506,
                "persons": 492,
                "totalPersons": 32805,
                "place": 32314
        },
        {
                "id": "192",
                "totalScore": 505,
                "persons": 477,
                "totalPersons": 33282,
                "place": 32806
        },
        {
                "id": "193",
                "totalScore": 504,
                "persons": 466,
                "totalPersons": 33748,
                "place": 33283
        },
        {
                "id": "194",
                "totalScore": 503,
                "persons": 506,
                "totalPersons": 34254,
                "place": 33749
        },
        {
                "id": "195",
                "totalScore": 502,
                "persons": 464,
                "totalPersons": 34718,
                "place": 34255
        },
        {
                "id": "196",
                "totalScore": 501,
                "persons": 475,
                "totalPersons": 35193,
                "place": 34719
        },
        {
                "id": "197",
                "totalScore": 500,
                "persons": 494,
                "totalPersons": 35687,
                "place": 35194
        },
        {
                "id": "198",
                "totalScore": 499,
                "persons": 460,
                "totalPersons": 36147,
                "place": 35688
        },
        {
                "id": "199",
                "totalScore": 498,
                "persons": 536,
                "totalPersons": 36683,
                "place": 36148
        },
        {
                "id": "200",
                "totalScore": 497,
                "persons": 499,
                "totalPersons": 37182,
                "place": 36684
        },
        {
                "id": "201",
                "totalScore": 496,
                "persons": 514,
                "totalPersons": 37696,
                "place": 37183
        },
        {
                "id": "202",
                "totalScore": 495,
                "persons": 499,
                "totalPersons": 38195,
                "place": 37697
        },
        {
                "id": "203",
                "totalScore": 494,
                "persons": 543,
                "totalPersons": 38738,
                "place": 38196
        },
        {
                "id": "204",
                "totalScore": 493,
                "persons": 511,
                "totalPersons": 39249,
                "place": 38739
        },
        {
                "id": "205",
                "totalScore": 492,
                "persons": 520,
                "totalPersons": 39769,
                "place": 39250
        },
        {
                "id": "206",
                "totalScore": 491,
                "persons": 527,
                "totalPersons": 40296,
                "place": 39770
        },
        {
                "id": "207",
                "totalScore": 490,
                "persons": 549,
                "totalPersons": 40845,
                "place": 40297
        },
        {
                "id": "208",
                "totalScore": 489,
                "persons": 499,
                "totalPersons": 41344,
                "place": 40846
        },
        {
                "id": "209",
                "totalScore": 488,
                "persons": 573,
                "totalPersons": 41917,
                "place": 41345
        },
        {
                "id": "210",
                "totalScore": 487,
                "persons": 566,
                "totalPersons": 42483,
                "place": 41918
        },
        {
                "id": "211",
                "totalScore": 486,
                "persons": 568,
                "totalPersons": 43051,
                "place": 42484
        },
        {
                "id": "212",
                "totalScore": 485,
                "persons": 537,
                "totalPersons": 43588,
                "place": 43052
        },
        {
                "id": "213",
                "totalScore": 484,
                "persons": 533,
                "totalPersons": 44121,
                "place": 43589
        },
        {
                "id": "214",
                "totalScore": 483,
                "persons": 536,
                "totalPersons": 44657,
                "place": 44122
        },
        {
                "id": "215",
                "totalScore": 482,
                "persons": 568,
                "totalPersons": 45225,
                "place": 44658
        },
        {
                "id": "216",
                "totalScore": 481,
                "persons": 638,
                "totalPersons": 45863,
                "place": 45226
        },
        {
                "id": "217",
                "totalScore": 480,
                "persons": 592,
                "totalPersons": 46455,
                "place": 45864
        },
        {
                "id": "218",
                "totalScore": 479,
                "persons": 557,
                "totalPersons": 47012,
                "place": 46456
        },
        {
                "id": "219",
                "totalScore": 478,
                "persons": 605,
                "totalPersons": 47617,
                "place": 47013
        },
        {
                "id": "220",
                "totalScore": 477,
                "persons": 576,
                "totalPersons": 48193,
                "place": 47618
        },
        {
                "id": "221",
                "totalScore": 476,
                "persons": 643,
                "totalPersons": 48836,
                "place": 48194
        },
        {
                "id": "222",
                "totalScore": 475,
                "persons": 571,
                "totalPersons": 49407,
                "place": 48837
        },
        {
                "id": "223",
                "totalScore": 474,
                "persons": 578,
                "totalPersons": 49985,
                "place": 49408
        },
        {
                "id": "224",
                "totalScore": 473,
                "persons": 585,
                "totalPersons": 50570,
                "place": 49986
        },
        {
                "id": "225",
                "totalScore": 472,
                "persons": 598,
                "totalPersons": 51168,
                "place": 50571
        },
        {
                "id": "226",
                "totalScore": 471,
                "persons": 584,
                "totalPersons": 51752,
                "place": 51169
        },
        {
                "id": "227",
                "totalScore": 470,
                "persons": 666,
                "totalPersons": 52418,
                "place": 51753
        },
        {
                "id": "228",
                "totalScore": 469,
                "persons": 600,
                "totalPersons": 53018,
                "place": 52419
        },
        {
                "id": "229",
                "totalScore": 468,
                "persons": 630,
                "totalPersons": 53648,
                "place": 53019
        },
        {
                "id": "230",
                "totalScore": 467,
                "persons": 639,
                "totalPersons": 54287,
                "place": 53649
        },
        {
                "id": "231",
                "totalScore": 466,
                "persons": 596,
                "totalPersons": 54883,
                "place": 54288
        },
        {
                "id": "232",
                "totalScore": 465,
                "persons": 648,
                "totalPersons": 55531,
                "place": 54884
        },
        {
                "id": "233",
                "totalScore": 464,
                "persons": 628,
                "totalPersons": 56159,
                "place": 55532
        },
        {
                "id": "234",
                "totalScore": 463,
                "persons": 610,
                "totalPersons": 56769,
                "place": 56160
        },
        {
                "id": "235",
                "totalScore": 462,
                "persons": 592,
                "totalPersons": 57361,
                "place": 56770
        },
        {
                "id": "236",
                "totalScore": 461,
                "persons": 651,
                "totalPersons": 58012,
                "place": 57362
        },
        {
                "id": "237",
                "totalScore": 460,
                "persons": 657,
                "totalPersons": 58669,
                "place": 58013
        },
        {
                "id": "238",
                "totalScore": 459,
                "persons": 625,
                "totalPersons": 59294,
                "place": 58670
        },
        {
                "id": "239",
                "totalScore": 458,
                "persons": 658,
                "totalPersons": 59952,
                "place": 59295
        },
        {
                "id": "240",
                "totalScore": 457,
                "persons": 652,
                "totalPersons": 60604,
                "place": 59953
        },
        {
                "id": "241",
                "totalScore": 456,
                "persons": 653,
                "totalPersons": 61257,
                "place": 60605
        },
        {
                "id": "242",
                "totalScore": 455,
                "persons": 641,
                "totalPersons": 61898,
                "place": 61258
        },
        {
                "id": "243",
                "totalScore": 454,
                "persons": 679,
                "totalPersons": 62577,
                "place": 61899
        },
        {
                "id": "244",
                "totalScore": 453,
                "persons": 651,
                "totalPersons": 63228,
                "place": 62578
        },
        {
                "id": "245",
                "totalScore": 452,
                "persons": 694,
                "totalPersons": 63922,
                "place": 63229
        },
        {
                "id": "246",
                "totalScore": 451,
                "persons": 674,
                "totalPersons": 64596,
                "place": 63923
        },
        {
                "id": "247",
                "totalScore": 450,
                "persons": 680,
                "totalPersons": 65276,
                "place": 64597
        },
        {
                "id": "248",
                "totalScore": 449,
                "persons": 681,
                "totalPersons": 65957,
                "place": 65277
        },
        {
                "id": "249",
                "totalScore": 448,
                "persons": 696,
                "totalPersons": 66653,
                "place": 65958
        },
        {
                "id": "250",
                "totalScore": 447,
                "persons": 720,
                "totalPersons": 67373,
                "place": 66654
        },
        {
                "id": "251",
                "totalScore": 446,
                "persons": 712,
                "totalPersons": 68085,
                "place": 67374
        },
        {
                "id": "252",
                "totalScore": 445,
                "persons": 751,
                "totalPersons": 68836,
                "place": 68086
        },
        {
                "id": "253",
                "totalScore": 444,
                "persons": 686,
                "totalPersons": 69522,
                "place": 68837
        },
        {
                "id": "254",
                "totalScore": 443,
                "persons": 667,
                "totalPersons": 70189,
                "place": 69523
        },
        {
                "id": "255",
                "totalScore": 442,
                "persons": 704,
                "totalPersons": 70893,
                "place": 70190
        },
        {
                "id": "256",
                "totalScore": 441,
                "persons": 727,
                "totalPersons": 71620,
                "place": 70894
        },
        {
                "id": "257",
                "totalScore": 440,
                "persons": 727,
                "totalPersons": 72347,
                "place": 71621
        },
        {
                "id": "258",
                "totalScore": 439,
                "persons": 786,
                "totalPersons": 73133,
                "place": 72348
        },
        {
                "id": "259",
                "totalScore": 438,
                "persons": 689,
                "totalPersons": 73822,
                "place": 73134
        },
        {
                "id": "260",
                "totalScore": 437,
                "persons": 815,
                "totalPersons": 74637,
                "place": 73823
        },
        {
                "id": "261",
                "totalScore": 436,
                "persons": 726,
                "totalPersons": 75363,
                "place": 74638
        },
        {
                "id": "262",
                "totalScore": 435,
                "persons": 727,
                "totalPersons": 76090,
                "place": 75364
        },
        {
                "id": "263",
                "totalScore": 434,
                "persons": 742,
                "totalPersons": 76832,
                "place": 76091
        },
        {
                "id": "264",
                "totalScore": 433,
                "persons": 706,
                "totalPersons": 77538,
                "place": 76833
        },
        {
                "id": "265",
                "totalScore": 432,
                "persons": 747,
                "totalPersons": 78285,
                "place": 77539
        },
        {
                "id": "266",
                "totalScore": 431,
                "persons": 707,
                "totalPersons": 78992,
                "place": 78286
        },
        {
                "id": "267",
                "totalScore": 430,
                "persons": 718,
                "totalPersons": 79710,
                "place": 78993
        },
        {
                "id": "268",
                "totalScore": 429,
                "persons": 772,
                "totalPersons": 80482,
                "place": 79711
        },
        {
                "id": "269",
                "totalScore": 428,
                "persons": 755,
                "totalPersons": 81237,
                "place": 80483
        },
        {
                "id": "270",
                "totalScore": 427,
                "persons": 735,
                "totalPersons": 81972,
                "place": 81238
        },
        {
                "id": "271",
                "totalScore": 426,
                "persons": 749,
                "totalPersons": 82721,
                "place": 81973
        },
        {
                "id": "272",
                "totalScore": 425,
                "persons": 772,
                "totalPersons": 83493,
                "place": 82722
        },
        {
                "id": "273",
                "totalScore": 424,
                "persons": 778,
                "totalPersons": 84271,
                "place": 83494
        },
        {
                "id": "274",
                "totalScore": 423,
                "persons": 754,
                "totalPersons": 85025,
                "place": 84272
        },
        {
                "id": "275",
                "totalScore": 422,
                "persons": 813,
                "totalPersons": 85838,
                "place": 85026
        },
        {
                "id": "276",
                "totalScore": 421,
                "persons": 778,
                "totalPersons": 86616,
                "place": 85839
        },
        {
                "id": "277",
                "totalScore": 420,
                "persons": 775,
                "totalPersons": 87391,
                "place": 86617
        },
        {
                "id": "278",
                "totalScore": 419,
                "persons": 794,
                "totalPersons": 88185,
                "place": 87392
        },
        {
                "id": "279",
                "totalScore": 418,
                "persons": 746,
                "totalPersons": 88931,
                "place": 88186
        },
        {
                "id": "280",
                "totalScore": 417,
                "persons": 783,
                "totalPersons": 89714,
                "place": 88932
        },
        {
                "id": "281",
                "totalScore": 416,
                "persons": 777,
                "totalPersons": 90491,
                "place": 89715
        },
        {
                "id": "282",
                "totalScore": 415,
                "persons": 800,
                "totalPersons": 91291,
                "place": 90492
        },
        {
                "id": "283",
                "totalScore": 414,
                "persons": 817,
                "totalPersons": 92108,
                "place": 91292
        },
        {
                "id": "284",
                "totalScore": 413,
                "persons": 805,
                "totalPersons": 92913,
                "place": 92109
        },
        {
                "id": "285",
                "totalScore": 412,
                "persons": 857,
                "totalPersons": 93770,
                "place": 92914
        },
        {
                "id": "286",
                "totalScore": 411,
                "persons": 803,
                "totalPersons": 94573,
                "place": 93771
        },
        {
                "id": "287",
                "totalScore": 410,
                "persons": 848,
                "totalPersons": 95421,
                "place": 94574
        },
        {
                "id": "288",
                "totalScore": 409,
                "persons": 794,
                "totalPersons": 96215,
                "place": 95422
        },
        {
                "id": "289",
                "totalScore": 408,
                "persons": 847,
                "totalPersons": 97062,
                "place": 96216
        },
        {
                "id": "290",
                "totalScore": 407,
                "persons": 834,
                "totalPersons": 97896,
                "place": 97063
        },
        {
                "id": "291",
                "totalScore": 406,
                "persons": 868,
                "totalPersons": 98764,
                "place": 97897
        },
        {
                "id": "292",
                "totalScore": 405,
                "persons": 826,
                "totalPersons": 99590,
                "place": 98765
        },
        {
                "id": "293",
                "totalScore": 404,
                "persons": 819,
                "totalPersons": 100409,
                "place": 99591
        },
        {
                "id": "294",
                "totalScore": 403,
                "persons": 790,
                "totalPersons": 101199,
                "place": 100410
        },
        {
                "id": "295",
                "totalScore": 402,
                "persons": 897,
                "totalPersons": 102096,
                "place": 101200
        },
        {
                "id": "296",
                "totalScore": 401,
                "persons": 803,
                "totalPersons": 102899,
                "place": 102097
        },
        {
                "id": "297",
                "totalScore": 400,
                "persons": 848,
                "totalPersons": 103747,
                "place": 102900
        },
        {
                "id": "298",
                "totalScore": 399,
                "persons": 884,
                "totalPersons": 104631,
                "place": 103748
        },
        {
                "id": "299",
                "totalScore": 398,
                "persons": 892,
                "totalPersons": 105523,
                "place": 104632
        },
        {
                "id": "300",
                "totalScore": 397,
                "persons": 900,
                "totalPersons": 106423,
                "place": 105524
        },
        {
                "id": "301",
                "totalScore": 396,
                "persons": 835,
                "totalPersons": 107258,
                "place": 106424
        },
        {
                "id": "302",
                "totalScore": 395,
                "persons": 866,
                "totalPersons": 108124,
                "place": 107259
        },
        {
                "id": "303",
                "totalScore": 394,
                "persons": 909,
                "totalPersons": 109033,
                "place": 108125
        },
        {
                "id": "304",
                "totalScore": 393,
                "persons": 858,
                "totalPersons": 109891,
                "place": 109034
        },
        {
                "id": "305",
                "totalScore": 392,
                "persons": 884,
                "totalPersons": 110775,
                "place": 109892
        },
        {
                "id": "306",
                "totalScore": 391,
                "persons": 854,
                "totalPersons": 111629,
                "place": 110776
        },
        {
                "id": "307",
                "totalScore": 390,
                "persons": 839,
                "totalPersons": 112468,
                "place": 111630
        },
        {
                "id": "308",
                "totalScore": 389,
                "persons": 903,
                "totalPersons": 113371,
                "place": 112469
        },
        {
                "id": "309",
                "totalScore": 388,
                "persons": 911,
                "totalPersons": 114282,
                "place": 113372
        },
        {
                "id": "310",
                "totalScore": 387,
                "persons": 875,
                "totalPersons": 115157,
                "place": 114283
        },
        {
                "id": "311",
                "totalScore": 386,
                "persons": 924,
                "totalPersons": 116081,
                "place": 115158
        },
        {
                "id": "312",
                "totalScore": 385,
                "persons": 896,
                "totalPersons": 116977,
                "place": 116082
        },
        {
                "id": "313",
                "totalScore": 384,
                "persons": 877,
                "totalPersons": 117854,
                "place": 116978
        },
        {
                "id": "314",
                "totalScore": 383,
                "persons": 879,
                "totalPersons": 118733,
                "place": 117855
        },
        {
                "id": "315",
                "totalScore": 382,
                "persons": 912,
                "totalPersons": 119645,
                "place": 118734
        },
        {
                "id": "316",
                "totalScore": 381,
                "persons": 891,
                "totalPersons": 120536,
                "place": 119646
        },
        {
                "id": "317",
                "totalScore": 380,
                "persons": 903,
                "totalPersons": 121439,
                "place": 120537
        },
        {
                "id": "318",
                "totalScore": 379,
                "persons": 883,
                "totalPersons": 122322,
                "place": 121440
        },
        {
                "id": "319",
                "totalScore": 378,
                "persons": 923,
                "totalPersons": 123245,
                "place": 122323
        },
        {
                "id": "320",
                "totalScore": 377,
                "persons": 929,
                "totalPersons": 124174,
                "place": 123246
        },
        {
                "id": "321",
                "totalScore": 376,
                "persons": 902,
                "totalPersons": 125076,
                "place": 124175
        },
        {
                "id": "322",
                "totalScore": 375,
                "persons": 927,
                "totalPersons": 126003,
                "place": 125077
        },
        {
                "id": "323",
                "totalScore": 374,
                "persons": 861,
                "totalPersons": 126864,
                "place": 126004
        },
        {
                "id": "324",
                "totalScore": 373,
                "persons": 857,
                "totalPersons": 127721,
                "place": 126865
        },
        {
                "id": "325",
                "totalScore": 372,
                "persons": 925,
                "totalPersons": 128646,
                "place": 127722
        },
        {
                "id": "326",
                "totalScore": 371,
                "persons": 955,
                "totalPersons": 129601,
                "place": 128647
        },
        {
                "id": "327",
                "totalScore": 370,
                "persons": 931,
                "totalPersons": 130532,
                "place": 129602
        },
        {
                "id": "328",
                "totalScore": 369,
                "persons": 919,
                "totalPersons": 131451,
                "place": 130533
        },
        {
                "id": "329",
                "totalScore": 368,
                "persons": 948,
                "totalPersons": 132399,
                "place": 131452
        },
        {
                "id": "330",
                "totalScore": 367,
                "persons": 892,
                "totalPersons": 133291,
                "place": 132400
        },
        {
                "id": "331",
                "totalScore": 366,
                "persons": 914,
                "totalPersons": 134205,
                "place": 133292
        },
        {
                "id": "332",
                "totalScore": 365,
                "persons": 928,
                "totalPersons": 135133,
                "place": 134206
        },
        {
                "id": "333",
                "totalScore": 364,
                "persons": 917,
                "totalPersons": 136050,
                "place": 135134
        },
        {
                "id": "334",
                "totalScore": 363,
                "persons": 878,
                "totalPersons": 136928,
                "place": 136051
        },
        {
                "id": "335",
                "totalScore": 362,
                "persons": 860,
                "totalPersons": 137788,
                "place": 136929
        },
        {
                "id": "336",
                "totalScore": 361,
                "persons": 919,
                "totalPersons": 138707,
                "place": 137789
        },
        {
                "id": "337",
                "totalScore": 360,
                "persons": 897,
                "totalPersons": 139604,
                "place": 138708
        },
        {
                "id": "338",
                "totalScore": 359,
                "persons": 911,
                "totalPersons": 140515,
                "place": 139605
        },
        {
                "id": "339",
                "totalScore": 358,
                "persons": 945,
                "totalPersons": 141460,
                "place": 140516
        },
        {
                "id": "340",
                "totalScore": 357,
                "persons": 928,
                "totalPersons": 142388,
                "place": 141461
        },
        {
                "id": "341",
                "totalScore": 356,
                "persons": 896,
                "totalPersons": 143284,
                "place": 142389
        },
        {
                "id": "342",
                "totalScore": 355,
                "persons": 943,
                "totalPersons": 144227,
                "place": 143285
        },
        {
                "id": "343",
                "totalScore": 354,
                "persons": 882,
                "totalPersons": 145109,
                "place": 144228
        },
        {
                "id": "344",
                "totalScore": 353,
                "persons": 913,
                "totalPersons": 146022,
                "place": 145110
        },
        {
                "id": "345",
                "totalScore": 352,
                "persons": 914,
                "totalPersons": 146936,
                "place": 146023
        },
        {
                "id": "346",
                "totalScore": 351,
                "persons": 904,
                "totalPersons": 147840,
                "place": 146937
        },
        {
                "id": "347",
                "totalScore": 350,
                "persons": 915,
                "totalPersons": 148755,
                "place": 147841
        },
        {
                "id": "348",
                "totalScore": 349,
                "persons": 921,
                "totalPersons": 149676,
                "place": 148756
        },
        {
                "id": "349",
                "totalScore": 348,
                "persons": 883,
                "totalPersons": 150559,
                "place": 149677
        },
        {
                "id": "350",
                "totalScore": 347,
                "persons": 889,
                "totalPersons": 151448,
                "place": 150560
        },
        {
                "id": "351",
                "totalScore": 346,
                "persons": 887,
                "totalPersons": 152335,
                "place": 151449
        },
        {
                "id": "352",
                "totalScore": 345,
                "persons": 883,
                "totalPersons": 153218,
                "place": 152336
        },
        {
                "id": "353",
                "totalScore": 344,
                "persons": 789,
                "totalPersons": 154007,
                "place": 153219
        },
        {
                "id": "354",
                "totalScore": 343,
                "persons": 899,
                "totalPersons": 154906,
                "place": 154008
        },
        {
                "id": "355",
                "totalScore": 342,
                "persons": 852,
                "totalPersons": 155758,
                "place": 154907
        },
        {
                "id": "356",
                "totalScore": 341,
                "persons": 846,
                "totalPersons": 156604,
                "place": 155759
        },
        {
                "id": "357",
                "totalScore": 340,
                "persons": 906,
                "totalPersons": 157510,
                "place": 156605
        },
        {
                "id": "358",
                "totalScore": 339,
                "persons": 911,
                "totalPersons": 158421,
                "place": 157511
        },
        {
                "id": "359",
                "totalScore": 338,
                "persons": 858,
                "totalPersons": 159279,
                "place": 158422
        },
        {
                "id": "360",
                "totalScore": 337,
                "persons": 914,
                "totalPersons": 160193,
                "place": 159280
        },
        {
                "id": "361",
                "totalScore": 336,
                "persons": 845,
                "totalPersons": 161038,
                "place": 160194
        },
        {
                "id": "362",
                "totalScore": 335,
                "persons": 834,
                "totalPersons": 161872,
                "place": 161039
        },
        {
                "id": "363",
                "totalScore": 334,
                "persons": 776,
                "totalPersons": 162648,
                "place": 161873
        },
        {
                "id": "364",
                "totalScore": 333,
                "persons": 815,
                "totalPersons": 163463,
                "place": 162649
        },
        {
                "id": "365",
                "totalScore": 332,
                "persons": 868,
                "totalPersons": 164331,
                "place": 163464
        },
        {
                "id": "366",
                "totalScore": 331,
                "persons": 895,
                "totalPersons": 165226,
                "place": 164332
        },
        {
                "id": "367",
                "totalScore": 330,
                "persons": 859,
                "totalPersons": 166085,
                "place": 165227
        },
        {
                "id": "368",
                "totalScore": 329,
                "persons": 858,
                "totalPersons": 166943,
                "place": 166086
        },
        {
                "id": "369",
                "totalScore": 328,
                "persons": 818,
                "totalPersons": 167761,
                "place": 166944
        },
        {
                "id": "370",
                "totalScore": 327,
                "persons": 806,
                "totalPersons": 168567,
                "place": 167762
        },
        {
                "id": "371",
                "totalScore": 326,
                "persons": 850,
                "totalPersons": 169417,
                "place": 168568
        },
        {
                "id": "372",
                "totalScore": 325,
                "persons": 826,
                "totalPersons": 170243,
                "place": 169418
        },
        {
                "id": "373",
                "totalScore": 324,
                "persons": 766,
                "totalPersons": 171009,
                "place": 170244
        },
        {
                "id": "374",
                "totalScore": 323,
                "persons": 846,
                "totalPersons": 171855,
                "place": 171010
        },
        {
                "id": "375",
                "totalScore": 322,
                "persons": 819,
                "totalPersons": 172674,
                "place": 171856
        },
        {
                "id": "376",
                "totalScore": 321,
                "persons": 826,
                "totalPersons": 173500,
                "place": 172675
        },
        {
                "id": "377",
                "totalScore": 320,
                "persons": 793,
                "totalPersons": 174293,
                "place": 173501
        },
        {
                "id": "378",
                "totalScore": 319,
                "persons": 788,
                "totalPersons": 175081,
                "place": 174294
        },
        {
                "id": "379",
                "totalScore": 318,
                "persons": 794,
                "totalPersons": 175875,
                "place": 175082
        },
        {
                "id": "380",
                "totalScore": 317,
                "persons": 765,
                "totalPersons": 176640,
                "place": 175876
        },
        {
                "id": "381",
                "totalScore": 316,
                "persons": 768,
                "totalPersons": 177408,
                "place": 176641
        },
        {
                "id": "382",
                "totalScore": 315,
                "persons": 720,
                "totalPersons": 178128,
                "place": 177409
        },
        {
                "id": "383",
                "totalScore": 314,
                "persons": 760,
                "totalPersons": 178888,
                "place": 178129
        },
        {
                "id": "384",
                "totalScore": 313,
                "persons": 758,
                "totalPersons": 179646,
                "place": 178889
        },
        {
                "id": "385",
                "totalScore": 312,
                "persons": 785,
                "totalPersons": 180431,
                "place": 179647
        },
        {
                "id": "386",
                "totalScore": 311,
                "persons": 739,
                "totalPersons": 181170,
                "place": 180432
        },
        {
                "id": "387",
                "totalScore": 310,
                "persons": 739,
                "totalPersons": 181909,
                "place": 181171
        },
        {
                "id": "388",
                "totalScore": 309,
                "persons": 673,
                "totalPersons": 182582,
                "place": 181910
        },
        {
                "id": "389",
                "totalScore": 308,
                "persons": 748,
                "totalPersons": 183330,
                "place": 182583
        },
        {
                "id": "390",
                "totalScore": 307,
                "persons": 740,
                "totalPersons": 184070,
                "place": 183331
        },
        {
                "id": "391",
                "totalScore": 306,
                "persons": 696,
                "totalPersons": 184766,
                "place": 184071
        },
        {
                "id": "392",
                "totalScore": 305,
                "persons": 686,
                "totalPersons": 185452,
                "place": 184767
        },
        {
                "id": "393",
                "totalScore": 304,
                "persons": 653,
                "totalPersons": 186105,
                "place": 185453
        },
        {
                "id": "394",
                "totalScore": 303,
                "persons": 672,
                "totalPersons": 186777,
                "place": 186106
        },
        {
                "id": "395",
                "totalScore": 302,
                "persons": 687,
                "totalPersons": 187464,
                "place": 186778
        },
        {
                "id": "396",
                "totalScore": 301,
                "persons": 707,
                "totalPersons": 188171,
                "place": 187465
        },
        {
                "id": "397",
                "totalScore": 300,
                "persons": 617,
                "totalPersons": 188788,
                "place": 188172
        },
        {
                "id": "398",
                "totalScore": 299,
                "persons": 682,
                "totalPersons": 189470,
                "place": 188789
        },
        {
                "id": "399",
                "totalScore": 298,
                "persons": 691,
                "totalPersons": 190161,
                "place": 189471
        },
        {
                "id": "400",
                "totalScore": 297,
                "persons": 636,
                "totalPersons": 190797,
                "place": 190162
        },
        {
                "id": "401",
                "totalScore": 296,
                "persons": 652,
                "totalPersons": 191449,
                "place": 190798
        },
        {
                "id": "402",
                "totalScore": 295,
                "persons": 677,
                "totalPersons": 192126,
                "place": 191450
        },
        {
                "id": "403",
                "totalScore": 294,
                "persons": 631,
                "totalPersons": 192757,
                "place": 192127
        },
        {
                "id": "404",
                "totalScore": 293,
                "persons": 650,
                "totalPersons": 193407,
                "place": 192758
        },
        {
                "id": "405",
                "totalScore": 292,
                "persons": 634,
                "totalPersons": 194041,
                "place": 193408
        },
        {
                "id": "406",
                "totalScore": 291,
                "persons": 611,
                "totalPersons": 194652,
                "place": 194042
        },
        {
                "id": "407",
                "totalScore": 290,
                "persons": 615,
                "totalPersons": 195267,
                "place": 194653
        },
        {
                "id": "408",
                "totalScore": 289,
                "persons": 590,
                "totalPersons": 195857,
                "place": 195268
        },
        {
                "id": "409",
                "totalScore": 288,
                "persons": 606,
                "totalPersons": 196463,
                "place": 195858
        },
        {
                "id": "410",
                "totalScore": 287,
                "persons": 635,
                "totalPersons": 197098,
                "place": 196464
        },
        {
                "id": "411",
                "totalScore": 286,
                "persons": 632,
                "totalPersons": 197730,
                "place": 197099
        },
        {
                "id": "412",
                "totalScore": 285,
                "persons": 611,
                "totalPersons": 198341,
                "place": 197731
        },
        {
                "id": "413",
                "totalScore": 284,
                "persons": 570,
                "totalPersons": 198911,
                "place": 198342
        },
        {
                "id": "414",
                "totalScore": 283,
                "persons": 602,
                "totalPersons": 199513,
                "place": 198912
        },
        {
                "id": "415",
                "totalScore": 282,
                "persons": 557,
                "totalPersons": 200070,
                "place": 199514
        },
        {
                "id": "416",
                "totalScore": 281,
                "persons": 550,
                "totalPersons": 200620,
                "place": 200071
        },
        {
                "id": "417",
                "totalScore": 280,
                "persons": 567,
                "totalPersons": 201187,
                "place": 200621
        },
        {
                "id": "418",
                "totalScore": 279,
                "persons": 531,
                "totalPersons": 201718,
                "place": 201188
        },
        {
                "id": "419",
                "totalScore": 278,
                "persons": 545,
                "totalPersons": 202263,
                "place": 201719
        },
        {
                "id": "420",
                "totalScore": 277,
                "persons": 576,
                "totalPersons": 202839,
                "place": 202264
        },
        {
                "id": "421",
                "totalScore": 276,
                "persons": 583,
                "totalPersons": 203422,
                "place": 202840
        },
        {
                "id": "422",
                "totalScore": 275,
                "persons": 537,
                "totalPersons": 203959,
                "place": 203423
        },
        {
                "id": "423",
                "totalScore": 274,
                "persons": 582,
                "totalPersons": 204541,
                "place": 203960
        },
        {
                "id": "424",
                "totalScore": 273,
                "persons": 536,
                "totalPersons": 205077,
                "place": 204542
        },
        {
                "id": "425",
                "totalScore": 272,
                "persons": 514,
                "totalPersons": 205591,
                "place": 205078
        },
        {
                "id": "426",
                "totalScore": 271,
                "persons": 503,
                "totalPersons": 206094,
                "place": 205592
        },
        {
                "id": "427",
                "totalScore": 270,
                "persons": 519,
                "totalPersons": 206613,
                "place": 206095
        },
        {
                "id": "428",
                "totalScore": 269,
                "persons": 553,
                "totalPersons": 207166,
                "place": 206614
        },
        {
                "id": "429",
                "totalScore": 268,
                "persons": 512,
                "totalPersons": 207678,
                "place": 207167
        },
        {
                "id": "430",
                "totalScore": 267,
                "persons": 470,
                "totalPersons": 208148,
                "place": 207679
        },
        {
                "id": "431",
                "totalScore": 266,
                "persons": 487,
                "totalPersons": 208635,
                "place": 208149
        },
        {
                "id": "432",
                "totalScore": 265,
                "persons": 505,
                "totalPersons": 209140,
                "place": 208636
        },
        {
                "id": "433",
                "totalScore": 264,
                "persons": 502,
                "totalPersons": 209642,
                "place": 209141
        },
        {
                "id": "434",
                "totalScore": 263,
                "persons": 470,
                "totalPersons": 210112,
                "place": 209643
        },
        {
                "id": "435",
                "totalScore": 262,
                "persons": 510,
                "totalPersons": 210622,
                "place": 210113
        },
        {
                "id": "436",
                "totalScore": 261,
                "persons": 423,
                "totalPersons": 211045,
                "place": 210623
        },
        {
                "id": "437",
                "totalScore": 260,
                "persons": 434,
                "totalPersons": 211479,
                "place": 211046
        },
        {
                "id": "438",
                "totalScore": 259,
                "persons": 451,
                "totalPersons": 211930,
                "place": 211480
        },
        {
                "id": "439",
                "totalScore": 258,
                "persons": 424,
                "totalPersons": 212354,
                "place": 211931
        },
        {
                "id": "440",
                "totalScore": 257,
                "persons": 447,
                "totalPersons": 212801,
                "place": 212355
        },
        {
                "id": "441",
                "totalScore": 256,
                "persons": 435,
                "totalPersons": 213236,
                "place": 212802
        },
        {
                "id": "442",
                "totalScore": 255,
                "persons": 453,
                "totalPersons": 213689,
                "place": 213237
        },
        {
                "id": "443",
                "totalScore": 254,
                "persons": 431,
                "totalPersons": 214120,
                "place": 213690
        },
        {
                "id": "444",
                "totalScore": 253,
                "persons": 428,
                "totalPersons": 214548,
                "place": 214121
        },
        {
                "id": "445",
                "totalScore": 252,
                "persons": 445,
                "totalPersons": 214993,
                "place": 214549
        },
        {
                "id": "446",
                "totalScore": 251,
                "persons": 428,
                "totalPersons": 215421,
                "place": 214994
        },
        {
                "id": "447",
                "totalScore": 250,
                "persons": 424,
                "totalPersons": 215845,
                "place": 215422
        },
        {
                "id": "448",
                "totalScore": 249,
                "persons": 420,
                "totalPersons": 216265,
                "place": 215846
        },
        {
                "id": "449",
                "totalScore": 248,
                "persons": 389,
                "totalPersons": 216654,
                "place": 216266
        },
        {
                "id": "450",
                "totalScore": 247,
                "persons": 402,
                "totalPersons": 217056,
                "place": 216655
        },
        {
                "id": "451",
                "totalScore": 246,
                "persons": 419,
                "totalPersons": 217475,
                "place": 217057
        },
        {
                "id": "452",
                "totalScore": 245,
                "persons": 361,
                "totalPersons": 217836,
                "place": 217476
        },
        {
                "id": "453",
                "totalScore": 244,
                "persons": 373,
                "totalPersons": 218209,
                "place": 217837
        },
        {
                "id": "454",
                "totalScore": 243,
                "persons": 368,
                "totalPersons": 218577,
                "place": 218210
        },
        {
                "id": "455",
                "totalScore": 242,
                "persons": 392,
                "totalPersons": 218969,
                "place": 218578
        },
        {
                "id": "456",
                "totalScore": 241,
                "persons": 381,
                "totalPersons": 219350,
                "place": 218970
        },
        {
                "id": "457",
                "totalScore": 240,
                "persons": 376,
                "totalPersons": 219726,
                "place": 219351
        },
        {
                "id": "458",
                "totalScore": 239,
                "persons": 421,
                "totalPersons": 220147,
                "place": 219727
        },
        {
                "id": "459",
                "totalScore": 238,
                "persons": 344,
                "totalPersons": 220491,
                "place": 220148
        },
        {
                "id": "460",
                "totalScore": 237,
                "persons": 381,
                "totalPersons": 220872,
                "place": 220492
        },
        {
                "id": "461",
                "totalScore": 236,
                "persons": 400,
                "totalPersons": 221272,
                "place": 220873
        },
        {
                "id": "462",
                "totalScore": 235,
                "persons": 352,
                "totalPersons": 221624,
                "place": 221273
        },
        {
                "id": "463",
                "totalScore": 234,
                "persons": 339,
                "totalPersons": 221963,
                "place": 221625
        },
        {
                "id": "464",
                "totalScore": 233,
                "persons": 366,
                "totalPersons": 222329,
                "place": 221964
        },
        {
                "id": "465",
                "totalScore": 232,
                "persons": 316,
                "totalPersons": 222645,
                "place": 222330
        },
        {
                "id": "466",
                "totalScore": 231,
                "persons": 340,
                "totalPersons": 222985,
                "place": 222646
        },
        {
                "id": "467",
                "totalScore": 230,
                "persons": 370,
                "totalPersons": 223355,
                "place": 222986
        },
        {
                "id": "468",
                "totalScore": 229,
                "persons": 323,
                "totalPersons": 223678,
                "place": 223356
        },
        {
                "id": "469",
                "totalScore": 228,
                "persons": 329,
                "totalPersons": 224007,
                "place": 223679
        },
        {
                "id": "470",
                "totalScore": 227,
                "persons": 313,
                "totalPersons": 224320,
                "place": 224008
        },
        {
                "id": "471",
                "totalScore": 226,
                "persons": 315,
                "totalPersons": 224635,
                "place": 224321
        },
        {
                "id": "472",
                "totalScore": 225,
                "persons": 301,
                "totalPersons": 224936,
                "place": 224636
        },
        {
                "id": "473",
                "totalScore": 224,
                "persons": 298,
                "totalPersons": 225234,
                "place": 224937
        },
        {
                "id": "474",
                "totalScore": 223,
                "persons": 312,
                "totalPersons": 225546,
                "place": 225235
        },
        {
                "id": "475",
                "totalScore": 222,
                "persons": 286,
                "totalPersons": 225832,
                "place": 225547
        },
        {
                "id": "476",
                "totalScore": 221,
                "persons": 310,
                "totalPersons": 226142,
                "place": 225833
        },
        {
                "id": "477",
                "totalScore": 220,
                "persons": 305,
                "totalPersons": 226447,
                "place": 226143
        },
        {
                "id": "478",
                "totalScore": 219,
                "persons": 270,
                "totalPersons": 226717,
                "place": 226448
        },
        {
                "id": "479",
                "totalScore": 218,
                "persons": 288,
                "totalPersons": 227005,
                "place": 226718
        },
        {
                "id": "480",
                "totalScore": 217,
                "persons": 312,
                "totalPersons": 227317,
                "place": 227006
        },
        {
                "id": "481",
                "totalScore": 216,
                "persons": 242,
                "totalPersons": 227559,
                "place": 227318
        },
        {
                "id": "482",
                "totalScore": 215,
                "persons": 332,
                "totalPersons": 227891,
                "place": 227560
        },
        {
                "id": "483",
                "totalScore": 214,
                "persons": 282,
                "totalPersons": 228173,
                "place": 227892
        },
        {
                "id": "484",
                "totalScore": 213,
                "persons": 273,
                "totalPersons": 228446,
                "place": 228174
        },
        {
                "id": "485",
                "totalScore": 212,
                "persons": 270,
                "totalPersons": 228716,
                "place": 228447
        },
        {
                "id": "486",
                "totalScore": 211,
                "persons": 265,
                "totalPersons": 228981,
                "place": 228717
        },
        {
                "id": "487",
                "totalScore": 210,
                "persons": 246,
                "totalPersons": 229227,
                "place": 228982
        },
        {
                "id": "488",
                "totalScore": 209,
                "persons": 274,
                "totalPersons": 229501,
                "place": 229228
        },
        {
                "id": "489",
                "totalScore": 208,
                "persons": 252,
                "totalPersons": 229753,
                "place": 229502
        },
        {
                "id": "490",
                "totalScore": 207,
                "persons": 289,
                "totalPersons": 230042,
                "place": 229754
        },
        {
                "id": "491",
                "totalScore": 206,
                "persons": 236,
                "totalPersons": 230278,
                "place": 230043
        },
        {
                "id": "492",
                "totalScore": 205,
                "persons": 241,
                "totalPersons": 230519,
                "place": 230279
        },
        {
                "id": "493",
                "totalScore": 204,
                "persons": 240,
                "totalPersons": 230759,
                "place": 230520
        },
        {
                "id": "494",
                "totalScore": 203,
                "persons": 228,
                "totalPersons": 230987,
                "place": 230760
        },
        {
                "id": "495",
                "totalScore": 202,
                "persons": 228,
                "totalPersons": 231215,
                "place": 230988
        },
        {
                "id": "496",
                "totalScore": 201,
                "persons": 241,
                "totalPersons": 231456,
                "place": 231216
        },
        {
                "id": "497",
                "totalScore": 200,
                "persons": 216,
                "totalPersons": 231672,
                "place": 231457
        },
        {
                "id": "498",
                "totalScore": 199,
                "persons": 228,
                "totalPersons": 231900,
                "place": 231673
        },
        {
                "id": "499",
                "totalScore": 198,
                "persons": 228,
                "totalPersons": 232128,
                "place": 231901
        },
        {
                "id": "500",
                "totalScore": 197,
                "persons": 232,
                "totalPersons": 232360,
                "place": 232129
        },
        {
                "id": "501",
                "totalScore": 196,
                "persons": 214,
                "totalPersons": 232574,
                "place": 232361
        },
        {
                "id": "502",
                "totalScore": 195,
                "persons": 214,
                "totalPersons": 232788,
                "place": 232575
        },
        {
                "id": "503",
                "totalScore": 194,
                "persons": 227,
                "totalPersons": 233015,
                "place": 232789
        },
        {
                "id": "504",
                "totalScore": 193,
                "persons": 202,
                "totalPersons": 233217,
                "place": 233016
        },
        {
                "id": "505",
                "totalScore": 192,
                "persons": 235,
                "totalPersons": 233452,
                "place": 233218
        },
        {
                "id": "506",
                "totalScore": 191,
                "persons": 236,
                "totalPersons": 233688,
                "place": 233453
        },
        {
                "id": "507",
                "totalScore": 190,
                "persons": 191,
                "totalPersons": 233879,
                "place": 233689
        },
        {
                "id": "508",
                "totalScore": 189,
                "persons": 176,
                "totalPersons": 234055,
                "place": 233880
        },
        {
                "id": "509",
                "totalScore": 188,
                "persons": 189,
                "totalPersons": 234244,
                "place": 234056
        },
        {
                "id": "510",
                "totalScore": 187,
                "persons": 181,
                "totalPersons": 234425,
                "place": 234245
        },
        {
                "id": "511",
                "totalScore": 186,
                "persons": 166,
                "totalPersons": 234591,
                "place": 234426
        },
        {
                "id": "512",
                "totalScore": 185,
                "persons": 167,
                "totalPersons": 234758,
                "place": 234592
        },
        {
                "id": "513",
                "totalScore": 184,
                "persons": 173,
                "totalPersons": 234931,
                "place": 234759
        },
        {
                "id": "514",
                "totalScore": 183,
                "persons": 180,
                "totalPersons": 235111,
                "place": 234932
        },
        {
                "id": "515",
                "totalScore": 182,
                "persons": 186,
                "totalPersons": 235297,
                "place": 235112
        },
        {
                "id": "516",
                "totalScore": 181,
                "persons": 153,
                "totalPersons": 235450,
                "place": 235298
        },
        {
                "id": "517",
                "totalScore": 180,
                "persons": 181,
                "totalPersons": 235631,
                "place": 235451
        }
]

const jsonData = JSON.stringify({ data: wuli2023List }, null, 2);

fs.writeFile('2023wuli.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing to file: ', err)
  } else {
    console.log('File has been saves')
  }
})