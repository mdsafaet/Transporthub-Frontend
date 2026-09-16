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
    <footer className="bg-[#17152f] px-6 pb-8 pt-16 text-white lg:px-10">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              aria-label="Coast Shipping home"
              className="inline-flex items-center gap-3"
            >
              <img
                src="/images/Coastshipp.jpeg"
                alt=""
                width="70"
                height="56"
                className="h-14 w-[70px] rounded-md bg-white object-contain"
              />

              <span className="text-[19px] font-semibold tracking-[-0.04em] text-white">
                Coast{" "}
                <span className="text-[#c451a5]">
                  Shipping
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-[310px] text-sm leading-6 text-white/60">
              Connecting ports and businesses through scheduled
              container shipping, reliable cargo handling, and
              coordinated inland transportation.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-10 rounded-full bg-[#37328b]"
              />
              <span
                aria-hidden="true"
                className="h-1.5 w-7 rounded-full bg-[#cc7b38]"
              />
              <span
                aria-hidden="true"
                className="h-1.5 w-7 rounded-full bg-[#a8c94a]"
              />
              <span
                aria-hidden="true"
                className="h-1.5 w-10 rounded-full bg-[#93378d]"
              />
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Explore
            </p>

            {exploreLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="mb-3 block text-sm text-white/65 transition-colors hover:text-[#c9dc71]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Shipping services">
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Services
            </p>

            {serviceLinks.map((service) => (
              <Link
                key={service}
                to="/#services"
                className="mb-3 block text-sm text-white/65 transition-colors hover:text-[#c9dc71]"
              >
                {service}
              </Link>
            ))}
          </nav>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-white/40">
              Get in touch
            </p>

            <p className="max-w-[260px] text-sm leading-6 text-white/65">
              Speak with our shipping team about bookings,
              schedules, documentation, and container transport.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#c9dc71] hover:bg-[#c9dc71] hover:text-[#242161]"
            >
              Contact our team
            </Link>

            <Link
              to="/request-quote"
              className="mt-3 block text-sm font-semibold text-[#c451a5] transition hover:text-[#c9dc71]"
            >
              Request a shipping quote
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} Coast Shipping. All
            rights reserved.
          </span>

          <p>
            Developed by{" "}
            <a
              href="https://agni.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#c451a5] transition hover:text-[#c9dc71] hover:underline"
            >
              Agni System Plc
            </a>
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link
              to="/privacy"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              to="/security"
              className="transition hover:text-white"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}