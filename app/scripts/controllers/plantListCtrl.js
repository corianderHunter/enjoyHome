/**
 * Created by weigg on 2017/7/16.
 */
angular.module('ZrsmWorker')
    .controller('plantListCtrl', function($scope,ionicPopup,$state,$ionicHistory,plantListService,$stateParams) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };

        $scope.resConf = null;
        $scope.resIds = null;
        $scope.workDetail = null;

        plantListService.storageproducttasks({
            allDays:$stateParams.item.allDays,
            resConfId:$stateParams.item.resConfId,
            storageId:$stateParams.item.storageId
        }).then(function(data){
            $scope.resConf = data.resConf;
            $scope.resIds = data.resIds;
            $scope.workDetail = data.workDetail;
        })
    });