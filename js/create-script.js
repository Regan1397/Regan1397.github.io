
$(document).ready (function() {

$(".white-fader").fadeTo(1500, 0);

createPageChange(2);

	// $(function () {
	// 	 $('#img-01').bind("tap", tapHandler);
	// 	function tapHandler (event) 
	// 	  {
	// 	  	$('#home-info-01').fadeTo(3000,0.9);
	// 	  	$('#img-01').fadeTo(3000,0.7);
	// 	  	console.log("worked");
	// 	   }
	// });

$('body').keyup(function(e){
  if(e.keyCode == 32){

   }
});



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


function createPageChange (page) {



createPageManager = page;
console.log (createPageManager);

$('.create-section-02').css("display", 'none');
$('#drawing-box').css("display", 'none');
$('.tag-cloud-wrapper').css("display", 'none');
$('.title-section').css("display", 'none');

//Lets Get Started Page.
if (createPageManager === 1) {
	$('.title-section').css("display", 'block');
	$('.title-help-wrapper').css("display", 'block');

	$('#create-box-01').css("width", '100%');

//Styling for Title Input
	$('#title1').css ({
		'display': 'block',
		'text-align': 'center',
		'position': 'absolute',	
		'top': '300px',


		})


	$('#title1').focusout (function() {
		//add changes
		$('.continue-btn').css("display", 'block');
		$('#title-text-help').fadeTo(500, 0);
		$('#title-text-help').animate({'padding-top': '50px',}, 500);
		$('.continue-btn').fadeTo(2000,1);



	})

}






else if (createPageManager === 2) {
		$('#create-box-01').css("width", '100%');
		$('#create-box-01').css("width", '100%');

	$('.tag-cloud-wrapper').css({"display": 'block',});
	$('#choosen-cloud-text').css({
		"width": '70%',
		"margin-left": "15%"
	});

	



	}

else if (createPageManager === 10) {
		$('.create-box-01').css("display", 'inline-block');
		$('#drawing-box').css("display", 'inline-block');
		$('.create-section-02').css("display", 'block');

}




};

