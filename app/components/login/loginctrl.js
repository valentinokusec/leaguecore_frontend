

var phonecatControllers = angular.module('leadtoolAuthControllers', []);
phonecatControllers.controller('LoginCtrl', ['$scope','$location','$routeParams', '$http','$rootScope','$cookies','SignIn','SignUp','CheckName','$rootScope',
  function($scope,$location,$routeParams, $http,$rootScope,$cookies,SignIn,SignUp,CheckName,$rootScope) {




    $(".dialog_login").hide();
    $("#content").removeClass("content_main");
    console.log($cookies.get("isLoggedIn"));
    $('.login-input').on('focus', function() {
    $('.login').addClass('focused');
    });

    $scope.login=function(){
     var  snackbarContainer = document.querySelector('#demo-snackbar-example');
      if ($scope.signin.username!=null && $scope.signin.password !=null) {

        var json_data={data:{username:$scope.signin.username,password:$scope.signin.password}};
        SignIn.query(json_data,function(data) {
          console.log(data);
          if (data[0]=="wrong_data") {
                $(".dialog_login").fadeIn();

          }
          else
          {
             $cookies.put('logged_in', data[0].summoner);
        $("#content").addClass("content_main");
        $("#content").removeClass("content_index");
         $rootScope.log="Logout";
         $rootScope.profile_name=data[0].summoner;
                   $cookies.put("search",data[0].summoner);
             $location.path( "/leadboard/"+ data[0].summoner);
          }
              
        }
        , function(error) {
    
      

   });
      }
    }
      $scope.signup=function(){
         var json_data={name:$scope.signup.summonername};
           CheckName.query(json_data,function(data) {
            console.log(data);
           if (data[0]=="ok") {
          if ($scope.signup.username!=null && $scope.signup.password !=null) {

            var json_data={data:{username:$scope.signup.username,password:$scope.signup.password,summonername:$scope.signup.summonername}};
            SignUp.query(json_data,function(data) {
              console.log(data);
              if (data[0]=="user_exist") {
                $(".h2_text").text("User Exists");
                $(".dialog_login").fadeIn();
              }
              else

              {  
                  $rootScope.profile_name=$scope.signup.summonername;
                   $cookies.put("search",$scope.signup.summonername);
                 $cookies.put('logged_in', $scope.signup.summonername);
                 $("#content").addClass("content_main");
                 $("#content").removeClass("content_index");
                  $rootScope.log="Logout";
                 $location.path( "/match/"+ $scope.signup.summonername);}
            });
          }
}
else
{    $(".h2_text").text("No summoner found");
    $(".dialog_login").fadeIn();
}
  });
}
 $scope.closeDialog=function()
      {
        
        $(".dialog_login").fadeOut();
         
      
      }
    }]);

