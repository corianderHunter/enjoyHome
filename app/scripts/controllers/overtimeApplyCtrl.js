/**
 * Created by weigg on 2017/5/17.
 */
/**
 * Created by weigg on 2017/5/14.
 */
angular.module('ZrsmWorker')
    .controller('overtimeApplyCtrl', function($scope,$ionicPopup,$state,$ionicHistory,ionicTimePicker,overtimeApplyService,API_CONFIG_UTIL) {
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

        $scope.chosenDate_Store = {};
        let Chosen = 0;
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
                    let val = year+'-'+(month+1)+'-'+(i-ftDath+1);
                    if($scope.chosenDate_Store.date === val){
                        isChosen = 1;
                        arr.push({value:i-ftDath+1,flag:1,date:val,isChosen:isChosen});
                    }else{
                        isChosen = 0
                        arr.push({value:i-ftDath+1,flag:1,date:val,isChosen:isChosen});
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
        $scope.chosenDate=function(value,$event){
            let curDate = new Date();
            curDate = new Date(curDate.getTime()-60*60*24*1000);
            let chosenDate = new Date(value.date);
            if(chosenDate.getTime()<curDate.getTime()) return API_CONFIG_UTIL.showAlert('请选择今天以后的日期！');
            value["isChosen"] = !value.isChosen-0;
            $scope.chosenDate_Store["isChosen"] = 0;
            $scope.chosenDate_Store = value;
        }

        $scope.submit = function(){
            if(!$scope.chosenDate_Store||!$scope.chosenDate_Store["isChosen"]) return API_CONFIG_UTIL.showAlert("请选择日期");
            overtimeApplyService.overtimeApply({
                leaveDate:$scope.chosenDate_Store.date,
                startTime:$scope.rst_st,
                endTime:$scope.rst_et
            }).then(function(data){
                if(data.code === 2) API_CONFIG_UTIL.showAlert("提交请假成功！",()=>{$state.go('overtime')})
            },function(data){

            })

        }
    });