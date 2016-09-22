
var submitvotesControllers = angular.module('submitvotesControllers', []);
submitvotesControllers.controller('SubmitVotesCtrl', ['$scope','$routeParams','$location', '$http','$rootScope','$cookies','GetVotesForSubmit','SumitVotes',
  function($scope,$routeParams,$location, $http,$rootScope,$cookies,GetVotesForSubmit,SumitVotes) {


    var first_time = $cookies.get('first_time');

    $(".dialog_submit").hide();
    $(".loader").hide();
    $(".dialog_match").hide();
    $(".ele").addClass("anim");
    setTimeout(
          function()
          {
            $(".loader").fadeIn();
          }, 1000);

    $scope.pagination=0;
    $scope.summoner=$routeParams.summoner;
    $scope.json_array_data=[];
    $scope.id_data={data: []};
      $scope.votes_number=0;
    $scope.ok_message=false;
    $scope.votes_submited=false;
    var match_id;

    $scope.loading_data=true;

    var counter=0;
    $scope.view=function(){

      $("#view").slideToggle("fast");


    }
    $scope.next=function(){

      $("#"+$scope.pagination).removeClass("active");
      if (3== $scope.pagination) {

        $scope.pagination=0;
      }
      else
      {
        $scope.pagination++;
      }
      console.log( $scope.pagination);
       $("#"+$scope.pagination).addClass("active");
      $("#message_vote").animate({"margin-left": '+=20%',"opacity":"0"});

       setTimeout(function()
                {
                    $("#message_vote").css({"margin-left": "30%","opacity":"1"});

                    $("#message_vote").animate({"margin-left": '+=12%'});

                },501);

    }
    $scope.prev=function(){

      $("#"+$scope.pagination).removeClass("active");
      if (0== $scope.pagination) {

        $scope.pagination=3;
      }
      else
      {
        $scope.pagination--;
      }
      console.log( $scope.pagination);
       $("#"+$scope.pagination).addClass("active");
          $("#message_vote").animate({"margin-left": '-=20%',"opacity":"0"});

       setTimeout(function()
                {
                  $("#message_vote").css({"margin-left": "55%","opacity":"1"})
                    $("#message_vote").fadeIn("50");
                    $("#message_vote").animate({"margin-left": '-=12%'});

                },801);




    }
    $scope.submitVotes=function()
      {
          console.log($scope.id_data);
            var json_data=$scope.id_data;
            SumitVotes.query(json_data,function(data) {
               console.log(data);
                if (data[0]=="ok") {
                   $(".remove").fadeOut();
                    $("#match").fadeOut();
                    $scope.ok_message=true;
                    $("#submit_votes").fadeOut();
                      $scope.votes_submited=true;
                }
            });
      }
    $scope.vote_data=function(target)
      {
       $("#"+target).animate({"opacity":"0"});
       $("#"+target).css("background-color","#374d5a");
       $("#"+$scope.pagination).addClass("activate");
        setTimeout(function()
                {
                   $("#"+target).animate({"opacity":"1"});
                   $("#"+target).attr('disabled', 'disabled');
                   $("#"+target).fadeIn("50");
                },801);
            console.log(target);
            $scope.id_data.data.push(target);
            $scope.id_data.data.push(target);
      }
      $scope.last_table;

    $scope.votes;

      $(".animate_el").css('opacity',"0");
    var json_data={name:$scope.summoner};
    setTimeout(
          function()
          {
    GetVotesForSubmit.query(json_data,function(data) {
        $(".animate_el").animate({'opacity':"1"});
        $(".animate_el").animate({'bottom':"100px"});
        $('.ele').hide();
        $('.loader').hide();
        $('#p2').css("visibility","hidden");
        $("#0").addClass("active");
        $scope.loading_data=false;
        $scope.votes=data[$scope.pagination];
        $scope.votes_number=data.length;
        console.log($scope.votes);
        var left;
            for (var i = 0; i<4; i++) {
              console.log($('.pagi').offset().left);
               left =$('.pagi').offset().left-23;
              console.log(left);
              $('.pagi').css('left',left);
            }
            setTimeout(
                  function()
                  {

            if (first_time==null) {
                  console.log(first_time);
                  {

                    $(".overlay_black").fadeIn();
                    $(".dialog_submit").show();

                    $(".dialog_submit").addClass("anim_resize");
                  }
            }
              }, 1000);
    });},1000);
    $scope.closeDialog=function()
      {
        $(".overlay_black").fadeOut();
        $(".dialog_submit").fadeOut();
          $(".dialog_submit").removeClass("anim_resize");
      }
    }]);
