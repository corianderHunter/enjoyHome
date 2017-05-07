/**
 * Created by weigg on 2017/4/25.
 */
angular.module('ZrsmWorker')
    .controller('loginCtrl', function($scope,ionicPopup,$state) {
        $scope.userPhoneErrorTips = {
            required: '请输入手机号！',
            pattern: '输入的手机号不正确！'
        }

        $scope.userPwdErrorTips = {
            required: '请输入密码！'
        }

        // 登录方法
        $scope.loginSubmit = function(loginInfo){

            var phone = loginInfo.phone;
            var password = loginInfo.password;
            ionicPopup.loading.show();

            $state.go("home");
        }
    })