/**
 * Created by weigg on 2017/7/1.
 */
angular.module('ZrsmWorker')
    .factory('feedbackAddService',function($window,$cookies,$http,$q,$state,API_CONFIG,API_CONFIG_UTIL,ionicPopup){
        var commitfeedback = function(params) {
            //console.log(API_CONFIG)
            var api = API_CONFIG.defaultPath + '/commitfeedback';
            var deferred = $q.defer();
            //params.picCode = params.picCode.replace('data:image/png;base64,','');
            params.picCode = params.picCode.map(function(val){
                return val.replace('data:image/png;base64,','')
            })
            ionicPopup.loading.show();
            $http.post(api,API_CONFIG_UTIL.paramsHandler(params,$cookies)).then(function (res) {
                ionicPopup.loading.hide();
                if (res.status === 204) {
                    console.log('登出')
                    deferred.reject(null);
                } else if (res.status === 200) {
                    if (res.data.code!==2) return API_CONFIG_UTIL.showAlert('提交失败'),deferred.reject(null);
                    deferred.resolve(null);
                } else {
                    API_CONFIG_UTIL.showAlert("内部服务器报错");
                    deferred.reject(null);
                }
            })
            return deferred.promise;
        }
        return {
            commitfeedback
        }
    })