/**
 * Created by weigg on 2017/5/7.
 */
angular.module('ZrsmWorker')
        .controller('storageListCtrl', function($scope,ionicPopup,$state,$ionicHistory,$stateParams,storageListService) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };

        $scope.title = $stateParams.item.name

        $scope.storgaeList = [];

        storageListService.searchstorages($stateParams.item.id).then(function(data){
            $scope.storgaeList = data;
        })

    });