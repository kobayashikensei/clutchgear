// --- boot log & global error catcher ---
console.log("[ClutchGear] booting...");
window.addEventListener("error", (e) => {
  console.error("[ClutchGear] JS error:", e.message, "at", e.filename, ":", e.lineno);
});
// ====== データ ======
const PRODUCTS = [
  {
    id: "p-wooting-60he",
    name: "Wooting 60HE",
    brand: "Wooting",
    type: "keyboard",
    priceJPY: 38500,
    image: "https://www.fumo-shop.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/t/wt-60he-plus-black-01.jpg",
    tags: ["60%", "Analog", "Hot-swap", "Wooting"],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/3VPnYQM",
  },
  {
    id: "p-vx2-pro",
    name: "Lamzu Atlantis V2 Pro",
    brand: "Lamzu",
    type: "mouse",
    priceJPY: 16720,
    image: "https://shop.hid-labs.com/wp-content/uploads/2023/09/Atlantis-OG-V2-PRO-WH3.jpg",
    tags: ["Lightweight", "3395", "Wireless"],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/42z1Fm9",
  },
  {
    id: "p-superlightx",
    name: "Logitech G PRO X Superlight 2",
    brand: "Logicool",
    type: "mouse",
    priceJPY: 22050,
    image: "https://images-fe.ssl-images-amazon.com/images/I/51aHtlvwrGL._AC_UL210_SR210,210_.jpg",
    tags: ["Lightweight", "Hero 32K", "Wireless"],
    popularity: 96,
    addedAt: "2025-06-10",
    affiliate: "https://amzn.to/4pnIg1u",
  },
  {
    id: "p-hs-hyperx",
    name: "HyperX Cloud III Wireless",
    brand: "HyperX",
    type: "headset",
    priceJPY: 19780,
    image: "https://m.media-amazon.com/images/I/61fBPVfMt3L.jpg",
    tags: ["Wireless", "Comfort"],
    popularity: 84,
    addedAt: "2025-05-19",
    affiliate: "https://amzn.to/4gqSSs9",
  },
  {
    id: "p-prod1",
    name: "Razer Viper V3 Pro",
    brand: "Razer",
    type: "mouse",
    priceJPY: 26480,
    image: "https://m.media-amazon.com/images/I/61BJ2MpgTTL._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 70,
    addedAt: "2025-09-17",
    affiliate: "https://amzn.to/4psNskF",
  },
  {
    id: "p-prod2",
    name: "Razer DeathAdder V3 Pro",
    brand: "Razer",
    type: "mouse",
    priceJPY: 18385,
    image: "https://m.media-amazon.com/images/I/51Y+PuoViSL.jpg",
    tags: [],
    popularity: 65,
    addedAt: "2025-09-17",
    affiliate: "https://amzn.to/4nxs1wS",
  },
  {
    id: "p-prod3",
    name: "ARTISAN NINJA FX ZERO",
    brand: "ARTISAN",
    type: "mousepad",
    priceJPY: 4840,
    image: "https://m.media-amazon.com/images/I/81Wocc2ZWUL._UF894,1000_QL80_.jpg",
    tags: ["Large", "Cloth"],
    popularity: 80,
    addedAt: "2025-09-17",
    affiliate: "https://amzn.to/4nslSSE",
  },
  {
    id: "p-prod4",
    name: "ZOWIE H-SR-SE ROUGE II",
    brand: "ZOWIE",
    type: "mousepad",
    priceJPY: 8480,
    image: "https://m.media-amazon.com/images/I/71fjreU7yBL._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 75,
    addedAt: "2025-09-17",
    affiliate: "https://amzn.to/4gsCurn",
  },
  {
    id: "p-Huntsman-V3-Pro",
    name: "Razer Huntsman V3 Pro",
    brand: "Razer",
    type: "keyboard",
    priceJPY: 32280,
    image: "https://m.media-amazon.com/images/I/81qDfgRnZkL._UF1000,1000_QL80_.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/46TiVUT",
  },
   {
    id: "p-log",
    name: "Logicool G PRO 2 LIGHTSPEED",
    brand: "Logicool",
    type: "mouse",
    priceJPY: 21100,
    image: "https://m.media-amazon.com/images/I/51tqDjEoETL._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/4muQdPI",
  },
  {
    id: "p-AIM1-陽炎-KAGERO",
    name: "AIM1 陽炎 KAGERO",
    brand: "AIM1",
    type: "mousepad",
    priceJPY: 4980,
    image: "https://m.media-amazon.com/images/I/719u5NFvjTL.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/4nbOzUa",
  },
   {
    id: "p-shure",
    name: "SHURE SE215 SPE-A",
    brand: "shure",
    type: "headset",
    priceJPY: 14189,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7uqaCSmZwQButIEXHACcX5Eb9EhIO-f2sw&s",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/3KhCWN5",
  },
   {
    id: "p-pulsar",
    name: "Pulsar Superglide2",
    brand: "Pulsar",
    type: "mousepad",
    priceJPY: 16590,
    image: "https://m.media-amazon.com/images/I/61agQrB7TfL._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/46kbXcf",
  },
   {
    id: "p-zowie-xl2566k",
    name: "BenQ ZOWIE XL2566K ",
    brand: "BenQ",
    type: "monitor",
    priceJPY: 64000,
    image: "https://m.media-amazon.com/images/I/51ZSY7rAr+L.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/4nmRxpc",
  },
  {
    id: "p-BenQ-Zowie-U2",
    name: "BenQ Zowie U2",
    brand: "BenQ",
    type: "mouse",
    priceJPY: 12600,
    image: "https://m.media-amazon.com/images/I/61wqy33Y28L._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/4nrj3C4",
  },
   {
    id: "p-Logicool-GPRO-X-SUPERLIGHT-2-DEX",
    name: "Logicool G PRO X SUPERLIGHT 2 DEX",
    brand: "Logicool",
    type: "mouse",
    priceJPY: 24500,
    image: "https://m.media-amazon.com/images/I/61CFuum7uvL.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/46Bqyit",
  },
   {
    id: "p-Wallhack-初音ミク",
    name: "Wallhack × 初音ミク ガラス製ゲーミングマウスパッド",
    brand: "Wallhack",
    type: "mousepad",
    priceJPY: 20000,
    image: "https://m.media-amazon.com/images/I/81e9z-GpAGL.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/48inkD9",
  },
  {
    id: "p-Pulsar-PCMK-2HE-TKL",
    name: "Pulsar PCMK 2HE TKL",
    brand: "Pulsar",
    type: "keyboard",
    priceJPY: 23980,
    image: "https://m.media-amazon.com/images/I/618mFlobmwL._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/4pB2iWx",
  },
   {
    id: "p-Wooting-80HE",
    name: "Wooting 80HE",
    brand: "wooting",
    type: "keyboard",
    priceJPY: 23980,
    image: "https://m.media-amazon.com/images/I/3179HZvkLXL._UF1000,1000_QL80_.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/4nJkdbv",
  },
  {
    id: "p-gon-custom-mousepad",
    name: "GON Custom Mousepad",
    brand: "custom",
    type: "mousepad",
    priceJPY: null,
    image: "https://pbs.twimg.com/media/Gg8E2SMbQAEhDBh?format=jpg&name=medium",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
  },
   {
    id: "p-KZ-ZS10-PRO",
    name: "KZ ZS10 PRO",
    brand: "H HIFIHEAR",
    type: "headset",
    priceJPY: 5799,
    image: "https://m.media-amazon.com/images/I/61IpkpFxugL.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/42doMmm",
  },
  {
    id: "p-Fanmusic-Truthear-Hexa",
    name: "Fanmusic Truthear Hexa",
    brand: "Fanmusic",
    type: "headset",
    priceJPY: 13000,
    image: "https://m.media-amazon.com/images/I/51o2AmTcLYL.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/4pCKZUZ",
  },
  {
    id: "ZENAIM-KEYBOARD",
    name: "ZENAIM KEYBOARD",
    brand: "ZENAIM",
    type: "keyboard",
    priceJPY: 35200,
    image: "https://m.media-amazon.com/images/I/71ch8fZX03L.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/4nPmDFC",
  },
  {
    id: "p-VAXEE-PD",
    name: "VAXEE PD",
    brand: "VAXEE",
    type: "mousepad",
    priceJPY: 6490,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSlt46Udn5KP2h3RmuHYI6RoKsjuHVqXb-g&s",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://www.vaxee.co/jp/product.php?act=view&id=389",
  },
  {
    id: "p-BenQ-ZOWIE-G-SR-II",
    name: "BenQ-ZOWIE G-SR II",
    brand: "BenQ",
    type: "mousepad",
    priceJPY: 7400,
    image: "https://image.benq.com/is/image/benqco/g-sr-ii?$ResponsivePreset$&fmt=png-alpha",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/4njoQcx",
  },
  {
    id: "p-Dell-AW2523HF",
    name: "Dell AW2523HF",
    brand: "Dell",
    type: "monitor",
    priceJPY: 58485,
    image: "https://m.media-amazon.com/images/I/61sVHUSfV0L._UF1000,1000_QL80_.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/46WhJB1",
  },
  {
    id: "p-apple-earpods",
    name: "Apple EarPods",
    brand: "Apple",
    type: "headset",
    priceJPY: 2700,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MD827?wid=5225&hei=5225&fmt=jpeg&qlt=95&.v=1591744546000",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/46ETMwG",
  },
  {
    id: "p-Logicool-SUPERLIGHT",
    name: "Logicool G PRO X SUPERLIGHT",
    brand: "Logicool",
    type: "mouse",
    priceJPY: 15617,
    image: "https://images-fe.ssl-images-amazon.com/images/I/41l9QIbAVSL._AC_UL210_SR210,210_.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/46qL9qV",
  },
  {
    id: "p-BenQ-ZOWIE-EC2-CW",
    name: "BenQ ZOWIE EC2-CW",
    brand: "BenQ",
    type: "mouse",
    priceJPY: 10297,
    image: "https://m.media-amazon.com/images/I/61xzWJA9HOL._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/4nSaRu6",
  },
  {
    id: "p-V3-Sentinels-Edition",
    name: "Razer Viper V3 Pro Sentinels Edition",
    brand: "Razer",
    type: "mouse",
    priceJPY: 32449,
    image: "https://m.media-amazon.com/images/I/61BhqiEjOdL.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/4gQPSG2",
  },
  {
    id: "p-Pulsar-Gaming-Gears-PCMK",
    name: "Pulsar Gears PCMK 2HE TKL",
    brand: "Pulsar",
    type: "keyboard",
    priceJPY: 23719,
    image: "https://m.media-amazon.com/images/I/61ZpYu90HYL._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/4mIA89k",
  },
  {
    id: "p-Dep-Edition-ES2-eSports-Mousepad",
    name: "[Dep Edition] Mousepad",
    brand: "",
    type: "mousepad",
    priceJPY: null,
    image: "https://jp.pulsar.gg/cdn/shop/products/DepEdition_PulsarGamingGearsES24mmXLgamingmousepad_001-360707_large.png?v=1699325331",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://jp.pulsar.gg/products/dep-edition-es2-esports-mousepad-4mm-l-xl-medium-speed",
  },
  {
    id: "p-Sennheiser-GAME ZERO",
    name: "Sennheiser-GAME ZERO",
    brand: "Sennheiser",
    type: "headset",
    priceJPY: 22800,
    image: "https://m.media-amazon.com/images/I/613PUcMJ+vL.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/3KiqFYT",
  },
  {
    id: "p-BenQ-ZOWIE-XL2546K",
    name: "BenQ ZOWIE XL2546K",
    brand: "BenQ",
    type: "monitor",
    priceJPY: 42800,
    image: "https://m.media-amazon.com/images/I/51IHtHVOOIL.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/4mIAFIm",
  },
  {
    id: "p-ARTISAN-NINJA-FX-99式",
    name: "ARTISAN NINJA FX 99式",
    brand: "ARTISAN",
    type: "mousepad",
    priceJPY: 6825,
    image: "https://m.media-amazon.com/images/I/61PIS0kqRlL._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/3KkGTRj",
  },
  {
    id: "p-SHURE-se-846",
    name: "SHURE SE846",
    brand: "SHURE",
    type: "headset",
    priceJPY: 54800,
    image: "https://m.media-amazon.com/images/I/419-sOs4WpL._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/4nusikR",
  },
  {
    id: "p-INZONE H9",
    name: "SONY INZONE H9",
    brand: "SONY",
    type: "headset",
    priceJPY: 31000,
    image: "https://m.media-amazon.com/images/I/51rN2qPDYOL._UF1000,1000_QL80_.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/42QqbPT",
  },
  {
    id: "p-apex-pro",
    name: "Apex Pro",
    brand: "SteelSeries",
    type: "keyboard",
    priceJPY: 33980,
    image: "https://m.media-amazon.com/images/I/714F9LYNPgL.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/3VLvDzL",
  },
  {
    id: "p-shure-se215-cla",
    name: "SHURE SE215 CL-A",
    brand: "Shure",
    type: "headset",
    priceJPY: 15840,
    image: "https://m.media-amazon.com/images/I/41q0Ptooh1L._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/4nW8K8F",
  },
  {
    id: "p-GRANDMASTER PINK",
    name: "EsportsTiger GRANDMASTER PINK",
    brand: "EsportsTiger",
    type: "mousepad",
    priceJPY: null,
    image: "https://m.media-amazon.com/images/I/A1UtFo8kh6S._UF350,350_QL50_.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/3WiO0fu",
  },
   {
    id: "p-Pulser-ES2",
    name: "Pulser ES2",
    brand: "Pulser",
    type: "mousepad",
    priceJPY: 4980,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIib-3AkrdxsCxJj2OjM9LXJuJvjf5KfHYnQ&s",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/484EZho",
  },
   {
    id: "p-BlackShark V2 Pro White Edition",
    name: "Razer BlackShark V2 Pro White Edition",
    brand: "Razer",
    type: "headsets",
    priceJPY: 29980,
    image: "https://m.media-amazon.com/images/I/614Xkf6pOqL.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/486pky4",
  },
  {
    id: "p-Viper-V3-Faker",
    name: "Razar Viper V3 Pro Faker Edition",
    brand: "Razer",
    type: "mouse",
    priceJPY: 31780,
    image: "https://m.media-amazon.com/images/I/71pHfo4qfML._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/48Qc6pk",
  },
  {
    id: "p-ARTISAN-NINJA-FX-Hayate-Otsu",
    name: "ARTISAN NINJA FX Hayate Otsu",
    brand: "ARTISAN",
    type: "mousepad",
    priceJPY: 7030,
    image: "https://m.media-amazon.com/images/I/61Uep-Tm1hL._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/4nTynHc",
  },
  {
    id: "p-Razer-Huntsman-V3-Pro-Mini",
    name: "Razer Huntsman V3 Pro Mini",
    brand: "Razer",
    type: "keyboard",
    priceJPY: 26980,
    image: "https://m.media-amazon.com/images/I/712r-1xpO9L._UF1000,1000_QL80_.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/42kwPxH",
  },
   {
    id: "p-pulsar-TenZ-Edition",
    name: "Pulsar TenZ Edition",
    brand: "Pulsar",
    type: "mouse",
    priceJPY: 21340,
    image: "https://jp.pulsar.gg/cdn/shop/files/Pulsar-TenZ-signature-RED-edition-wireless-Gaming-Mouse_01_size2.png?v=1750654950",
    tags: ["Pulsar", "Tenz"],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://jp.pulsar.gg/collections/mice/products/tenz-signature-red-edition-gaming-mouse?variant=50522296680741",
  },
  {
    id: "p-INZONE-M10S",
    name: "SONY INZONE M10S",
    brand: "SONY",
    type: "monitor",
    priceJPY: 136000,
    image: "https://m.media-amazon.com/images/I/61ivUNFvF0L._UF1000,1000_QL80_.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/42RB0kK",
  },
  {
    id: "p-Moondrop-Blessing-3",
    name: "水月雨 Moondrop Blessing 3",
    brand: "水月雨",
    type: "headset",
    priceJPY: 53100,
    image: "https://m.media-amazon.com/images/I/6145TAAV5eL.jpg",
    tags: [],
    popularity: 98,
    addedAt: "2025-08-20",
    affiliate: "https://amzn.to/487bETx",
  },
   {
    id: "p-SUPERLIGHT-red",
    name: "Logicool G PRO X SUPERLIGHT レッド",
    brand: "Logiool",
    type: "mouse",
    priceJPY: 15800,
    image: "https://m.media-amazon.com/images/I/41mNB8ie0eL._UF894,1000_QL80_.jpg",
    tags: [],
    popularity: 90,
    addedAt: "2025-07-02",
    affiliate: "https://amzn.to/4hnDhKz",
  },
];

