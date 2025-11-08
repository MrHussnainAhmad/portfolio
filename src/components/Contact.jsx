import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './styles/Contact.css';

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // EmailJS Configuration from environment variables
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
      // Send email using EmailJS
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

      // Reset form
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
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        I'm always open to discussing new opportunities and interesting
        projects.
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <h3>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              Email
            </h3>
            <a href="mailto:workwithhussnainahmad@gmail.com">
              workwithhussnainahmad@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <h3>
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/hussnain-ahmad-sahi-b2b037396/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/hussnain-ahamd-sahi
            </a>
          </div>

          <div className="contact-item">
            <h3>
              <FontAwesomeIcon icon={faGithub} className="contact-icon" />
              GitHub
            </h3>
            <a
              href="https://github.com/MrHussnainAhmad"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/MrHussnainAhmad
            </a>
          </div>

          <div className="contact-item">
            <h3>
              <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
              Instagram
            </h3>
            <a
              href="https://www.instagram.com/hussnain.ahmad.sahi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram.com/hussnain.ahmad.sahi
            </a>
          </div>
        </div>

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={isLoading ? "loading" : ""}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
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
