testData = (function(){
    var login = {
        "code":0,
        "token":"xxxxxxxxxxxxxxxxxxxxxxxx"
    };
    var mainpage = {
        "code": 2,
        "data": {
            "adverts": [
                {
                    "picUrl": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=488877386,720157377&fm=80&w=179&h=119&img.JPEG",
                    "lindUrl": "http://hsh-life.com/"
                },
                {
                    "picUrl": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=485688740,704920461&fm=80&w=179&h=119&img.JPEG",
                    "lindUrl": "http://hsh-life.com/"
                }
            ],
            "modules": [
                {
                    "moduleNo": 1,
                    "name": "我的任务"
                },
                {
                    "moduleNo": 2,
                    "name": "我要加班"
                },
                {
                    "moduleNo": 3,
                    "name": "我的反馈"
                },
                {
                    "moduleNo": 4,
                    "name": "扫码盘点"
                },
                {
                    "moduleNo": 5,
                    "name": "我要请假"
                },
                {
                    "moduleNo": 6,
                    "name": "复状报损"
                }
            ]
        }
    };
    var myinfo = {
        "code": 2,
        "data": {
            "name": "赵博",
            "picUrl": "http://res.www.zte.com.cn/mediares/zte/Global/logo/logo.png",
            "roleName": "养护专员"
        }
    };
    var commitofftime = {"code":2};
    var commitovertime = {
        "overtimeDate":"2017-06-23",
        "token":"xxxxxxxxxxxxxxxxxxxxxxxx"
    };
   var myfeedbacks = {
       "code": 2,
       "data": [
           {
               "title": "title1",
               "content": "qwfafdsafdsafdsafda",
               "feedbackDate": "2016-09-01 10:10:10"
           },
           {
               "title": "title2",
               "content": "12321321adsfasfafsa",
               "feedbackDate": "2016-12-22 16:10:10"
           }
       ]
   }
    return {
        myfeedbacks:myfeedbacks,commitovertime:commitovertime,
        commitofftime:commitofftime,myinfo:myinfo,mainpage:mainpage,
        login:login
    }
})()