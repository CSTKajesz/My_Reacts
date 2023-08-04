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
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sourceSansPro: ['Source Sans Pro', 'sans-serif'],
      },
      //ha ezt így nem adod meg akkor nem használja a méreteket!!!
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-font-inter'),
  ],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}

