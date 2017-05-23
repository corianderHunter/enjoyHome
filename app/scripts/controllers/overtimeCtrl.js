/**
 * Created by weigg on 2017/5/17.
 */
angular.module('ZrsmWorker')
    .controller('overtimeCtrl', function($scope,ionicPopup,$ionicHistory) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        }
        $scope.testData = [{
            st:'2017-05-16 09:00:00',
            et:'2017-05-16 18:00:00',
            status:1
        },{
            st:'2017-05-15 09:00:00',
            et:'2017-05-15 18:00:00',
            status:0
        },{
            st:'2017-05-17 09:00:00',
            et:'2017-05-17 18:00:00',
            status:2
        }]
    });