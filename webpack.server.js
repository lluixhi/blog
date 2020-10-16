const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: path.resolve(__dirname, 'src', 'server', 'server.ts')
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    plugins: [ PnpWebpackPlugin ]
  },
  resolveLoader: {
    plugins: [ PnpWebpackPlugin.moduleLoader(module) ]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  target: 'node',
  externals: [
    nodeExternals(),
    'pg-native'
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      }
    ]
  },
  plugins: [
      new CleanWebpackPlugin()
  ]
};