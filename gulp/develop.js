var gulp = require('gulp');
var runSequence = require('run-sequence');


global.browserSync = require('browser-sync').create();


require('./parsers/clean.js');
require('./parsers/env.js');
require('./parsers/sass.js');
require('./parsers/js.js');
require('./parsers/js-lint.js');
require('./parsers/html.js');
require('./parsers/assets.js');


gulp.task('develop', function (done) {
  return runSequence(
    'clean',
    'env',
    [
      'sass-watch',
      'js-watch',
      'js-lint-watch',
      'html-watch',
      'assets-watch'
    ],
    'browsersync'
  );
});


gulp.task('browsersync', function (done) {
  global.browserSync.init({
    server: './build/'
  });
});
