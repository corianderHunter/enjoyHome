/**
 * Created by weigg on 2017/7/12.
 */
angular.module('ZrsmWorker')
    .controller('taskStorageDetailCtrl', function($scope,ionicPopup,$state,$ionicHistory,$cordovaBarcodeScanner,taskStorageDetailService,$stateParams,API_CONFIG_UTIL) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };
        $scope.works = null;
        $scope.storage = null;
        $scope.allDays = $stateParams.item.allDays;

        var next = function(id){
            $state.go('taskOver',{id:id});
        }

        taskStorageDetailService.mystoragetaskdetail({
            allDays:$stateParams.item.allDays,
            storageId:$stateParams.item.storageId
        }).then(function(data){
            $scope.works = data.works;
            $scope.storage = data.storage;
        })

        $scope.scanStart = function () {
            $cordovaBarcodeScanner
                .scan()
                .then(function (barcodeData) {
                    ionicPopup.loading.show();
                    if(!barcodeData.text) return;
                    taskStorageDetailService.resourcedetail({resId:barcodeData.text})
                        .then(function(data){
                            ionicPopup.loading.hide();
                            if(!data) return API_CONFIG_UTIL.showAlert('校验数据异常！');
                            //return next($scope.storage.id);
                            if(data.id === $scope.storage.id||1){
                                next(data.id);
                            }else{
                                API_CONFIG_UTIL.showAlert('库位校验失败！该植物不属于当前库位！');
                            }
                        })
                }, function (error) {
                    API_CONFIG_UTIL.showAlert('设备扫码失败！reason:'+error);
                })
        };

    });
