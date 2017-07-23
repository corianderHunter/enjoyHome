
/**
 * @ngdoc overview
 * @name ZrsmWorker
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('ZrsmWorker', ['ionic', 'ngCordova','ngResource', 'ionic-toast','ionic-timepicker','ngCookies'])

  .run(function ($ionicPlatform) {

    $ionicPlatform.ready(function () {
      // save to use plugins here
      // 在应用程序启动的时候判断window.cordova是否存在如果是重写window.open方法 
      if (window.cordova && window.cordova.InAppBrowser) {
         window.open = window.cordova.InAppBrowser.open;
      }
    });
  })
  .config(function ($stateProvider,$httpProvider,$urlRouterProvider,$ionicConfigProvider) {
    $httpProvider.defaults.headers.post = {"Content-type":"application/json; charset=UTF-8"};
    $stateProvider.state('home',{
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })
    .state('scan',{
          url: '/scan',
          templateUrl: 'templates/scan.html',
          controller:'scanCtrl',
          params:{ids:null}
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
        controller:'feedbackShowCtrl',
        params:{item:null}
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
        controller:'storageListCtrl',
        params:{item:null}
      }).
      state('subStorageList',{
          url: '/subStorageList',
          templateUrl: 'templates/subStorageList.html',
        controller:'subStorageListCtrl',
        params:{item:null}
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
      }).
      state('personalInfo',{
          url: '/personalInfo',
          templateUrl: 'templates/personalInfo.html',
          controller:'personalInfoCtrl'
      }).
       state('taskStorageList',{
            url:'/taskStorageList',
            templateUrl:'templates/task_storage_list.html',
            controller:'taskStorageListCtrl',
            params:{item:null}
        }).
        state('taskStorageDetail',{
            url:'/taskStorageDetail',
            templateUrl:'templates/task_storage_detail.html',
            controller:'taskStorageDetailCtrl',
            params:{item:null}
        }).
        state('plantList', {
            url:'/plantList',
            templateUrl:'templates/plant_list.html',
            controller:'plantListCtrl',
            params:{item:null}
        }).
        state('taskOver',{
            url:'/taskOver',
            templateUrl:'templates/taskOver.html',
            controller:'taskOverCtrl',
            params:{id:null}
        }).
        state('resourceDetail',{
            url:'/resourceDetail',
            templateUrl:'templates/resourceDetail.html',
            controller:'resourceDetailCtrl',
            params:{item:null}
        })
    ;
      $urlRouterProvider.otherwise('login');
  });




