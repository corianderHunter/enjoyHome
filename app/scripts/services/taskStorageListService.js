/**
 * Created by weigg on 2017/7/11.
 */

angular.module('ZrsmWorker')
    .factory('taskStorageListService',function($window,$cookies,$http,$q,$state,API_CONFIG,$ionicPopup,API_CONFIG_UTIL){
        var mystoragetasks = function(params) {
            //console.log(API_CONFIG)
            var api = API_CONFIG.defaultPath + '/mystoragetasks';
            var deferred = $q.defer();
            $http.post(api,API_CONFIG_UTIL.paramsHandler(params,$cookies)).then(function (res) {
                if (res.status === 204) {
                    deferred.reject(null);
                } else if (res.status === 200) {
                    if (res.data.code!==2) return API_CONFIG_UTIL.showAlert('获取失败'),deferred.reject(null);
                    deferred.resolve(res.data.data);
                } else {
                    API_CONFIG_UTIL.showAlert("内部服务器报错!");
                    deferred.reject(null);
                }
            })
            return deferred.promise;
        }
        var stockcheck = function(params){
            var api = API_CONFIG.defaultPath + '/stockcheck';
            var deferred = $q.defer();
            $http.post(api,API_CONFIG_UTIL.paramsHandler(params,$cookies)).then(function (res) {
                if (res.status === 204) {
                    deferred.reject(null);
                } else if (res.status === 200) {
                    if (res.data.code!==2) return API_CONFIG_UTIL.showAlert('提交失败'),deferred.reject(null);
                    deferred.resolve();
                } else {
                    API_CONFIG_UTIL.showAlert("内部服务器报错!");
                    deferred.reject(null);
                }
            })
            return deferred.promise;
        }
        return {
            mystoragetasks,
            stockcheck
        }
    })
