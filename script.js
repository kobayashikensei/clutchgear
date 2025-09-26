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
    id: "p-Huntsman V3 Pro",
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
    id: "p-AIM1 陽炎 KAGERO",
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
    id: "p-Wooting 80HE",
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
    affiliate: null,
  },
   {
    id: "p-KZ ZS10 PRO",
    name: "KZ ZS10 PRO",
    brand: "H HIFIHEAR",
    type: "headsets",
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
    type: "headsets",
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
    affiliate: "null",
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
    id: "p-Dell AW2523HF",
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
    id: "pl-nats",
    name: "nAts",
    team: "TL",
    devices: [
      { role: "Keyboard", itemId: "p-Wooting 80HE" },
      { role: "Mouse", itemId: "p-BenQ-Zowie-U2" },
      { role: "Mousepad", itemId: "p-BenQ-ZOWIE-G-SR-II" },
      { role: "Headsets", itemId: "p-hs-hyperx" },
      { role: "Monitor", itemId: "p-Dell AW2523HF" },
    ],
    image: "https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Ch=675%2Cq=85%2Csharpen=2%2Cw=1200/wp-content/uploads/nats-1.png",
  },
  {
    id: "pl-gon",
    name: "GON",
    team: "FL",
    devices: [
      { role: "Keyboard", itemId: "p-Pulsar-PCMK-2HE-TKL" },
      { role: "Mouse", itemId: "p-Logicool-GPRO-X-SUPERLIGHT-2-DEX" },
      { role: "Mousepad", itemId: "p-gon-custom-mousepad" },
      { role: "Headsets", itemId: "p-KZ ZS10 PRO" },
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
    image: "https://team-detonation.net/wp-content/uploads/2025/01/hp_gyen-683x1024.png",
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
    image: "data:image/jpeg;base64,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",
  },
];

// ====== 状態 ======
const state = {
  q: "",
  type: "all",
  sort: "popularity", // popularity | price | new
  tab: "products",    // products | players | wish
　tab: "players",     // products | players | wish
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
  if (state.type !== "all") arr = arr.filter((p) => p.type === state.type);
  if (state.q.trim()) {
    const s = state.q.toLowerCase();
    arr = arr.filter((p) =>
      (p.name||"").toLowerCase().includes(s) ||
      (p.brand||"").toLowerCase().includes(s) ||
      (Array.isArray(p.tags)?p.tags:[]).some(t => (t||"").toLowerCase().includes(s))
    );
  }
  arr.sort((a,b)=>{
    if (state.sort==="price") return a.priceJPY-b.priceJPY;
    if (state.sort==="new")   return new Date(b.addedAt)-new Date(a.addedAt);
    return b.popularity-a.popularity;
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
  const map = Object.fromEntries(PRODUCTS.map(p => [p.id,p]));
  const q = state.q.trim().toLowerCase();
  let arr = PLAYERS.slice();
  if (q) arr = arr.filter(pl => pl.name.toLowerCase().includes(q) || pl.game.toLowerCase().includes(q));

  const root = byId("playersView");
  if (!arr.length) {
    root.innerHTML = `<div class="py-16 text-center text-neutral-500">該当プレイヤーが見つかりません。</div>`;
    return;
  }
  root.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      ${arr.map(pl=>`
        <a href="#/player/${pl.id}" class="block">
          <article class="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition">
            <div class="h-64 bg-neutral-100 overflow-hidden flex items-center justify-center">
  <img src="${pl.image}" alt="${pl.name}" class="max-h-full object-contain" />
            </div>
            <div class="p-4">
              <h3 class="text-base font-semibold leading-tight">${pl.name}</h3>
              <p class="text-xs text-neutral-500 mb-3">${pl.game}</p>
              <ul class="space-y-1">
                ${pl.devices.map(d=>`
                  <li class="text-sm">
                    <span class="text-neutral-500 mr-1">${d.role}:</span>
                    <span class="font-medium">${map[d.itemId]?.name || "—"}</span>
                  </li>`).join("")}
              </ul>
            </div>
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
