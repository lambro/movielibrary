'use strict';

describe('Controller: MusicVideosCtrl', function () {

  // load the controller's module
  beforeEach(module('movieLibraryApp'));

  var MusicVideosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MusicVideosCtrl = $controller('MusicVideosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MusicVideosCtrl.awesomeThings.length).toBe(3);
  });
});
