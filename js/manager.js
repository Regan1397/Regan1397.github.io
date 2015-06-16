currentPage = 1;

$(document).ready (function() {

//*** Page one controls ***//
$(function() {

  $('.home-button').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	changePage(1);
		}});

//*** Page two controls	 ***//
	$(function() {

  $('.create-button').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	changePage(2);
		}});

	//*** Page three controls	 ***//

	$(function() {

  $('.history-button').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	changePage(3);
		}});

	//*** Page four controls	 ***//

$(function() {

  $('.graph-button').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	changePage(4);
		}});

});


function changePage(page) {
// $('#bottom-navbar > ul > li').css('background-colour','none');
// $(this).css('background-colour', 'red');
$('.page').css('display', 'none');

currentPage = page;
console.log(currentPage);

if (currentPage == 1) {	
$('#page-one').css('display', 'inline-block');
}

if (currentPage == 2) {	
$('#page-two').css('display', 'inline-block');
}

if (currentPage == 3) {	
$('#page-three').css('display', 'inline-block');
}

if (currentPage == 4) {	
$('#page-four').css('display', 'inline-block');
}


	
}


