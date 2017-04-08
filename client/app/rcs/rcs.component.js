'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './rcs.routes';

export class RcsComponent {
    rcs = [];
  newRc_ref = '';
  newRc_model = '';

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/rcs')
      .then(response => {
        this.rcs = response.data;
      });
  }

  addRc() {
    if(this.newRc_ref && this.newRc_model) {
      this.$http.post('/api/rcs', {
        reference: this.newRc_ref,
        model: this.new.newRc_model
      });
      this.newRc_model = '';
      this.newRc_ref = '';
    }
  }

  deleteRc(rc) {
    this.$http.delete(`/api/rcs/${rc._id}`);
  }
}

export default angular.module('pcdAppApp.rcs', [uiRouter])
  .config(routes)
  .component('rcs', {
    template: require('./rcs.html'),
    controller: RcsComponent,
    controllerAs: 'rcsCtrl'
  })
  .name;
