// ====== データ（必要に応じて編集） ======
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
  type: "mouse", // ←必要なら keyboard / headset に変更
  priceJPY: 26480,   // ←値段を入れる
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
  tags: ["Large", "Cloth"],  // ← 空じゃなく特徴を入れるとベター
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
];

const PLAYERS = [
  {
    id: "pl-meiy",
    name: "DFM meiy",
    game: "VALORANT",
    devices: [
      { role: "Keyboard", itemId: "p-wooting-60he" },
      { role: "Mouse", itemId: "p-superlightx" },
    ],
    image: "https://via.placeholder.com/640x480?text=DFM+meiy",
  },
  {
    id: "pl-nats",
    name: "nAts (TL)",
    game: "VALORANT",
    devices: [{ role: "Mouse", itemId: "p-vx2-pro" }],
    image: "https://via.placeholder.com/640x480?text=nAts",
  },
];

// ====== 状態 ======
const state = {
  q: "",
  type: "all",
  sort: "popularity", // popularity | price | new
  tab: "products",    // products | players | wish
  wishlist: loadWishlist(),
};

function loadWishlist() {
  try {
    return JSON.parse(localStorage.getItem("cg_wishlist_v1") || "[]");
  } catch {
    return [];
  }
}
function saveWishlist() {
  localStorage.setItem("cg_wishlist_v1", JSON.stringify(state.wishlist));
}

// ====== ユーティリティ ======
const yen = (n) =>
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(n);
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
      (active
        ? "bg-neutral-900 text-white border-neutral-900"
        : "bg-white hover:bg-neutral-100");
  });
  const wishBtn = [...document.querySelectorAll(".tab-btn")].find(
    (b) => b.dataset.tab === "wish"
  );
  if (wishBtn) wishBtn.textContent = `Wishlist (${state.wishlist.length})`;
}

function showView(tab) {
  byId("productsView").classList.toggle("hidden", tab !== "products");
  byId("playersView").classList.toggle("hidden", tab !== "players");
  byId("wishView").classList.toggle("hidden", tab !== "wish");
}

// ====== レンダリング（Products） ======
function getFilteredProducts() {
  let arr = PRODUCTS.slice();
  if (state.type !== "all") arr = arr.filter((p) => p.type === state.type);
  if (state.q.trim()) {
    const s = state.q.toLowerCase();
    arr = arr.filter(
      (p) =>
        p.name.toLowerCase().includes(s) ||
        p.brand.toLowerCase().includes(s) ||
        p.tags.some((t) => t.toLowerCase().includes(s))
    );
  }
  arr.sort((a, b) => {
    if (state.sort === "price") return a.priceJPY - b.priceJPY;
    if (state.sort === "new") return new Date(b.addedAt) - new Date(a.addedAt);
    return b.popularity - a.popularity;
  });
  return arr;
}

