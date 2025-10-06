/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vivid-orange': '#FF6100',
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
        neutral: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        'display': ['"Neue Haas Grotesk Display"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        'thin': '100',
        'light': '300',
        'regular': '400',
        'medium': '500',
        'bold': '700',
        'black': '900',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 97, 0, 0.5), 0 0 40px rgba(255, 97, 0, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(255, 97, 0, 0.8), 0 0 60px rgba(255, 97, 0, 0.4)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
