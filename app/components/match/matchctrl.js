
var matchControllers = angular.module('matchControllers', []);
matchControllers.controller('MatchCtrl', ['$scope','$routeParams','$location', '$http','$rootScope','$cookies','GetLastMatch','VoteData','$rootScope',
  function($scope,$routeParams,$routeParams$location, $http,$rootScope,$cookies,GetLastMatch,VoteData,$rootScope) {





    var first_time = $cookies.get('first_time');


    $(".loader").hide();
    $(".dialog_match").hide();
    $(".ele").addClass("anim");
    setTimeout(
          function()
          {
            $(".loader").fadeIn();
          }, 1000);
      $scope.summoner=$routeParams.summoner;
      $scope.json_array_data=[];
      $scope.id_data=[];
      $rootScope.profile_name=$scope.summoner;
      $scope.ok_message=false;
      $scope.votes_submited=false;
      var match_id;
      $("#submit_votes").hide();
      $("#player_1").find("textarea").hide();
      $("#player_2").find("textarea").hide();
      $("#player_3").find("textarea").hide();
      $("#player_4").find("textarea").hide();
      $("#player_5").find("textarea").hide();
      $("#player_6").find("textarea").hide();
      $("#player_7").find("textarea").hide();
      $("#player_8").find("textarea").hide();
      $("#player_9").find("textarea").hide();
      $("#player_10").find("textarea").hide();
      $("#match").css('opacity',"0");
      $("#team_1_player_1").hover(function () {

         $("#stats_match_1").slideToggle("fast");
       });
        $("#team_1_player_2").hover(function () {

         $("#stats_match_2").slideToggle("fast");
       });
          $("#team_1_player_3").hover(function () {

         $("#stats_match_3").slideToggle("fast");
       });
            $("#team_1_player_4").hover(function () {

         $("#stats_match_4").slideToggle("fast");
       });
              $("#team_1_player_5").hover(function () {

         $("#stats_match_5").slideToggle("fast");
       });
                $("#team_1_player_6").hover(function () {

         $("#stats_match_6").slideToggle("fast");
       });
                  $("#team_1_player_7").hover(function () {

         $("#stats_match_7").slideToggle("fast");
       });
                    $("#team_1_player_7").hover(function () {

         $("#stats_match_8").slideToggle("fast");
       });
                      $("#team_1_player_8").hover(function () {

         $("#stats_match_1").slideToggle("fast");
       });
           $("#team_1_player_9").hover(function () {

         $("#stats_match_9").slideToggle("fast");
       });
           $("#team_1_player_10").hover(function () {

         $("#stats_match_10").slideToggle("fast");
       });
      $scope.loading_data=true;
      $('#p2').css("visibility","visible");
      var counter=0;
      $scope.submitVotes=function()
        {
              for (var i = 0; i < $scope.id_data.length; i++) {
              var json_data={name:$('#name_'+$scope.id_data[i]).text(),data:$('#textarea_'+$scope.id_data[i]).val()};
              $scope.json_array_data.push(json_data);
            }
              var json_data={data:  {votes:$scope.json_array_data,match_id:match_id,from:$scope.summoner}};
              VoteData.query(json_data,function(data) {
                  if (data[0]=="OK") {
                      $("#match").fadeOut();
                      $scope.ok_message=true;
                      $("#submit_votes").fadeOut();
                        $scope.votes_submited=true;
                        setTimeout(
                              function()
                              {

                        if (first_time==null) {
                              console.log(first_time);
                              {
                                $(".img_text").attr('src',"static/message_screen.png");
                                $(".overlay_black").fadeIn();
                                $(".dialog_match").show();
                                $(".h2_text").text("Thank you again, you can view your messagese by clicking on the Messages panel!");
                                $(".dialog_match").addClass("anim_resize");
                              }
                        }
                          }, 1000);
                  }
              });
        }
        $scope.closeDialog=function()
          {
            $(".overlay_black").fadeOut();
            $(".dialog_match").fadeOut();
              $(".dialog_match").removeClass("anim_resize");
          }
      $scope.vote=function(target)
        {

          setTimeout(
                function()
                {

          if (first_time==null) {
                console.log(first_time);
                {

                  $(".overlay_black").fadeIn();
                  $(".dialog_match").show();
                  $(".h2_text").text("Say something nice! (Any inappropriate message will be render uselss due the system.)");
                  $(".dialog_match").addClass("anim_resize");
                }
          }
            }, 1000);


              $scope.id_data.push(target);

              if ($("#player_"+target).css('height')=="1px") {
                counter++;

                  $("#heart_"+target)
                  .css("color","#ff4081");
                    $("#player_"+target).animate({
                        height: "50px"
                      }, 500 );
                      setTimeout(
                            function()
                            {
                              $("#player_"+target).find("textarea").fadeIn();
                            }, 500);

              }
              else {

                console.log($("#player_"+target).css('height'));
                counter--;
                $("#heart_"+target)
                .css("color","black");
                $("#player_"+target).find("textarea").fadeOut();

                  setTimeout(
                        function()
                        {
                          $("#player_"+target).animate({
                              height: "0px"
                            }, 500 );
                        }, 500);
              }
              if (counter!=0) {
                $("#submit_votes").fadeIn();
              }
              else {
                $("#submit_votes").fadeOut();
              }
        }
      $scope.loading_data=true;
      $scope.champ_1;
      $scope.champ_2;
      $scope.champ_3;
      $scope.champ_4;
      $scope.champ_5;
      $scope.champ_6;
      $scope.champ_7;
      $scope.champ_8;
      $scope.champ_9;
      $scope.champ_10;
      var json_data={name:$scope.summoner};
      setTimeout(
            function()
            {


      GetLastMatch.query(json_data,function(data) {
          $(".animate_el").addClass("anim_resize");
          $('#p2').css("visibility","hidden");
          $('.ele').hide();
          $('.loader').hide();
          $("#match").animate({'opacity':"1"});
          $scope.loading_data=false;
          console.log(data);
          $scope.champ_1=data[0];
          $scope.champ_2=data[1];
          $scope.champ_3=data[2];
          $scope.champ_4=data[3];
          $scope.champ_5=data[4];
          $scope.champ_6=data[5];
          $scope.champ_7=data[6];
          $scope.champ_8=data[7];
          $scope.champ_9=data[8];
          $scope.champ_10=data[9];
          match_id=data[10].match_id;
          setTimeout(
                function()
                {

          if (first_time==null) {
                console.log(first_time);
                {

                  $(".overlay_black").fadeIn();
                  $(".dialog_match").show();
                    $(".dialog_match").addClass("anim_resize");
                }
          }
            }, 1000);
      });
    }, 1000);

    }]);
