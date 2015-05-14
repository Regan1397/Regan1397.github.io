$(document).ready (function() {
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

});