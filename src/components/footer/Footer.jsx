import { Link } from "react-router-dom";
import {
  FaCamera,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-brand">

          <div className="footer-logo">
            <FaCamera />
            <span>Through My Phone Lens</span>
          </div>

          <p>
            Capturing moments, emotions, and stories through the lens of my
            phone. Every picture has a story to tell.
          </p>

        </div>

        {/* Center */}
        {/* <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/gallery">Gallery</Link>

          <Link to="/journey">Journey</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

        </div> */}

        {/* Right */}
        <div className="footer-social">

          <h3>Connect</h3>

          <div className="social-icons">

            <a href="#" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Through My Phone Lens | Designed & Developed by Ayyappa
      </div>

    </footer>
  );
}

export default Footer;