'use strict';

/**
 * @ngdoc service
 * @name movieLibraryApp.itunesCall
 * @description
 * # itunesCall
 * Service in the movieLibraryApp.
 */

  angular.module('movieLibraryApp')
    .service('itunesCall', ['$http', '$sce', function ($http, $scope) {
    $scope.newSearchResults = {};

    return {
        search: function(keywords, mediaType){
          var searchTerm = keywords.replace(/[^\w\s]/gi, '');
          var movieSearchUrl = 'https://itunes.apple.com/search?term=' + searchTerm + '&country=HK&limit=100&media=' + mediaType + '&sort=recent';
          console.log(movieSearchUrl);
          return $http({
            method: 'JSONP',
            url: movieSearchUrl,
            async: true,
            headers: {
              'cache-control': 'no-cache',
              'postman-token': '6f5dd5be-14b8-adfb-0294-5502cf2d912f'
            }
          }).then(function successCallback(response){
            console.log(response);
            return response;
          }, function errorCallback(response){
            console.log(response);
          });
        },
      };
    }]);

  // });
