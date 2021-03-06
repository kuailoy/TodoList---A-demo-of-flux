var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, './src/index')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].min.js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './index.html'),
      chunks: ['index']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'containers': path.resolve(__dirname, './src/containers'),
      'components': path.resolve(__dirname, './src/components'),
      'actions': path.resolve(__dirname, './src/actions'),
      'reducers': path.resolve(__dirname, './src/reducers')
    }
  },
  externals: {
    "react": 'React',
    "react-dom": 'ReactDOM',
    "redux": 'Redux',
    "react-router-dom": 'ReactRouterDOM'
  }
}