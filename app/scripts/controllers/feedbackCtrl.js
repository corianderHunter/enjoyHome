/**
 * Created by weigg on 2017/5/18.
 */
/**
 * Created by weigg on 2017/5/17.
 */
angular.module('ZrsmWorker')
    .controller('feedbackCtrl', function($scope,ionicPopup,$ionicHistory) {
        $scope.goback = function () {
            $ionicHistory.goBack();
        };
        $scope.testData = [{
            title:'title1',
            content:'的范德萨范德萨范德萨',
            date:'2017.4.16'
        },{
            title:'title1',
            content:'的范德萨范德萨范德萨',
            date:'2017.4.16'
        },{
            title:'title1',
            content:'的范德萨范德萨范德萨',
            date:'2017.4.16'
        }]
    });