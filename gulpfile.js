dumpHeader();
var gulp = require('gulp');

require('./gulp/args/args.js');

gulp.task('default', [ 'args' ], function (done) {
  // Dumps the command
  dumpCommand();
  // Start the selected task
  require(`./gulp/${global.config.task}.js`)
  var runSequence = require('run-sequence');
  return runSequence(
    global.config.task,
    done
  );
});

// A little bit of fun
function dumpHeader(){
  var red = '\033[0;31m';
  var norm = '\033[0m';
  var str = `
∇   ____   ∇  ._____________________________.
| :      : |  |                             |
{| ♥    ♥ |} /  Multi-Property Build System |
 |___==___|   |   oodavid / accredible 2017 |
              |_____________________________|
`
  str = str.replace(/([∇♥])/g, `${red}$1${norm}`)
  console.log(str);
}

// Outputs the command for next run
function dumpCommand(){
  if(global.config.didPrompt){
    var cyan = '\033[0;36m';
    var norm = '\033[0m';
    var cmd = global.config.getCommand();

    console.log(`.___________________________________ _ _
|
| ${cyan}To run this without prompts, use:${norm}
| ${cmd}
|___________________________________ _ _`);

  }
}
