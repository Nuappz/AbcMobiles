'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute'
 
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/fertilizer_master.html',        
      }).
      when('/spraymanagement', {
        templateUrl: 'partials/spray_management.html',
       
      });
  }]);
