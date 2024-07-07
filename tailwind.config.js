/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "vertical": "repeat(auto-fill, 1fr)",
        "horizontal": "repeat(320px, minmax(0, 1fr))",
        "3-cols": "repeat(3, minmax(400px, 1fr))"
      },
      gap: {
        "gridspace": "clamp(1rem, 2vmin, 2rem)"
      },
      margin: {
        "gridspace": "clamp(1rem, 2vmin, 2rem)"
      }
    },
    colors: {
      'text': 'var(--text)',
      'background': 'var(--background)',
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'accent': 'var(--accent)',
      'accent-transparent': 'var(--accent-transparent)',
      'gray': '#ecf8f5'
     },
     fontFamily: {
      inter: 'Inter',
    },
     
  },
  plugins: [],
}

