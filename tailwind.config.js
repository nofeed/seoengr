module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Quattrocento"', 'serif'],
        'sans-serif': ['"Questrial"', 'sans-serif'],
      },
    },
  },
  plugins: []
}
