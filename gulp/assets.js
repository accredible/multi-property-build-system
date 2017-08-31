var gulp = require('gulp');
// var replace = require('gulp-replace');

gulp.task('assets', function (done) {

  // Match ALL files
  // ...excluding those handled by other tasks
  return gulp
    .src([
      global.config.cwd+'/**/*',
      '!'+global.config.cwd+'/**/*\\.+(html|js|scss)'
    ])
    .pipe(gulp.dest('./dist/'));
});
