import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faRocket, faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png"; 
import image from "../assets/image.png"

export const Startup = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const startup = {
    name: "The Hood",
    tagline: "Your Neighborhood, Reimagined",
    logo: logo,
    image: image,
    description: "The Hood is a revolutionary platform that connects neighborhoods and builds stronger communities. We're transforming how people interact, share resources, and support each other in their local areas.",
    fullDescription: "The Hood reimagines community engagement by providing a comprehensive platform where neighbors can connect, collaborate, and thrive together. From local events and resource sharing to community safety and support networks, The Hood brings the power of technology to strengthen the bonds that make neighborhoods great. Our mission is to create safer, more connected, and vibrant communities where everyone belongs.",
    technologies: ["Next.js", "Prisma", "MongoDB", "NextAuth", "Tailwind CSS"],
    features: [
      "Premium Look",
      "Easy Auth",
      "Easy Booking Service",
      "Easy Making Payments",
      "No Tax or any Hidden charges",
      "Live Tracking of Order"
    ],
    status: "Developed",
    website: "#",
    github: "#"
  };

  return (
    <>
      <div className="my-24 px-8 animate-fadeInUp">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <FontAwesomeIcon 
            icon={faRocket} 
            className="text-white/80 text-3xl animate-rocketFloat" 
          />
          <h2 className="font-playfair text-4xl font-bold text-white text-center tracking-tight m-0">
            My Startup Journey
          </h2>
        </div>
        
        {/* Startup Card */}
        <div 
          className="max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 relative hover:-translate-y-3 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-600 hover:before:left-full"
          onClick={() => setIsExpanded(true)}
        >
          {/* Card Image */}
          <div 
            className="w-full h-96 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${startup.image})` }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/30 to-black/80 flex items-center justify-center">
              <img 
                src={startup.logo} 
                alt={startup.name} 
                className="w-40 h-30 rounded-2xl border-4 border-white/90 bg-white p-3 transition-transform duration-400 hover:scale-110 hover:rotate-6" 
              />
            </div>
          </div>
          
          {/* Card Content */}
          <div className="p-8 text-center">
            <h3 className="font-playfair text-3xl font-bold text-white m-0 mb-2">
              {startup.name}
            </h3>
            <p className="font-inter text-base text-white/70 m-0 mb-4">
              {startup.tagline}
            </p>
            <span className="inline-block px-6 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-500 font-inter text-sm font-medium uppercase tracking-widest">
              {startup.status}
            </span>
          </div>
        </div>
      </div>

      {/* PREMIUM MODAL */}
      {isExpanded && (
        <>
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[2000] flex items-center justify-center p-4 sm:p-8 animate-fadeIn overflow-hidden"
            onClick={() => setIsExpanded(false)}
          >
            {/* Premium Modal Container */}
            <div 
              className="relative w-full max-w-6xl h-[90vh] bg-gradient-to-br from-zinc-900 via-black to-zinc-900 rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.9)] border border-white/10 overflow-hidden animate-modalSlideUp flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
              
              {/* Close Button - Premium Style */}
              <button 
                className="absolute top-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-white/5 backdrop-blur-md border border-white/10 text-white/80 rounded-full cursor-pointer transition-all duration-500 flex items-center justify-center text-xl group hover:bg-white/10 hover:border-white/30 hover:rotate-90 hover:scale-110 shadow-lg"
                onClick={() => setIsExpanded(false)}
              >
                <FontAwesomeIcon icon={faTimes} className="group-hover:text-white transition-colors" />
              </button>

              {/* Scrollable Content with Custom Scrollbar */}
              <div className="flex-1 overflow-y-auto premium-scrollbar">
                {/* Hero Section with Image */}
                <div className="relative h-80 sm:h-96">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${startup.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
                  </div>
                  
                  {/* Logo & Title Overlay */}
                  <div className="relative h-full flex flex-col items-center justify-end pb-8 sm:pb-12 px-4 sm:px-8">
                    <img 
                      src={startup.logo} 
                      alt={startup.name} 
                      className="w-24 h-20 sm:w-32 sm:h-24 mb-4 sm:mb-6 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-white/20 shadow-2xl" 
                    />
                    <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-3 text-center tracking-tight">
                      {startup.name}
                    </h2>
                    <p className="font-inter text-base sm:text-xl text-white/80 mb-3 sm:mb-4 text-center max-w-2xl px-4">
                      {startup.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 rounded-full text-emerald-300 font-inter text-xs sm:text-sm font-medium uppercase tracking-widest shadow-lg">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                      {startup.status}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="px-6 sm:px-12 py-12 sm:py-16 space-y-10 sm:space-y-12">
                  {/* Description */}
                  <div className="group">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                      <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-white">
                        Vision & Mission
                      </h3>
                    </div>
                    <div className="pl-4 sm:pl-7">
                      <p className="font-inter text-base sm:text-lg leading-relaxed text-white/70">
                        {startup.fullDescription}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="group">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                      <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-white">
                        Key Features
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pl-4 sm:pl-7">
                      {startup.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="group/item relative p-4 sm:p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        >
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-500">
                              <span className="text-white font-bold text-xs sm:text-sm">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-inter text-sm sm:text-base text-white/90 leading-relaxed">
                                {feature}
                              </p>
                            </div>
                          </div>
                          {/* Hover effect gradient */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="group">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>
                      <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-white">
                        Technology Stack
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3 pl-4 sm:pl-7">
                      {startup.technologies.map((tech, index) => (
                        <div 
                          key={index} 
                          className="group/tech relative px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-500 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] overflow-hidden"
                        >
                          <span className="relative z-10 font-inter text-xs sm:text-sm font-medium text-white/90 group-hover/tech:text-white transition-colors">
                            {tech}
                          </span>
                          {/* Animated gradient background on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-6 sm:pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <a 
                        href={startup.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group/btn relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-inter font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(147,51,234,0.4)] hover:-translate-y-1 no-underline text-center"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                          <FontAwesomeIcon icon={faGlobe} />
                          Visit Website
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      </a>
                      <a 
                        href={startup.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group/btn relative px-8 sm:px-10 py-4 sm:py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white font-inter font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:-translate-y-1 no-underline text-center"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                          <FontAwesomeIcon icon={faCode} />
                          View Source Code
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Scrollbar Styles */}
          <style jsx>{`
            .premium-scrollbar::-webkit-scrollbar {
              width: 10px;
            }
            
            .premium-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.03);
              border-radius: 10px;
            }
            
            .premium-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, rgba(147, 51, 234, 0.6) 0%, rgba(59, 130, 246, 0.6) 100%);
              border-radius: 10px;
              border: 2px solid rgba(0, 0, 0, 0.4);
              transition: all 0.3s ease;
            }
            
            .premium-scrollbar::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, rgba(147, 51, 234, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%);
              border-color: rgba(255, 255, 255, 0.1);
            }
            
            .premium-scrollbar::-webkit-scrollbar-thumb:active {
              background: linear-gradient(180deg, rgb(147, 51, 234) 0%, rgb(59, 130, 246) 100%);
            }
            
            /* Firefox */
            .premium-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: rgba(147, 51, 234, 0.6) rgba(255, 255, 255, 0.03);
            }
          `}</style>
        </>
      )}
    </>
  );
};