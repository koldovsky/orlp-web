var gulp = require('gulp');
var shell = require('gulp-shell');
var clean = require('gulp-clean');
var htmlreplace = require('gulp-html-replace');
var runSequence = require('run-sequence');

// This is main task for production use

gulp.task('compile:ts', ['clean:ts'], shell.task([
    'tsc'
]));

gulp.task('clean:ts', function () {
    return gulp.src(['./app/**/*.js', './app/**/*.js.map', './app/**/*.d.ts'], { read: false })
        .pipe(clean());
});
