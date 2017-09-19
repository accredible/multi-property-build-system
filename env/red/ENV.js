'use strict';
angular
  .module('ENV', [])
  .constant('ENV', {
    name:         'red',
    version:      'v1',
    apiEndpoint:  'https://red.api.accredible.com/',
    stripeKey:    'pk_test_cAeVkx5DhTMwelsEudggtgxC',
    buildVersion: '||VERSION||',
  });
