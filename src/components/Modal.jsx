import React, { useState } from 'react';

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
    <div 
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[1000] animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#0a0a0a] border border-white/10 rounded-xl p-12 max-w-lg w-[90%] relative animate-modalSlideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 bg-transparent border-none text-white/60 text-3xl cursor-pointer transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full hover:text-white hover:bg-white/10"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="font-inter text-2xl font-medium text-white mb-4 uppercase tracking-widest">
          Share Portfolio
        </h2>

        <p className="font-inter text-sm text-white/60 mb-8">
          Copy the link below to share this portfolio:
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input 
            type="text" 
            value={websiteUrl} 
            readOnly 
            className="flex-1 py-3 px-4 bg-white/5 border border-white/20 rounded-md text-white font-inter text-sm focus:outline-none focus:border-white/40"
          />
          <button 
            className="py-3 px-8 bg-white text-black border-none rounded-md font-inter text-sm font-medium uppercase tracking-widest cursor-pointer transition-all duration-300 hover:bg-white/90 hover:-translate-y-1 w-full md:w-auto"
            onClick={handleCopy}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};