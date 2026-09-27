import { useRef } from "react";
import { ArrowRight, Package, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

function TiltCard({ children, bgClass, curveClass }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        willChange: "transform",
        transition: "transform 300ms cubic-bezier(0.03, 0.98, 0.52, 0.99), box-shadow 300ms ease",
      }}
      className={`relative flex flex-col justify-between p-8 sm:p-12 md:p-16 ${bgClass} ${curveClass} min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] shadow-xl hover:shadow-[0_25px_50px_-12px_rgba(139,63,128,0.25)]`}
    >
      {children}
    </div>
  );
}

export default function WhatWeMove() {
  return (
    <>
      <style>{`
        .card-left-curve {
          border-radius: 2rem;
          border-bottom-left-radius: 120px;
        }
        .card-right-curve {
          border-radius: 2rem;
          border-top-right-radius: 120px;
        }
        @media (max-width: 1023px) {
          .card-left-curve, .card-right-curve {
            border-radius: 2rem;
          }
        }
      `}</style>

      {/* Expanded section width with broader side padding */}
      <section className="w-full bg-white px-4 py-12 sm:px-8 md:px-12 lg:px-20 lg:py-24 exo-font overflow-hidden">
        <div className="mx-auto w-full max-w-[1700px]">
          
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
            
            {/* CARD 1: WHAT WE MOVE */}
            <TiltCard bgClass="bg-[#e2e8f0]" curveClass="card-left-curve">
              {/* Top Meta */}
              <div className="flex items-center gap-2.5 text-blue-950 font-bold text-xs sm:text-sm tracking-wider uppercase">
                <Package className="size-4 text-blue-950" />
                <span>COMMODITIES</span>
              </div>

              {/* Center Title */}
              <div className="my-auto py-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                  What we Move
                </h2>
              </div>

              {/* Bottom Pill Action Button */}
              <div>
                <Link
                  to="/commodities"
                  className="inline-flex items-center justify-between px-6 py-3 rounded-full border border-blue-950/20 bg-transparent text-blue-950 text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 hover:border-[#8b3f80] hover:bg-[#8b3f80]/5 group w-fit gap-8"
                >
                  <span>Commodities</span>
                  <div className="size-8 rounded-full bg-blue-950 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#8b3f80] group-hover:translate-x-1 shrink-0">
                    <ArrowRight className="size-4" />
                  </div>
                </Link>
              </div>
            </TiltCard>


            {/* CARD 2: HOW WE MOVE */}
            <TiltCard bgClass="bg-blue-950 text-white" curveClass="card-right-curve">
              {/* Top Meta */}
              <div className="flex items-center gap-2.5 text-white/90 font-bold text-xs sm:text-sm tracking-wider uppercase">
                <Headphones className="size-4 text-white" />
                <span>OUR SERVICES</span>
              </div>

              {/* Center Title */}
              <div className="my-auto py-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                  How we Move
                </h2>
              </div>

              {/* Bottom Pill Action Button */}
              <div>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-between px-6 py-3 rounded-full border border-white/20 bg-transparent text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 hover:border-[#c7854b] hover:bg-white/5 group w-fit gap-8"
                >
                  <span>Services</span>
                  <div className="size-8 rounded-full bg-white text-blue-950 flex items-center justify-center transition-all duration-300 group-hover:bg-[#c7854b] group-hover:text-white group-hover:translate-x-1 shrink-0">
                    <ArrowRight className="size-4" />
                  </div>
                </Link>
              </div>
            </TiltCard>

          </div>

        </div>
      </section>
    </>
  );
}