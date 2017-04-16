'use strict';

describe('Service: itunesCall', function () {

  // load the service's module
  beforeEach(module('movieLibraryApp'));

  // instantiate service
  var itunesCall;
  beforeEach(inject(function (_itunesCall_) {
    itunesCall = _itunesCall_;
  }));

  it('should do something', function () {
    expect(!!itunesCall).toBe(true);
  });

});
