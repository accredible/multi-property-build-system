"use strict";
// blue.dashboard.accredible.com
angular
  .module('ENV', [])
  .constant('ENV', {
    name:         'blue',
    version:      'v1',
    apiEndpoint:  'https://blue.api.accredible.com/',
    stripeKey:    'pk_test_cAeVkx5DhTMwelsEudggtgxC',
    buildVersion: '1.0.0',
  });
