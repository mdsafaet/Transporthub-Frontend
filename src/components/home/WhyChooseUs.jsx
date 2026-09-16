import { Link } from "react-router-dom";
import {
  Ship,
  ShieldCheck,
  Radar,
  Headphones,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import Reveal from "../common/Reveal";
import SectionKicker from "../common/SectionKicker";

const features = [
  {
    title: "Scheduled connections",
    description:
      "Plan your container shipments around sailing schedules and port connections that suit your business.",
    label: "Routes & schedules",
    Icon: Ship,
  },
  {
    title: "Care for your cargo",
    description:
      "Coordinate container requirements and handling arrangements from collection through delivery.",
    label: "Container handling",
    Icon: ShieldCheck,
  },
  {
    title: "Clarity at every stage",
    description:
      "Follow available shipment updates and stay informed as your container moves toward its destination.",
    label: "Container tracking",
    Icon: Radar,
  },
  {
    title: "Support for your journey",
    description:
      "Get guidance on bookings, shipping documents, and the next steps for your container shipment.",
    label: "Shipping support",
    Icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="why-choice"
      aria-labelledby="why-choice-title"
    >
      <div className="why-choice-container">
        <Reveal>
          <div className="why-choice-heading">
            <SectionKicker>Why choose TransportNet</SectionKicker>

            <h2
              id="why-choice-title"
              className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
            >
              Connecting your cargo.
              <br />
              <span className="text-[#1684e8]">
                Supporting your business.
              </span>
            </h2>

            <p className="why-choice-intro text-sm leading-6 text-slate-500">
              From choosing a sailing to arranging delivery, we help
              you navigate container shipping with clear planning and
              personal support.
            </p>
          </div>
        </Reveal>

        <div className="why-choice-grid">
          {features.map(({ title, description, label, Icon }, index) => (
            <Reveal
              key={title}
              className={`why-choice-item why-choice-delay-${index + 1}`}
            >
              <article className="why-choice-card">
                <div className="why-choice-card-top">
                  <span className="why-choice-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="why-choice-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight">
                  {title}
                </h3>

                <p className="why-choice-description text-sm leading-6">
                  {description}
                </p>

                <div className="why-choice-card-bottom">
                  <span>{label}</span>
                  <span className="why-choice-line" aria-hidden="true" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="why-choice-contact">
            <div className="why-choice-contact-copy">
              <span className="why-choice-contact-icon">
                <ArrowRight size={22} aria-hidden="true" />
              </span>

              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  Let’s plan your next container shipment.
                </h3>

                <p className="mt-2 text-sm leading-6">
                  Share your cargo details, origin, and destination.
                  We’ll help you explore the options.
                </p>
              </div>
            </div>

            <Link to="/request-quote" className="why-choice-button">
              Request a quote
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}