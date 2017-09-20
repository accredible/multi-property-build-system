var gulp = require('gulp');
var runSequence = require('run-sequence');


require('./parsers/clean.js');
require('./parsers/env.js');
require('./parsers/sass.js');
require('./parsers/js.js');
require('./parsers/html.js');
require('./parsers/assets.js');


gulp.task('build', function (done) {
  return runSequence(
    'clean',
    'env',
    [
      'sass-build',
      'js-build',
      'html-build',
      'assets-build'
    ],
    done
  );
});
