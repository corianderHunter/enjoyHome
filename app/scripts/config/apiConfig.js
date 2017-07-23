/**
 * Created by weigg on 2017/6/24.
 */

angular.module('ZrsmWorker')
    .constant("API_CONFIG",{
        host:'http://120.27.118.87',
        port:'2283',
        path:'',
        defaultPath:'http://120.27.118.87:2283/api'
    })
    .constant("API_CONFIG_TEST",{
        host:'http://192.168.199.233',
        port:'2283',
        path:'',
        defaultPath:'http://192.168.199.233:2283/api'
    })


angular.module('ZrsmWorker')
    .factory('API_CONFIG_UTIL',function($ionicPopup,$state){
        var showAlert = function(message,next) {
            var alertPopup = $ionicPopup.alert({
                title: '提示!',
                template: message
            });
            alertPopup.then(next);
        }

        var convertImgToBase64 = function(url, callback,outputFormat){
            var canvas = document.createElement('CANVAS'),
                ctx = canvas.getContext('2d'),
                img = new Image;
            img.onload = function(){
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img,0,0);
                var dataURL = canvas.toDataURL(outputFormat || 'image/png');
                callback.call(this, dataURL);
                canvas = null;
            };
            img.src = url;
        };

        var paramsHandler = function(obj,$ck){
            var tmp={};
            if(!$ck.get("Token")) return $state.go('login');
            tmp['token'] = $ck.get("Token").replace(/\"/g, "");
            for(let pro in obj){
                tmp[pro] = obj[pro]
            }
            return tmp;
        }
        return {
            showAlert,
            paramsHandler,
            convertImgToBase64
        }
    })