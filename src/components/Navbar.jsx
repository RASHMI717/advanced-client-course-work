import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  //  SCROLL EFFECT: Add class 'scrolled' when window scrolls
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

  //  Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="nav-left">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Logo"
        />
      </div>

      {/* Center: Desktop menu */}
      <ul className="nav-center">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("properties")}>Properties</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      {/* Right: Hamburger for mobile */}
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("properties")}>Properties</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;



