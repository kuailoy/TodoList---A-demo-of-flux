/*
 * @Author: handing
 * @Date: 2019-01-21 16:18:33
 * @Last Modified by: handing
 * @Last Modified time: 2019-01-24 14:03:28
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    dynamic: path.join(__dirname, './src/dynamic/index')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'dynamic.html',
      template: path.join(__dirname, './index.html'),
      chunks: ['dynamic']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}