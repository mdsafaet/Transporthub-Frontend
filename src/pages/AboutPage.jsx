import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  Users,
  Ship,
  Truck,
  Snowflake,
  Package,
} from "lucide-react";
import Reveal from "../components/common/Reveal";
import SectionKicker from "../components/common/SectionKicker";

const values = [
  {
    title: "People first",
    description:
      "Understand your shipping priorities and provide clear guidance from booking to delivery.",
    Icon: Users,
  },
  {
    title: "Care in every detail",
    description:
      "Coordinate container requirements, documentation, and handling around the needs of your cargo.",
    Icon: ShieldCheck,
  },
  {
    title: "Connected planning",
    description:
      "Bring sailing schedules, port connections, and inland transport together in one shipping plan.",
    Icon: Globe2,
  },
];

const services = [
  {
    title: "Container shipping",
    description:
      "Scheduled ocean transport connecting origin and destination ports.",
    Icon: Ship,
  },
  {
    title: "Inland transport",
    description:
      "Collection and delivery arrangements connecting your business with the port.",
    Icon: Truck,
  },
  {
    title: "Reefer containers",
    description:
      "Transport planning for cargo with temperature-control requirements.",
    Icon: Snowflake,
  },
  {
    title: "Special cargo",
    description:
      "Equipment and handling arrangements for cargo with specific shipping needs.",
    Icon: Package,
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
                Connecting ports.
                <br />
                <span className="text-[#1684e8]">
                  Moving businesses.
                </span>
              </h1>

              <p className="text-sm leading-6 text-slate-500">
                Container shipping connects businesses with their
                markets. We help you plan the journey with scheduled
                ocean services, coordinated inland transport, and
                personal support.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="abt-hero-image">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1800&q=85"
                alt="Container ship transporting cargo by sea"
                width="1800"
                height="900"
              />

              <div className="abt-image-overlay" aria-hidden="true" />

              <span className="abt-image-tag">
                <Ship size={16} aria-hidden="true" />
                TransportNet Shipping
              </span>

              <div className="abt-image-caption">
                <p className="text-2xl font-semibold tracking-tight sm:text-4xl">
                  Every container carries
                  <br />
                  a business forward.
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
              Clear planning.
              <br />
              <span className="text-[#1684e8]">Personal attention.</span>
            </h2>
          </Reveal>

          <Reveal className="delay-2">
            <div className="abt-story-copy">
              <p className="text-sm leading-6 text-slate-500">
                A container journey involves more than the ocean
                crossing. Sailing selection, shipping documents, port
                handovers, and inland connections all need to work
                together.
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                We start with your cargo, origin, destination, and
                preferred timeline. From there, our team helps you
                understand the available options and coordinate the
                next steps.
              </p>

              <div className="abt-mission">
                <span className="abt-mission-line" aria-hidden="true" />

                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Our purpose
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Make container shipping easier to navigate, so
                    you can focus on the opportunities ahead.
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
                  Built on{" "}
                  <span className="text-[#1684e8]">understanding.</span>
                </h2>
              </div>

              <p className="text-sm leading-6 text-slate-500">
                Your shipment has its own requirements. Our approach
                starts with listening and carries through to the
                details of the journey.
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
              Across the ocean.
              <br />
              <span className="text-[#1684e8]">Beyond the port.</span>
            </h2>

            <p className="mt-6 max-w-[460px] text-sm leading-6 text-slate-500">
              Explore container shipping and supporting transport
              services, from port-to-port movements to collection and
              delivery arrangements.
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

      {/* Quote */}
      <section
        className="abt-cta-section"
        aria-labelledby="abt-cta-heading"
      >
        <div className="abt-container">
          <Reveal>
            <div className="abt-cta">
              <div>
                <p className="abt-cta-eyebrow">Plan your next sailing</p>

                <h2
                  id="abt-cta-heading"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Where does your cargo need to go?
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/75">
                  Share your container requirements and destination.
                  We’ll help you explore the shipping options.
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