import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const clientLogos = [
  { name: "Coast Shipp", image: "/images/Coastshipp.jpeg", fallback: "https://picsum.photos/300/120?random=40" },
  { name: "Toray", image: "/images/Coastshipp.jpeg", fallback: "https://picsum.photos/300/120?random=40" },
  { name: "Rowlinson", image: "/images/Coastshipp.jpeg", fallback: "https://picsum.photos/300/120?random=41" },
  { name: "MH", image: "/images/Coastshipp.jpeg", fallback: "https://picsum.photos/300/120?random=42" },
  { name: "Character World", image: "/images/Coastshipp.jpeg", fallback: "https://picsum.photos/300/120?random=43" },
  { name: "Mitsubishi", image: "/images/Coastshipp.jpeg", fallback: "https://picsum.photos/300/120?random=44" },
  { name: "Uniqlo", image: "/images/Coastshipp.jpeg", fallback: "https://picsum.photos/300/120?random=45" },
];

export default function OurClients() {
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  // Start marquee animation
  const startAnimation = () => {
    setIsPaused(true);
    controls.stop(); // Stops right at current position
  };

  const resumeAnimation = () => {
    setIsPaused(false);
    controls.start({
      x: "-50%",
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden exo-font">
      
      {/* Expanded Layout Container for More Side Space */}
      <div className="mx-auto max-w-[1700px] px-2 sm:px-4 md:px-8 lg:px-12">
        
        {/* Section Header - Centered */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-slate-800 uppercase">
            OUR CLIENTS
          </h2>
        </div>

        {/* Marquee Container with Mouse Hover Pause */}
        <div 
          className="relative w-full overflow-hidden py-2 cursor-pointer"
          onMouseEnter={startAnimation}
          onMouseLeave={resumeAnimation}
        >
          {/* Wider soft edge fade masks for cleaner pop-out effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-56 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-56 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-max">
            {/* Marquee Track using animation controls */}
            <motion.div
              initial={{ x: 0 }}
              animate={controls}
              // Kick off initial continuous motion
              onMount={() => {
                controls.start({
                  x: "-50%",
                  transition: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  },
                });
              }}
              className="flex items-center gap-2 sm:gap-4 shrink-0 pr-2 sm:pr-4"
            >
              {clientLogos.concat(clientLogos).map((client, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center min-w-[180px] sm:min-w-[240px] h-28 sm:h-32 bg-transparent transition-all duration-300 group"
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    onError={(e) => {
                      e.target.src = client.fallback;
                    }}
                    className="max-h-20 sm:max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}