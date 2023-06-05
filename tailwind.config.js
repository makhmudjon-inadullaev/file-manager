/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        content: '0 0 2px rgba(58,66,75,.1), 0 2px 4px rgba(58,66,75,.2)',
        menu: '0 11px 14px -7px rgba(0,0,0,.3)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

