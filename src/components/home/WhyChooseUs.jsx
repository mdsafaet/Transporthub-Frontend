import {
  Globe2,
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
    title: "Connected worldwide",
    description:
      "Find the right route for your cargo with coordinated ocean, air, and road transport.",
    label: "Global connections",
    Icon: Globe2,
  },
  {
    title: "Handled with care",
    description:
      "Thoughtful planning and careful coordination throughout your shipment’s journey.",
    label: "Cargo care",
    Icon: ShieldCheck,
  },
  {
    title: "Clarity at every step",
    description:
      "Clear communication helps you stay informed and plan your next move confidently.",
    label: "Shipment visibility",
    Icon: Radar,
  },
  {
    title: "People on your side",
    description:
      "Work with a team that understands your priorities and helps you navigate the details.",
    label: "Personal support",
    Icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="why-choice"
      aria-labelledby="why-choice-heading"
    >
      <div className="why-choice-container">
        <Reveal>
          <div className="why-choice-heading">
            <SectionKicker>Why choose TransportNet</SectionKicker>

            <h2
              id="why-choice-heading"
              className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
            >
              Built for your business.
              <br />
              <span className="text-[#1684e8]">
                Ready for your next move.
              </span>
            </h2>

            <p className="why-choice-intro text-sm leading-6 text-slate-500">
              Logistics is more than moving cargo. It’s understanding
              what matters to you—and taking care of the journey.
            </p>
          </div>
        </Reveal>

        <div className="why-choice-grid">
          {features.map(
            ({ title, description, label, Icon }, index) => (
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

                    <span
                      className="why-choice-number"
                      aria-hidden="true"
                    >
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
                    <span
                      className="why-choice-line"
                      aria-hidden="true"
                    />
                  </div>
                </article>
              </Reveal>
            ),
          )}
        </div>

        <Reveal>
          <div className="why-choice-contact">
            <div className="why-choice-contact-copy">
              <span className="why-choice-contact-icon">
                <ArrowRight size={22} aria-hidden="true" />
              </span>

              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  Let’s make your next shipment simpler.
                </h3>

                <p className="mt-2 text-sm leading-6">
                  Tell us where you’re going. We’ll help you plan the
                  journey.
                </p>
              </div>
            </div>

            <a href="/request-quote" className="why-choice-button">
              Request a quote
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}