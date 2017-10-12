/* global describe, it, beforeEach */

'use strict';

const assert = require('chai').assert;

describe('cdnjs-cdn-data-angular', function() {
  beforeEach(function() {
    this.data = require('./index');
  });

  describe('AngularJS libraries', function() {
    it('should include angular 1.6.6', function() {
      assert.include(this.data.angular.versions, '1.6.6');
    });

    it('should include angular-animate 1.6.6', function() {
      assert.include(this.data['angular-animate'].versions, '1.6.6');
    });

    it('should include angular-cookies 1.6.6', function() {
      assert.include(this.data['angular-cookies'].versions, '1.6.6');
    });

    it('should include angular-loader 1.6.6', function() {
      assert.include(this.data['angular-loader'].versions, '1.6.6');
    });

    it('should include angular-resource 1.6.6', function() {
      assert.include(this.data['angular-resource'].versions, '1.6.6');
    });

    it('should include angular-route 1.6.6', function() {
      assert.include(this.data['angular-route'].versions, '1.6.6');
    });

    it('should include angular-sanitize 1.6.6', function() {
      assert.include(this.data['angular-sanitize'].versions, '1.6.6');
    });

    it('should include angular-touch 1.6.6', function() {
      assert.include(this.data['angular-touch'].versions, '1.6.6');
    });

    it('should build angular-resource 1.6.6 url', function() {
      assert.equal(this.data['angular-resource'].url('1.6.6'), '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.6/angular-resource.min.js');
    });
  });
});
