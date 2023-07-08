/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: '#E7E7EB',
        secondary: '#A09FB1',
        lightBlue: '#1E213A',
        darkBlue: '#100E1D'
      },
      boxShadow: {
        buttons:  '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'

      },

    },
  },  
  plugins: [],
}

