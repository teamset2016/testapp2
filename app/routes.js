/*jslint node: true */
/*jslint nomen: true */
/*global angular, _ */
"use strict";

angular.module("myApp.routes", ['ui.router']).config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.hashPrefix('!');
	$urlRouterProvider.otherwise("/test");
	
	$stateProvider.state('test', {
		url : "/test",
		templateUrl : "/test.html"
	});
});
