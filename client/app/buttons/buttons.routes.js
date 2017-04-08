'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('buttons', {
      url: '/buttons',
      template: '<buttons></buttons>',
      authenticate: 'admin'
    });
}
