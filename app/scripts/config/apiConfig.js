/**
 * Created by weigg on 2017/6/24.
 */

angular.module('ZrsmWorker')
    .constant("API_CONFIG",{
        host:'http://120.27.118.87',
        port:'2283',
        path:'',
        defaultPath:'http://120.27.118.87:2283/api',
        paramsHandler(obj,$ck){
            var tmp={};
            tmp['token'] = $ck.get("Token").replace(/\"/g, "");
            for(let pro in obj){
                tmp[pro] = obj[pro]
            }
            return tmp;
        },
        showAlert:function(message) {
            var alertPopup = $ionicPopup.alert({
                title: '提示!',
                template: message
            });
        }
    })
    .constant("API_CONFIG_TEST",{
        host:'http://192.168.199.233',
        port:'2283',
        path:'',
        defaultPath:'http://192.168.199.233:2283/api'
    })