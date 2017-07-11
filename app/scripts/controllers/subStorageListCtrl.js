/**
 * Created by weigg on 2017/5/7.
 */
angular.module('ZrsmWorker')
    .controller('subStorageListCtrl', function($scope,$ionicHistory,$stateParams,$cordovaBarcodeScanner,subStorageListService) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };

        $scope.title = $stateParams.item.name;

        $scope.ids = null;

        $scope.summary = null;

        $scope.storage = null;

        subStorageListService.storagedetail({
            "storageId":$stateParams.item.id
        }).then(function(data){

            $scope.summary = data.summary;
            $scope.storage = data.storage;

            $scope.ids = {
                storageId:data.storage.id,
                stockroomId:data.storage.stockroomId
            }
        })

    });