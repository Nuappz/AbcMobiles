'use strict';

/* App Module */

var AbcMobileApp = angular.module('AbcMobileApp', [
  'ngRoute','AbcMobileController' ,'ngAnimate'
]);

AbcMobileApp.config(['$routeProvider',
  function($routeProvider ) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/fertilizer_master.html',
		controller: 'AbcMobileCtrl'
      }).
      when('/spray_management', {
        templateUrl: 'partials/spray_management.html'
       
      });
	   
  }]);
