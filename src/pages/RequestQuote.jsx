import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Send, Anchor, Package, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const serviceTypes = [
  "Container Freight Forwarding",
  "Cold Chain & Reefer Logistics",
  "Heavy Cargo / Project Transport",
  "Inland Multi-Modal Transit"
];

const containerTypes = [
  "20' Dry Standard",
  "40' Dry Standard",
  "40' High Cube",
  "Reefer Container",
  "Open Top / Flat Rack"
];

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: serviceTypes[0],
    containerType: containerTypes[0],
    origin: "",
    destination: "",
    cargoWeight: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700&display=swap');
        .exo-font {
          font-family: 'Exo', sans-serif;
        }
      `}</style>

      <section className="relative w-full bg-slate-950 py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden exo-font">
        
        {/* Ambient background glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b3f80]/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-[1400px] relative z-10">
          
          {/* Top Bar with Back to Home Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-[#8b3f80]/50 transition-all shadow-lg"
            >
              <ArrowLeft className="size-4 text-[#c7854b]" />
              Back to Home
            </Link>
          </div>

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#8b3f80]/20 px-3.5 py-1.5 rounded-full w-fit mb-4 border border-[#8b3f80]/30">
              <Calculator className="size-4 text-[#c7854b]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c7854b]">
                FAST & TRANSPARENT PRICING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Request a Custom Freight Quote
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400">
              Complete the inquiry form below with your logistics specifications, and our maritime operations team will provide an estimate within 24 hours.
            </p>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Quick Features & Contact Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-2xl bg-[#8b3f80]/20 flex items-center justify-center text-[#c7854b] border border-[#8b3f80]/30">
                    <Anchor className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Coast Shipping Hub</h3>
                    <p className="text-xs text-slate-400">Global Maritime Infrastructure</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="size-5 text-[#c7854b] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Secure End-to-End</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Full cargo visibility and satellite IoT tracking on all routes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="size-5 text-[#c7854b] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Flexible Fleet Allocation</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Custom container sizing and heavy equipment transport options.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-2xl border border-white/5">
                  <span className="text-[11px] text-slate-400 block font-medium">Need immediate assistance?</span>
                  <span className="text-sm font-bold text-white mt-1 block">+880 2-988XXXX / info@coastshipping.com</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quote Form */}
            <div className="lg:col-span-8 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="size-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <ShieldCheck className="size-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
                    <p className="text-sm text-slate-400 max-w-md mx-auto">
                      Thank you for choosing Coast Shipping. Our logistics department is reviewing your route requirements and will contact you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 rounded-full bg-[#8b3f80] text-white text-sm font-semibold hover:bg-[#c7854b] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#c7854b]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#c7854b]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1XXXXXXXXX"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#c7854b]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Service & Container Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c7854b]"
                      >
                        {serviceTypes.map((srv, idx) => (
                          <option key={idx} value={srv} className="bg-slate-900 text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Container / Equipment Type
                      </label>
                      <select
                        name="containerType"
                        value={formData.containerType}
                        onChange={handleChange}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c7854b]"
                      >
                        {containerTypes.map((cnt, idx) => (
                          <option key={idx} value={cnt} className="bg-slate-900 text-white">
                            {cnt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Origin, Destination & Weight */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Port of Origin *
                      </label>
                      <input
                        type="text"
                        name="origin"
                        required
                        value={formData.origin}
                        onChange={handleChange}
                        placeholder="e.g., Chittagong, Bangladesh"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#c7854b]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Port of Destination *
                      </label>
                      <input
                        type="text"
                        name="destination"
                        required
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g., Rotterdam, Netherlands"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#c7854b]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Approx. Cargo Weight
                      </label>
                      <input
                        type="text"
                        name="cargoWeight"
                        value={formData.cargoWeight}
                        onChange={handleChange}
                        placeholder="e.g., 24 Tons / 25 CBM"
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#c7854b]"
                      />
                    </div>
                  </div>

                  {/* Row 4: Additional Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Additional Specifications or Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Provide any specific handling instructions, hazardous material declarations, or delivery timelines..."
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#c7854b]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#8b3f80] hover:bg-[#c7854b] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#8b3f80]/30 transition-all flex items-center justify-center gap-2"
                  >
                    Submit Freight Quote Request
                    <Send className="size-4" />
                  </button>

                </form>
              )}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}