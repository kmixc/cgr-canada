/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        cgr: {
          black: '#000000',
          dark: '#111111',
          gray: '#1a1a1a',
          mid: '#333333',
          light: '#888888',
          white: '#ffffff',
          accent: '#c8a96e',
          yellow: '#F6D51F',
        }
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      }
    },
  },
  plugins: [],
}
