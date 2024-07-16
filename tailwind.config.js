/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Unbounded", "sans-serif"],
      },
      backgroundImage: {
        'hero-photo':  " linear-gradient(65deg, rgba(134, 132, 132, .616), rgba(0, 0, 0, .205)), url('./src/assets/hero-photo.jpg')",
        'custom-gradient': "linear-gradient(270deg, rgba(46, 61, 91, 0.566) 70%, rgba(255, 255, 255, 0)), url('./src/assets/bg-photo.jpg')"
      }
    
    },
    screens: {
      // xs: "480px",
      // ss: "620px",
      sm: "970px",
      md: "1086px",
      lg: "1470px",
    },
  },
  plugins: [],
};

