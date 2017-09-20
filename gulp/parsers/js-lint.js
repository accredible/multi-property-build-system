var gulp = require('gulp');
var eslint = require('gulp-eslint');
var changedInPlace = require('gulp-changed-in-place');


var src = [
  '**/*.js',
  '!node_modules/**',
];
var opts = {
  cwd: global.config.cwd,
};
var eslintOptions = {
  "rules": {
    "camelcase": 1,
    "comma-dangle": 2,
    "quotes": 0
  }
};


gulp.task('js-lint', function () {
  gulp
    .src(src, opts)
    .pipe(eslint(eslintOptions))
    .pipe(eslint.format());
});


gulp.task('js-lint-watch', function () {
  gulp.watch(src, opts, ['js-lint-watch-stream']);
  return createWatchStream();
});
gulp.task('js-lint-watch-stream', createWatchStream);


function createWatchStream(){
  gulp
    .src(src, opts)
    .pipe(changedInPlace())
    .pipe(eslint(eslintOptions))
    .pipe(eslint.format());
}
