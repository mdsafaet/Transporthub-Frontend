import { Link } from "react-router-dom";
import { ArrowRight, Ship } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionKicker from "../common/SectionKicker";

const highlights = [
  ["Ocean", "Container shipping"],
  ["Ports", "Route connections"],
  ["Inland", "Collection & delivery"],
  ["People", "Personal support"],
];

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="about-container">
        <div className="about-layout">
          <Reveal>
            <div className="about-photo">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=85"
                alt="Container ship transporting cargo by sea"
                loading="lazy"
                width="1200"
                height="1000"
                className="about-photo-image"
              />

              <div
                className="about-photo-overlay"
                aria-hidden="true"
              />

              <div className="about-photo-caption">
                <div>
                  <p className="text-4xl font-semibold tracking-tight">
                    Beyond the port
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Connecting cargo with opportunity
                  </p>
                </div>

                <Ship
                  aria-hidden="true"
                  className="mb-1 size-7 shrink-0 text-[#62b9ff]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="delay-2">
            <SectionKicker>About TransportNet</SectionKicker>

            <h2
              id="about-heading"
              className="max-w-[600px] text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
            >
              Connecting ports.
              <br />
              <span className="text-[#1684e8]">
                Supporting your business.
              </span>
            </h2>

            <p className="mt-6 max-w-[520px] text-sm leading-6 text-slate-500">
              We bring together scheduled container shipping, port
              connections, and inland transport to help you plan your
              cargo’s journey. From booking and documentation to
              delivery arrangements, our team helps you navigate the
              details.
            </p>

            <div className="about-stats">
              {highlights.map(([title, label]) => (
                <div key={title}>
                  <p className="text-3xl font-semibold tracking-[-0.06em] text-[#1684e8]">
                    {title}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="about-link mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#1684e8]"
            >
              Discover TransportNet
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}