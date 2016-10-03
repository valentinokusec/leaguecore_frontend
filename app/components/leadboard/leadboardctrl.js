
var leadboardControllers = angular.module('leadboardControllers', []);
leadboardControllers.controller('LeadBoardCtrl', ['$scope','$routeParams','$location', '$http','$rootScope','$cookies','GetVotesFromLeadbard','GetVotesForSummoner','$rootScope',
  function($scope,$routeParams,$location, $http,$rootScope,$cookies,GetVotesFromLeadbard,GetVotesForSummoner,$rootScope) {

     var logged = $cookies.get('logged_in');
     if (logged==null) {
        $rootScope.log="Login";
     }
     else
     {
       $rootScope.log="Logout";
     }
    $scope.summoner=$routeParams.summoner;
    $("#search_result").hide();
    $scope.loading_data=true;
    $scope.show_search=false;
    $scope.show_search_result=true;
    $scope.data;
    $scope.summoner_data;
    $scope.pagination_number=1;
    $scope.skip=0;
    var pagin=0;
    $('#decrease_pagination').css("display","none");
    var json_data={pagination:1};
    GetVotesFromLeadbard.query(json_data,function(data) {
        
        $scope.data=data;
       pagin=$scope.data.length/8;
      var json_data={name:$scope.summoner};

      for (var i = 0; i < $scope.data.length; i++) {
        console.log($scope.data[i].name); 
        if ($scope.data[i].name==$scope.summoner) {
           
           $scope.summoner_data=$scope.data[i];

            $("#search_result").fadeIn();
        }
      }
        $scope.loading_data=false;
    });
    $scope.getVotes=function()
    {

      var json_data={name:$('#search').val()};
      for (var i = 0; i < $scope.data.length; i++) {
          console.log($('#search').val());
        if ($scope.data[i].name==$('#search').val()) {

           $scope.summoner_data=$scope.data[i];

            $("#search_result").fadeIn();
        }
      }
      // GetVotesForSummoner.query(json_data,function(data) {
      //     console.log(data);
      //     $("#search_result").fadeIn();
      //     $scope.summoner_data=data[0];
      //     $scope.loading_data=false;
      // });
    }

     $scope.increase_pagination=function()
          {
              console.log(pagin);
              if ( $scope.pagination_number>pagin-1) {
                  console.log(pagin);
                 $('#increase_pagination').fadeOut()
              }
              $scope.skip+=8;
               $scope.pagination_number++;
                 $('#decrease_pagination').fadeIn()
          }
        $scope.decrease_pagination=function()
          {
            $('#increase_pagination').fadeIn()
            $scope.skip-=8;
            $scope.pagination_number--;
            if ($scope.pagination_number==1) {
              $('#decrease_pagination').fadeOut();
            }


          }
    }]);