const PLAYERS = [
  {
    id: "pl-meiy",
    name: "meiy",
    team: "DFM",
    devices: [
      { role: "Keyboard", itemId: "p-wooting-60he" },
      { role: "Mouse", itemId: "p-superlightx" },
      { role: "Mousepad", itemId: "p-pulsar" },
      { role: "headsets", itemId: "p-shure" },
      { role: "Monitor", itemId: "p-zowie-xl2566k" },
    ],
    image: "https://team-detonation.net/wp-content/uploads/2025/01/hp_meiy.png",
  },
  {
    id: "pl-tenz",
    name: "Tenz",
    team: "Unattached",
    devices: [
      { role: "Keyboard", itemId: "p-Wooting-80HE" },
      { role: "Mouse", itemId: "p-pulsar-TenZ-Edition" },
      { role: "Mousepad", itemId: "p-prod3" },
      { role: "headsets", itemId: "p-Moondrop-Blessing-3" },
      { role: "Monitor", itemId: "p-INZONE-M10S" },
    ],
    image: "https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Ch=675%2Cq=85%2Csharpen=2%2Cw=1200/wp-content/uploads/tenz.png",
  },
  {
    id: "pl-nats",
    name: "nAts",
    team: "TL",
    devices: [
      { role: "Keyboard", itemId: "p-Wooting-80HE" },
      { role: "Mouse", itemId: "p-BenQ-Zowie-U2" },
      { role: "Mousepad", itemId: "p-BenQ-ZOWIE-G-SR-II" },
      { role: "Headsets", itemId: "p-hs-hyperx" },
      { role: "Monitor", itemId: "p-Dell-AW2523HF" },
    ],
    image: "https://pbs.twimg.com/media/Gs8q7gXWoAAjePi.jpg:large",
  },
  {
    id: "pl-gon",
    name: "GON",
    team: "FL",
    devices: [
      { role: "Keyboard", itemId: "p-Pulsar-PCMK-2HE-TKL" },
      { role: "Mouse", itemId: "p-Logicool-GPRO-X-SUPERLIGHT-2-DEX" },
      { role: "Mousepad", itemId: "p-gon-custom-mousepad" },
      { role: "Headsets", itemId: "p-KZ-ZS10-PRO" },
      { role: "Monitor", itemId: "p-zowie-xl2566k" },
    ],
    image: "https://fennel-esports.com/manage/wp-content/uploads/2025/03/FL_member_ph_GON.png",
  },
  {
    id: "pl-gyen",
    name: "gyen",
    team: "DFM",
    devices: [
      { role: "Keyboard", itemId: "p-wooting-60he" },
      { role: "Mouse", itemId: "p-prod1" },
      { role: "Mousepad", itemId: "p-prod4" },
      { role: "Headsets", itemId: "p-Fanmusic-Truthear-Hexa" },
      { role: "Monitor", itemId: "p-zowie-xl2566k" },
    ],
    image: "https://team-detonation.net/wp-content/uploads/2025/01/hp_gyen.png",
  },
  {
    id: "pl-aace",
    name: "Aace",
    team: "FL",
    devices: [
      { role: "Keyboard", itemId: "p-Razer-Huntsman-V3-Pro-Mini" },
      { role: "Mouse", itemId: "p-Viper-V3-Faker" },
      { role: "Mousepad", itemId: "p-ARTISAN-NINJA-FX-Hayate-Otsu" },
      { role: "headsets", itemId: "p-apple-earpods" },
      { role: "Monitor", itemId: "p-zowie-xl2566k" },
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQXvT1Mhm05K3k0JzNVteEv9mw_RYveKppQ&s",
  },
  {
    id: "pl-laz",
    name: "laz",
    team: "ZETA",
    devices: [
      { role: "Keyboard", itemId: "ZENAIM-KEYBOARD" },
      { role: "Mouse", itemId: "p-Logicool-GPRO-X-SUPERLIGHT-2-DEX" },
      { role: "Mousepad", itemId: "p-VAXEE-PD" },
      { role: "headsets", itemId: "p-shure" },
      { role: "Monitor", itemId: "p-zowie-xl2566k" },
    ],
    image: "https://zetadivision.com/wp-content/uploads/2024/10/ZETADIVISION_Laz_square-5.jpg",
  },
  {
    id: "pl-dep",
    name: "Dep",
    team: "ZETA",
    devices: [
      { role: "Keyboard", itemId: "p-Pulsar-Gaming-Gears-PCMK" },
      { role: "Mouse", itemId: "p-V3-Sentinels-Edition" },
      { role: "Mousepad", itemId: "p-Dep-Edition-ES2-eSports-Mousepad" },
      { role: "headsets", itemId: "p-Sennheiser-GAME ZERO" },
      { role: "Monitor", itemId: "p-BenQ-ZOWIE-XL2546K" },
    ],
    image: "https://zetadivision.com/wp-content/uploads/2021/12/ZETADIVISION_Dep_square-2-1.jpg",
  },
  {
    id: "pl-sugarzero",
    name: "SugarZ3ro",
    team: "ZETA",
    devices: [
      { role: "Keyboard", itemId: "p-Wooting-80HE" },
      { role: "Mouse", itemId: "p-superlightx" },
      { role: "Mousepad", itemId: "p-ARTISAN-NINJA-FX-99式" },
      { role: "headsets", itemId: "p-SHURE-se-846" },
      { role: "Monitor", itemId: "p-zowie-xl2566k" },
    ],
    image: "https://zetadivision.com/wp-content/uploads/2021/12/ZETADIVISION_SugarZ3ro_square-2-1.jpg",
  },
  {
    id: "pl-clz",
    name: "clz",
    team: "ZETA",
    devices: [
      { role: "Keyboard", itemId: "p-wooting-60he" },
      { role: "Mouse", itemId: "p-superlightx" },
      { role: "Mousepad", itemId: "p-prod3" },
      { role: "headsets", itemId: "p-INZONE H9" },
      { role: "Monitor", itemId: "p-zowie-xl2566k" },
    ],
    image: "https://zetadivision.com/wp-content/uploads/2024/10/xZETADIVISION_CLZ_square-2.jpg.pagespeed.ic.qFoTeLWi-L.jpg",
  },
  {
    id: "pl-syouta",
    name: "SyouTa",
    team: "ZETA",
    devices: [
      { role: "Keyboard", itemId: "p-apex-pro" },
      { role: "Mouse", itemId: "p-superlightx" },
      { role: "Mousepad", itemId: "p-GRANDMASTER PINK" },
      { role: "headsets", itemId: "p-shure-se215-cla" },
      { role: "Monitor", itemId: "p-zowie-xl2566k" },
    ],
    image: "https://tsg-official.com/valorant-news/wp-content/uploads/2025/05/image-6-12-1024x1024.jpg",
  },
  {
    id: "pl-xdll",
    name: "Xdll",
    team: "ZETA",
    devices: [
      { role: "Keyboard", itemId: "p-wooting-60he" },
      { role: "Mouse", itemId: "p-V3-Sentinels-Edition" },
      { role: "Mousepad", itemId: "p-Pulser-ES2" },
      { role: "headsets", itemId: "p-BlackShark V2 Pro White Edition" },
      { role: "Monitor", itemId: "p-zowie-xl2566k" },
    ],
    image: "https://zetadivision.com/wp-content/uploads/2024/10/ZETADIVISION_Xdll_square-2.jpg",
  },
   {
    id: "pl-art",
    name: "Art",
    team: "DFM",
    devices: [
      { role: "Keyboard", itemId: "p-wooting-60he" },
      { role: "Mouse", itemId: "p-SUPERLIGHT-red" },
      { role: "Mousepad", itemId: "p-prod3" },
      { role: "headsets", itemId: "p-shure" },
      { role: "Monitor", itemId: "p-zowie-xl2566k" },
    ],
    image: "https://owcdn.net/img/674037af91130.png",
  },
];

// ====== 状態 ======
const state = {
  q: "",
  type: "all",
  sort: "popularity", // popularity | price | new
  tab: "players",     // ← どちらか1つだけ。スマホ2列の確認なら players 推奨
  wishlist: loadWishlist(),
};


function loadWishlist() {
  try { return JSON.parse(localStorage.getItem("cg_wishlist_v1") || "[]"); }
  catch { return []; }
}
function saveWishlist() {
  localStorage.setItem("cg_wishlist_v1", JSON.stringify(state.wishlist));
}

// ====== ユーティリティ ======
const yen = (n) => new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY"}).format(n);
const byId = (id) => document.getElementById(id);

function setActiveTypePill() {
  document.querySelectorAll(".type-pill").forEach((btn) => {
    const active = btn.dataset.type === state.type;
    btn.className =
      "type-pill px-3 py-1.5 rounded-full text-sm border " +
      (active ? "bg-black text-white border-black" : "bg-white hover:bg-neutral-100");
  });
}
function setActiveTabButtons() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const active = btn.dataset.tab === state.tab;
    btn.className =
      "tab-btn px-3 py-1.5 rounded-full text-sm border " +
      (active ? "bg-neutral-900 text-white border-neutral-900" : "bg-white hover:bg-neutral-100");
  });
  const wishBtn = [...document.querySelectorAll(".tab-btn")].find(b => b.dataset.tab === "wish");
  if (wishBtn) wishBtn.textContent = `Wishlist (${state.wishlist.length})`;
}
function showView(tab) {
  byId("productsView").classList.toggle("hidden", tab !== "products");
  byId("playersView").classList.toggle("hidden", tab !== "players");
  byId("wishView").classList.toggle("hidden", tab !== "wish");
}

