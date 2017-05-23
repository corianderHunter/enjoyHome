/**
 * Created by weigg on 2017/5/23.
 */
angular.module('ZrsmWorker')
    .controller('feedbackAddCtrl', function($scope,ionicPopup,$state,$ionicHistory,$ionicActionSheet,$cordovaImagePicker) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };
        var options = {
            maximumImagesCount: 10,
            width: 800,
            height: 800,
            quality: 80
        };
        $scope.getPictures = function(){
            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        console.log('Image URI: ' + results[i]);
                    }
                }, function(error) {
                    // error getting photos
                });
        }
    });