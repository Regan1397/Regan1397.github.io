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