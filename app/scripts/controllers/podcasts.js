'use strict';

/**
 * @ngdoc function
 * @name movieLibraryApp.controller:PodcastsCtrl
 * @description
 * # PodcastsCtrl
 * Controller of the movieLibraryApp
 */
angular.module('movieLibraryApp')
  .controller('PodcastsCtrl', function ($scope, $http) {
    // set initial search term - itunes doesnt seem to allow a general 'movie search...';
    $scope.searchTerm = 'science';
    var searchTerm = $scope.searchTerm;
    var movieSearchUrl = $scope.trustSrc('https://itunes.apple.com/search?term=' + searchTerm + '&entity=podcast');

    $scope.searchResults = [];

    $http({
      method: 'JSONP',
      url: movieSearchUrl,
      async: true,
      headers: {
        'cache-control': 'no-cache',
        'postman-token': '6f5dd5be-14b8-adfb-0294-5502cf2d912f'
      }
    }).then(function successCallback(response) {
      $scope.searchResults = response.data.results;
    }, function errorCallback() {
    });
});
