var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (done) {
  return runSequence(
    'args',
    'clean',
    [
      'env',
      'sass',
      'js-bundles',
      'html',
      'assets',
    ],
    done
  );
});
