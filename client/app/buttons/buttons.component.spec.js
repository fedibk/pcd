'use strict';

describe('Component: ButtonsComponent', function() {
  // load the controller's module
  beforeEach(module('pcdAppApp.buttons'));

  var ButtonsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ButtonsComponent = $componentController('buttons', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
