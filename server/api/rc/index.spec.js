'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var rcCtrlStub = {
  index: 'rcCtrl.index',
  show: 'rcCtrl.show',
  create: 'rcCtrl.create',
  upsert: 'rcCtrl.upsert',
  patch: 'rcCtrl.patch',
  destroy: 'rcCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var rcIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './rc.controller': rcCtrlStub
});

describe('Rc API Router:', function() {
  it('should return an express router instance', function() {
    expect(rcIndex).to.equal(routerStub);
  });

  describe('GET /api/rcs', function() {
    it('should route to rc.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'rcCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/rcs/:id', function() {
    it('should route to rc.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'rcCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/rcs', function() {
    it('should route to rc.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'rcCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/rcs/:id', function() {
    it('should route to rc.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'rcCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/rcs/:id', function() {
    it('should route to rc.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'rcCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/rcs/:id', function() {
    it('should route to rc.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'rcCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
