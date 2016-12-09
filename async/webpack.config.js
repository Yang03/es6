var webpack = require('webpack')

module.exports = {
    entry:{
        'generator': './src/generator/index',
        'callback': './src/callback/index',
        'promise': './src/promise/index',
        'await': './src/await/index',

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
