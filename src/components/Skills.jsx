import React from "react";

function Skills({ isVisible }) {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Java", level: 80 },
    { name: "CSS", level: 85 },
  ];

  return (
    <section id="skills" className={`skills ${isVisible ? "animate-in" : ""}`}>
      <div className="section-header">
        <h2>My Skills</h2>
        <div className="section-line"></div>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{
                  width: isVisible ? `${skill.level}%` : "0%",
                  transitionDelay: `${index * 0.1}s`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
