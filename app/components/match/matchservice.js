'use strict';

/* Services */

var matchServices = angular.module('matchServices', ['ngResource']);

matchServices.factory('GetLastMatch', ['$resource',
  function($resource){

    return $resource('http://localhost:8081/lastmatch');

  }]);
  matchServices.factory('VoteData', ['$resource',
    function($resource){

      return $resource('http://localhost:8081/votedata');

    }]);
