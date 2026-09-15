import { useState } from "react";
import { Pause, Play } from "lucide-react";
import SectionKicker from "../common/SectionKicker";
import Reveal from "../common/Reveal";

const testimonials = [
  [
    "“CargoSphere gives our team the confidence to move faster. Every shipment feels accounted for.”",
    "Maya Chen",
    "VP Operations, Novera Group",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  ],
  [
    "“We reduced delays by 32% in our first year. Their visibility platform changed the way we work.”",
    "Daniel Okafor",
    "Director, Meridian Retail",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  ],
  [
    "“A true extension of our team—from first mile to final delivery, they make global feel local.”",
    "Sofia Laurent",
    "COO, Atelier Maison",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=80",
  ],
];

function TestimonialCard({ testimonial, index }) {
  const [quote, name, role, image] = testimonial;
  const highlighted = index === 1;

  return (
    <article
      className={`testimonial-marquee-card flex flex-col rounded-[22px] p-7 ${
        highlighted ? "bg-[#0b2942] text-white" : "bg-white"
      }`}
    >
      <div
        className="flex gap-1 text-[#1684e8]"
        role="img"
        aria-label="5 out of 5 stars"
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} aria-hidden="true">
            ★
          </span>
        ))}
      </div>

      <blockquote className="mb-10 mt-8 flex-1 text-xl font-medium leading-8 tracking-tight">
        {quote}
      </blockquote>

      <div
        className={`flex items-center gap-3 border-t pt-5 ${
          highlighted ? "border-white/10" : "border-slate-200"
        }`}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          width="44"
          height="44"
          className="size-11 shrink-0 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p
            className={`mt-1 text-xs ${
              highlighted ? "text-white/60" : "text-slate-500"
            }`}
          >
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="insights"
      className="section-pad bg-[#eef4f8] text-[#071525]"
    >
      <div className="mx-auto max-w-[1380px]">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionKicker>Customer stories</SectionKicker>
              <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
                Trusted in motion.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={paused ? "Play testimonials" : "Pause testimonials"}
              aria-controls="testimonials-marquee"
              className="testimonial-marquee-toggle flex items-center gap-2 self-start rounded-full border border-slate-300 px-4 py-3 text-sm transition hover:bg-white"
            >
              {paused ? (
                <Play aria-hidden="true" className="size-4" />
              ) : (
                <Pause aria-hidden="true" className="size-4" />
              )}
              {paused ? "Play" : "Pause"}
            </button>
          </div>
        </Reveal>

        <div
          id="testimonials-marquee"
          className={`testimonial-marquee mt-12 ${
            paused ? "is-paused" : ""
          }`}
          role="region"
          aria-label="Customer testimonials"
          tabIndex={0}
        >
          <div className="testimonial-marquee-track">
            {/* Two identical groups create a seamless loop. */}
            {[0, 1].map((group) => (
              <div
                key={group}
                className="testimonial-marquee-group"
                aria-hidden={group === 1 ? true : undefined}
              >
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial[1]}
                    testimonial={testimonial}
                    index={index}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}