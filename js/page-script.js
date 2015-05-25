$(document).ready (function() {

		var canvas,
		context;
		canvasWidth =300;
		canvasHeight = 300;
		paint = false;

		var clickX = new Array();
		var clickY = new Array();
		var clickDrag = new Array();




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

  $('.create-button').bind("tap", tapHandler);

		function tapHandler (event) 
		  {
		  	$(".white-fader").fadeTo(1500, 1, function () {
		  		window.location.href = 'create.html';
		  	});
		};
	});






var canvasDiv = document.getElementById('canvasDiv');
canvas = document.createElement('canvas');
canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");


$( '#canvas').on ( "vmousedown", function(event) {
	console.log ("yay");
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
		
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});





$( '#canvas').on ( "vmousemove", function(event) {
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});



$( '#canvas').on ( "vmouseup", function(event) {
  paint = false;
});

$('#canvas').mouseleave(function(e){
  paint = false;
});




function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}


function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
  context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 5;
			
  for(var i=0; i < clickX.length; i++) {		
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.stroke();
  }
}








});