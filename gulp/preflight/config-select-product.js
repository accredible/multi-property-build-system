var gulp = require('gulp');
var glob = require('glob');
var prompt = require('gulp-prompt');

gulp.task('config-select-product', function (done) {
  // Get a list of products
  var products = glob.sync('./products/*/');
  for(var p=0,pl=products.length; p<pl; p++){
    products[p] = products[p].split('/')[2];
  }
  // Prompt to choose a product and environment
  return gulp
    .src('') // We just need a trigger, so the src doesn't matter
    .pipe(
      prompt.prompt(
        [{
          type: 'list',
          name: 'product',
          message: 'Select product',
          choices: products
        }],
        function(response){
          global.config.cwd = './products/'+response.product;
          global.config.product = response.product;
      })
    );
});
