import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  Search,
  X,
} from "lucide-react";

const articles = [
  {
    id: "container-shipping-planning",
    category: "Shipping Guides",
    title: "A better container shipment starts with a clear plan.",
    excerpt:
      "Key information to prepare before arranging a port-to-port container shipment.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=85",
    alt: "Container vessel transporting containers",
    readTime: "3 min read",
    content: [
      {
        heading: "Prepare your cargo details",
        text:
          "Before requesting a shipping arrangement, prepare information about your cargo, including container type, cargo description, weight, and any special handling requirements.",
      },
      {
        heading: "Define origin and destination ports",
        text:
          "Clear origin and destination port details help determine suitable sailing options, estimated departure times, and expected arrival windows.",
      },
      {
        heading: "Keep shipping documents ready",
        text:
          "Documents such as booking references, commercial invoices, packing lists, and bills of lading help maintain smooth coordination throughout the shipment journey.",
      },
    ],
  },
  {
    id: "scheduled-sailings",
    category: "Routes & Schedules",
    title: "Understanding scheduled sailings and transit planning.",
    excerpt:
      "How shipping schedules help businesses plan international container movements.",
    image:
      "https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&w=1200&q=85",
    alt: "Cargo containers at a port terminal",
    readTime: "4 min read",
    content: [
      {
        heading: "Review sailing availability",
        text:
          "Liner shipping operates with scheduled services. Reviewing available sailings helps align cargo readiness with planned vessel departures.",
      },
      {
        heading: "Consider transit timelines",
        text:
          "Estimated departure and arrival dates provide visibility for inventory planning, customer commitments, and inland transportation arrangements.",
      },
      {
        heading: "Plan beyond the port",
        text:
          "A complete shipment plan should consider port handling, customs processes, and inland transportation after vessel arrival.",
      },
    ],
  },
  {
    id: "container-types",
    category: "Container Solutions",
    title: "Choosing the right container for your cargo.",
    excerpt:
      "Understanding dry containers, reefer containers, and special cargo requirements.",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&q=85",
    alt: "Rows of shipping containers at terminal",
    readTime: "3 min read",
    content: [
      {
        heading: "Dry containers",
        text:
          "Standard dry containers are commonly used for general cargo that does not require temperature control or specialized equipment.",
      },
      {
        heading: "Reefer containers",
        text:
          "Reefer containers provide temperature-controlled transportation for cargo that requires specific environmental conditions.",
      },
      {
        heading: "Special cargo planning",
        text:
          "Oversized, sensitive, or regulated cargo may require additional planning, documentation, and handling arrangements.",
      },
    ],
  },
  {
    id: "shipment-visibility",
    category: "Container Tracking",
    title: "Improving shipment visibility from booking to arrival.",
    excerpt:
      "Why accurate references and updates matter throughout the container journey.",
    image:
      "https://images.unsplash.com/photo-1586528116493-da8b5a8d9f8b?auto=format&fit=crop&w=1200&q=85",
    alt: "Container logistics operations",
    readTime: "3 min read",
    content: [
      {
        heading: "Use accurate shipment references",
        text:
          "Container numbers, booking references, and bills of lading provide important references for tracking and communication.",
      },
      {
        heading: "Monitor important milestones",
        text:
          "Key milestones may include booking confirmation, vessel departure, port arrival, and inland delivery progress.",
      },
      {
        heading: "Coordinate with your team",
        text:
          "Keeping shipment information updated helps different teams coordinate decisions and respond quickly when changes occur.",
      },
    ],
  },
];

const categories = [
  "All",
  "Shipping Guides",
  "Routes & Schedules",
  "Container Solutions",
  "Container Tracking",
];

