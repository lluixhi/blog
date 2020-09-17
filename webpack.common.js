const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
module.exports = {
    entry: path.resolve(__dirname, 'src', 'client', 'index.tsx'),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      plugins: [ PnpWebpackPlugin ]
    },
    resolveLoader: {
      plugins: [ PnpWebpackPlugin.moduleLoader(module) ]
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "build")
    },
    module: {
      rules: [
        {
          test: /\.html?$/,
          loader: 'html-loader'
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'templates', 'index.tmpl.html')
        })
    ]
  };