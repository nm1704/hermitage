/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2d2d53',       // deep charcoal navy - headers, primary text
        brass: '#31a9af',     // warm brass/gold - accent, CTAs
        sand: '#f0f0f7fe',      // warm off-white - page background
        sage: '#1f204b',      // muted sage - secondary text, tags
        line: '#bcc2f1',      // hairline borders on sand
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
