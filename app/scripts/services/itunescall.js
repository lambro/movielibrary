'use strict';

/**
 * @ngdoc service
 * @name movieLibraryApp.itunesCall
 * @description
 * # itunesCall
 * Service in the movieLibraryApp.
 */
angular.module('movieLibraryApp')
  .service('itunesCall', function () {
  // AngularJS will instantiate a singleton by calling "new" on this function

  // I had tried to use a service for the search function to streamline the code but it wasn't working and I didnt have time to complete it properly :(

  // my efforts are below:

  // angular.module('movieLibraryApp')
  //   .service('itunesCall', ['$http', function ($http, $sce) {

  //      because angular blocks links from another domain
  //      var trustSrc = function(src) {
  //        console.log("sce called");
  //        return $sce.trustAsResourceUrl(src);
  //      };

  //     var appleLink = trustSrc('https://itunes.apple.com/search?term=');

  //     return {
  //         search: function(keywords, mediaurl){
  //             var fullLink = appleLink + keywords + mediaurl;
  //             $http({
  //               method: 'JSONP',
  //               url: fullLink,
  //               async: true,
  //               headers: {
  //                 'cache-control': 'no-cache',
  //                 'postman-token': '6f5dd5be-14b8-adfb-0294-5502cf2d912f'
  //               }
  //             });
  //         }
  //     };
  //   }]);

  });
