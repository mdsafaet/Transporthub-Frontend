import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Compass, MapPin, ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function ContainerTracking() {
  const [activeTab, setActiveTab] = useState("track"); // 'track' or 'quote'
  const [trackingId, setTrackingId] = useState("");
  const [origin, setOrigin] = useState("Chittagong (CGP)");
  const [destination, setDestination] = useState("Singapore (SIN)");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700&display=swap');
        .exo-font {
          font-family: 'Exo', sans-serif;
        }
      `}</style>

      <section className="relative w-full bg-slate-950 py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden exo-font">
        
        {/* Ambient lighting backdrop */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#8b3f80]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-[1500px] relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#8b3f80]/20 px-3.5 py-1.5 rounded-full w-fit mb-4 border border-[#8b3f80]/30">
              <Compass className="size-4 text-[#c7854b]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c7854b]">
                GLOBAL LOGISTICS HUB
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Real-Time Tracking & Route Planner
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400">
              Monitor your container shipments live across global sea lanes or instantly calculate transit routes and schedules.
            </p>

            {/* Switcher Tabs */}
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveTab("track")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "track"
                    ? "bg-[#8b3f80] text-white shadow-lg shadow-[#8b3f80]/30"
                    : "bg-slate-900 text-slate-400 border border-white/10 hover:text-white"
                }`}
              >
                Track Shipment
              </button>
              <button
                onClick={() => setActiveTab("quote")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "quote"
                    ? "bg-[#8b3f80] text-white shadow-lg shadow-[#8b3f80]/30"
                    : "bg-slate-900 text-slate-400 border border-white/10 hover:text-white"
                }`}
              >
                Instant Route Quote[cite: 3]
              </button>
            </div>
          </div>

          {/* Main Interactive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Interactive Form Box (Inspired by Source[cite: 3]) */}
            <div className="lg:col-span-5 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl shadow-black/50">
              {activeTab === "track" ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Container or BL Tracking</h3>
                    <p className="text-xs text-slate-400">Enter your container number, booking ID, or Bill of Lading.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Tracking Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={trackingId}
                          onChange={(e) => setTrackingId(e.target.value)}
                          placeholder="e.g., CSXU9823104"
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#c7854b] transition-colors"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-slate-500" />
                      </div>
                    </div>

                    <button
                      onClick={() => alert(`Tracking status requested for: ${trackingId || "Sample Container"}`)}
                      className="w-full py-4 rounded-xl bg-[#8b3f80] hover:bg-[#c7854b] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#8b3f80]/30 transition-all flex items-center justify-center gap-2"
                    >
                      Track Live Status
                      <ArrowRight className="size-4" />
                    </button>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="size-4 text-[#c7854b]" />
                      <span>24/7 Satellite IoT container monitoring</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="size-4 text-[#c7854b]" />
                      <span>Real-time port customs update alerts</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Instant Route Quote</h3>
                    <p className="text-xs text-slate-400">Select origin and destination ports for transit estimates[cite: 3].</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Origin Port
                      </label>
                      <input
                        type="text"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#c7854b]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Destination Port
                      </label>
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#c7854b]"
                      />
                    </div>

                    <button
                      onClick={() => alert(`Calculating route from ${origin} to ${destination}...`)}
                      className="w-full py-4 rounded-xl bg-[#8b3f80] hover:bg-[#c7854b] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#8b3f80]/30 transition-all flex items-center justify-center gap-2"
                    >
                      Calculate Route & Rates[cite: 3]
                      <ArrowRight className="size-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center">
                    Note: Verification process for new enterprise accounts takes up to 3 working days[cite: 3].
                  </p>
                </div>
              )}
            </div>

            {/* Right Side: Visual Route Map (Inspired by Source[cite: 2]) */}
            <div className="lg:col-span-7 relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 overflow-hidden flex flex-col justify-between min-h-[420px]">
              
              {/* Map Header / Title */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 z-10">
                <div>
                  <span className="text-xs font-bold text-[#c7854b] uppercase tracking-wider">Active Sea Lanes</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Asia - Middle East - Africa Corridor</h3>
                </div>
                
                {/* Legend Box (Inspired by Source[cite: 2]) */}
                <div className="bg-slate-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-xs space-y-1">
                  <div className="flex items-center justify-between gap-4 text-slate-300">
                    <span className="font-medium">EASTBOUND</span>
                    <span className="text-[#3b82f6] font-bold">➔</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-slate-300">
                    <span className="font-medium">WESTBOUND</span>
                    <span className="text-[#8b3f80] font-bold">←</span>
                  </div>
                </div>
              </div>

              {/* Stylized Vector Route Graphic Representation */}
              <div className="relative my-8 h-56 w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                
                {/* Simulated SVG Sea Route Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 250" fill="none">
                  {/* Eastbound Line */}
                  <path
                    d="M 80,180 Q 250,50 520,100"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    className="animate-pulse"
                  />
                  {/* Westbound Line */}
                  <path
                    d="M 520,120 Q 300,220 80,200"
                    stroke="#8b3f80"
                    strokeWidth="2.5"
                  />
                </svg>

                {/* Major Port Nodes */}
                <div className="absolute left-[10%] bottom-[20%] flex flex-col items-center">
                  <div className="size-3.5 rounded-full bg-[#8b3f80] animate-ping absolute" />
                  <div className="size-3.5 rounded-full bg-[#8b3f80] border-2 border-white shadow-md relative z-10" />
                  <span className="text-[11px] font-bold text-white mt-1.5 bg-slate-950/80 px-2 py-0.5 rounded">Chittagong</span>
                </div>

                <div className="absolute left-[45%] top-[25%] flex flex-col items-center">
                  <div className="size-3 rounded-full bg-[#c7854b] border-2 border-white shadow-md relative z-10" />
                  <span className="text-[11px] font-bold text-white mt-1.5 bg-slate-950/80 px-2 py-0.5 rounded">Jebel Ali</span>
                </div>

                <div className="absolute right-[12%] top-[35%] flex flex-col items-center">
                  <div className="size-3.5 rounded-full bg-[#3b82f6] border-2 border-white shadow-md relative z-10" />
                  <span className="text-[11px] font-bold text-white mt-1.5 bg-slate-950/80 px-2 py-0.5 rounded">Durban / Cape Town</span>
                </div>
              </div>

              {/* Bottom Transit Info Summary */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 z-10">
                <div className="bg-slate-950/50 p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">Avg. Transit</span>
                  <span className="text-xs sm:text-sm font-bold text-white">14 - 21 Days</span>
                </div>
                <div className="bg-slate-950/50 p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">Vessel Status</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-400 flex items-center gap-1">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" /> On Schedule
                  </span>
                </div>
                <div className="bg-slate-950/50 p-3 rounded-xl border border-white/5">
                  <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">Security</span>
                  <span className="text-xs sm:text-sm font-bold text-white">ISO Certified</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}