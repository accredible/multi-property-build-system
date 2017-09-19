"use strict";
angular
  .module('ENV', [])
  .constant('ENV', {
    name:         'production',
    version:      'v1',
    apiEndpoint:  'https://api.accredible.com/',
    stripeKey:    'pk_live_augT0u3YJe9jCxuMPK67aUpa',
    buildVersion: '||VERSION||',
  });
