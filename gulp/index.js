var gulp = require('gulp');
var runSequence = require('run-sequence');

require('./config-apply');
require('./start-server');
require('./start-build');

gulp.task('serve', function(done) {
  runSequence('config-apply', 'start-server', done); // Each task runs in SEQUENCE
});

gulp.task('build', function(done) {
  runSequence('config-apply', 'start-build', done); // Each task runs in SEQUENCE
});

gulp.task('default', ['serve']);
