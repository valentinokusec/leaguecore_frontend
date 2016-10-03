'use strict';

/* Services */

var matchServices = angular.module('matchServices', ['ngResource']);

matchServices.factory('GetLastMatch', ['$resource',
  function($resource){

    return $resource('http://138.68.95.108:8081/lastmatch');

  }]);
  matchServices.factory('VoteData', ['$resource',
    function($resource){

      return $resource('http://138.68.95.108:8081/votedata');

    }]);
