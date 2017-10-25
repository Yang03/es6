const path = require('path')
module.exports = {
    entry: {
        'throttle': './src/test-throttle-decorator.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env'],
                plugins: ['babel-plugin-transform-decorators-legacy']
              }
            }
          }
        ]
      }
  }