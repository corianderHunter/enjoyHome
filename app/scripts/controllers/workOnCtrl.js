/**
 * Created by weigg on 2017/5/14.
 */
angular.module('ZrsmWorker')
    .controller('workOnCtrl', function($scope,ionicPopup,$state,$ionicHistory,workOnService) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        }
        $scope.chosenDate_Store = [];
        //$scope.chosenDate_Store.length = 2;
        function format(val){
            if(val<10) return '0'+val;
            return val+'';
        }
        //document.getElementsByClassName('weekName')[0].offsetWidth
        function getDates (month,year){
                    let arr = [];
                    let date = new Date(year,month);
                    let ftDath = date.getDay()?date.getDay():7;
                    let count = (new Date(year,month+1,0)).getDate()+ftDath-1;
                    let i = 1;
                    for (;i<=count;i++){
                            if(i<ftDath){
                                    arr.push('');
                            }else{
                                    let val = year+'-'+format(month+1)+'-'+format(i-ftDath+1);
                                    let isChosen = 0;
                                    for(let j=0;j<$scope.chosenDate_Store.length;j++){
                                        if(!$scope.chosenDate_Store[j]) continue;
                                        if($scope.chosenDate_Store[j].date == val){
                                            isChosen = 1;
                                            break;
                                        }
                                    }
                                    let isWeekend = false;
                                    if(i%7===6||i%7===0) isWeekend = true;
                                    arr.push({value:i-ftDath+1,flag:1,date:val,isChosen:isChosen,isWeekend:isWeekend});
                            }
                    }
                    return arr;
            }
        let date = new Date();
        let  month = date.getMonth();
        let year = date.getFullYear();
        if(month===11){
                $scope.date1 = `${year}年${month+1}月`;
                $scope.date2 = `${year+1}年${0}月`;
                $scope.Dates1 = getDates(month,year);
                $scope.Dates2 = getDates(0,year+1);
        }else{
                $scope.date1 = `${year}年${month+1}月`;
                $scope.date2 = `${year}年${month+2}月`;
                $scope.Dates1 = getDates(month,year);
                $scope.Dates2 = getDates(month+1,year);
        }

        workOnService.overtimelist().then(function(data){
            data.forEach(function(val){
                $scope.chosenDate_Store.push({
                    date:val.overtimeDate
                })
            })
            for(let i = 0;i<$scope.chosenDate_Store.length;i++){
                for(let j = 0;j<$scope.Dates1.length;j++){
                    if($scope.chosenDate_Store[i].date===$scope.Dates1[j].date){
                        $scope.Dates1[j]['isChosen'] = 1;
                    }
                }
            }
            for(let i = 0;i<$scope.chosenDate_Store.length;i++){
                for(let j = 0;j<$scope.Dates2.length;j++){
                    if($scope.chosenDate_Store[i].date===$scope.Dates2[j].date){
                        $scope.Dates2[j]['isChosen'] = 1;
                    }
                }
            }
        });


        $scope.onDragDown =function(){
            $scope.onRelease =function(){
                let date = new Date(year,month-2);
                month = date.getMonth();
                year = date.getFullYear();
                $scope.date1 = `${year}年${month+1}月`;
                $scope.date2 = `${year}年${month+2}月`;
                $scope.Dates1 = getDates(month,year);
                $scope.Dates2 = getDates(month+1,year);
                $scope.onRelease = null;
            }
        };
        $scope.onDragUp=function(){
            $scope.onRelease =function() {
                let date = new Date(year, month + 2);
                month = date.getMonth();
                year = date.getFullYear();
                $scope.date1 = `${year}年${month + 1}月`;
                $scope.date2 = `${year}年${month + 2}月`;
                $scope.Dates1 = getDates(month, year);
                $scope.Dates2 = getDates(month + 1, year);
                $scope.onRelease = null;
            }
        }
        $scope.chosenDate=function(value){
            if(!value.flag) return;
            if(value.isChosen){
                workOnService.deleteovertime({
                    "overtimeDate":value.date
                }).then(function(data){
                    value.isChosen = 0;
                    for(let i=0;i<$scope.chosenDate_Store.length;i++){
                        if($scope.chosenDate_Store[i].date==value.date){
                            $scope.chosenDate_Store.splice(i,1);
                        }
                    }
                },function(){
                    API_CONFIG.showAlert("移除请假失败！");
                })
            }else{
                workOnService.commitovertime({
                    "overtimeDate":value.date
                }).then(function(data){
                    value.isChosen = 1;
                    $scope.chosenDate_Store.push(value);
                })
            }
        }
    });