const path = require('path');

module.exports = {
  entry: {
   login: './src/main.js',
   user: './src/mainUser.js',
   popup: './src/popUp.js',
   currency:'./src/currency.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    },
  mode: 'development',
};

