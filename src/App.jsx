import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    label: "SS26 Drop",
    title: "New Shapes For Everyday Defiance",
    copy: "Outerwear made for city heat, late exits, and daylight defiance.",
    category: "Outerwear",
    categoryCopy: "Oversized coats cut for movement.",
    image: "/assets/unusual-campaign.png",
    alt: "Model wearing sculptural black outerwear with a red layer against a concrete wall.",
    position: "72% 44%",
  },
  {
    label: "Motion Study",
    title: "Cut Against The Ordinary",
    copy: "Technical layers in motion, cut loose and built to interrupt routine.",
    category: "Jersey",
    categoryCopy: "Redline layers with graphic tension.",
    image: "/assets/unusual-campaign-02.png",
    alt: "Model walking through a concrete stairwell in black technical layers with a red underlayer.",
    position: "74% 48%",
  },
  {
    label: "Red Signal",
    title: "Uniforms For The Unnamed",
    copy: "Volume, shadow, and red signal details for silhouettes that refuse quiet.",
    category: "Accessories",
    categoryCopy: "Hard details for soft rebellion.",
    image: "/assets/unusual-campaign-03.png",
    alt: "Model in black sculptural clothing and red gloves beside a steel panel with a red light shape.",
    position: "75% 50%",
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
            src={slide.image}
            alt=""
            aria-hidden="true"
            style={{ objectPosition: slide.position }}
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

export default function App() {
  return <Hero />;
}
