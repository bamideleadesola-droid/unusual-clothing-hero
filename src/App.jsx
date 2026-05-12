import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    label: "SS26 Drop",
    title: "New Shapes For Everyday Defiance",
    copy: "Outerwear made for city heat, late exits, and daylight defiance.",
    category: "Outerwear",
    categoryCopy: "Oversized coats cut for movement.",
    image: "/assets/unusual-campaign.png",
    categoryImage: "/assets/unusual-category-outerwear.png",
    alt: "Model wearing sculptural black outerwear with a red layer against a concrete wall.",
    position: "72% 44%",
    categoryPosition: "70% 44%",
  },
  {
    label: "Motion Study",
    title: "Cut Against The Ordinary",
    copy: "Technical layers in motion, cut loose and built to interrupt routine.",
    category: "Jerseys",
    categoryCopy: "Redline tops with graphic tension.",
    image: "/assets/unusual-campaign-02.png",
    categoryImage: "/assets/unusual-category-jersey.png",
    alt: "Model walking through a concrete stairwell in black technical layers with a red underlayer.",
    position: "74% 48%",
    categoryPosition: "42% 44%",
  },
  {
    label: "Red Signal",
    title: "Uniforms For The Unnamed",
    copy: "Volume, shadow, and red signal details for silhouettes that refuse quiet.",
    category: "Accessories",
    categoryCopy: "Hard details for soft rebellion.",
    image: "/assets/unusual-campaign-03.png",
    categoryImage: "/assets/unusual-category-accessories.png",
    alt: "Model in black sculptural clothing and red gloves beside a steel panel with a red light shape.",
    position: "75% 50%",
    categoryPosition: "76% 46%",
  },
];

const dropLooks = [
  {
    number: "01",
    category: "Outerwear",
    title: "Tactical Signal Coat",
    copy: "A high-collar shell with oversized volume, red underlayer flashes, and bold UNUSUAL chest branding.",
    image: "/assets/unusual-drop-outerwear.png",
    alt: "Model in black tactical outerwear with UNUSUAL printed across the chest.",
    position: "50% 30%",
    notes: ["Water-repellent technical nylon", "Asymmetric storm flap", "Wide-leg utility trouser"],
  },
  {
    number: "02",
    category: "Jerseys",
    title: "Redline Match Top",
    copy: "A performance jersey pulled into street uniform mode with black cargo layers and clean front branding.",
    image: "/assets/unusual-drop-jersey.png",
    alt: "Model in red and black jersey with UNUSUAL printed across the chest.",
    position: "48% 32%",
    notes: ["Breathable mesh body", "Black side panel tension", "Open cropped shell"],
  },
  {
    number: "03",
    category: "Logo Knit",
    title: "Washed Name Hoodie",
    copy: "A softer logo piece with distressed texture, red gloves, and hardware-heavy denim proportions.",
    image: "/assets/unusual-drop-knit.png",
    alt: "Model in washed charcoal hoodie with UNUSUAL printed across the chest.",
    position: "54% 32%",
    notes: ["Washed charcoal cotton", "Oversized drop shoulder", "Stacked belt hardware"],
  },
  {
    number: "04",
    category: "Accessories",
    title: "Utility Carry Kit",
    copy: "Bag, gloves, belt, and eyewear in a sharp accessories look with the name stitched onto the carry piece.",
    image: "/assets/unusual-drop-accessories.png",
    alt: "Model in black technical layers with red gloves and a bag patched with UNUSUAL.",
    position: "50% 34%",
    notes: ["Crossbody utility pocket", "Gloss red leather gloves", "Matte black buckle system"],
  },
];

const releaseProducts = [
  {
    sku: "signal-coat",
    number: "01",
    name: "Tactical Signal Coat",
    tag: "Outerwear",
    price: "£268",
    image: "/assets/unusual-drop-outerwear.png",
    alt: "Black tactical coat with UNUSUAL branding worn by a model.",
    position: "50% 30%",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#11110f" },
      { name: "Signal red", value: "#d72e28" },
    ],
  },
  {
    sku: "redline-jersey",
    number: "02",
    name: "Redline Match Jersey",
    tag: "Jerseys",
    price: "£98",
    image: "/assets/unusual-drop-jersey.png",
    alt: "Red and black jersey with UNUSUAL branding worn by a model.",
    position: "50% 30%",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Signal red", value: "#d72e28" },
      { name: "Black", value: "#11110f" },
    ],
  },
  {
    sku: "name-hoodie",
    number: "03",
    name: "Washed Name Hoodie",
    tag: "Logo Knit",
    price: "£148",
    image: "/assets/unusual-drop-knit.png",
    alt: "Washed charcoal hoodie with UNUSUAL branding worn by a model.",
    position: "54% 32%",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Washed charcoal", value: "#2f2f2b" },
      { name: "Black", value: "#11110f" },
    ],
  },
  {
    sku: "utility-bag",
    number: "04",
    name: "Utility Crossbody Bag",
    tag: "Accessories",
    price: "£88",
    image: "/assets/unusual-drop-accessories.png",
    alt: "Black crossbody utility bag with UNUSUAL patch.",
    position: "50% 32%",
    sizes: ["One size"],
    colors: [{ name: "Black", value: "#11110f" }],
  },
  {
    sku: "red-gloves",
    number: "05",
    name: "Red Signal Gloves",
    tag: "Accessories",
    price: "£68",
    image: "/assets/unusual-product-gloves.png",
    alt: "Glossy deep red leather gloves styled with black technical clothing.",
    position: "50% 48%",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Signal red", value: "#d72e28" }],
  },
  {
    sku: "cargo-trouser",
    number: "06",
    name: "Wide Cargo Trouser",
    tag: "Trousers",
    price: "£158",
    image: "/assets/unusual-product-trouser.png",
    alt: "Oversized black wide cargo trousers with reflective side tape.",
    position: "50% 46%",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#11110f" },
      { name: "Graphite", value: "#383832" },
    ],
  },
];

const manifestoLines = [
  {
    code: "01",
    title: "Cut wide",
    copy: "Room for late trains, fast turns, and silhouettes that do not ask permission.",
  },
  {
    code: "02",
    title: "Move sharp",
    copy: "Technical layers, red signals, and utility details tuned for the city after dark.",
  },
  {
    code: "03",
    title: "Stay unnamed",
    copy: "No borrowed uniform, no soft compromise, no need to explain the shape.",
  },
];

const motionLooks = [
  {
    number: "01",
    title: "Outer shell",
    copy: "A black city shell with the name held large across the back.",
    image: "/assets/unusual-drop-outerwear.png",
    alt: "Model in black outerwear with UNUSUAL branding.",
    position: "50% 30%",
  },
  {
    number: "02",
    title: "Redline jersey",
    copy: "Signal-red mesh, black cargo weight, and front-name tension.",
    image: "/assets/unusual-drop-jersey.png",
    alt: "Model in red and black UNUSUAL jersey.",
    position: "48% 30%",
  },
  {
    number: "03",
    title: "Carry system",
    copy: "Utility bag, hard gloves, and a kit built for movement.",
    image: "/assets/unusual-drop-accessories.png",
    alt: "Model wearing black technical layers with a branded utility bag.",
    position: "50% 34%",
  },
  {
    number: "04",
    title: "Washed name",
    copy: "Charcoal cotton, worn texture, and a softened logo hit.",
    image: "/assets/unusual-drop-knit.png",
    alt: "Model in washed charcoal UNUSUAL hoodie.",
    position: "54% 32%",
  },
  {
    number: "05",
    title: "Night trouser",
    copy: "Wide cargo volume with reflective tape and low-light stance.",
    image: "/assets/unusual-product-trouser.png",
    alt: "Oversized black wide cargo trousers with UNUSUAL branding.",
    position: "50% 46%",
  },
];

const lookbookStories = [
  {
    number: "01",
    slug: "outer-shell",
    chapter: "Movement 01",
    category: "Outerwear",
    title: "Outer Shell",
    copy: "A high-collar city shell, red underlayer flashes, and oversized black volume built for a late exit.",
    note: "Start here if the first UNUSUAL piece needs to carry the full silhouette.",
    productSku: "signal-coat",
    image: "/assets/unusual-drop-outerwear.png",
    alt: "Model in black tactical outerwear with UNUSUAL printed across the chest.",
    position: "50% 30%",
    styling: ["Tactical Signal Coat", "Wide Cargo Trouser", "Red Signal Gloves"],
  },
  {
    number: "02",
    slug: "redline-jersey",
    chapter: "Movement 02",
    category: "Jerseys",
    title: "Redline Jersey",
    copy: "A match top made sharper with black cargo weight, cropped shell tension, and front-name energy.",
    note: "The loudest color in the drop, balanced with utility layers so it still feels wearable.",
    productSku: "redline-jersey",
    image: "/assets/unusual-drop-jersey.png",
    alt: "Model in a red and black UNUSUAL jersey with black technical layers.",
    position: "48% 32%",
    styling: ["Redline Match Jersey", "Open Shell Layer", "Black Cargo Shape"],
  },
  {
    number: "03",
    slug: "washed-name",
    chapter: "Movement 03",
    category: "Logo Knit",
    title: "Washed Name",
    copy: "Charcoal cotton, broken-in texture, red glove contrast, and a softer logo hit across the chest.",
    note: "The quiet piece for daily wear, styled with hard accessories so it does not go plain.",
    productSku: "name-hoodie",
    image: "/assets/unusual-drop-knit.png",
    alt: "Model in a washed charcoal UNUSUAL hoodie with red gloves.",
    position: "54% 32%",
    styling: ["Washed Name Hoodie", "Stacked Belt Hardware", "Red Signal Gloves"],
  },
  {
    number: "04",
    slug: "carry-system",
    chapter: "Movement 04",
    category: "Accessories",
    title: "Carry System",
    copy: "A compact utility kit with bag, eyewear, red gloves, and the brand name stitched into the carry piece.",
    note: "Use this look when the outfit needs one small object that makes the whole fit feel designed.",
    productSku: "utility-bag",
    image: "/assets/unusual-drop-accessories.png",
    alt: "Model wearing black technical layers with a branded UNUSUAL utility bag and red gloves.",
    position: "50% 34%",
    styling: ["Utility Crossbody Bag", "Red Signal Gloves", "Matte Buckle System"],
  },
  {
    number: "05",
    slug: "night-trouser",
    chapter: "Movement 05",
    category: "Trousers",
    title: "Night Trouser",
    copy: "Wide cargo volume with reflective side tape, heavy footwear balance, and a low-light stance.",
    note: "The grounding piece: built to make oversized tops and outerwear sit with intention.",
    productSku: "cargo-trouser",
    image: "/assets/unusual-product-trouser.png",
    alt: "Oversized black wide cargo trousers with reflective side tape.",
    position: "50% 46%",
    styling: ["Wide Cargo Trouser", "Heavy Footwear Stance", "Low-Light Tape"],
  },
];

const brandPrinciples = [
  {
    number: "01",
    title: "Cut wide",
    copy: "Volume is the first language of the brand: room through the body, strong shoulders, and shapes that hold their own in motion.",
    image: "/assets/unusual-drop-outerwear.png",
    alt: "Model in oversized black UNUSUAL outerwear against concrete.",
    position: "50% 30%",
  },
  {
    number: "02",
    title: "Move sharp",
    copy: "Technical layers, red signals, and hard accessories make each piece feel ready for the city after dark.",
    image: "/assets/unusual-drop-jersey.png",
    alt: "Model in red and black UNUSUAL jersey styled with black layers.",
    position: "48% 32%",
  },
  {
    number: "03",
    title: "Stay unnamed",
    copy: "The logo is direct, but the wearer stays in control. No borrowed uniform, no loud explanation, no default setting.",
    image: "/assets/unusual-drop-accessories.png",
    alt: "Model wearing black technical layers with a branded UNUSUAL utility bag.",
    position: "50% 34%",
  },
];

const brandMaterials = [
  {
    title: "Technical shells",
    copy: "Water-repellent nylon, structured collars, and city-weight layers built around movement.",
  },
  {
    title: "Washed cotton",
    copy: "Heavy jersey and charcoal washes that feel broken-in without losing shape.",
  },
  {
    title: "Signal details",
    copy: "Red gloves, reflective tape, matte buckles, and branding placed where the fit needs tension.",
  },
];

const brandReleaseModel = [
  {
    code: "PRIVATE_001",
    title: "Small runs",
    copy: "Pieces arrive in controlled quantities so the drop keeps its shape and does not become background noise.",
  },
  {
    code: "NO_NOISE",
    title: "Direct signal",
    copy: "No endless campaign talk. The list gets the drop window, sizing notes, and access first.",
  },
  {
    code: "SS26",
    title: "One direction",
    copy: "Outerwear, jersey, knit, trousers, and accessories are designed to work as one modular uniform.",
  },
];

const shopCategories = ["All", "Outerwear", "Jerseys", "Logo Knit", "Trousers", "Accessories"];

const productDetails = {
  "signal-coat": {
    fit: "Oversized shell fit",
    fabric: "Water-repellent nylon / cotton lining",
    status: "Private release",
    story: "High collar volume, red signal flashes, and a shell shape built for long city movement.",
    care: "Cold wash inside out. Hang dry. Do not bleach.",
    model: "Model is 6'1 and wears M.",
    inventory: 9,
  },
  "redline-jersey": {
    fit: "Relaxed match fit",
    fabric: "Breathable mesh / paneled poly",
    status: "New signal",
    story: "A match top pulled into street uniform mode with sharp panel tension and front-name energy.",
    care: "Machine wash cold. Dry flat. Keep away from high heat.",
    model: "Model is 6'0 and wears M.",
    inventory: 12,
  },
  "name-hoodie": {
    fit: "Dropped shoulder fit",
    fabric: "Washed heavyweight cotton",
    status: "Low run",
    story: "Washed charcoal cotton with a softened UNUSUAL mark and a heavier late-night hand feel.",
    care: "Wash cold with similar colors. Expect natural fading.",
    model: "Model is 5'11 and wears L.",
    inventory: 6,
  },
  "utility-bag": {
    fit: "Adjustable crossbody",
    fabric: "Matte nylon / metal hardware",
    status: "Carry system",
    story: "A compact carry piece with utility pocketing, hard hardware, and stitched name signal.",
    care: "Spot clean only. Store dry.",
    model: "One size. Adjustable strap.",
    inventory: 14,
  },
  "red-gloves": {
    fit: "Close hand fit",
    fabric: "Gloss leather finish",
    status: "Accessory drop",
    story: "A red signal accessory for breaking up black technical layers with one hard detail.",
    care: "Wipe clean with a soft cloth. Avoid direct heat.",
    model: "Close fit. Size up for relaxed wear.",
    inventory: 5,
  },
  "cargo-trouser": {
    fit: "Wide stacked fit",
    fabric: "Cotton twill / reflective tape",
    status: "Core piece",
    story: "Wide cargo volume with reflective low-light tape and a stacked shape over heavy footwear.",
    care: "Machine wash cold. Hang dry. Do not iron reflective tape.",
    model: "Model is 6'1 and wears M.",
    inventory: 10,
  },
};

