'use strict';

/* Controllers */

var AbcMobileController= angular.module('AbcMobileController', []);

AbcMobileController.controller('AbcMobileCtrl', ['$scope', 'Slocation','$rootScope',
    
	
	function($scope,$location,$rootScope) {
		$scope.change_page=function(){ 	
   		
			$location.path('/spray_management');
		
	};
   }]);