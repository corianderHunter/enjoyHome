/**
 * Created by weigg on 2017/7/5.
 */
angular.module('ZrsmWorker')
    .controller('scanCtrl', function($scope,$ionicHistory,$state,$cordovaBarcodeScanner,scanService,$stateParams,API_CONFIG_UTIL) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };

        $scope.dataArr = [];;
        $scope.scanStart = function () {
            $cordovaBarcodeScanner
                .scan()
                .then(function (barcodeData) {
                    if($scope.dataArr.indexOf(barcodeData.text)>-1) return API_CONFIG_UTIL.showAlert('请勿重复扫码！');
                    $scope.dataArr.push(barcodeData.text);
                }, function (error) {
                    API_CONFIG_UTIL.showAlert(error);
                })
        };

        $scope.remove = function(index){
            $scope.dataArr.splice(index,1);
        }
        var params = {}
        for(var pro in $stateParams.ids){
            params[pro] = $stateParams.ids[pro]
        }
        params.barCodes = $scope.dataArr
        $scope.commit = function(){
            scanService.commitstocktake(params).then(function(data){
                API_CONFIG_UTIL.showAlert("提交扫码成功！")
                $ionicHistory.goBack();
            })
        }
    });