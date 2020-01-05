// import webpack from 'webpack'
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports =  {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  resolve: {
    extensions: ['*', '.js','.json']
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true // set to false to see a list of every file being bundled.
    }),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "aboutus.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/register.html",
      filename: "register.html"
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']}
    ]
  }
}
