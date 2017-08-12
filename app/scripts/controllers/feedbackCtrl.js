/**
 * Created by weigg on 2017/5/18.
 */
/**
 * Created by weigg on 2017/5/17.
 */
 'use strict'
angular.module('ZrsmWorker')
    .controller('feedbackCtrl', function($scope,ionicPopup,$ionicHistory,feedbackService) {
        $scope.goback = function () {
            $ionicHistory.goBack();
        };

        $scope.delete = function(item,$event){
            feedbackService.deletefeedback({
                feedbackId:item.feedbackId
            }).then(function(){
                item = null;
                $event.target.parentNode.parentNode.remove()
            })
        }

        feedbackService.myfeedbacks().then(function(data){
            $scope.testData = data;
        });

    });
