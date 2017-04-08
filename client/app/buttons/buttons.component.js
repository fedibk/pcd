'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './buttons.routes';

export class ButtonsComponent {
  buttons = [];
  newRc_ref = '';
  newONCode = '';
  newOFFCode = '';
  
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/buttons')
      .then(response => {
        this.buttons = response.data;
      });
  }

  addButton() {
    if(this.newButton) {
      this.$http.post('/api/buttons', {
        rc_reference: newRc_ref,
        onCode: newONCode,
        offCode: newOFFCode,
        active: true
      });
      this.newButton = '';
    }
  }

  deleteButton(button) {
    this.$http.delete(`/api/buttons/${button._id}`);
  }
}

export default angular.module('pcdAppApp.buttons', [uiRouter])
  .config(routes)
  .component('buttons', {
    template: require('./buttons.html'),
    controller: ButtonsComponent,
    controllerAs: 'buttonsCtrl'
  })
  .name;
