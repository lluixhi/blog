const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "static")
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
            template: path.resolve(__dirname, 'templates', 'index.tmpl.html')
        })
    ]
  };