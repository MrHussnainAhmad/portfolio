import React from "react";
import "./styles/Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
  const randomGreetings =
    greetings[Math.floor(Math.random() * greetings.length)];
  return (
    <div className="main">
      <div className="leftHero">
        <div className="greetings">
          <h1 className="h1Greetings" data-text={randomGreetings}>{randomGreetings}</h1>
          <h2>
            I'm <span className="span">Hussnain Ahmad.</span> A Developer and
            passionate learner. I love to create and explore new technologies.
            <br /><br />
            In free time, I enjoy writing books and playing video games.
            <br /><br /> 
            Being Computer Science student from The Islamia University
            of Bahawalpur, I am wondering to get admission in Sweden
            university to achieve my higher studies in Computer
            Science.
          </h2>
        </div>
        <div className="resume">
          <button className="cvButton" onClick={() => window.open('/Cv.pdf', '_blank')}>Download CV</button>
        </div>
      </div>
      <div className="rightHero">
        <h1>
          Yes, I learned MERN Stack Development, and I am continuously
          working on it. I won't say I am expert in it but I am learning and
          improving my skills day by day. You can expect more from me
          in future.
          <br /><br /> 
          Not only this, but I am also learning about React Native, so
          I can develop mobile applications as well. And you know what
          I did? You can check in my projects!
        </h1>
        <button className="projectsHere" onClick={() => document.getElementById('projects').click()}>View Projects ↗ </button>
      </div>
    </div>
  );
};
