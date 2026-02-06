import React from "react";

function Navbar({ activeSection }) {
  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-bracket">&lt;</span>
        Sagar Gupta
        <span className="logo-bracket">/&gt;</span>
      </div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={activeSection === item ? "active" : ""}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
