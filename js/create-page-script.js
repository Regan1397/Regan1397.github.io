var createPageManager = 1;

$(document).ready (function() {

$(".white-fader").fadeTo(1500, 0);

	// $(function () {
	// 	 $('#img-01').bind("tap", tapHandler);
	// 	function tapHandler (event) 
	// 	  {
	// 	  	$('#home-info-01').fadeTo(3000,0.9);
	// 	  	$('#img-01').fadeTo(3000,0.7);
	// 	  	console.log("worked");
	// 	   }
	// });




			$(function() {

		   $('.home-button').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	console.log ("worked");
		  	$(".white-fader").fadeTo(1500, 1, function () {
		  		window.location.href = 'index.html';
		  	});
		};
	});


$(function() {

  $('.history-button').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$(".white-fader").fadeTo(1500, 1, function () {
		  		window.location.href = 'load.html';
		  	});
		};
	});

$(function() {

  $('.graph-button').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$(".white-fader").fadeTo(1500, 1, function () {
		  		window.location.href = 'graph.html';
		  	});
		};
	});









$(function() {

  $('.create-button').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$(".white-fader").fadeTo(1500, 1, function () {
		  		window.location.href = 'create.html';
		  	});
		};
	});

$(function() {

  $('.text-icon').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$(".input-nav-slider").animate ({left: "11.5%", }, 500);
		   	$(".input-selector-right").css("background-image",  "url(img/icons/text_icon.png)");

		};
	});


$(function() {

  $('.camera-icon').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$(".input-nav-slider").animate ({left: "33%", }, 500);
		  	$(".input-selector-right").css("background-image",  "url(img/icons/camera_icon.png)");


		};
	});


$(function() {

  $('.video-icon').bind("tap", tapHandler);

		function tapHandler (event) 
		  {

		  	$(".input-nav-slider").animate ({left: "54.6%", }, 500);
		  	$(".input-selector-right").css("background-image",  "url(img/icons/video_icon.png)");  
		  		console.log("it worked");

		};
	});


$(function() {

  $('.delete-icon').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$(".input-nav-slider").animate ({left: "76%", }, 500);


		};
	});




	//this is for the inputs it removes the class that makes the input active. When jquery selects the nav-bar option the display of the specific input is changed
function removeInputActive () {
	$('#iS-video ').removeClass('input-active');
	$('#iS-camera ').removeClass('input-active');
};



});