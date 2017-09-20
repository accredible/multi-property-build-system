var gulp = require('gulp');
var newer = require('gulp-newer');
var replace = require('gulp-replace');
var package = require('../../package.json');


var src = [
  '**/*.html',
];
var opts = {
  cwd: global.config.cwd,
};
var cachebust = package.version+'-'+Date.now();


gulp.task('html-build', function (done) {
  return gulp
    .src(src, opts)
    .pipe(replace('||VERSION||', package.version))
    .pipe(replace('||CACHEBUST||', cachebust))
    .pipe(gulp.dest('./build/'));
});


gulp.task('html-watch', function (done) {
  gulp.watch(src, opts, ['html-watch-stream']);
  return createWatchStream();
});
gulp.task('html-watch-stream', createWatchStream);


function createWatchStream(){
  return gulp
    .src(src, opts)
    .pipe(newer('./build/'))
    .pipe(replace('||VERSION||', package.version))
    .pipe(replace('||CACHEBUST||', cachebust))
    .pipe(gulp.dest('./build/'))
    .pipe(global.browserSync.stream());
}
