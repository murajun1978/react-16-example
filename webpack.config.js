const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './index.js'
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html'),
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: 4000,
    historyApiFallback: true,
    hot: true,
  },
}
