console.log('index.bundle.js - should load test.js and ../ENV.js');

require('./test');
require('../env/ENV.js');
