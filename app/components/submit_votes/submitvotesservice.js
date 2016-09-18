'use strict';

/* Services */

var submitvotesService = angular.module('submitvotesService', ['ngResource']);

submitvotesService.factory('GetVotesForSubmit', ['$resource',
  function($resource){

    return $resource('http://localhost:8081/getvotesforsubmit');

  }]);
  submitvotesService.factory('SumitVotes', ['$resource',
    function($resource){

      return $resource('http://localhost:8081/submitvotes');

    }]);
