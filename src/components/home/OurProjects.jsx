import { ArrowUpRight } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionKicker from "../common/SectionKicker";

const projects = [
  {
    title: "Connecting markets by sea",
    category: "Ocean Freight",
    description:
      "Coordinated container transport from collection through port handling and final delivery.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=85",
    alt: "Container ship carrying cargo",
  },
  {
    title: "Keeping business moving",
    category: "Land Transport",
    description:
      "A coordinated road freight operation connecting distribution facilities with customer locations.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=85",
    alt: "Freight truck used for road transport",
  },
  {
    title: "Space for smarter operations",
    category: "Warehousing",
    description:
      "Organized storage and cargo handling to support a connected distribution operation.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=85",
    alt: "Storage racks inside a warehouse",
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
                A look at our{" "}
                <span className="text-[#1684e8]">completed projects.</span>
              </h2>
            </div>

            <p className="max-w-[340px] text-sm leading-6 text-slate-500">
              Explore the journeys, operations, and partnerships behind
              our work. Every project starts with a challenge and a
              plan to move forward.
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

                  <div className="project-image-overlay" />

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
                      TransportNet Logistics
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
              Have a similar project in mind? Let’s plan your next move.
            </p>

            <a href="/request-quote" className="projects-button">
              Discuss your project
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}