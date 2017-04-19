'use strict';

/**
 * @ngdoc service
 * @name movieLibraryApp.itunesCall
 * @description
 * # itunesCall
 * Service in the movieLibraryApp.
 */
// angular.module('movieLibraryApp')
//   .service('itunesCall', function () {
//   // AngularJS will instantiate a singleton by calling "new" on this function

//   // I had tried to use a service for the search function to streamline the code but it wasn't working and I didnt have time to complete it properly :(

//   // my efforts are below:

  angular.module('movieLibraryApp')
    .service('itunesCall', ['$http', '$sce', function ($http, $scope) {

    // //    // because angular blocks links from another domain
      $scope.newSearchResults = {};

      return {
          search: function(keywords){
              var searchTerm = keywords.replace(/[^\w\s]/gi, '');
              var movieSearchUrl = 'https://itunes.apple.com/search?term=' + searchTerm + '&country=HK&limit=100';
              console.log(movieSearchUrl);
              return $http({
                method: 'JSONP',
                url: movieSearchUrl,
                async: true,
                headers: {
                  'cache-control': 'no-cache',
                  'postman-token': '6f5dd5be-14b8-adfb-0294-5502cf2d912f'
                }
              }).then(function(response){
                console.log(response);
                return response;
              });
          }
      };
    }]);

  // });
