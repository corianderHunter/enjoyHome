/**
 * Created by weigg on 2017/7/11.
 */
angular.module('ZrsmWorker')
    .controller('taskStorageListCtrl', function($scope,ionicPopup,$state,$ionicHistory,taskStorageListService,$stateParams,API_CONFIG_UTIL) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };
        $scope.allDays = '1';
        $scope.finished = 0;
        $scope.unfinished = 0;
        $scope.works = null;

        var fetchData = function() {
            taskStorageListService.mystoragetasks({
                allDays:!!($scope.allDays-0),
                stockroomId:$stateParams.item.stockroomId
            }).then(function(data){
                $scope.works = data.works;
                $scope.finished = data.finish;
                $scope.unfinished = data.unfinish;
            })
        }

        $scope.select_ = function(){
            fetchData();
        }

        $scope.stockcheck = function(){
            taskStorageListService.stockcheck({
                stockroomId:$stateParams.item.stockroomId
            }).then(()=>{
                API_CONFIG_UTIL.showAlert('签到成功！');
            },()=>{
                API_CONFIG_UTIL.showAlert('签到失败！');
            })
        }

        fetchData();

    });