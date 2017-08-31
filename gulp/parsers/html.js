var gulp = require('gulp');
var newer = require('gulp-newer');
var replace = require('gulp-replace');
var package = require('../../package.json');

var cachebust = package.version+'-'+Date.now();

gulp.task('html', function (done) {
  // Define our task
  var task = gulp
    .src(global.config.cwd+'/**/*.html')
    .pipe(newer('./dist/'))
    .pipe(replace('||VERSION||', package.version))
    .pipe(replace('||CACHEBUST||', cachebust))
    .pipe(gulp.dest('./dist/'));

  // If browserSync is available, then we're running locally, stream changes
  if(global.browserSync){
    task.pipe(global.browserSync.stream());
  }

  // Return the task
  return task;
});
