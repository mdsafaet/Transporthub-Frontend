import React, { useState } from 'react'
import { Check, Search } from "lucide-react";
import SectionKicker from '../common/SectionKicker';
import Reveal from '../common/Reveal';

const TrackingSection = () => {
  const [tracking, setTracking] = useState("");
  const [tracked, setTracked] = useState(false);
  return (
    <section
      id="tracking"
      className="tracking-section relative overflow-hidden bg-[#071525] section-pad"
    >
      <div className="route-map absolute inset-0 opacity-50" />
      <div className="mx-auto grid max-w-[1380px] items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <SectionKicker>Live visibility</SectionKicker>
          <h2 className="max-w-[570px] text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
            Know where it is. <span className="text-[#55afff]">Always.</span>
          </h2>
          <p className="mt-6 max-w-[470px] leading-7 text-white/55">
            Real-time intelligence across every shipment, route, and handoff—so
            your team can make better decisions before they need to.
          </p>
          <div className="mt-8 flex flex-wrap gap-8 text-sm text-white/60">
            <span>
              <Check className="mr-2 inline size-4 text-[#55afff]" />
              End-to-end visibility
            </span>
            <span>
              <Check className="mr-2 inline size-4 text-[#55afff]" />
              Proactive alerts
            </span>
          </div>
        </Reveal>
        <Reveal className="delay-2">
          <div className="relative rounded-[28px] border border-white/10 bg-white/[.07] p-4 shadow-2xl backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs text-white/45">SHIPMENT TRACKER</p>
                <p className="mt-1 font-semibold">Find your cargo</p>
              </div>
              <div className="rounded-full bg-[#173c5b] p-3 text-[#63b7ff]">
                <Search className="size-5" />
              </div>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (tracking.trim()) setTracked(true);
              }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <input
                aria-label="Tracking number"
                required
                value={tracking}
                onChange={(event) => {
                  setTracking(event.target.value);
                  setTracked(false);
                }}
                placeholder="Enter tracking number"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[.07] px-4 py-4 text-sm outline-none placeholder:text-white/30 focus:border-[#48aaff]"
              />
              <button className="rounded-xl bg-[#168af0] px-6 py-4 text-sm font-bold transition hover:bg-[#53b1ff]">
                Track now
              </button>
            </form>
            {tracked && (
              <div
                role="status"
                className="mt-5 rounded-xl border border-[#55afff]/30 bg-[#55afff]/10 p-4 text-sm text-[#a8dbff]"
              >
                Demo shipment <strong>{tracking}</strong> is in transit —
                estimated arrival in 2 days.
              </div>
            )}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/35">
                  Origin
                </p>
                <p className="mt-2 font-semibold">Shanghai, CN</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/35">
                  Destination
                </p>
                <p className="mt-2 font-semibold">Rotterdam, NL</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/35">
                  Status
                </p>
                <p className="mt-2 font-semibold text-[#61b6ff]">In transit</p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-[#168af0]" />
              <div className="h-2 flex-1 rounded-full bg-[#168af0]" />
              <div className="h-2 flex-1 rounded-full bg-[#168af0]" />
              <div className="h-2 flex-1 rounded-full bg-white/15" />
              <span className="ml-2 text-xs text-white/45">72%</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default TrackingSection






