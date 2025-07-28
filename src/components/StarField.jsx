import { useEffect, useRef } from 'react';
import './styles/StarField.css';

export const StarField = () => {
  const starFieldRef = useRef(null);

  useEffect(() => {
    const starField = starFieldRef.current;
    if (!starField) return;

    // Create stars
    const createStars = () => {
      const numberOfStars = 150; // Adjust number of stars
      
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random size (1px to 3px)
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random animation delay for twinkling
        star.style.animationDelay = Math.random() * 3 + 's';
        
        // Random movement duration (very slow movement)
        const moveDuration = Math.random() * 40 + 60; // 60-100 seconds
        star.style.setProperty('--move-duration', moveDuration + 's');
        
        // Random movement direction
        const moveX = (Math.random() - 0.5) * 100; // -50px to 50px
        const moveY = (Math.random() - 0.5) * 100; // -50px to 50px
        star.style.setProperty('--move-x', moveX + 'px');
        star.style.setProperty('--move-y', moveY + 'px');
        
        starField.appendChild(star);
      }
    };

    // Create shooting stars occasionally
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      
      // Start from random position on top or sides
      const side = Math.floor(Math.random() * 3); // 0: top, 1: left, 2: right
      
      if (side === 0) { // from top
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.top = '-5px';
      } else if (side === 1) { // from left
        shootingStar.style.left = '-5px';
        shootingStar.style.top = Math.random() * 50 + '%';
      } else { // from right
        shootingStar.style.left = '100%';
        shootingStar.style.top = Math.random() * 50 + '%';
      }
      
      starField.appendChild(shootingStar);
      
      // Remove after animation
      setTimeout(() => {
        if (shootingStar.parentNode) {
          shootingStar.parentNode.removeChild(shootingStar);
        }
      }, 3000);
    };

    createStars();

    // Create shooting stars at random intervals
    const shootingStarInterval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance every interval
        createShootingStar();
      }
    }, 8000); // Check every 8 seconds

    return () => {
      clearInterval(shootingStarInterval);
    };
  }, []);

  return <div ref={starFieldRef} className="star-field"></div>;
};
