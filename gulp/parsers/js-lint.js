var gulp = require('gulp');
var eslint = require('gulp-eslint');
// var cache = require('gulp-cached');
var changedInPlace = require('gulp-changed-in-place');

gulp.task('js-lint', function () {

  var eslintOptions = {
    "rules": {
      "camelcase": 1,
      "comma-dangle": 2,
      "quotes": 0
    }
  };

  var task = gulp
    .src([global.config.cwd+'/**/*.js', ,'!node_modules/**'])
    .pipe(changedInPlace())
    .pipe(eslint(eslintOptions))
    .pipe(eslint.format());

  return task;
});