function renderProducts() {
  const list = getFilteredProducts();
  const root = byId("productsView");
  if (!list.length) {
    root.innerHTML =
      `<div class="py-16 text-center text-neutral-500">該当する商品が見つかりませんでした。</div>`;
    return;
  }
  root.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      ${list
        .map((p) => {
          const inWish = state.wishlist.includes(p.id);
          return `
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
                <button data-wish="${p.id}"
                  class="rounded-full p-2 border ${inWish ? "bg-black text-white border-black" : "bg-white hover:bg-neutral-100"}"
                  title="Wishlistに追加/削除">❤</button>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold">${yen(p.priceJPY)}</span>
                <a class="text-sm underline hover:no-underline" href="${p.affiliate}" target="_blank" rel="nofollow noopener noreferrer">購入リンク</a>
              </div>
              <div class="flex gap-2 flex-wrap">
                ${p.tags.map((t) => `<span class="text-[11px] px-2 py-1 bg-neutral-100 rounded-full">${t}</span>`).join("")}
              </div>
            </div>
          </article>`;
        })
        .join("")}
    </div>
  `;

  root.querySelectorAll("[data-wish]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-wish");
      const idx = state.wishlist.indexOf(id);
      if (idx >= 0) state.wishlist.splice(idx, 1);
      else state.wishlist.push(id);
      saveWishlist();
      setActiveTabButtons();
      renderCurrentTab();
    });
  });
}

// ====== レンダリング（Players） ======
function renderPlayers() {
  const map = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
  const q = state.q.trim().toLowerCase();
  let arr = PLAYERS.slice();
  if (q) arr = arr.filter((pl) => pl.name.toLowerCase().includes(q) || pl.game.toLowerCase().includes(q));

  const root = byId("playersView");
  if (!arr.length) {
    root.innerHTML = `<div class="py-16 text-center text-neutral-500">該当プレイヤーが見つかりません。</div>`;
    return;
  }
  root.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      ${arr.map((pl) => `
        <article class="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div class="aspect-[4/3] bg-neutral-100 overflow-hidden">
            <img src="${pl.image}" alt="${pl.name}" class="w-full h-full object-cover" />
          </div>
          <div class="p-4">
            <h3 class="text-base font-semibold leading-tight">${pl.name}</h3>
            <p class="text-xs text-neutral-500 mb-3">${pl.game}</p>
            <ul class="space-y-1">
              ${pl.devices.map(d => `
                <li class="text-sm">
                  <span class="text-neutral-500 mr-1">${d.role}:</span>
                  <span class="font-medium">${map[d.itemId]?.name || "—"}</span>
                </li>`).join("")}
            </ul>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

// ====== レンダリング（Wishlist） ======
function renderWish() {
  const list = PRODUCTS.filter((p) => state.wishlist.includes(p.id));
  const root = byId("wishView");
  if (!list.length) {
    root.innerHTML = `<div class="py-16 text-center text-neutral-500">Wishlist は空です。ハートを押して追加してね！</div>`;
    return;
  }
  root.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      ${list.map((p) => `
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
              ${p.tags.map((t) => `<span class="text-[11px] px-2 py-1 bg-neutral-100 rounded-full">${t}</span>`).join("")}
            </div>
          </div>
        </article>
      `).join("")}
    </div>
  `;

  root.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-remove");
      state.wishlist = state.wishlist.filter((x) => x !== id);
      saveWishlist();
      setActiveTabButtons();
      renderCurrentTab();
    });
  });
}

// ====== 現在タブ再描画 ======
function renderCurrentTab() {
  if (state.tab === "products") renderProducts();
  if (state.tab === "players") renderPlayers();
  if (state.tab === "wish") renderWish();
}

// ====== 初期化 ======
function init() {
  byId("year").textContent = new Date().getFullYear();

  const qInput = byId("q");
  const sortSel = byId("sort");
  qInput.addEventListener("input", (e) => {
    state.q = e.target.value;
    renderCurrentTab();
    if (state.tab === "players") renderPlayers();
  });
  sortSel.addEventListener("change", (e) => {
    state.sort = e.target.value;
    if (state.tab === "products") renderProducts();
    if (state.tab === "wish") renderWish();
  });

  document.querySelectorAll(".type-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.type = btn.dataset.type;
      setActiveTypePill();
      if (state.tab === "products") renderProducts();
    });
  });

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.tab = btn.dataset.tab;
      setActiveTabButtons();
      showView(state.tab);
      renderCurrentTab();
    });
  });

  setActiveTypePill();
  setActiveTabButtons();
  showView(state.tab);
  renderCurrentTab();
}

document.addEventListener("DOMContentLoaded", init);

// ====== モバイル時だけヘッダーをスクロールで隠す ======
(function mobileHideHeader() {
  const header = document.getElementById("siteHeader");
  const main   = document.querySelector("main");
  if (!header || !main) return;

  const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

  let lastY = window.scrollY;
  let enabled = false;
  let ticking = false;

  function setSpacer() {
    if (!isMobile()) {
      main.style.paddingTop = "";
      return;
    }
    const h = header.getBoundingClientRect().height;
    main.style.paddingTop = `${h}px`;
  }

  function onScroll() {
    if (!enabled) return;
    const cur = window.scrollY;
    const delta = cur - lastY;

    if (Math.abs(delta) < 4) {
      lastY = cur;
      return;
    }

    if (delta > 0 && cur > 10) {
      header.style.transform = "translateY(-100%)"; // 下スクロール → 隠す
    } else {
      header.style.transform = "translateY(0)";     // 上スクロール → 表示
    }
    lastY = cur;
  }

  function updateMode() {
    enabled = isMobile();
    header.style.transform = "translateY(0)";
    setSpacer();
  }

  updateMode();
  window.addEventListener("resize", updateMode);
  window.addEventListener("orientationchange", updateMode);

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      onScroll();
      ticking = false;
    });
  });
})();
