import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
      form.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-[5%] bg-black flex flex-col items-center animate-fadeIn">
      <h1 className="font-playfair text-5xl font-bold text-white text-center mb-4 tracking-tight animate-[glowFadeIn_1.2s_ease-out] shadow-[0_0_20px_rgba(255,255,255,0.3)]">
        Get In Touch
      </h1>
      
      <p className="font-inter text-lg text-white/70 text-center mb-16 max-w-2xl opacity-0 animate-[fadeInDelay_1.5s_ease-out_forwards]">
        I'm always open to discussing new opportunities and interesting projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl w-full">
        {/* Contact Info */}
        <div className="flex flex-col gap-8 opacity-0 animate-slideInLeft">
          <div>
            <h3 className="font-inter text-sm font-normal text-white/60 uppercase tracking-widest mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-white/80 text-base transition-colors duration-300" />
              Email
            </h3>
            <a 
              href="mailto:workwithhussnainahmad@gmail.com"
              className="font-inter text-lg text-white no-underline transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              workwithhussnainahmad@gmail.com
            </a>
          </div>

          <div>
            <h3 className="font-inter text-sm font-normal text-white/60 uppercase tracking-widest mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faLinkedin} className="text-white/80 text-base transition-colors duration-300" />
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/hussnain-ahmad-sahi-b2b037396/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-lg text-white no-underline transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              linkedin.com/in/hussnain-ahamd-sahi
            </a>
          </div>

          <div>
            <h3 className="font-inter text-sm font-normal text-white/60 uppercase tracking-widest mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faGithub} className="text-white/80 text-base transition-colors duration-300" />
              GitHub
            </h3>
            <a
              href="https://github.com/MrHussnainAhmad"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-lg text-white no-underline transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              github.com/MrHussnainAhmad
            </a>
          </div>

          <div>
            <h3 className="font-inter text-sm font-normal text-white/60 uppercase tracking-widest mb-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faInstagram} className="text-white/80 text-base transition-colors duration-300" />
              Instagram
            </h3>
            <a
              href="https://www.instagram.com/hussnain.ahmad.sahi/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-lg text-white no-underline transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              instagram.com/hussnain.ahmad.sahi
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} className="flex flex-col gap-6 opacity-0 animate-slideInRight" onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="p-4 bg-white/5 border border-white/20 rounded-md text-white font-inter text-sm transition-all duration-300 placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/8"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            required
            className="p-4 bg-white/5 border border-white/20 rounded-md text-white font-inter text-sm transition-all duration-300 placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/8"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4 bg-white/5 border border-white/20 rounded-md text-white font-inter text-sm resize-y min-h-[120px] transition-all duration-300 placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/8"
          ></textarea>

          {status.message && (
            <div className={`p-4 rounded-lg mb-4 font-inter text-sm text-center animate-fadeIn ${
              status.type === 'success' 
                ? 'bg-green-500/10 border border-green-500/30 text-green-500' 
                : 'bg-red-500/10 border border-red-500/30 text-red-500'
            }`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`py-4 px-8 bg-white text-black border-none rounded-md font-inter text-sm font-medium uppercase tracking-widest cursor-pointer transition-all duration-300 hover:bg-white/90 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none ${
              isLoading ? 'flex items-center justify-center gap-2' : ''
            }`}
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};