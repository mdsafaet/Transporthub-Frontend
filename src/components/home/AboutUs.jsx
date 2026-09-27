import React, { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  ArrowUpRight,
  Globe2,
  Radio,
} from "lucide-react";
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

const portsData = [
  {
    name: "Dhaka",
    country: "Bangladesh",
    lat: 23.8103,
    lng: 90.4125,
    color: "#c7854b",
    size: 0.32,
  },
  {
    name: "Singapore",
    country: "Singapore",
    lat: 1.2902,
    lng: 103.8519,
    color: "#8b3f80",
    size: 0.26,
  },
  {
    name: "Shanghai",
    country: "China",
    lat: 31.2304,
    lng: 121.4737,
    color: "#8b3f80",
    size: 0.26,
  },
  {
    name: "Dubai",
    country: "UAE",
    lat: 25.2048,
    lng: 55.2708,
    color: "#c7854b",
    size: 0.26,
  },
  {
    name: "London",
    country: "United Kingdom",
    lat: 51.5074,
    lng: -0.1278,
    color: "#8b3f80",
    size: 0.24,
  },
  {
    name: "San Francisco",
    country: "United States",
    lat: 37.7749,
    lng: -122.4194,
    color: "#8b3f80",
    size: 0.24,
  },
];

const arcsData = [
  {
    startLat: 23.8103,
    startLng: 90.4125,
    endLat: 1.2902,
    endLng: 103.8519,
    color: ["#c7854b", "#8b3f80"],
  },
  {
    startLat: 1.2902,
    startLng: 103.8519,
    endLat: 31.2304,
    endLng: 121.4737,
    color: ["#8b3f80", "#c7854b"],
  },
  {
    startLat: 31.2304,
    startLng: 121.4737,
    endLat: 37.7749,
    endLng: -122.4194,
    color: ["#8b3f80", "#c7854b"],
  },
  {
    startLat: 23.8103,
    startLng: 90.4125,
    endLat: 25.2048,
    endLng: 55.2708,
    color: ["#c7854b", "#8b3f80"],
  },
  {
    startLat: 25.2048,
    startLng: 55.2708,
    endLat: 51.5074,
    endLng: -0.1278,
    color: ["#8b3f80", "#c7854b"],
  },
];

const ringsData = [
  { lat: 23.8103, lng: 90.4125, color: "#c7854b" },
  { lat: 1.2902, lng: 103.8519, color: "#8b3f80" },
  { lat: 25.2048, lng: 55.2708, color: "#c7854b" },
];

