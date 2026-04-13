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
          50:  '#eff4ff',
          100: '#dae3ff',
          200: '#bdcfff',
          300: '#90b0ff',
          400: '#5c85ff',
          500: '#2563eb',
          600: '#1a4fd4',
          700: '#153eab',
          800: '#16358c',
          900: '#1a3a8a',
          950: '#0f1f4d',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(37, 99, 235, 0.6)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(37, 99, 235, 0.4), 0 0 20px rgba(37, 99, 235, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(37, 99, 235, 0.6), 0 0 40px rgba(37, 99, 235, 0.4)' 
          },
        },
      },
    },
  },
  plugins: [],
};
