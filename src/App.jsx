import { useState, useEffect } from "react";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
  Background,
} from "./components";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState("home");

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <Background />
      <Navbar activeSection={activeSection} />
      <Hero isVisible={isVisible.home} />
      <About isVisible={isVisible.about} />
      <Skills isVisible={isVisible.skills} />
      <Projects isVisible={isVisible.projects} />
      <Experience isVisible={isVisible.experience} />
      <Contact isVisible={isVisible.contact} />
      <Footer />
    </div>
  );
}

export default App;
