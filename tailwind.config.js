module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_drafts/*.md',
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
  purge: [
    './**/*.html'
  ],
  plugins: []
}
