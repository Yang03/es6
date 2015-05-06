var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    browserify({
        entries: ['./scripts/App.js'],
        extensions: ['.js'],
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('scripts'));
});

gulp.task('default', ['build']);
