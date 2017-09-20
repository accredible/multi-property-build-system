var gulp = require('gulp');
var runSequence = require('run-sequence');


require('./parsers/karma.js');


gulp.task('test', function (done) {
  return runSequence(
    'karma',
    // 'e2e',
    done
  );
});

// REFERENCES
//    https://github.com/karma-runner/gulp-karma
