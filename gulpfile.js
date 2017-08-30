var gulp = require('gulp');
var glob = require("glob");
var prompt = require('gulp-prompt');
var runSequence = require('run-sequence');

var config = {
  product: null,
  env: null,
};

gulp.task('serve', function(done) {
  runSequence('select-product-env', 'start-server', done);
});

gulp.task('build', function(done) {
  runSequence('select-product-env', 'start-build', done);
});




gulp.task('select-product-env', function (done) {
  // Get a list of products
  var products = glob.sync('./products/*/', { cwd: __dirname });
  for(var p=0,pl=products.length; p<pl; p++){
    products[p] = products[p].split('/')[2];
  }
  // Get a list of environments
  var envs = glob.sync('./env/ENV.*.js', { cwd: __dirname });
  for(var e=0,el=envs.length; e<el; e++){
    envs[e] = envs[e].split('/').pop().split('.')[1];
  }
  // Prompt to choose a product and environment
  return gulp.src('')
    .pipe(
      prompt.prompt(
        [{
          type: 'list',
          name: 'product',
          message: 'Select product',
          choices: products
        },
        {
          type: 'list',
          name: 'env',
          message: 'Select your environment',
          choices: envs
        }],
        function(response){
          config.product = response.product;
          config.env = response.env;
      })
    );
});


gulp.task('start-server', function(done) {
  console.log('start-server', config);
});

gulp.task('start-build', function(done) {
  console.log('start-build', config);
});

