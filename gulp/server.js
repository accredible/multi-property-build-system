var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
  global.browserSync.init({
    server: "./dist"
  });
  global.browserSync.watch(['./dist'], { ignored: '*.map.css' });


  // gulp.watch("sass/**/*.scss", ['sass']);
  // gulp.watch("views/**/*.pug", ['views']);
  // gulp.watch("dist/**/*.html").on('change', browserSync.reload);
});


// REFERENCES
//   https://gist.github.com/joaoevangelista/464851796c53d9afcd8e84fd894ce7d4