// ====== Products ======
function getFilteredProducts() {
  let arr = PRODUCTS.slice();

  // タイプ絞り込み
  if (state.type !== "all") arr = arr.filter((p) => p.type === state.type);

  // キーワード絞り込み
  if (state.q.trim()) {
    const s = state.q.toLowerCase();
    arr = arr.filter((p) =>
      (p.name || "").toLowerCase().includes(s) ||
      (p.brand || "").toLowerCase().includes(s) ||
      (Array.isArray(p.tags) ? p.tags : []).some(t => (t || "").toLowerCase().includes(s))
    );
  }

  // ソート
  arr.sort((a, b) => {
    if (state.sort === "price") return (a.priceJPY ?? Infinity) - (b.priceJPY ?? Infinity);
    if (state.sort === "new")   return new Date(b.addedAt) - new Date(a.addedAt);
    return (b.popularity ?? 0) - (a.popularity ?? 0);
  });

  return arr;
}
function renderProducts() {
  const list = getFilteredProducts();
  const root = byId("productsView");
  if (!list.length) {
    root.innerHTML = `<div class="py-16 text-center text-neutral-500">該当する商品が見つかりませんでした。</div>`;
    return;
  }
  root.innerHTML = `
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      ${list.map(p => `
        <article class="group bg-white rounded-2xl shadow-sm border hover:shadow-md transition overflow-hidden"
                 data-product="${p.id}">
          <div class="aspect-[4/3] bg-neutral-100 overflow-hidden">
            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-[1.02] transition" />
          </div>
          <div class="p-4 flex flex-col gap-3">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h3 class="text-base font-semibold leading-tight">${p.name}</h3>
                <p class="text-xs text-neutral-500">${p.brand} ・ ${p.type}</p>
              </div>
              <button data-wish="${p.id}"
                class="rounded-full p-2 border ${state.wishlist.includes(p.id) ? "bg-black text-white border-black" : "bg-white hover:bg-neutral-100"}"
                title="Wishlistに追加/削除">❤</button>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold">${p.priceJPY != null ? yen(p.priceJPY) : "—"}</span>
              ${p.affiliate ? `<a class="text-sm underline hover:no-underline" href="${p.affiliate}" target="_blank" rel="nofollow noopener noreferrer">購入リンク</a>` : `<span class="text-xs text-neutral-400">リンク準備中</span>`}
            </div>
            <div class="flex gap-2 flex-wrap">
              ${(Array.isArray(p.tags)?p.tags:[]).map(t=>`<span class="text-[11px] px-2 py-1 bg-neutral-100 rounded-full">${t}</span>`).join("")}
            </div>
          </div>
        </article>
      `).join("")}
    </div>
  `;
  root.querySelectorAll("[data-wish]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const id = btn.getAttribute("data-wish");
      const i = state.wishlist.indexOf(id);
      if (i>=0) state.wishlist.splice(i,1); else state.wishlist.push(id);
      saveWishlist(); setActiveTabButtons(); renderCurrentTab();
    });
  });
}

