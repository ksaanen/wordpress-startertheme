const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: {
    scripts: [
      './src/ts/index.ts'
    ],
    styles: [
      './src/scss/index.scss'
    ]
  },
  output: {
    filename: '[name].bundle.js',
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
      },
      {
        test: /.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './src/layout'),
      to: path.resolve(__dirname, './dist')
    },
    {
      from: path.resolve(__dirname, './src/img'),
      to: path.resolve(__dirname, './dist')
    }]),
    new ExtractTextPlugin({
      filename:'[name].bundle.css' //put style.css in theme's root directory
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './wwwroot/',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
};

module.exports = config;
