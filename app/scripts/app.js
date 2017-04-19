'use strict';

/**
 * @ngdoc overview
 * @name movieLibraryApp
 * @description
 * # movieLibraryApp
 *
 * Main module of the application.
 */
angular
  .module('movieLibraryApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://itunes.apple.com/search?term=**'
    // 'https://itunes.apple.com/search?term=*'
  ]);
})
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/podcasts', {
        templateUrl: 'views/podcasts.html',
        controller: 'PodcastsCtrl',
        controllerAs: 'podcasts'
      })
      .when('/music', {
        templateUrl: 'views/music.html',
        controller: 'MusicCtrl',
        controllerAs: 'music'
      })
      .when('/music-videos', {
        templateUrl: 'views/music-videos.html',
        controller: 'MusicVideosCtrl',
        controllerAs: 'musicVideos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