// ====== Players（一覧） ======
function renderPlayers() {
  const map = Object.fromEntries(PRODUCTS.map(p => [p.id, p])); // 使っていなければ削除可
  const q = state.q.trim().toLowerCase();
  let arr = PLAYERS.slice();
  if (q) {
    arr = arr.filter(pl =>
      pl.name.toLowerCase().includes(q) ||
      (pl.team || "").toLowerCase().includes(q)
    );
  }

  const root = byId("playersView");
  if (!arr.length) {
    root.innerHTML = `<div class="py-16 text-center text-neutral-500">該当プレイヤーが見つかりません。</div>`;
    return;
  }

  root.innerHTML = `
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      ${arr.map(pl => `
        <a href="#/player/${pl.id}" class="block group">
          <article class="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition text-center p-5">
            <img
              src="${pl.image}"
              alt="${pl.name}"
              class="w-[100px] h-[100px] object-cover rounded-full mx-auto mb-3 group-hover:scale-[1.03] transition"
              loading="lazy"
              referrerpolicy="no-referrer"
            />
            <h3 class="text-sm font-semibold leading-tight truncate">${pl.name}</h3>
            <p class="text-xs text-neutral-500">${pl.team ?? ""}</p>
          </article>
        </a>
      `).join("")}
    </div>
  `;
}


