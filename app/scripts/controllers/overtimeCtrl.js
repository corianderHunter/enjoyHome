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
                        value:val.leaveDate,
                        status:val.state-1
                    })
                })
            },function(data){

            })

        $scope.delete = function(item,$event){
            overtimeService.deleteofftime({
                leaveDate:item.value
            }).then(function(){
                delete item;
                $event.target.parentNode.parentNode.remove()
            })
        }
    });