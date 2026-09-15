import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  Users,
  Ship,
  Plane,
  Truck,
  Warehouse,
} from "lucide-react";
import Reveal from "../components/common/Reveal";
import SectionKicker from "../components/common/SectionKicker";


const values = [
  {
    title: "People first",
    description:
      "We listen to your priorities and build working relationships around clear communication.",
    Icon: Users,
  },
  {
    title: "Care in the details",
    description:
      "From planning to handover, we focus on the details that keep your shipment moving.",
    Icon: ShieldCheck,
  },
  {
    title: "A connected approach",
    description:
      "We bring routes, services, and people together around your business needs.",
    Icon: Globe2,
  },
];

const services = [
  {
    title: "Ocean freight",
    description: "Coordinated solutions for international cargo.",
    Icon: Ship,
  },
  {
    title: "Air freight",
    description: "Transport planning around your shipping priorities.",
    Icon: Plane,
  },
  {
    title: "Land transport",
    description: "Road connections for collection and delivery.",
    Icon: Truck,
  },
  {
    title: "Warehousing",
    description: "Storage and handling for your next stage of growth.",
    Icon: Warehouse,
  },
];

export default function AboutPage() {
  return (
    <main className="abt-page">
      {/* Introduction */}
      <section className="abt-hero" aria-labelledby="abt-heading">
        <div className="abt-container">
          <nav aria-label="Breadcrumb" className="abt-breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About us</span>
          </nav>

          <Reveal>
            <SectionKicker>About TransportNet</SectionKicker>

            <div className="abt-intro-layout">
              <h1
                id="abt-heading"
                className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
              >
                Moving cargo.
                <br />
                <span className="text-[#1684e8]">
                  Connecting possibilities.
                </span>
              </h1>

              <p className="text-sm leading-6 text-slate-500">
                Behind every shipment is a business moving forward.
                We bring a personal approach to logistics, helping you
                connect your plans with the people and places that matter.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="abt-hero-image">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1800&q=85"
                alt="Container ship transporting cargo"
                width="1800"
                height="900"
              />

              <div className="abt-image-overlay" />

              <span className="abt-image-tag">
                <Globe2 size={16} aria-hidden="true" />
                TransportNet Logistics
              </span>

              <div className="abt-image-caption">
                <p className="text-2xl font-semibold tracking-tight sm:text-4xl">
                  Every journey starts
                  <br />
                  with a connection.
                </p>

                <span className="abt-image-caption-icon">
                  <ArrowUpRight size={26} aria-hidden="true" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our approach */}
      <section className="abt-section" aria-labelledby="abt-story-heading">
        <div className="abt-container abt-story">
          <Reveal>
            <SectionKicker>Our approach</SectionKicker>

            <h2
              id="abt-story-heading"
              className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
            >
              Global thinking.
              <br />
              <span className="text-[#1684e8]">Personal attention.</span>
            </h2>
          </Reveal>

          <Reveal className="delay-2">
            <div className="abt-story-copy">
              <p className="text-sm leading-6 text-slate-500">
                Logistics brings together many moving parts. Our role
                is to help you understand the options, coordinate the
                details, and move forward with a clear plan.
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Whether you’re arranging an individual shipment or
                planning a wider distribution operation, we start by
                understanding your cargo, timeline, and priorities.
              </p>

              <div className="abt-mission">
                <span className="abt-mission-line" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Our purpose
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Make logistics easier to navigate, so you can
                    focus on what comes next for your business.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section
        className="abt-section abt-values-section"
        aria-labelledby="abt-values-heading"
      >
        <div className="abt-container">
          <Reveal>
            <div className="abt-section-heading">
              <div>
                <SectionKicker>What guides us</SectionKicker>
                <h2
                  id="abt-values-heading"
                  className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
                >
                  Built on <span className="text-[#1684e8]">trust.</span>
                </h2>
              </div>

              <p className="text-sm leading-6 text-slate-500">
                A practical set of principles shapes how we work
                with you and look after your shipment.
              </p>
            </div>
          </Reveal>

          <div className="abt-values-grid">
            {values.map(({ title, description, Icon }, index) => (
              <Reveal key={title} className={`delay-${index + 1}`}>
                <article className="abt-value-card">
                  <div className="abt-value-top">
                    <span className="abt-icon">
                      <Icon
                        size={24}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="abt-number" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="abt-section"
        aria-labelledby="abt-services-heading"
      >
        <div className="abt-container abt-services-layout">
          <Reveal>
            <SectionKicker>What we do</SectionKicker>

            <h2
              id="abt-services-heading"
              className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
            >
              One partner.
              <br />
              <span className="text-[#1684e8]">More ways forward.</span>
            </h2>

            <p className="mt-6 max-w-[460px] text-sm leading-6 text-slate-500">
              Connected services to support your cargo from collection
              through storage, transport, and delivery.
            </p>

            <Link to="/#services" className="abt-text-link">
              Explore our services
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="abt-services-grid">
            {services.map(({ title, description, Icon }, index) => (
              <Reveal
                key={title}
                className={`delay-${(index % 3) + 1}`}
              >
                <article className="abt-service-card">
                  <Icon
                    size={26}
                    strokeWidth={1.6}
                    aria-hidden="true"
                    className="text-[#1684e8]"
                  />

                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="abt-cta-section" aria-labelledby="abt-cta-heading">
        <div className="abt-container">
          <Reveal>
            <div className="abt-cta">
              <div>
                <p className="abt-cta-eyebrow">Let’s move forward</p>

                <h2
                  id="abt-cta-heading"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Your next journey starts with a conversation.
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/75">
                  Tell us what you’re planning. We’ll help you explore
                  the next steps.
                </p>
              </div>

              <Link to="/request-quote" className="abt-button">
                Request a quote
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}