// ====== Wishlist ======
function renderWish() {
  const list = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  const root = byId("wishView");
  if (!list.length) {
    root.innerHTML = `<div class="py-16 text-center text-neutral-500">Wishlist は空です。ハートを押して追加してね！</div>`;
    return;
  }
  root.innerHTML = `
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      ${list.map(p=>`
        <article class="group bg-white rounded-2xl shadow-sm border hover:shadow-md transition overflow-hidden">
          <div class="aspect-[4/3] bg-neutral-100 overflow-hidden">
            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-[1.02] transition" />
          </div>
          <div class="p-4 flex flex-col gap-3">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h3 class="text-base font-semibold leading-tight">${p.name}</h3>
                <p class="text-xs text-neutral-500">${p.brand} ・ ${p.type}</p>
              </div>
              <button data-remove="${p.id}" class="rounded-full p-2 border bg-black text-white border-black" title="Wishlistから削除">❤</button>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold">${yen(p.priceJPY)}</span>
              <a class="text-sm underline hover:no-underline" href="${p.affiliate}" target="_blank" rel="nofollow noopener noreferrer">購入リンク</a>
            </div>
            <div class="flex gap-2 flex-wrap">
              ${(Array.isArray(p.tags)?p.tags:[]).map(t=>`<span class="text-[11px] px-2 py-1 bg-neutral-100 rounded-full">${t}</span>`).join("")}
            </div>
          </div>
        </article>
      `).join("")}
    </div>
  `;
  root.querySelectorAll("[data-remove]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const id = btn.getAttribute("data-remove");
      state.wishlist = state.wishlist.filter(x=>x!==id);
      saveWishlist(); setActiveTabButtons(); renderCurrentTab();
    });
  });
}

