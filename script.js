$(document.ready(function() {

$(window).bind('scroll',function(e){
parallaxScroll();
});

function parallaxScroll () {
var scrolledY = $(window).scrollTop();
  $('.para01').css('left',(scrolledY*0.8)+"1px"));

}

});