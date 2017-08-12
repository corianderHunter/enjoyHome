/**
 * Created by weigg on 2017/5/30.
 */
angular.module('ZrsmWorker')
    .controller('personalInfoCtrl', function($scope,ionicPopup,$state,$cookieStore,$ionicHistory,personalInfoService) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        }

        $scope.myInfo = null;

        personalInfoService.myInfo().then(function(val){
            $scope.myInfo = val;
        })

        $scope.logout = function(){
            $cookieStore.remove('Token');
            $state.go('login');
        }
    })