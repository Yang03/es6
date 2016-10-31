var path = require('path');
var webpack = require('webpack');

var NpmInstallPlugin = require('npm-install-webpack-plugin')


module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index'  //react 的main js
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new NpmInstallPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot-loader/webpack', 'babel'],
            exclude: '/node_modules'
        }]
    }
};
