'use strict';

describe('Controller: PodcastsCtrl', function () {

  // load the controller's module
  beforeEach(module('movieLibraryApp'));

  var PodcastsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PodcastsCtrl = $controller('PodcastsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PodcastsCtrl.awesomeThings.length).toBe(3);
  });
});
