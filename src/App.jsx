import React from "react";

const categories = [
  {
    title: "Outerwear",
    copy: "Oversized coats cut for movement.",
    position: "72% 44%",
  },
  {
    title: "Jersey",
    copy: "Redline layers with graphic tension.",
    position: "78% 63%",
  },
  {
    title: "Accessories",
    copy: "Hard details for soft rebellion.",
    position: "92% 52%",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 16" focusable="false">
      <path d="M1 8h24" />
      <path d="m19 1 7 7-7 7" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <div className="brand-lockup">
        <a className="brand" href="#top" aria-label="UNUSUAL home">
          <span className="brand-symbol" aria-hidden="true" />
          <span className="brand-name">UNUSUAL</span>
        </a>
        <span className="drop-code">SS26</span>
      </div>
      <nav className="nav-links" aria-label="Main menu">
        <a href="#shop">Shop</a>
        <a href="#archive">Archive</a>
        <a href="#journal">Journal</a>
      </nav>
      <div className="header-actions">
        <a className="lookbook-link" href="#archive">
          Lookbook
        </a>
        <a className="bag-link" href="#bag" aria-label="Open shopping bag">
          <span>Bag (0)</span>
          <span className="bag-icon" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

function CategoryRail() {
  return (
    <section className="category-rail" aria-label="Shop categories">
      {categories.map((category) => (
        <a className="category-card" href="#shop" key={category.title}>
          <img
            src="/assets/unusual-campaign.png"
            alt=""
            aria-hidden="true"
            style={{ objectPosition: category.position }}
          />
          <span className="category-shade" aria-hidden="true" />
          <span className="category-content">
            <span>
              <strong>{category.title}</strong>
              <small>{category.copy}</small>
            </span>
            <ArrowIcon />
          </span>
        </a>
      ))}
    </section>
  );
}

function Hero() {
  return (
    <main id="top" className="hero-shell">
      <Header />

      <section className="hero" aria-labelledby="hero-heading">
        <div className="wordmark" aria-hidden="true">
          UNUSUAL
        </div>

        <figure className="campaign-media">
          <img
            src="/assets/unusual-campaign.png"
            alt="Model wearing sculptural black outerwear with a red layer against a concrete wall."
          />
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

        <div className="hero-copy">
          <p>SS26 Drop</p>
          <h1 id="hero-heading">New Shapes For Everyday Defiance</h1>
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

      <CategoryRail />
    </main>
  );
}

export default function App() {
  return <Hero />;
}
