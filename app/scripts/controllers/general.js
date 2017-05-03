'use strict';

/**
 * @ngdoc function
 * @name movieLibraryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieLibraryApp
 */
angular.module('movieLibraryApp')
  .controller('GeneralCtrl', function ($scope, $location, $sce, $http, itunesCall) {
    
    //tab active function
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };

    $scope.getHighRes = function(obj){
      return obj.replace(/(source).*/, 'source/600x600bb.jpg');
    };

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

    $scope.initialSearch = 'all';
    // search on input change function
    $scope.searchItunes = function(params, mediaType){
        $scope.spinner = true;
        params = params.replace(/[^\w\s]/gi, '');
        itunesCall.search(params, mediaType).then(function(response){
          $scope.numberOfResults = response.data.resultCount;
          $scope.newSearchResults = response.data.results;
          $scope.spinner = false;
        });
    };

    $scope.filterTypes = ['movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook', 'all'];

  });
