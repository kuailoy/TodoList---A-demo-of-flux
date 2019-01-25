/*
 * @Author: handing
 * @Date: 2019-01-21 16:18:33
 * @Last Modified by: handing
 * @Last Modified time: 2019-01-25 15:34:19
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    dynamic: path.join(__dirname, './src/dynamic/index'),
    nested: path.join(__dirname, './src/nested/index')
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
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './index.html'),
      chunks: ['dynamic']
    }),
    new HtmlWebpackPlugin({
      filename: 'nested.html',
      template: path.join(__dirname, './index.html'),
      chunks: ['nested']
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