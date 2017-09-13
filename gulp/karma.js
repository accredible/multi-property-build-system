var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('karma', [ 'args' ], function (done) {
  new Server({
    configFile: __dirname+'/../karma.conf.js',
    // Additional config options OVERRIDE the `configFile`
    basePath: global.config.cwd,
    singleRun: true
  }, done).start();
});

// REFERENCES
//    https://github.com/karma-runner/gulp-karma
