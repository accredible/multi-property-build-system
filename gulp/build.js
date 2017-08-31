var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (done) {
  return runSequence(
    'config',
    'clean',
    'env',
    [
      'sass',
      'scripts',
      'html',
      'assets',
      // 'static / assets' // Static files (everything that ISN'T handled by other tasks; like js, scss)
    ],
    done
  );
});
