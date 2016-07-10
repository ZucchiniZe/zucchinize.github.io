var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'styles': './scss/main.scss'
  },
  output: {
    path: path.dirname(__dirname) + '/assets/static',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader!sass-loader') },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader') },
      { test: /\.(woff2?|ttf|eot|svg|png|jpe?g|gif)$/,
        loader: 'file' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ]
};
