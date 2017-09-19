var gulp = require('gulp');
var replace = require('gulp-replace');
var package = require('../../package.json');

gulp.task('env', function (done) {
  return gulp
    .src(`./env/${global.config.env}/**/*`)
    .pipe(replace('||VERSION||', package.version))
    .pipe(gulp.dest(global.config.cwd+'/env')); // NOT to the build directory!
});
