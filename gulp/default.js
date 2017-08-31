var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Add browsersync to the global namespace
global.browserSync = browserSync;

gulp.task('default', [ 'build' ], function (done) {
  browserSync.init({
    server: './build'
  });

  gulp.watch(global.config.cwd+'/**/*.html', ['html']);
  gulp.watch(global.config.cwd+'/**/*.scss', ['sass']);
  gulp.watch(global.config.cwd+'/**/*.js', ['js-bundles']);
  gulp.watch([global.config.cwd+'/**/*', '!'+global.config.cwd+'/**/*\\.+(html|js|scss)'], ['assets']);
});
