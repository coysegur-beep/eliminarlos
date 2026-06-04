/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1A7A4A',
          dark: '#125C38',
          darker: '#0A3D25',
          light: '#22A060',
          accent: '#A8FF3E',       // verde lima eléctrico — único en el nicho
        },
        ink: {
          DEFAULT: '#0A0E14',
          soft: '#141B25',
          muted: '#6B7A8D',
          light: '#A8B4C2',
        },
        surface: {
          DEFAULT: '#F8F9FA',
          card: '#FFFFFF',
          dark: '#0A0E14',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1280px',
        tight: '1040px',
      },
      animation: {
        'pulse-soft': 'pulseSoft 2.5s infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(168, 255, 62, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 0 10px rgba(168, 255, 62, 0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
