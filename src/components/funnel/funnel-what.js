export const funnel001 = [
  {
    step: 1,
    question: "Vilken typ av dator?",
    description: "Kraven på din dator kan vairera från spel till spel. Välj ett eller flera spel som du har tänkt att spela på din ny dator!",
    answerType: "single-select",
    options: [
      {
        id: "001",
        title: "Komponent bygge",
        description:
          "Köp varje ingående del för sig och sätt ihop den på egen hand. Kräver lite erfarenhet eller kanske en hjälpande hand.",
        property: "type",
        value: "custom",
      },
      {
        id: "002",
        title: "Komplett-PC",
        description:
          "Precis hur det låter, datoren är byggd hos leverantör och är redo att användas direkt vid unboxing!",
        property: "type",
        value: "prebuild",
      },
    ],
    sliceType: "card-grid",
  },
  {
    step: 2,
    question: "Vilka spel kommer du spela?",
    description: "Kraven på din dator kan vairera från spel till spel. Välj ett eller flera spel som du har tänkt att spela på din nya dator!",
    answerType: "multi-select",
    options: [
      {
        id: "001",
        title: "PUBG",
        property: "tier",
        value: "high",
        image: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AJ6QG7/a3f252a232904af2809b67eb08f59648.jpg/f/playerunknowns-battlegrounds-pubg.jpg?height=650"
      },
      {
        id: "002",
        title: "Counter-strike global offensive",
        property: "tier",
        value: "low",
        image: "https://s1.gaming-cdn.com/images/products/9459/orig-fallback-v1/counter-strike-global-offensive-pc-mac-spel-steam-cover.jpg?v=1644770250"
      },
      {
        id: "003",
        title: "Fortnite",
        property: "tier",
        value: "medium",
        image: "https://www.mobygames.com/images/covers/l/487051-fortnite-battle-royale-nintendo-switch-front-cover.jpg"
      },
      {
        id: "004",
        title: "Red dead redemption 2",
        property: "tier",
        value: "high",
        image: "https://store-images.s-microsoft.com/image/apps.34695.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.25816f86-f27c-4ade-ae29-222661145f1f"
      },
      {
        id: "005",
        title: "Minecraft",
        property: "tier",
        value: "high",
        image: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg"
      },
      {
        id: "006",
        title: "Apex legends",
        property: "tier",
        value: "high",
        image: "https://www.mobygames.com/images/covers/l/538006-apex-legends-xbox-one-front-cover.jpg"
      },
      {
        id: "007",
        title: "007 legends",
        property: "tier",
        value: "low",
        image: "https://www.giantbomb.com/a/uploads/scale_small/8/87790/2331078-box_007l.png"
      },
      {
        id: "008",
        title: "Valorant",
        property: "tier",
        value: "medium",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2mvt.jpg"
      }
    ],
    sliceType: "image-card-grid",
  },
  {
    step: 3,
    question: "Är Belysning (RBG) något som lockar dig?",
    description: "Belysning i datorer kan vara en vattendelare där många tycker det adderar till en skön vibe menar andra att det är onödigt och lite nördigt.",
    answerType: "single-select",
    options: [
      {
        id: "001",
        title: "Ja",
        description: "Detta betyder att vi kommer inkludera byggen med belysning.",
        property: "rbg",
        value: true,
      },
      {
        id: "002",
        title: "Nej",
        description: "Mörkt och coolt framåt, uppfattat!",
        property: "rbg",
        value: false,
      },
    ],
    sliceType: "card-grid",
  },
];
