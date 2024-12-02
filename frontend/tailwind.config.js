/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        kk:{
          100:'#ccd5e9'
        }
      }
    },
    
  },
  plugins: [],
}

