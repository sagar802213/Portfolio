import React from "react";

function Experience({ isVisible }) {
  const experiences = [
    {
      year: "2025 - 2026",
      role: "Java Full Stack Developer",
      company: "Wipro",
      description: "Leading full stack development team",
    },
    {
      year: "2022 - 2024",
      role: "Python Full Stack Developer",
      company: "Aicte",
      description: "Built scalable web applications",
    },
  ];

  return (
    <section
      id="experience"
      className={`experience ${isVisible ? "animate-in" : ""}`}
    >
      <div className="section-header">
        <h2>Experience</h2>
        <div className="section-line"></div>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.year}
            className="timeline-item"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
