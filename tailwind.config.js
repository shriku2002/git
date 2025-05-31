/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#76b947',
          DEFAULT: '#4d8c40',
          dark: '#2a5d2a',
        },
        'secondary': {
          light: '#e6f4e3',
          DEFAULT: '#d0e7c8',
          dark: '#b8d5ad',
        }
      },
      backgroundImage: {
        'login-gradient': 'linear-gradient(135deg, #76b947 0%, #2a5d2a 100%)',
      }
    },
  },
  plugins: [],
}