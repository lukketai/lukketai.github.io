/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-0.4deg)' },
          '35%':       { transform: 'translateY(-14px) rotate(0.3deg)' },
          '65%':       { transform: 'translateY(7px) rotate(-0.2deg)' },
        },
      },
    },
  },
  plugins: [],
}
