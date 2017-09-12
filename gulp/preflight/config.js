var gulp = require('gulp');
var argv = require('yargs').argv;
var runSequence = require('run-sequence');

// These are populated by the command-line or user-selection
// They're available to other tasks as `config`, however I recommend using `global.config` to make their origin obvious
global.config = {
  cwd: null,
  property: null,
  env: null,
  envPath: null,
};

// Takes the config from the command line arguments OR prompts the user for the values
gulp.task('config', function (done) {
  var tasks = [];

  if(argv.property){
    global.config.property = argv.property;
    global.config.cwd = './properties/'+argv.property;
  } else {
    tasks.push('config-select-property');
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
