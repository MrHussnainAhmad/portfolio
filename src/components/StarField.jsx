import { useEffect, useRef } from 'react';

export const StarField = () => {
  const starFieldRef = useRef(null);

  useEffect(() => {
    const starField = starFieldRef.current;
    if (!starField) return;

    // Create stars
    const createStars = () => {
      const numberOfStars = 150;
      
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'absolute bg-white rounded-full opacity-80 animate-twinkle';
        
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
        const moveDuration = Math.random() * 40 + 60;
        star.style.setProperty('--move-duration', moveDuration + 's');
        
        // Random movement direction
        const moveX = (Math.random() - 0.5) * 100;
        const moveY = (Math.random() - 0.5) * 100;
        star.style.setProperty('--move-x', moveX + 'px');
        star.style.setProperty('--move-y', moveY + 'px');
        
        // Color variations
        if (i % 3 === 0) {
          star.style.backgroundColor = '#e6f3ff'; // Slightly blue
        } else if (i % 4 === 0) {
          star.style.backgroundColor = '#fff9e6'; // Slightly yellow
        } else if (i % 5 === 0) {
          star.style.backgroundColor = '#f0f8ff'; // Alice blue
          star.style.animationDuration = '3s';
        } else if (i % 7 === 0) {
          star.style.backgroundColor = '#ffeaa7'; // Light yellow
          star.style.opacity = '0.9';
          star.style.animationDuration = '1.5s';
        }
        
        // Special bright stars
        if (i % 13 === 0) {
          star.style.backgroundColor = '#ffffff';
          star.style.opacity = '1';
          star.style.boxShadow = '0 0 3px #ffffff, 0 0 6px #ffffff';
          star.style.animationDuration = '4s';
        } else if (i % 17 === 0) {
          star.style.backgroundColor = '#87ceeb';
          star.style.opacity = '0.9';
          star.style.boxShadow = '0 0 2px #87ceeb, 0 0 4px #87ceeb';
        } else if (i % 19 === 0) {
          star.style.backgroundColor = '#ffd700';
          star.style.opacity = '0.85';
          star.style.boxShadow = '0 0 2px #ffd700, 0 0 4px #ffd700';
        }
        
        starField.appendChild(star);
      }
    };

    // Create shooting stars occasionally
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'absolute w-0.5 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full shadow-[0_0_6px_#ffffff,0_0_12px_#ffffff,0_0_18px_#ffffff] animate-shoot';
      
      // Start from random position on top or sides
      const side = Math.floor(Math.random() * 3);
      
      if (side === 0) {
        shootingStar.style.left = Math.random() * 100 + '%';
        shootingStar.style.top = '-5px';
      } else if (side === 1) {
        shootingStar.style.left = '-5px';
        shootingStar.style.top = Math.random() * 50 + '%';
      } else {
        shootingStar.style.left = '100%';
        shootingStar.style.top = Math.random() * 50 + '%';
      }
      
      // Create tail effect
      const tail = document.createElement('div');
      tail.className = 'absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-r from-white to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-80';
      shootingStar.appendChild(tail);
      
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
      if (Math.random() < 0.3) {
        createShootingStar();
      }
    }, 8000);

    return () => {
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <div 
      ref={starFieldRef} 
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[1] overflow-hidden"
    ></div>
  );
};