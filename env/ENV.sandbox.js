"use strict";
// sandbox.dashboard.accredible.com
angular
  .module('ENV', [])
  .constant('ENV', {
    name:         'sandbox',
    version:      'v1',
    apiEndpoint:  'https://staging.accredible.com/',
    stripeKey:    'pk_test_cAeVkx5DhTMwelsEudggtgxC',
    buildVersion: '||VERSION||',
  });
