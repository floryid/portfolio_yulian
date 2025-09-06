/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'void-black': '#0D0F17',
        'dark-metal': '#1A1E29',
        'neon-cyan': '#00E5CC',
        'electric-pink': '#FF2A6D',
        'soft-white': '#E0E0E0',
        'terminal-gray': '#808080'
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
        'exo': ['Exo 2', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s infinite'
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 229, 204, 0.5)',
        'pink': '0 0 20px rgba(255, 42, 109, 0.5)'
      }
    },
  },
  plugins: [],
};