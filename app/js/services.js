'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('DirectoryFromPolygon', ['$resource',
  function($resource){

//  return $resource('http://localhost:8080/getstreetlistfrompoly');
  return $resource('http://212.92.222.96:8090/getstreetlistfrompoly');


  }]);
  phonecatServices.factory('PointsForPolygon', ['$resource',
    function($resource){

  //  return $resource('http://localhost:8080/getsubjectsfrompoly');
    return $resource('http://212.92.222.96:8090/getsubjectsfrompoly');

    }]);
  phonecatServices.factory('PointsCoor', ['$resource',
    function($resource){

  //  return $resource('http://localhost:8080/getpoints');
return $resource('http://212.92.222.96:8090/getpoints');


    }]);
phonecatServices.factory('DirectoryFromCircle', ['$resource',
    function($resource){

  //  return $resource('http://localhost:8080/getstreetlistfromcircle');
return $resource('http://212.92.222.96:8090/getstreetlistfromcircle');

    }]);
    phonecatServices.factory('PointsForCircle', ['$resource',
        function($resource){

      //  return $resource('http://localhost:8080/getsubjectsfromcircle');
return $resource('http://212.92.222.96:8090/getsubjectsfromcircle');

        }]);
    phonecatServices.service('GetSubjects', [
        function(){

          this.subjects = [];



        }]);
