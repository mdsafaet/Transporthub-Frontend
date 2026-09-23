import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/1920/1080?random=1",
    title: "Global Container Shipping & Logistics",
    subtitle: "Connecting ports worldwide with precision, reliability, and seamless transport solutions.",
  },
  {
    id: 2,
    image: "https://picsum.photos/1920/1080?random=2",
    title: "Advanced Reefer Container Solutions",
    subtitle: "Advanced cold-chain solutions designed to keep your perishable cargo fresh and secure across oceans.",
  },
  {
    id: 3,
    image: "https://picsum.photos/1920/1080?random=3",
    title: "Seamless Door-to-Door Transport",
    subtitle: "From vessel to final warehouse delivery, we manage your supply chain with complete transparency.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative h-[90vh] min-h-[650px] w-full overflow-hidden bg-black pt-24">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full overflow-hidden">
            {/* Background Image: Alternates coming from Left (-100%) and Right (100%) */}
            {currentSlide === index && (
              <motion.div
                initial={{ x: index % 2 === 0 ? "-100%" : "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 backdrop-blur-[2px]" />
              </motion.div>
            )}

            {/* Content Container */}
            <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-center px-6 md:px-12 lg:px-20">
              <div className="max-w-3xl">
                
                {/* Typewriter Heading (Shows unique text for this slide only) */}
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1] min-h-[140px] sm:min-h-[160px]">
                  {currentSlide === index && (
                    <Typewriter
                      options={{
                        strings: [slide.title],
                        autoStart: true,
                        loop: false,
                        delay: 60,
                      }}
                    />
                  )}
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-lg text-slate-200 sm:text-xl font-normal max-w-2xl leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Action Buttons with Blue Shadow & Theme Colors */}
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <Link
                    to="/request-quote"
                    className="inline-flex items-center gap-3 rounded-full bg-[#8b3f80] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#c7854b] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8b3f80] focus:ring-offset-2"
                  >
                    Request a quote
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </Link>

                  <Link
                    to="/tracking"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white focus:outline-none"
                  >
                    Track Shipment
                  </Link>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}