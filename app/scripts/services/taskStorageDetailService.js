/**
 * Created by weigg on 2017/7/12.
 */

angular.module('ZrsmWorker')
    .factory('taskStorageDetailService',function($window,$cookies,$http,$q,$state,API_CONFIG,$ionicPopup,API_CONFIG_UTIL){
        var mystoragetaskdetail = function(params) {
            var api = API_CONFIG.defaultPath + '/mystoragetaskdetail';
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

        var resourcedetail = function(params){
            var api = API_CONFIG.defaultPath + '/resourcedetail';
            var deferred = $q.defer();
            $http.post(api,API_CONFIG_UTIL.paramsHandler(params,$cookies)).then(function (res) {
                if (res.status === 204) {
                    deferred.reject(null);
                } else if (res.status === 200) {
                    if (res.data.code!==2) return API_CONFIG_UTIL.showAlert('获取失败'),deferred.reject(null);
                    deferred.resolve(res.data.data.storage);
                } else {
                    API_CONFIG_UTIL.showAlert("内部服务器报错!");
                    deferred.reject(null);
                }
            })
            return deferred.promise;
        }

        return {
            mystoragetaskdetail,
            resourcedetail
        }
    })

