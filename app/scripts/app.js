'use strict';

/**
 * @ngdoc overview
 * @name ZrsmWorker
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('ZrsmWorker', ['ionic', 'ngCordova', 'ngResource', 'ionic-toast'])

  .run(function ($ionicPlatform) {

    $ionicPlatform.ready(function () {
      // save to use plugins here
      // 在应用程序启动的时候判断window.cordova是否存在如果是重写window.open方法 
      if (window.cordova && window.cordova.InAppBrowser) {
         window.open = window.cordova.InAppBrowser.open;
      }
    });

    // add possible global event handlers here

  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider.state('home',{
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    });
      $urlRouterProvider.otherwise('home');
  });




