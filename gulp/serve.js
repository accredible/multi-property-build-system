var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('serve', function (done) {
  return runSequence(
    'config-apply',
    'clean',
    'copy',
    done
  );
});
