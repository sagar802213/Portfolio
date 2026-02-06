import React from "react";
import { Link } from "react-router-dom";

function Projects({ isVisible }) {
  const projects = [
    {
      title: "AlgoVisualizer",
      description:
        "Interactive algorithm visualization tool for learning data structures",
      tags: ["React", "JavaScript"],
      image: "🧩",
    },
    {
      title: "Uber Clone",
      description: "Real-time ride-hailing app with map integration",
      tags: ["React", "MongoDB", "Tailwind"],
      image: "🚗",
    },
    {
      title: "Shop Me",
      description:
        "E-commerce platform with user authentication and payment integration",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      image: "🛍️",
    },
  ];

  return (
    <section
      id="projects"
      className={`projects ${isVisible ? "animate-in" : ""}`}
    >
      <div className="section-header">
        <h2>My Projects</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="project-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="project-image">{project.image}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/sagar802213"
                  className="project-link"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
