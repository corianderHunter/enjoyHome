/**
 * Created by weigg on 2017/5/18.
 */
/**
 * Created by weigg on 2017/5/17.
 */
angular.module('ZrsmWorker')
    .controller('feedbackCtrl', function($scope,ionicPopup,$ionicHistory,feedbackService) {
        $scope.goback = function () {
            $ionicHistory.goBack();
        };

        feedbackService.myfeedbacks().then(function(data){
            $scope.testData = data;
        });

    });