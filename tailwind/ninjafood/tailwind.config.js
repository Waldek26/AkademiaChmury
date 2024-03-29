/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2DS',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }
    'md': '768px',
    // => @media (min-width: 768px) { ... }
    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }
    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }
  }
},
  variants: { },
plugins: [],
}

