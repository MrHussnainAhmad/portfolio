import React, { useState } from 'react';
import './styles/Modal.css';

export const Modal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const websiteUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Share Portfolio</h2>
        <p>Copy the link below to share this portfolio:</p>
        <div className="url-container">
          <input 
            type="text" 
            value={websiteUrl} 
            readOnly 
            className="url-input"
          />
          <button 
            className="copy-button" 
            onClick={handleCopy}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};
