/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: '#EBCAB1',      // Beige Suave (fondo principal)
          tierra: '#C9A88D',     // Tierra Suave (color de apoyo)
          caramelo: '#DDB998',   // Caramelo Claro (botones secundarios)
          chocolate: '#A97E5F',  // Chocolate Claro (textos destacados)
          marron: '#855C3F',     // Marrón Intenso (títulos, íconos)
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
        'hero-gradient': 'linear-gradient(to bottom right, #EBCAB1, #C9A88D)',
      },
    },
  },
  plugins: [],
};