import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionKicker from "../common/SectionKicker";

// Sample project content — replace with your completed projects.
const projects = [
  {
    title: "Connecting businesses by sea",
    category: "Container Shipping",
    description:
      "Container shipment coordination covering booking, cargo preparation, and ocean transport between ports.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=85",
    alt: "Container ship carrying cargo",
  },
  {
    title: "Coordinating the port journey",
    category: "Port-to-Port Services",
    description:
      "Planning port connections and shipment handovers from the origin terminal to the destination port.",
    image:
      "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1000&q=85",
    alt: "Shipping containers at a cargo port",
  },
  {
    title: "Moving beyond the port",
    category: "Door-to-Door Transport",
    description:
      "Connecting ocean transport with inland collection and delivery for a coordinated container journey.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=85",
    alt: "Freight truck providing inland transport",
  },
];

export default function OurProjects() {
  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="projects-container">
        <Reveal>
          <div className="projects-header">
            <div>
              <SectionKicker>Our projects</SectionKicker>

              <h2
                id="projects-heading"
                className="max-w-[700px] text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
              >
                Connecting ports.
                <br />
                <span className="text-[#1684e8]">
                  Delivering possibilities.
                </span>
              </h2>
            </div>

            <p className="max-w-[340px] text-sm leading-6 text-slate-500">
              Explore the planning and coordination behind container
              journeys—from port-to-port shipping to inland delivery.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              className={`projects-card-reveal delay-${index + 1}`}
            >
              <article className="project-card">
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    width="1000"
                    height="750"
                    className="project-image"
                  />

                  <div
                    className="project-image-overlay"
                    aria-hidden="true"
                  />

                  <span className="project-category">
                    {project.category}
                  </span>

                  <span className="project-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>

                <div className="project-content">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {project.description}
                  </p>

                  <div className="project-card-footer">
                    <span className="text-xs text-slate-500">
                      TransportNet Shipping
                    </span>

                    <span
                      className="project-card-line"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="projects-bottom">
            <p className="text-sm leading-6 text-slate-500">
              Planning a container shipment? Let’s discuss your route
              and requirements.
            </p>

            <Link to="/request-quote" className="projects-button">
              Discuss your shipment
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}