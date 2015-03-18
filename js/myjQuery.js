$(document).ready(function() {





$("ul > li ").hover(function(){
    $(this).animate({ color: "#FF0000" }, 400); },function() {
      $(this).animate({ color: "#ffffff" }, 400);
 });



$(".logo01").hover(function(){
	
    $(this).fadeTo("slow", 1);
 }, function(){
    $(this).fadeTo("slow", 0.5);
});


$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
		$('.page-up-button').fadeIn();	
	} else {
		$('.page-up-button').fadeOut()
	}
});

$('.page-up-button').click(function(){
	$('html, body').animate({scrollTop:0},800);
	return false;
});

$(".move-me").draggable();

$('.image-02').click(function() {
    $(".image-02").fadeTo(1500, 0,function () {
    	$(".image-02").hide();
	    	$(".text-01").fadeTo(1500, 0,function () {
	    	$(".text-01").hide();
			});
		$(".image-03").fadeTo(1500, 1);	
		$(".text-02").fadeTo(1500, 1);
	});
});




});
// $("ul > li ").hover(function(){
// 	$(this).removeClass("navOp01");
//       $(this).animate({ color: "#FF0000" }, 100);
//     },function() {
//       $(this).animate({ color: "#000000" }, 400);
//       $(this).addClass("navOp01");
//     });

// $("ul > li").click(function() {
// 	$(this).removeClass("navOp01");
// 	$(this).css("color", "#FF0000");
// 	$(".navOp01").animate({ opacity: "0.3" }, 1000).delay(1000, function(){
//  	    window.location.href = 'index.html';
//         					});
// 	// function(){$(".navOp01").hide(); });

// });