const shippingMethods = [
  { id: "standard", name: "UK tracked", eta: "2-4 working days", price: 0 },
  { id: "express", name: "Next-day UK", eta: "1 working day", price: 7 },
  { id: "london", name: "London courier", eta: "Same day inside M25", price: 18 },
];

const sizeGuideRows = [
  { size: "S", uk: "UK 8-10", chest: "86-92", waist: "70-76", hip: "88-94", inseam: "76" },
  { size: "M", uk: "UK 10-12", chest: "92-100", waist: "76-84", hip: "94-102", inseam: "78" },
  { size: "L", uk: "UK 12-14", chest: "100-108", waist: "84-92", hip: "102-110", inseam: "80" },
  { size: "XL", uk: "UK 14-16", chest: "108-116", waist: "92-100", hip: "110-118", inseam: "82" },
];

const fitGuide = [
  {
    label: "Outerwear",
    copy: "Intentionally oversized through the body and shoulder. Size down for a sharper shell shape.",
  },
  {
    label: "Jerseys",
    copy: "Relaxed match fit with room for a base layer. Take your usual size for the intended drape.",
  },
  {
    label: "Logo knit",
    copy: "Dropped shoulder and boxy body. Size up only if you want the hoodie to sit extra wide.",
  },
  {
    label: "Trousers",
    copy: "Wide leg with stacked length. Check waist first, then choose length based on footwear.",
  },
  {
    label: "Accessories",
    copy: "Bags are adjustable one size. Gloves fit close; size up if you prefer more room.",
  },
];

const policyBlocks = [
  {
    title: "UK delivery",
    items: ["Free UK tracked delivery over £120", "Standard delivery arrives in 2-4 working days", "Next-day UK delivery is available for £7"],
  },
  {
    title: "Dispatch",
    items: ["Orders placed before 14:00 ship the same working day", "Orders placed after 14:00 ship the next working day", "Release drops may take one extra working day to pack"],
  },
  {
    title: "Returns",
    items: ["Return unworn pieces within 14 days of delivery", "Items must be clean, unwashed, and returned with tags", "Exchanges depend on remaining release stock"],
  },
  {
    title: "Need help",
    items: ["Use the size guide before checkout", "Email studio@unusual.local with order questions", "Include your order number for faster support"],
  },
];

const orderStatusSteps = [
  { title: "Confirmed", copy: "Order received and release stock reserved." },
  { title: "Packing", copy: "Pieces are checked, tagged, and packed for dispatch." },
  { title: "Dispatched", copy: "Tracking handoff is complete with the selected carrier." },
  { title: "Delivered", copy: "The package has arrived at the delivery address." },
];

const helpTopics = [
  {
    title: "Order question",
    copy: "Track a delivery, update contact details, or ask about a recent purchase.",
    href: "/track-order",
  },
  {
    title: "Sizing advice",
    copy: "Use UK measurements, fit notes, and model references before choosing a size.",
    href: "/size-guide",
  },
  {
    title: "Return request",
    copy: "Start a return or exchange request for an item from the latest preview order.",
    href: "#return-request",
  },
  {
    title: "Press / collab",
    copy: "Send studio, editorial, styling, or collaboration questions to the brand desk.",
    href: "mailto:studio@unusual.local",
  },
];

const returnReasons = ["Size exchange", "Fit not right", "Damaged on arrival", "Changed mind", "Wrong item"];

const waitlistInterests = ["Outerwear", "Jerseys", "Logo Knit", "Accessories"];
const waitlistSizes = ["XS", "S", "M", "L", "XL", "One size"];

const defaultAccount = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  apartment: "",
  city: "London",
  postcode: "",
  preferences: {
    earlyAccess: true,
    sizingNotes: true,
    restockAlerts: false,
  },
};

const defaultWaitlist = {
  firstName: "",
  email: "",
  phone: "",
  city: "London",
  size: "M",
  interest: "Outerwear",
  source: "Private release",
  joinedAt: "",
  preferences: {
    earlyAccess: true,
    fitNotes: true,
    sms: false,
  },
};

const CART_STORAGE_KEY = "unusual-cart-v1";
const ORDER_STORAGE_KEY = "unusual-order-v1";
const SAVED_STORAGE_KEY = "unusual-saved-v1";
const ACCOUNT_STORAGE_KEY = "unusual-account-v1";
const WAITLIST_STORAGE_KEY = "unusual-waitlist-v1";
const promoCodes = {
  SIGNAL10: { label: "Signal code", rate: 0.1 },
  UNUSUAL15: { label: "Private list", rate: 0.15 },
};

const slugify = (value) => value.toLowerCase().replace(/\s+/g, "-");
const getProduct = (sku) => releaseProducts.find((product) => product.sku === sku);
const parsePrice = (price) => Number(price.replace(/[^0-9.]/g, ""));
const formatPrice = (amount) => `£${amount.toFixed(2)}`;
const cartLineKey = ({ sku, size, color }) => [sku, size, color].join("__");
const normalizeLookup = (value) => value.trim().toLowerCase();

function getOrderStatusIndex(order) {
  if (!order?.createdAt) return 0;
  const hoursSinceOrder = Math.max(0, (Date.now() - new Date(order.createdAt).getTime()) / 36e5);
  return Math.min(orderStatusSteps.length - 1, Math.floor(hoursSinceOrder / 24));
}

function formatOrderDate(value) {
  if (!value) return "Today";
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function readStoredJson(key, fallback) {
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function readStoredAccount() {
  const stored = readStoredJson(ACCOUNT_STORAGE_KEY, defaultAccount);
  return {
    ...defaultAccount,
    ...stored,
    preferences: {
      ...defaultAccount.preferences,
      ...(stored.preferences ?? {}),
    },
  };
}

function readStoredSavedSkus() {
  const stored = readStoredJson(SAVED_STORAGE_KEY, []);
  return Array.isArray(stored) ? stored.filter((sku) => getProduct(sku)) : [];
}

function readStoredWaitlist() {
  const stored = readStoredJson(WAITLIST_STORAGE_KEY, defaultWaitlist);
  return {
    ...defaultWaitlist,
    ...stored,
    preferences: {
      ...defaultWaitlist.preferences,
      ...(stored.preferences ?? {}),
    },
  };
}

function storeWaitlistEntry(entry) {
  const current = readStoredWaitlist();
  const next = {
    ...defaultWaitlist,
    ...current,
    ...entry,
    email: entry.email?.trim() || current.email,
    joinedAt: new Date().toISOString(),
    preferences: {
      ...defaultWaitlist.preferences,
      ...current.preferences,
      ...(entry.preferences ?? {}),
    },
  };

  window.localStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(next));
  return next;
}

function getCartTotals(items, shippingPrice = 0, promoCode = "") {
  const subtotal = items.reduce((total, item) => {
    const product = getProduct(item.sku);
    return product ? total + parsePrice(product.price) * item.quantity : total;
  }, 0);
  const promo = promoCodes[promoCode.toUpperCase()];
  const discount = promo ? subtotal * promo.rate : 0;
  const taxable = Math.max(0, subtotal - discount);
  const total = taxable + shippingPrice;
  const tax = total * (20 / 120);

  return { subtotal, discount, tax, shipping: shippingPrice, total, promo };
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 16" focusable="false">
      <path d="M1 8h24" />
      <path d="m19 1 7 7-7 7" />
    </svg>
  );
}

