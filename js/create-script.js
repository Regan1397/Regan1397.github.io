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

		   $('.submitButton').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  section1Focus();
		  	
		};
	});



});


function section1Focus () {

$('.create-section-02').fadeTo(1000,0, function () {
	$('.create-section-02').hide();

});
$('.create-section-01').css('z-index', '5');
$('.create-section-01').animate ({top: "200px",}, 1000);	

};

function section2Focus () {

$('.create-section-01').fadeTo(1000,0, function () {


});
$('.create-section-02').css('z-index', '5');
$('.create-section-02').animate ({top: "-200px",}, 1000);	

};

