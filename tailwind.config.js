/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070A13',
          card: '#0D1426',
          panel: '#121C35',
          border: 'rgba(56, 232, 255, 0.15)',
          cyan: '#38E8FF',
          violet: '#9B7CFF',
          magenta: '#FF4FD8',
          green: '#00F5A0',
          yellow: '#FFDF00',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(56, 232, 255, 0.45)',
        'neon-violet': '0 0 15px rgba(155, 124, 255, 0.45)',
        'neon-magenta': '0 0 15px rgba(255, 79, 216, 0.45)',
        'hud-panel': '0 4px 20px -2px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(56, 232, 255, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'equalizer': 'equalize 1.2s ease-in-out infinite alternate',
      },
      keyframes: {
        equalize: {
          '0%': { height: '15%' },
          '100%': { height: '100%' },
        }
      }
    },
  },
  plugins: [],
}
