var gulp = require('gulp');
var glob = require('glob');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var assign = require('lodash.assign');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var mergeStream = require('merge-stream');


var src = '**/*.bundle.js';
var opts = {
  cwd: global.config.cwd,
};


gulp.task('js-build', function(done){
  var bundlePaths = glob.sync(src, opts);
  var streams = bundlePaths.map(createBuildStream);
  return mergeStream(...streams);
});


gulp.task('js-watch', function(done){
  var bundlePaths = glob.sync(src, opts);
  var streams = bundlePaths.map(createWatchStream);
  return mergeStream(...streams);
});


function createBuildStream(bundlePath){
  var browserifyOpts = {
    basedir: global.config.cwd
  };
  return browserify(bundlePath, browserifyOpts)
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(bundlePath))
    .pipe(buffer())
    // Transform
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./build/'));
}


function createWatchStream(bundlePath){
  var browserifyOpts = assign({}, watchify.args, {
    basedir: global.config.cwd,
    debug: true,
  });
  var bundle = browserify(bundlePath, browserifyOpts);
  bundle = watchify(bundle); // Replace `bundle`
  bundle.on('update', rebundle);
  bundle.on('log', gutil.log);
  function rebundle(){
    return bundle
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source(bundlePath))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      // Transform
      .pipe(uglify())
      // Output
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./build/'))
      .pipe(global.browserSync.stream());
  }
  return rebundle();
}


// REFERENCES
//   https://gulpjs.org/recipes/fast-browserify-builds-with-watchify
//   https://gist.github.com/ramasilveyra/b4309edf809e55121385
