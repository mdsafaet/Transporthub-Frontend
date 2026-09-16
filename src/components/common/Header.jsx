import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
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

  const { pathname, hash } = useLocation();

  const solidHeader =
    scrolled || pathname !== "/" || menuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const desktopView = window.matchMedia(
      "(min-width: 1280px)",
    );

    const handleScreenChange = () => {
      setMenuOpen(false);
      setServicesOpen(false);
    };

    desktopView.addEventListener("change", handleScreenChange);

    return () => {
      desktopView.removeEventListener(
        "change",
        handleScreenChange,
      );
    };
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
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "auto",
        });
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname, hash]);

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const desktopLinkClass = (active = false) => {
    if (active) {
      return "text-[#93378d]";
    }

    return solidHeader
      ? "text-[#242161] hover:text-[#93378d]"
      : "text-white/90 hover:text-white";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        solidHeader
          ? "bg-white/95 shadow-lg shadow-[#242161]/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[78px] w-full max-w-[1380px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link
          to="/"
          onClick={closeMenus}
          className="flex shrink-0 items-center gap-2 sm:gap-3"
          aria-label="Coast Shipping home"
        >
          <img
            src="/images/Coastshipp.jpeg"
            alt="Coast Shipping"
            width="70"
            height="56"
            className="h-14 w-[70px] rounded-md bg-white object-contain"
          />

          <span
            className={`hidden text-[18px] font-semibold tracking-[-0.04em] sm:block ${
              solidHeader ? "text-[#302d80]" : "text-white"
            }`}
          >
            Coast{" "}
            <span className="text-[#93378d]">
              Shipping
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-[13px] font-medium xl:flex"
        >
          <Link
            to="/"
            onClick={closeMenus}
            aria-current={
              pathname === "/" && !hash ? "page" : undefined
            }
            className={`whitespace-nowrap transition-colors ${
              desktopLinkClass(pathname === "/" && !hash)
            }`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget,
                )
              ) {
                setServicesOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setServicesOpen(false);

                event.currentTarget
                  .querySelector("button")
                  ?.focus();
              }
            }}
          >
            <button
              type="button"
              onClick={() => {
                setServicesOpen((open) => !open);
              }}
              aria-expanded={servicesOpen}
              aria-controls="desktop-services"
              className={`flex items-center gap-1 whitespace-nowrap py-2 transition-colors ${
                desktopLinkClass(
                  pathname === "/" && hash === "#services",
                )
              }`}
            >
              Our Services

              <ChevronDown
                aria-hidden="true"
                className={`size-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                id="desktop-services"
                className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3"
              >
                <div className="overflow-hidden rounded-2xl border border-[#37328b]/10 bg-white p-2 text-[#242161] shadow-2xl shadow-[#242161]/15">
                  {services.map((service, index) => (
                    <Link
                      key={service}
                      to="/#services"
                      onClick={closeMenus}
                      className="group flex items-center gap-3 rounded-xl px-3 py-3 text-xs font-semibold transition hover:bg-[#f4f2fa] hover:text-[#93378d]"
                    >
                      <span
                        aria-hidden="true"
                        className={`size-2 rounded-full ${
                          index % 3 === 0
                            ? "bg-[#37328b]"
                            : index % 3 === 1
                              ? "bg-[#cc7b38]"
                              : "bg-[#a8c94a]"
                        }`}
                      />

                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navigation.map(({ label, to }) => {
            const active = pathname === to;

            return (
              <Link
                key={to}
                to={to}
                onClick={closeMenus}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap transition-colors ${
                  desktopLinkClass(active)
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 xl:flex">
          <Link
            to="/login"
            onClick={closeMenus}
            className={`text-[13px] font-semibold transition-colors ${
              pathname === "/login"
                ? "text-[#93378d]"
                : solidHeader
                  ? "text-[#242161] hover:text-[#93378d]"
                  : "text-white/90 hover:text-white"
            }`}
          >
            Login
          </Link>

          <Link
            to="/request-quote"
            onClick={closeMenus}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#37328b] px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-[#37328b]/20 transition hover:bg-[#93378d] focus:outline-none focus:ring-2 focus:ring-[#93378d] focus:ring-offset-2"
          >
            Request a quote

            <ArrowUpRight
              aria-hidden="true"
              className="size-4"
            />
          </Link>
        </div>

        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => {
            setMenuOpen((open) => !open);
            setServicesOpen(false);
          }}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition xl:hidden ${
            solidHeader
              ? "text-[#302d80] hover:bg-[#37328b]/10"
              : "text-white hover:bg-white/10"
          }`}
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeMenus();

              document
                .getElementById("mobile-menu-toggle")
                ?.focus();
            }
          }}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-78px)] w-full overflow-y-auto overscroll-contain border-t border-white/10 bg-[#242161] px-4 pb-6 pt-3 text-white shadow-2xl xl:hidden"
        >
          <Link
            to="/"
            onClick={closeMenus}
            aria-current={
              pathname === "/" && !hash ? "page" : undefined
            }
            className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
              pathname === "/" && !hash
                ? "bg-white/10 text-[#c9dc71]"
                : "text-white/90 hover:bg-white/10 hover:text-white"
            }`}
          >
            Home
          </Link>

          <div className="py-2">
            <button
              type="button"
              onClick={() => {
                setServicesOpen((open) => !open);
              }}
              aria-expanded={servicesOpen}
              aria-controls="mobile-services"
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Our Services

              <ChevronDown
                aria-hidden="true"
                className={`size-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                id="mobile-services"
                className="ml-4 border-l border-white/15 pl-3"
              >
                {services.map((service, index) => (
                  <Link
                    key={service}
                    to="/#services"
                    onClick={closeMenus}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    <span
                      aria-hidden="true"
                      className={`size-2 rounded-full ${
                        index % 3 === 0
                          ? "bg-[#a8c94a]"
                          : index % 3 === 1
                            ? "bg-[#cc7b38]"
                            : "bg-[#c451a5]"
                      }`}
                    />

                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-white/10 pt-2">
            {navigation.map(({ label, to }) => {
              const active = pathname === to;

              return (
                <Link
                  key={to}
                  to={to}
                  onClick={closeMenus}
                  aria-current={active ? "page" : undefined}
                  className={`block w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-white/10 text-[#c9dc71]"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
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
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#93378d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a8c94a] hover:text-[#242161]"
            >
              Request a quote

              <ArrowUpRight
                aria-hidden="true"
                className="size-4"
              />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}