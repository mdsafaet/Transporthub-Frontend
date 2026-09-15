import Reveal from "../common/Reveal";
import SectionKicker from "../common/SectionKicker";
import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  ["120+", "Countries"],
  ["500+", "Partners"],
  ["50K+", "Shipments"],
  ["99%", "On time"],
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
                src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=85"
                alt="Cargo handling and logistics operations"
                loading="lazy"
                width="1200"
                height="1000"
                className="about-photo-image"
              />

              <div className="about-photo-overlay" />

              <div className="about-photo-caption">
                <div>
                  <p className="text-4xl font-semibold tracking-tight">
                    Since 1998
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Moving what matters
                  </p>
                </div>

                <Sparkles
                  aria-hidden="true"
                  className="mb-1 size-7 shrink-0 text-[#62b9ff]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="delay-2">
            <SectionKicker>Our difference</SectionKicker>

            <h2
              id="about-heading"
              className="max-w-[600px] text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
            >
              Moving the world{" "}
              <span className="text-[#1684e8]">forward.</span>
            </h2>

            <p className="mt-6 max-w-[520px] text-sm leading-6 text-slate-500">
              We combine human expertise, intelligent technology, and a
              global perspective to make complex logistics feel simple.
              From the first conversation to final delivery, we help your
              business move with confidence.
            </p>

            <div className="about-stats">
              {stats.map(([number, label]) => (
                <div key={label}>
                  <p className="text-3xl font-semibold tracking-[-0.06em] text-[#1684e8]">
                    {number}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="about-link mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#1684e8]"
            >
              Discover TransportNet
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}