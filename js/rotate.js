var dir = false;
function animStar () {

setInterval(function(){
    (dir == false) ? document.getElementById('starStar_01').style.webkitTransform = "rotate(3deg)" : document.getElementById('starStar_01').style.webkitTransform = "rotate(-3deg)";
    dir = !dir;
}, 1000);
}