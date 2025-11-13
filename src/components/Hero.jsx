import React from "react";
import { Startup } from './Startup';

export const Hero = () => {
  const greetings = [
    "Hello,",
    "Welcome",
    "Bonjour",
    "Hola",
    "Ciao",
    "Welcome to my portfolio!",
    "Hi there!",
    "Hold up... is that you? Fancy seeing you here.",
    "Look who's curious about pixels and passion!",
    "Well, well, well… look who just showed up!",
    "Ah, I see you've stumbled into my digital lair 👀",
    "Guess who decided to visit the code wizard today?",
  ];
  const randomGreetings = greetings[Math.floor(Math.random() * greetings.length)];

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-[5%] bg-black relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4/5 before:h-4/5 before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] before:pointer-events-none">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Hero */}
          <div className="w-full lg:w-3/5 lg:pr-[5%] animate-slideInLeft opacity-0">
            <div className="mb-12">
              <h1 className="font-inter text-sm font-light text-white/60 uppercase tracking-[0.2em] mb-8">
                {randomGreetings}
              </h1>
              <h2 className="font-inter text-lg font-light leading-relaxed text-white/70 mb-12 max-w-2xl">
                I'm <span className="font-playfair text-6xl font-bold text-white block my-4 leading-tight tracking-tight">Hussnain Ahmad.</span> 
                A Developer and passionate learner. I love to create and explore new technologies.
                <br /><br />
                In free time, I enjoy writing books and playing video games.
                <br /><br /> 
                Being Computer Science student from The Islamia University
                of Bahawalpur, I am wondering to get admission in Sweden
                university to achieve my higher studies in Computer Science.
              </h2>
            </div>
            <div>
              <button 
                className="font-inter text-xs font-normal uppercase tracking-[0.15em] py-3 px-0 text-white bg-transparent border-b border-white/30 cursor-pointer transition-all duration-400 mr-8 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-400 hover:text-white hover:pl-3 hover:after:w-full"
                onClick={() => window.open('/Cv.pdf', '_blank')}
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Right Hero */}
          <div className="w-full lg:w-2/5 flex flex-col items-start animate-slideInRight opacity-0">
            <h1 className="font-inter text-sm font-light leading-relaxed text-white/60 mb-8">
              Yes, I learned MERN Stack Development, and I am continuously
              working on it. I won't say I am expert in it but I am learning and
              improving my skills day by day. You can expect more from me
              in future.
              <br /><br /> 
              Not only this, but I am also learning about React Native, so
              I can develop mobile applications as well. And you know what
              I did? You can check in my projects!
            </h1>
            <button 
              className="font-inter text-xs font-normal uppercase tracking-[0.15em] py-3 px-0 text-white bg-transparent border-b border-white/30 cursor-pointer transition-all duration-400 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-400 hover:text-white hover:pl-3 hover:after:w-full"
              onClick={() => document.getElementById('projects').click()}
            >
              View Projects ↗
            </button>
          </div>
        </div>
      </div>
      
      {/* Startup Section */}
      <Startup />
    </>
  );
};