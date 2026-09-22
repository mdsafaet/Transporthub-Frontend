import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#services" },
  { label: "Routes & Schedules", to: "/schedules" },
  { label: "Container Tracking", to: "/tracking" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-lg shadow-blue-500/10 backdrop-blur-md">
      {/* Full width container with edge padding */}
      <div className="flex h-24 w-full items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-3.5 focus:outline-none"
          aria-label="Coast Shipping home"
        >
          <img
            src="/images/Coastshipp.jpeg"
            alt="Coast Shipping"
            className="h-14 w-16 rounded-lg object-contain bg-white"
          />
          <span className="text-xl font-semibold tracking-tight text-slate-900">
            Coast <span className="text-[#8b3f80]">Shipping</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden items-center gap-10 lg:flex">
          {navigation.map(({ label, to }) => {
            const isActive = pathname === to || (to.includes("#") && hash === "#services");
            return (
              <Link
                key={to}
                to={to}
                className={`text-[15px] font-medium transition-colors hover:text-[#8b3f80] ${
                  isActive ? "text-[#8b3f80]" : "text-slate-700"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            to="/login"
            className="text-[15px] font-medium text-slate-700 transition-colors hover:text-[#8b3f80]"
          >
            Login
          </Link>

          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#8b3f80] px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[#c7854b] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8b3f80] focus:ring-offset-2"
          >
            Request a quote
            <ArrowUpRight className="size-4.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="flex size-11 items-center justify-center rounded-lg text-slate-900 transition hover:bg-slate-100 lg:hidden"
        >
          {menuOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-slate-100 bg-white px-8 py-8 shadow-2xl lg:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-5">
            {navigation.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-slate-800 transition hover:text-[#8b3f80]"
              >
                {label}
              </Link>
            ))}
            <div className="my-2 h-px bg-slate-100" />
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-slate-800 transition hover:text-[#8b3f80]"
            >
              Login
            </Link>
            <Link
              to="/request-quote"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2.5 rounded-full bg-[#8b3f80] px-6 py-3.5 text-center text-base font-semibold text-white shadow-lg transition hover:bg-[#c7854b]"
            >
              Request a quote
              <ArrowUpRight className="size-5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}