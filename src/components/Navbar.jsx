import React, { useState } from "react";
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
    setIsMenuOpen(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-[5%] py-8 bg-black/80 backdrop-blur-md z-[1000]">
      {/* Logo */}
      <div 
        className="font-luxurious text-5xl tracking-widest uppercase text-white cursor-pointer relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-5 after:h-[1px] after:bg-white/50"
        onClick={() => handleNavClick('home')}
      >
        <FontAwesomeIcon icon={faAsterisk} className="mr-2" /> Hussnain
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden w-10 h-10 rounded-full border border-white/20 text-white/80 flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faEllipsisV} className="text-xl" />
      </button>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-8 items-center">
        <button 
          id="projects"
          onClick={() => handleNavClick('projects')} 
          title="Projects"
          className="w-10 h-10 rounded-full border border-white/20 text-white/80 flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
        >
          <FontAwesomeIcon icon={faBriefcase} />
        </button>
        <button 
          id="contact"
          onClick={() => handleNavClick('contact')} 
          title="Contact"
          className="w-10 h-10 rounded-full border border-white/20 text-white/80 flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
        <button 
          id="refer"
          onClick={handleModalOpen} 
          title="Share"
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 hover:bg-white/90 hover:scale-105"
        >
          <FontAwesomeIcon icon={faSquareUpRight} />
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/90 backdrop-blur-md z-[200] flex flex-col justify-center items-center gap-8 animate-modalFadeIn lg:hidden">
          {/* Close button */}
          <button 
            className="absolute top-8 right-[5%] w-10 h-10 rounded-full border border-white/20 text-white/80 flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} className="text-xl" />
          </button>
          
          <div className="flex flex-col justify-center items-center gap-6">
            <button 
              onClick={() => handleNavClick('projects')} 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/80 min-w-[150px] transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <FontAwesomeIcon icon={faBriefcase} className="text-lg" />
              <span className="text-sm uppercase tracking-wider">Projects</span>
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/80 min-w-[150px] transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
              <span className="text-sm uppercase tracking-wider">Contact</span>
            </button>
            <button 
              onClick={handleModalOpen} 
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black min-w-[150px] transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
            >
              <FontAwesomeIcon icon={faSquareUpRight} className="text-lg" />
              <span className="text-sm uppercase tracking-wider">Share</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};