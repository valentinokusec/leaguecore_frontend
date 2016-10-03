
var livestatsControllers = angular.module('livestatsControllers', []);
livestatsControllers.controller('LiveStatsCtrl', ['$scope','$routeParams','$location', '$http','$rootScope','$cookies','GetLiveStats',
  function($scope,$routeParams,$location, $http,$rootScope,$cookies,GetLiveStats) {




    $(".loader").hide();
    $(".dialog_match").hide();
    $(".ele").addClass("anim");
    $("#match").css('opacity',"0");
    $(".right_stats").css('opacity',"0");
    setTimeout(
          function()
          {
            $(".loader").fadeIn();
          }, 1000);


      $scope.summoner=$routeParams.summoner;
      $scope.loading_data=true;
      $scope.history;
      $scope.facts=[];
      $scope.live_stats;
      $scope.game_mode;
      $scope.no_game=false;
      $scope.game=false;
      $scope.profile_name;
      $scope.league;
      $scope.featured_list;
      var json_data={name:$scope.summoner};

       var get_data=function(json)
    {

        setTimeout(
          function()
          {
      GetLiveStats.query(json_data,function(data) {
        $(".animate_el").addClass("anim_resize");
          $(".right_stats").addClass("anim_resize");
          $('.ele').hide();
          $('.loader').hide();
          $("#match").animate({'opacity':"1"});
          $(".right_stats").animate({'opacity':"1"});
          $scope.game=true;
          if (data[0]=="game") {
            $scope.game=false;
            $scope.no_game=true;
             $scope.featured_list=data;
          }
          $scope.live_stats=data[0].players;
          $scope.game_mode=data[0].game_mode;
          console.log(data);
          $scope.loading_data=false;
          var fact={'fact':"Highest kda:",'value':'toysoldier'};
          $scope.facts.push(fact);
           fact={'fact':"Highest kda:",'value':'toysoldier'};
          $scope.facts.push(fact);
          console.log($scope.facts);
            // $(document).ready(function() {
            //   $("#champ-panel").hide();
            // });

      }, function(error) {

   get_data(json_data);

   });

        }, 1000);
}
   get_data(json_data);
      // $scope.toggle_live=function(target)
      //   {
      //     if (target=="main-panel") {
      //         $(".champ-panel").hide();
      //         $(".main-panel").show();
      //     }
      //     else {
      //       $(".main-panel").hide();
      //       $(".champ-panel").show();
      //     }
      //
      //   }
    }]);
