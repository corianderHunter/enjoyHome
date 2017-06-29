/**
 * Created by weigg on 2017/5/17.
 */
angular.module('ZrsmWorker')
    .controller('overtimeCtrl', function($scope,ionicPopup,$ionicHistory,API_CONFIG,overtimeService) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };
        $scope.data = [];
        overtimeService.overtime()
            .then(function(data){
                data.forEach(function(val){
                    $scope.data.push({
                        st:val.leaveDate+" "+val.startTime,
                        et:val.leaveDate+" "+val.endTime,
                        status:val.state-1
                    })
                })
            },function(data){

            })
    });