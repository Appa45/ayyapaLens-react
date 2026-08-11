import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaCamera } from "react-icons/fa";
import "./header.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <FaCamera className="logo-icon" />
          <span>Through My Phone Lens</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </NavLink>

          <NavLink to="/journey" onClick={() => setMenuOpen(false)}>
            Journey
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;