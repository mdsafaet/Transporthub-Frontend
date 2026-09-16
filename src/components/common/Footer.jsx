import { Link } from "react-router-dom";

const exploreLinks = [
  { label: "Our Services", to: "/#services" },
  { label: "Routes & Schedules", to: "/schedules" },
  { label: "Container Tracking", to: "/tracking" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  "Container Shipping",
  "Port-to-Port Services",
  "Door-to-Door Transport",
  "Reefer Containers",
  "Special Cargo",
];

export default function Footer() {
  return (
    <footer className="bg-[#06111f] px-6 pb-8 pt-16 text-white lg:px-10">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="flex items-center gap-3"
              aria-label="TransportNet home"
            >
              <span className="logo-mark" aria-hidden="true">
                <span />
              </span>

              <span className="text-[19px] font-semibold tracking-[-0.04em]">
                Transport<span className="text-[#4fa8ff]">Net</span>
              </span>
            </Link>

            <p className="mt-5 max-w-[280px] text-sm leading-6 text-white/45">
              Connecting ports and businesses through scheduled
              container shipping and coordinated inland transport.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">
              Explore
            </p>

            {exploreLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="mb-3 block text-sm text-white/65 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Shipping services">
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">
              Services
            </p>

            {serviceLinks.map((service) => (
              <Link
                key={service}
                to="/#services"
                className="mb-3 block text-sm text-white/65 hover:text-white"
              >
                {service}
              </Link>
            ))}
          </nav>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/35">
              Contact
            </p>

            {/* Replace these details with your business information. */}
            <a
              href="mailto:hello@cargosphere.global"
              className="block break-words text-sm text-white/65 hover:text-white"
            >
              hello@cargosphere.global
            </a>

            <a
              href="tel:+12125550148"
              className="mt-3 block text-sm text-white/65 hover:text-white"
            >
              +1 212 555 0148
            </a>

            <p className="mt-3 text-sm leading-6 text-white/65">
              New York · Rotterdam · Singapore
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-white/35 sm:flex-row">
          <span>
            © {new Date().getFullYear()} TransportNet. All rights reserved.
          </span>

          <p className="text-xs text-slate-400">
            Developed by{" "}
            <a
              href="https://agni.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1684e8] hover:underline"
            >
              Agni System Plc
            </a>
          </p>

          <span>Privacy · Terms · Security</span>
        </div>
      </div>
    </footer>
  );
}