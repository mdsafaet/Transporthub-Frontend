import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Ship,
  Anchor,
  Truck,
  Snowflake,
  Package,
  CalendarDays,
} from "lucide-react";
import SectionKicker from "../common/SectionKicker";
import Reveal from "../common/Reveal";

const services = [
  {
    name: "Container Shipping",
    description:
      "Scheduled ocean transport for your containerized cargo.",
    Icon: Ship,
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=80",
    to: "/request-quote",
  },
  {
    name: "Port-to-Port Services",
    description:
      "Coordinate your shipment between origin and destination ports.",
    Icon: Anchor,
    image:
      "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=900&q=80",
    to: "/request-quote",
  },
  {
    name: "Door-to-Door Transport",
    description:
      "Connect ocean shipping with inland collection and delivery.",
    Icon: Truck,
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
    to: "/request-quote",
  },
  {
    name: "Reefer Containers",
    description:
      "Discuss temperature-controlled transport for sensitive cargo.",
    Icon: Snowflake,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    to: "/request-quote",
  },
  {
    name: "Special Cargo",
    description:
      "Plan equipment and handling for cargo with specific requirements.",
    Icon: Package,
    image:
      "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=900&q=80",
    to: "/request-quote",
  },
  {
    name: "Routes & Schedules",
    description:
      "Explore port connections and plan your next sailing.",
    Icon: CalendarDays,
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=80",
    to: "/schedules",
  },
];

export default function ServiceSectionn() {
  return (
    <section
      id="services"
      className="section-pad bg-[#f6f9fc] text-[#071525]"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1380px]">
        <Reveal>
          <SectionKicker>Our services</SectionKicker>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2
              id="services-heading"
              className="max-w-[700px] text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
            >
              Container shipping.
              <br />
              <span className="text-[#1684e8]">
                Connected to your business.
              </span>
            </h2>

            <p className="max-w-[330px] pb-1 text-sm leading-6 text-slate-500">
              From port connections to inland delivery, explore
              services that support every stage of your container’s
              journey.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(
            ({ name, description, Icon, image, to }, index) => (
              <Reveal
                key={name}
                className={`h-full delay-${(index % 3) + 1}`}
              >
                <article className="service-card group relative h-full min-h-[280px] overflow-hidden rounded-[22px] text-white">
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#061525] via-[#061525]/65 to-[#061525]/10"
                  />

                  <Link
                    to={to}
                    aria-label={
                      to === "/schedules"
                        ? "Explore routes and schedules"
                        : `Request a quote for ${name}`
                    }
                    className="relative flex h-full min-h-[280px] flex-col justify-between gap-6 rounded-[22px] p-7 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#65b9ff]"
                  >
                    <Icon
                      className="size-7 text-[#65b9ff]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {name}
                      </h3>

                      <p className="mt-2 max-w-[260px] text-sm leading-5 text-white/75">
                        {description}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-white/90">
                        {to === "/schedules"
                          ? "View schedules"
                          : "Request a quote"}

                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-4 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}