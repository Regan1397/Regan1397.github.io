
var x = 0, y = 40, z = 0,
    vx = 0, vy = 0, vz = 0,
	ax = 0, ay = 0, az = 0;


	
var sphere = document.getElementById("sphere");
var distAB =  0


function positionCheck(){

distAB = (($('#in-zone').offset().left)-($('#sphere').offset().left));

// console.log (($('#sphere').offset().left));
// console.log (($('#in-zone').offset().left));
// console.log (distAB);



	if ( (distAB) <= 0)  {
	// console.log ("In");
	$('#in-zone').css("background-color", "yellow");
	// $('#in-zone').css("display", "none");
	$('#troll').show('slow');
	
	} 
	else {
			// console.log ("Out");
	$('#in-zone').css("background-color", "black");
		$('#troll').css("display", "none");
	}

}


