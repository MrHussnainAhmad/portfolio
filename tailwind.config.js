/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        luxurious: ['"Luxurious Script"', 'cursive'],
        markazi: ['"Markazi Text"', 'serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease',
        'fadeInUp': 'fadeInUp 1s ease-out',
        'slideInLeft': 'slideInLeft 1s ease-out 0.3s forwards',
        'slideInRight': 'slideInRight 1s ease-out 0.5s forwards',
        'modalFadeIn': 'modalFadeIn 0.3s ease',
        'modalSlideUp': 'modalSlideUp 0.4s ease',
        'rocketFloat': 'rocketFloat 3s ease-in-out infinite',
        'twinkle': 'twinkle 2s infinite ease-in-out alternate',
        'shoot': 'shoot 3s linear forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(-10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        modalFadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        modalSlideUp: {
          'from': { opacity: '0', transform: 'translateY(50px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        rocketFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-5deg)' },
        },
        twinkle: {
          '0%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
          '100%': { opacity: '0.4', transform: 'scale(0.9)' },
        },
        shoot: {
          '0%': { opacity: '1', transform: 'scale(0)' },
          '10%': { opacity: '1', transform: 'scale(1)' },
          '70%': { opacity: '1', transform: 'scale(1) translate(300px, 300px)' },
          '100%': { opacity: '0', transform: 'scale(0.5) translate(600px, 600px)' },
        },
      },
    },
  },
  plugins: [],
}