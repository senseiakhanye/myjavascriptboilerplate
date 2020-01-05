// import webpack from 'webpack'
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports =  {
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, "src/vendor"),
    main: path.resolve(__dirname, "src/index")
  },
  target: 'web',
  resolve: {
    extensions: ['*', '.js','.json']
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: "[name].[chunkhash].js"
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    // Global loader configuration
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true // set to false to see a list of every file being bundled.
    }),

    // Generate an external css file with a hash in the filename
    // new ExtractTextPlugin("[name].[md5:contenthash:hex:20].css"),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
      // Properties you define here are available in index.html
      // using htmlWebpackPlugin.options.varName
      // trackJSToken: "INSERT YOUR TOKEN HERE"
    }),

    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "aboutus.html"
    })
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader']},
      // {test: /\.css$/, use: ['style-loader', 'css-loader']}
      {test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader']},
      {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']}
    ]
  }
}
