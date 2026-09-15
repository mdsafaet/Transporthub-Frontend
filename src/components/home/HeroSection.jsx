import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export const slides = [
  {
    eyebrow: "GLOBAL OCEAN NETWORK",
    title: "Connecting businesses across the world.",
    description:
      "Reliable international freight solutions with secure, fast and efficient cargo transportation.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2200&q=90",
    tag: "Ocean freight",
    metric: "12,480",
    metricLabel: "containers in transit",
  },
  {
    eyebrow: "PRECISION AIR FREIGHT",
    title: "Air freight solutions without limits.",
    description:
      "Fast global delivery solutions designed for urgent business needs and time-critical cargo.",
    image:
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=2200&q=90",
    tag: "Air freight",
    metric: "64",
    metricLabel: "global air hubs",
  },
  {
    eyebrow: "INTELLIGENT OPERATIONS",
    title: "Smart supply chain management.",
    description:
      "Technology-driven logistics services that give your company clarity, control, and confidence worldwide.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2200&q=90",
    tag: "Warehousing",
    metric: "99.2%",
    metricLabel: "on-time performance",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  
  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % slides.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="hero relative min-h-[760px] h-[100svh] max-h-[980px]"
      aria-label="CargoSphere highlights"
    >
      {slides.map((item, index) => (
        <div
          key={item.title}
          className={`hero-image absolute inset-0 transition-opacity duration-[1200ms] ${index === active ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      ))}
      <div className="hero-overlay absolute inset-0" />
      <div className="hero-grid absolute inset-0" />
      <div className="particles absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex h-full max-w-[1380px] items-end px-6 pb-28 pt-32 lg:px-10 lg:pb-24">
        <div className="max-w-[780px]">
          <div key={slide.title} className="slide-copy">
            <p className="mb-5 text-[11px] font-bold tracking-[0.28em] text-[#67b7ff]">
              {slide.eyebrow}
            </p>
            <h1 className="max-w-[850px] text-[clamp(3.5rem,7vw,7.8rem)] font-semibold leading-[.91] tracking-[-0.075em]">
              {slide.title}
            </h1>
            <p className="mt-7 max-w-[510px] text-base leading-7 text-white/70 lg:text-lg">
              {slide.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group rounded-full bg-[#188af0] px-6 py-4 text-sm font-bold transition hover:bg-[#54b2ff]"
              >
                Get a shipping quote{" "}
                <ArrowRight className="ml-5 inline size-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#tracking"
                className="rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm font-bold backdrop-blur-sm transition hover:bg-white/15"
              >
                Track a shipment
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-6 right-6 mx-auto flex max-w-[1380px] items-end justify-between lg:left-10 lg:right-10">
          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-sm font-semibold">0{active + 1}</span>
            <div className="h-px w-28 bg-white/30">
              <div
                className="h-full bg-white transition-all duration-500"
                style={{ width: `${((active + 1) / slides.length) * 100}%` }}
              />
            </div>
            <span className="text-xs text-white/50">0{slides.length}</span>
          </div>
          <div className="floating-card hidden w-[235px] rounded-2xl border border-white/15 bg-[#0c2337]/70 p-4 backdrop-blur-xl sm:block">
            <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-white/50">
              <span>{slide.tag}</span>
              <span className="live-dot" />
            </div>
            <div className="text-2xl font-semibold tracking-tight">
              {slide.metric}
            </div>
            <div className="mt-1 text-xs text-white/55">
              {slide.metricLabel}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous slide"
              onClick={() =>
                setActive((active + slides.length - 1) % slides.length)
              }
              className="rounded-full border border-white/25 p-3 transition hover:bg-white/15"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => setActive((active + 1) % slides.length)}
              className="rounded-full border border-white/25 p-3 transition hover:bg-white/15"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}