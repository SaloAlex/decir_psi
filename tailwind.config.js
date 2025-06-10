/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6D6D6D',    // Cambiado a gris oscuro (darkLight)
          secondary: '#eaccad',  // Color secundario (beige claro)
          accent: '#e8c39e',     // Color de acento
          background: '#f3dbc3', // Fondo principal
          highlight: '#e8c39e',  // Cambiado a tierra (acento suave)
          softAccent: '#d06b79', // Acento suave

          // Mantenemos los nombres anteriores pero con los nuevos valores para compatibilidad
          beige: '#eaccad',      // Actualizado al nuevo beige claro (secondary)
          tierra: '#e8c39e',     // Actualizado al nuevo acento
          caramelo: '#f3dbc3',   // Actualizado al nuevo fondo 
          chocolate: '#b03648',  // Actualizado al nuevo color principal
          marron: '#c02741',     // Actualizado al nuevo color llamativo
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
        'hero-gradient': 'linear-gradient(to bottom right, #eaccad, #e8c39e)',
      },
    },
  },
  plugins: [],
};