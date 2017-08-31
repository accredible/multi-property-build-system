var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', [ 'build' ], function (done) {
  console.log('...now serve + lint');
  /*
  return runSequence(
    'config',
    'clean',
    [
      'copy',
      'sass',
      // 'js',
      // 'static' // Static files (everything that ISN'T handled by other tasks; like js, scss)
    ],
    'browser-sync',
    done
  );
  */
});
