var path = require('path');
var SRC_DIR = path.join(__dirname, '/Client/src');
var DIST_DIR = path.join(__dirname, '/Client/dist');

module.exports = {
  watch: true,
  watchOptions: {
    poll: 1000
  },
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',

        },
      },
    ],
  },
};
