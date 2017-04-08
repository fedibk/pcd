'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './outlets.routes';

export class OutletsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('pcdAppApp.outlets', [uiRouter])
  .config(routes)
  .component('outlets', {
    template: require('./outlets.html'),
    controller: OutletsComponent,
    controllerAs: 'outletsCtrl'
  })
  .name;
