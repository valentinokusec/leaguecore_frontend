'use strict';

/* Services */

var livestatsServices = angular.module('livestatsServices', ['ngResource']);

livestatsServices.factory('GetLiveStats', ['$resource',
  function($resource){

    return $resource('http://138.68.95.108:8081/livestats');

  }]);
