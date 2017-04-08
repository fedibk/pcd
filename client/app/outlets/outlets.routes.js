'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('outlets', {
      url: '/outlets',
      template: '<outlets></outlets>',
      authenticate : true
    });
}
