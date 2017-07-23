/**
 * Created by weigg on 2017/5/23.
 */
/**
 * Created by weigg on 2017/5/7.
 */
angular.module('ZrsmWorker')
    .controller('feedbackShowCtrl', function($scope,$document,ionicPopup,$state,$ionicHistory,$stateParams) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };

        $scope.height = (function(){
            var target = $document[0].body.offsetWidth;
            return target*0.2;
        })()

        console.log($stateParams);
        $scope.item = $stateParams.item
    });