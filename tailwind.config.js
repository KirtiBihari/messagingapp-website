/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f5f5',
          100: '#ededed',
          200: '#d9d9d9',
          300: '#b8b8b8',
          400: '#8f8f8f',
          500: '#6d6d6d',
          600: '#555555',
          700: '#3f3f3f',
          800: '#262626',
          900: '#141414',
          950: '#0a0a0a',
        },
        accent: {
          100: '#fff4e6',
          300: '#ffc071',
          500: '#ffb845',
        },
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}