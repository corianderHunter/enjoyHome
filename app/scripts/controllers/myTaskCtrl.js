/**
 * Created by weigg on 2017/5/7.
 */
angular.module('ZrsmWorker')
    .controller('myTaskCtrl', function($scope,ionicPopup,$state,$ionicHistory,myTaskService) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };
        $scope.allDays = '1';
        $scope.finished = 0;
        $scope.unfinished = 0;
        $scope.works = null;


        var fetchData = function(){
            myTaskService.mystocktasks({
                allDays:!!($scope.allDays-0)
            }).then(function(data){
                $scope.works = data.works;
                $scope.finished = data.finish;
                $scope.unfinished = data.unfinish;
            })
        }

        $scope.select_ = function(){
            fetchData();
        }
        fetchData();
    });