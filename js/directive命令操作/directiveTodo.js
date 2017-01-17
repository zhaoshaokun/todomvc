/*
* @Author: 赵少坤
* @Date:   2017-01-12 19:17:28
* @Last Modified by:   赵少坤
* @Last Modified time: 2017-01-13 11:34:35
*/
(function (angular){
'use strict';
	angular.module('myApp')
		.directive('setfocus', function ($timeout){
			return function (scope, ele, attr){
				scope.$watch(attr.setfocus, function(newValue, oldValue) {
					console.log(newValue);
				if(newValue){
					$timeout(function(){
						console.log(1);
						ele[0].focus();
					},200);
					}
				});
				
			}
			
		});
})(angular);