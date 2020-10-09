const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    require.resolve('style-loader'),
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                          modules: {
                              localIdentName: '[local]'
                          }
                        }
                    },
                    require.resolve('sass-loader')
                ]
            }
        ]
    }
});