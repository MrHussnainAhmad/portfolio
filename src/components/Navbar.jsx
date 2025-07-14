import React, { useState } from "react";
import "./styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAsterisk,
  faBriefcase,
  faEnvelope,
  faSquareUpRight,
  faEllipsisV,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ setCurrentPage, setShowModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const handleModalOpen = () => {
    setShowModal(true);
    setIsMenuOpen(false); // Close mobile menu after opening modal
  };
  return (
    <div className="navbar">
      <div className="logo" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
        <FontAwesomeIcon icon={faAsterisk} /> Hussnain
      </div>
      
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faEllipsisV} />
      </button>
      
      {/* Desktop Navigation */}
      <div className="nav-links desktop-nav">
        <button id="projects" onClick={() => handleNavClick('projects')} title="Projects">
          <FontAwesomeIcon icon={faBriefcase} />
        </button>
        <button id="contact" onClick={() => handleNavClick('contact')} title="Contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
        <button className="buttonSpecial" id="refer" onClick={handleModalOpen} title="Resume">
          <FontAwesomeIcon icon={faSquareUpRight} />
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
        {/* Close button */}
        <button className="mobile-close-btn" onClick={toggleMenu} aria-label="Close menu">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        <div className="mobile-nav-items">
          <button id="projects-mobile" onClick={() => handleNavClick('projects')} title="Projects">
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Projects</span>
          </button>
          <button id="contact-mobile" onClick={() => handleNavClick('contact')} title="Contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </button>
          <button className="buttonSpecial" id="refer-mobile" onClick={handleModalOpen} title="Resume">
            <FontAwesomeIcon icon={faSquareUpRight} />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};
