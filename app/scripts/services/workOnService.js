/**
 * Created by weigg on 2017/6/28.
 */
angular.module('ZrsmWorker')
    .factory('workOnService',function($window,$cookies,$http,$q,$state,API_CONFIG,API_CONFIG_UTIL,$ionicPopup){
        var overtimelist = function(){
            var overtimelist_api = API_CONFIG.defaultPath + '/overtimelist';
            var deferred = $q.defer();
            $http.post(overtimelist_api,API_CONFIG_UTIL.paramsHandler({},$cookies)).then(function (res) {
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

        var commitovertime = function(param) {
            //console.log(API_CONFIG)
            var commitovertime_api = API_CONFIG.defaultPath+'/commitovertime';
            var deferred = $q.defer();
            $http.post(commitovertime_api,API_CONFIG_UTIL.paramsHandler(param,$cookies)).then(function (res) {
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

        var deleteovertime = function(param) {
            var deleteovertime_api = API_CONFIG.defaultPath+'/deleteovertime';
            var deferred = $q.defer();
            $http.post(deleteovertime_api,API_CONFIG_UTIL.paramsHandler(param,$cookies)).then(function (res) {
                if (res.status === 204) {
                    console.log('登出')
                    deferred.reject(null);
                } else if (res.status === 200) {
                    console.log('成功');
                    if (res.data.code!==2) return API_CONFIG.showAlert('获取失败'),deferred.reject(null);
                    deferred.resolve(res.data.data);
                } else {
                    API_CONFIG.showAlert("内部服务器报错");
                    deferred.reject(null);
                }
            })
            return deferred.promise;
        }

        return {
            overtimelist,commitovertime,deleteovertime
        }
    })