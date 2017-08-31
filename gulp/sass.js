var gulp = require('gulp');
var newer = require('gulp-newer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglifycss');

gulp.task('sass', function () {
  var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%'],
  };
  var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded', // outputStyle: 'compressed'
    precision: 10,
  };
  var uglifyOptions = {};

  var task = gulp
    .src(global.config.cwd+'/**/[^_]*.scss')
    .pipe(newer('./dist/'))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(uglify(uglifyOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));

  // If browserSync is available, then we're running locally, stream changes
  if(global.browserSync){
    task.pipe(global.browserSync.stream());
  }

  return task;
});

// REFERENCES
//   https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js#L86
//   https://www.sitepoint.com/simple-gulpy-workflow-sass/
