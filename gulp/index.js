var gulp = require('gulp');
var runSequence = require('run-sequence');

require('./config-apply');

gulp.task('default', ['serve']);

gulp.task('serve', function(done) {
  runSequence('config-apply', 'start-server', done);
});

gulp.task('build', function(done) {
  runSequence('config-apply', 'start-build', done);
});

gulp.task('start-server', function(done) {
  console.log('Serving', global.config);
});

gulp.task('start-build', function(done) {
  console.log('start-build', global.config);
});
