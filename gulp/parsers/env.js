var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require("gulp-rename");
var package = require('../../package.json');

gulp.task('env', function (done) {

  return gulp
    .src(global.config.envPath)
    .pipe(replace('||VERSION||', package.version))
    .pipe(rename('ENV.js'))
    .pipe(gulp.dest(global.config.cwd)); // Note, NOT to dist!
});
