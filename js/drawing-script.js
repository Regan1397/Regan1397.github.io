$(document).ready(function () {


canvas.width = width;
canvas.height = height;


// var width = $("#canvas-background").css('width');
// var height = $("#canvas-background").css('height');

// $('#colors_sketch').css('width', width);
// $('#colors_sketch').css('height', width);
// console.log (width);
// var height = 

var sktch = $('#colors_sketch').sketch();  // store a reference to the element.
var cleanCanvas = $('#colors_sketch')[0];


$('#reset-canvas').click(function(){
    sktch.sketch().actions = [];       // this line empties the actions. 
    var canvas = document.getElementById("colors_sketch");
    var ctx = canvas.getContext('2d');
	canvas.width = width;
	canvas.height = height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

});



// c.beginPath();
// c.clearRect(0,0,canvas.width,canvas.height);
