import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, ArrowUpRight, X, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Dhaka Metro Rail Logistics Support",
    category: "Dhaka Metro Rail",
    image: "https://picsum.photos/800/600?random=20",
    client: "Mass Transit Authority",
    duration: "12 Months",
    location: "Dhaka, Bangladesh",
    description: "Provided specialized heavy transport and container logistics for rapid transit construction materials, ensuring precision delivery across urban transit hubs.",
    highlights: ["Urban Heavy Transport", "Strict Schedule Adherence", "Multi-modal Coordination"]
  },
  {
    id: 2,
    title: "Jamuna Railway Bridge Materials Freight",
    category: "Jamuna Railway",
    image: "https://picsum.photos/800/600?random=21",
    client: "Bangladesh Railway Infrastructure",
    duration: "18 Months",
    location: "Jamuna River Crossing",
    description: "Managed cross-river heavy freight forwarding and specialized rail component transport to support major infrastructural expansion and connectivity.",
    highlights: ["Oversized Cargo Handling", "River-Crossing Logistics", "Advanced Route Planning"]
  },
  {
    id: 3,
    title: "Matarbari Port Deep-Sea Equipment",
    category: "Matarbari Port",
    image: "https://picsum.photos/800/600?random=22",
    client: "Port Authority Development",
    duration: "8 Months",
    location: "Cox's Bazar, Bangladesh",
    description: "Executed port-to-site container shipping and heavy machinery transport for deep-sea port development, ensuring secure and timely material staging.",
    highlights: ["Deep-Sea Port Clearance", "Heavy Machinery Forwarding", "End-to-End Tracking"]
  },
  {
    id: 4,
    title: "Multimodal Corridor Integration",
    category: "Dhaka Metro Rail",
    image: "https://picsum.photos/800/600?random=23",
    client: "National Transit Board",
    duration: "6 Months",
    location: "Dhaka Hub",
    description: "Coordinated efficient warehousing and final-mile distribution for critical urban rail electrical systems and specialized components.",
    highlights: ["Secure Warehousing", "Just-In-Time Delivery", "Real-Time Tracking"]
  }
];

const categories = ["All", "Dhaka Metro Rail", "Jamuna Railway", "Matarbari Port"];

export default function OurProjects() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="relative w-full bg-slate-50 py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden font-['Exo',sans-serif]">
      <div className="mx-auto max-w-[1500px]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#8b3f80]/10 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full w-fit mb-3 sm:mb-4">
            <Anchor className="size-3.5 sm:size-4 text-[#8b3f80]" />
            <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-[#8b3f80]">
              OUR SUCCESSFUL DELIVERED PROJECTS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Milestones of Trust & Transport Excellence
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600">
            Explore our signature infrastructural logistics achievements across national transit corridors. Tap any card to inspect full details.
          </p>
        </div>

        {/* Filter Tabs - Fully scrollable on smaller screens */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-[#8b3f80] text-white shadow-lg shadow-blue-500/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#8b3f80]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative block h-full min-h-[350px] sm:min-h-[380px] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/60 bg-slate-900/90 p-5 sm:p-7 backdrop-blur-xl transition-all duration-500 hover:border-[#c7854b]/50 hover:shadow-[0_20px_60px_-15px_rgba(139,63,128,0.3)] cursor-pointer flex flex-col justify-between"
              >
                {/* Project Thumbnail Image */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-xl bg-slate-950 mb-5 sm:mb-6 border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-[#c7854b] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#c7854b] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#c7854b]">
                    <span>View Project Details</span>
                    <div className="size-7 sm:size-8 rounded-full bg-[#8b3f80]/30 flex items-center justify-center transition-all group-hover:bg-[#8b3f80] group-hover:text-white border border-[#8b3f80]/30">
                      <ArrowUpRight className="size-3.5 sm:size-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Fully Responsive Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header Image */}
              <div className="relative h-48 sm:h-64 md:h-72 w-full shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 size-9 sm:size-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10"
                >
                  <X className="size-4 sm:size-5" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                  <span className="bg-[#c7854b] text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-1.5 sm:mt-2 text-white leading-snug">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-5 sm:space-y-6 bg-slate-900 text-slate-300">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 bg-slate-950/60 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10">
                  <div>
                    <span className="text-[11px] sm:text-xs text-slate-400 block font-medium">Client</span>
                    <span className="text-xs sm:text-sm font-bold text-white">{selectedProject.client}</span>
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-slate-400 block font-medium">Duration</span>
                    <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                      <Calendar className="size-3.5 text-[#c7854b]" /> {selectedProject.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs text-slate-400 block font-medium">Location</span>
                    <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                      <MapPin className="size-3.5 text-[#c7854b]" /> {selectedProject.location}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c7854b]">Project Overview</h4>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c7854b] mb-2 sm:mb-3">Key Highlights & Delivery</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-[#8b3f80]/10 p-2.5 sm:p-3 rounded-xl border border-[#8b3f80]/20">
                        <CheckCircle2 className="size-4 text-[#c7854b] shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-200">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/20 text-xs sm:text-sm font-semibold text-slate-300 hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto text-center px-6 py-2.5 rounded-full bg-[#8b3f80] text-xs sm:text-sm font-semibold text-white shadow-lg shadow-[#8b3f80]/30 hover:bg-[#c7854b] transition-colors"
                  >
                    Inquire Similar Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}