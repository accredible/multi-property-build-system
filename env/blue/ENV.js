"use strict";
angular
  .module('ENV', [])
  .constant('ENV', {
    name:         'blue',
    version:      'v1',
    apiEndpoint:  'https://blue.api.accredible.com/',
    stripeKey:    'pk_test_cAeVkx5DhTMwelsEudggtgxC',
    buildVersion: '||VERSION||',
  });
