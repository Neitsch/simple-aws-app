var webpack = require('webpack');
var path = require('path');

const config = {

  // Gives you sourcemaps without slowing down rebundling
  devtool: 'eval-source-map',
  entry: [
    path.join(__dirname, 'app/components/Page.jsx')
  ],
  output: {
    libraryTarget: 'commonjs2',
    library: 'lib.js',
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = config;
