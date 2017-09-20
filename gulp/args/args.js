var gulp = require('gulp');
var argv = require('yargs').argv;

// These are populated by the command-line or user-selection
// They're available to other tasks as `config`, however I recommend using `global.config` to make their origin obvious
global.config = {
  cwd: null,
  property: null,
  env: null,
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
  } else {
    tasks.push('args-env');
  }

  if(!tasks.length){
    done();
  } else {
    var runSequence = require('run-sequence');
    require('./args-prompt.js');
    tasks.push('args-dump');
    tasks.push(done);
    return runSequence.apply(this, tasks);
  }
});


gulp.task('args-dump', function(done){
  var cyan = '\033[0;36m';
  var norm = '\033[0m';
  var cmd = `gulp --task ${global.config.task} --property ${global.config.property} --env ${global.config.env}`;
  if(argv.silent){
    cmd += ' --silent';
  }
  console.log(`
·------------------------------------------ - -
| ${cyan}To run this without prompts, use:${norm}
| ${cmd}
·------------------------------------------ - -
`);
  done();
});
