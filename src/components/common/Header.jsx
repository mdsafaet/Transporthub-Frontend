import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f7faff]/95 text-[#071525] shadow-lg shadow-slate-950/10 backdrop-blur-xl"
          : "text-white"
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-[1380px] items-center justify-between px-6 lg:px-10">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="TransportNet home"
        >
          <span className="logo-mark">
            <span />
          </span>
          <span className="font-semibold tracking-[-0.04em] text-[19px]">
            Transport<span className="text-[#4fa8ff]">Net</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[13px] font-medium lg:flex">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="#services"
              className="nav-link flex items-center gap-1 py-2"
              onClick={(e) => {
                e.preventDefault();
                setServicesOpen(!servicesOpen);
              }}
            >
              Services <ChevronDown className="size-3.5" />
            </a>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-56 rounded-xl border border-slate-200/20 bg-[#0c2337]/95 p-2 text-white shadow-xl backdrop-blur-xl">
                <a href="#services" className="block rounded-lg px-3 py-2 text-xs transition hover:bg-white/10">Ocean Freight</a>
                <a href="#services" className="block rounded-lg px-3 py-2 text-xs transition hover:bg-white/10">Air Freight</a>
                <a href="#services" className="block rounded-lg px-3 py-2 text-xs transition hover:bg-white/10">Land Transport</a>
                <a href="#services" className="block rounded-lg px-3 py-2 text-xs transition hover:bg-white/10">Warehousing</a>
                <a href="#services" className="block rounded-lg px-3 py-2 text-xs transition hover:bg-white/10">Customs Clearance</a>
              </div>
            )}
          </div>

          {["Tracking", "About", "Insights", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link to="/login" className="text-[13px] font-semibold transition hover:text-[#4fa8ff]">
            Login
          </Link>
 
          <a
            href="#contact"
            className="rounded-full bg-[#1684e8] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#45a8ff]"
          >
            Request a quote <ArrowUpRight className="ml-1 inline size-4" />
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="mobile-menu text-white border-t border-white/10 px-6 pb-6 pt-3 lg:hidden bg-[#0c2337]/95 backdrop-blur-xl"
        >
          <div className="py-2">
            <span className="block py-2 text-sm font-bold text-white/50">Services</span>
            <a onClick={() => setMenuOpen(false)} href="#services" className="block py-2 pl-4 text-sm text-white/80">Ocean Freight</a>
            <a onClick={() => setMenuOpen(false)} href="#services" className="block py-2 pl-4 text-sm text-white/80">Air Freight</a>
            <a onClick={() => setMenuOpen(false)} href="#services" className="block py-2 pl-4 text-sm text-white/80">Land Transport</a>
            <a onClick={() => setMenuOpen(false)} href="#services" className="block py-2 pl-4 text-sm text-white/80">Warehousing</a>
          </div>
          {["Tracking", "About", "Insights", "Contact"].map((item) => (
            <a
              onClick={() => setMenuOpen(false)}
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 text-sm font-medium"
            >
              {item}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-white/10">
            <a onClick={() => setMenuOpen(false)} href="#login" className="block py-2 text-sm font-semibold">
              Login
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="#contact"
              className="rounded-full bg-[#1684e8] px-5 py-3 text-center text-sm font-bold text-white transition"
            >
              Request a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}