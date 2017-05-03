'use strict';

/**
 * @ngdoc function
 * @name movieLibraryApp.controller:MusicVideosCtrl
 * @description
 * # MusicVideosCtrl
 * Controller of the movieLibraryApp
 */
angular.module('movieLibraryApp')
  .controller('MusicVideosCtrl', function ($scope, itunesCall) {
    // set initial search term - itunes doesnt seem to allow a general 'movie search...';
    var params = 'pop';
    var mediaType = 'musicVideo&genreId=1614';
    $scope.spinner = true;
    params = params.replace(/[^\w\s]/gi, '');
    itunesCall.search(params, mediaType).then(function(response){
      $scope.numberOfResults = response.data.resultCount;
      $scope.musicVideoSearchResults = response.data.results;
      $scope.spinner = false;
    });
  });