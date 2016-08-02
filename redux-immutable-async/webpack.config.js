var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
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
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader'],
      include: path.join(__dirname, 'src/') //js的存放目录
    }]
  }
};

//var reduxSrc = path.join(__dirname, '..', '..', 'src')
//var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
//var fs = require('fs')
//if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
//  // Resolve Redux to source
//  module.exports.resolve = { alias: { 'redux': reduxSrc } }
//  // Compile Redux from source
//  module.exports.module.loaders.push({
//    test: /\.js$/,
//    loaders: [ 'babel' ],
//    include: reduxSrc
//  })
//}
