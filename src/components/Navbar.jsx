import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔑 ADD SCROLL EFFECT (ONLY THIS PART IS NEW)
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // 🔑 END OF ADDITION

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      {/* Center (desktop menu) */}
      <ul className="nav-center">
        <li>Home</li>
        <li>Properties</li>
        <li>About</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Contact</li>

      </ul>

      {/* Right */}
      <div className="nav-right">
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* 🔽 Mobile menu card */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li onClick={() => setMenuOpen(false)}>Home</li>
            <li onClick={() => setMenuOpen(false)}>Properties</li>
            <li onClick={() => setMenuOpen(false)}>About</li>
            <li onClick={() => setMenuOpen(false)}>Services</li>
            <li onClick={() => setMenuOpen(false)}>Testimonials</li>
            <li onClick={() => setMenuOpen(false)}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


