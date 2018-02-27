const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/webpack.index.ts',
  output: {
    filename: '[name].js',
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
    new ExtractTextPlugin({
      filename:'[name].css'
    }),
  ],
  devtool: 'source-map'
};

module.exports = config;
