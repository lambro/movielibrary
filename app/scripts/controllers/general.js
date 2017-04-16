'use strict';

/**
 * @ngdoc function
 * @name movieLibraryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieLibraryApp
 */
angular.module('movieLibraryApp')
  .controller('GeneralCtrl', function ($scope, $location, $sce) {
    
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

    // search on input change function
    // $scope.searchItunes = function(params){
    //         var movieSearchUrl = $scope.trustSrc('https://itunes.apple.com/search?term=' + params);
    //         $http({
    //         method: 'JSONP',
    //         url: movieSearchUrl,
    //         params: params,
    //         headers: {
    //           'cache-control': 'no-cache',
    //           'postman-token': '6f5dd5be-14b8-adfb-0294-5502cf2d912f'
    //         }
    //     }).then(function successCallback(response) {
    //         $scope.searchResults = response.data.results;
    //         console.log('success');
    //       }, function errorCallback() {
    //         console.log('failed');
    //       });
    // };

    // $scope.stopVideo = function ($) {
    //   // body..
    //        var video = $(video);
    //         video.pause();
    //   };
  });
