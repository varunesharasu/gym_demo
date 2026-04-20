/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        royal: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3',
          800: '#312e81',
          900: '#1e1b4b',
          950: '#020617',
        },
        primary: {
          50:  '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3d0066',
        },
        accent: {
          50:  '#fff0f6',
          100: '#ffe0ed',
          200: '#ffc0db',
          300: '#ff99c8',
          400: '#ff4d9f',
          500: '#e91e63',
          600: '#d91e5b',
          700: '#c1174f',
          800: '#a31648',
          900: '#850a45',
          950: '#620427',
        },
        energy: {
          50:  '#f0f9ff',
          100: '#e0f7ff',
          200: '#b3eeff',
          300: '#81e6ff',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#0c2d3d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'count-up': 'countUp 0.4s ease-out',
        'bounce': 'bounce 1s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'border-pulse': 'borderPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(233, 30, 99, 0.4), 0 0 20px rgba(168, 85, 247, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(233, 30, 99, 0.6), 0 0 40px rgba(168, 85, 247, 0.4)' 
          },
        },
        borderPulse: {
          '0%, 100%': { boxShadow: 'inset 0 0 10px rgba(168, 85, 247, 0.3)' },
          '50%': { boxShadow: 'inset 0 0 20px rgba(233, 30, 99, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};
