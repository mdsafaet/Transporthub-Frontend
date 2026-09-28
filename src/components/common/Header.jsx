import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { label: "Services", to: "/#" },
  { label: "Routes & Schedules", to: "/#" },
  { label: "Container Tracking", to: "/#" },
  { label: "About", to: "/#" },
  { label: "Insights", to: "/#" },
  { label: "Contact", to: "/#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeMenu = () => setMenuOpen(false);

    desktop.addEventListener("change", closeMenu);

    return () => {
      desktop.removeEventListener("change", closeMenu);
    };
  }, []);

  const isActive = (to) =>
    to === "/#services"
      ? pathname === "/" && hash === "#services"
      : pathname === to;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white font-['Exo',sans-serif] shadow-lg shadow-blue-500/10">
      <div className="mx-auto flex h-[100px] w-full max-w-[1700px] items-center justify-between gap-5 px-2 sm:px-4 lg:px-4 xl:h-[120px]">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Coast Shipping home"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b3f80]"
        >
          <img
            src="/images/Coastshipp.jpeg"
            alt="Coast Shipping"
            width={190}
            height={100}
            className="h-[80px] w-[160px] object-contain xl:h-[100px] xl:w-[190px]"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden flex-1 items-center justify-center gap-4 xl:flex 2xl:gap-7"
        >
          {navigation.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              aria-current={isActive(to) ? "page" : undefined}
              className={`whitespace-nowrap py-3 text-sm font-medium transition-colors hover:text-[#8b3f80] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b3f80] ${
                isActive(to) ? "text-[#8b3f80]" : "text-slate-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 xl:flex">
          <Link
            to="/login"
            className="py-3 text-sm font-medium text-slate-700 transition-colors hover:text-[#8b3f80] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b3f80]"
          >
            Login
          </Link>

          <Link
            to="/request-quote"
            className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#8b3f80] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c7854b] hover:text-[#18324f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b3f80]"
          >
            Request a quote
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <button
          id="coast-menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="coast-mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="flex size-11 shrink-0 items-center justify-center rounded-lg text-slate-900 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b3f80] xl:hidden"
        >
          {menuOpen ? (
            <X size={26} aria-hidden="true" />
          ) : (
            <Menu size={26} aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="coast-mobile-navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMenuOpen(false);
              document.getElementById("coast-menu-toggle")?.focus();
            }
          }}
          className="fixed inset-x-0 bottom-0 top-[100px] flex flex-col justify-between overflow-y-auto overscroll-contain border-t border-slate-100 bg-white px-6 py-6 xl:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-2"
          >
            {navigation.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(to) ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-lg font-medium transition-colors hover:bg-slate-50 hover:text-[#8b3f80] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b3f80] ${
                  isActive(to)
                    ? "bg-[#8b3f80]/5 text-[#8b3f80]"
                    : "text-slate-800"
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-3 border-t border-slate-200 px-3 py-4 text-lg font-medium text-slate-800 hover:text-[#8b3f80] focus-visible:outline-2 focus-visible:outline-[#8b3f80]"
            >
              Login
            </Link>
          </nav>

          <Link
            to="/request-quote"
            onClick={() => setMenuOpen(false)}
            className="mt-8 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#8b3f80] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#c7854b] hover:text-[#18324f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b3f80]"
          >
            Request a quote
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      )}
    </header>
  );
}