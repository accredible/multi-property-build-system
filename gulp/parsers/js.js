var gulp = require('gulp');
var glob = require('glob');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var merge = require('utils-merge');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var mergeStream = require('merge-stream');



// Scan the property for `.bundle.js` files
var bundlePaths = glob.sync(global.config.cwd+'/**/*.bundle.js');

gulp.task('js-build', function(done){
  return createBundles(false);
});

gulp.task('js-watch', function(done){
  return createBundles(true);
});

function createBundles(isWatching){
  var streams = bundlePaths.map(createBundle, isWatching);
  return mergeStream(...streams);
}

function createBundle(bundlePath, isWatching){
  var src = bundlePath.replace(global.config.cwd+'/', './');
  var opts = merge(watchify.args, {
    entries: [ bundlePath ],
    debug: true,
  });
  var b = browserify(opts);
  var rebundle = function(){
    return b.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source(src))
      .pipe(buffer())
      .pipe(gulpif(isWatching, sourcemaps.init()))
      .pipe(uglify())
      .pipe(gulpif(isWatching, sourcemaps.write('.')))
      .pipe(gulp.dest('./build/'));
  }
  if (isWatching) {
    b = watchify(b);
    b.on('update', rebundle);
    b.on('log', gutil.log);
  }
  return rebundle();
}

// REFERENCES
//   https://gulpjs.org/recipes/fast-browserify-builds-with-watchify
//   https://gist.github.com/ramasilveyra/b4309edf809e55121385
