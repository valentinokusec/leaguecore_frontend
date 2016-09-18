'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'leadtoolAuthControllers',
  'landingControllers',
  'mainControllers',
  'votesService',
  'livestatsControllers',
  'leadboardControllers',
  'matchControllers',
  'submitvotesControllers',
  'votesControllers',
  'phonecatFilters',
  'phonecatServices',
  'leadboardService',
  'livestatsServices',
  'mainServices',
  'submitvotesService',
  'matchServices',
  'authservice',
  'notificationModule',
  'ui.bootstrap',
  'ngCookies',
  'facebook',
  'duScroll',
   'angular-google-gapi',
   "chart.js",
]);

app.config(['$routeProvider','FacebookProvider','ChartJsProvider',
  function($routeProvider,FacebookProvider,ChartJsProvider  ) {


     FacebookProvider.init('295542314138182');


    $routeProvider.
      when('/livestats/:summoner', {
        templateUrl: 'components/live_stats/live_stats.html',
        controller: 'LiveStatsCtrl',
      }).
      when('/index', {
        templateUrl: 'components/index/landing0.html',
        controller: 'LandingCtrl',
      }).
      when('/login', {
        templateUrl: 'components/login/login.html',
        controller: 'LoginCtrl'
      }).
      when('/votes/:summoner', {
        templateUrl: 'components/votes/votes.html',
        controller: 'VotesCtrl'
      }).
      when('/leadboard/:summoner', {
        templateUrl: 'components/leadboard/leadboard.html',
        controller: 'LeadBoardCtrl'
      }).
      when('/main/:summoner', {
        templateUrl: 'components/main/main.html',
        controller: 'MainCtrl'
      }).
      when('/match/:summoner', {
        templateUrl: 'components/match/match.html',
        controller: 'MatchCtrl'
      }).
      when('/submitvotes/:summoner', {
        templateUrl: 'components/submit_votes/submitvotes.html',
        controller: 'SubmitVotesCtrl'
      }).
      otherwise({
        redirectTo: '/index'
      });
  }]);
  angular.module('notificationModule', [
    'ui-notification'
  ],
  function(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 4000,
      startTop: 90,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'left',
      positionY: 'top'
    });
  });
  app.run( function($rootScope, $location, $cookies, $routeParams,GAuth, GApi, GData,GetRandomMessage) {


    $rootScope.$on("$routeChangeStart", function(args){


      if ($location.path()=="/index" || $location.path()=="/login") {
      $rootScope.show_index=true;


      }
      else {
            $rootScope.show_index=false;
            $rootScope.summoner=$routeParams.summoner;
            var  s1=$location.path().substring(1, $location.path().size);
            var s2=s1.substring(s1.indexOf('/')+1, $location.path().size);
            console.log($location.path());
            $rootScope.profile_icon;
            $rootScope.profile_name;
            $rootScope.champion;
            $rootScope.loading_data=true;
            var json_data={name:s2};
              console.log(json_data);

      get_data(json_data);

      }
    })
    $rootScope.summoner=$routeParams.summoner;
    var  s1=$location.path().substring(1, $location.path().size);
    var s2=s1.substring(s1.indexOf('/')+1, $location.path().size);
    console.log($location.path());
    $rootScope.profile_icon;
    $rootScope.profile_name=s2;
    $rootScope.champion;

    $rootScope.message;
    $rootScope.stats;
    $rootScope.loading_data=true;
    var json_data={name:s2};
    var get_data=function(json)
    {

    GetRandomMessage.query(function(data) {
      $rootScope.message=data[0];
      $rootScope.stats=data[1][0];

      console.log(  $rootScope.stats);
      $("#message").fadeIn();

        // $rootScope.champion=data[0].champion_list[0];
        // $rootScope.profile_icon=data[0].profile_icon;
        // $rootScope.loading_data=false;
        // $rootScope.profile_name=data[0].name;
        // $rootScope.labels = ["winrate", "In-Store Sales"];
        // $rootScope.colours=["#FFFFFF", "#ff4081"];
        //
        // $rootScope.winrate_data = [data[0].champion_list[0].winrate*100, data[0].champion_list[0].loserate*100];
        // $rootScope.recent_winrate_data = [data[0].recent_winrate*100, data[0].recent_loserate*100];
        //
        //  $rootScope.labels1 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        //  $rootScope.series1 = ['Series A', 'Series B'];
        //  console.log(data);
        //  $rootScope.data1 = [
        //    [65, 59, 80, 81, 56, 55, 40],
        //    [28, 48, 40, 19, 86, 27, 90]
        //  ];

       } , function(error) {

setTimeout(function(){   get_data(json_data); }, 6000);

   });
  }
   $(".logo").hover(function () {
      console.log("dsa");
      $(".logo").animate({"width":"100px"});
    });
  setTimeout(function(){

    $("#message_index1").hover(function () {
      console.log("dsa");
      $("#stats_index").slideToggle("fast");
    });
      $("#profile_info").hover(function () {
      console.log("dsa");
      $("#stats_profile1").slideToggle("fast");
    }); }, 1000);

 //  window.setInterval(function(){
 //      $("#message").fadeOut();
 //      setTimeout(function(){    get_data(); }, 1000);
 //
 //
 //
 // }, 10000);
    $rootScope.show_index=false;

    $(".overlay_black").hide();
      $(".dialog_main").hide();
    $rootScope.gameDetail=function()
    {
        $(".dialog_main").fadeIn();
      $(".overlay_black").fadeIn();
    }
  if ($location.path()=="/index" || $location.path()=="/login") {
  $rootScope.show_index=true;
  }
  else {
      get_data(json_data);
  }
      $rootScope.labels = ["winrate", "In-Store Sales"];
      $rootScope.colours=["#FFFFFF", "#ff4081"];

      $rootScope.winrate_data = [0,0];
      $rootScope.recent_winrate_data = [0,0];

       $rootScope.labels1 = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
       $rootScope.series1 = ['Series A', 'Series B'];

       $rootScope.data1 = [
         [65, 59, 80, 81, 56, 55, 40],
         [28, 48, 40, 19, 86, 27, 90]
       ];


    // var CLIENT = '27371431800-8gjfgjfhs52m4et9q5pleqsvjmerjfe7.apps.googleusercontent.com';
    // var BASE = 'https://myGoogleAppEngine.appspot.com/_ah/api';
    //     GApi.load('myApiName','v1',BASE).then(function(resp) {
    //         console.log('api: ' + resp.api + ', version: ' + resp.version + ' loaded');
    //     }, function(resp) {
    //         console.log('an error occured during loading api: ' + resp.api + ', resp.version: ' + version);
    //     });
    // GApi.load('calendar', 'v3');
    //    GAuth.setClient(CLIENT);
    //    GAuth.setScope('https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly');
    //
    //
    // // register listener to watch route changes
    // $rootScope.$on( "$routeChangeStart", function(event, next, current) {
    //       console.log($location.path());

//        if ($location.path()=="/login") {
//
//          if ( $cookies.get("isLoggedIn") == "true" ) {
// console.log($cookies.get("isLoggedIn"));
//              $location.path( "/map" );
//          }
//        }
//       if ( $cookies.get("isLoggedIn") != "true" ) {
//           $location.path( "/login" );
//       }

    //});

 })
