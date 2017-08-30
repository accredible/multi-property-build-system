var gulp = require('gulp');
var argv = require('yargs').argv;
var runSequence = require('run-sequence');

require('./config-select-product');
require('./config-select-env');

// This will be available to ALL other tasks as `config`, however I recommend using `global.config` to make it easy to understand
global.config = {
  product: null,
  env: null,
};

// Takes the config from the command line arguments OR prompts the user for the values
gulp.task('config-apply', function (done) {
  var tasks = [];

  if(argv.product){
    global.config.product = argv.product;
  } else {
    tasks.push('config-select-product');
  }

  if(argv.env){
    global.config.env = argv.env;
  } else {
    tasks.push('config-select-env');
  }

  if(!tasks.length){
    done();
  } else {
    tasks.push(done);
    return runSequence.apply(this, tasks);
  }

});