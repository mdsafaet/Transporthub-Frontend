import { motion } from "framer-motion";

const clientLogos = [
  { name: "Toray", image: "https://picsum.photos/180/70?random=40" },
  { name: "Rowlinson", image: "https://picsum.photos/180/70?random=41" },
  { name: "MH", image: "https://picsum.photos/180/70?random=42" },
  { name: "Character World", image: "https://picsum.photos/180/70?random=43" },
  { name: "Mitsubishi", image: "https://picsum.photos/180/70?random=44" },
  { name: "Uniqlo", image: "https://picsum.photos/180/70?random=45" },
];

export default function OurClients() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700&display=swap');
        .exo-font {
          font-family: 'Exo', sans-serif;
        }
      `}</style>

      <section className="relative w-full bg-white py-12 sm:py-16 overflow-hidden exo-font">
        
        {/* Section Header - Centered */}
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-12 lg:px-20 mb-8 sm:mb-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-slate-800 uppercase">
            OUR CLIENTS
          </h2>
        </div>

        {/* Marquee Container without bottom border */}
        <div className="relative w-full overflow-hidden pb-4">
          {/* Soft edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-max">
            {/* Marquee Track */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-12 sm:gap-24 shrink-0 pr-12 sm:pr-24"
            >
              {clientLogos.concat(clientLogos).map((client, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center min-w-[180px] sm:min-w-[240px] h-20 bg-transparent transition-all duration-300 group cursor-pointer"
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-h-14 sm:max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}