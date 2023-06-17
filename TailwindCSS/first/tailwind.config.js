/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      title: `2.6rem;`,
      paragraph: `1.2rem;`
    },
    //így lehet saját stílusokat megadni, színben, fontban, majd csak az elnevezésekre hivatkozni
    extend: {
      colors: {
        primary: {
          500: '#FF33FF;',
          800: '#FFFF13;',
        }
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-font-inter'),
  ],
}

