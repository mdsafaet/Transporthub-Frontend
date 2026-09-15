import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  Search,
  X,
} from "lucide-react";

const articles = [
  {
    id: "planning-freight",
    category: "Shipping Guides",
    title: "A better shipment starts with a clearer plan.",
    excerpt:
      "The details worth preparing before you request a freight quote.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=85",
    alt: "Container ship carrying freight",
    readTime: "2 min read",
    content: [
      {
        heading: "Start with the cargo",
        text:
          "Prepare a clear description of what you are shipping. Include the number of packages, their dimensions, total weight, and how the goods are packed. These details help a logistics provider understand your handling and space requirements.",
      },
      {
        heading: "Describe the full journey",
        text:
          "Share the collection and delivery locations, including any access restrictions. A commercial warehouse, residential address, and port terminal can each require different arrangements.",
      },
      {
        heading: "Make timing clear",
        text:
          "Explain when the cargo will be ready and when you would like it to arrive. Distinguishing a preferred date from a firm deadline makes it easier to discuss suitable options.",
      },
      {
        heading: "Compare the scope",
        text:
          "When reviewing quotes, check which services are included. Ask about collection, handling, delivery, and any items that need a separate estimate so you can compare equivalent services.",
      },
    ],
  },
  {
    id: "ocean-air-road",
    category: "Freight Solutions",
    title: "Ocean, air, or road: where should you start?",
    excerpt:
      "A practical way to discuss transport options around your cargo and priorities.",
    image:
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=85",
    alt: "Aircraft on an airport apron",
    readTime: "2 min read",
    content: [
      {
        heading: "Begin with your priorities",
        text:
          "The right transport discussion starts with your delivery deadline, budget, shipment size, and destination. Sharing these priorities helps your provider narrow down the available options.",
      },
      {
        heading: "Consider the complete route",
        text:
          "A shipment may use more than one type of transport. Collection, transfers, and final delivery all contribute to the overall journey, so ask about the complete plan rather than a single leg.",
      },
      {
        heading: "Ask about trade-offs",
        text:
          "Request a comparison of suitable options, including the estimated schedule, included services, and any assumptions. The best choice depends on the needs of the individual shipment.",
      },
    ],
  },
  {
    id: "warehouse-handover",
    category: "Warehousing",
    title: "Make your next warehouse handover simpler.",
    excerpt:
      "Clear labels, shared information, and a little preparation can improve coordination.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=85",
    alt: "Organized warehouse storage racks",
    readTime: "2 min read",
    content: [
      {
        heading: "Agree on the receiving details",
        text:
          "Confirm the receiving location, contact person, and delivery window before dispatch. Share the expected number of packages and any handling requirements with the receiving team.",
      },
      {
        heading: "Keep identification consistent",
        text:
          "Use clear references across your package labels and shipment information. Consistent identification makes it easier for teams to match arriving goods to the expected delivery.",
      },
      {
        heading: "Plan the next step",
        text:
          "Explain whether goods will remain in storage, be prepared for dispatch, or move directly onward. This helps the warehouse team understand the intended flow of the shipment.",
      },
    ],
  },
  {
    id: "shipment-communication",
    category: "Supply Chain",
    title: "Better communication at every handoff.",
    excerpt:
      "Build a shared understanding of responsibilities, milestones, and next steps.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    alt: "Warehouse used for supply chain operations",
    readTime: "2 min read",
    content: [
      {
        heading: "Choose a clear point of contact",
        text:
          "Identify who will coordinate shipment questions and who can make decisions when plans change. Share contact details with the people involved in collection and delivery.",
      },
      {
        heading: "Define useful milestones",
        text:
          "Agree on which updates matter to your team, such as collection, departure, arrival, and delivery. A shared understanding helps keep communication focused.",
      },
      {
        heading: "Keep changes visible",
        text:
          "When shipment details change, share the revised information with the relevant teams. Keeping references, dates, and instructions aligned helps avoid confusion.",
      },
    ],
  },
];

const categories = [
  "All",
  "Shipping Guides",
  "Freight Solutions",
  "Warehousing",
  "Supply Chain",
];

function ArticleDialog({ article, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!article) return;

    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    dialog.showModal();
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [article]);

  return (
    <dialog
      ref={dialogRef}
      className="ins-article-dialog"
      aria-labelledby="ins-article-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;

        const bounds = event.currentTarget.getBoundingClientRect();
        const outside =
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom;

        if (outside) onClose();
      }}
    >
      {article && (
        <>
          <div className="ins-dialog-toolbar">
            <span>{article.category}</span>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close article"
              className="ins-close"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <img
            src={article.image}
            alt={article.alt}
            className="ins-dialog-image"
          />

          <article className="ins-dialog-body">
            <p className="ins-meta">
              <Clock3 size={14} aria-hidden="true" />
              {article.readTime}
            </p>

            <h2
              id="ins-article-title"
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {article.title}
            </h2>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              {article.excerpt}
            </p>

            {article.content.map(({ heading, text }) => (
              <section key={heading} className="ins-article-section">
                <h3 className="text-xl font-semibold tracking-tight">
                  {heading}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {text}
                </p>
              </section>
            ))}

            <a href="/request-quote" className="ins-primary-link mt-8">
              Discuss your shipment
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>
        </>
      )}
    </dialog>
  );
}

