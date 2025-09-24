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
    brand: "Logitech G",
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
    id: "p-zowie",
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
      { role: "Monitor", itemId: "p-zowie" },
    ],
    image: "https://team-detonation.net/wp-content/uploads/2025/01/hp_meiy.png",
  },
  {
    id: "pl-nats",
    name: "nAts",
    team: "TL",
    devices: [
      { role: "Mouse", itemId: "p-BenQ-Zowie-U2" },
      { role: "Headsets", itemId: "p-hs-hyperx" },
    ],
    image: "https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Ch=675%2Cq=85%2Csharpen=2%2Cw=1200/wp-content/uploads/nats-1.png",
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
