module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pinkLight': '#f72585',
      'pinkDark': '#b5179e',
      'purpleLight': '#7209b7',
      'purpleMid': '#560bad',
      'purpleDark': '#480ca8',
      'purpleExtraDark': '#3a0ca3',
      'blueExtraDark': '#3f37c9',
      'blueDark': '#4361ee',
      'blueLight': '#4895ef',
      'blueExtraLight': '#4cc9f0',
      'green': '#FF715B',
      'greenDark': '#20BF55',
      'black': '#000000',
      'white': '#ffffff',

    },
    fontFamily: {
      cap:['Capriola', 'sans-serif'],
      pop:['Poppins', 'sans-serif'],
      mono:['Major Mono Display', 'monospace'],
    },
    extend: {
      content: {
        quote: 'About',
      },
      animation: {
        blob: "blob 12s infinite",
        circular: " circular 12s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
            
          },
          "33%": {
            transform: "translate(50px, -50px) scale(1.5)",
          },
          "66%": {
            transform: "translate(-50px, 50 px) scale(0.7)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        },
        circular: {
          "0%": {
            transform: "scale(0)"
          },
          "50%": {
            transform: "scale(1)"
          },
          "100%": {
            transform: "scale(0)"
          },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
     },
  
}
