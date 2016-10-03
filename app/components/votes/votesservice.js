'use strict';

/* Services */

var votesService = angular.module('votesService', ['ngResource']);

votesService.factory('GetVotes', ['$resource',
  function($resource){

    return $resource('http://138.68.95.108:8081/getvotesforvotes');

  }]);
  votesService.factory('GetLastVotes', ['$resource',
    function($resource){

      return $resource('http://138.68.95.108:8081/getlastvotes');

    }]);
    votesService.factory('GetVotesById', ['$resource',
      function($resource){

        return $resource('http://138.68.95.108:8081/getvotesbyid');

      }]);
