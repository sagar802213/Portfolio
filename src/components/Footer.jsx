import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Sagar Gupta. All rights reserved.</p>
        <p>Built with ❤️ and React</p>
        <p className="last-updated">Last updated: January 2026</p>
      </div>
    </footer>
  );
}

export default Footer;
