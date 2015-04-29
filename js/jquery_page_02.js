//work on shaking of rose

$(document).ready(function() {
var backText = 0.3;
var textFade = 2000;
var beeScene = 1;
    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
        threshold: 10
    });
if (beeScene == 1) {
 
      // start listening to device motion
    myShakeEvent.start();

    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);

    // dotMove ();
    $('body').click (function (){
       disturbBee();
    });
}

var t1;
var dir1 = false;

function animRose () {

 t1 =setInterval(function(){
    (dir1 == false) ? document.getElementById('beeRose01').style.webkitTransform = "rotate(1.5deg)" : document.getElementById('beeRose01').style.webkitTransform = "rotate(-1.5deg)";
    dir1 = !dir1;
}, 100);
}
function stopAnimRose () {
clearInterval(t1);
}

       
    function disturbBee () {
        dotMove();
        $('.beeText_01 > li:nth-child(2)').fadeTo(textFade, 1);
        $('.beeText_01 > li:nth-child(1)').fadeTo(textFade, backText);

        $('#beeBee01').delay(textFade).animate({top: '215px'},2000).delay(200).animate({top: '504px', left: '813px'},2000);
    }

});

    function dotMove () {
      $('#dot_bee').fadeIn(700);
       $('#dot_bee').animate({top: '+=21',},1000, function() {
                 $('#dot_bee').delay(500).fadeOut(1500);
            });
    }





    //shake event callback
    function shakeEventDidOccur () {

disturbBee();
    }





    