function Header({ page = "home", cartCount = 0 }) {
  const homeHref = page === "home" ? "#top" : "/";
  const lookbookHref = "/lookbook";
  const waitlistHref = "/waitlist";
  const isShopCurrent = page === "shop" || page === "product";
  const isLookbookCurrent = page === "lookbook";
  const isBrandCurrent = page === "brand";
  const isAccountCurrent = page === "account";
  const isWaitlistCurrent = page === "waitlist";

  return (
    <header className="site-header" aria-label="Primary navigation">
      <div className="brand-lockup">
        <a className="brand" href={homeHref} aria-label="UNUSUAL home">
          <span className="brand-symbol" aria-hidden="true" />
          <span className="brand-name">UNUSUAL</span>
        </a>
        <span className="drop-code">SS26</span>
      </div>
      <nav className="nav-links" aria-label="Main menu">
        <a href="/shop" aria-current={isShopCurrent ? "page" : undefined}>
          Shop
        </a>
        <a href={lookbookHref} aria-current={isLookbookCurrent ? "page" : undefined}>
          Lookbook
        </a>
        <a href="/brand" aria-current={isBrandCurrent ? "page" : undefined}>
          Brand
        </a>
      </nav>
      <div className="header-actions">
        <a className="lookbook-link account-link" href="/account" aria-current={isAccountCurrent ? "page" : undefined}>
          Account
        </a>
        <a className="lookbook-link" href={waitlistHref} aria-current={isWaitlistCurrent ? "page" : undefined}>
          Join Waitlist
        </a>
        <a className="bag-link" href="/bag" aria-label={`Open shopping bag with ${cartCount} items`}>
          <span>Bag ({cartCount})</span>
          <span className="bag-icon" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

function ShopPage({ cartCount = 0, addToCart, savedSkus = [], toggleSaved = () => {} }) {
  const initialCategory = (() => {
    const category = new URLSearchParams(window.location.search).get("category");
    if (!category) return "All";
    return shopCategories.find((item) => slugify(item) === category) ?? "All";
  })();

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortMode, setSortMode] = useState("newest");
  const [selectedSku, setSelectedSku] = useState(
    releaseProducts.find((product) => initialCategory === "All" || product.tag === initialCategory)?.sku ??
      releaseProducts[0].sku,
  );
  const [quickAddedSku, setQuickAddedSku] = useState("");
  const selectedProduct = releaseProducts.find((product) => product.sku === selectedSku) ?? releaseProducts[0];
  const selectedDetails = productDetails[selectedProduct.sku];

  const visibleProducts = releaseProducts
    .filter((product) => activeCategory === "All" || product.tag === activeCategory)
    .sort((left, right) => {
      const leftPrice = parsePrice(left.price);
      const rightPrice = parsePrice(right.price);
      if (sortMode === "price-low") return leftPrice - rightPrice;
      if (sortMode === "price-high") return rightPrice - leftPrice;
      return releaseProducts.findIndex((product) => product.sku === left.sku) -
        releaseProducts.findIndex((product) => product.sku === right.sku);
    });

  const selectCategory = (category) => {
    setActiveCategory(category);
    setSelectedSku(
      releaseProducts.find((product) => category === "All" || product.tag === category)?.sku ?? releaseProducts[0].sku,
    );
    const url = category === "All" ? "/shop" : `/shop?category=${slugify(category)}`;
    window.history.replaceState(null, "", url);
  };

  const quickAddSelected = () => {
    addToCart({
      sku: selectedProduct.sku,
      size: selectedProduct.sizes[0],
      color: selectedProduct.colors[0].name,
      quantity: 1,
    });
    setQuickAddedSku(selectedProduct.sku);
    window.setTimeout(() => {
      setQuickAddedSku((current) => (current === selectedProduct.sku ? "" : current));
    }, 1800);
  };
  const selectedSaved = savedSkus.includes(selectedProduct.sku);

  return (
    <div className="shop-shell" id="top">
      <Header page="shop" cartCount={cartCount} />

      <main className="shop-page" aria-labelledby="shop-page-heading">
        <section className="shop-hero">
          <div className="shop-hero-copy">
            <span>UNUSUAL / SHOP</span>
            <h1 id="shop-page-heading">Shop SS26</h1>
          </div>
          <p>
            Technical pieces, logo layers, and hard accessories from the private release. Filter the drop and build
            the uniform one piece at a time.
          </p>
        </section>

        <section className="shop-controls" aria-label="Shop controls">
          <div className="shop-filter-group" aria-label="Filter products by category">
            {shopCategories.map((category) => (
              <button
                type="button"
                className={activeCategory === category ? "is-active" : ""}
                key={category}
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="shop-sort" aria-label="Sort products">
            <span>Sort</span>
            {[
              ["newest", "Newest"],
              ["price-low", "Low"],
              ["price-high", "High"],
            ].map(([value, label]) => (
              <button
                type="button"
                className={sortMode === value ? "is-active" : ""}
                key={value}
                onClick={() => setSortMode(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        <section className="shop-layout" aria-label="Shop product list">
          <aside className="shop-inspector" aria-label="Selected product">
            <div className="shop-inspector-media">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.alt}
                style={{ objectPosition: selectedProduct.position }}
              />
              <span>{selectedDetails.status}</span>
            </div>
            <div className="shop-inspector-copy">
              <span>{selectedProduct.tag}</span>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.price}</p>
              <dl>
                <div>
                  <dt>Fit</dt>
                  <dd>{selectedDetails.fit}</dd>
                </div>
                <div>
                  <dt>Fabric</dt>
                  <dd>{selectedDetails.fabric}</dd>
                </div>
              </dl>
              <div className="shop-inspector-actions">
                <a className="button shop-detail-link" href={`/product/${selectedProduct.sku}`}>
                  <span>View product</span>
                  <ArrowIcon />
                </a>
                <button
                  className={`button button-secondary save-action ${selectedSaved ? "is-saved" : ""}`}
                  type="button"
                  onClick={() => toggleSaved(selectedProduct.sku)}
                >
                  <span>{selectedSaved ? "Saved" : "Save"}</span>
                  <ArrowIcon />
                </button>
                <button className="button shop-quick-add" type="button" onClick={quickAddSelected}>
                  <span>{quickAddedSku === selectedProduct.sku ? "Added" : "Quick add"}</span>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </aside>

          <div className="shop-product-grid" id="shop-products">
            <div className="shop-count">
              <span>{String(visibleProducts.length).padStart(2, "0")} pieces</span>
              <span>{activeCategory}</span>
            </div>

            <div className="shop-products">
              {visibleProducts.map((product, index) => {
                const details = productDetails[product.sku];
                const isSelected = selectedProduct.sku === product.sku;
                const isSaved = savedSkus.includes(product.sku);

                return (
                  <article className={`shop-product ${isSelected ? "is-selected" : ""}`} key={product.sku}>
                    <button
                      type="button"
                      className="shop-product-button"
                      onClick={() => setSelectedSku(product.sku)}
                      aria-pressed={isSelected}
                    >
                      <span className="shop-product-image">
                        <img src={product.image} alt={product.alt} style={{ objectPosition: product.position }} />
                        <i>{details.status}</i>
                      </span>
                      <span className="shop-product-copy">
                        <span>
                          <em>{String(index + 1).padStart(2, "0")}</em>
                          {product.tag}
                        </span>
                        <strong>{product.name}</strong>
                        <span>
                          <small>{details.fit}</small>
                          <b>{product.price}</b>
                        </span>
                      </span>
                    </button>
                    <button
                      type="button"
                      className={`shop-save-toggle ${isSaved ? "is-saved" : ""}`}
                      onClick={() => toggleSaved(product.sku)}
                      aria-label={`${isSaved ? "Remove" : "Save"} ${product.name}`}
                    >
                      {isSaved ? "Saved" : "Save"}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer page="shop" />
    </div>
  );
}

function ProductPage({ sku, cartCount = 0, addToCart, savedSkus = [], toggleSaved = () => {} }) {
  const product = getProduct(sku);
  const stateProduct = product ?? releaseProducts[0];
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(stateProduct.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(stateProduct.colors[0].name);

  if (!product) {
    return (
      <div className="shop-shell" id="top">
        <Header page="product" cartCount={cartCount} />
        <main className="commerce-empty">
          <span>404 / PRODUCT</span>
          <h1>Piece not found</h1>
          <p>This release item may have moved, sold through, or never existed.</p>
          <a className="button button-primary" href="/shop">
            <span>Return to shop</span>
            <ArrowIcon />
          </a>
        </main>
        <Footer page="product" />
      </div>
    );
  }

  const details = productDetails[product.sku];
  const relatedImages = releaseProducts
    .filter((item) => item.sku !== product.sku && (item.tag === product.tag || item.colors[0].name === product.colors[0].name))
    .slice(0, 2);
  const gallery = [product, ...relatedImages];
  const productSaved = savedSkus.includes(product.sku);

  const addCurrentItem = (destination = "bag") => {
    addToCart({ sku: product.sku, size: selectedSize, color: selectedColor, quantity });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);

    if (destination === "checkout") {
      window.setTimeout(() => {
        window.location.href = "/checkout";
      }, 260);
    }
  };

  return (
    <div className="shop-shell product-shell" id="top">
      <Header page="product" cartCount={cartCount} />

      <main className="product-page" aria-labelledby="product-heading">
        <nav className="commerce-crumbs" aria-label="Breadcrumb">
          <a href="/shop">Shop</a>
          <span>/</span>
          <a href={`/shop?category=${slugify(product.tag)}`}>{product.tag}</a>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <section className="product-layout">
          <div className="product-gallery" aria-label={`${product.name} images`}>
            <div className="product-gallery-main">
              <img
                src={gallery[activeImage].image}
                alt={gallery[activeImage].alt}
                style={{ objectPosition: gallery[activeImage].position }}
              />
              <span>{details.status}</span>
            </div>
            <div className="product-thumbs">
              {gallery.map((item, index) => (
                <button
                  type="button"
                  className={activeImage === index ? "is-active" : ""}
                  key={item.sku}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show ${item.name}`}
                >
                  <img src={item.image} alt="" aria-hidden="true" style={{ objectPosition: item.position }} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-buy-panel">
            <span>{product.number} / {product.tag}</span>
            <h1 id="product-heading">{product.name}</h1>
            <p className="product-price">{product.price}</p>
            <p>{details.story}</p>

            <div className="product-choice">
              <div className="product-choice-head">
                <span>Size</span>
                <small>{details.fit}</small>
              </div>
              <div className={`commerce-options ${product.sizes.length === 1 ? "is-single" : ""}`}>
                {product.sizes.map((size) => (
                  <button
                    type="button"
                    className={selectedSize === size ? "is-selected" : ""}
                    key={size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-choice">
              <div className="product-choice-head">
                <span>Color</span>
                <small>{selectedColor}</small>
              </div>
              <div className="commerce-swatches">
                {product.colors.map((color) => (
                  <button
                    type="button"
                    className={selectedColor === color.name ? "is-selected" : ""}
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={color.name}
                    style={{ "--swatch": color.value }}
                  />
                ))}
              </div>
            </div>

            <div className="product-quantity">
              <span>Quantity</span>
              <div>
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                  -
                </button>
                <strong>{quantity}</strong>
                <button type="button" onClick={() => setQuantity((value) => Math.min(details.inventory, value + 1))}>
                  +
                </button>
              </div>
            </div>

            <div className="product-actions">
              <button className="button button-primary" type="button" onClick={() => addCurrentItem("bag")}>
                <span>{added ? "Added to bag" : "Add to bag"}</span>
                <ArrowIcon />
              </button>
              <button className="button button-secondary" type="button" onClick={() => addCurrentItem("checkout")}>
                <span>Buy now</span>
                <ArrowIcon />
              </button>
              <button
                className={`button button-secondary save-action ${productSaved ? "is-saved" : ""}`}
                type="button"
                onClick={() => toggleSaved(product.sku)}
              >
                <span>{productSaved ? "Saved" : "Save"}</span>
                <ArrowIcon />
              </button>
            </div>

            <dl className="product-service">
              <div>
                <dt>Stock</dt>
                <dd>{details.inventory} left in this release</dd>
              </div>
              <div>
                <dt>Fabric</dt>
                <dd>{details.fabric}</dd>
              </div>
              <div>
                <dt>Care</dt>
                <dd>{details.care}</dd>
              </div>
              <div>
                <dt>Fit note</dt>
                <dd>{details.model}</dd>
              </div>
            </dl>

            <div className="product-trust-links" aria-label="Product support">
              <details open>
                <summary>Size & fit</summary>
                <p>{details.fit}. Use the UK size guide if you are between sizes.</p>
                <a href="/size-guide">Open size guide</a>
              </details>
              <details>
                <summary>Delivery</summary>
                <p>Free UK tracked delivery over £120. Next-day UK and London courier options are available at checkout.</p>
                <a href="/shipping-returns">View delivery details</a>
              </details>
              <details>
                <summary>Returns</summary>
                <p>Unworn pieces can be returned within 14 days of delivery. Exchanges depend on remaining release stock.</p>
                <a href="/shipping-returns#returns">View returns policy</a>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer page="product" />
    </div>
  );
}

function CartLineItem({ item, updateCartQuantity, removeCartItem }) {
  const product = getProduct(item.sku);
  if (!product) return null;

  return (
    <article className="cart-line">
      <a className="cart-line-media" href={`/product/${product.sku}`}>
        <img src={product.image} alt={product.alt} style={{ objectPosition: product.position }} />
      </a>
      <div className="cart-line-copy">
        <span>{product.tag}</span>
        <h2>{product.name}</h2>
        <p>{item.size} / {item.color}</p>
        <strong>{formatPrice(parsePrice(product.price) * item.quantity)}</strong>
      </div>
      <div className="cart-line-controls">
        <div className="cart-stepper" aria-label={`Quantity for ${product.name}`}>
          <button type="button" onClick={() => updateCartQuantity(item.key, item.quantity - 1)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button type="button" onClick={() => updateCartQuantity(item.key, item.quantity + 1)}>
            +
          </button>
        </div>
        <button className="cart-remove" type="button" onClick={() => removeCartItem(item.key)}>
          Remove
        </button>
      </div>
    </article>
  );
}

function CommerceTotals({ totals }) {
  return (
    <dl className="commerce-totals">
      <div>
        <dt>Subtotal</dt>
        <dd>{formatPrice(totals.subtotal)}</dd>
      </div>
      <div>
        <dt>Discount</dt>
        <dd>{totals.discount > 0 ? `-${formatPrice(totals.discount)}` : formatPrice(0)}</dd>
      </div>
      <div>
        <dt>Shipping</dt>
        <dd>{totals.shipping === 0 ? "Free" : formatPrice(totals.shipping)}</dd>
      </div>
      <div>
        <dt>VAT included</dt>
        <dd>{formatPrice(totals.tax)}</dd>
      </div>
      <div className="is-total">
        <dt>Total</dt>
        <dd>{formatPrice(totals.total)}</dd>
      </div>
    </dl>
  );
}

function CartPage({ cartItems, cartCount, updateCartQuantity, removeCartItem }) {
  const totals = getCartTotals(cartItems);

  return (
    <div className="shop-shell cart-shell" id="top">
      <Header page="bag" cartCount={cartCount} />
      <main className="cart-page" aria-labelledby="cart-heading">
        <section className="commerce-heading">
          <span>UNUSUAL / BAG</span>
          <h1 id="cart-heading">Your Bag</h1>
          <p>{cartCount > 0 ? "Review the pieces before checkout." : "Your bag is waiting for its first signal."}</p>
        </section>

        {cartItems.length === 0 ? (
          <section className="commerce-empty">
            <span>EMPTY STATE</span>
            <h2>No pieces in the bag</h2>
            <p>Start with outerwear, jerseys, accessories, or the full SS26 drop.</p>
            <a className="button button-primary" href="/shop">
              <span>Shop the drop</span>
              <ArrowIcon />
            </a>
          </section>
        ) : (
          <section className="cart-layout">
            <div className="cart-lines">
              {cartItems.map((item) => (
                <CartLineItem
                  item={item}
                  key={item.key}
                  updateCartQuantity={updateCartQuantity}
                  removeCartItem={removeCartItem}
                />
              ))}
            </div>
            <aside className="cart-summary">
              <span>Order summary</span>
              <CommerceTotals totals={totals} />
              <a className="button button-primary" href="/checkout">
                <span>Checkout</span>
                <ArrowIcon />
              </a>
              <div className="cart-support-links" aria-label="Shopping support">
                <a href="/size-guide">Check sizing</a>
                <a href="/shipping-returns">Delivery & returns</a>
              </div>
              <a className="cart-continue" href="/shop">Continue shopping</a>
            </aside>
          </section>
        )}
      </main>
      <Footer page="bag" />
    </div>
  );
}

function CheckoutPage({ cartItems, cartCount, updateCartQuantity, removeCartItem, placeOrder }) {
  const [step, setStep] = useState("contact");
  const [shippingId, setShippingId] = useState("standard");
  const [promoInput, setPromoInput] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "United Kingdom",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });
  const shipping = shippingMethods.find((method) => method.id === shippingId) ?? shippingMethods[0];
  const totals = getCartTotals(cartItems, shipping.price, promoCode);
  const steps = ["contact", "delivery", "payment", "review"];
  const stepIndex = steps.indexOf(step);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validateStep = (targetStep = step) => {
    const nextErrors = {};
    if (targetStep === "contact") {
      if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email.";
      if (!form.firstName.trim()) nextErrors.firstName = "First name is required.";
      if (!form.lastName.trim()) nextErrors.lastName = "Last name is required.";
    }
    if (targetStep === "delivery") {
      ["address", "city", "zip"].forEach((field) => {
        if (!form[field].trim()) nextErrors[field] = "Required.";
      });
      if (form.zip && !/^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i.test(form.zip.trim())) {
        nextErrors.zip = "Use a valid UK postcode.";
      }
    }
    if (targetStep === "payment") {
      const cardNumber = form.cardNumber.replace(/\s+/g, "");
      if (!form.cardName.trim()) nextErrors.cardName = "Name on card is required.";
      if (!/^\d{16}$/.test(cardNumber)) nextErrors.cardNumber = "Use 16 digits.";
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiry)) nextErrors.expiry = "Use MM/YY.";
      if (!/^\d{3,4}$/.test(form.cvc)) nextErrors.cvc = "Use 3 or 4 digits.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    setStep(steps[Math.min(steps.length - 1, stepIndex + 1)]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const applyPromo = () => {
    const normalized = promoInput.trim().toUpperCase();
    if (!normalized) {
      setPromoCode("");
      setPromoMessage("");
      return;
    }
    if (!promoCodes[normalized]) {
      setPromoCode("");
      setPromoMessage("Code not recognized.");
      return;
    }
    setPromoCode(normalized);
    setPromoMessage(`${promoCodes[normalized].label} applied.`);
  };

  const fillDemoPayment = () => {
    setForm((current) => ({
      ...current,
      cardName: `${current.firstName || "UNUSUAL"} ${current.lastName || "Customer"}`.trim(),
      cardNumber: "4242 4242 4242 4242",
      expiry: "12/30",
      cvc: "424",
    }));
    setErrors((current) => ({ ...current, cardName: "", cardNumber: "", expiry: "", cvc: "" }));
  };

  const completePurchase = () => {
    for (const checkoutStep of steps.slice(0, 3)) {
      if (!validateStep(checkoutStep)) {
        setStep(checkoutStep);
        return;
      }
    }
    const order = placeOrder({ form, shipping, promoCode, totals });
    window.location.href = `/order-confirmed?order=${order.id}`;
  };

  if (cartItems.length === 0) {
    return (
      <div className="shop-shell checkout-shell" id="top">
        <Header page="checkout" cartCount={cartCount} />
        <main className="commerce-empty">
          <span>CHECKOUT</span>
          <h1>Your bag is empty</h1>
          <p>Add a piece before starting checkout.</p>
          <a className="button button-primary" href="/shop">
            <span>Return to shop</span>
            <ArrowIcon />
          </a>
        </main>
        <Footer page="checkout" />
      </div>
    );
  }

  return (
    <div className="shop-shell checkout-shell" id="top">
      <Header page="checkout" cartCount={cartCount} />
      <main className="checkout-page" aria-labelledby="checkout-heading">
        <section className="commerce-heading">
          <span>UNUSUAL / CHECKOUT</span>
          <h1 id="checkout-heading">Secure Checkout</h1>
          <p>Complete the private release order. Payment is simulated in this preview.</p>
        </section>

        <div className="checkout-steps" aria-label="Checkout progress">
          {steps.map((checkoutStep, index) => (
            <button
              type="button"
              className={step === checkoutStep ? "is-active" : index < stepIndex ? "is-complete" : ""}
              key={checkoutStep}
              onClick={() => {
                if (index <= stepIndex || steps.slice(0, index).every((checkoutStepName) => validateStep(checkoutStepName))) {
                  setStep(checkoutStep);
                }
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {checkoutStep}
            </button>
          ))}
        </div>

        <section className="checkout-layout">
          <div className="checkout-panel">
            {step === "contact" && (
              <div className="checkout-step">
                <h2>Contact</h2>
                <div className="checkout-fields two">
                  <label>
                    <span>Email</span>
                    <input value={form.email} onChange={(event) => updateField("email", event.target.value)} />
                    {errors.email && <em>{errors.email}</em>}
                  </label>
                  <label>
                    <span>Phone optional</span>
                    <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
                  </label>
                  <label>
                    <span>First name</span>
                    <input value={form.firstName} onChange={(event) => updateField("firstName", event.target.value)} />
                    {errors.firstName && <em>{errors.firstName}</em>}
                  </label>
                  <label>
                    <span>Last name</span>
                    <input value={form.lastName} onChange={(event) => updateField("lastName", event.target.value)} />
                    {errors.lastName && <em>{errors.lastName}</em>}
                  </label>
                </div>
                <button className="button button-primary" type="button" onClick={goNext}>
                  <span>Continue to delivery</span>
                  <ArrowIcon />
                </button>
              </div>
            )}

            {step === "delivery" && (
              <div className="checkout-step">
                <h2>Delivery</h2>
                <div className="checkout-fields">
                  <label>
                    <span>Address</span>
                    <input value={form.address} onChange={(event) => updateField("address", event.target.value)} />
                    {errors.address && <em>{errors.address}</em>}
                  </label>
                  <label>
                    <span>Apartment optional</span>
                    <input value={form.apartment} onChange={(event) => updateField("apartment", event.target.value)} />
                  </label>
                </div>
                <div className="checkout-fields three">
                  <label>
                    <span>Town / City</span>
                    <input value={form.city} onChange={(event) => updateField("city", event.target.value)} />
                    {errors.city && <em>{errors.city}</em>}
                  </label>
                  <label>
                    <span>County optional</span>
                    <input value={form.state} onChange={(event) => updateField("state", event.target.value)} />
                    {errors.state && <em>{errors.state}</em>}
                  </label>
                  <label>
                    <span>Postcode</span>
                    <input
                      value={form.zip}
                      onChange={(event) => updateField("zip", event.target.value.toUpperCase())}
                    />
                    {errors.zip && <em>{errors.zip}</em>}
                  </label>
                </div>
                <div className="shipping-methods" aria-label="Shipping methods">
                  {shippingMethods.map((method) => (
                    <button
                      type="button"
                      className={shippingId === method.id ? "is-selected" : ""}
                      key={method.id}
                      onClick={() => setShippingId(method.id)}
                    >
                      <span>
                        <strong>{method.name}</strong>
                        <small>{method.eta}</small>
                      </span>
                      <b>{method.price === 0 ? "Free" : formatPrice(method.price)}</b>
                    </button>
                  ))}
                </div>
                <div className="checkout-nav">
                  <button className="button button-secondary" type="button" onClick={() => setStep("contact")}>
                    <span>Back</span>
                  </button>
                  <button className="button button-primary" type="button" onClick={goNext}>
                    <span>Continue to payment</span>
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="checkout-step">
                <h2>Payment</h2>
                <p className="checkout-note">Use the demo card button for preview checkout. No real payment is taken.</p>
                <div className="checkout-fields">
                  <label>
                    <span>Name on card</span>
                    <input value={form.cardName} onChange={(event) => updateField("cardName", event.target.value)} />
                    {errors.cardName && <em>{errors.cardName}</em>}
                  </label>
                  <label>
                    <span>Card number</span>
                    <input
                      inputMode="numeric"
                      value={form.cardNumber}
                      onChange={(event) => updateField("cardNumber", event.target.value)}
                    />
                    {errors.cardNumber && <em>{errors.cardNumber}</em>}
                  </label>
                </div>
                <div className="checkout-fields two">
                  <label>
                    <span>Expiry</span>
                    <input value={form.expiry} onChange={(event) => updateField("expiry", event.target.value)} />
                    {errors.expiry && <em>{errors.expiry}</em>}
                  </label>
                  <label>
                    <span>CVC</span>
                    <input inputMode="numeric" value={form.cvc} onChange={(event) => updateField("cvc", event.target.value)} />
                    {errors.cvc && <em>{errors.cvc}</em>}
                  </label>
                </div>
                <button className="checkout-demo" type="button" onClick={fillDemoPayment}>
                  Use demo card
                </button>
                <div className="checkout-nav">
                  <button className="button button-secondary" type="button" onClick={() => setStep("delivery")}>
                    <span>Back</span>
                  </button>
                  <button className="button button-primary" type="button" onClick={goNext}>
                    <span>Review order</span>
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            )}

            {step === "review" && (
              <div className="checkout-step checkout-review">
                <h2>Review</h2>
                <div className="review-block">
                  <span>Contact</span>
                  <p>{form.firstName} {form.lastName}<br />{form.email}</p>
                </div>
                <div className="review-block">
                  <span>Ship to</span>
                  <p>
                    {form.address}
                    {form.apartment ? `, ${form.apartment}` : ""}
                    <br />
                    {form.city}
                    {form.state ? `, ${form.state}` : ""} {form.zip}
                    <br />
                    {form.country}
                  </p>
                </div>
                <div className="review-block">
                  <span>Delivery</span>
                  <p>{shipping.name}<br />{shipping.eta}</p>
                </div>
                <div className="checkout-nav">
                  <button className="button button-secondary" type="button" onClick={() => setStep("payment")}>
                    <span>Back</span>
                  </button>
                  <button className="button button-primary" type="button" onClick={completePurchase}>
                    <span>Complete purchase</span>
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            )}
          </div>

          <aside className="checkout-summary">
            <span>Summary</span>
            <div className="summary-lines">
              {cartItems.map((item) => {
                const product = getProduct(item.sku);
                if (!product) return null;
                return (
                  <div className="summary-line" key={item.key}>
                    <img src={product.image} alt="" aria-hidden="true" style={{ objectPosition: product.position }} />
                    <span>
                      <strong>{product.name}</strong>
                      <small>{item.quantity} x {item.size} / {item.color}</small>
                    </span>
                    <b>{formatPrice(parsePrice(product.price) * item.quantity)}</b>
                  </div>
                );
              })}
            </div>
            <div className="promo-row">
              <input
                value={promoInput}
                onChange={(event) => setPromoInput(event.target.value)}
                placeholder="SIGNAL10"
                aria-label="Promo code"
              />
              <button type="button" onClick={applyPromo}>Apply</button>
            </div>
            {promoMessage && <p className={promoCode ? "promo-message is-valid" : "promo-message"}>{promoMessage}</p>}
            <CommerceTotals totals={totals} />
            <div className="checkout-assurance" aria-label="Checkout support links">
              <a href="/size-guide">Size guide</a>
              <a href="/shipping-returns">Shipping & returns</a>
            </div>
            <div className="summary-edit">
              {cartItems.map((item) => (
                <CartLineItem
                  item={item}
                  key={item.key}
                  updateCartQuantity={updateCartQuantity}
                  removeCartItem={removeCartItem}
                />
              ))}
            </div>
          </aside>
        </section>
      </main>
      <Footer page="checkout" />
    </div>
  );
}

function OrderConfirmationPage({ cartCount = 0, order }) {
  return (
    <div className="shop-shell order-shell" id="top">
      <Header page="order" cartCount={cartCount} />
      <main className="order-page" aria-labelledby="order-heading">
        {!order ? (
          <section className="commerce-empty">
            <span>ORDER</span>
            <h1>No active order</h1>
            <p>There is no completed order stored in this preview session.</p>
            <a className="button button-primary" href="/shop">
              <span>Shop SS26</span>
              <ArrowIcon />
            </a>
          </section>
        ) : (
          <section className="order-confirmation">
            <div className="order-mark" aria-hidden="true">+</div>
            <span>Order confirmed</span>
            <h1 id="order-heading">Signal Received</h1>
            <p>
              Order {order.id} is confirmed for {order.customer.firstName || "UNUSUAL"} {order.customer.lastName || "Customer"}.
              A release note has been sent to {order.customer.email}.
            </p>
            <div className="order-grid">
              <div>
                <h2>Next movement</h2>
                <ol>
                  <li>Order confirmation email sent.</li>
                  <li>Pieces move to packing within 24 hours.</li>
                  <li>{order.shipping.name} delivery: {order.shipping.eta}.</li>
                </ol>
              </div>
              <div>
                <h2>Order total</h2>
                <CommerceTotals totals={order.totals} />
              </div>
            </div>
            <div className="order-items">
              {order.items.map((item) => {
                const product = getProduct(item.sku);
                if (!product) return null;
                return (
                  <article key={item.key}>
                    <img src={product.image} alt={product.alt} style={{ objectPosition: product.position }} />
                    <span>
                      <strong>{product.name}</strong>
                      <small>{item.quantity} x {item.size} / {item.color}</small>
                    </span>
                  </article>
                );
              })}
            </div>
            <div className="order-actions">
              <a className="button button-primary" href={`/track-order?order=${order.id}`}>
                <span>Track order</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="/help#return-request">
                <span>Start return</span>
                <ArrowIcon />
              </a>
              <a className="button button-primary" href="/shop">
                <span>Continue shopping</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="/">
                <span>Back home</span>
                <ArrowIcon />
              </a>
            </div>
          </section>
        )}
      </main>
      <Footer page="order" />
    </div>
  );
}

function ReleaseRack({ addToCart, cartCount = 0 }) {
  const [selectedSizes, setSelectedSizes] = useState(() =>
    Object.fromEntries(releaseProducts.map((product) => [product.sku, product.sizes[1] ?? product.sizes[0]])),
  );
  const [selectedColors, setSelectedColors] = useState(() =>
    Object.fromEntries(releaseProducts.map((product) => [product.sku, product.colors[0].name])),
  );
  const [addedSku, setAddedSku] = useState("");

  const selectSize = (sku, size) => {
    setSelectedSizes((current) => ({ ...current, [sku]: size }));
  };

  const selectColor = (sku, color) => {
    setSelectedColors((current) => ({ ...current, [sku]: color }));
  };

  const addToBag = (sku) => {
    addToCart({
      sku,
      size: selectedSizes[sku],
      color: selectedColors[sku],
      quantity: 1,
    });
    setAddedSku(sku);

    window.setTimeout(() => {
      setAddedSku((current) => (current === sku ? "" : current));
    }, 1700);
  };

  return (
    <section className="release-rack" aria-labelledby="release-rack-heading">
      <div className="release-bg-word" aria-hidden="true">
        UNUSUAL
      </div>
      <div className="release-frame">
        <div className="release-head">
          <div>
            <h2 id="release-rack-heading">Release Rack</h2>
            <p>Pieces built for repeat wear, late exits, and visible refusal.</p>
          </div>
          <div className="release-meta" aria-label="Release rack status">
            <span>SS26 / New Arrivals</span>
            <strong>{String(cartCount).padStart(2, "0")} in bag</strong>
          </div>
        </div>

        <div className="rack-scroll" aria-label="Shop release products">
          {releaseProducts.map((product, index) => (
            <article className="product-card" key={product.sku} style={{ "--product-index": index }}>
              <div className="product-media">
                <img src={product.image} alt={product.alt} style={{ objectPosition: product.position }} />
                <span className="product-quick">
                  <span>Quick view</span>
                  <ArrowIcon />
                </span>
              </div>

              <div className="product-info">
                <div className="product-line">
                  <span>{product.number}</span>
                  <em>{product.tag}</em>
                </div>
                <h3>{product.name}</h3>
                <strong>{product.price}</strong>

                <div
                  className={`product-options ${product.sizes.length === 1 ? "is-single" : ""}`}
                  aria-label={`${product.name} size options`}
                >
                  {product.sizes.map((size) => (
                    <button
                      type="button"
                      className={selectedSizes[product.sku] === size ? "is-selected" : ""}
                      key={size}
                      onClick={() => selectSize(product.sku, size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <div className="product-swatches" aria-label={`${product.name} color options`}>
                  {product.colors.map((color) => (
                    <button
                      type="button"
                      className={selectedColors[product.sku] === color.name ? "is-selected" : ""}
                      key={color.name}
                      onClick={() => selectColor(product.sku, color.name)}
                      aria-label={color.name}
                      style={{ "--swatch": color.value }}
                    />
                  ))}
                </div>

                <button className="button product-add" type="button" onClick={() => addToBag(product.sku)}>
                  <span>{addedSku === product.sku ? "Added" : "Add to bag"}</span>
                  <ArrowIcon />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="rack-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}

function SeenInMotion() {
  const railRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeFrame, setActiveFrame] = useState(0);

  const updateProgress = () => {
    const rail = railRef.current;
    if (!rail) return;

    const maxScroll = rail.scrollWidth - rail.clientWidth;
    const nextProgress = maxScroll > 0 ? rail.scrollLeft / maxScroll : 0;
    const boundedProgress = Math.min(1, Math.max(0, nextProgress));

    setProgress(boundedProgress);
    setActiveFrame(Math.round(boundedProgress * (motionLooks.length - 1)));
  };

  const scrollFrame = (direction) => {
    const rail = railRef.current;
    if (!rail) return;

    const firstFrame = rail.querySelector(".motion-card");
    const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap || "0");
    const distance = (firstFrame?.getBoundingClientRect().width ?? rail.clientWidth * 0.72) + gap;

    rail.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  useEffect(() => {
    updateProgress();
    window.addEventListener("resize", updateProgress);
    return () => window.removeEventListener("resize", updateProgress);
  }, []);

  return (
    <section className="motion-lookbook" id="archive" aria-labelledby="motion-heading">
      <div className="motion-frame">
        <div className="motion-head">
          <div>
            <p>// LOOKBOOK_SEEN_IN_MOTION</p>
            <h2 id="motion-heading">Seen In Motion</h2>
          </div>
          <p className="motion-summary">A moving lookbook for the unnamed uniform</p>
          <div className="motion-frame-count" aria-hidden="true">
            <span>Frames 05</span>
            {motionLooks.map((look, index) => (
              <i className={activeFrame === index ? "is-active" : ""} key={look.number} />
            ))}
          </div>
        </div>

        <div className="motion-rail" ref={railRef} onScroll={updateProgress} aria-label="Seen In Motion lookbook">
          {motionLooks.map((look, index) => (
            <article className="motion-card" key={look.number} style={{ "--motion-index": index }}>
              <img src={look.image} alt={look.alt} style={{ objectPosition: look.position }} />
              <span className="motion-card-mark" aria-hidden="true">
                <strong>{look.number}</strong>
                <em>U/SS26</em>
              </span>
              <span className="motion-plus" aria-hidden="true">
                +
              </span>
              <div className="motion-card-copy">
                <span>Look {look.number}</span>
                <h3>{look.title}</h3>
                <p>{look.copy}</p>
                <ArrowIcon />
              </div>
            </article>
          ))}
        </div>

        <div className="motion-controls">
          <div className="motion-progress" aria-label={`Lookbook frame ${activeFrame + 1} of ${motionLooks.length}`}>
            <span>{String(activeFrame + 1).padStart(2, "0")}</span>
            <div>
              <i style={{ "--motion-progress": Math.max(0.08, progress) }} />
            </div>
            <span>{String(motionLooks.length).padStart(2, "0")}</span>
          </div>

          <a className="button motion-cta" href="/lookbook">
            <span>View full lookbook</span>
            <ArrowIcon />
          </a>

          <p>Five looks. One direction. Built for movement. Made to disappear.</p>

          <div className="motion-buttons" aria-label="Lookbook controls">
            <span>Drag to explore</span>
            <button type="button" onClick={() => scrollFrame(-1)} aria-label="Previous lookbook frame">
              <ArrowIcon />
            </button>
            <button type="button" onClick={() => scrollFrame(1)} aria-label="Next lookbook frame">
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function UnusualCode({ joinWaitlist = null }) {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    if (joinWaitlist) {
      joinWaitlist({ email, source: "Homepage private release" });
    } else {
      storeWaitlistEntry({ email, source: "Homepage private release" });
    }
    setIsJoined(true);
  };

  return (
    <section className="unusual-code" id="journal" aria-labelledby="unusual-code-heading">
      <span className="code-noise" aria-hidden="true" />
      <div className="code-bg-word" aria-hidden="true">
        UNUSUAL
      </div>

      <div className="code-frame">
        <div className="code-grid">
          <div className="code-copy">
            <div className="code-ruler" aria-hidden="true">
              <span>&gt;_ UNUSUAL CODE</span>
              <em>/// MANIFESTO</em>
            </div>
            <h2 id="unusual-code-heading">Clothing for people who refuse the default setting.</h2>
            <p>
              A private signal for people building their own uniform: oversized, technical, direct, and built to
              be seen one piece at a time.
            </p>
          </div>

          <div className="code-panel">
            <ol className="manifesto-list" aria-label="UNUSUAL manifesto">
              {manifestoLines.map((line) => (
                <li key={line.code}>
                  <span>{line.code}</span>
                  <i aria-hidden="true" />
                  <h3>{line.title}</h3>
                  <p>{line.copy}</p>
                </li>
              ))}
            </ol>

            <form className={`code-signup ${isJoined ? "is-complete" : ""}`} onSubmit={handleSignup}>
              <label htmlFor="release-email">Private releases. No noise.</label>
              <div className="signup-row">
                <input
                  id="release-email"
                  type="email"
                  name="email"
                  placeholder=">_ Enter email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setIsJoined(false);
                  }}
                  required
                />
                <button type="submit">
                  <span>{isJoined ? "Waitlist joined" : "Join the waiting list"}</span>
                  <ArrowIcon />
                </button>
              </div>
              <p aria-live="polite">
                {isJoined
                  ? "You're on the list. Watch for the next signal."
                  : "No spam. No stories. Just drops."}
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="code-ticker" aria-hidden="true">
        <span>NO DEFAULT / NO UNIFORM / NO PERMISSION / </span>
        <span>NO DEFAULT / NO UNIFORM / NO PERMISSION / </span>
      </div>
    </section>
  );
}

function DropIndex() {
  const [activeLook, setActiveLook] = useState(0);
  const lookRefs = useRef([]);
  const active = dropLooks[activeLook];

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLook(Number(entry.target.dataset.lookIndex));
          }
        });
      },
      { rootMargin: "-38% 0px -42% 0px", threshold: 0 },
    );

    lookRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const selectLook = (index) => {
    setActiveLook(index);
    lookRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="drop-index" id="shop" aria-labelledby="drop-index-heading">
      <div className="drop-frame">
        <div className="drop-topline" aria-hidden="true">
          <span>UNUSUAL INDEX</span>
          <span>SS26 / 04 LOOKS</span>
        </div>

        <div className="drop-grid">
          <aside className="drop-stage" aria-label="Active drop look">
            <div className="drop-image-stack">
              {dropLooks.map((look, index) => (
                <img
                  className={`drop-image ${activeLook === index ? "is-active" : ""}`}
                  src={look.image}
                  alt={activeLook === index ? look.alt : ""}
                  key={look.image}
                  style={{ objectPosition: look.position }}
                />
              ))}
              <span className="drop-scan" aria-hidden="true" />
              <span className="stage-count" aria-hidden="true">
                {active.number} / 04
              </span>
            </div>
            <div className="stage-caption">
              <span>{active.category}</span>
              <strong>{active.title}</strong>
            </div>
          </aside>

          <div className="drop-content">
            <div className="drop-heading-wrap">
              <p>SS26 DROP</p>
              <h2 id="drop-index-heading">Drop Index</h2>
              <div className="look-jump" aria-label="Choose a look">
                {dropLooks.map((look, index) => (
                  <button
                    type="button"
                    className={activeLook === index ? "is-active" : ""}
                    key={look.number}
                    onClick={() => selectLook(index)}
                    aria-label={`Show look ${look.number}: ${look.title}`}
                  >
                    <span>{look.number}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="look-step-list">
              {dropLooks.map((look, index) => (
                <article
                  className={`look-step ${activeLook === index ? "is-active" : ""}`}
                  data-look-index={index}
                  key={look.number}
                  ref={(node) => {
                    lookRefs.current[index] = node;
                  }}
                >
                  <div className="look-rule">
                    <span>{look.number}</span>
                    <em>{look.category}</em>
                  </div>
                  <h3>{look.title}</h3>
                  <p>{look.copy}</p>
                  <ul>
                    {look.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                  <div className="look-actions">
                    <a className="button button-primary" href={`/shop?category=${slugify(look.category)}`}>
                      <span>Shop this look</span>
                      <ArrowIcon />
                    </a>
                    <a className="button button-secondary" href="/lookbook">
                      <span>View details</span>
                      <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="drop-marquee" aria-hidden="true">
          <span>UNUSUAL / OUTERWEAR / JERSEYS / LOGO KNIT / UTILITY / ACCESSORIES / </span>
          <span>UNUSUAL / OUTERWEAR / JERSEYS / LOGO KNIT / UTILITY / ACCESSORIES / </span>
        </div>
      </div>
    </section>
  );
}

function CategoryRail({ activeIndex, onSelectSlide }) {
  return (
    <section className="category-rail" aria-label="Shop categories">
      {slides.map((slide, index) => (
        <button
          className="category-card"
          type="button"
          key={slide.category}
          aria-pressed={activeIndex === index}
          onClick={() => onSelectSlide(index)}
        >
          <img
            src={slide.categoryImage ?? slide.image}
            alt=""
            aria-hidden="true"
            style={{ objectPosition: slide.categoryPosition ?? slide.position }}
          />
          <span className="category-shade" aria-hidden="true" />
          <span className="category-content">
            <span>
              <strong>{slide.category}</strong>
              <small>{slide.categoryCopy}</small>
            </span>
            <ArrowIcon />
          </span>
        </button>
      ))}
    </section>
  );
}

function Hero({ cartCount = 0 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const wheelLock = useRef(false);
  const activeSlide = slides[activeIndex];

  const showSlide = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? "next" : "previous");
    setActiveIndex((index + slides.length) % slides.length);
  };

  const showNext = () => {
    setDirection("next");
    setActiveIndex((index) => (index + 1) % slides.length);
  };

  const showPrevious = () => {
    setDirection("previous");
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const handleWheel = (event) => {
    if (Math.abs(event.deltaY) < 35 || wheelLock.current) return;

    wheelLock.current = true;
    if (event.deltaY > 0) {
      showNext();
    } else {
      showPrevious();
    }

    window.setTimeout(() => {
      wheelLock.current = false;
    }, 900);
  };

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return undefined;

    const interval = window.setInterval(showNext, 6200);
    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  return (
    <main id="top" className="hero-shell">
      <Header cartCount={cartCount} />

      <section
        className="hero"
        aria-labelledby="hero-heading"
        data-direction={direction}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onWheel={handleWheel}
      >
        <div className="wordmark" aria-hidden="true">
          UNUSUAL
        </div>

        <figure className="campaign-media" aria-live="polite">
          {slides.map((slide, index) => (
            <span
              className={`campaign-slide ${activeIndex === index ? "is-active" : ""}`}
              key={slide.image}
              aria-hidden={activeIndex !== index}
            >
              <img
                className="campaign-image"
                src={slide.image}
                alt={activeIndex === index ? slide.alt : ""}
                style={{ objectPosition: slide.position }}
              />
            </span>
          ))}
          <span className="motion-scan" aria-hidden="true" />
        </figure>

        <div className="season-mark" aria-hidden="true">
          <span />
          <strong>SS26</strong>
          <em>2026</em>
          <span />
        </div>

        <div className="plus-mark" aria-hidden="true">
          <span />
          <span />
        </div>

        <div className="carousel-controls" aria-label="Campaign slide controls">
          <button type="button" onClick={showPrevious} aria-label="Previous campaign image">
            <ArrowIcon />
          </button>
          <div className="slide-dots" role="tablist" aria-label="Campaign images">
            {slides.map((slide, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Show ${slide.category}`}
                className={activeIndex === index ? "is-active" : ""}
                key={slide.category}
                onClick={() => showSlide(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <button type="button" onClick={showNext} aria-label="Next campaign image">
            <ArrowIcon />
          </button>
        </div>

        <div className="hero-copy" key={activeSlide.title}>
          <p>{activeSlide.label}</p>
          <h1 id="hero-heading">{activeSlide.title}</h1>
          <p className="slide-copy">{activeSlide.copy}</p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#shop">
              <span>Shop the drop</span>
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href="/lookbook">
              <span>View lookbook</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <CategoryRail activeIndex={activeIndex} onSelectSlide={showSlide} />
    </main>
  );
}

function LookbookPage({ cartCount = 0, joinWaitlist = null }) {
  const [activeStory, setActiveStory] = useState(lookbookStories[0].slug);
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const storyRefs = useRef([]);
  const activeIndex = Math.max(0, lookbookStories.findIndex((story) => story.slug === activeStory));
  const activeLook = lookbookStories[activeIndex] ?? lookbookStories[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visible?.target?.dataset?.lookSlug) {
          setActiveStory(visible.target.dataset.lookSlug);
        }
      },
      {
        rootMargin: "-34% 0px -34% 0px",
        threshold: [0.18, 0.42, 0.68],
      },
    );

    storyRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const jumpToStory = (index) => {
    const target = storyRefs.current[index];
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleLookbookJoin = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    if (joinWaitlist) {
      joinWaitlist({ email, source: "Lookbook closing" });
    } else {
      storeWaitlistEntry({ email, source: "Lookbook closing" });
    }
    setIsJoined(true);
  };

  return (
    <div className="lookbook-shell" id="top" style={{ "--active-look": activeIndex }}>
      <Header page="lookbook" cartCount={cartCount} />

      <main className="lookbook-page" aria-labelledby="lookbook-heading">
        <section className="lookbook-hero">
          <div className="lookbook-hero-copy">
            <span>UNUSUAL / LOOKBOOK</span>
            <h1 id="lookbook-heading">Lookbook SS26</h1>
            <p>
              Five styled frames from the private release. Move through the silhouettes, then shop the exact piece that
              anchors each look.
            </p>
            <div className="lookbook-hero-actions" aria-label="Lookbook actions">
              <a className="button button-primary" href={`/product/${activeLook.productSku}`}>
                <span>Shop active look</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="/shop">
                <span>Open full shop</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="lookbook-hero-media" aria-label={`Current look: ${activeLook.title}`}>
            <div className="lookbook-hero-primary">
              <img src={activeLook.image} alt={activeLook.alt} style={{ objectPosition: activeLook.position }} />
              <span>{activeLook.chapter}</span>
            </div>
            <div className="lookbook-hero-secondary" aria-hidden="true">
              <img
                src={lookbookStories[(activeIndex + 1) % lookbookStories.length].image}
                alt=""
                style={{ objectPosition: lookbookStories[(activeIndex + 1) % lookbookStories.length].position }}
              />
            </div>
            <div className="lookbook-hero-meter" aria-hidden="true">
              <span>{activeLook.number}</span>
              <i style={{ "--meter-progress": (activeIndex + 1) / lookbookStories.length }} />
              <span>{String(lookbookStories.length).padStart(2, "0")}</span>
            </div>
          </div>
        </section>

        <nav className="lookbook-quick-nav" aria-label="Jump to look">
          {lookbookStories.map((story, index) => (
            <button
              type="button"
              className={activeStory === story.slug ? "is-active" : ""}
              key={story.slug}
              onClick={() => jumpToStory(index)}
            >
              <span>{story.number}</span>
              <strong>{story.title}</strong>
              <em>{story.category}</em>
            </button>
          ))}
        </nav>

        <div className="lookbook-marquee" aria-hidden="true">
          <span>NO NOISE / FULL LOOKS / SHOP THE FRAME / PRIVATE RELEASE / </span>
          <span>NO NOISE / FULL LOOKS / SHOP THE FRAME / PRIVATE RELEASE / </span>
        </div>

        <section className="lookbook-story-list" aria-label="Styled looks">
          {lookbookStories.map((story, index) => {
            const product = getProduct(story.productSku);

            return (
              <article
                className="lookbook-story"
                data-look-slug={story.slug}
                key={story.slug}
                ref={(node) => {
                  storyRefs.current[index] = node;
                }}
                style={{ "--story-index": index }}
              >
                <div className="lookbook-story-media">
                  <img src={story.image} alt={story.alt} style={{ objectPosition: story.position }} />
                  <span className="lookbook-story-index">{story.number}</span>
                  <span className="lookbook-story-tag">{story.chapter}</span>
                </div>

                <div className="lookbook-story-copy">
                  <span>{story.category}</span>
                  <h2>{story.title}</h2>
                  <p>{story.copy}</p>
                  <ul>
                    {story.styling.map((piece) => (
                      <li key={piece}>{piece}</li>
                    ))}
                  </ul>
                  <div className="lookbook-story-footer">
                    <p>{story.note}</p>
                    <a className="button button-primary" href={`/product/${story.productSku}`}>
                      <span>{product ? `${product.price} / Shop this look` : "Shop this look"}</span>
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="lookbook-strip" aria-labelledby="lookbook-strip-heading">
          <div className="lookbook-strip-head">
            <span>// GARMENT_MAP</span>
            <h2 id="lookbook-strip-heading">Shop By Frame</h2>
          </div>
          <div className="lookbook-strip-rail" aria-label="Lookbook product rail">
            {lookbookStories.map((story) => {
              const product = getProduct(story.productSku);

              return (
                <a className="lookbook-strip-card" href={`/product/${story.productSku}`} key={story.slug}>
                  <img src={story.image} alt={story.alt} style={{ objectPosition: story.position }} />
                  <span>
                    <strong>{story.number}</strong>
                    {product?.name ?? story.title}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="lookbook-closing" aria-labelledby="lookbook-closing-heading">
          <div>
            <span>PRIVATE_RELEASE_001</span>
            <h2 id="lookbook-closing-heading">Private release. No noise.</h2>
            <p>Join the list for the next signal, early sizing notes, and first access before the wider shop opens.</p>
          </div>

          <form className={`lookbook-signup ${isJoined ? "is-complete" : ""}`} onSubmit={handleLookbookJoin}>
            <label htmlFor="lookbook-email">Get the next signal first.</label>
            <div className="lookbook-signup-row">
              <input
                id="lookbook-email"
                type="email"
                name="lookbook-email"
                placeholder=">_ Email address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setIsJoined(false);
                }}
                required
              />
              <button type="submit">
                <span>{isJoined ? "Joined" : "Join waitlist"}</span>
                <ArrowIcon />
              </button>
            </div>
            <p aria-live="polite">{isJoined ? "Signal received. You're on the list." : "No spam. Drops only."}</p>
          </form>
        </section>
      </main>

      <Footer page="lookbook" />
    </div>
  );
}

function BrandPage({ cartCount = 0, joinWaitlist = null }) {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const currentPrinciple = brandPrinciples[activePrinciple];

  const handleBrandJoin = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    if (joinWaitlist) {
      joinWaitlist({ email, source: "Brand story" });
    } else {
      storeWaitlistEntry({ email, source: "Brand story" });
    }
    setIsJoined(true);
  };

  return (
    <div className="brand-shell" id="top">
      <Header page="brand" cartCount={cartCount} />

      <main className="brand-page" aria-labelledby="brand-heading">
        <section className="brand-hero">
          <div className="brand-hero-copy">
            <h1 id="brand-heading">Unusual</h1>
            <p>
              A clothing brand for people who refuse the default setting: oversized silhouettes, technical restraint,
              direct branding, and private drops with no noise.
            </p>
            <div className="brand-hero-actions" aria-label="Brand actions">
              <a className="button button-primary" href="/shop">
                <span>Shop SS26</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="/lookbook">
                <span>View lookbook</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="brand-hero-media" aria-label="UNUSUAL campaign imagery">
            <figure className="brand-hero-large">
              <img
                src="/assets/unusual-campaign.png"
                alt="Model wearing black UNUSUAL outerwear with a red underlayer."
                style={{ objectPosition: "72% 44%" }}
              />
            </figure>
            <figure className="brand-hero-small" aria-hidden="true">
              <img src="/assets/unusual-campaign-03.png" alt="" style={{ objectPosition: "75% 50%" }} />
            </figure>
            <span className="brand-hero-stamp" aria-hidden="true">
              SS26_PRIVATE_001
            </span>
          </div>
        </section>

        <section className="brand-manifesto" aria-labelledby="brand-manifesto-heading">
          <div className="brand-manifesto-copy">
            <span>MANIFESTO</span>
            <h2 id="brand-manifesto-heading">Not a uniform. A refusal.</h2>
            <p>
              UNUSUAL takes the language of utility clothing and bends it into something more personal: wide shapes,
              graphic hits, and clothes that make the wearer feel harder to categorize.
            </p>
          </div>

          <div className="brand-principle-panel">
            <div className="brand-principle-media">
              <img
                src={currentPrinciple.image}
                alt={currentPrinciple.alt}
                style={{ objectPosition: currentPrinciple.position }}
              />
              <span>{currentPrinciple.number}</span>
            </div>

            <div className="brand-principle-list" aria-label="Brand principles">
              {brandPrinciples.map((principle, index) => (
                <button
                  type="button"
                  className={activePrinciple === index ? "is-active" : ""}
                  key={principle.title}
                  onClick={() => setActivePrinciple(index)}
                >
                  <span>{principle.number}</span>
                  <strong>{principle.title}</strong>
                  <em>{principle.copy}</em>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-materials" aria-labelledby="brand-materials-heading">
          <div className="brand-section-head">
            <span>// MATERIAL_LANGUAGE</span>
            <h2 id="brand-materials-heading">Built from the details out.</h2>
          </div>

          <div className="brand-material-grid">
            {brandMaterials.map((material, index) => (
              <article className="brand-material" key={material.title} style={{ "--material-index": index }}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{material.title}</h3>
                <p>{material.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="brand-release" aria-labelledby="brand-release-heading">
          <div className="brand-release-copy">
            <span>PRIVATE_RELEASE_MODEL</span>
            <h2 id="brand-release-heading">Private releases. No noise.</h2>
            <p>
              The brand is built around fewer, sharper drops. Each release gives the pieces room to be styled, worn,
              and understood before the next signal appears.
            </p>
          </div>

          <div className="brand-release-list">
            {brandReleaseModel.map((item) => (
              <article key={item.code}>
                <span>{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="brand-waitlist" aria-labelledby="brand-waitlist-heading">
          <div>
            <span>JOIN_THE_SIGNAL</span>
            <h2 id="brand-waitlist-heading">Get the next drop first.</h2>
          </div>

          <form className={`brand-signup ${isJoined ? "is-complete" : ""}`} onSubmit={handleBrandJoin}>
            <label htmlFor="brand-email">Early access list</label>
            <div className="brand-signup-row">
              <input
                id="brand-email"
                type="email"
                name="brand-email"
                placeholder=">_ Email address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setIsJoined(false);
                }}
                required
              />
              <button type="submit">
                <span>{isJoined ? "Joined" : "Join waitlist"}</span>
                <ArrowIcon />
              </button>
            </div>
            <p aria-live="polite">{isJoined ? "Signal received. You're on the list." : "No spam. Drops only."}</p>
          </form>
        </section>
      </main>

      <Footer page="brand" />
    </div>
  );
}

function SizeGuidePage({ cartCount = 0 }) {
  return (
    <div className="shop-shell support-shell" id="top">
      <Header page="support" cartCount={cartCount} />

      <main className="support-page" aria-labelledby="size-guide-heading">
        <nav className="commerce-crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/shop">Shop</a>
          <span>/</span>
          <span>Size guide</span>
        </nav>

        <section className="support-hero">
          <div className="support-hero-copy">
            <span>UNUSUAL / SIZE GUIDE</span>
            <h1 id="size-guide-heading">Find Your Shape</h1>
            <p>
              UNUSUAL fits are designed around volume, movement, and sharp proportion. Use the UK size map first,
              then adjust based on how much room you want in the silhouette.
            </p>
            <div className="support-actions">
              <a className="button button-primary" href="/shop">
                <span>Shop SS26</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="/shipping-returns">
                <span>Delivery info</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="support-hero-media" aria-label="UNUSUAL fit reference">
            <img
              src="/assets/unusual-drop-outerwear.png"
              alt="Model wearing oversized black UNUSUAL outerwear."
              style={{ objectPosition: "50% 30%" }}
            />
            <span>UK_BODY_MEASUREMENTS_CM</span>
          </div>
        </section>

        <section className="support-grid" aria-labelledby="size-table-heading">
          <div className="support-panel support-table-panel">
            <div className="support-panel-head">
              <span>01 / MEASUREMENTS</span>
              <h2 id="size-table-heading">UK size map</h2>
            </div>
            <p>Measurements are body measurements in centimetres. Choose the size that matches your chest first for tops and waist first for trousers.</p>
            <div className="size-table-wrap">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>UK</th>
                    <th>Chest</th>
                    <th>Waist</th>
                    <th>Hip</th>
                    <th>Inseam</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeGuideRows.map((row) => (
                    <tr key={row.size}>
                      <th>{row.size}</th>
                      <td data-label="UK">{row.uk}</td>
                      <td data-label="Chest">{row.chest}</td>
                      <td data-label="Waist">{row.waist}</td>
                      <td data-label="Hip">{row.hip}</td>
                      <td data-label="Inseam">{row.inseam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="support-panel support-note-panel" aria-labelledby="fit-rules-heading">
            <div className="support-panel-head">
              <span>02 / FIT RULES</span>
              <h2 id="fit-rules-heading">Between sizes?</h2>
            </div>
            <ol>
              <li>Size down for a cleaner, sharper profile.</li>
              <li>Take your usual size for the intended UNUSUAL volume.</li>
              <li>Size up only when you want exaggerated drop and stack.</li>
            </ol>
          </aside>
        </section>

        <section className="support-fit-rail" aria-labelledby="fit-by-category-heading">
          <div className="support-section-head">
            <span>03 / CATEGORY FIT</span>
            <h2 id="fit-by-category-heading">How each piece is meant to sit.</h2>
          </div>
          <div className="fit-card-grid">
            {fitGuide.map((item, index) => (
              <article key={item.label} style={{ "--fit-index": index }}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.label}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="support-model-strip" aria-labelledby="model-reference-heading">
          <div className="support-section-head">
            <span>04 / MODEL REFERENCES</span>
            <h2 id="model-reference-heading">Shop with the fit note in view.</h2>
          </div>
          <div className="support-product-strip">
            {releaseProducts.slice(0, 4).map((product) => {
              const details = productDetails[product.sku];

              return (
                <a href={`/product/${product.sku}`} key={product.sku}>
                  <img src={product.image} alt={product.alt} style={{ objectPosition: product.position }} />
                  <span>
                    <strong>{product.name}</strong>
                    <small>{details.model}</small>
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      </main>

      <Footer page="support" />
    </div>
  );
}

function ShippingReturnsPage({ cartCount = 0 }) {
  return (
    <div className="shop-shell support-shell" id="top">
      <Header page="support" cartCount={cartCount} />

      <main className="support-page policy-page" aria-labelledby="shipping-heading">
        <nav className="commerce-crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/shop">Shop</a>
          <span>/</span>
          <span>Shipping & returns</span>
        </nav>

        <section className="support-hero policy-hero">
          <div className="support-hero-copy">
            <span>UNUSUAL / UK ORDERS</span>
            <h1 id="shipping-heading">Shipping & Returns</h1>
            <p>
              A UK-first checkout flow with clear delivery timing, simple returns, and no surprise handling language.
              Payment remains simulated in this preview.
            </p>
            <div className="support-actions">
              <a className="button button-primary" href="/shop">
                <span>Return to shop</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="/size-guide">
                <span>Size guide</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="support-hero-media" aria-label="UNUSUAL delivery reference">
            <img
              src="/assets/unusual-drop-accessories.png"
              alt="Model wearing UNUSUAL accessories and utility bag."
              style={{ objectPosition: "50% 34%" }}
            />
            <span>UK_TRACKED_RELEASE_FLOW</span>
          </div>
        </section>

        <section className="policy-block-grid" aria-label="Shipping and returns policy">
          {policyBlocks.map((block, index) => (
            <article key={block.title} style={{ "--policy-index": index }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{block.title}</h2>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="delivery-matrix" aria-labelledby="delivery-options-heading">
          <div className="support-section-head">
            <span>DELIVERY OPTIONS</span>
            <h2 id="delivery-options-heading">Choose the pace at checkout.</h2>
          </div>
          <div className="delivery-rows">
            {shippingMethods.map((method) => (
              <div key={method.id}>
                <span>{method.name}</span>
                <strong>{method.eta}</strong>
                <b>{method.price === 0 ? "Free" : formatPrice(method.price)}</b>
              </div>
            ))}
          </div>
        </section>

        <section className="returns-process" id="returns" aria-labelledby="returns-heading">
          <div className="support-section-head">
            <span>RETURNS PROCESS</span>
            <h2 id="returns-heading">Return the piece clean, unworn, and tagged.</h2>
          </div>
          <div className="returns-steps">
            <article>
              <span>01</span>
              <h3>Email support</h3>
              <p>Send your order number and the item you want to return to studio@unusual.local within 14 days.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Pack the item</h3>
              <p>Use the original packaging where possible. Keep tags attached and avoid fragrance or wear marks.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Refund or exchange</h3>
              <p>Refunds process to the original payment method. Exchanges are held only while release stock remains.</p>
            </article>
          </div>
          <a className="button button-primary support-inline-cta" href="/help#return-request">
            <span>Start a return request</span>
            <ArrowIcon />
          </a>
        </section>
      </main>

      <Footer page="support" />
    </div>
  );
}

function OrderTimeline({ order }) {
  const activeIndex = getOrderStatusIndex(order);

  return (
    <ol className="tracking-timeline">
      {orderStatusSteps.map((step, index) => (
        <li className={index <= activeIndex ? "is-active" : ""} key={step.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step.title}</strong>
          <p>{step.copy}</p>
        </li>
      ))}
    </ol>
  );
}

function OrderTrackingPage({ cartCount = 0, order }) {
  const queryOrderId = new URLSearchParams(window.location.search).get("order") ?? "";
  const hasLinkedOrder = Boolean(order && queryOrderId && normalizeLookup(order.id) === normalizeLookup(queryOrderId));
  const [lookup, setLookup] = useState({
    orderId: queryOrderId,
    email: hasLinkedOrder ? order.customer.email : "",
  });
  const [result, setResult] = useState(hasLinkedOrder ? "found" : null);
  const matchedOrder = result === "found" ? order : null;

  const updateLookup = (field, value) => {
    setLookup((current) => ({ ...current, [field]: value }));
    setResult(null);
  };

  const fillLatestOrder = () => {
    if (!order) return;
    setLookup({ orderId: order.id, email: order.customer.email });
    setResult("found");
  };

  const handleLookup = (event) => {
    event.preventDefault();
    const orderId = normalizeLookup(lookup.orderId).replace("#", "");
    const email = normalizeLookup(lookup.email);
    const isMatch = Boolean(
      order &&
        normalizeLookup(order.id) === orderId &&
        normalizeLookup(order.customer.email) === email,
    );
    setResult(isMatch ? "found" : "missing");
  };

  return (
    <div className="shop-shell support-shell tracking-shell" id="top">
      <Header page="support" cartCount={cartCount} />

      <main className="support-page tracking-page" aria-labelledby="tracking-heading">
        <nav className="commerce-crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/shop">Shop</a>
          <span>/</span>
          <span>Track order</span>
        </nav>

        <section className="support-hero tracking-hero">
          <div className="support-hero-copy">
            <span>UNUSUAL / ORDER STATUS</span>
            <h1 id="tracking-heading">Track The Signal</h1>
            <p>
              Enter the order number and email from checkout. In this preview, tracking reads from the latest order
              stored in your browser session.
            </p>
            <div className="support-actions">
              <a className="button button-primary" href="/help">
                <span>Get help</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="/shipping-returns">
                <span>Delivery policy</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="support-hero-media" aria-label="UNUSUAL order tracking reference">
            <img
              src="/assets/unusual-drop-accessories.png"
              alt="Model wearing black UNUSUAL technical layers with utility accessories."
              style={{ objectPosition: "50% 34%" }}
            />
            <span>TRACKING_SIGNAL_ACTIVE</span>
          </div>
        </section>

        <section className="tracking-layout" aria-label="Order tracking form and status">
          <form className="tracking-form support-panel" onSubmit={handleLookup}>
            <div className="support-panel-head">
              <span>01 / LOOKUP</span>
              <h2>Find order</h2>
            </div>
            <label>
              <span>Order number</span>
              <input
                value={lookup.orderId}
                onChange={(event) => updateLookup("orderId", event.target.value)}
                placeholder="UN-000000"
                required
              />
            </label>
            <label>
              <span>Email address</span>
              <input
                type="email"
                value={lookup.email}
                onChange={(event) => updateLookup("email", event.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>
            <div className="tracking-form-actions">
              <button className="button button-primary" type="submit">
                <span>Track order</span>
                <ArrowIcon />
              </button>
              <button className="button button-secondary" type="button" onClick={fillLatestOrder} disabled={!order}>
                <span>Use latest order</span>
                <ArrowIcon />
              </button>
            </div>
            <p>{order ? "Use latest order for the demo checkout you completed in this browser." : "Complete checkout once to create a preview order."}</p>
          </form>

          <div className={`tracking-result support-panel ${matchedOrder ? "is-found" : ""}`}>
            {matchedOrder ? (
              <>
                <div className="support-panel-head">
                  <span>02 / STATUS</span>
                  <h2>{orderStatusSteps[getOrderStatusIndex(matchedOrder)].title}</h2>
                </div>
                <div className="tracking-order-meta">
                  <div>
                    <span>Order</span>
                    <strong>{matchedOrder.id}</strong>
                  </div>
                  <div>
                    <span>Date</span>
                    <strong>{formatOrderDate(matchedOrder.createdAt)}</strong>
                  </div>
                  <div>
                    <span>Delivery</span>
                    <strong>{matchedOrder.shipping.name}</strong>
                  </div>
                </div>
                <TrackingSummary order={matchedOrder} />
                <OrderTimeline order={matchedOrder} />
              </>
            ) : (
              <>
                <div className="support-panel-head">
                  <span>02 / STATUS</span>
                  <h2>{result === "missing" ? "No Match" : "Ready To Search"}</h2>
                </div>
                <p>
                  {result === "missing"
                    ? "No matching preview order was found. Check the order number and email, or use the latest order button after completing checkout."
                    : "Your status timeline will appear here once the order details match the latest preview checkout."}
                </p>
                <OrderTimeline order={order} />
              </>
            )}
          </div>
        </section>
      </main>

      <Footer page="support" />
    </div>
  );
}

function TrackingSummary({ order }) {
  return (
    <div className="tracking-summary">
      {order.items.map((item) => {
        const product = getProduct(item.sku);
        if (!product) return null;

        return (
          <article key={item.key}>
            <img src={product.image} alt={product.alt} style={{ objectPosition: product.position }} />
            <span>
              <strong>{product.name}</strong>
              <small>{item.quantity} x {item.size} / {item.color}</small>
            </span>
          </article>
        );
      })}
    </div>
  );
}

function HelpPage({ cartCount = 0, order }) {
  const [contactForm, setContactForm] = useState({
    topic: "Order question",
    email: order?.customer?.email ?? "",
    orderId: order?.id ?? "",
    message: "",
  });
  const [contactSent, setContactSent] = useState(false);
  const [returnForm, setReturnForm] = useState({
    itemKey: order?.items?.[0]?.key ?? "",
    reason: returnReasons[0],
    note: "",
  });
  const [returnSent, setReturnSent] = useState(false);

  const updateContact = (field, value) => {
    setContactForm((current) => ({ ...current, [field]: value }));
    setContactSent(false);
  };

  const updateReturn = (field, value) => {
    setReturnForm((current) => ({ ...current, [field]: value }));
    setReturnSent(false);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setContactSent(true);
  };

  const handleReturnSubmit = (event) => {
    event.preventDefault();
    if (!order) return;
    setReturnSent(true);
  };

  const selectedReturnItem = order?.items?.find((item) => item.key === returnForm.itemKey) ?? order?.items?.[0];
  const selectedReturnProduct = selectedReturnItem ? getProduct(selectedReturnItem.sku) : null;

  return (
    <div className="shop-shell support-shell help-shell" id="top">
      <Header page="support" cartCount={cartCount} />

      <main className="support-page help-page" aria-labelledby="help-heading">
        <nav className="commerce-crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/shop">Shop</a>
          <span>/</span>
          <span>Help</span>
        </nav>

        <section className="support-hero help-hero">
          <div className="support-hero-copy">
            <span>UNUSUAL / SUPPORT DESK</span>
            <h1 id="help-heading">Help Without Noise</h1>
            <p>
              Track an order, ask about sizing, start a return, or send a press note. This preview simulates the
              support flow without sending real messages.
            </p>
            <div className="support-actions">
              <a className="button button-primary" href="/track-order">
                <span>Track order</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#return-request">
                <span>Start return</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="support-hero-media" aria-label="UNUSUAL support reference">
            <img
              src="/assets/unusual-drop-knit.png"
              alt="Model wearing washed charcoal UNUSUAL hoodie."
              style={{ objectPosition: "54% 32%" }}
            />
            <span>SUPPORT_SIGNAL_READY</span>
          </div>
        </section>

        <section className="help-topic-grid" aria-label="Help topics">
          {helpTopics.map((topic, index) => (
            <a href={topic.href} key={topic.title} style={{ "--topic-index": index }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{topic.title}</h2>
              <p>{topic.copy}</p>
            </a>
          ))}
        </section>

        <section className="help-workspace" aria-label="Support forms">
          <form className={`support-panel help-form ${contactSent ? "is-complete" : ""}`} onSubmit={handleContactSubmit}>
            <div className="support-panel-head">
              <span>01 / CONTACT</span>
              <h2>Send a support note</h2>
            </div>
            <label>
              <span>Topic</span>
              <select value={contactForm.topic} onChange={(event) => updateContact("topic", event.target.value)}>
                {helpTopics.map((topic) => (
                  <option key={topic.title}>{topic.title}</option>
                ))}
              </select>
            </label>
            <div className="help-field-grid">
              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(event) => updateContact("email", event.target.value)}
                  required
                />
              </label>
              <label>
                <span>Order optional</span>
                <input value={contactForm.orderId} onChange={(event) => updateContact("orderId", event.target.value)} />
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea
                value={contactForm.message}
                onChange={(event) => updateContact("message", event.target.value)}
                placeholder="Tell us what you need."
                required
              />
            </label>
            <button className="button button-primary" type="submit">
              <span>{contactSent ? "Note queued" : "Send note"}</span>
              <ArrowIcon />
            </button>
            <p aria-live="polite">
              {contactSent ? "Support note queued for this preview." : "Preview only. No real email is sent."}
            </p>
          </form>

          <form
            className={`support-panel return-form ${returnSent ? "is-complete" : ""}`}
            id="return-request"
            onSubmit={handleReturnSubmit}
          >
            <div className="support-panel-head">
              <span>02 / RETURNS</span>
              <h2>Request return</h2>
            </div>
            {order ? (
              <>
                <label>
                  <span>Item</span>
                  <select value={returnForm.itemKey} onChange={(event) => updateReturn("itemKey", event.target.value)}>
                    {order.items.map((item) => {
                      const product = getProduct(item.sku);
                      return (
                        <option key={item.key} value={item.key}>
                          {product?.name ?? item.sku} / {item.size}
                        </option>
                      );
                    })}
                  </select>
                </label>
                <label>
                  <span>Reason</span>
                  <select value={returnForm.reason} onChange={(event) => updateReturn("reason", event.target.value)}>
                    {returnReasons.map((reason) => (
                      <option key={reason}>{reason}</option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Notes optional</span>
                  <textarea
                    value={returnForm.note}
                    onChange={(event) => updateReturn("note", event.target.value)}
                    placeholder="Add exchange size, fault detail, or anything useful."
                  />
                </label>
                {selectedReturnProduct && selectedReturnItem && (
                  <article className="return-preview">
                    <img
                      src={selectedReturnProduct.image}
                      alt={selectedReturnProduct.alt}
                      style={{ objectPosition: selectedReturnProduct.position }}
                    />
                    <span>
                      <strong>{selectedReturnProduct.name}</strong>
                      <small>{selectedReturnItem.size} / {selectedReturnItem.color}</small>
                    </span>
                  </article>
                )}
                <button className="button button-primary" type="submit">
                  <span>{returnSent ? "Request started" : "Start return"}</span>
                  <ArrowIcon />
                </button>
                <p aria-live="polite">
                  {returnSent
                    ? `Return request queued for ${selectedReturnProduct?.name ?? "this item"}.`
                    : "Returns are available for unworn pieces within 14 days of delivery."}
                </p>
              </>
            ) : (
              <div className="return-empty">
                <p>Complete a preview checkout first, then return here to select an item from the latest order.</p>
                <a className="button button-secondary" href="/shop">
                  <span>Shop SS26</span>
                  <ArrowIcon />
                </a>
              </div>
            )}
          </form>
        </section>
      </main>

      <Footer page="support" />
    </div>
  );
}

function WaitlistPage({ cartCount = 0, waitlist = defaultWaitlist, joinWaitlist = storeWaitlistEntry }) {
  const [draft, setDraft] = useState(waitlist);
  const [isJoined, setIsJoined] = useState(Boolean(waitlist.joinedAt));

  useEffect(() => {
    setDraft({
      ...defaultWaitlist,
      ...waitlist,
      preferences: {
        ...defaultWaitlist.preferences,
        ...(waitlist.preferences ?? {}),
      },
    });
    setIsJoined(Boolean(waitlist.joinedAt));
  }, [waitlist]);

  const updateDraft = (field, value) => {
    setDraft((current) => ({ ...current, [field]: value }));
    setIsJoined(false);
  };

  const updatePreference = (field) => {
    setDraft((current) => ({
      ...current,
      preferences: {
        ...current.preferences,
        [field]: !current.preferences[field],
      },
    }));
    setIsJoined(false);
  };

  const handleJoin = (event) => {
    event.preventDefault();
    if (!draft.email.trim()) return;
    const next = joinWaitlist({ ...draft, source: draft.source || "Waitlist page" });
    setDraft(next ?? { ...draft, joinedAt: new Date().toISOString() });
    setIsJoined(true);
  };

  const accessCode = `UN-${(draft.email || "private")
    .split("@")[0]
    .replace(/[^a-z0-9]/gi, "")
    .slice(0, 6)
    .toUpperCase()
    .padEnd(6, "X")}`;

  return (
    <div className="waitlist-shell" id="top">
      <Header page="waitlist" cartCount={cartCount} />

      <main className="waitlist-page" aria-labelledby="waitlist-heading">
        <nav className="commerce-crumbs waitlist-crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>Waitlist</span>
        </nav>

        <section className="waitlist-hero">
          <div className="waitlist-hero-copy">
            <span>UNUSUAL / SS26 PRIVATE LIST</span>
            <h1 id="waitlist-heading">
              <span>Private Release.</span>
              <span>No Noise.</span>
            </h1>
            <p>
              Enter once for early access, sizing notes, restock signals, and the next UNUSUAL drop before the wider
              shop opens.
            </p>

            <form className={`waitlist-entry ${isJoined ? "is-complete" : ""}`} onSubmit={handleJoin}>
              <label htmlFor="waitlist-email">Enter email</label>
              <div className="waitlist-entry-row">
                <input
                  id="waitlist-email"
                  type="email"
                  name="email"
                  placeholder=">_ Email address"
                  value={draft.email}
                  onChange={(event) => updateDraft("email", event.target.value)}
                  required
                />
                <button type="submit">
                  <span>{isJoined ? "Joined" : "Join waitlist"}</span>
                  <ArrowIcon />
                </button>
              </div>
              <p aria-live="polite">
                {isJoined ? "Signal received. You are on the private list." : "No spam. Drop signals only."}
              </p>
            </form>
          </div>

          <div className="waitlist-visual" aria-label="UNUSUAL private release looks">
            {[
              {
                image: "/assets/unusual-drop-outerwear.png",
                alt: "Model in black UNUSUAL tactical outerwear.",
                label: "01 / Outerwear signal",
                position: "50% 30%",
              },
              {
                image: "/assets/unusual-drop-jersey.png",
                alt: "Model in red and black UNUSUAL match jersey.",
                label: "02 / Match jersey",
                position: "48% 32%",
              },
              {
                image: "/assets/unusual-drop-accessories.png",
                alt: "Model wearing UNUSUAL accessories with red gloves.",
                label: "03 / Accessory lock",
                position: "50% 34%",
              },
            ].map((look, index) => (
              <figure className={`waitlist-image-card ${index === 0 ? "is-main" : ""}`} key={look.label}>
                <img src={look.image} alt={look.alt} style={{ objectPosition: look.position }} />
                <figcaption>{look.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="waitlist-flow" aria-label="Waitlist details">
          <form className="waitlist-profile" onSubmit={handleJoin}>
            <div className="waitlist-panel-head">
              <span>DETAILS / OPTIONAL</span>
              <h2>Shape the signal.</h2>
            </div>

            <div className="waitlist-field-grid">
              <label>
                <span>First name</span>
                <input value={draft.firstName} onChange={(event) => updateDraft("firstName", event.target.value)} />
              </label>
              <label>
                <span>Phone optional</span>
                <input value={draft.phone} onChange={(event) => updateDraft("phone", event.target.value)} />
              </label>
              <label>
                <span>City</span>
                <input value={draft.city} onChange={(event) => updateDraft("city", event.target.value)} />
              </label>
              <label>
                <span>Usual size</span>
                <select value={draft.size} onChange={(event) => updateDraft("size", event.target.value)}>
                  {waitlistSizes.map((size) => (
                    <option key={size}>{size}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="waitlist-interest-list" aria-label="Primary interest">
              {waitlistInterests.map((interest) => (
                <button
                  type="button"
                  className={draft.interest === interest ? "is-active" : ""}
                  key={interest}
                  onClick={() => updateDraft("interest", interest)}
                >
                  {interest}
                </button>
              ))}
            </div>

            <div className="waitlist-toggle-list" aria-label="Waitlist preferences">
              {[
                ["earlyAccess", "Early access", "First release signal before public launch."],
                ["fitNotes", "Fit notes", "Model sizing, measurements, and styling direction."],
                ["sms", "SMS signal", "Optional text reminder for the first release window."],
              ].map(([key, label, copy]) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    checked={Boolean(draft.preferences[key])}
                    onChange={() => updatePreference(key)}
                  />
                  <span>{label}</span>
                  <small>{copy}</small>
                </label>
              ))}
            </div>

            <button className="button button-primary waitlist-submit" type="submit">
              <span>{isJoined ? "Update waitlist" : "Join the private list"}</span>
              <ArrowIcon />
            </button>
          </form>

          <aside className={`waitlist-confirm ${isJoined ? "is-live" : ""}`} aria-label="Waitlist status">
            <span>{isJoined ? "ACCESS CONFIRMED" : "PRIVATE RELEASE"}</span>
            <strong>{isJoined ? accessCode : "SS26"}</strong>
            <p>
              {isJoined
                ? `${draft.interest} is marked as your first signal. Your details are saved in this browser.`
                : "Join the list, then use this page to tune the pieces and reminders you care about."}
            </p>
            <div className="waitlist-mini-rail">
              {releaseProducts.slice(0, 3).map((product) => (
                <a href={`/product/${product.sku}`} key={product.sku}>
                  <img src={product.image} alt={product.alt} style={{ objectPosition: product.position }} />
                  <span>{product.name}</span>
                </a>
              ))}
            </div>
            <div className="waitlist-confirm-actions">
              <a className="button button-secondary" href="/shop">
                <span>Shop current pieces</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="/account">
                <span>View account</span>
                <ArrowIcon />
              </a>
            </div>
          </aside>
        </section>
      </main>

      <Footer page="waitlist" />
    </div>
  );
}

function AccountPage({
  account,
  setAccount,
  cartCount = 0,
  order,
  savedSkus = [],
  toggleSaved = () => {},
  moveSavedToBag = () => {},
}) {
  const [draft, setDraft] = useState(account);
  const [profileSaved, setProfileSaved] = useState(false);
  const [movedSku, setMovedSku] = useState("");
  const savedProducts = savedSkus.map(getProduct).filter(Boolean);
  const accountName = draft.firstName ? `${draft.firstName} ${draft.lastName}`.trim() : "Preview member";

  useEffect(() => {
    setDraft(account);
  }, [account]);

  const updateDraft = (field, value) => {
    setDraft((current) => ({ ...current, [field]: value }));
    setProfileSaved(false);
  };

  const updatePreference = (field) => {
    setDraft((current) => ({
      ...current,
      preferences: {
        ...current.preferences,
        [field]: !current.preferences[field],
      },
    }));
    setProfileSaved(false);
  };

  const saveProfile = (event) => {
    event.preventDefault();
    setAccount(draft);
    setProfileSaved(true);
  };

  const useDemoProfile = () => {
    setDraft({
      ...defaultAccount,
      firstName: "Ari",
      lastName: "Stone",
      email: order?.customer?.email ?? "buyer@example.co.uk",
      phone: "+44 7700 900123",
      address: "24 Redchurch Street",
      apartment: "Studio 4",
      city: "London",
      postcode: "E2 7DP",
      preferences: {
        earlyAccess: true,
        sizingNotes: true,
        restockAlerts: true,
      },
    });
    setProfileSaved(false);
  };

  const movePiece = (sku) => {
    moveSavedToBag(sku);
    setMovedSku(sku);
    window.setTimeout(() => {
      setMovedSku((current) => (current === sku ? "" : current));
    }, 1400);
  };

  return (
    <div className="shop-shell support-shell account-shell" id="top">
      <Header page="account" cartCount={cartCount} />

      <main className="support-page account-page" aria-labelledby="account-heading">
        <nav className="commerce-crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/shop">Shop</a>
          <span>/</span>
          <span>Account</span>
        </nav>

        <section className="support-hero account-hero">
          <div className="support-hero-copy">
            <span>UNUSUAL / ACCOUNT</span>
            <h1 id="account-heading">Private Desk</h1>
            <p>
              A preview account space for saved pieces, drop preferences, delivery details, and recent order movement.
              Nothing is sent to a backend yet.
            </p>
            <div className="support-actions">
              <a className="button button-primary" href="#saved-pieces">
                <span>Saved pieces</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="/track-order">
                <span>Track order</span>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="support-hero-media" aria-label="UNUSUAL account reference">
            <img
              src="/assets/unusual-campaign-02.png"
              alt="Model wearing black UNUSUAL technical layers in motion."
              style={{ objectPosition: "74% 48%" }}
            />
            <span>PRIVATE_ACCOUNT_PREVIEW</span>
          </div>
        </section>

        <section className="account-stats" aria-label="Account summary">
          <article>
            <span>Saved</span>
            <strong>{String(savedProducts.length).padStart(2, "0")}</strong>
            <p>Pieces held for later.</p>
          </article>
          <article>
            <span>Orders</span>
            <strong>{order ? "01" : "00"}</strong>
            <p>Latest preview checkout.</p>
          </article>
          <article>
            <span>Profile</span>
            <strong>{draft.email ? "Live" : "Open"}</strong>
            <p>{draft.email ? accountName : "Save details to begin."}</p>
          </article>
        </section>

        <section className="account-layout" aria-label="Account workspace">
          <form className={`support-panel account-form ${profileSaved ? "is-complete" : ""}`} onSubmit={saveProfile}>
            <div className="support-panel-head">
              <span>01 / PROFILE</span>
              <h2>Preview sign-in</h2>
            </div>

            <div className="account-form-grid">
              <label>
                <span>First name</span>
                <input value={draft.firstName} onChange={(event) => updateDraft("firstName", event.target.value)} />
              </label>
              <label>
                <span>Last name</span>
                <input value={draft.lastName} onChange={(event) => updateDraft("lastName", event.target.value)} />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={draft.email}
                  onChange={(event) => updateDraft("email", event.target.value)}
                  required
                />
              </label>
              <label>
                <span>Phone optional</span>
                <input value={draft.phone} onChange={(event) => updateDraft("phone", event.target.value)} />
              </label>
            </div>

            <div className="account-form-grid">
              <label>
                <span>Address</span>
                <input value={draft.address} onChange={(event) => updateDraft("address", event.target.value)} />
              </label>
              <label>
                <span>Apartment</span>
                <input value={draft.apartment} onChange={(event) => updateDraft("apartment", event.target.value)} />
              </label>
              <label>
                <span>City</span>
                <input value={draft.city} onChange={(event) => updateDraft("city", event.target.value)} />
              </label>
              <label>
                <span>Postcode</span>
                <input
                  value={draft.postcode}
                  onChange={(event) => updateDraft("postcode", event.target.value.toUpperCase())}
                />
              </label>
            </div>

            <div className="preference-list" aria-label="Drop preferences">
              {[
                ["earlyAccess", "Early drop access", "First signal before public release."],
                ["sizingNotes", "Sizing notes", "Fit guidance before checkout."],
                ["restockAlerts", "Restock alerts", "Low-run pieces when stock returns."],
              ].map(([key, label, copy]) => (
                <label className="preference-toggle" key={key}>
                  <input
                    type="checkbox"
                    checked={Boolean(draft.preferences[key])}
                    onChange={() => updatePreference(key)}
                  />
                  <span>{label}</span>
                  <small>{copy}</small>
                </label>
              ))}
            </div>

            <div className="tracking-form-actions">
              <button className="button button-primary" type="submit">
                <span>{profileSaved ? "Profile saved" : "Save account"}</span>
                <ArrowIcon />
              </button>
              <button className="button button-secondary" type="button" onClick={useDemoProfile}>
                <span>Use demo details</span>
                <ArrowIcon />
              </button>
            </div>
            <p aria-live="polite">
              {profileSaved ? "Account details saved in this browser." : "Preview account only. No login email is sent."}
            </p>
          </form>

          <div className="account-side">
            <section className="support-panel account-orders-panel" aria-labelledby="account-orders-heading">
              <div className="support-panel-head">
                <span>02 / ORDERS</span>
                <h2 id="account-orders-heading">Recent order</h2>
              </div>
              {order ? (
                <>
                  <div className="tracking-order-meta">
                    <div>
                      <span>Order</span>
                      <strong>{order.id}</strong>
                    </div>
                    <div>
                      <span>Status</span>
                      <strong>{orderStatusSteps[getOrderStatusIndex(order)].title}</strong>
                    </div>
                    <div>
                      <span>Total</span>
                      <strong>{formatPrice(order.totals.total)}</strong>
                    </div>
                  </div>
                  <TrackingSummary order={order} />
                  <div className="account-action-row">
                    <a className="button button-primary" href={`/track-order?order=${order.id}`}>
                      <span>Track order</span>
                      <ArrowIcon />
                    </a>
                    <a className="button button-secondary" href="/help#return-request">
                      <span>Start return</span>
                      <ArrowIcon />
                    </a>
                  </div>
                </>
              ) : (
                <div className="account-empty-panel">
                  <p>Complete a preview checkout and the order will appear here with tracking and return actions.</p>
                  <a className="button button-secondary" href="/shop">
                    <span>Shop SS26</span>
                    <ArrowIcon />
                  </a>
                </div>
              )}
            </section>

            <section className="support-panel account-saved-panel" id="saved-pieces" aria-labelledby="saved-heading">
              <div className="support-panel-head">
                <span>03 / SAVED</span>
                <h2 id="saved-heading">Saved pieces</h2>
              </div>
              {savedProducts.length > 0 ? (
                <div className="account-saved-grid">
                  {savedProducts.map((product) => (
                    <article key={product.sku}>
                      <a href={`/product/${product.sku}`}>
                        <img src={product.image} alt={product.alt} style={{ objectPosition: product.position }} />
                      </a>
                      <div>
                        <span>{product.tag}</span>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                      </div>
                      <div className="account-saved-actions">
                        <button className="button button-primary" type="button" onClick={() => movePiece(product.sku)}>
                          <span>{movedSku === product.sku ? "Moved" : "Move to bag"}</span>
                          <ArrowIcon />
                        </button>
                        <button className="button button-secondary" type="button" onClick={() => toggleSaved(product.sku)}>
                          <span>Remove</span>
                          <ArrowIcon />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="account-empty-panel">
                  <p>Save pieces from the shop or product page, then move them into the bag when the fit is right.</p>
                  <a className="button button-secondary" href="/shop">
                    <span>Browse pieces</span>
                    <ArrowIcon />
                  </a>
                </div>
              )}
            </section>
          </div>
        </section>
      </main>

      <Footer page="account" />
    </div>
  );
}

function Footer({ page = "home" }) {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const handleFooterSignup = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    storeWaitlistEntry({ email, source: `Footer ${page}` });
    setIsJoined(true);
  };

  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <div className="footer-signal" aria-hidden="true">
        <span>PRIVATE RELEASE / NO NOISE / JOIN THE WAITLIST / </span>
        <span>PRIVATE RELEASE / NO NOISE / JOIN THE WAITLIST / </span>
      </div>

      <div className="footer-frame">
        <div className="footer-topline">
          <span>UNUSUAL / SS26</span>
          <a href="#top">Back to top</a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand-block">
            <h2 id="footer-heading">Unusual</h2>
            <p>Private drops for people who refuse the default setting.</p>
          </div>

          <form className={`footer-signup ${isJoined ? "is-complete" : ""}`} onSubmit={handleFooterSignup}>
            <label htmlFor="footer-email">Get the next signal first.</label>
            <div className="footer-signup-row">
              <input
                id="footer-email"
                type="email"
                name="footer-email"
                placeholder=">_ Email address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setIsJoined(false);
                }}
                required
              />
              <button type="submit">
                <span>{isJoined ? "Joined" : "Join"}</span>
                <ArrowIcon />
              </button>
            </div>
            <p aria-live="polite">{isJoined ? "Signal received. You're on the list." : "No spam. Drops only."}</p>
          </form>

          <nav className="footer-links" aria-label="Footer navigation">
            <div>
              <h3>Shop</h3>
              <a href="/shop?category=outerwear">Outerwear</a>
              <a href="/shop?category=jerseys">Jerseys</a>
              <a href="/shop?category=accessories">Accessories</a>
            </div>
            <div>
              <h3>Brand</h3>
              <a href="/brand">Brand Story</a>
              <a href="/lookbook">Lookbook</a>
              <a href="/waitlist">Waitlist</a>
            </div>
            <div>
              <h3>Support</h3>
              <a href="/account">Account</a>
              <a href="/track-order">Track Order</a>
              <a href="/size-guide">Size Guide</a>
              <a href="/shipping-returns">Shipping & Returns</a>
              <a href="/help">Help</a>
            </div>
            <div>
              <h3>Social</h3>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                TikTok
              </a>
              <a href="mailto:studio@unusual.local">Email</a>
            </div>
          </nav>
        </div>

        <div className="footer-gallery" aria-label="Featured UNUSUAL pieces">
          {releaseProducts.slice(0, 3).map((product, index) => (
            <a
              className="footer-look"
              href={`/shop?category=${slugify(product.tag)}`}
              key={product.sku}
              style={{ "--footer-look-index": index }}
            >
              <img src={product.image} alt={product.alt} style={{ objectPosition: product.position }} />
              <span>
                <strong>{product.number}</strong>
                {product.name}
              </span>
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <span>(C) 2026 UNUSUAL</span>
          <span>Made for the unnamed uniform.</span>
          <span>SS26_PRIVATE_001</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [cartItems, setCartItems] = useState(() => readStoredJson(CART_STORAGE_KEY, []));
  const [lastOrder, setLastOrder] = useState(() => readStoredJson(ORDER_STORAGE_KEY, null));
  const [savedSkus, setSavedSkus] = useState(readStoredSavedSkus);
  const [account, setAccount] = useState(readStoredAccount);
  const [waitlist, setWaitlist] = useState(readStoredWaitlist);
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const page = pathname === "/shop" ? "shop" : "home";
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (lastOrder) {
      window.localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(lastOrder));
    }
  }, [lastOrder]);

  useEffect(() => {
    window.localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(savedSkus));
  }, [savedSkus]);

  useEffect(() => {
    window.localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(account));
  }, [account]);

  useEffect(() => {
    window.localStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(waitlist));
  }, [waitlist]);

  const addToCart = ({ sku, size, color, quantity = 1 }) => {
    setCartItems((current) => {
      const key = cartLineKey({ sku, size, color });
      const existing = current.find((item) => item.key === key);
      let nextCart;

      if (existing) {
        nextCart = current.map((item) =>
          item.key === key ? { ...item, quantity: Math.min(9, item.quantity + quantity) } : item,
        );
      } else {
        nextCart = [...current, { key, sku, size, color, quantity }];
      }

      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextCart));
      return nextCart;
    });
  };

  const toggleSaved = (sku) => {
    setSavedSkus((current) =>
      current.includes(sku) ? current.filter((savedSku) => savedSku !== sku) : [...current, sku],
    );
  };

  const moveSavedToBag = (sku) => {
    const product = getProduct(sku);
    if (!product) return;
    addToCart({ sku, size: product.sizes[0], color: product.colors[0].name, quantity: 1 });
    setSavedSkus((current) => current.filter((savedSku) => savedSku !== sku));
  };

  const joinWaitlist = (entry) => {
    const next = {
      ...defaultWaitlist,
      ...waitlist,
      ...entry,
      email: entry.email?.trim() || waitlist.email,
      joinedAt: new Date().toISOString(),
      preferences: {
        ...defaultWaitlist.preferences,
        ...waitlist.preferences,
        ...(entry.preferences ?? {}),
      },
    };

    setWaitlist(next);
    setAccount((current) => ({
      ...current,
      firstName: current.firstName || next.firstName,
      email: current.email || next.email,
      phone: current.phone || next.phone,
      city: current.city || next.city,
      preferences: {
        ...current.preferences,
        earlyAccess: true,
        sizingNotes: current.preferences.sizingNotes || next.preferences.fitNotes,
      },
    }));
    return next;
  };

  const updateCartQuantity = (key, quantity) => {
    setCartItems((current) => {
      const nextCart =
        quantity <= 0
          ? current.filter((item) => item.key !== key)
          : current.map((item) => (item.key === key ? { ...item, quantity: Math.min(9, quantity) } : item));
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextCart));
      return nextCart;
    });
  };

  const removeCartItem = (key) => {
    setCartItems((current) => {
      const nextCart = current.filter((item) => item.key !== key);
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextCart));
      return nextCart;
    });
  };

  const placeOrder = ({ form, shipping, promoCode, totals }) => {
    const order = {
      id: `UN-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      customer: {
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
      },
      shipping,
      promoCode,
      totals,
      items: cartItems,
    };

    setLastOrder(order);
    setCartItems([]);
    window.localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([]));
    return order;
  };

  if (pathname.startsWith("/product/")) {
    const sku = decodeURIComponent(pathname.replace("/product/", ""));
    return (
      <ProductPage
        sku={sku}
        cartCount={cartCount}
        addToCart={addToCart}
        savedSkus={savedSkus}
        toggleSaved={toggleSaved}
      />
    );
  }

  if (pathname === "/bag") {
    return (
      <CartPage
        cartItems={cartItems}
        cartCount={cartCount}
        updateCartQuantity={updateCartQuantity}
        removeCartItem={removeCartItem}
      />
    );
  }

  if (pathname === "/checkout") {
    return (
      <CheckoutPage
        cartItems={cartItems}
        cartCount={cartCount}
        updateCartQuantity={updateCartQuantity}
        removeCartItem={removeCartItem}
        placeOrder={placeOrder}
      />
    );
  }

  if (pathname === "/order-confirmed") {
    return <OrderConfirmationPage cartCount={cartCount} order={lastOrder} />;
  }

  if (pathname === "/account") {
    return (
      <AccountPage
        account={account}
        setAccount={setAccount}
        cartCount={cartCount}
        order={lastOrder}
        savedSkus={savedSkus}
        toggleSaved={toggleSaved}
        moveSavedToBag={moveSavedToBag}
      />
    );
  }

  if (pathname === "/waitlist") {
    return <WaitlistPage cartCount={cartCount} waitlist={waitlist} joinWaitlist={joinWaitlist} />;
  }

  if (pathname === "/track-order") {
    return <OrderTrackingPage cartCount={cartCount} order={lastOrder} />;
  }

  if (pathname === "/help") {
    return <HelpPage cartCount={cartCount} order={lastOrder} />;
  }

  if (pathname === "/size-guide") {
    return <SizeGuidePage cartCount={cartCount} />;
  }

  if (pathname === "/shipping-returns") {
    return <ShippingReturnsPage cartCount={cartCount} />;
  }

  if (pathname === "/lookbook") {
    return <LookbookPage cartCount={cartCount} joinWaitlist={joinWaitlist} />;
  }

  if (pathname === "/brand") {
    return <BrandPage cartCount={cartCount} joinWaitlist={joinWaitlist} />;
  }

  if (page === "shop") {
    return <ShopPage cartCount={cartCount} addToCart={addToCart} savedSkus={savedSkus} toggleSaved={toggleSaved} />;
  }

  return (
    <>
      <Hero cartCount={cartCount} />
      <DropIndex />
      <ReleaseRack addToCart={addToCart} cartCount={cartCount} />
      <UnusualCode joinWaitlist={joinWaitlist} />
      <SeenInMotion />
      <Footer />
    </>
  );
}
