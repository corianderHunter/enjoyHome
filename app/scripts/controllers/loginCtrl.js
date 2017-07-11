/**
 * Created by weigg on 2017/4/25.
 */
angular.module('ZrsmWorker')
    .controller('loginCtrl', function($scope,$cookies,ionicPopup,$state,loginService) {
        $scope.userPhoneErrorTips = {
            required: '请输入手机号！',
            pattern: '输入的手机号不正确！'
        }

        $scope.userPwdErrorTips = {
            required: '请输入密码！'
        }

        if($cookies.get('Token')) $state.go('home');

        // 登录方法
        $scope.loginSubmit = function(loginInfo){
            var name = loginInfo.phone;
            var password = loginInfo.password+'';
            password = hex_md5(password)
            var ts = (new Date()).getTime();
            loginService.login(name,password,ts)
            ionicPopup.loading.show();
        }
    })