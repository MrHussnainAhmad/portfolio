import React, { useState } from 'react';
import ebooksWeb from '../assets/ebookhubWeb.png';
import CipherWeb from '../assets/Cipher.png';
import vetvillePet from '../assets/vetvillepet.png';
import portfolio from '../assets/portfolio.png';
import Ciphermobile from '../assets/talkoramobile.png';
import Shop from "../assets/shop.png"
import Streamme from "../assets/Streamme.png"
import LMS from "../assets/LMS.png"
import Tapwar from "../assets/Tapwar.png"

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A clean and modern personal portfolio built with React, showcasing projects, skills, and resume access. Responsive design with smooth transitions and section-based navigation.",
      technologies: ["React", "CSS3", "JavaScript"],
      status: "Live",
      link: "https://github.com/MrHussnainAhmad/portfolio",
      preview: "https://hussnainahmad.vercel.app/",
      image: portfolio
    },
    {
      id: 2,
      title: "EBooksHub Website",
      description: "A platform for readers to explore Islamic eBooks, offering categorized browsing, author profiles, and easy access to downloadable or readable content. Optimized for SEO and accessibility.",
      technologies: ["React", "JavaScript", "MongoDB", "Node.js", "Express", "Tailwind CSS", "Redux"],
      status: "Live but Backend not deployed",
      link: "https://github.com/MrHussnainAhmad/ebookshubFront0.1.7",
      preview: "https://ebookshub.live/",
      image: ebooksWeb
    },
    {
      id: 4,
      title: "Ebooks Mobile App",
      description: "A cross-platform mobile app for browsing, reading, and favoriting eBooks, especially fantasy and Islamic genres. Designed with a minimalist UI and offline reading support.",
      technologies: ["React Native", "JavaScript", "MongoDB", "Node.js", "Express", "Tailwind CSS", "Redux"],
      status: "Live but Backend not deployed",
      link: "https://github.com/MrHussnainAhmad/eBooksHub-apk",
      preview: "#",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Cipher Web App",
      description: "A real-time chatting platform focused on simplicity and speed. It supports user authentication, profile management, and smooth UX transitions across conversation threads.",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      status: "Live but Backend not deployed",
      link: "https://github.com/MrHussnainAhmad/Talko-WEB-frontend-v1",
      preview: "#",
      image: CipherWeb
    },
    {
      id: 5,
      title: "Cipher Mobile App",
      description: "A mobile version of the Cipher chat platform, designed using React Native. Features include real-time messaging, push notifications, and offline data sync for seamless communication.",
      technologies: ["React Native", "Firebase", "Expo", "Socket.io", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      status: "Live but Backend not deployed",
      link: "https://github.com/MrHussnainAhmad/Talkora-Mobile-App",
      preview: "#",
      image: Ciphermobile
    },
    {
      id: 6,
      title: "VetvillePets Portfolio",
      description: "A vibrant portfolio site for a pet care startup. Includes sections like services, gallery, testimonials, and contact form. Tailored UI with playful, engaging visuals.",
      technologies: ["React", "CSS3", "JavaScript"],
      status: "Live",
      link: "https://github.com/MrHussnainAhmad/vetpet",
      preview: "https://vetpet-port.vercel.app/",
      image: vetvillePet
    },
    {
      id: 7,
      title: "College LMS",
      description: "**College LMS** is a smart learning platform with a mobile app for teachers and students, and a web app for admins to manage classes, subjects, attendance, assignments, and announcements—all in one place.",
      technologies: ["Reactjs","React Native", "Nodejs", "Expressjs","MongoDB", "Tailwind", "MERN"],
      status: "Live",
      link: "https://github.com/MrHussnainAhmad/aplhamobile",
      preview: "#",
      image: LMS
    },
    {
      id: 8,
      title: "StreamMe",
      description: "**StreamMe** is a Next.js-based movie streaming platform that delivers fast, high-quality video through CDN integration. Designed with a Netflix-style interface, it features secure user authentication, built-in Google AdSense and custom ads, and offers free access to movies without any payment system.",
      technologies: ["Next.js","MongoDb","CDN","MERN"],
      status: "Live",
      link: "https://github.com/MrHussnainAhmad/Streaming-Site",
      preview: "#",
      image: Streamme
    },
    {
      id: 9,
      title: "eCommerce",
      description: "A modern eCommerce platform built for a smooth and secure shopping experience, featuring product browsing, cart and checkout systems, user authentication, order tracking, and admin management—all optimized for speed and performance with CDN integration.",
      technologies: ["Next.js","MongoDb","Clerk","Cloudinary"],
      status: "Live",
      link: "https://github.com/MrHussnainAhmad/shop2",
      preview: "#",
      image: Shop
    },
    {
      id: 10,
      title: "TapWar",
      description: "**TapWar** is a fun, fast-paced mobile game built with React Native that challenges your tapping speed and reflexes. Play in **Infinity mode** (endless score chase) or **Time mode** (score as many taps as possible within the clock) — simple controls, instant rounds, pure tapping fun.",
      technologies: ["React Native", "GAME"],
      status: "Live",
      link: "https://github.com/MrHussnainAhmad/TapWar",
      preview: "#",
      image: Tapwar
    }
  ];

  const handleCardClick = (projectId) => {
    if (selectedProject === projectId) {
      setIsExpanded(false);
      setTimeout(() => setSelectedProject(null), 300);
    } else {
      setSelectedProject(projectId);
      setTimeout(() => setIsExpanded(true), 100);
    }
  };

  return (
    <div className="min-h-screen py-16 px-8 bg-black overflow-x-hidden">
      <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white text-center mb-16 tracking-tight uppercase">
        MY PROJECTS SHOWCASE
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {projects.map((project) => {
          const isSelected = selectedProject === project.id;
          
          return (
            <div
              key={project.id}
              className={`relative w-full h-96 bg-[#1a1a2e] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                isSelected 
                  ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-4xl h-[80vh] max-h-[600px] z-[1000] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-white/30 overflow-y-auto' 
                  : 'hover:-translate-y-2 hover:shadow-2xl cursor-pointer'
              }`}
              onClick={() => handleCardClick(project.id)}
            >
              {/* Card Image */}
              <div 
                className="w-full h-3/5 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Project Info */}
              <div className="p-4 bg-[#f8f9fa] h-2/5 flex flex-col justify-between">
                <h3 className="font-inter text-xl font-medium text-[#333333] mb-1">
                  {project.title}
                </h3>
                
                <p className="font-inter text-xs font-medium mb-3 py-1 px-2 rounded-xl inline-block uppercase tracking-wide bg-[#f1f3f4] text-[#5f6368] border border-[#e8eaed]">
                  {project.status}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="font-inter text-xs py-1 px-2 bg-[#e9ecef] rounded-xl text-[#555555]">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="font-inter text-xs py-1 px-2 bg-[#dee2e6] rounded-xl text-[#6c757d]">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Expanded Details */}
              {isSelected && isExpanded && (
                <div 
                  className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-xl overflow-hidden"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/85 backdrop-blur-sm p-12 flex flex-col overflow-y-auto">
                    <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                      <h2 className="font-playfair text-4xl font-bold text-white m-0">
                        {project.title}
                      </h2>
                      <button 
                        className="bg-transparent border-none text-white text-3xl cursor-pointer p-2 leading-none transition-all duration-300 hover:text-red-500 hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(project.id);
                        }}
                      >
                        ×
                      </button>
                    </div>
                    
                    <p className="font-inter text-lg leading-relaxed text-white/80 mb-8 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="font-inter text-xl font-semibold text-white mb-4">
                        Technologies Used:
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="font-inter text-sm py-2 px-4 bg-white/10 rounded-lg text-white/90 border border-white/20 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end items-center mt-auto gap-4">
                      <a 
                        href={project.preview} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-inter text-base font-medium text-white no-underline uppercase tracking-widest py-4 px-8 border-2 border-white/30 rounded-lg transition-all duration-300 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-500 hover:border-white/60 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:before:left-full"
                      >
                        Preview
                      </a>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-inter text-base font-medium text-white no-underline uppercase tracking-widest py-4 px-8 border-2 border-white/30 rounded-lg transition-all duration-300 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-500 hover:border-white/60 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:before:left-full"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};