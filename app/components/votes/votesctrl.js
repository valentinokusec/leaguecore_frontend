
var votesControllers = angular.module('votesControllers', []);
votesControllers.controller('VotesCtrl', ['$scope','$routeParams','$location', '$http','$rootScope','$cookies','GetVotes','GetLastVotes','GetVotesById',
  function($scope,$routeParams,$location, $http,$rootScope,$cookies,GetVotes,GetLastVotes,GetVotesById) {

      $scope.summoner=$routeParams.summoner;
      $scope.loading_data=true;
      var pagin=0;
       $('#decrease_pagination').hide();
      $scope.votes;
      $scope.pagination=1;
      $scope.game_mode;
      $scope.no_game=false;
      $scope.stats;
      $scope.messages;
      $scope.profile_name;
      $scope.show_recent_votes=true;
      $scope.loading_votes=true
      $scope.league;
      $scope.skip=0;
      $scope.pagination_number=1;
      var json_data={data:{name:$scope.summoner,pagination:$scope.pagination}};
      GetVotes.query(json_data,function(data) {
          console.log(data);
          $scope.votes=data;
              var matchid;
              setTimeout(function(){     
             for (var i = 0; i < data.length; i++) {

              matchid=data[i].match_id;
              console.log(matchid);
            $("#"+ data[i].match_id).hover(function () {
               
                $("#"+ this.id +"_stats").slideToggle("fast");
              });
                }
                }, 1000);
            
         
         pagin=$scope.votes.length/5;
         if ( $scope.pagination_number>pagin-1) {
           setTimeout(function(){     
            $('#increase_pagination').fadeOut();
            console.log(pagin);
            }, 1000);
         }
          $scope.loading_data=false;
          var json_data={data:{name:$scope.summoner,match_id:data[0].match_id}};
          // GetLastVotes.query(json_data,function(data) {
          //   console.log(data);
          //     $scope.messages=data[0][0];
          //     $scope.stats=data[2][0];
          //     $scope.loading_votes=false;
          // });
            // $(document).ready(function() {
            //   $("#champ-panel").hide();
            // });

      });
      $scope.votesById=function(target)
        {
          $('#p2').css("visibility","visible");
          $scope.loading_votes=true;
            var json_data={data:{name:$scope.summoner,match_id:target}};
            GetVotesById.query(json_data,function(data) {
              $scope.show_recent_votes=false;
                  $('#p2').css("visibility","hidden");
                $scope.messages=data[0][0];
                $scope.stats=data[2][0];
                console.log($scope.stats);
                $scope.loading_votes=false;
            });
        }
        $scope.increase_pagination=function()
             {
                 console.log(pagin);
                 if ( $scope.pagination_number>pagin-1) {
                     console.log(pagin);
                    $('#increase_pagination').fadeOut()
                 }
                 $scope.skip+=5;
                  $scope.pagination_number++;
                    $('#decrease_pagination').fadeIn()
             }
           $scope.decrease_pagination=function()
             {
               $('#increase_pagination').fadeIn()
               $scope.skip-=5;
               $scope.pagination_number--;
               if ($scope.pagination_number==1) {
                 $('#decrease_pagination').fadeOut();
               }


             }
    }]);
