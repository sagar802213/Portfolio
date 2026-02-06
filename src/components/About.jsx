import React from "react";

function About({ isVisible }) {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React JS",
    "Node JS",
    "MongoDB",
  ];

  return (
    <section id="about" className={`about ${isVisible ? "animate-in" : ""}`}>
      <div className="section-header">
        <h2>About Me</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <div className="image-frame">
            <img
              src="/WhatsApp Image 2025-07-02 at 12.07.27_8fa9500e.jpg"
              alt="Sagar Gupta"
              className="profile-image"
            />
          </div>
          <div className="image-decoration"></div>
        </div>
        <div className="about-text">
          <p>
            I'm an aspiring Frontend Developer with a strong foundation in
            HTML5, CSS3, and JavaScript. Passionate about crafting responsive
            and visually appealing web applications.
          </p>
          <p>
            Currently expanding my expertise in React JS, Node JS, and MongoDB
            for full-stack development. Eager to apply my knowledge in
            real-world projects and continuously learn modern web development
            technologies.
          </p>
          <div className="about-skills">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
          <a
            href="/sagar_resume (8).pdf"
            className="btn btn-primary resume-btn"
            download="Sagar_Gupta_Resume.pdf"
          >
            <span>Download Resume</span>
            <svg viewBox="0 0 24 24" className="btn-icon">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
