/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'header': '0px 1px 6px 0px rgba(0, 0, 0, 0.10)'

      },
      colors: {
        'textPrimary': '#333',
        'cred': 'rgba(235, 87, 87, 0.90)'
      },
      container: {
        'center': true,
        'padding': '1rem'
      }
    },
  },
  plugins: [],
}

