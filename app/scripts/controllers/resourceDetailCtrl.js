/**
 * Created by weigg on 2017/7/22.
 */
angular.module('ZrsmWorker')
    .controller('resourceDetailCtrl', function($scope,ionicPopup,$state,$ionicHistory,$stateParams) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };
        $scope.item = $stateParams.item;
    });