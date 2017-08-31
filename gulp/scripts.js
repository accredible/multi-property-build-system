var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {

  var browserifyOptions = {
    insertGlobals: (global.config.env !== 'production'), // Faster builds, but more bytes
    debug: (global.config.env !== 'production'), // Source maps, for debugging
  };

  var uglifyOptions = {
  };

  return gulp
    .src(global.config.cwd+'/**/*.bundle.js')
    .pipe(sourcemaps.init())
    .pipe(browserify(browserifyOptions))
    .pipe(uglify(uglifyOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});
