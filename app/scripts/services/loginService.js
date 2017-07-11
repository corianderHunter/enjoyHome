/**
 * Created by weigg on 2017/6/24.
 */
angular.module('ZrsmWorker')
    .factory('loginService',function($window,$ionicPopup,$cookies,$http,$state,API_CONFIG,API_CONFIG_UTIL){
        var login = function(name,password,ts) {
            //console.log(API_CONFIG)
            var loginApi = API_CONFIG.defaultPath + '/login';
            var obj = {
                name: name, password: password, ts: ts
            };
            //API_CONFIG.paramsHandler(obj,$cookies))
            $http.post(loginApi,obj).then(function (res) {
                if (res.status === 204) {
                    API_CONFIG_UTIL.showAlert('登录失败');
                } else if (res.status === 200) {
                    if (res.data.code) return API_CONFIG_UTIL.showAlert('登录失败');
                    let expiresTime = new Date();
                    expiresTime.setMinutes(expiresTime.getMinutes() + 30)
                    $cookies.put("Token",res.data.data.replace(/\"/g, ""),{"expires":expiresTime})
                    $state.go('home')
                } else {
                    API_CONFIG_UTIL.showAlert("内部服务器报错");
                }
            })
        }
        return {
            login
        }
    })