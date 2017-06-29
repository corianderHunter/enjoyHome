/**
 * Created by weigg on 2017/6/24.
 */
angular.module('ZrsmWorker')
    .factory('loginService',function($window,$cookieStore,$ionicPopup,$cookies,$http,$state,API_CONFIG){
        var login = function(name,password,ts) {
            //console.log(API_CONFIG)
            var loginApi = API_CONFIG.defaultPath + '/login';
            var obj = {
                name: name, password: password, ts: ts
            };
            showAlert = function(message,suceess) {
                var alertPopup = $ionicPopup.alert({
                    title: '提示!',
                    template: message
                });
            };
            //API_CONFIG.paramsHandler(obj,$cookies))
            $http.post(loginApi,obj).then(function (res) {
                if (res.status === 204) {
                    showAlert('登录失败');
                } else if (res.status === 200) {
                    if (res.data.code) return showAlert('登录失败');
                    $cookieStore.put("Token",res.data.data.replace(/\"/g, ""))
                    $state.go('home')
                } else {
                    showAlert("内部服务器报错");
                }
            })
        }
        return {
            login
        }
    })