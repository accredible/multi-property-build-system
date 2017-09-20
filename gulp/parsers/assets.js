var gulp = require('gulp');
var newer = require('gulp-newer');
var gulpif = require('gulp-if');


var src = [
  '**/*',
  '!**/*\\.+(html|bundle.js|scss)', // Files handled by other tasks
];
var opts = {
  cwd: global.config.cwd,
};


gulp.task('assets-build', function (done) {
  return gulp
    .src(src, opts)
    .pipe(gulp.dest('./build/'));
});


gulp.task('assets-watch', function (done) {
  gulp.watch(src, opts, ['assets-watch-stream']);
  return createWatchStream();
});
gulp.task('assets-watch-stream', createWatchStream);


function createWatchStream(){
  return gulp
    .src(src, opts)
    .pipe(newer('./build/'))
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.stream());
}
