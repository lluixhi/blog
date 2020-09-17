const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
module.exports = {
    entry: path.resolve(__dirname, 'src', 'client', 'index.tsx'),
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
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
            use: ['html-loader']
        },
        {
          test: /\.tsx?$/,
          use: ['babel-loader']
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