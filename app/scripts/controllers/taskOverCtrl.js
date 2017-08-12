/**
 * Created by weigg on 2017/7/20.
 */
angular.module('ZrsmWorker')
    .controller('taskOverCtrl', function($scope,ionicPopup,$state,$ionicHistory,taskOverService,$stateParams,API_CONFIG_UTIL,$cordovaCamera) {
        $scope.goback = function(){
            $ionicHistory.goBack();
        };
        $scope.hide = true;
        $scope.imgSrc = null;
        $scope.picCode = null;
        $scope.isPost = null;

        $scope.takePhoto = null;
        document.addEventListener("deviceready", function () {
            $scope.takePhoto = function () {
                var options = {
                    quality: 10,                                            //相片质量0-100
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
                    $scope.imgSrc = result;
                    API_CONFIG_UTIL.convertImgToBase64(result,function(dataBase64){
                        $scope.picCode = dataBase64.slice(22);
                    })
                    $scope.hide = false;
                }, function (err) {
                    API_CONFIG_UTIL.showAlert('拍照失败！');
                });

            }

        })

        $scope.over = function(){
            if($scope.isPost) return API_CONFIG_UTIL.showAlert('请等待当前任务提交完成！');
            $scope.isPost = 1;
            taskOverService.storageproducttaskdone({
                storageId:$stateParams.id,
                picCode:$scope.picCode
            }).then(()=>{
                $scope.isPost = 0;
                API_CONFIG_UTIL.showAlert("提交成功！");
            },()=>{
                $scope.isPost = 0;
                API_CONFIG_UTIL.showAlert('提交失败！');
            })
        }

    });
