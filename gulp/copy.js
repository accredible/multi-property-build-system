var gulp = require('gulp');

gulp.task('copy', function (done) {
  console.log('Copying files for', global.config, ' (a demo gulp task, for now)');
  return gulp
    .src(global.config.cwd+'/index.html')
    .pipe(gulp.dest('./dist/'));
});
