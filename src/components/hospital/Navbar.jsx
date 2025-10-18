import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpg"; // Updated path
import "./navbar.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "doctor", label: "Our Doctor" },
  { id: "services", label: "Services" },
  { id: "facilities", label: "Facilities" },
  { id: "team", label: "Team" },
  { id: "camps", label: "Free Camps" },
  { id: "articles", label: "Articles" },
  { id: "testimonials", label: "Testimonials" },
  { id: "location", label: "Location" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <img
            src={logo}
            alt="Pawar Surgical Hospital"
            className="navbar-logo"
          />
          <span className="brand-text">Pawar Surgical</span>
        </div>

        {/* Desktop nav */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a href="tel:+919765009785" className="nav-link btn-call">
            <Phone size={16} className="mr-1" />
            Call
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="navbar-toggler"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`mobile-menu ${mobileOpen ? "show" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="mobile-nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a href="tel:+919765009785" className="mobile-nav-link btn-call">
            <Phone size={16} className="mr-1" />
            Call
          </a>
        </div>
      )}
    </nav>
  );
}