function ArticleDialog({ article, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!article) return;

    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;

    dialog.showModal();
    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    return () => {
      dialog.close();
      document.body.style.overflow = "";

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [article]);

  return (
    <dialog
      ref={dialogRef}
      className="w-full max-w-4xl rounded-3xl p-0 shadow-2xl backdrop:bg-black/60"
      aria-labelledby="article-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      {article && (
        <div className="max-h-[90vh] overflow-y-auto bg-white">
          <div className="flex items-center justify-between border-b p-5">
            <span className="text-sm font-medium text-[#1684e8]">
              {article.category}
            </span>

            <button
              ref={closeRef}
              onClick={onClose}
              className="rounded-full p-2 text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1684e8]"
              aria-label="Close article"
            >
              <X size={20} />
            </button>
          </div>

          <img
            src={article.image}
            alt={article.alt}
            className="h-72 w-full object-cover"
          />

          <article className="p-6 sm:p-10">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock3 size={14} />
              {article.readTime}
            </div>

            <h2
              id="article-title"
              className="mt-5 text-3xl font-semibold tracking-tight text-[#071525] sm:text-4xl"
            >
              {article.title}
            </h2>

            <p className="mt-4 text-slate-500">
              {article.excerpt}
            </p>

            <div className="mt-8 space-y-8">
              {article.content.map((section) => (
                <section key={section.heading}>
                  <h3 className="text-xl font-semibold text-[#071525]">
                    {section.heading}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {section.text}
                  </p>
                </section>
              ))}
            </div>

            <Link
              to="/request-quote"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1684e8] px-5 py-3 text-sm font-medium text-white hover:bg-[#126ec4] focus:outline-none focus:ring-2 focus:ring-[#1684e8]"
            >
              Discuss your shipment
              <ArrowUpRight size={18} />
            </Link>
          </article>
        </div>
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

  const clearFilters = () => {
    setCategory("All");
    setSearch("");
  };

  return (
    <main className="bg-[#f6f9fc] text-[#071525]">
      {/* Hero */}
      <section className="mx-auto max-w-[1380px] px-5 pb-16 pt-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-2 text-sm font-medium text-[#1684e8]">
            <span className="h-2 w-2 rounded-full bg-[#1684e8]" />
            Insights & Shipping Resources
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Fresh thinking.
            <br />
            <span className="text-[#1684e8]">
              Smarter container shipping.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Explore practical guides about scheduled sailings, container
            transportation, shipping documents, tracking visibility, and
            international logistics planning.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1380px] space-y-16 px-5 pb-20 sm:px-8 lg:px-10">

        {/* Featured */}
        <section>
          <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2">

            <div className="relative h-72 lg:h-auto">
              <img
                src={featured.image}
                alt={featured.alt}
                className="h-full w-full object-cover"
              />

              <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#071525]">
                <BookOpen size={14} />
                Featured guide
              </span>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">

              <p className="text-sm font-medium text-[#1684e8]">
                {featured.category}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                {featured.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-500">
                {featured.excerpt}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                <Clock3 size={14} />
                {featured.readTime}
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(featured)}
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#1684e8] px-5 py-3 text-sm font-medium text-white hover:bg-[#126ec4] focus:outline-none focus:ring-2 focus:ring-[#1684e8]"
              >
                Read guide
                <ArrowUpRight size={18} />
              </button>

            </div>

          </div>
        </section>


        {/* Library */}
        <section>

          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

            <h2 className="text-2xl font-semibold">
              Explore our insights
            </h2>


            <div className="relative w-full lg:w-96">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <label htmlFor="article-search" className="sr-only">
                Search articles
              </label>

              <input
                id="article-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search shipping articles..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-[#1684e8] focus:ring-2 focus:ring-[#1684e8]/20"
              />

            </div>

          </div>


          {/* Filters */}
          <div className="mt-6 flex flex-wrap gap-3">

            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  category === item
                    ? "bg-[#1684e8] text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item}
              </button>
            ))}

          </div>


          <p className="mt-6 text-sm text-slate-500">
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1
              ? "article"
              : "articles"}
          </p>


          {/* Cards */}
          {filteredArticles.length > 0 ? (

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {filteredArticles.map((article) => (

                <article
                  key={article.id}
                  className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1"
                >

                  <img
                    src={article.image}
                    alt={article.alt}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                  />


                  <div className="p-6">

                    <p className="text-xs font-medium text-[#1684e8]">
                      {article.category}
                    </p>


                    <h3 className="mt-3 text-xl font-semibold">
                      {article.title}
                    </h3>


                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {article.excerpt}
                    </p>


                    <div className="mt-5 flex items-center justify-between">

                      <span className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock3 size={14} />
                        {article.readTime}
                      </span>


                      <button
                        type="button"
                        onClick={() => setSelectedArticle(article)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#1684e8] hover:underline"
                      >
                        Read
                        <ArrowRight size={16} />
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="mt-8 rounded-3xl bg-white p-10 text-center">

              <Search className="mx-auto text-slate-400" />

              <h3 className="mt-4 text-xl font-semibold">
                No articles found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another keyword or category.
              </p>


              <button
                onClick={clearFilters}
                className="mt-5 rounded-xl bg-[#1684e8] px-5 py-3 text-sm font-medium text-white"
              >
                Clear filters
              </button>

            </div>

          )}

        </section>


        {/* CTA */}
        <section className="flex flex-col justify-between gap-6 rounded-3xl bg-[#071525] p-8 text-white sm:p-10 lg:flex-row lg:items-center">

          <div>
            <h2 className="text-2xl font-semibold">
              Ready to plan your next shipment?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Share your route, cargo requirements, and preferred schedule
              with our shipping team.
            </p>
          </div>


          <Link
            to="/request-quote"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#1684e8] px-5 py-3 text-sm font-medium text-white hover:bg-[#126ec4]"
          >
            Request a quote
            <ArrowUpRight size={18} />
          </Link>

        </section>

      </div>


      <ArticleDialog
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </main>
  );
}