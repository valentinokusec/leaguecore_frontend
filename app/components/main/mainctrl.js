
var mainControllers = angular.module('mainControllers', []);
mainControllers.controller('MainCtrl', ['$scope','$routeParams','$location', '$http','$rootScope','$cookies','GetGeneralData','GetChampionHistory','GetGeneralHistory','$cookies','GetMatch','GetRecentHistory',
  function($scope,$routeParams,$location, $http,$rootScope,$cookies,GetGeneralData,GetChampionHistory,GetGeneralHistory,$cookies,GetMatch,GetRecentHistory) {

      $scope.summoner=$routeParams.summoner;
      $scope.loading_data=true;
      $scope.show_recent_history1=true;
      $scope.loading_recent_history1=true;
      $scope.loading_history=true;
      $scope.last_table;
      $scope.last_table_match;
      $scope.history;
      $scope.champion="all";
      $scope.champion_list;
      $scope.profile_icon;
      $scope.profile_name;
      $scope.league;
      $scope.match_data;
      $scope.recent_history;
      $scope.pagination_number=1;
      $cookies.put("summoner",$scope.summoner)

      var json_data={name:$scope.summoner};
      GetGeneralData.query(json_data,function(data) {
          var json_data_match={matchid:data[0].history[0].matchid};

          $scope.history=data[0].history;
          $scope.profile_icon=data[0].profile_icon;
          $scope.profile_name=data[0].name;
          $scope.league=data[0].league;
          $scope.champion_list=data[0].champion_list;
          $scope.champion_list.splice(0,1);
          for (i = 0; i < $scope.champion_list.length; i++) {

              $("#"+$scope.champion_list[i].name+"_tr").hide();
          }
          $scope.loading_history=false;
          $scope.loading_data=false;
          $(document).ready(function() {

            for (i = 0; i < $scope.champion_list.length; i++) {

                $("#"+$scope.champion_list[i].name+"_tr").hide();
            }

          });
          var json_data={name:$scope.summoner};
          GetRecentHistory.query(json_data,function(data) {
              $scope.loading_recent_history1=false;
              $scope.recent_history=data[0];
              console.log(data);
          });
      });
        $scope.increase_pagination=function()
          {
              $scope.pagination_number++;
              $scope.getHistory($scope.pagination_number);
          }
        $scope.decrease_pagination=function()
          {
              $scope.pagination_number--;
              $scope.getHistory($scope.pagination_number);
          }
        $scope.getHistory=function(pagination)
            {
              $scope.loading_history=true;
              var json_data={data:{name:$scope.summoner,pagination:pagination,champion:$scope.champion}};
                GetGeneralHistory.query(json_data,function(data) {
                  $scope.loading_history=false;
                  console.log(data);
                    $scope.history=data;
                });
            }
      $scope.champ_detail=function(event)
        {   $scope.loading_history=true;
            $scope.pagination_number=1;
            console.log($scope.last_table);
             $("#"+$scope.last_table+"_div").fadeOut();

            setTimeout(function()
            {
              $("#"+$scope.last_table+"_element").animate({
                  height: "1"
                }, 500 );
            },500);

              if ($("#"+event+"_tr").css('height')=="21px") {
                $scope.champion=event;
                setTimeout(function()
                {
                    $scope.last_table=event;
                },501);


                var json_data={data:{name:$scope.summoner,champion:$scope.champion}};

                GetChampionHistory.query(json_data,function(data) {
                    $scope.loading_history=false;
                    $scope.history=data;


                  });
                    $("#"+event+"_element").animate({
                        height: "80px"
                      }, 500 );
                      setTimeout(
                            function()
                            {
                                $("#"+$scope.last_table+"_div").fadeIn();
                            }, 500);
              }
              else {
                        if (event==$scope.last_table) {
                          setTimeout(function()
                          {
                              $scope.last_table="none";
                          },501);
                        }
                        $scope.champion="all";
                        $scope.getHistory($scope.pagination_number);


              }
        };
        $scope.getMatch=function(event)
          {

            var json_data_match={matchid:event};
            GetMatch.query(json_data_match,function(data_match) {
              $scope.match_data=data_match;
                $scope.show_recent_history1=false;
                  console.log(data_match);
            });
          }
          $scope.close_match=function(event)
            {
              $scope.show_recent_history1=true;
            }
        $scope.champ_detail_match=function(event)
          {

              console.log($("#"+event+"_tr").css('height'));
               $("."+$scope.last_table_match+"_div").fadeOut();

              setTimeout(function()
              {
                $("#"+$scope.last_table_match+"_element").animate({
                    height: "1"
                  }, 500 );
              },500);

                if ($("#"+event+"_tr").css('height')=="1px") {

                  setTimeout(function()
                  {
                      $scope.last_table_match=event;
                  },501);

                      $("#"+event+"_element").animate({
                          height: "100px"
                        }, 500 );
                        setTimeout(
                              function()
                              {
                                  $("."+event+"_div").fadeIn();
                              }, 500);
                }
                else {
                          if (event==$scope.last_table_match) {
                            setTimeout(function()
                            {
                                $scope.last_table_match="none";
                            },501);
                          }



                }
          };
    }]);
