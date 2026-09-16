import { Link } from "react-router-dom";
import {
  Anchor,
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Ship,
} from "lucide-react";

const demoRoutes = [
  {
    id: 1,
    origin: "Port of Singapore",
    destination: "Port of Rotterdam",
    service: "Asia - Europe Container Service",
    departure: "Demo: Every Week",
    transit: "Demo transit duration",
    equipment: "Dry Containers / Reefer Containers",
  },
  {
    id: 2,
    origin: "Port of Chittagong",
    destination: "Port of Jebel Ali",
    service: "Regional Container Service",
    departure: "Demo: Scheduled Sailing",
    transit: "Demo transit duration",
    equipment: "Dry Containers",
  },
  {
    id: 3,
    origin: "Port of Shanghai",
    destination: "Port of Los Angeles",
    service: "Transpacific Container Service",
    departure: "Demo: Weekly Sailing",
    transit: "Demo transit duration",
    equipment: "Dry / Special Cargo Containers",
  },
];

const services = [
  {
    icon: Ship,
    title: "Scheduled Sailings",
    description:
      "Plan your container movements around available vessel schedules and estimated departure windows.",
  },
  {
    icon: Anchor,
    title: "Port-to-Port Shipping",
    description:
      "Move cargo between origin and destination ports with reliable container transportation solutions.",
  },
  {
    icon: CalendarDays,
    title: "Shipment Planning",
    description:
      "Coordinate cargo readiness, booking references, and shipping documentation before departure.",
  },
];

export default function Schedules() {
  return (
    <main className="bg-[#f6f9fc] text-[#071525]">

      {/* Hero */}
      <section className="bg-[#071525] text-white">
        <div className="mx-auto max-w-[1380px] px-5 py-20 sm:px-8 lg:px-10">

          <div className="max-w-3xl">

            <p className="flex items-center gap-2 text-sm font-medium text-[#52a9ff]">
              <span className="h-2 w-2 rounded-full bg-[#52a9ff]" />
              Routes & Schedules
            </p>


            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Plan your container journey with{" "}
              <span className="text-[#52a9ff]">
                scheduled sailings
              </span>
            </h1>


            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Explore available shipping routes, vessel schedules, and
              port-to-port container transportation options for your cargo
              planning needs.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/request-quote"
                className="rounded-xl bg-[#1684e8] px-6 py-3 text-sm font-medium text-white hover:bg-[#126ec4]"
              >
                Request a quote
              </Link>


              <Link
                to="/tracking"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Track container
              </Link>

            </div>

          </div>

        </div>
      </section>



      {/* Route Search */}
      <section className="mx-auto max-w-[1380px] px-5 py-16 sm:px-8 lg:px-10">

        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">

          <div className="flex items-center gap-3">
            <MapPin className="text-[#1684e8]" />

            <h2 className="text-2xl font-semibold">
              Find a shipping route
            </h2>
          </div>


          <p className="mt-3 text-sm text-slate-500">
            Demo interface. Connect this section with your sailing schedule
            API to display live routes and vessel availability.
          </p>


          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <input
              placeholder="Origin port"
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1684e8]"
            />


            <input
              placeholder="Destination port"
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#1684e8]"
            />


            <button
              className="rounded-xl bg-[#1684e8] px-5 py-3 text-sm font-medium text-white hover:bg-[#126ec4]"
            >
              Search schedules
            </button>

          </div>

        </div>

      </section>



      {/* Services */}
      <section className="mx-auto max-w-[1380px] px-5 pb-16 sm:px-8 lg:px-10">

        <div className="grid gap-6 md:grid-cols-3">

          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >

                <Icon
                  className="text-[#1684e8]"
                  size={28}
                />


                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </section>



      {/* Routes Table */}
      <section className="mx-auto max-w-[1380px] px-5 pb-20 sm:px-8 lg:px-10">

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <div className="border-b px-6 py-6 sm:px-8">

            <h2 className="text-2xl font-semibold">
              Available Routes
            </h2>


            <p className="mt-2 text-sm text-slate-500">
              Sample route information for design demonstration only.
            </p>

          </div>


          <div className="divide-y">

            {demoRoutes.map((route) => (

              <div
                key={route.id}
                className="p-6 sm:p-8"
              >

                <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">


                  <div>

                    <div className="flex items-center gap-3 text-lg font-semibold">

                      <span>
                        {route.origin}
                      </span>

                      <ArrowRight
                        size={18}
                        className="text-[#1684e8]"
                      />

                      <span>
                        {route.destination}
                      </span>

                    </div>


                    <p className="mt-2 text-sm text-[#1684e8]">
                      {route.service}
                    </p>


                    <p className="mt-3 text-sm text-slate-500">
                      Equipment: {route.equipment}
                    </p>

                  </div>



                  <div className="space-y-2 text-sm text-slate-600">

                    <p className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {route.departure}
                    </p>


                    <p className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {route.transit}
                    </p>

                  </div>


                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* CTA */}
      <section className="mx-auto max-w-[1380px] px-5 pb-20 sm:px-8 lg:px-10">

        <div className="rounded-3xl bg-[#071525] p-8 text-white sm:p-10">

          <h2 className="text-3xl font-semibold">
            Need a specific sailing option?
          </h2>


          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Contact our shipping team with your origin port, destination port,
            cargo type, and preferred departure window.
          </p>


          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1684e8] px-5 py-3 text-sm font-medium"
          >
            Contact team
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}