'use strict';

describe('Component: RcsComponent', function() {
  // load the controller's module
  beforeEach(module('pcdAppApp.rcs'));

  var RcsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    RcsComponent = $componentController('rcs', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
