module.exports = {
  content: [
    "./docs/.vitepress/**/*.{vue,js}",
    "./docs/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        'vp-blue': '#3b82f6',
        'vp-purple': '#8b5cf6',
        'vp-text': '#374151',
      }
    }
  },
  darkMode: 'class',
  plugins: []
} 