import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, ArrowUpRight, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Projects Done", value: "50+" },
  { label: "Clients Worldwide", value: "20+" },
  { label: "Own Vehicles", value: "40+" },
  { label: "Network Partners", value: "25+" },
];

const arcsData = [
  { startLat: 23.8103, startLng: 90.4125, endLat: 1.2902, endLng: 103.8519, color: ["#8b3f80", "#c7854b"] }, 
  { startLat: 1.2902, startLng: 103.8519, endLat: 31.2304, endLng: 121.4737, color: ["#c7854b", "#8b3f80"] }, 
  { startLat: 31.2304, startLng: 121.4737, endLat: 37.7749, endLng: -122.4194, color: ["#8b3f80", "#3b82f6"] }, 
  { startLat: 23.8103, startLng: 90.4125, endLat: 25.2048, endLng: 55.2708, color: ["#8b3f80", "#c7854b"] }, 
  { startLat: 25.2048, startLng: 55.2708, endLat: 51.5074, endLng: -0.1278, color: ["#c7854b", "#8b3f80"] }, 
];

export default function AboutUs() {
  const globeEl = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 450, height: 380 });
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: 380,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleGlobeReady = () => {
    const globe = globeEl.current;
    if (!globe) return;

    const controls = globe.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.8;
      controls.enableZoom = false;
    }
    globe.pointOfView({ altitude: 2.2 }, 0);
  };

  return (
    <section className="relative w-full bg-white py-16 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden font-['Exo',sans-serif]">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Information & Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[#8b3f80]/10 px-3.5 py-1.5 rounded-full w-fit mb-4">
              <Globe2 className="size-4 text-[#8b3f80]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8b3f80]">
                ABOUT COAST SHIPPING
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Connecting Global Ports with Precision & Trust
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
              At Coast Shipping, we deliver state-of-the-art maritime and container transport infrastructure. By uniting advanced logistics networks with real-time vessel visibility, we ensure your cargo traverses global supply chains securely and on schedule.
            </p>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Our seasoned team is dedicated to transparent operations, customized freight solutions, and dependable door-to-door delivery designed to elevate your business performance worldwide.
            </p>

            {/* Metrics Stats Grid (Static Numbers) */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#8b3f80]">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="mt-8 sm:mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#8b3f80] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg  transition-all hover:bg-[#c7854b] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8b3f80]"
              >
                Explore our services
                <ArrowUpRight className="size-4 sm:size-5" />
              </Link>
            </div>
          </div>

          {/* Right Side: Interactive 3D Globe with Moving Sea Routes */}
          <div className="lg:col-span-6 relative flex items-center justify-center order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b3f80]/10 to-blue-500/10 rounded-3xl filter blur-2xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-500/20 border border-slate-800 flex flex-col items-center overflow-hidden"
            >
              <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                <span className="size-2 rounded-full bg-[#c7854b] animate-pulse" />
                Live Moving Sea Route Network
              </div>

              {/* Globe Container with Moving Arcs */}
              <div ref={containerRef} className="relative my-4 sm:my-6 w-full h-[320px] sm:h-[380px] flex items-center justify-center cursor-grab active:cursor-grabbing">
                <Globe
                  ref={globeEl}
                  onGlobeReady={handleGlobeReady}
                  width={dimensions.width}
                  height={dimensions.height}
                  globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                  backgroundColor="rgba(0, 0, 0, 0)"
                  arcsData={arcsData}
                  arcColor="color"
                  arcDashLength={0.5}
                  arcDashGap={0.3}
                  arcDashInitialGap={() => Math.random()}
                  arcDashAnimateTime={1000}
                  atmosphereColor="#3b82f6"
                  atmosphereAltitude={0.2}
                />
              </div>

              {/* Bottom Badges */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mt-2">
                <div className="flex items-center gap-3 bg-white/5 p-3 sm:p-3.5 rounded-xl border border-white/10">
                  <ShieldCheck className="size-5 text-[#c7854b] shrink-0" />
                  <div className="text-left">
                    <h4 className="text-xs sm:text-sm font-bold text-white">Secure Cargo</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">End-to-end monitoring</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 sm:p-3.5 rounded-xl border border-white/10">
                  <Clock className="size-5 text-[#c7854b] shrink-0" />
                  <div className="text-left">
                    <h4 className="text-xs sm:text-sm font-bold text-white">24/7 Tracking</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">Real-time updates</p>
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