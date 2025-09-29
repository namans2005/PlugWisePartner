import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0A2342',
        'energy-green': '#4CAF50',
        'vibrant-orange': '#FF6B35',
        'electric-yellow': '#FFD700'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

export default config