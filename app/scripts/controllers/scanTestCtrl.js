/**
 * Created by weigg on 2017/5/7.
 */
angular.module('ZrsmWorker')
    .controller('scanTestCtrl', function($scope,ionicPopup,$state,$cordovaBarcodeScanner) {
        $scope.dataArr = [];;
        $scope.scanStart = function () {
            $cordovaBarcodeScanner
                .scan()
                .then(function (barcodeData) {
                    $scope.dataArr.push(barcodeData);
                    // Success! Barcode data is here
                }, function (error) {
                    alert('失败')
                    // An error occurred
                })
        };
    });