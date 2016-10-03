

var landingControllers = angular.module('landingControllers', []);
landingControllers.controller('LandingCtrl', ['$scope','$location', '$http','$rootScope','$cookies' ,'CheckName',
  function($scope,$location, $http,$rootScope,$cookies,CheckName) {

var snackbarContainer;
       setTimeout(function()
                { 
  snackbarContainer = document.querySelector('#demo-snackbar-example');
  },501);
var scroll_con=0;
$scope.pagi1=0;
$("#"+$scope.pagi1).addClass("active");
$(window).bind('mousewheel DOMMouseScroll', function(event){
  
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        if (scroll_con==0) {
          
            $(".content1").animate({"margin-top": '-=20%',"opacity":"0"});
              scroll_con=1;
              setTimeout(function()
                { 
                    
                     $("#"+$scope.pagi1).removeClass("active");
                     if (0== $scope.pagi1) {

                     $scope.pagi1=2;
                     }
                      else
                      {
                        $scope.pagi1--;
                      }
                      $("#"+$scope.pagi1).addClass("active");
                      $scope.$apply();
                   console.log($scope.pagi1);
                    $(".content1").css({"margin-top": "30%","opacity":"1"});
                 
                    $(".content1").animate({"margin-top": '-=20%'});
                     scroll_con=0;

                },501);
        }
    }
    else {
               if (scroll_con==0) {
          
            $(".content1").animate({"margin-top": '+=20%',"opacity":"0"});
              scroll_con=1;
              setTimeout(function()
                { 
                    
                     $("#"+$scope.pagi1).removeClass("active");
                     if (2== $scope.pagi1) {

                     $scope.pagi1=0;
                     }
                      else
                      {
                        $scope.pagi1++;
                      }
                      $("#"+$scope.pagi1).addClass("active");
                      $scope.$apply();
                   console.log($scope.pagi1);
                    $(".content1").css({"margin-top": "10%","opacity":"1"});
                 
                    $(".content1").animate({"margin-top": '+=2%'});
                     scroll_con=0;

                },501);
        }
    }
  
});

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
    		
		$scope.toggle=function() {
          $(".content1").css({"margin-top": "20%","opacity":"0"});
         
             setTimeout(function()
                { 
                    
                  $(".content1").animate({"margin-top": '-=10%',"opacity":"1"});

                },501);
        if (  $("#container").attr('class')!="container--open") {
          console.log(container);

           $("#container").addClass("container--open");
	         $(".trigger").animate({"top": '44 %'},900);

           $(".input_index").addClass("input_line_move");
           $(".toggle_main_line").addClass("match_line_move");
           $(".toggle_main").addClass("logo_line_move");
				
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



		// reset scrolling position



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
 
  
    $("#content").removeClass("content_main");
    $("#content").addClass("content_index");
    $scope.className = "overlay";
    $scope.closePicker=function() {

        document.getElementById("overlay").className = "overlay";
    }
    $scope.showProgress=function() {

  var json_data={name:$("#sample3").val()};
   console.log($("#sample3").val());
    CheckName.query(json_data,function(data) {
          
           if (data[0]=="ok") {
             $("#content").addClass("content_main");
             $("#content").removeClass("content_index");
             $cookies.put("search",$("#sample3").val());
             $rootScope.profile_name=$("#sample3").val();
             $location.path('/match/'+  $("#sample3").val());

           }
         else
         {


          var data = {
          message: 'Summoner not found!',
          timeout: 4000,
    
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
     }


        
    });
  }
    $scope.myFunction=function() {

        $scope.className = "overlay open";

    }








    }]);
