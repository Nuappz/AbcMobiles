use strict';

/* Controllers */

var AbcMobileApp= angular.module('AbcMobileApp', []);

AbcMobileApp.controller('AbcMobileCtrl', ['$scope', 'Slocation','$locationProvider',
    
	function($locationProvider) {
		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('!');
	},
	function($scope,$location) {
		$scope.change_page=function(){ 
   		$location.path('/spray_management').replace();			 
		$scope.$apply();  
	};
   }]);