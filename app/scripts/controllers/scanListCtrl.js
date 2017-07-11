/**
 * Created by weigg on 2017/5/7.
 */
angular.module('ZrsmWorker')
    .controller('scanListCtrl', function($scope,ionicPopup,$state,$ionicHistory,scanListService) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };

        $scope.keyword = '';

        $scope.search = function(val){
            scanListService.searchstocks(val).then(function(data){
                $scope.list = data
            })
        }

        $scope.list = [];

        scanListService.searchstocks().then(function(data){
            $scope.list = data
        })



    });