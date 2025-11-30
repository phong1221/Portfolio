/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pastel: {
          beige: '#F5E6D3',
          blue: '#D4E4F7',
          green: '#D4F1E8',
          'beige-dark': '#E8D4B8',
          'blue-dark': '#B8CEE8',
          'green-dark': '#B8E8D8',
        },
      },
      fontFamily: {
        mono: ['Space Mono', 'JetBrains Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
