'use strict';

/**
 * @ngdoc function
 * @name ZrsmWorker.filter:lodash
 * @description
 * # Lo-Dash
 * Expose Lo-Dash through injectable factory, so we don't pollute / rely on global namespace
 * just inject lodash as _
 */

angular.module('ZrsmWorker')
  .filter('btnFilter', function() {  
	   return function(input, param1) {  
	      for(var i=0;i<input.length;i++){
	      	var index = param1.join(",").indexOf(input[i].code);
    			console.log("index==="+index);
					if (index == -1) {
						input.splice(i, 1);
					}
	      }
	      return input;
	   };  
	})
  // 字符串格式转化日期类型
  .filter("toDate", function(){
      return function(input){
        if(typeof(input) == "string"){
          return new Date(input);
        }else{
          return input;
        }
      }
  })
	.filter("filterDate", function () {
    return function (input) {
        var inputdate = new Date(input);
        if (new Date()==inputdate) {
            return "今天";
        } else if ((new Date() + 1*24*60*60*1000) == inputdate) {
            return "明天";
        } else {
            var _m = inputdate.getMonth()+1;
            var _d = inputdate.getDate();
            return _m+"月"+_d+"日";
        }
    }
	})
	.filter("displayDate", function () {
    return function (input) {
        var inputdate = input;
        var t=new Date();
		var zt=new Date(t.getFullYear(),t.getMonth(),t.getDate()-1);
        if (t.equals(inputdate)) {
        	console.log("000")
            return Date.parse(input, "mm:ss");
        } else if (t.equals(inputdate)) {
        	console.log("111")
            return "昨天";
        } else {
        		console.log("333==="+input)
            return input.Format("yyyy-MM-dd"); 
        }
    }
	});
