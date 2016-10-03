'use strict';

/* Services */

var leadboardService = angular.module('leadboardService', ['ngResource']);

leadboardService.factory('GetVotesFromLeadbard', ['$resource',
  function($resource){

    return $resource('http://138.68.95.108:8081/getvotes');

  }]);
  leadboardService.factory('GetVotesForSummoner', ['$resource',
    function($resource){

      return $resource('http://138.68.95.108:8081/getvotesforsummoner');

    }]);
