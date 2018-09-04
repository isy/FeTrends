const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {
      path: [path.resolve(__dirname, 'assets/style')],
    },
    'postcss-nested': {},
    autoprefixer: {
      browsers: [
        'ie >= 11',
        'last 2 Edge versions',
        'last 2 Firefox versions',
        'last 2 Chrome versions',
        'last 2 Safari versions',
        'last 2 Opera versions',
        'last 2 iOS versions',
        'last 2 ChromeAndroid versions',
      ],
    },
  },
};