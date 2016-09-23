
var livestatsControllers = angular.module('livestatsControllers', []);
livestatsControllers.controller('LiveStatsCtrl', ['$scope','$routeParams','$location', '$http','$rootScope','$cookies','GetLiveStats',
  function($scope,$routeParams,$location, $http,$rootScope,$cookies,GetLiveStats) {

      $scope.summoner=$routeParams.summoner;
      $scope.loading_data=true;
      $scope.history;
      $scope.live_stats;
      $scope.game_mode;
      $scope.no_game=false;
      $scope.profile_name;
      $scope.league;
      var json_data={name:$scope.summoner};
      GetLiveStats.query(json_data,function(data) {
          if (data[0]=="game") {
            $scope.no_game=true;
          }
          $scope.live_stats=data[0].players;
          $scope.game_mode=data[0].game_mode;
          console.log(data);
          $scope.loading_data=false;
            // $(document).ready(function() {
            //   $("#champ-panel").hide();
            // });

      });
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
