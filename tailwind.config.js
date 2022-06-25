module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cap:['Capriola', 'sans-serif'],
      pop:['Poppins', 'sans-serif'],
      mono:['Major Mono Display', 'monospace'],
    },
    extend: {
      animation: {
        blob: "blob 12s infinite",
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
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  variants: {
    // textColor: ['responsive', 'hover', 'focus', 'group-hover'],
     },
  
}
