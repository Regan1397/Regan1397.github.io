$(document).ready (function() {
	console.log("linked");
			$(function () {

		 $('#img-01').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$('#img-01 > div').fadeTo(1000,1);
		  	$('#img-01 > img').fadeTo(1000,0.7);
		  	console.log("worked");
		   }
		});

});