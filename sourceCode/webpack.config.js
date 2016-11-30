var webpack = require('webpack')

module.exports = {
    entry:{
        'index': './src/index'
    },
    output: {
        filename: '[name]/index.js',
        path: 'dest',
    },
    devtool: '#source-map',
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('lib/base.js'),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0']

                },
            }
        ],
    }
}
