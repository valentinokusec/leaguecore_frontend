

var landingControllers = angular.module('landingControllers', []);
landingControllers.controller('LandingCtrl', ['$scope','$location', '$http','$rootScope','$cookies' ,'$rootScope',
  function($scope,$location, $http,$rootScope,$cookies,$rootScope) {



    var support = { animations : Modernizr.cssanimations },
      container = document.getElementById( 'ip-container' ),
      header = container.querySelector( 'header.ip-header' ),
      loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
      animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
      // animation end event name
      animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

    function init() {
      var onEndInitialAnimation = function() {
        if( support.animations ) {
          this.removeEventListener( animEndEventName, onEndInitialAnimation );
        }

        startLoading();
      };

      // disable scrolling


      // initial animation
      classie.add( container, 'loading' );

      if( support.animations ) {
        container.addEventListener( animEndEventName, onEndInitialAnimation );
      }
      else {
        onEndInitialAnimation();
      }
    }

    function startLoading() {
      // simulate loading something..
      var simulationFn = function(instance) {
        var progress = 0,
          interval = setInterval( function() {
            progress = Math.min( progress + Math.random() * 0.1, 1 );

            instance.setProgress( progress );

            // reached the end
            if( progress === 1 ) {

            }
          }, 80 );
      };

      loader.setProgressFn( simulationFn );
    }

    function noscroll() {
      window.scrollTo( 0, 0 );
    }
      $(".trigger").hide();
    setTimeout(function()
    {
      console.log("dsad");
        $(".trigger").fadeIn();
      $(".ip-container").removeClass("loading");
        $(".ip-container").addClass("loaded");
          $(".ip-logo").fadeOut();
    classie.remove( container, 'loading' );
  //  classie.add( container, 'loaded' );
    clearInterval( interval );

    var onEndHeaderAnimation = function(ev) {
      if( support.animations ) {
        if( ev.target !== header ) return;
        this.removeEventListener( animEndEventName, onEndHeaderAnimation );
      }
      console.log("dsad");
      classie.add( document.body, 'layout-switch' );
      window.removeEventListener( 'scroll', noscroll );
    };

    if( support.animations ) {
      header.addEventListener( animEndEventName, onEndHeaderAnimation );
    }
    else {
      onEndHeaderAnimation();
    }
  },4000
);
    init();
    var container = document.getElementById( 'container' );

		var	trigger = container.querySelector( 'button.trigger' );
    		window.addEventListener( 'scroll', noscroll );
		$scope.toggle=function() {

        if (  $("#container").attr('class')!="container--open") {
          console.log(container);

           $("#container").addClass("container--open");
	         $(".trigger").animate({"top": '50%'},900);

           $(".input_index").addClass("input_line_move");
           $(".toggle_main_line").addClass("match_line_move");
           $(".toggle_main").addClass("logo_line_move");
				window.addEventListener( 'scroll', noscroll );
        }
        else {
          $("#container").removeClass("container--open");



           $(".toggle_main_line").removeClass("match_line_move");
              $(".input_index").removeClass("input_line_move");
           $(".toggle_main_line").removeClass("match_line_move");
           $(".toggle_main").removeClass("logo_line_move");
    //   window.removeEventListener( 'scroll', noscroll );
        }
				// classie.add( container, 'container--open' );
				// classie.add( trigger, 'trigger--active' );
				// window.removeEventListener( 'scroll', noscroll );

		}

		function noscroll() {
			window.scrollTo( 0, 0 );
		}

		// reset scrolling position
		document.body.scrollTop = document.documentElement.scrollTop = 0;

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );


    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#top-image").mousemove(function(e){
              var pageX = e.pageX - ($(window).width() / 2);
              var pageY = e.pageY - ($(window).height() / 2);
              var newvalueX = width * pageX * -1 - 25;
              var newvalueY = height * pageY * -1 - 50;
              $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
      var snackbarContainer = document.querySelector('#demo-snackbar-example');
      var showSnackbarButton = document.querySelector('#demo-show-snackbar');
      var handler = function(event) {
        showSnackbarButton.style.backgroundColor = '';
      };
    $("#content").removeClass("content_main");
    $("#content").addClass("content_index");
    $scope.className = "overlay";
    $scope.closePicker=function() {

        document.getElementById("overlay").className = "overlay";
    }
    $scope.showProgress=function() {


        $http({
          method: 'GET',
          url: 'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+$("#sample3").val()+'?api_key=172d9054-b070-449d-bb68-cbbe94f29e7c'
        }).then(function successCallback(response) {
           console.log(response);
           $("#content").addClass("content_main");
        $("#content").removeClass("content_index");
             $location.path('/match/'+  $("#sample3").val());
          }, function errorCallback(response) {

               var data = {
          message: 'Summoner not found!',
          timeout: 4000,
          actionHandler: handler,
          actionText: 'Ok'
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
          });


        document.getElementById("p2").style.visibility = "visible";
    }
    $scope.myFunction=function() {

        $scope.className = "overlay open";

    }


      showSnackbarButton.addEventListener('click', function() {
        'use strict';


     });





    }]);
