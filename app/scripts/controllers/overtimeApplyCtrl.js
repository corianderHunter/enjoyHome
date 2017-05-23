/**
 * Created by weigg on 2017/5/17.
 */
/**
 * Created by weigg on 2017/5/14.
 */
angular.module('ZrsmWorker')
    .controller('overtimeApplyCtrl', function($scope,ionicPopup,$state,$ionicHistory,ionicTimePicker) {
        console.log('overtimeApplyCtrl');

        $scope.goback = function(){
            $ionicHistory.goBack();
        };
        let val_st = 28800;
        let val_et = 66600;
        function getMinSec(time){
            var date = new Date(time);
            function timeHandler(value){
                if(value<10) return '0'+value;
                return value+'';
            }
            return timeHandler(date.getUTCHours())+':'+timeHandler(date.getUTCMinutes());
        }
        $scope.rst_st = getMinSec(val_st*1000);
        $scope.rst_et = getMinSec(val_et*1000);
        $scope.openTimePicker1 = function () {
            var ipObj1 = {
                callback: function (val) {
                    if (typeof (val) === 'undefined') {
                        console.log('Time not selected');
                    } else {
                        val_st = val;
                        $scope.rst_st = getMinSec(val*1000);
                    }
                },
                inputTime: val_st,
                format: 24,
                setLabel: 'Set'
            };
            ionicTimePicker.openTimePicker(ipObj1);
        };

        $scope.openTimePicker2 = function () {
            var ipObj1 = {
                callback: function (val) {
                    if (typeof (val) === 'undefined') {
                        console.log('Time not selected');
                    } else {
                        val_et = val;
                        $scope.rst_et = getMinSec(val*1000);
                    }

                },
                inputTime: val_et,
                format: 24
            };
            ionicTimePicker.openTimePicker(ipObj1);
        };


        let chosenDate_Store = null;
        let Chosen = 0;
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
                    if(chosenDate_Store === val){
                        isChosen = 1;
                        arr.push({value:i-ftDath+1,flag:1,date:val,isChosen:isChosen});
                    }else{
                        arr.push({value:i-ftDath+1,flag:1,date:val});
                    }
                }
            }
            return arr;
        }
        let date = new Date();
        let  month = date.getMonth();
        let year = date.getFullYear();
            $scope.date = `${year}年${month+1}月`;
            $scope.Dates = getDates(month,year);
            $scope.backMonth =function(){
                let date = new Date(year,month-1);
                month = date.getMonth();
                year = date.getFullYear();
                $scope.date = `${year}年${month+1}月`;
                $scope.Dates = getDates(month,year);
            }
            $scope.addMonth =function() {
                let date = new Date(year, month + 1);
                month = date.getMonth();
                year = date.getFullYear();
                $scope.date = `${year}年${month + 1}月`;
                $scope.Dates = getDates(month, year);
            }
        $scope.chosenDate=function(value,flag,$event){
            let _$target = event.target;
            let fg = _$target.getAttribute('isChosen')-0;
            if(flag) {
                _$target.setAttribute('isChosen',!fg-0);
            };
        }
    });