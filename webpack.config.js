const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: './src/webpack.index.ts',
  output: {
    filename: 'script.bundle.js',
    path: path.resolve(__dirname, './dist/')
  },
  resolve: {
    extensions:['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './src/layout'),
      to: path.resolve(__dirname, './dist')
    }]),
    new ExtractTextPlugin({
      filename:'style.css' //put style.css in theme's root directory
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './wwwroot/'
  }
};

module.exports = config;