/* =========================
   COMPONENT
========================= */
export default function AboutUs() {
  const globeEl = useRef(null);
  const containerRef = useRef(null);

  const [dimensions, setDimensions] = useState({
    width: 500,
    height: 500,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      const width = containerRef.current?.offsetWidth || 500;

      let height = 500;
      if (window.innerWidth < 640) height = 320;
      else if (window.innerWidth < 768) height = 360;
      else if (window.innerWidth < 1024) height = 420;

      setDimensions({ width, height });
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);
    window.addEventListener("resize", updateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const routes = useMemo(
    () =>
      arcsData.map((route, index) => ({
        ...route,
        dashOffset: index / arcsData.length,
      })),
    []
  );

  const handleGlobeReady = () => {
    const globe = globeEl.current;
    if (!globe) return;

    const controls = globe.controls();

    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.32;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
    }

    globe.pointOfView(
      {
        lat: 18,
        lng: 75,
        altitude: 2.05,
      },
      900
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-20 lg:py-28 font-['Exo',sans-serif]">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          
          {/* LEFT */}
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-6">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#8b3f80]/15 bg-[#8b3f80]/[0.06] px-3.5 py-1.5">
              <Globe2 className="size-4 text-[#8b3f80]" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b3f80] sm:text-sm">
                About Coast Shipping
              </span>
            </div>

            <h2 className="max-w-[700px] text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-slate-900 sm:text-4xl lg:text-[46px] xl:text-[52px]">
              Connecting Global Ports with Precision & Trust
            </h2>

            <p className="mt-5 max-w-[680px] text-sm font-normal leading-7 text-slate-600 sm:text-base md:text-[17px]">
              At Coast Shipping, we deliver state-of-the-art maritime and
              container transport infrastructure. By uniting advanced logistics
              networks with real-time vessel visibility, we ensure your cargo
              traverses global supply chains securely and on schedule.
            </p>

            <p className="mt-4 max-w-[680px] text-sm leading-7 text-slate-500 sm:text-[15px]">
              Our experienced team provides transparent operations, customized
              freight solutions, and dependable door-to-door delivery designed
              to support businesses worldwide.
            </p>

            {/* COUNT-UP STATS */}
            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-slate-200 pt-7 sm:grid-cols-4 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_6px_24px_rgba(15,23,42,0.04)]"
                >
                  <span className="block text-2xl font-extrabold tracking-tight text-[#8b3f80] md:text-3xl">
                    <CountUpNumber end={stat.value} suffix={stat.suffix} />
                  </span>

                  <span className="mt-1.5 block text-[10px] font-semibold leading-4 text-slate-500 sm:text-[11px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#8b3f80] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(139,63,128,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#76346d] hover:shadow-[0_15px_35px_rgba(139,63,128,0.3)]"
              >
                Explore our services
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT / GLOBE */}
          <div className="relative order-1 flex items-center justify-center lg:order-2 lg:col-span-6">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/40 blur-[90px]" />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-[#0b1220] via-[#10192d] to-[#162238] shadow-[0_30px_70px_rgba(15,23,42,0.18)]"
            >
              {/* standard subtle grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
                  `,
                  backgroundSize: "36px 36px",
                }}
              />

              {/* top bar */}
              <div className="relative z-20 flex items-center justify-between px-4 pt-4 sm:px-6 sm:pt-6">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/8 px-3.5 py-2 backdrop-blur-xl">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c7854b] opacity-50" />
                    <span className="relative inline-flex size-2 rounded-full bg-[#c7854b]" />
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.08em] text-slate-200 sm:text-xs">
                    3D GLOBE WITH MOVING SEA ROUTES
                  </span>
                </div>

                <div className="hidden items-center gap-2 text-[10px] font-medium text-slate-400 sm:flex">
                  <Radio className="size-3.5 text-[#c7854b]" />
                  Live network
                </div>
              </div>

              {/* globe */}
              <div
                ref={containerRef}
                className="relative z-10 flex h-[320px] w-full cursor-grab items-center justify-center active:cursor-grabbing sm:h-[360px] md:h-[420px] lg:h-[500px]"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/[0.05] blur-[50px]" />

                <Globe
                  ref={globeEl}
                  onGlobeReady={handleGlobeReady}
                  width={dimensions.width}
                  height={dimensions.height}
                  globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                  bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                  backgroundColor="rgba(0,0,0,0)"
                  showAtmosphere={true}
                  atmosphereColor="#5d7ca6"
                  atmosphereAltitude={0.12}
                  arcsData={routes}
                  arcColor="color"
                  arcAltitude={0.16}
                  arcStroke={0.45}
                  arcDashLength={0.32}
                  arcDashGap={0.18}
                  arcDashInitialGap={(d) => d.dashOffset}
                  arcDashAnimateTime={2200}
                  pointsData={portsData}
                  pointLat="lat"
                  pointLng="lng"
                  pointColor="color"
                  pointAltitude={0.015}
                  pointRadius="size"
                  pointsMerge={false}
                  ringsData={ringsData}
                  ringLat="lat"
                  ringLng="lng"
                  ringColor={(d) => () => d.color}
                  ringMaxRadius={2.8}
                  ringPropagationSpeed={1}
                  ringRepeatPeriod={1800}
                  pointLabel={(d) => `
                    <div
                      style="
                        padding: 8px 10px;
                        border-radius: 8px;
                        background: rgba(11,18,32,.95);
                        color: white;
                        font-family: Arial, sans-serif;
                        box-shadow: 0 8px 30px rgba(0,0,0,.25);
                      "
                    >
                      <div style="font-weight:600;font-size:12px;">
                        ${d.name}
                      </div>
                      <div style="margin-top:2px;font-size:10px;color:#94a3b8;">
                        ${d.country}
                      </div>
                    </div>
                  `}
                />
              </div>

              {/* bottom badges */}
              <div className="relative z-20 grid grid-cols-2 gap-3 border-t border-white/10 bg-white/[0.03] p-4 sm:p-5">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-3.5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#c7854b]/10">
                    <ShieldCheck className="size-[18px] text-[#c7854b]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-white sm:text-xs">
                      Secure Cargo
                    </h4>
                    <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
                      End-to-end monitoring
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-3.5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#8b3f80]/15">
                    <Clock className="size-[18px] text-[#c7854b]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-white sm:text-xs">
                      24/7 Tracking
                    </h4>
                    <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
                      Real-time updates
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}