import { motion } from "framer-motion";

const clientLogos = [
  { name: "Coast Shipp", image: "/images/Coastshipp.jpeg", fallback: "https://picsum.photos/300/120?random=40" },
  { name: "Toray", image: "/images/clients/toray.png", fallback: "https://picsum.photos/300/120?random=40" },
  { name: "Rowlinson", image: "/images/clients/rowlinson.png", fallback: "https://picsum.photos/300/120?random=41" },
  { name: "MH", image: "/images/clients/mh.png", fallback: "https://picsum.photos/300/120?random=42" },
  { name: "Character World", image: "/images/clients/character-world.png", fallback: "https://picsum.photos/300/120?random=43" },
  { name: "Mitsubishi", image: "/images/clients/mitsubishi.png", fallback: "https://picsum.photos/300/120?random=44" },
  { name: "Uniqlo", image: "/images/clients/uniqlo.png", fallback: "https://picsum.photos/300/120?random=45" },
];

export default function OurClients() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden exo-font">
      
      {/* Standardized Layout Container */}
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-12 lg:px-20">
        
        {/* Section Header - Centered */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-slate-800 uppercase">
            OUR CLIENTS
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Soft edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-max">
            {/* Marquee Track with reduced gap and larger item scaling */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-3 sm:gap-5 shrink-0 pr-3 sm:pr-5"
            >
              {clientLogos.concat(clientLogos).map((client, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center min-w-[240px] sm:min-w-[320px] h-28 sm:h-32 bg-transparent transition-all duration-300 group cursor-pointer"
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