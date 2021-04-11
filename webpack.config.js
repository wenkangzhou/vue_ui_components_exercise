'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const NODE_ENV = process.env.NODE_ENV

const modeMap = {
  'dev': 'development',
  'prod': 'production',
  'compat': 'production'
}

module.exports = {
  mode: modeMap[NODE_ENV],
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new VueLoaderPlugin(),
  ]
}