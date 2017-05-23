/**
 * Created by weigg on 2017/5/14.
 */
angular.module('ZrsmWorker')
    .controller('workOnCtrl', function($scope,ionicPopup,$state,$ionicHistory) {
        console.log('dataTestCtrl');
        $scope.goback = function(){
            $ionicHistory.goBack();
        }
        let chosenDate_Store = [];
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
                                    let val = year+'-'+(month+1)+'-'+i;
                                    let isChosen = 0;
                                    if(chosenDate_Store.indexOf(val)>-1){
                                        isChosen = 1;
                                    }
                                    arr.push({value:i-ftDath+1,flag:1,date:val,isChosen:isChosen});
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
        $scope.chosenDate=function(value,flag,$event){
            let _$target = event.target;
            let fg = _$target.getAttribute('isChosen')-0;
            if(flag) {
                _$target.setAttribute('isChosen',!fg-0);
                let idx = chosenDate_Store.indexOf(value);
                if(idx>-1){
                    chosenDate_Store.splice(idx,1);
                }else{
                    chosenDate_Store.push(value);
                }
            };
        }
    });