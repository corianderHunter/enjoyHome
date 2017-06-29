/**
 * Created by weigg on 2017/5/30.
 */
angular.module('ZrsmWorker')
    .controller('personalInfoCtrl', function($scope,ionicPopup,$state,$ionicHistory) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        }
    })