import React from "react";

import {
  ArrowUpRight,
  Ship,
  Plane,
  Truck,
  Warehouse,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import SectionKicker from "../common/SectionKicker";
import Reveal from './../common/Reveal';

const services = [
  [
    "Ocean Freight",
    "Global port-to-port solutions with complete visibility.",
    Ship,
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Air Freight",
    "Time-critical cargo, delivered precisely.",
    Plane,
    "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Land Transport",
    "Flexible road networks across every border.",
    Truck,
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Warehousing",
    "Secure, intelligent storage built for scale.",
    Warehouse,
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Customs Clearance",
    "Expert compliance without the complexity.",
    ShieldCheck,
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Supply Chain Solutions",
    "One connected view of your entire operation.",
    Globe2,
    "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=900&q=80",
  ],
];

export default function ServiceSectionn() {
  return (
    <section
      id="services"
      className="section-pad bg-[#f6f9fc] text-[#071525]"
    >
      <div className="mx-auto max-w-[1380px]">
        <Reveal>
          <SectionKicker>Capabilities</SectionKicker>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-[700px] text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              One partner for every{" "}
              <span className="text-[#1684e8]">move.</span>
            </h2>

            <p className="max-w-[330px] pb-1 text-sm leading-6 text-slate-500">
              From a single container to a global network, our connected
              services are built around your ambition.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([name, desc, Icon, image], index) => (
            <Reveal
              key={name}
              className={`delay-${(index % 3) + 1}`}
            >
              <article className="service-card group relative min-h-[280px] overflow-hidden rounded-[22px] p-7 text-white">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061525] via-[#061525]/65 to-[#061525]/10" />

                <div className="relative flex min-h-[224px] flex-col justify-between">
                  <Icon
                    className="size-7 text-[#65b9ff]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {name}
                    </h3>

                    <p className="mt-2 max-w-[230px] text-sm leading-5 text-white/65">
                      {desc}
                    </p>

                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-5 size-5 text-white/70 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}