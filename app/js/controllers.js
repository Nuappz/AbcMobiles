use strict';

/* Controllers */

var AbcMobileControllers = angular.module('AbcMobileApp', []);

AbcMobileControllers.controller('AbcMobileCtrl', ['$scope', 'Slocation',
  function($scope,$location) {
   $scope.change_page=function(){
   		$location.path('/spray_management');
   }
  }]);