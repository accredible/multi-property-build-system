var gulp = require('gulp');
var glob = require('glob');

// Loads all tasks from the /gulp/ directory
var tasks = glob.sync('./gulp/**/*.js', { cwd: __dirname });
for(var t=0,tl=tasks.length; t<tl; t++){
  var task = tasks[t];
  require(task);
}
