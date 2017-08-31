var gulp = require('gulp');
var newer = require('gulp-newer');

gulp.task('assets', function (done) {

  // Match ALL files, excluding those handled by other tasks
  var task = gulp
    .src([global.config.cwd+'/**/*', '!'+global.config.cwd+'/**/*\\.+(html|js|scss)'])
    .pipe(newer('./build/'))
    .pipe(gulp.dest('./build/'));

  // If browserSync is available, then we're running locally, stream changes
  if(global.browserSync){
    task.pipe(global.browserSync.stream());
  }

  return task;
});
