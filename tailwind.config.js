/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#F5D7DB',
          green: '#CDE6D0',
          blue: '#D7E8F6',
          sand: '#F8F5F2',
          dark: '#4F4F4F',
          darkLight: '#6D6D6D',
          light: '#9D9D9D',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom right, #F5D7DB, #D7E8F6)',
      },
    },
  },
  plugins: [],
};