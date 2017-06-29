/**
 * Created by weigg on 2017/5/23.
 */
/**
 * Created by weigg on 2017/5/7.
 */
angular.module('ZrsmWorker')
    .controller('feedbackShowCtrl', function($scope,ionicPopup,$state,$ionicHistory,$stateParams) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };
        console.log($stateParams);
        $scope.item = $stateParams.item
    });