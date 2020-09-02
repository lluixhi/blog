const path = require('path');
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
                    'style-loader',
                    {
                      loader: 'css-loader',
                      options: {
                          modules: {
                              localIdentName: '[local]'
                          }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "static")
    }
});