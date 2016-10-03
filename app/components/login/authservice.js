var authservice = angular.module('authservice', ['ngResource']);


authservice.factory('SignUp', ['$resource',
  function($resource){

    return $resource('http://localhost:8081/signup');

  }]);
  authservice.factory('SignIn', ['$resource',
    function($resource){

      return $resource('http://localhost:8081/signin');

    }]);
 authservice.factory('CheckName', ['$resource',
    function($resource){

      return $resource('http://localhost:8081/checkname');

    }]);