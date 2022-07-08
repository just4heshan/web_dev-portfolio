module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'greenExtraDark': '#39b89a',
      'greenDark': '#A084CF',
      'greenLight': '#79d3be',
      'greenExtraLight': '#b9eee1',
      'blueDark': '#007bff',
      'blueLight': '#0091f7',
      'blueExtraLight': '#00a7ef',
      'peachDark': '#FF5D5D',
      'peachLight': '#FF8C8C',
      'peachExtraLight': '#FFC3C3',
      'redLight': '#fec9d7',
      'redExtraLight': '#4cc9f0',
      'black': '#000000',
      'white': '#ffffff',
      'gray': '#e7eeed',
      'meroon': '#006466',
      'meroon0': '#065a60',
      'meroon1': '#0b525b',
      'meroon2': '#144552',
      'meroon3': '#1b3a4b',
      'meroon4': '#212f45',
      'meroon5': '#272640',
      'meroon6': '#312244',
      'meroon7': '#3e1f47',
      'meroon8': '#4d194d',



    },
    fontFamily: {
      cap:['Capriola', 'sans-serif'],
      pop:['Poppins', 'sans-serif'],
      mono:['Major Mono Display', 'monospace'],
    },
    extend: {
      skew: {
        '10': '10deg',
      },
      rotate: {
        '8': '8deg',
      },
      content: {
        quote: 'Heshan Rathnayake',
      },
      animation: {
        blob: "blob 12s infinite",
        circular: " circular 6s infinite",
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
            transform: "scale(1)"
          },
          "50%": {
            transform: "scale(1.5)"
          },
          "100%": {
            transform: "scale(1)"
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
