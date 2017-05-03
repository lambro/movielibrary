'use strict';

/**
 * @ngdoc function
 * @name movieLibraryApp.controller:PodcastsCtrl
 * @description
 * # PodcastsCtrl
 * Controller of the movieLibraryApp
 */
angular.module('movieLibraryApp')
  .controller('PodcastsCtrl', function ($scope, itunesCall) {
    // set initial search term - itunes doesnt seem to allow a general 'movie search...';
    var params = 'science';
    var mediaType = 'podcast';
    $scope.spinner = true;
    params = params.replace(/[^\w\s]/gi, '');
    itunesCall.search(params, mediaType).then(function(response){
      $scope.numberOfResults = response.data.resultCount;
      $scope.podcastSearchResults = response.data.results;
      $scope.spinner = false;
    });
  });
