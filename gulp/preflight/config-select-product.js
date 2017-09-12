var gulp = require('gulp');
var glob = require('glob');
var prompt = require('gulp-prompt');

gulp.task('config-select-property', function (done) {
  // Get a list of properties
  var properties = glob.sync('./properties/*/');
  for(var p=0,pl=properties.length; p<pl; p++){
    properties[p] = properties[p].split('/')[2];
  }
  // Prompt to choose a property and environment
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
