$(document).ready(function(){

  var $win = $(window);
  var menuWidth = $win.width() <= 800 ? "60%" : "20%";

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  $(function(){
        var url = window.location.href; 
        if(url.endsWith("es/")){
          animateLogo("Únete a la evolución", "Únete a ");
        }else{
          animateLogo("Join the revolution", "Stake with ");
        }
  });

  $win.scroll(function () {
    if ($win.scrollTop() == 0){
      $(".tothetop").animate({
        opacity: 0
      }, 10, function(){});
    }else{
      $(".tothetop").animate({
        opacity: 1
      }, 10, function(){});
    }
});

  $("#copyId").click(function(){
    var poolId = "7a4c1ee9d663dd8d3b1bedf13155cc624c5dfa95f432c30d198cd3c6";
    navigator.clipboard.writeText(poolId);
    $("#copyId").css("color","rgba(211,15,239, 0.9)");
  });

	$(".hamburger-wrapper").click(function(){

    if($(this).hasClass("open")){
      $("nav").fadeOut(200, function(){
        $(".show-menu").animate({
          width: "0"
        }, 100, function(){
          setTimeout(function() {
            $(".menu").toggleClass("show-menu");
          },500);
        });
      });
    }else{
      $(".menu").toggleClass("show-menu");
      $(".show-menu").animate({
        width: menuWidth
      }, 100, function(){
        setTimeout(function() {
          $("nav").fadeIn(200, function(){});
        },500);
      });
    }

	  $(".hamburger-wrapper").toggleClass('open');
	});

	$(".nav-item").click(function(){
    $(".show-menu").animate({
      width: "0%"
    }, 100);
    $(".menu").toggleClass("show-menu");
    $(".hamburger-wrapper").toggleClass('open');
	});

  function animateLogo(string1, string2){

    if($(window).width() <= 800){
      $(".logo").animate({
        opacity: 0
      }, 500, function(){
        $(this).animate({opacity: 1}, 500, function(){
          $(this).animate({"background-position-y": "30%"}, 500, function(){
            animateTitle(string1, string2);
          });
        });
      });
    }else{
      $(".logo").animate({
        opacity: 0
      }, 500, function(){
        $(this).animate({opacity: 1}, 500, function(){
          $(this).animate({"background-position-x": $win.width() <= 1500 ? "15%" : "20%"}, 500, function(){
            animateTitle(string1, string2);
          });
        });
      });
    }
  }

  function animateTitle(string1, string2){
    $("#title1").text(string1);
    $("h1").fadeIn(1000, function() {
      setTimeout(function() {
        $("h1").fadeOut(1000, function() {
          $("#title1").text(string2);
          $("#title2").text("Gran");
          $("#title2").css("color","rgba(211,15,239, 1)");
          $("#title3").text("ADA");
        });
        $("h1").fadeIn(1000, function() {});
      }, 1000);
    });
  }
});
