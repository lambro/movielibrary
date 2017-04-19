'use strict';

/**
 * @ngdoc function
 * @name movieLibraryApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the movieLibraryApp
 */
angular.module('movieLibraryApp')
  .controller('MoviesCtrl', function ($scope, $http) {
    // set initial search term - itunes doesnt seem to allow a general 'movie search...';
    $scope.searchTerm = 2017;
    var searchTerm = $scope.searchTerm;

    var movieSearchUrl = $scope.trustSrc('https://itunes.apple.com/search?term=' + searchTerm + '&entity=movie&country=HK&limit=100');

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
      console.log('call successful');
      $scope.searchResults = response.data.results;
      $scope.myWelcome = response.data.results[0].trackName;
    }, function errorCallback() {
      // console.log('no response');
    });
  });
