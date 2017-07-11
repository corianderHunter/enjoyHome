/**
 * Created by weigg on 2017/6/28.
 */
/**
 * Created by weigg on 2017/6/24.
 */
angular.module('ZrsmWorker')
    .factory('overtimeService',function($cookieStore,$q,$ionicPopup,$cookies,$http,$state,API_CONFIG,API_CONFIG_UTIL){
        var overtime = function() {
            //console.log(API_CONFIG)
            var api = API_CONFIG.defaultPath + '/myofftimelist';
            var deferred = $q.defer();
            var params = {
            }
            $http.post(api,API_CONFIG_UTIL.paramsHandler(params,$cookies)).then(function (res) {
                if (res.status === 204) {
                    console.log('登出')
                    deferred.reject(null);
                } else if (res.status === 200) {
                    console.log('成功');
                    if (res.data.code!==2) return API_CONFIG_UTIL.showAlert('获取失败'),deferred.reject(null);
                    deferred.resolve(res.data.data);
                } else {
                    API_CONFIG_UTIL.showAlert("内部服务器报错");
                    deferred.reject(null);
                }
            })
            return deferred.promise;
        }

        var deleteofftime = function(params){
            var api = API_CONFIG.defaultPath + '/deleteofftime';
            var deferred = $q.defer();
            $http.post(api,API_CONFIG_UTIL.paramsHandler(params,$cookies)).then(function (res) {
                if (res.status === 204) {
                    console.log('登出')
                    deferred.reject(null);
                } else if (res.status === 200) {
                    console.log('成功');
                    if (res.data.code!==2) return API_CONFIG_UTIL.showAlert('获取失败'),deferred.reject(null);
                    deferred.resolve();
                } else {
                    API_CONFIG_UTIL.showAlert("内部服务器报错");
                    deferred.reject(null);
                }
            })
            return deferred.promise;
        }

        return {
            overtime,deleteofftime
        }
    })
