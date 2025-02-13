/** KARMA CONFIGURATION
 *
 *    `gulp/karma.js` modifies the config so that it
 *     works for the selected property, for example:
 *
 *      `basePath` is changed to 'properties/some-property'
 *      `singleRun` is changed to `true`
 */
module.exports = function(config) {
  var cfg = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      '**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.bundle.js': [ 'browserify' ],
      '**/*.html': ['ng-html2js'],
    },


    ngHtml2JsPreprocessor: {
      stripPrefix: '',
      moduleName: 'templates',
      cacheIdFromPath: function(filepath) {
        if(filepath[0] != '/'){
          filepath = '/'+filepath;
        }
        return filepath;
      },
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DISABLE,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // This is needed to make Chrome work on Travis CI
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };

  // Set the browser to Travis CI Chrome if we're running the test suits on Travis
  if (process.env.TRAVIS) {
    cfg.browsers = ['Chrome_travis_ci'];
  }

  config.set(cfg);
}
