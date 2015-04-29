var dir1 = false;
var dir2 = false;
var dir3 = false;

var t1;
var t2;
var t3;
function animStar () {

 t1 =setInterval(function(){
    (dir1 == false) ? document.getElementById('starStar_01').style.webkitTransform = "rotate(3deg)" : document.getElementById('starStar_01').style.webkitTransform = "rotate(-3deg)";
    dir1 = !dir1;
}, 1000);
}
function stopAnimStar () {
clearInterval(t1);
}



function animKing () {

 t2 =setInterval(function(){
    (dir2 == false) ? document.getElementById('starKing_01').style.webkitTransform = "rotate(2deg)" : document.getElementById('starKing_01').style.webkitTransform = "rotate(-2deg)";
    dir2 = !dir2;
}, 800);
}
function stopAnimKing () {
clearInterval(t2);
}


function animKing2 () {

 t3 =setInterval(function(){
    (dir3 == false) ? document.getElementById('starKing_01').style.webkitTransform = "rotate(1deg)" : document.getElementById('starKing_01').style.webkitTransform = "rotate(-1deg)";
    dir3 = !dir3;
}, 800);
}
function stopAnimKing2 () {
clearInterval(t3);
}

