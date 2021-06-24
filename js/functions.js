$(document).ready(function(){
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
          $("h1").typed({
            strings: ["Únete a la evolución", "Haz staking con GranADA"],
            typeSpeed: 10
          });
        }else{
          $("h1").typed({
            strings: ["Join the revolution", "Stake with GranADA"],
            typeSpeed: 10
          });
        }
    });
	$(".hamburger-wrapper").click(function(){
	$(".menu").toggleClass("show-menu");
	$(".hamburger-wrapper").toggleClass('open');
	});
	$(".nav-item").click(function(){
    $(".menu").toggleClass("show-menu");
    $(".hamburger-wrapper").toggleClass('open');
	});
});
