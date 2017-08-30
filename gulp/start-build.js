var gulp = require('gulp');

gulp.task('start-build', function (done) {
  console.log('Building', global.config);
  return gulp.src(global.config.cwd+'/index.html')
    .pipe(gulp.dest('./public/'));
});
