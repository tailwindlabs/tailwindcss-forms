const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './kitchen-sink.html'],
  theme: {
    extend: {
      forms: ({ theme }) => ({
        baseTextColor: colors.amber[500],
        baseBorderRadius: theme('borderRadius.xs'),
        baseFocusBorderColor: theme('colors.yellow.500'),
      }),
    },
  },
  plugins: [require('./src')],
}
