import "./Footer.css";
import { GiRotaryPhone } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { HiBuildingOffice2 } from "react-icons/hi2";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">

        {/* LEFT — BRAND */}
        <div className="footer-col footer-brand">
          <img
            src={`${import.meta.env.BASE_URL}/images/logo.png`}
            alt="Real Estate Logo"
            className="footer-logo"
          />

          <p className="footer-text">
            We provide premium real estate solutions with a focus on
            luxury living, smart investments, and trusted service.
          </p>

          <div className="footer-socials">
            <a href="#"><img src= {`${import.meta.env.BASE_URL}/facebook.svg`} alt="Facebook" /></a>
            <a href="#"><img src= {`${import.meta.env.BASE_URL}/instagram.svg`} alt="Instagram" /></a>
            <a href="#"><img src= {`${import.meta.env.BASE_URL}/twitter.svg`} alt="Twitter" /></a>
          </div>
        </div>

        {/* CENTER — LINKS */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Reach Us</a></li>
          </ul>
        </div>

        {/* RIGHT — CONTACT */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li><HiBuildingOffice2/> 10845 Griffith Peak Dr, Las Vegas</li>
            <li><MdPhoneIphone /> +94 753576012</li>
            <li><GiRotaryPhone /> 0351234567</li>
            <li><SlEnvolopeLetter /> manoronrealestate@gmail.com</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 MANORON Real Estate. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
