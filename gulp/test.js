var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('test', [ 'build' ], function (done) {
  new Server({
    configFile: __dirname+'/../karma.conf.js',
    basePath: global.config.cwd,
    singleRun: true
  }, done).start();
});

// REFERENCES
//    https://github.com/karma-runner/gulp-karma
