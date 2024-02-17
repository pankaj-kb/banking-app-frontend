/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accentpurple: '#3F357E',
        accentwhite: '#FBF9F9',
        accentblack: '#0D1113',
        accentgray: '#20242c',
        accentoffwhite: '#EEF5FF',
      }
    },
  },
  plugins: [],
}