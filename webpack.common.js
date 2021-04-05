const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PnpWebpackPlugin = require('pnp-webpack-plugin');

module.exports = {
    entry: {
      main: path.resolve(__dirname, 'src', 'client', 'index.tsx'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      plugins: [ PnpWebpackPlugin ]
    },
    resolveLoader: {
      plugins: [ PnpWebpackPlugin.moduleLoader(module) ]
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, 'build', 'static'),
      publicPath: '/'
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.html?$/,
          loader: require.resolve('html-loader')
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          options: { envName: 'client' }
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'templates', 'index.tmpl.html'),
            excludeChunks: [ 'server' ]
        })
    ]
  };
