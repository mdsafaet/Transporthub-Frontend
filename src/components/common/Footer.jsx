import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "Container Shipping",
  "Port-to-Port Services",
  "Door-to-Door Transport",
  "Reefer Containers",
  "Special Cargo",
];

const navigation = [
  { label: "Home", to: "/" },
  { label: "Routes & Schedules", to: "/schedules" },
  { label: "Container Tracking", to: "/tracking" },
  { label: "About Us", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-slate-800 border-t border-slate-200">
      {/* Main Footer Content */}
      <div className="mx-auto w-full px-6 py-16 md:px-12 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Column 1: Brand & Bio (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3.5 focus:outline-none">
              <img
                src="/images/Coastshipp.jpeg"
                alt="Coast Shipping"
                className="h-12 w-14 rounded-lg object-contain bg-slate-100 p-1 border border-slate-200"
              />
              <span className="text-xl font-semibold tracking-tight text-slate-900">
                Coast <span className="text-[#8b3f80]">Shipping</span>
              </span>
            </Link>

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Global container shipping and end-to-end logistics solutions connecting ports worldwide with precision, transparency, and reliability.
            </p>

            {/* Quick Contact Details */}
            <div className="flex flex-col gap-3 pt-2 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-[#8b3f80]" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-[#8b3f80]" />
                <span>+880 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-[#8b3f80]" />
                <span>support@coastshipping.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {navigation.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-slate-600 transition-colors hover:text-[#8b3f80]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/#services"
                    className="text-sm text-slate-600 transition-colors hover:text-[#8b3f80]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter / Quote Callout */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Get Started
            </h3>
            <p className="text-sm text-slate-600">
              Ready to ship your cargo? Request a fast, transparent quote today.
            </p>
            <Link
              to="/request-quote"
              className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#8b3f80] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[#c7854b] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8b3f80]"
            >
              Request a quote
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-12 lg:px-16">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Coast Shipping. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link to="/privacy" className="transition hover:text-slate-800">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-slate-800">
              Terms of Service
            </Link>
            <Link to="/cookies" className="transition hover:text-slate-800">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}