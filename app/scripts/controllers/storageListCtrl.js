/**
 * Created by weigg on 2017/5/7.
 */
angular.module('ZrsmWorker')
    .controller('storageListCtrl', function($scope,ionicPopup,$state,$ionicHistory,$cordovaBarcodeScanner) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };
    });