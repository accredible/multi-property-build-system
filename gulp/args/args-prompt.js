var gulp = require('gulp');
var glob = require('glob');
var prompt = require('gulp-prompt');

gulp.task('args-task', function (done) {
  // Get a list of tasks
  var tasks = glob.sync('./gulp/*.js');
  for(var t=0,tl=tasks.length; t<tl; t++){
    tasks[t] = tasks[t].split('/').pop().slice(0, -3);
  }
  return gulp
    .src('') // We just need a trigger, so the src doesn't matter
    .pipe(
      prompt.prompt(
        [{
          type: 'list',
          name: 'task',
          message: 'Which task?',
          choices: tasks
        }],
        function(response){
          global.config.task = response.task;
      })
    );
});

gulp.task('args-property', function (done) {
  // Get a list of properties
  var properties = glob.sync('./properties/*/');
  for(var p=0,pl=properties.length; p<pl; p++){
    properties[p] = properties[p].split('/')[2];
  }
  // Prompt to choose a property
  return gulp
    .src('') // We just need a trigger, so the src doesn't matter
    .pipe(
      prompt.prompt(
        [{
          type: 'list',
          name: 'property',
          message: 'Select property',
          choices: properties
        }],
        function(response){
          global.config.cwd = './properties/'+response.property;
          global.config.property = response.property;
      })
    );
});

gulp.task('args-env', function (done) {
  // Get a list of environments
  var envs = glob.sync('./env/*');
  for(var e=0,el=envs.length; e<el; e++){
    envs[e] = envs[e].split('/').pop();
  }
  // Prompt to choose an environment
  return gulp
    .src('') // We just need a trigger, so the src doesn't matter
    .pipe(
      prompt.prompt(
        [{
          type: 'list',
          name: 'env',
          message: 'Select your environment',
          choices: envs
        }],
        function(response){
          global.config.env = response.env;
      })
    );
});
