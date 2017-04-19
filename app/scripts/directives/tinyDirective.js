/**
 * Created by leon on 16/3/18.
 */

angular.module('ZrsmWorker')

.directive('hideTabs', function($rootScope){
  return {
    restrict: 'A',
    link: function($scope, $el) {
      $rootScope.hideTabs = true;
      $scope.$on('$destroy',
      function() {
        $rootScope.hideTabs = false;
      });
    }
  };
})
// 选择子选项指令设置
.directive('ionSelectSingle', function(){
  return{
    restrict:"A",
    link:function(scope,element,attrs,ctrl){     
      console.log("11---"+attrs.ionSelectSingle);
      attrs.$observe('ionSelectSingle', function (value) {
        scope.single = scope.$eval(value); // 判断是单选还是多选
        console.log("00---"+scope.single);
      });
      element.bind('click', function () {
        console.log("22---"+scope.single);
      });

    }
  }
})
.directive('bsyFormValidate', function(ionicToast) {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      bsyFormValidate: '='
    },
    link: function(scope, element, attrs, ctrl) {
      ctrl.validate = false;
      var formCtrl = element.controller('form');
      var wrap = element.parent();

      scope.defaultTips = {
        required: 'This field is required',
        minlength: 'This field does not match the min length',
        maxlength: 'This field does not match the max length',
        pattern: 'This field is not right',
        number: 'This field should be a number'
      }

      scope.$watch(function() {
        return ctrl.$valid + '_' + formCtrl.$submitted + '_' + ctrl.$dirty;
      },
      function() {
        if (ctrl.$valid) {
          // input is valid
          wrap.addClass('has-success').removeClass('has-error');
        } else if (ctrl.$invalid && formCtrl.$submitted) {
          // input is invalid, and submit is triggered
          //wrap.addClass('has-error').removeClass('has-success');
        } else if (ctrl.$invalid && ctrl.$dirty) {
          // input is revised, and invliad
          //wrap.addClass('has-error').removeClass('has-success');
        } else {
          // other
          wrap.removeClass('has-success').removeClass('has-error');
        }
      })

      var showTopToastShort = function(msg) {
        ionicToast.show(msg, 'middle', false, 2500)

      }

      element.on('focus',
      function(evt) {
        // focus to the first invliad input when submit
        if (formCtrl.showToast && ctrl.$invalid) {
          formCtrl.showToast = false;
          var errorType = Object.keys(ctrl.$error)[0];

          if (scope.bsyFormValidate == undefined) {
            scope.bsyFormValidate = scope.defaultTips
          }

          var errorTips = scope.bsyFormValidate[errorType];

          if (errorTips == undefined) {
            errorTips = scope.defaultTips[errorType]
          }
          showTopToastShort(errorTips);
        }
      })
    }
  }
})

.directive('placehold', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ctrl) {      
      var value;
      var placehold = function () {
          element.val(attr.placehold)
      };
      var unplacehold = function () {
          element.val('');
      };

      scope.$watch(attr.ngModel, function (val) {
        value = val || '';
      });

      element.bind('focus', function () {
         if(value == '') unplacehold();
      });

      element.bind('blur', function () {
         if (element.val() == '') placehold();
      });

      ctrl.$formatters.unshift(function (val) {
        if (!val) {
          placehold();
          value = '';
          return attr.placehold;
        }
        return val;
      });
    }
  };
})

.directive('checkForm', function($parse, $timeout) {
  return {
    require: '^form',
    restrict: 'A',
    priority: -1,
    // execute before ng-click, which is on priority 0
    link: function(scope, element, attrs, ctrl) {
      var form = angular.element(element[0].form);
      var formCtrl = ctrl;

      formCtrl.$submitted = false;
      formCtrl.showToast = false;
      element.on('click',
      function(event) {
        if (formCtrl.$invalid) {
          var inputs = form[0].getElementsByClassName('ng-invalid');
          // the first invliad input
          var inputWithErr = inputs[0];
          $timeout(function() {
            formCtrl.showToast = true;
            formCtrl.$submitted = true;
            //console.log(inputWithErr)
            inputWithErr.focus();
          },
          0);
          event.stopImmediatePropagation();
          event.preventDefault()
        }
      })
    }
  }
});