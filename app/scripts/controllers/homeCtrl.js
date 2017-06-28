/**
 * Created by weigg on 2017/4/23.
 */
angular.module('ZrsmWorker')
    .controller('homeCtrl', function($scope,$http,$cookieStore,$cookies,API_CONFIG,$state,homeService) {
        $scope.myActiveSlide = 1;
        $scope.mainpage = [];
        $scope.sliders = [];
        homeService.mainpage()
            .then(function(data){
                data.adverts.forEach(function(val){
                    $scope.sliders.push(val);
                })
            },function(data){
                console.log('mainpage fetch data failed')
            })

    })