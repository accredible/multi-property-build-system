var gulp = require('gulp');
var argv = require('yargs').argv;

// These are populated by the command-line or user-selection
// They're available to other tasks as `config`, however I recommend using `global.config` to make their origin obvious
global.config = {
  getCommand: getCommand,
  cwd: null,
  property: null,
  env: null,
  envPath: null,
  task: null,
};

gulp.task('args', function (done) {
  var tasks = [];

  if(argv.task){
    global.config.task = argv.task;
  } else {
    tasks.push('args-task');
  }

  if(argv.property){
    global.config.property = argv.property;
    global.config.cwd = './properties/'+argv.property;
  } else {
    tasks.push('args-property');
  }

  if(argv.env){
    global.config.env = argv.env;
    global.config.envPath = './env/ENV.'+argv.env+'.js';
  } else {
    tasks.push('args-env');
  }

  if(!tasks.length){
    done();
  } else {
    var runSequence = require('run-sequence');
    require('./args-prompt.js');
    tasks.push(done);
    return runSequence.apply(this, tasks);
  }

});

function getCommand(){
  return `gulp --task ${global.config.task} --property ${global.config.property} --env ${global.config.env}`;
}
