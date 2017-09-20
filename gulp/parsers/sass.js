var gulp = require('gulp');
var newer = require('gulp-newer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglifycss');


var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%'],
};
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded', // outputStyle: 'compressed'
  precision: 10,
};
var uglifyOptions = {};


gulp.task('sass-build', function () {
  return gulp
    .src('**/[^_]*.scss', { cwd: global.config.cwd })
    // Transform
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./build/'));
});


gulp.task('sass-watch', function () {
  gulp.watch('**/*.scss', { cwd: global.config.cwd }, ['sass-watch-stream']); // Note that this watches ALL scss files
  return createWatchStream();
});
gulp.task('sass-watch-stream', createWatchStream);


function createWatchStream(){
  return gulp
    .src('**/[^_]*.scss', { cwd: global.config.cwd })
    .pipe(sourcemaps.init())
    // Transform
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(uglify(uglifyOptions))
    // Output
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/'))
    .pipe(global.browserSync.stream());
}


// REFERENCES
//    https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js#L86
//    https://www.sitepoint.com/simple-gulpy-workflow-sass/
