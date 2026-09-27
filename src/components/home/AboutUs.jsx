import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

/* =========================
   COUNT-UP HELPER
========================= */
function CountUpNumber({ end, suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.floor(progress * end);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* =========================
   DATA
========================= */
const stats = [
  { label: "Projects Done", value: 50, suffix: "+" },
  { label: "Clients Worldwide", value: 20, suffix: "+" },
  { label: "Own Vehicles", value: 40, suffix: "+" },
  { label: "Network Partners", value: 25, suffix: "+" },
];

/* =========================
   COMPONENT
========================= */
export default function AboutUs() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-20 lg:py-28 font-['Exo',sans-serif]">
      <div className="mx-auto max-w-[1500px]">
        
        {/* Centered Container Wrapper */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#8b3f80]/15 bg-[#8b3f80]/[0.06] px-3.5 py-1.5">
            <Globe2 className="size-4 text-[#8b3f80]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b3f80] sm:text-sm">
              About Coast Shipping
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-slate-900 sm:text-4xl lg:text-[46px] xl:text-[52px]">
            Connecting Global Ports with Precision 
          </h2>

          <p className="mt-5 text-sm font-normal leading-7 text-slate-600 sm:text-base md:text-[17px]">
            At Coast Shipping, we deliver state-of-the-art maritime and
            container transport infrastructure. By uniting advanced logistics
            networks with real-time vessel visibility, we ensure your cargo
            traverses global supply chains securely .
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-[15px]">
            Our experienced team provides transparent operations, customized
            freight solutions, and dependable door-to-door delivery designed
            to support businesses worldwide.
          </p>

          {/* COUNT-UP STATS (Centered Grid) */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-200 pt-10 sm:grid-cols-4 w-full max-w-[900px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/50 p-5 shadow-[0_6px_24px_rgba(15,23,42,0.04)] flex flex-col items-center justify-center"
              >
                <span className="block text-3xl font-extrabold tracking-tight text-[#8b3f80] md:text-4xl">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </span>

                <span className="mt-2 block text-xs font-semibold leading-4 text-slate-500 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/#"
              className="group inline-flex items-center gap-3 rounded-full bg-[#8b3f80] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(139,63,128,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#76346d] hover:shadow-[0_15px_35px_rgba(139,63,128,0.3)]"
            >
              Explore our services
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}