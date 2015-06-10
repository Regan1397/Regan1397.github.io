var cloudFirstTime = 1;
var userHappy = 0;

$(document).ready (function() {

// $(".white-fader").fadeTo(1500, 0);

createPageChange(1);

	// $(function () {
	// 	 $('#img-01').bind("tap", tapHandler);
	// 	function tapHandler (event) 
	// 	  {
	// 	  	$('#home-info-01').fadeTo(3000,0.9);
	// 	  	$('#img-01').fadeTo(3000,0.7);
	// 	  	console.log("worked");
	// 	   }
	// });


console.log ("++" + userHappy);


//Press space to call function <-- good for testing
$('body').keyup(function(e){
  if(e.keyCode == 32){
//Runs Code 		
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






function createPageChange (page) {



createPageManager = page;
console.log (createPageManager);


if (createPageManager == 0) {

paintingPosX = 384;
paintingPosY = 74;

$('.content-wrapper').find('*').removeAttr("style");
$(".book-help").css("display", "none");
$('#input-tag-cloud').css ({"width": "20%", "left": "5%", "top": "0%", "opacity": "0.1" 	});
}


if (createPageManager >= 1) {

$('.create-section-02').css("display", 'none');
$('#create-box-01').css("display", 'none');
$('#drawing-box').css("display", 'none');
$('.tag-cloud-wrapper').css("display", 'none');
$('.title-section').css("display", 'none');

}
//Lets Get Started Page.
if (createPageManager === 1) {

	$('.title-section').css("display", 'block');
	$('.title-help-wrapper').css("display", 'block');

	$('#create-box-01').css({
		"width": '100%',
		'display': 'block',
});

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
		$('.getStarted-btn').fadeTo(2000,1);



	})

}






else if (createPageManager === 2) {
		cloudFirstTime = 1;

		$('#create-box-01').css({
			"width": '100%',
			'display': 'block'});


	$('.tag-cloud-wrapper').css({"display": 'block',});
	$('.tag-cloud-help').css({"display": 'block',});
	$('#choosen-cloud-text').css({
		"width": '70%',
		"margin-left": "15%"
	});

		if (cloudFirstTime == 1) {

				$(function() {
		   $('.close').bind("tap", tapHandler);
		function tapHandler (event) 
		  {
		  cloudBtnAppear (cloudFirstTime);	
		  }});
				
		}


	}

	else if (createPageManager === 3) {
		paintingPosX = 190;
		paintingPosY = 290;
				 	newCanvas ();
	$('#drawing-box').css("height", '700px');
	$('.drawing-help').css("display", 'block');
	$('#downloadLnk').css("display", 'none');
	$('#drawing-box').css({
		'width': '100%',
		"display": 'block',
		'height' : '700px;'
		});

	$('#paint-slider').css({
		'top': '-50px',
		'left': '0px',
		});

	$('#content').css({
		'margin-left': '180px',
		});



	
				$('#drawing-box').fadeTo(6000, 1, function () {
					$('.drawing-help-btn').css ('display', 'block');
					// $('.drawing-help > h3').fadeTo(1500, 0);
			  	 	$('.drawing-help-btn').animate({'top': '650px', 'opacity': '1'}, 1500);	
			  	 	console.log("tick");				
				});
	}
	else if (createPageManager === 4)  {
		$(".book-help").css("display", "block");
		$('.create-section-01').css ('display', 'none');
		$('.create-section-01').css ('display', 'none');
		$('.create-section-02').css({
			// "width": '100%',
			'display': 'block'});
		$('.submitButton').css ('display', 'none');

	}
};


function cloudBtnAppear (num) {

 if (num == 1) {
$('.cloud-continue-btn').css({'display': 'block', 'position': 'absolute', 'margin-top': '500px' });
		  	 	$('.cloud-continue-btn').animate({'margin-top': '400px', 'opacity': '1'}, 1000);
		  	 	//change this. //This changes button positioning
		 	cloudFirstTime = 0;

		 }

};



function sadEmotionEntered () {


} 

