import React, { useState } from 'react';
import './styles/Projects.css';
import ebooksWeb from '../assets/ebookhubWeb.png';
import talkoraWeb from '../assets/talkoraWeb.png';
import vetvillePet from '../assets/vetvillepet.png';
import portfolio from '../assets/portfolio.png';
import talkoramobile from '../assets/talkoramobile.png';

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
    title: "Talkora Web App",
    description: "A real-time chatting platform focused on simplicity and speed. It supports user authentication, profile management, and smooth UX transitions across conversation threads.",
    technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    status: "Live but Backend not deployed",
    link: "https://github.com/MrHussnainAhmad/Talko-WEB-frontend-v1",
    preview: "https://talkora-web-frontend-v1.vercel.app/",
    image: talkoraWeb
  },
  {
    id: 5,
    title: "Talkora Mobile App",
    description: "A mobile version of the Talkora chat platform, designed using React Native. Features include real-time messaging, push notifications, and offline data sync for seamless communication.",
    technologies: ["React Native", "Firebase", "Expo", "Socket.io", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    status: "Live but Backend not deployed",
    link: "https://github.com/MrHussnainAhmad/Talkora-Mobile-App",
    preview: "#",
    image: talkoramobile
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

  const getProjectPosition = (project, index) => {
    return project.id === 1 ? 'main-project' : '';
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">MY PROJECTS SHOWCASE</h1>
      
      <div className={`projects-showcase ${isExpanded ? 'expanded' : ''}`}>
        {projects.map((project, index) => {
          const isSelected = selectedProject === project.id;
          const position = getProjectPosition(project, index);
          
          return (
            <div
              key={project.id}
              className={`project-card ${position} ${isSelected ? 'selected' : ''}`}
              onClick={() => handleCardClick(project.id)}
              style={{
                '--project-id': project.id,
                zIndex: isSelected ? 1000 : (project.id === 1 ? 100 : 50 - project.id)
              }}
            >
              <div className="card-image" style={{ backgroundImage: `url(${project.image})` }}></div>
              <div className="project-info">
                <h3 className="card-title">{project.title}</h3>
                <p className="project-status">{project.status}</p>
                <div className="tech-preview">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech-preview-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
              
              {isSelected && isExpanded && (
                <div className="project-details" style={{ backgroundImage: `url(${project.image})` }}>
                  <div className="details-content">
                    <div className="details-header">
                      <h2>{project.title}</h2>
                      <button className="close-btn" onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(project.id);
                      }}>×</button>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-stack">
                      <h4>Technologies Used:</h4>
                      <div className="tech-grid">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="project-actions">
                      <a href={project.preview} target="_blank" rel="noopener noreferrer" className="project-link preview-btn">
                        Preview
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
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
