/**
 * Created by weigg on 2017/5/7.
 */
angular.module('ZrsmWorker')
    .controller('myTaskCtrl', function($scope,ionicPopup,$state,$ionicHistory,$cordovaBarcodeScanner) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };
    });