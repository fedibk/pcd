'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newRc;

describe('Rc API:', function() {
  describe('GET /api/rcs', function() {
    var rcs;

    beforeEach(function(done) {
      request(app)
        .get('/api/rcs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          rcs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(rcs).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/rcs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/rcs')
        .send({
          name: 'New Rc',
          info: 'This is the brand new rc!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newRc = res.body;
          done();
        });
    });

    it('should respond with the newly created rc', function() {
      expect(newRc.name).to.equal('New Rc');
      expect(newRc.info).to.equal('This is the brand new rc!!!');
    });
  });

  describe('GET /api/rcs/:id', function() {
    var rc;

    beforeEach(function(done) {
      request(app)
        .get(`/api/rcs/${newRc._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          rc = res.body;
          done();
        });
    });

    afterEach(function() {
      rc = {};
    });

    it('should respond with the requested rc', function() {
      expect(rc.name).to.equal('New Rc');
      expect(rc.info).to.equal('This is the brand new rc!!!');
    });
  });

  describe('PUT /api/rcs/:id', function() {
    var updatedRc;

    beforeEach(function(done) {
      request(app)
        .put(`/api/rcs/${newRc._id}`)
        .send({
          name: 'Updated Rc',
          info: 'This is the updated rc!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedRc = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRc = {};
    });

    it('should respond with the updated rc', function() {
      expect(updatedRc.name).to.equal('Updated Rc');
      expect(updatedRc.info).to.equal('This is the updated rc!!!');
    });

    it('should respond with the updated rc on a subsequent GET', function(done) {
      request(app)
        .get(`/api/rcs/${newRc._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let rc = res.body;

          expect(rc.name).to.equal('Updated Rc');
          expect(rc.info).to.equal('This is the updated rc!!!');

          done();
        });
    });
  });

  describe('PATCH /api/rcs/:id', function() {
    var patchedRc;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/rcs/${newRc._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Rc' },
          { op: 'replace', path: '/info', value: 'This is the patched rc!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedRc = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedRc = {};
    });

    it('should respond with the patched rc', function() {
      expect(patchedRc.name).to.equal('Patched Rc');
      expect(patchedRc.info).to.equal('This is the patched rc!!!');
    });
  });

  describe('DELETE /api/rcs/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/rcs/${newRc._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when rc does not exist', function(done) {
      request(app)
        .delete(`/api/rcs/${newRc._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
