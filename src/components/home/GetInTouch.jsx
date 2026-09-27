import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function GetInTouch() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20 exo-font overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px]">

        <div className="flex w-full flex-col lg:flex-row lg:items-center lg:gap-0">

          {/* LEFT IMAGE */}
          <div
            className="
              relative
              w-full
              h-[280px]
              sm:h-[340px]
              md:h-[380px]
              lg:h-[400px]
              lg:w-1/2
              shrink-0
              overflow-hidden
              bg-slate-900
              curved-image-container
            "
          >
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Shipping Container Terminal Logistics"
              className="h-full w-full object-cover object-center brightness-95"
            />

            <div className="absolute inset-0 bg-slate-950/30" />

            {/* GET IN */}
            <div
              className="
                absolute inset-0
                flex items-center justify-center
                lg:justify-end
                lg:pr-4
                xl:pr-5
              "
            >
              <h2
                className="
                  whitespace-nowrap
                  text-[42px]
                  sm:text-[52px]
                  md:text-[58px]
                  lg:text-[60px]
                  xl:text-[64px]
                  font-normal
                  leading-none
                  tracking-wide
                  text-white
                "
              >
                Get In
              </h2>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              flex
              w-full
              lg:w-1/2
              items-center
              justify-center
              py-8
              text-center

              lg:justify-start
              lg:py-0
              lg:pl-4
              xl:pl-5
              lg:text-left
            "
          >
            <div className="flex flex-col items-center lg:items-start">

              {/* TOUCH + ARROW */}
              <div className="flex items-center gap-4 sm:gap-5 whitespace-nowrap">

                <h2
                  className="
                    text-[42px]
                    sm:text-[52px]
                    md:text-[58px]
                    lg:text-[60px]
                    xl:text-[64px]
                    font-bold
                    leading-none
                    tracking-tight
                    text-blue-950
                  "
                >
                  Touch
                </h2>

                <Link
                  to="/contact"
                  aria-label="Go to contact page"
                  className="
                    flex
                    size-11
                    sm:size-12
                    lg:size-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8b3f80]
                    text-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-[#c7854b]
                    group
                  "
                >
                  <ArrowRight
                    className="
                      size-5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>

              {/* SUBTITLE */}
              <p
                className="
                  mt-3
                  max-w-[460px]
                  text-xs
                  sm:text-sm
                  font-normal
                  tracking-wide
                  text-slate-500
                "
              >
                Get local advice for your global request. Contact us now.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}