'use strict'

var gulp = require('gulp')
var webpack = require('webpack')
var gutil = require('gulp-util')
var path =require('path')
//var eslint = require('gulp-eslint')

var dist = 'static'

function wptask(mode) {

    var cfg = genWebpackConfig({
        dest: dist + '/d',
        env: process.env.NODE_ENV,
        watchMode: mode === 'watch',
    })

    return function (cb) {
        webpack(cfg, function (err, stats) {
            if (err) throw new gutil.PluginError('webpack:build', err)

            var statsJson = stats.toJson()
            var needLog = mode === 'watch'
                || statsJson.errors.length
                || statsJson.warnings.length

            if (needLog) {
                gutil.log('[webpack:build]', stats.toString({
                    colors: true,
                }))
            }
            cb()
        })
    }
}

gulp.task('build-scripts', wptask())
gulp.task('watch-build-scripts', wptask('watch'))

function genWebpackConfig(opt) {

    // default config
    var cfg = {
        entry: {
            'index': './assets/',
        },
        output: {
            filename: '[name]/index.js',
            path: opt.dest,
        },
        devtool: '#source-map',
       
       
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015']
                    },
                },
                {test: /\.css$/, loader: 'style!css?localIdentName=[local]___[hash:base64:5]&sourceMap'},
                {test: /\.png$/, loader: "url-loader?mimetype=image/png"},
                {test: path.resolve(__dirname, 'node_modules/Swipe/swipe.js'), loader: "exports-loader?Swipe" },
  
            ],
        },
         resolve: {
            //root: path.resolve(__dirname, 'node_modules/blueimp-load-image/js/'),
            alias: {
                // 'load-image': [
       //              path.resolve(__dirname, 'node_modules/blueimp-load-image/js/load-image.all.min.js'),
       //              //path.resolve(__dirname, 'node_modules/blueimp-load-image/js/load-image.all.min.js')
       //          ],
                'Swipe': [
                     path.resolve(__dirname, 'node_modules/Swipe/swipe.js'),
                ]
            }
       },
        plugins: [
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.CommonsChunkPlugin('lib/base.js'),
            // new webpack.ProvidePlugin({
            //     'window.Swipe': 'Swipe'
            // })
            // new webpack.ProvidePlugin({
            //     Swipe: 'Swipe'
            // })
        ]
        
    }

    // watch mode
    if (opt.watchMode) cfg.watch = true

    // env
    switch (opt.env) {
        case 'production':
            // enable uglify on production
            cfg.plugins.push(
                new webpack.optimize.UglifyJsPlugin({
                    compressor: {warnings: false},
                })
            )
            break
    }

    return cfg
}


//gulp.task('watch-scripts', function () {
//    return gulp.watch([
//        './assets/**/*.js',
//        '!./assets/xx*/**/*',
//
//    ], gulp.parallel('scripts'))
//})

gulp.task('watch-scripts', gulp.parallel(
    'watch-build-scripts'
))

gulp.task('watch', gulp.parallel(
    'watch-scripts'
))
