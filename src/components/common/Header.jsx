import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { label: "Services", to: "#" },
  { label: "Routes & Schedules", to: "#" },
  { label: "Container Tracking", to: "#" },
  { label: "About", to: "#" },
  { label: "Insights", to: "#" },
  { label: "Contact", to: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-lg shadow-blue-500/10 backdrop-blur-md">
      {/* Main Header Container */}
      <div className="mx-auto flex h-20 md:h-22 lg:h-24 w-full items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16">
        
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-3 focus:outline-none"
          aria-label="Coast Shipping home"
        >
          <img
            src="/images/Coastshipp.jpeg"
            alt="Coast Shipping"
            className="h-11 w-12 sm:h-12 sm:w-14 md:h-14 md:w-16 rounded-lg object-contain bg-white"
          />
          <span className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-slate-900">
            Coast <span className="text-[#8b3f80]">Shipping</span>
          </span>
        </Link>

        {/* Centered Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden items-center gap-5 lg:gap-7 xl:gap-8 lg:flex">
          {navigation.map(({ label, to }) => {
            const isActive = pathname === to || (to.includes("#") && hash === "#services");
            return (
              <Link
                key={to}
                to={to}
                className={`text-sm md:text-[15px] font-medium transition-colors hover:text-[#8b3f80] ${
                  isActive ? "text-[#8b3f80]" : "text-slate-700"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            to="/login"
            className="text-[15px] font-medium text-slate-700 transition-colors hover:text-[#8b3f80]"
          >
            Login
          </Link>

          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#8b3f80] px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition-all hover:bg-[#c7854b] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8b3f80] focus:ring-offset-2"
          >
            Request a quote
            <ArrowUpRight className="size-4.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="relative z-[60] flex size-10 sm:size-11 items-center justify-center rounded-lg text-slate-900 transition hover:bg-slate-100 lg:hidden"
        >
          {menuOpen ? <X className="size-6 sm:size-7" /> : <Menu className="size-6 sm:size-7" />}
        </button>
      </div>

      {/* Full-Screen Mobile & Tablet Menu Overlay (True 100vh / 100dvh coverage) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 h-dvh w-screen flex flex-col justify-between bg-white px-6 pt-28 pb-12 overflow-y-auto lg:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-6">
            {navigation.map(({ label, to }) => {
              const isActive = pathname === to || (to.includes("#") && hash === "#services");
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl sm:text-2xl font-semibold transition hover:text-[#8b3f80] ${
                    isActive ? "text-[#8b3f80]" : "text-slate-800"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="my-2 h-px bg-slate-200" />
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-xl sm:text-2xl font-semibold text-slate-800 transition hover:text-[#8b3f80]"
            >
              Login
            </Link>
          </nav>

          <div className="mt-8">
            <Link
              to="/request-quote"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#8b3f80] px-6 py-4 text-center text-base sm:text-lg font-semibold text-white shadow-lg transition hover:bg-[#c7854b]"
            >
              Request a quote
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}