// ====== Player Detail Page (#/player/:id) ======
function renderPlayerDetail(id) {
  const root = byId("playerDetailView");
  const pl = PLAYERS.find(p => p.id === id);
  const map = Object.fromEntries(PRODUCTS.map(p => [p.id,p]));

  if (!pl) {
    root.innerHTML = `<div class="py-16 text-center text-neutral-500">プレイヤーが見つかりません。</div>`;
    return;
  }

  root.innerHTML = `
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <div class="p-4 flex items-center gap-4">
          <div class="w-24 h-24 rounded-full overflow-hidden bg-neutral-100">
            <img src="${pl.image}" alt="${pl.name}" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-bold">${pl.name}</h2>
            <p class="text-sm text-neutral-500">${pl.game}</p>
          </div>
          <button id="playerBack" class="px-3 py-1.5 text-sm rounded-full border hover:bg-neutral-50">戻る</button>
        </div>
      </div>

      <div class="mt-4 bg-white rounded-2xl shadow-sm border overflow-hidden">
        <div class="px-4 py-3 border-b flex items-center gap-2">
          <span class="text-lg">🖱️🎧⌨️</span>
          <h3 class="font-semibold">使用デバイス</h3>
        </div>
        <div class="p-4 space-y-3">
          ${pl.devices.map(d=>{
            const prod = map[d.itemId];
            if (!prod) return `<div class="p-3 rounded-lg border">${d.role}: —</div>`;
            return `
              <div class="p-3 rounded-lg border flex items-center gap-3 justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-16 h-16 rounded bg-neutral-100 overflow-hidden">
                    <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <p class="text-sm text-neutral-500">${d.role}</p>
                    <p class="font-medium">${prod.name}</p>
                    <p class="text-xs text-neutral-500">${prod.brand} ・ ${prod.type}</p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <a class="px-2.5 py-1 text-sm rounded-full border hover:bg-neutral-50"
                     href="${prod.affiliate}" target="_blank" rel="nofollow noopener noreferrer">購入リンク</a>
                  <a class="px-2.5 py-1 text-sm rounded-full border hover:bg-neutral-50"
                     href="#top" data-jump-product="${prod.id}">商品を見る</a>
                </div>
              </div>`;
          }).join("")}
        </div>
      </div>
    </div>
  `;

  byId("playerBack").addEventListener("click", () => history.back());

  root.querySelectorAll("[data-jump-product]").forEach(a=>{
    a.addEventListener("click",(e)=>{
      e.preventDefault();
      const pid = a.getAttribute("data-jump-product");
      state.tab = "products"; setActiveTabButtons(); showView("products");
      byId("playerDetailView").classList.add("hidden");
      renderProducts();
      const card = document.querySelector(`[data-product="${pid}"]`);
      if (card) card.scrollIntoView({behavior:"smooth", block:"start"});
      if (location.hash.startsWith("#/player/")) history.pushState("", document.title, location.pathname + location.search);
    });
  });
}

