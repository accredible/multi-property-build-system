var gulp = require('gulp');
var glob = require('glob');
var prompt = require('gulp-prompt');

gulp.task('config-select-env', function (done) {
  // Get a list of environments
  var envs = glob.sync('../env/ENV.*.js', { cwd: __dirname });
  for(var e=0,el=envs.length; e<el; e++){
    envs[e] = envs[e].split('/').pop().split('.')[1];
  }
  // Prompt to choose a product and environment
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
          global.config.envPath = './env/ENV.'+response.env+'.js';
      })
    );
});
