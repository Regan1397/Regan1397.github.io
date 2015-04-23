
var x = 40, y = 40, z = 0,
    vx = 0, vy = 0, vz = 0,
	ax = 0, ay = 0, az = 0;
	
var sphere = document.getElementById("sphere");

console.log (($('#sphere').offset().top));
console.log (($('#in-zone').offset().top));
console.log ((($('#in-zone').offset().top)-($('#sphere').offset().top)));

if (window.DeviceMotionEvent != undefined) {
	window.ondevicemotion = function(e) {
		ay = event.accelerationIncludingGravity.x * 2;
	}

	setInterval( function() {
		var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
		if ( landscapeOrientation) {
			// vx = vx + ax;
			// vy = vy + ax;
			// vz = vz + az;
		} else {
			vy = vy - ay;
			// vx = vx + ax;
			// vz = vz + az;
		}
		vx = vx * 0.98;
		vy = vy * 0.98;
		vz = vz * 0.98;
		y = parseInt(y + vy / 50);
		x = parseInt(x + vx / 50);
		z = parseInt(z + vz / 50);
		
		boundingBoxCheck();
		
		sphere.style.top = y + "px";
		sphere.style.left = x + "px";
		sphere.style.width = 20  + "px";
		sphere.style.height = 20 + "px";
		
	}, 25);
} 




function boundingBoxCheck(){
	if (x<0) { x = 0; vx = -vx; }
	if (y<0) { y = 0; vy = -vy; }
	if (x>document.documentElement.clientWidth-20) { x = document.documentElement.clientWidth-20; vx = -vx; }
	if (y>document.documentElement.clientHeight-20) { y = document.documentElement.clientHeight-20; vy = -vy; }
	if (z > 40) {z = 40;}
	if (z < -40) {z = -40;}


	if ( (($('#in-zone').offset().top)-($('#sphere').offset().top)) < 20)  {
	console.log ("Worked");
	$('#in-zone').css("background-color", "yellow");
	}
	else {
		$('#in-zone').css("background-color", "black");
	}

}