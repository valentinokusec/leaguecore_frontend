

var phonecatControllers = angular.module('leadtoolAuthControllers', []);
phonecatControllers.controller('LoginCtrl', ['$scope','$routeParams','$location', '$http','$rootScope','$cookies','Facebook','GAuth', 'GData','SignIn','SignUp',
  function($scope,$location,$routeParams, $http,$rootScope,$cookies,Facebook, GAuth, GData,SignIn,SignUp) {

        $("#content").removeClass("content_main");
    console.log($cookies.get("isLoggedIn"));
    $('.login-input').on('focus', function() {
      $('.login').addClass('focused');
    });

    $scope.login=function(){

      if ($scope.signin.username!=null && $scope.signin.password !=null) {

        var json_data={data:{username:$scope.signin.username,password:$scope.signin.password}};
        SignIn.query(json_data,function(data) {

        });
      }
    }
      $scope.signup=function(){

          if ($scope.signup.username!=null && $scope.signup.password !=null) {

            var json_data={data:{username:$scope.signup.username,password:$scope.signup.password,summonername:$scope.signup.summonername}};
            SignUp.query(json_data,function(data) {

            });
          }

  }

    }]);