// ====== Router (hash) ======
function router() {
  try {
    const h = location.hash;
    const detail = document.getElementById("playerDetailView");
    const products = document.getElementById("productsView");
    const players  = document.getElementById("playersView");
    const wish     = document.getElementById("wishView");

    if (!detail || !products || !players || !wish) {
      console.warn("[ClutchGear] required sections missing",
        { detail: !!detail, products: !!products, players: !!players, wish: !!wish });
      return; // セクションが無いときは何もしない（落とさない）
    }

    if (h.startsWith("#/player/")) {
      const id = decodeURIComponent(h.replace("#/player/", ""));
      products.classList.add("hidden");
      players.classList.add("hidden");
      wish.classList.add("hidden");
      detail.classList.remove("hidden");
      renderPlayerDetail(id);
    } else {
      detail.classList.add("hidden");
      showView(state.tab);
      renderCurrentTab();
    }
  } catch (err) {
    console.error("[ClutchGear] router crash:", err);
  }
}


// ====== 現在タブ再描画 ======
function renderCurrentTab() {
  if (state.tab==="products") renderProducts();
  if (state.tab==="players")  renderPlayers();
  if (state.tab==="wish")     renderWish();
}

// ====== 初期化 ======
function init() {
  byId("year").textContent = new Date().getFullYear();

  const qInput = byId("q");
  const sortSel = byId("sort");
  qInput.addEventListener("input",(e)=>{
    state.q = e.target.value; renderCurrentTab();
    if (state.tab==="players") renderPlayers();
  });
  sortSel.addEventListener("change",(e)=>{
    state.sort = e.target.value;
    if (state.tab==="products") renderProducts();
    if (state.tab==="wish") renderWish();
  });

  document.querySelectorAll(".type-pill").forEach((btn)=>{
    btn.addEventListener("click",()=>{
      state.type = btn.dataset.type; setActiveTypePill();
      if (state.tab==="products") renderProducts();
    });
  });
  document.querySelectorAll(".tab-btn").forEach((btn)=>{
    btn.addEventListener("click",()=>{
      state.tab = btn.dataset.tab; setActiveTabButtons(); showView(state.tab); renderCurrentTab();
    });
  });

  setActiveTypePill(); setActiveTabButtons(); showView(state.tab); renderCurrentTab();

   // ルーター
  try {
    router();
    window.addEventListener("hashchange", router);
  } catch (e) {
    console.error("[ClutchGear] init->router failed:", e);
  }
}
document.addEventListener("DOMContentLoaded", init);

// ====== モバイル時だけヘッダーをスクロールで隠す ======
(function mobileHideHeader() {
  const header = document.getElementById("siteHeader");
  const main   = document.querySelector("main");
  if (!header || !main) return;
  const isMobile = () => window.matchMedia("(max-width: 767px)").matches;
  let lastY = window.scrollY, enabled = false, ticking = false;

  function setSpacer() {
    if (!isMobile()) { main.style.paddingTop = ""; return; }
    const h = header.getBoundingClientRect().height;
    main.style.paddingTop = `${h}px`;
  }
  function onScroll() {
    if (!enabled) return;
    const cur = window.scrollY, delta = cur - lastY;
    if (Math.abs(delta) < 4) { lastY = cur; return; }
    header.style.transform = (delta > 0 && cur > 10) ? "translateY(-100%)" : "translateY(0)";
    lastY = cur;
  }
  function updateMode() { enabled = isMobile(); header.style.transform = "translateY(0)"; setSpacer(); }
  updateMode();
  window.addEventListener("resize", updateMode);
  window.addEventListener("orientationchange", updateMode);
  window.addEventListener("scroll", () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(()=>{ onScroll(); ticking = false; });
  });
})();
