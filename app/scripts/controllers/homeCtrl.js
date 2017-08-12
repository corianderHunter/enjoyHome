/**
 * Created by weigg on 2017/4/23.
 */
angular.module('ZrsmWorker')
    .controller('homeCtrl', function($scope,$http,ionicPopup,$cordovaBarcodeScanner,$cookieStore,$cookies,API_CONFIG,$state,homeService,API_CONFIG_UTIL) {
        $scope.myActiveSlide = 1;
        $scope.mainpage = [];
        $scope.sliders = [];
        ionicPopup.loading.hide();
        homeService.mainpage()
            .then(function(data){
                data.adverts.forEach(function(val){
                    $scope.sliders.push(val);
                })
            },function(data){
                console.log('mainpage fetch data failed')
            })

        $scope.scanStart = function () {
            $cordovaBarcodeScanner
                .scan()
                .then(function (barcodeData) {
                    ionicPopup.loading.show();
                    if(!barcodeData.text) return;
                    homeService.resourceconfdetail({resId:barcodeData.text})
                        .then(function(data){
                            ionicPopup.loading.hide();
                            if(!data) return API_CONFIG_UTIL.showAlert('该资源信息为空！');
                            $state.go('resourceDetail',{item:data});
                        })
                }, function (error) {
                    API_CONFIG_UTIL.showAlert('设备扫码失败！reason:'+error);
                })
        };

    })
