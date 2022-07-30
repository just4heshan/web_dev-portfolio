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
      mochiy:['Mochiy Pop One', 'sans-serif'],
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
        zoom: " zoom 1.8s linear",
        fontAnim: "fontAnim 6s infinite",
        spin: "spin 90s infinite",
        intro1: "intro 23.8s linear infinite",
        intro2: "intro 17.0s linear infinite",
        intro3: "intro 22.6s linear infinite",
        intro4: "intro 19.4s linear infinite",
        intro5: "intro 24.0s linear infinite",
        intro6: "intro 29.8s linear infinite",
        intro7: "intro 21.0s linear infinite",
        intro8: "intro 22.6s linear infinite",
        intro9: "intro 19.4s linear infinite",
        intro10: "intro 24.0s linear infinite",
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
        zoom: {
          "0%": {
            transform: "scale(1) rotate(0)"
          },
          "25%": {
            transform: "scale(1.2) rotate(-270deg)"
          },
          "50%": {
            transform: "scale(1.4) rotate(-270deg)"
          },
          "75%": {
            transform: "scale(1.8) rotate(-270deg)"
          },
          "100%": {
            transform: "scale(2.0) rotate(-270deg)"
          },
        },
        fontAnim: {
          "0": {
            transform: "scale(1)"
          },
          "20": {
            transform: "scale(1.1)"
          },
          "40": {
            transform: "scale(1.3)"
          },
          "60": {
            transform: "scale(1.5)"
          },
          "80": {
            transform: "scale(1.2)"
          },
          "100": {
            transform: "scale(1)"
          }
          
        },
        spin: {
          "0": {
            transform: "rotate(0)"
          },
          "50": {
            transform: "rotate(120)"
          },
          "100": {
            transform: "rotate(-120)"
          },
        },
        intro: {
          "0%": {
            transform: "translate(-100vw, 0)",
          },
          "33%": {
            transform: "translate(-50vw, 0)",
          },
          "66%": {
            transform: "translate(0vw, 0)",
          },
          "100%": {
            transform: "translate(100vw, 0)",
          },
        },
    },
  },  
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
     },
}
