import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Package, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const springConfig = {
  stiffness: 100,
  damping: 22,
  mass: 0.8,
};

function TiltCard({ children, bgClass }) {
  const wrapperRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const targetLift = useMotionValue(0);

  const rotateX = useSpring(targetX, springConfig);
  const rotateY = useSpring(targetY, springConfig);
  const lift = useSpring(targetLift, springConfig);

  const resetTilt = () => {
    targetX.set(0);
    targetY.set(0);
    targetLift.set(0);
  };

  const handlePointerMove = (event) => {
    if (
      reduceMotion ||
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      resetTilt();
      return;
    }

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();

    const pointerX = Math.max(
      -1,
      Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1),
    );

    const pointerY = Math.max(
      -1,
      Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1),
    );

    targetX.set(-pointerY * 5);
    targetY.set(pointerX * 5);
    targetLift.set(-4);
  };

  return (
    <div
      ref={wrapperRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
      className="min-w-0"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          y: reduceMotion ? 0 : lift,
        }}
     className={`relative flex h-[280px] flex-col justify-between rounded-[16px] rounded-tr-[80px] p-8 shadow-xl transition-shadow duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,63,128,0.25)] motion-reduce:transition-none sm:h-[340px] sm:p-12 md:p-16 lg:h-[420px] lg:rounded-tr-[120px] ${bgClass}`}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function WhatWeMove() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-12 font-['Exo',sans-serif] sm:px-8 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1700px]">
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <TiltCard bgClass="bg-[#e2e8f0] text-blue-950">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider sm:text-sm">
              <Package className="size-4" aria-hidden="true" />
              <span>Commodities</span>
            </div>

            <div className="my-auto py-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                What we Move
              </h2>
            </div>

            <div>
              <Link
                to="/commodities"
                className="group inline-flex w-fit items-center justify-between gap-8 rounded-full border border-blue-950/20 px-6 py-3 text-xs font-bold tracking-wide transition-colors hover:border-[#8b3f80] hover:bg-[#8b3f80]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b3f80] motion-reduce:transition-none sm:text-sm"
              >
                <span>Commodities</span>

                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-[#8b3f80] motion-reduce:transform-none motion-reduce:transition-none">
                  <ArrowRight
                    className="size-4"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>
          </TiltCard>

          <TiltCard bgClass="bg-blue-950 text-white">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-white/90 sm:text-sm">
              <Headphones className="size-4" aria-hidden="true" />
              <span>Our Services</span>
            </div>

            <div className="my-auto py-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                How we Move
              </h2>
            </div>

            <div>
              <Link
                to="/services"
                className="group inline-flex w-fit items-center justify-between gap-8 rounded-full border border-white/20 px-6 py-3 text-xs font-bold tracking-wide transition-colors hover:border-[#c7854b] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7854b] motion-reduce:transition-none sm:text-sm"
              >
                <span>Services</span>

                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-blue-950 transition duration-300 group-hover:translate-x-1 group-hover:bg-[#c7854b] motion-reduce:transform-none motion-reduce:transition-none">
                  <ArrowRight
                    className="size-4"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}