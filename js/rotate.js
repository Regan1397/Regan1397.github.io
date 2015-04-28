var dir1 = false;
var dir2 = false;
var t1;
var t2;
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
    (dir2 == false) ? document.getElementById('starKing_01').style.webkitTransform = "rotate(3deg)" : document.getElementById('starKing_01').style.webkitTransform = "rotate(-3deg)";
    dir2 = !dir2;
}, 1000);
}
function stopAnimStar () {
clearInterval(t2);
}
