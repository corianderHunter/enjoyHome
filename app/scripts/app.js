'use strict';

/**
 * @ngdoc overview
 * @name ZrsmWorker
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('ZrsmWorker', ['ionic', 'ngCordova', 'ngResource', 'ionic-toast','ionic-timepicker'])

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
  .config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider.state('home',{
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })
    .state('scan',{
        url:'/scan',
          templateUrl:'templates/scanTest.html',
          controller:'scanTestCtrl'
    })
    .state('login',{
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
     })
    .state('work',{
    url: '/work',
    templateUrl: 'templates/workOn.html',
    controller: 'workOnCtrl'
    })
    .state('overtime',{
        url:'/overtime',
        templateUrl:'templates/overtime.html',
        controller:'overtimeCtrl'
    })
    .state('overtimeApply',{
        url:'/overtimeApply',
        templateUrl:'templates/overtimeApply.html',
        controller:'overtimeApplyCtrl'
    })
    .state('feedback',{
        url:'/feedback',
        templateUrl:'templates/feedback.html',
        controller:'feedbackCtrl'
    })
    .state('feedbackShow',{
        url:'/feedbackShow',
        templateUrl:'templates/feedbackShow.html',
        controller:'feedbackShowCtrl'
    })
    .state('feedbackAdd',{
        url:'/feedbackAdd',
        templateUrl:'templates/feedbackAdd.html',
        controller:'feedbackAddCtrl'
    })
        .state('myTask',{
          url: '/myTask',
          templateUrl: 'templates/myTask.html',
            controller:'myTaskCtrl'
      }).
      state('storageList',{
          url: '/storageList',
          templateUrl: 'templates/storageList.html',
        controller:'storageListCtrl'
      }).
      state('subStorageList',{
          url: '/subStorageList',
          templateUrl: 'templates/subStorageList.html',
        controller:'subStorageListCtrl'
      }).
      state('lossReport',{
          url: '/lossReport',
          templateUrl: 'templates/lossReport.html',
        controller:'lossReportCtrl'
      }).
      state('scanList',{
          url: '/scanList',
          templateUrl: 'templates/scanList.html',
        controller:'scanListCtrl'
      })
    ;
      $urlRouterProvider.otherwise('home');
  });




