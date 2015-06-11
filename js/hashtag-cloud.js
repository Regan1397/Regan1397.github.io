//Coded By Regan Petrie


var tag_btnActive= 0;

$(document).ready (function() {




//when cloud icon is clicked
$(function () {
		 $('#input-tag-cloud').bind("tap", tapHandler);
		function tapHandler (event) 
		  {
		  	$('.black-fader').css("display","fixed").fadeTo(500,.97);
		  	$('#input-tag-cloud').css ({"width": "20%", "left": "5%", "top": "0%", "opacity": "0.1" 	});
		  	console.log("worked");
		   }
});



//closes hashtag cloud
$(function () {
		 $('.close').bind("tap", tapHandler);
		function tapHandler (event) 
		  {	$('.black-fader').fadeTo(500,0).delay(500).css("display","none");
		   }
		});



//when hastag is tapped, it is added to body of page/section.
$(function () {
		 $('.hashtag-box > h2').bind("tap", tapHandler);
		function tapHandler (event) 
		  {
		  	$(this).css( 'color', "#E7853C");

		  	$('#choosen-cloud-text').append( "<p>" + "#" + ($(this).text()) + "</p>" );
		   }
});




$(function () {
		 $('#showtag-btn').bind("tap", tapHandler);
		function tapHandler (event) 

		  {
		  	if (tag_btnActive == 1) {
		  	$('#custom-tag-section').hide();
		  	console.log("#" + ($("#addtag-textarea").val()));
		 	$('.hashtag-box').append( "<h2 style='color: #E7853C'>" + ($("#addtag-textarea").val()) + "</h2>" );
		 			  	console.log ($(this).text());

		 	//this appends custom text to body within create page
		  	$('#choosen-cloud-text').append( "<p>" + "#" + ($("#addtag-textarea").val()) + "</p>" );


		 	//This sets hastag to being selected

		  	tag_btnActive = 0;
		  	}
		  	else if (tag_btnActive ==0) {
		  	$('#custom-tag-section').show();
		  	tag_btnActive = 1;
		  	}
		   }
		});




});


