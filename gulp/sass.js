var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglifycss');

gulp.task('sass', function () {

    global.config = {
      env: 'red',
      cwd: './products/certificate-standalone',
      product: 'certificate-standalone',
    };

  var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%'],
  };

  var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded', // outputStyle: 'compressed'
    precision: 10,
  };

  var uglifyOptions = {};

  return gulp
    .src(global.config.cwd+'/**/[^_]*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(uglify(uglifyOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});

// REFERENCES
//   https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js#L86
//   https://www.sitepoint.com/simple-gulpy-workflow-sass/
