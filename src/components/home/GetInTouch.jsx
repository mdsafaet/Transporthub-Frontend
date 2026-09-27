import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function GetInTouch() {
  return (
    <section className="overflow-hidden bg-white px-4 py-12 font-['Exo',sans-serif] not-italic sm:px-6 sm:py-16 lg:px-8 lg:py-24">
     <div className="relative mx-auto w-full max-w-[1600px] lg:-translate-x-8">
        <div className="grid items-center lg:grid-cols-[52%_48%]">
       <div className="relative h-[280px] overflow-hidden rounded-[16px] rounded-br-[80px] bg-slate-900 sm:h-[340px] lg:h-[420px] lg:rounded-br-[120px]">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
              alt="Warehouse and logistics operations"
              loading="lazy"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-slate-950/40" />

            <div className="absolute inset-0 flex items-center justify-center lg:hidden">
              <h2 className="text-4xl font-medium not-italic leading-tight text-white sm:text-5xl">
                Get In Touch
              </h2>
            </div>
          </div>

         <div className="px-2 py-8 text-center lg:px-0 lg:py-0 lg:pl-2 lg:text-left">
            <div className="relative">
              <div className="hidden items-center gap-5 lg:flex">
                <h2 className="relative whitespace-nowrap text-[66px] font-medium not-italic leading-[1.1] tracking-normal text-[#18324f] xl:text-[74px]">
                  <span className="absolute right-full top-0 pr-6 text-white">
                    Get In
                  </span>
                  Touch
                </h2>

                <Link
                  to="/contact"
                  aria-label="Contact Coast Shipping"
                  className="group flex size-14 shrink-0 items-center justify-center rounded-full bg-[#8b3f80] text-white transition-colors hover:bg-[#c7854b] hover:text-[#18324f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b3f80] xl:size-16"
                >
                  <ArrowRight
                    aria-hidden="true"
                    className="size-6 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                  />
                </Link>
              </div>

              <p className="mx-auto max-w-[440px] text-sm leading-7 text-slate-500 sm:text-base lg:absolute lg:left-0 lg:top-full lg:mt-5">
                Get local advice for your global request. Contact us
                to discuss shipping solutions for your business.
              </p>

              <Link
                to="/contact"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#8b3f80] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#c7854b] hover:text-[#18324f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b3f80] lg:hidden"
              >
                Contact us
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}