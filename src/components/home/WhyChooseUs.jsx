import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Professionally & Technically Skilled Organization",
  "Committed to Provide World-Class Solution",
  "Services delivered more than 700+ in Local & International Clients",
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Unique Rounded/Curved Image Layout matching reference */}
          <div className="lg:col-span-6 flex flex-col gap-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="overflow-hidden rounded-[40px] rounded-br-[100px] shadow-lg shadow-blue-500/10 border border-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop"
                alt="Professional team meeting"
                className="w-full h-[240px] sm:h-[300px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="overflow-hidden rounded-[40px] rounded-tl-[100px] shadow-lg shadow-blue-500/10 border border-slate-100 sm:w-4/5 sm:self-end -mt-12 sm:-mt-16 bg-white p-2"
            >
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop"
                alt="Corporate logistics office"
                className="w-full h-[200px] sm:h-[240px] object-cover rounded-[32px] rounded-tl-[80px]"
              />
            </motion.div>
          </div>

          {/* Right Column: Content & Bullet Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Typewriter Header */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 min-h-[50px] sm:min-h-[60px]">
              <Typewriter
                options={{
                  strings: ["WHY COAST SHIPP?"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  typeSpeed: 70,
                }}
              />
            </h2>

            {/* Description Text */}
            <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Coast Shipping is one of the leading specialist logistics and container transport companies. We deliver technology-based solutions to over 700+ companies including corporate clients in Bangladesh and abroad. Coast Shipping is working with a team that is dedicated to your cargo well-being. Our deep expertise, comprehensive services, commitment to personalized advice, and proactive approach give you peace of mind that your supply chain and shipping affairs are in the best possible hands. Whether you're looking for solutions to optimize freight, reduce transit times, or plan for secure global shipping, we are here to guide you every step of the way.
            </p>

            {/* Bottom Grid: Illustration and Feature List with Middle Blue Line */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-4">
              
              {/* Illustration Card */}
              <div className="sm:col-span-5 flex items-center justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop"
                  alt="Business strategy illustration"
                  className="rounded-xl h-36 w-full object-cover shadow-sm"
                />
              </div>

              {/* Middle Vertical Blue Line Separator (Visible on sm and up) */}
              <div className="hidden sm:flex sm:col-span-1 justify-center h-4/5">
                <div className="w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-sm shadow-blue-500/50" />
              </div>

              {/* Bullet Points List */}
              <ul className="sm:col-span-6 flex flex-col gap-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#8b3f80] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}