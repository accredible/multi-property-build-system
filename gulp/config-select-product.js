var gulp = require('gulp');
var glob = require('glob');
var prompt = require('gulp-prompt');

gulp.task('config-select-product', function (done) {
  // Get a list of products
  var products = glob.sync('../products/*/', { cwd: __dirname });
  for(var p=0,pl=products.length; p<pl; p++){
    products[p] = products[p].split('/')[2];
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
        }],
        function(response){
          global.config.product = response.product;
      })
    );
});