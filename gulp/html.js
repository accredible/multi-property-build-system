var gulp = require('gulp');
var replace = require('gulp-replace');
var package = require('../package.json');

var cachebust = package.version+'-'+Date.now();

gulp.task('html', function (done) {

  return gulp
    .src(global.config.cwd+'/**/*.html')
    .pipe(replace('||VERSION||', package.version))
    .pipe(replace('||CACHEBUST||', cachebust))
    .pipe(gulp.dest('./dist/'));
});
