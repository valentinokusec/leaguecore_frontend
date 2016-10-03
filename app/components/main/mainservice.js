'use strict';

/* Services */

var mainServices = angular.module('mainServices', ['ngResource']);

mainServices.factory('GetGeneralData', ['$resource',
  function($resource){

    return $resource('http://138.68.95.108:8081/getgeneraldata');

  }]);
  mainServices.factory('GetRandomMessage', ['$resource',
    function($resource){

      return $resource('http://138.68.95.108:8081/getrandommessage');

    }]);
  mainServices.factory('GetChampionHistory', ['$resource',
    function($resource){

      return $resource('http://138.68.95.108:8081/getchampionhistory');

    }]);
    mainServices.factory('GetGeneralHistory', ['$resource',
      function($resource){

        return $resource('http://138.68.95.108:8081/getgeneralhistory');

      }]);
      mainServices.factory('GetMatch', ['$resource',
        function($resource){

          return $resource('http://138.68.95.108:8081/getmatch');

        }]);
        mainServices.factory('GetRecentHistory', ['$resource',
          function($resource){

            return $resource('http://138.68.95.108:8081/getrecenthistory');

          }]);
