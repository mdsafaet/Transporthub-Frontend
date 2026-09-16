import { useState } from "react";
import { Pause, Play } from "lucide-react";
import SectionKicker from "../common/SectionKicker";
import Reveal from "../common/Reveal";

// Sample testimonials for layout preview.
const testimonials = [
  {
    quote:
      "“Clear sailing information and helpful booking support make planning our container shipments easier.”",
    name: "Sample Customer",
    role: "Export Operations",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "“From the initial booking to the destination port, we appreciate knowing who to contact and what comes next.”",
    name: "Sample Customer",
    role: "Import Management",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "“Coordinating ocean transport and inland delivery through one team helps simplify our shipping arrangements.”",
    name: "Sample Customer",
    role: "Supply Chain Operations",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=80",
  },
];

function TestimonialCard({ testimonial, highlighted }) {
  const { quote, name, role, image } = testimonial;

  return (
    <article
      className={`testimonial-marquee-card flex flex-col rounded-[22px] p-7 ${
        highlighted ? "bg-[#0b2942] text-white" : "bg-white"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-widest ${
          highlighted ? "text-[#79c2ff]" : "text-[#1684e8]"
        }`}
      >
        Sample customer story
      </p>

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
          alt=""
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
      id="testimonials"
      className="section-pad bg-[#eef4f8] text-[#071525]"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1380px]">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionKicker>Customer stories</SectionKicker>

              <h2
                id="testimonials-heading"
                className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
              >
                Connections beyond
                <br />
                <span className="text-[#1684e8]">the destination.</span>
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
            {[0, 1].map((group) => (
              <div
                key={group}
                className="testimonial-marquee-group"
                aria-hidden={group === 1 ? true : undefined}
              >
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.role}
                    testimonial={testimonial}
                    highlighted={index === 1}
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