import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const services = [
  "Container Shipping",
  "Port-to-Port Services",
  "Door-to-Door Transport",
  "Reefer Containers",
  "Special Cargo",
];

const navigation = [
  { label: "Routes & Schedules", to: "/schedules" },
  { label: "Container Tracking", to: "/tracking" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const { pathname, hash, key } = useLocation();
  const solidHeader = scrolled || pathname !== "/" || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");

    const handleResize = () => {
      setMenuOpen(false);
      setServicesOpen(false);
    };

    desktop.addEventListener("change", handleResize);

    return () => desktop.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);

    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const section = document.getElementById(
          decodeURIComponent(hash.slice(1)),
        );

        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        section?.scrollIntoView({
          behavior: reducedMotion ? "instant" : "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        solidHeader
          ? "bg-[#f7faff]/95 text-[#071525] shadow-lg shadow-slate-950/10 backdrop-blur-xl"
          : "text-white"
      }`}
    >
      <div className="mx-auto flex h-[78px] w-full max-w-[1380px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* Logo */}
<Link
  to="/"
  onClick={closeMenus}
  className="flex shrink-0 items-center gap-3"
  aria-label="Coast Shipping home"
>
  <img
    src="/images/Coastshipp.jpeg"
    alt=""
    className="h-16 w-16 "
  />

  <span className="text-[20px] font-semibold tracking-[-0.04em]">
    Coast <span className="text-[#4f78ff]">Shipping</span>
  </span>
</Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 text-[13px] font-medium xl:flex"
        >
          <Link
            to="/"
            onClick={closeMenus}
            aria-current={pathname === "/" && !hash ? "page" : undefined}
            className={`nav-link whitespace-nowrap ${
              pathname === "/" && !hash ? "text-[#1684e8]" : ""
            }`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setServicesOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setServicesOpen(false);
                event.currentTarget.querySelector("button")?.focus();
              }
            }}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="desktop-services"
              onClick={() => setServicesOpen((open) => !open)}
              className="nav-link flex items-center gap-1 whitespace-nowrap py-2"
            >
              Our Services
              <ChevronDown
                aria-hidden="true"
                className={`size-3.5 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                id="desktop-services"
                className="absolute left-0 top-full w-56 rounded-xl border border-white/10 bg-[#0c2337] p-2 text-white shadow-xl"
              >
                {services.map((service) => (
                  <Link
                    key={service}
                    to="/#services"
                    onClick={closeMenus}
                    className="block rounded-lg px-3 py-3 text-xs transition hover:bg-white/10"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navigation.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMenus}
              aria-current={pathname === to ? "page" : undefined}
              className={`nav-link whitespace-nowrap ${
                pathname === to ? "text-[#1684e8]" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-5 xl:flex">
          <Link
            to="/login"
            onClick={closeMenus}
            className="text-[13px] font-semibold transition hover:text-[#4fa8ff]"
          >
            Login
          </Link>

          <Link
            to="/request-quote"
            onClick={closeMenus}
            className="whitespace-nowrap rounded-full bg-[#1684e8] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#45a8ff]"
          >
            Request a quote
            <ArrowUpRight
              aria-hidden="true"
              className="ml-1 inline size-4"
            />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          type="button"
          className="flex size-11 shrink-0 items-center justify-center rounded-lg xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </div>

      {/* Full-width mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeMenus();
              document.getElementById("mobile-menu-toggle")?.focus();
            }
          }}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-78px)] w-full overflow-y-auto overscroll-contain border-t border-white/10 bg-[#0c2337] px-4 pb-6 pt-3 text-white shadow-xl xl:hidden"
        >
          <Link
            to="/"
            onClick={closeMenus}
            aria-current={pathname === "/" && !hash ? "page" : undefined}
            className={`block rounded-lg px-3 py-3 text-sm font-medium ${
              pathname === "/" && !hash
                ? "bg-white/10 text-[#79c2ff]"
                : "hover:bg-white/5"
            }`}
          >
            Home
          </Link>

          <div className="py-2">
            <p className="px-3 py-2 text-sm font-bold text-white/60">
              Our Services
            </p>

            {services.map((service) => (
              <Link
                key={service}
                to="/#services"
                onClick={closeMenus}
                className="block w-full rounded-lg px-3 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#79c2ff]"
              >
                {service}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 pt-2">
            {navigation.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={closeMenus}
                aria-current={pathname === to ? "page" : undefined}
                className={`block w-full rounded-lg px-3 py-3 text-sm font-medium transition ${
                  pathname === to
                    ? "bg-white/10 text-[#79c2ff]"
                    : "text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <Link
              to="/login"
              onClick={closeMenus}
              className="flex min-h-12 w-full items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Login
            </Link>

            <Link
              to="/request-quote"
              onClick={closeMenus}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1684e8] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#45a8ff]"
            >
              Request a quote
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}