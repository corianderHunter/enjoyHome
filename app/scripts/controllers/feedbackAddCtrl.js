/**
 * Created by weigg on 2017/5/23.
 */
angular.module('ZrsmWorker')
    .controller('feedbackAddCtrl', function($scope,$ionicHistory,$ionicPopup,_,$ionicActionSheet,$cordovaImagePicker,$cordovaCamera,feedbackAddService) {
        $scope.imageList = ['../imgs/jinping.jpg'];
        $scope.base64 = ['ttestdata'];
        $scope.goback = function(){
            $ionicHistory.goBack();
        };
        $scope.delImg = function($index){
            $scope.imageList.splice($index,1)
            $scope.base64.splice($index,1)
        }
        $scope.data = {}
        $scope.data.title = "";
        $scope.data.content = '';

        function convertImgToBase64(url, callback,outputFormat){
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

        $scope.getPictures = function() {
            if($scope.imageList.length>0) return;
            $ionicActionSheet.show({
                buttons: [
                    { text: '相机' },
                    { text: '图库' }
                ],
                cancelText: '关闭',
                cancel: function() {
                    return true;
                },
                buttonClicked: function(index) {
                    switch (index){
                        case 0:
                            takePhoto();
                            break;
                        case 1:
                            pickImage();
                            break;
                        default:
                            break;
                    }
                    return true;
                }
            });
        }
        //image picker
        var pickImage = function () {
            var options = {
                maximumImagesCount:10,
                quality: 50
            };

            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    $scope.imageList.push(results[0])
                    convertImgToBase64(results[0],function(dataBase64){
                        $scope.base64.push(dataBase64);
                    })
                }, function (error) {
                    //console.log(error);
                });
        }
        var takePhoto = null;

        document.addEventListener("deviceready", function () {
            takePhoto = function () {
                var options = {
                    quality: 50,                                            //相片质量0-100
                    destinationType: Camera.DestinationType.FILE_URI,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
                    sourceType: Camera.PictureSourceType.CAMERA,             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
                    allowEdit: false,                                        //在选择之前允许修改截图
                    encodingType: Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
                    //targetWidth: 200,                                        //照片宽度
                    //targetHeight: 200,                                       //照片高度
                    mediaType: 0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
                    cameraDirection: 0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: true                                   //保存进手机相册
                };
                $cordovaCamera.getPicture(options).then(function (result) {
                    $scope.imageList.push(result);
                    convertImgToBase64(result,function(dataBase64){
                        $scope.base64.push(dataBase64);
                    })
                }, function (err) {

                });

            }

        })
        $scope.commit = function(){
            if(!$scope.data.title) return $ionicPopup.alert({
                title:'提示！',
                template:'为输入标题！'
            })
            if(!$scope.data.content) return $ionicPopup.alert({
                title:'提示！',
                template:'为输入正文！'
            })
            if(!$scope.base64.length) return $ionicPopup.alert({
                title:'提示！',
                template:'请选择图片！'
            })
            feedbackAddService.commitfeedback({
                title:$scope.data.title,
                content:$scope.data.content,
                picCode:$scope.base64[0]
            }).then(function(){
                API_CONFIG_UTIL.showAlert("提交成功！",()=>{$ionicHistory.goBack();})
            })
        }

    });