// var merge = require('node.extend');
var path = require('path');
var webpack = require('webpack');

// Webpack plugins
var CleanWebpackPlugin = require('clean-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    lib: APP_DIR + '/lib.js',
    test: APP_DIR + '/test.js'
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },

  plugins: [
    new CleanWebpackPlugin('dist', {
      verbose: true
    }),

    // optimizations
    //*
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
    // */
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: [
          /node_modules/,
          /dist/,
          /grammar/
        ]
      }
    ],
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
