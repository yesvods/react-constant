'use strict';

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    library: 'Constant',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'source-map',
};