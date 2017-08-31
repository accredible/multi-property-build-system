var gulp = require('gulp');
var argv = require('yargs').argv;
var runSequence = require('run-sequence');

// These are populated by the command-line or user-selection
// They're available to other tasks as `config`, however I recommend using `global.config` to make their origin obvious
global.config = {
  cwd: null,
  product: null,
  env: null,
  envPath: null,
};

// Takes the config from the command line arguments OR prompts the user for the values
gulp.task('config', function (done) {
  var tasks = [];

  if(argv.product){
    global.config.product = argv.product;
    global.config.cwd = './products/'+argv.product;
  } else {
    tasks.push('config-select-product');
  }

  if(argv.env){
    global.config.env = argv.env;
    global.config.envPath = './env/ENV.'+argv.env+'.js';
  } else {
    tasks.push('config-select-env');
  }

  if(!tasks.length){
    done();
  } else {
    tasks.push(done);
    return runSequence.apply(this, tasks); // Each task runs in SEQUENCE
  }

});
