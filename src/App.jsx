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
    price: "$268",
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
    price: "$98",
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
    price: "$148",
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
    price: "$88",
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
    price: "$68",
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
    price: "$158",
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

const shopCategories = ["All", "Outerwear", "Jerseys", "Logo Knit", "Trousers", "Accessories"];

const productDetails = {
  "signal-coat": {
    fit: "Oversized shell fit",
    fabric: "Water-repellent nylon / cotton lining",
    status: "Private release",
  },
  "redline-jersey": {
    fit: "Relaxed match fit",
    fabric: "Breathable mesh / paneled poly",
    status: "New signal",
  },
  "name-hoodie": {
    fit: "Dropped shoulder fit",
    fabric: "Washed heavyweight cotton",
    status: "Low run",
  },
  "utility-bag": {
    fit: "Adjustable crossbody",
    fabric: "Matte nylon / metal hardware",
    status: "Carry system",
  },
  "red-gloves": {
    fit: "Close hand fit",
    fabric: "Gloss leather finish",
    status: "Accessory drop",
  },
  "cargo-trouser": {
    fit: "Wide stacked fit",
    fabric: "Cotton twill / reflective tape",
    status: "Core piece",
  },
};

const slugify = (value) => value.toLowerCase().replace(/\s+/g, "-");

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 16" focusable="false">
      <path d="M1 8h24" />
      <path d="m19 1 7 7-7 7" />
    </svg>
  );
}

function Header({ page = "home" }) {
  const homeHref = page === "home" ? "#top" : "/";
  const lookbookHref = page === "home" ? "#archive" : "/#archive";
  const waitlistHref = page === "home" ? "#journal" : "/#journal";

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
        <a href="/shop" aria-current={page === "shop" ? "page" : undefined}>
          Shop
        </a>
        <a href={lookbookHref}>Lookbook</a>
        <a href={waitlistHref}>Waitlist</a>
      </nav>
      <div className="header-actions">
        <a className="lookbook-link" href={waitlistHref}>
          Join Waitlist
        </a>
        <a className="bag-link" href="#bag" aria-label="Open shopping bag">
          <span>Bag (0)</span>
          <span className="bag-icon" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

function ShopPage() {
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
  const selectedProduct = releaseProducts.find((product) => product.sku === selectedSku) ?? releaseProducts[0];
  const selectedDetails = productDetails[selectedProduct.sku];

  const visibleProducts = releaseProducts
    .filter((product) => activeCategory === "All" || product.tag === activeCategory)
    .sort((left, right) => {
      const leftPrice = Number(left.price.replace("$", ""));
      const rightPrice = Number(right.price.replace("$", ""));
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

  return (
    <div className="shop-shell" id="top">
      <Header page="shop" />

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
              <a className="button shop-detail-link" href="#shop-products">
                <span>Browse pieces</span>
                <ArrowIcon />
              </a>
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

function ReleaseRack() {
  const [selectedSizes, setSelectedSizes] = useState(() =>
    Object.fromEntries(releaseProducts.map((product) => [product.sku, product.sizes[1] ?? product.sizes[0]])),
  );
  const [selectedColors, setSelectedColors] = useState(() =>
    Object.fromEntries(releaseProducts.map((product) => [product.sku, product.colors[0].name])),
  );
  const [bagCount, setBagCount] = useState(0);
  const [addedSku, setAddedSku] = useState("");

  const selectSize = (sku, size) => {
    setSelectedSizes((current) => ({ ...current, [sku]: size }));
  };

  const selectColor = (sku, color) => {
    setSelectedColors((current) => ({ ...current, [sku]: color }));
  };

  const addToBag = (sku) => {
    setBagCount((count) => count + 1);
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
            <strong>{String(bagCount).padStart(2, "0")} in bag</strong>
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

          <a className="button motion-cta" href="#shop">
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

function UnusualCode() {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
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
                    <a className="button button-primary" href="#bag">
                      <span>Shop this look</span>
                      <ArrowIcon />
                    </a>
                    <a className="button button-secondary" href="#archive">
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

function Hero() {
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
      <Header />

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
            <a className="button button-secondary" href="#archive">
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

function Footer({ page = "home" }) {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const homeAnchor = (anchor) => (page === "home" ? `#${anchor}` : `/#${anchor}`);

  const handleFooterSignup = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
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
              <a href={homeAnchor("archive")}>Lookbook</a>
              <a href={homeAnchor("journal")}>Waitlist</a>
              <a href={homeAnchor("top")}>SS26 Campaign</a>
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
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const page = pathname === "/shop" ? "shop" : "home";

  if (page === "shop") {
    return <ShopPage />;
  }

  return (
    <>
      <Hero />
      <DropIndex />
      <ReleaseRack />
      <UnusualCode />
      <SeenInMotion />
      <Footer />
    </>
  );
}
