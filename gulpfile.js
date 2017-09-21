var gulp = require('gulp');


require('./gulp/args/args.js');


dumpMessage(`
∇   ____   ∇
| :      : |  ·---------------------------- - -
{| ♥    ♥ |}  | Multi-Property Build System
 |___==___|   |   oodavid / accredible 2017
/          \\  ·---------------------------- - -
`);


gulp.task('default', [ 'args' ], function (done) {
  // Start the selected task
  require(`./gulp/${global.config.task}.js`);
  var runSequence = require('run-sequence');
  return runSequence(
    global.config.task,
    'joy',
    done
  );
});


gulp.task('joy', function (done) {
  dumpMessage('♥ Joy! ♥');
  done();
});


function dumpMessage(msg){
  var red = '\033[0;31m';
  var norm = '\033[0m';
  msg = msg.replace(/([∇♥])/g, `${red}$1${norm}`)
  console.log(msg);
}
