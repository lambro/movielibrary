'use strict';

/**
 * @ngdoc function
 * @name movieLibraryApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the movieLibraryApp
 */
angular.module('movieLibraryApp')
  .controller('MoviesCtrl', function ($scope, itunesCall) {
    // set initial search term - itunes doesnt seem to allow a general 'movie search...';
    var params = 'movie';
    var mediaType = 'movie&genreId=4408';
    $scope.spinner = true;
    params = params.replace(/[^\w\s]/gi, '');
    itunesCall.search(params, mediaType).then(function(response){
      $scope.numberOfResults = response.data.resultCount;
      $scope.movieSearchResults = response.data.results;
      $scope.spinner = false;
    });
  });
