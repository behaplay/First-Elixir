/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      colors : {
        siniy: '#2A3855',
        aran: '#FDD428',
        siri: '#6a6a6a',
        aqua: '#3D4C6F',
      },
      backgroundImage: {
        'swiper1': "url('./src/image/header-1.jpg')",
        'swiper2': "url('./src/image/header-5.jpg')",
        'swiper3': "url('./src/image/header-6.jpg')",
        'bg-image': "url('./src/image/video-screenshot-2.jpg')"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
})


