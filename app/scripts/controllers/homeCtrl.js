/**
 * Created by weigg on 2017/4/23.
 */
angular.module('ZrsmWorker')
    .controller('homeCtrl', function($scope,$rootScope,$timeout, $state,$stateParams, ionicPopup,$ionicSlides, HomeService) {
        $scope.myActiveSlide = 1;
    })