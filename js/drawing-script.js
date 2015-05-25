	
var ctx, color = "#000";	

$(document).ready(function () {
	
	// setup a new canvas for drawing wait for device init
    setTimeout(function(){
	   newCanvas();
    }, 1000);
	
	// prevent footer to toggle on touch

	
	// reset palette selection (css) and select the clicked color for canvas strokeStyle
	$(".palette").click(function(){
		$(".palette").css("border-color", "#777");
		$(".palette").css("border-style", "solid");
		$(this).css("border-color", "#fff");
		$(this).css("border-style", "dashed");
		color = $(this).css("background-color");
		ctx.beginPath();
		ctx.strokeStyle = color;
	});
    
	// link the new button with newCanvas() function
	$("#new").click(function() {
		newCanvas();
	});
});

// function to setup a new canvas for drawing
function newCanvas(){
	//define and resize canvas
    // $("#content").height($('#content').css('height', '20%'));
    var canvas = '<canvas id="canvas" width="'+($('#content').width())+'" height="'+($('#content').height())+'"></canvas>';
	$("#content").html(canvas);
    
	console.log (  )

    // setup canvas
	ctx=document.getElementById("canvas").getContext("2d");
	ctx.strokeStyle = color;
	ctx.lineWidth = 5;	
	
	// setup to trigger drawing on mouse or touch
	$("#canvas").drawTouch();
    $("#canvas").drawPointer();
	$("#canvas").drawMouse();
}

// prototype to	start drawing on touch using canvas moveTo and lineTo
$.fn.drawTouch = function() {
	var start = function(e) {
        e = e.originalEvent;
		ctx.beginPath();

				// add position offset from 0,0 change below
		x = e.changedTouches[0].pageX-110;
		y = e.changedTouches[0].pageY-70;
		ctx.moveTo(x,y);
	};
	var move = function(e) {
		e.preventDefault();
        e = e.originalEvent;
        		// add position offset from 0,0 change below
		x = e.changedTouches[0].pageX-110;
		y = e.changedTouches[0].pageY-70;
		ctx.lineTo(x,y);
		ctx.stroke();
	};
	$(this).on("touchstart", start);
	$(this).on("touchmove", move);	
}; 
    
// prototype to	start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
$.fn.drawPointer = function() {
	var start = function(e) {
        e = e.originalEvent;
		ctx.beginPath();
				// add position offset from 0,0 change below
		x = e.pageX;
		y = e.pageY;
		ctx.moveTo(x,y);
	};
	var move = function(e) {
		e.preventDefault();
        e = e.originalEvent;
        		// add position offset from 0,0 change below
		x = e.pageX;
		y = e.pageY;
		ctx.lineTo(x,y);
		ctx.stroke();
    };
	$(this).on("MSPointerDown", start);
	$(this).on("MSPointerMove", move);
};        

// prototype to	start drawing on mouse using canvas moveTo and lineTo
$.fn.drawMouse = function() {
	var clicked = 0;
	var start = function(e) {
		clicked = 1;
		ctx.beginPath();
				// add position offset from 0,0 change below
		x = e.pageX;
		y = e.pageY;
		ctx.moveTo(x,y);
	};
	var move = function(e) {
		if(clicked){
					// add position offset from 0,0 change below
			x = e.pageX;
			y = e.pageY;
			ctx.lineTo(x,y);
			ctx.stroke();
		}
	};
	var stop = function(e) {
		clicked = 0;
	};
	$(this).on("mousedown", start);
	$(this).on("mousemove", move);
	$(window).on("mouseup", stop);
};
