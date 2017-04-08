'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('rcs', {
      url: '/rcs',
      template: '<rcs></rcs>',
      authenticate: 'admin'
    });
}
