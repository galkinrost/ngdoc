var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var src = ['lib/**/*.js', 'test/**/*.js', 'gulpfile.js'];

gulp.task('lint', function () {
    return gulp.src(src)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// run unit tests
gulp.task('test', function () {
    process.env.NODE_ENV = 'test';
    return gulp.src('test/index.js')
        .pipe(mocha({
            reporter: 'list',
            timeout: 3000
        }));
});

gulp.task('watch', function () {
    gulp.watch(src, ['lint']);
});