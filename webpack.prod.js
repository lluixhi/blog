const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
          {
            test: /\.s(a|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { modules: true }
              },
              'sass-loader'
            ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        }),
      ]
});