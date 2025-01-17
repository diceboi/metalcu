const products = [
  {
    /*Aluminium --------------------------------------------------------------------------------------------------*/
  },

  {
    id: 1,
    name: "Aluminium hidegen hengerelt lemezek, szalagok",
    description:
      "Az alumínium lemezek előnyei más fémtermékekkel szemben: Kitűnő mechanikai tulajdonság, kitűnő korrózióállóság, jó hegeszthetőség, kis fajlagos súly (acél harmada), újrahasznosítható",
    usage:
      "Gépipar, élelmiszeripar, külső - belső építészet, építőipar, vegyipar, járműipar (autó, repülő, vasút, hajó), reklámipar",
    quality: [
      "EN AW-1050A (Al99,5)",
      "EN AW-5005A (AlMg1)",
      "EN AW-5083 (AlMg4,5Mn0,7)",
      "EN AW-5754 (AlMg3)",
      "EN AW-6082 (AlSi1MgMn)",
    ],
    sizes: {
      thickness: [0.5, 0.6],
      sheetsize: [
        {
          name: "alap",
          width: 1000,
          length: 2000,
        },
        {
          name: "közép",
          width: 1250,
          length: 2500,
        },
        {
          name: "nagy",
          width: 1500,
          length: 3000,
        },
        {
          name: "jumbo",
          width: 2000,
          length: 4000,
        },
      ],
      customsize: {
        custom: false,
        maxwidth: 2000,
        maxlenght: 12000,
      },
      standardrolledsize: {
        thickness: [0.5, 3.5],
        width: [1000, 1250, 1500],
      },
      customrolledsize: {
        maxwidth: [2000],
      },
    },
    image: "/termekek/hengereltlemez.webp",
  },
  {
    id: 2,
    name: "Aluminium melegen hengerelt lemezek, szalagok",
    description: "Úgynevezett vastag lemezek",
    usage:
      "Szerszámgyártás, gépgyártás, hajógyártás, tartálygyártás, autóipar, elektromos ipar, csomagoló ipar, orvosi műszergyártás",
    quality: [
      "EN AW-5083 (AlMg4,5Mn0,7)",
      "EN AW-5754 (AlMg3)",
      "EN AW-6082 (AlSi1MgMn)",
    ],
    sizes: {
      thickness: [6, 300],
      sheetsize: [
        {
          name: "alap",
          width: 1000,
          length: 2000,
        },
        {
          name: "közép",
          width: 1250,
          length: 2500,
        },
        {
          name: "nagy",
          width: 1500,
          length: 3000,
        },
      ],
      customsize: {
        custom: false,
        maxwidth: 2000,
        maxlenght: 12000,
      },
      standardrolledsize: {
        thickness: [0.5, 3.5],
        width: [1000, 1250, 1500],
      },
      customrolledsize: {
        maxwidth: "",
      },
    },
    image: "/termekek/melegen-hengerelt-lemez.webp",
  },

  {
    id: 3,
    name: "Aluminium mintás lemezek",
    description: "quintett, duett, diamond",
    usage:
      "járó - lépcsőlapok, gépjármű felépítmények, reklámipar, belsőépítészet, dobozgyártás",
    quality: ["EN AW-5754 (AlMg3)", "EN AW-1050A (Al99,5)"],
    sizes: {
      thickness: [1.5 / 3.0, 5.0 / 6.5],
      sheetsize: [
        {
          name: "alap",
          width: 1000,
          length: 2000,
        },
        {
          name: "közép",
          width: 1250,
          length: 2500,
        },
        {
          name: "nagy",
          width: 1500,
          length: 3000,
        },
      ],
      customsize: {
        custom: false,
        maxwidth: 2000,
        maxlenght: 12000,
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/mintas-lemez.webp",
  },

  {
    id: 4,
    name: "Aluminium stukkó lemez",
    description: "Közkedvelt belsőépítészeti alapanyag",
    usage: "Hűtőgép gyártás, dobozgyártás, belsőépítészet",
    quality: ["EN AW-5754 (AlMg3)", "EN AW-1050A (Al99,5)"],
    sizes: {
      thickness: [0.4, 1.2],
      sheetsize: [
        {
          name: "alap",
          width: 1000,
          length: 2000,
        },
        {
          name: "közép",
          width: 1250,
          length: 2500,
        },
        {
          name: "nagy",
          width: 1500,
          length: 3000,
        },
      ],
      customsize: {
        custom: true,
        description: "Kérjen ajánlatot munkatársainktól.",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/stukko-lemez.webp",
  },

  {
    id: 5,
    name: "Aluminium lyukasztott lemezek",
    description:
      "Alapanyaga lehet alumínium, rozsdamentes, acél, horganyzott acél, nemes acél.",
    usage:
      "Állványok, álmennyezetek, lépcsőkorlátok, kerítések, kapuk, erkélyrácsok, védőburkolatok, padlóburkolatok, lámpaernyők, konvektorok, szűrők, szellőzők, kipufogók, különböző panelek stb.",
    types: [
      {
        name: "Kör",
        variations: [
          {
            name: "Rv",
            description: "körlyukasztás átlós osztással",
          },
          {
            name: "Rg",
            description: "körlyukasztás soros osztással",
          },
        ],
      },
      {
        name: "Négyzet",
        variations: [
          {
            name: "Qg",
            description: "négyzetlyukasztás soros osztással",
          },
          {
            name: "Qv",
            description: "négyzetlyukasztás átlós osztással",
          },
          {
            name: "Qd",
            description: "négyzetlyukasztás diagonális osztással",
          },
        ],
      },
    ],
    quality: ["EN AW-5754 (AlMg3)", "EN AW-1050A (Al99,5)"],
    sizes: {
      thickness: [1.5 / 3.0, 5.0 / 6.5],
      sheetsize: [
        {
          name: "alap",
          width: 1000,
          length: 2000,
        },
        {
          name: "közép",
          width: 1250,
          length: 2500,
        },
        {
          name: "nagy",
          width: 1500,
          length: 3000,
        },
      ],
      customsize: {
        custom: true,
        description:
          "Szinte bármilyen méret és egyedi lyukasztás rendelhető (megfelelő mennyiség mellett)",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/lyukasztott-lemez.webp",
  },

  {
    id: 6,
    name: "Aluminium expandált lemezek",
    description:
      "Alapanyaga lehet alumínium, rozsdamentes, acél, horganyzott acél, nemes acél.",
    usage:
      "Korlátok, lépcsők, vásári standok, homlokzatok, árnyékolás technika stb.",
    types: [
      {
        name: "Rombusz",
      },
      {
        name: "Hatszög",
      },
      {
        name: "Kör",
      },
      {
        name: "Négyszög",
      },
    ],
    quality: [],
    sizes: {
      thickness: [1.0, 4.0],
      sheetsize: [
        {
          name: "alap",
          width: 1000,
          length: 2000,
        },
        {
          name: "közép",
          width: 1250,
          length: 2500,
        },
      ],
      customsize: {
        custom: true,
        description:
          "Szinte bármilyen méret és egyedi lyukasztás rendelhető (megfelelő mennyiség mellett)",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/expandalt-lemez.webp",
  },

  {
    id: 7,
    name: "Aluminium zártszelvények, csövek, L, T, U, Z profilok",
    description: "",
    usage: "Reklámipar, bútoripar, műszeripar, járműipar stb.",
    types: [],
    quality: ["EN AW-6060 T66 (AlMgSi0,5 F22)"],
    sizes: {
      customsize: {
        custom: true,
        description:
          "Standard szálhossz: 6000mm, Minimum 500 kg megrendelés esetén egyedi szálhosszban és minőségben is vállaljuk szálanyagok gyártását.",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/zartszelveny.webp",
  },

  {
    id: 8,
    name: "Aluminium rudak (lapos, négyzet, kör, hatszög)",
    description: "",
    usage: "Járműipar, gépgyártás, építőipar.",
    types: [],
    quality: [
      "EN AW-6060 (AlMgSi05)",
      "EN AW-6082 (AlSi1MgMn)",
      "EN AW-2007 (AlCu4PbMgMn)",
    ],
    sizes: {
      customsize: {
        custom: true,
        description:
          "Standard szálhossz: 3000mm; 6000mm, Minimum 500 kg megrendelés esetén egyedi szálhosszban és minőségben is vállaljuk szálanyagok gyártását.",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/rudak.webp",
  },

  {
    id: 9,
    name: "Aluminium alakos (speciális) profilok",
    description:
      "Bármilyen egyedi profil megrajzolását és gyártását vállaljuk, minimum 500 kg mennyiség megrendelése esetén.",
    usage: "",
    types: [],
    quality: ["EN AW-6060 (AlMgSi0,5)", "EN AW-6082 (AlSi1MgMn)"],
    sizes: {
      customsize: {
        custom: true,
        description: "Kérjen ajánlatot munkatársainktól.",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/alakos-profilok.webp",
  },

  {
    /*Sárgaréz --------------------------------------------------------------------------------------------------*/
  },

  {
    id: 10,
    name: "Sárgaréz lemezek",
    description: "",
    usage: "",
    types: [],
    quality: ["CuZn37", "CuZn20", "CuZn15", "CuZn39Pb2"],
    sizes: {
      thickness: [0.2, 25],
      customsize: {
        custom: true,
        description:
          "Általában 1000x2000 mm a jártos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/sargarez-lemez.webp",
  },

  {
    id: 11,
    name: "Sárgaréz vastag lemezek",
    description: "",
    usage: "",
    types: [],
    quality: ["CuZn37", "CuZn39Pb2"],
    sizes: {
      thickness: [12, 150],
      customsize: {
        custom: true,
        description:
          "Általában 1020x2020 mm a jártos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/sargarez-vastag-lemez.webp",
  },

  {
    id: 12,
    name: "Sárgaréz rúd (kör)",
    description: "",
    usage: "",
    types: [],
    quality: ["CuZn39Pb3", "CuZn40Pb2", "CuZn36Pb2As", "CuZn33Pb1,5AlAs"],
    sizes: {
      diameter: [3, 160],
      thickness: [],
      customsize: {
        custom: true,
        description:
          "Általában 1020x2020 mm a jártos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/sargarez-rud-kor.webp",
  },

  {
    id: 13,
    name: "Sárgaréz lapos",
    description: "",
    usage: "",
    types: [],
    quality: ["CuZn39Pb3", "CuZn40Pb2", "CuZn36Pb2As", "CuZn33Pb1,5AlAs"],
    sizes: {
      length: "Általában 3000 mm a jártos, de ettől eltérő méretek is előfordulnak, illetve vágatok is rendelhetők!",  
      thickness: [],
      customsize: {
        custom: true,
        description: "20x4 mm-től 70x60 mm-ig.",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/sargarez-lapos.webp",
  },

  {
    id: 14,
    name: "Sárgaréz rúd (négyzet)",
    description: "",
    usage: "",
    types: [],
    quality: ["CuZn39Pb3"],
    sizes: {
      length: "Általában 3000 mm a jártos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!",  
      thickness: [],
      customsize: {
        custom: true,
        description: "5x5 mm-től 120x120 mm-ig",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/sargarez-rud-negyzet.webp",
  },

  {
    id: 15,
    name: "Sárgaréz rúd (hatszög)",
    description: "",
    usage: "",
    types: [],
    quality: ["CuZn39Pb3", "CuZn36Pb2As"],
    sizes: {
      length: "Általában 3000 mm a jártos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!",  
      thickness: [],
      customsize: {
        custom: true,
        description: "5 mm-től 35 mm-ig",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/sargarez-rud-hatszog.webp",
  },

  {
    id: 16,
    name: "Sárgaréz huzal",
    description: "",
    usage: "",
    types: [],
    quality: ["CuZn37"],
    sizes: {
      diameter: "0,3 mm-től 10,0 mm-ig",
      length: "",  
      thickness: [],
      customsize: {
        custom: true,
        description: "",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/sargarez-huzal.webp",
  },

  {
    id: 17,
    name: "Sárgaréz cső",
    description: "",
    usage: "",
    types: [],
    quality: ["CuZn37"],
    sizes: {
      diameter: "4,0x1,0 mm-től 22,0x1,5 mm-ig",
      length: "",  
      thickness: [],
      customsize: {
        custom: true,
        description: "Általában 3000 mm a jártos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!",
      },
      standardrolledsize: {},
      customrolledsize: {},
    },
    image: "/termekek/sargarez-cso.webp",
  },

  {
    /*Vörösréz --------------------------------------------------------------------------------------------------*/
  },

  {
    id: 18,
    name: "Vörösréz lemez, lemezvágat, szalag",
    description: "",
    usage: "",
    types: [],
    quality: ["SE-Cu", "E-Cu", "SF-Cu"],
    sizes: {
      diameter: "4,0x1,0 mm-től 22,0x1,5 mm-ig",
      length: "",  
      thickness: [0.2, 5],
      sheetsize: [
        {
          name: "alap",
          width: 1000,
          length: 2000,
        },
      ],    
      customsize: {
        custom: true,
        description: "Általában 3000 mm a jártos, de ettől eltérő méretek is előfordulnak, illetve vágatokat is rendelhetők!",
      },
      standardrolledsize: {
        thickness: [0.1, 3.0],
        width: [300, 350],
      },
      customrolledsize: {},
    },
    image: "/termekek/sargarez-cso.webp",
  },

];

export default products;
