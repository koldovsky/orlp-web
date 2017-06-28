var gulp = require('gulp');
var shell = require('gulp-shell');
var clean = require('gulp-clean');
var htmlreplace = require('gulp-html-replace');
var runSequence = require('run-sequence');
var Builder = require('systemjs-builder');
var builder = new Builder('', 'systemjs.config.js');

// This is main task for production use

var mainBundleName = 'main.bundle.js';
var vendorBundleName = 'vendor.bundle.js';
var project_path = '';

/*gulp.task('release', function(done) {
    runSequence('clean', 'compile_ts', 'bundle_dev:vendor', 'bundle_dev:app', 'clean:ts', 'compile_ts', 'bundle:vendor', 'bundle:app', 'bundle_release', 'clean:ts', function() {
        done();
    });
});*/

gulp.task('dist', function(done) {
    runSequence('clean', 'compile_ts', 'bundle', 'clean:ts', function() {
        done();
    });
});

gulp.task('dist_dev', function(done) {
    runSequence('clean', 'compile_ts', 'bundle_dev', 'clean:ts', function() {
        done();
    });
});

gulp.task('bundle_release', function() {
	return gulp.src(project_path + 'index.html')
    .pipe(htmlreplace({
        'app': mainBundleName,
        'vendor': vendorBundleName
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('bundle', ['bundle:vendor', 'bundle:app'], function () {
    return gulp.src(project_path + 'index.html')
        .pipe(htmlreplace({
            'app': mainBundleName,
            'vendor': vendorBundleName
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('bundle:vendor', function () {
    return builder
        .buildStatic(project_path + 'app/vendor.js', './dist/' + vendorBundleName, { minify: true})
        .catch(function (err) {
            console.log('Vendor bundle error');
            console.log(err);
        });
});

gulp.task('bundle:app', function () {
    return builder
        .buildStatic(project_path + 'app/main.js', './dist/' + mainBundleName, { minify: true})
        .catch(function (err) {
            console.log('App bundle error');
            console.log(err);
        });
});

gulp.task('bundle_dev', ['bundle_dev:vendor', 'bundle_dev:app'], function () {
    return gulp.src(project_path + 'index.html')
        .pipe(htmlreplace({
            'app': mainBundleName,
            'vendor': vendorBundleName
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('bundle_dev:vendor', function () {
    return builder
        .buildStatic(project_path + 'app/vendor.js', './dist/' + vendorBundleName, { sourceMaps: 'inline' })
        .catch(function (err) {
            console.log('Vendor bundle error');
            console.log(err);
        });
});

gulp.task('bundle_dev:app', function () {
    return builder
        .buildStatic(project_path + 'app/main.js', './dist/' + mainBundleName, {  sourceMaps: 'inline' })
        .catch(function (err) {
            console.log('App bundle error');
            console.log(err);
        });
});

gulp.task('compile_ts', ['clean:ts'], shell.task([
    'tsc'
]));

gulp.task('clean', ['clean:ts', 'clean:dist']);

gulp.task('clean:dist', function () {
    return gulp.src(['./dist'], {read: false})
        .pipe(clean());
});

gulp.task('clean:ts', function () {
    return gulp.src(['./' + project_path + 'app/**/*.js', './' + project_path + 'app/**/*.js.map'], {read: false})
        .pipe(clean());
});


gulp.task('compile:ts', ['clean:ts'], shell.task([
    'tsc'
]));

gulp.task('clean:ts', function () {
    return gulp.src(['./app/**/*.js', './app/**/*.js.map', './app/**/*.d.ts'], { read: false })
        .pipe(clean());
});