export default function Insights() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featured = articles[0];
  const query = search.trim().toLowerCase();

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      category === "All" || article.category === category;

    const matchesSearch =
      !query ||
      `${article.title} ${article.excerpt} ${article.category}`
        .toLowerCase()
        .includes(query);

    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setCategory("All");
    setSearch("");
  };

  return (
    <main className="ins-page">
      <header className="ins-header">
        <div className="ins-container ins-navigation">
          <a href="/" className="ins-logo" aria-label="TransportNet home">
            Transport<span>Net</span>
          </a>

          <a href="/" className="ins-back">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </a>
        </div>
      </header>

      <div className="ins-container">
        {/* Introduction */}
        <section className="ins-intro" aria-labelledby="ins-heading">
          <p className="ins-eyebrow">
            <span aria-hidden="true" />
            Insights & resources
          </p>

          <div className="ins-intro-row">
            <h1
              id="ins-heading"
              className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
            >
              Fresh thinking.
              <br />
              <span className="text-[#1684e8]">Smarter shipping.</span>
            </h1>

            <p className="ins-intro-description text-sm leading-6 text-slate-500">
              Practical guides and useful perspectives to help you
              understand logistics and plan your next move.
            </p>
          </div>
        </section>

        {/* Featured article */}
        <section aria-labelledby="ins-featured-title">
          <div className="ins-featured">
            <div className="ins-featured-image">
              <img
                src={featured.image}
                alt={featured.alt}
                width="1400"
                height="900"
              />

              <span className="ins-featured-badge">
                <BookOpen size={15} aria-hidden="true" />
                Editor’s pick
              </span>
            </div>

            <div className="ins-featured-content">
              <p className="ins-eyebrow">{featured.category}</p>

              <h2
                id="ins-featured-title"
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                {featured.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                {featured.excerpt}
              </p>

              <p className="ins-meta mt-5">
                <Clock3 size={14} aria-hidden="true" />
                {featured.readTime}
              </p>

              <button
                type="button"
                className="ins-read-button"
                aria-haspopup="dialog"
                onClick={() => setSelectedArticle(featured)}
              >
                Read the guide
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="ins-library" aria-labelledby="ins-library-title">
          <div className="ins-library-heading">
            <h2
              id="ins-library-title"
              className="text-2xl font-semibold tracking-tight"
            >
              Explore our insights
            </h2>

            <div className="ins-search">
              <Search size={18} aria-hidden="true" />
              <label htmlFor="ins-search" className="ins-sr-only">
                Search articles
              </label>
              <input
                id="ins-search"
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>

          <div
            className="ins-filters"
            role="group"
            aria-label="Filter articles by category"
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                className={`ins-filter ${
                  category === item ? "is-active" : ""
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="ins-result-count" role="status">
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "article" : "articles"}
          </p>

          {filteredArticles.length > 0 ? (
            <div className="ins-grid">
              {filteredArticles.map((article) => (
                <article key={article.id} className="ins-card">
                  <div className="ins-card-image">
                    <img
                      src={article.image}
                      alt={article.alt}
                      loading="lazy"
                      width="1000"
                      height="650"
                    />
                    <span>{article.category}</span>
                  </div>

                  <div className="ins-card-content">
                    <p className="ins-meta">
                      <Clock3 size={14} aria-hidden="true" />
                      {article.readTime}
                    </p>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {article.excerpt}
                    </p>

                    <button
                      type="button"
                      className="ins-card-link"
                      aria-haspopup="dialog"
                      aria-label={`Read article: ${article.title}`}
                      onClick={() => setSelectedArticle(article)}
                    >
                      Read article
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="ins-empty">
              <Search size={28} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">
                No articles found
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Try another keyword or choose a different category.
              </p>
              <button
                type="button"
                className="ins-read-button"
                onClick={resetFilters}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* Contact strip */}
        <section className="ins-contact" aria-labelledby="ins-contact-title">
          <div>
            <h2
              id="ins-contact-title"
              className="text-2xl font-semibold tracking-tight"
            >
              Turn your next idea into a shipment.
            </h2>
            <p className="mt-3 text-sm leading-6">
              Share your requirements and let’s plan the journey.
            </p>
          </div>

          <a href="/request-quote" className="ins-primary-link">
            Request a quote
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </section>
      </div>

      <footer className="ins-footer">
        <div className="ins-container">
          <p>
            © {new Date().getFullYear()} TransportNet. All rights reserved.
          </p>
          <a href="/#contact">Contact our team</a>
        </div>
      </footer>

      <ArticleDialog
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </main>
  );
}