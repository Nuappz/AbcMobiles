'use strict';

/* Controllers */

var AbcMobileController= angular.module('AbcMobileController', []);

function AbcMobileCtrl($scope,$location) {
  $scope.change_page = function(){
		$location.path('/spray_management');		
	}
}