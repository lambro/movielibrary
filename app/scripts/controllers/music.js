'use strict';

/**
 * @ngdoc function
 * @name movieLibraryApp.controller:MusicCtrl
 * @description
 * # MusicCtrl
 * Controller of the movieLibraryApp
 */
angular.module('movieLibraryApp')
  .controller('MusicCtrl', function ($scope, itunesCall) {
    // set initial search term - itunes doesnt seem to allow a general 'movie search...';
    var params = 'pop';
    var mediaType = 'music';
    $scope.spinner = true;
    params = params.replace(/[^\w\s]/gi, '');
    itunesCall.search(params, mediaType).then(function(response){
      $scope.numberOfResults = response.data.resultCount;
      $scope.musicSearchResults = response.data.results;
      $scope.spinner = false;
    });
  });
