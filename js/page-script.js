$(document).ready (function() {



	$(".white-fader").fadeTo(1500, 0);
	console.log("linked");
			$(function () {

		 $('#img-01').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$('#home-info-01').fadeTo(3000,0.9);
		  	$('#img-01').fadeTo(3000,0.7);
		  	console.log("worked");
		   }







		});


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

  $('.text-icon').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$(".input-nav-slider").animate ({left: "8%", }, 500);

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

  $('.camera-icon').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$(".input-nav-slider").animate ({left: "31%", }, 500);

		};
	});


$(function() {

  $('.video-icon').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$(".input-nav-slider").animate ({left: "53%", }, 500);

		};
	});


$(function() {

  $('.delete-icon').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$(".input-nav-slider").animate ({left: "74.5%", }, 500);

		};
	});





});