(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var myApp = angular.module('myApp', ["ui.router"]);
	myApp.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
		$stateProvider.state('home',{
	       url:'/home',
	       templateUrl:'views视口模板/tmpls.html',
	       controller: 'controllerTodo'
	    })
	    .state('active',{
	        url:'/active',
	        templateUrl:'views视口模板/tmpls.html',
	        controller: 'controllerTodo'
	    })
	    .state('completed',{
	        url:'/completed',
	        templateUrl:'views视口模板/tmpls.html',
	        controller: 'controllerTodo'
	    });
	})


})(angular);
