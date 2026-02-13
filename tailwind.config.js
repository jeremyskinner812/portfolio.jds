/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8edf4',
          100: '#c5d1e3',
          200: '#9fb3d0',
          300: '#7995bd',
          400: '#5c7eaf',
          500: '#3f67a1',
          600: '#355a91',
          700: '#2a4a7c',
          800: '#1e3a5f',
          900: '#0f2540',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
