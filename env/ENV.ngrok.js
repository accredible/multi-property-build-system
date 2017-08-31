'use strict';
// localhost only
angular
  .module('ENV', [])
  .constant('ENV', {
    name:         'red',
    version:      'v1',
    apiEndpoint:  'http://localhost:3000/',
    stripeKey:    'pk_test_cAeVkx5DhTMwelsEudggtgxC',
    buildVersion: '||VERSION||',
  });
