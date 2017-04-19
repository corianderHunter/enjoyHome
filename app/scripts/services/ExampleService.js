'use strict';

/**
 * @ngdoc function
 * @name ZrsmWorker.service:ExampleService
 * @description
 * # ExampleService
 */
angular.module('ZrsmWorker')
  // use factory for services
  .factory('ExampleService', function($http, $timeout, $q) {

    var kindOfPrivateVariable = 42;

    var doSomethingAsync = function() {
      var deferred = $q.defer();
      $timeout(deferred.resolve.bind(null, kindOfPrivateVariable), 1000);
      return deferred.promise;
    };

    var fetchSomethingFromServer = function() {
      return $http({
          url: 'http://hipsterjesus.com/api',
          params: {
              paras: 2
          },
          method: 'GET'
        })
        .success(function(data) {
          console.log('fetched this stuff from server:', data);
        })
        .error(function(error) {
          console.log('an error occured', error);
        });
    };

    // public api
    return {
      doSomethingAsync: doSomethingAsync,
      fetchSomethingFromServer: fetchSomethingFromServer
    };
  })
  // 本地存储  2016-4-15  wjq
  .factory("storage", ["$window", function($window) {

    var storage = $window.localStorage;

    return {

        get: function(key) {
            var value = storage.getItem(key);
            try {
                value = JSON.parse(value);
            } catch (e) {}
            return value;
        },

        set: function(key, value) {
            angular.isObject(value) && (value = JSON.stringify(value));
            storage.setItem(key, value);
        },

        remove: function( key ){
            storage.removeItem(key);
        }
    }

  }])
  // 自定义弹出框
  .factory('ionicPopup', function ($ionicPopup, $timeout, $ionicLoading,ionicToast) {
      var service = {
          showAlert : function(title, content, fn) {
              var alertPopup = $ionicPopup.alert({
                 title: title,
                 template: content,
                 okText: '确定', 
               });
               alertPopup.then(function(res) {
                 console.log('after alert hidden.');
                 fn && fn();
               });
         },
          showConfirm : function(title, content, okfn, cancelfn) {
               var confirmPopup = $ionicPopup.confirm({
                 title: title,
                 template: content,
                 okText: '是', 
                 cancelText: '否'

               });
               confirmPopup.then(function(res) {
                 confirmPopup.close();
                 if(res) {
                   console.log('You are sure');
                   okfn && okfn();
                 } else {
                   console.log('You are not sure');
                   cancelfn && cancelfn();
                 }
               });
         },
         showMsg: function(msg){
              ionicToast.show('<em class="ion-ios-information-outline"></em></br>'+msg, 'middle', false, 2500);
             //  $ionicLoading.show({
             //      template: '<em class="ion-ios-information-outline"></em></br><h3>'+msg+'</h3>',
             //      maxWidth: 200,
             //      animation: 'fade-in'
             //    });
             // $timeout(function() {
             //    $ionicLoading.hide(); //2秒后关闭弹出
             // }, 2000);
         },
         loading:{
            show:function(){
                $ionicLoading.show({
                  content: 'Loading',
                  animation: 'fade-in',
                  showBackdrop: true,
                  maxWidth: 200,
                  showDelay: 0
                });
                 $timeout(function() {
                $ionicLoading.hide(); //由于某种原因2秒后关闭弹出
             }, 2000);
            },
            hide:function(){
              $ionicLoading.hide();
            }
         }
        
      };
      return service;

  });
