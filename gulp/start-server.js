var gulp = require('gulp');

gulp.task('start-server', function (done) {
  console.log('Starting server for', global.config);
  return gulp.src(global.config.cwd+'/index.html')
    .pipe(gulp.dest('./public/'));
});
