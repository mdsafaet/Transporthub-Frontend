import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

const slides = [
  {
    eyebrow: "CONTAINER SHIPPING",
    title: "Connecting ports Moving businesses.",
    description:
      "Scheduled container shipping and coordinated transport to connect your cargo with its next destination.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2200&q=90",
    tag: "Ocean transport",
    highlight: "Port to port",
    detail: "Explore our shipping services",
  },
  {
    eyebrow: "ROUTES & SCHEDULES",
    title:"Start your shipment journey",
    description:
      "Explore sailing schedules and port connections to plan your cargo’s journey around your business needs.",
    image:
      "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=2200&q=90",
    tag: "Plan your journey",
    highlight: "Sailing schedules",
    detail: "Find your next connection",
  },
  {
    eyebrow: "CONNECTED TRANSPORT",
    title: "Beyond the port. Closer to your business.",
    description:
      "Connect ocean shipping with inland transport for a coordinated journey from collection to delivery.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2200&q=90",
    tag: "Inland connections",
    highlight: "Door to door",
    detail: "Connect every stage of the journey",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const slide = slides[active];

  useEffect(() => {
    if (paused) return;

    const motion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let timer;

    const updateTimer = () => {
      window.clearInterval(timer);

      if (!motion.matches) {
        timer = window.setInterval(() => {
          setActive((current) => (current + 1) % slides.length);
        }, 6500);
      }
    };

    updateTimer();
    motion.addEventListener("change", updateTimer);

    return () => {
      window.clearInterval(timer);
      motion.removeEventListener("change", updateTimer);
    };
  }, [paused]);

  const changeSlide = (direction) => {
    setPaused(true);
    setActive(
      (current) => (current + direction + slides.length) % slides.length,
    );
  };

  return (
    <section
      className="hero relative h-[100svh] min-h-[760px] max-h-[980px] overflow-hidden text-white"
      aria-label="TransportNet shipping highlights"
      aria-roledescription="carousel"
    >
      {slides.map((item, index) => (
        <div
          key={item.title}
          aria-hidden="true"
          className={`hero-image absolute inset-0 transition-opacity duration-[1200ms] ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      ))}

      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="particles absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex h-full max-w-[1380px] items-end px-6 pb-36 pt-32 lg:px-10 lg:pb-44">
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
              <Link
                to="/request-quote"
                className="group rounded-full bg-[#188af0] px-6 py-4 text-sm font-bold transition hover:bg-[#54b2ff]"
              >
                Request a quote
                <ArrowRight
                  aria-hidden="true"
                  className="ml-5 inline size-4 transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/tracking"
                className="rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm font-bold backdrop-blur-sm transition hover:bg-white/15"
              >
                Track a container
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 right-6 flex items-end justify-between gap-4 lg:left-10 lg:right-10">
          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-sm font-semibold">
              0{active + 1}
            </span>

            <div className="h-px w-28 bg-white/30" aria-hidden="true">
              <div
                className="h-full bg-white transition-all duration-500"
                style={{
                  width: `${((active + 1) / slides.length) * 100}%`,
                }}
              />
            </div>

            <span className="text-xs text-white/50">
              0{slides.length}
            </span>
          </div>

          <div className="floating-card hidden w-[235px] rounded-2xl border border-white/15 bg-[#0c2337]/70 p-4 backdrop-blur-xl lg:block">
            <p className="mb-3 text-[10px] uppercase tracking-widest text-white/60">
              {slide.tag}
            </p>

            <p className="text-2xl font-semibold tracking-tight">
              {slide.highlight}
            </p>

            <p className="mt-1 text-xs text-white/65">
              {slide.detail}
            </p>
          </div>
{/* 
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => changeSlide(-1)}
              className="rounded-full border border-white/25 p-3 transition hover:bg-white/15"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>

            <button
              type="button"
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              onClick={() => setPaused((current) => !current)}
              className="rounded-full border border-white/25 p-3 transition hover:bg-white/15"
            >
              {paused ? (
                <Play aria-hidden="true" className="size-5" />
              ) : (
                <Pause aria-hidden="true" className="size-5" />
              )}
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={() => changeSlide(1)}
              className="rounded-full border border-white/25 p-3 transition hover:bg-white/15"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}