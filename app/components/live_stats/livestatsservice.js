'use strict';

/* Services */

var livestatsServices = angular.module('livestatsServices', ['ngResource']);

livestatsServices.factory('GetLiveStats', ['$resource',
  function($resource){

    return $resource('http://localhost:8081/livestats');

  }]);
