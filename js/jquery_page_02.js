//work on shaking of rose

$(document).ready(function() {
var backText = 0.3;
var textFade = 2000;
var beeScene = 1;
    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
        threshold: 5

    });

      // start listening to device motion
    myShakeEvent.start();

    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);



 
  
    $('body').click (function (){
if (beeScene == 1) {
       disturbBee();
   }
    });



var t1;
var t2;
var dir1 = false;
var dir2 = false;
var roseTimer = 1;

function animRose () {


 t1 =setInterval(function(){
        roseTimer +=1;
    if (roseTimer ==10) {
                clearInterval(t1);
            }
    (dir1 == false) ? document.getElementById('beeRose01').style.webkitTransform = "rotate(1.5deg)" : document.getElementById('beeRose01').style.webkitTransform = "rotate(-1.5deg)";
    dir1 = !dir1;
}, 100);
}

function animBee () {


 t2 =setInterval(function(){

    (dir2 == false) ? document.getElementById('beeBee01').style.webkitTransform = "rotate(21.5deg)" : document.getElementById('beeBee01').style.webkitTransform = "rotate(18.5deg)";
    dir2 = !dir2;
}, 1000);
}

 function stopAnimBee () {
    clearInterval(t2);
}


       
    function disturbBee () {
        dotMove();
         beeScene = 2;
        $('.beeText_01 > li:nth-child(2)').fadeTo(textFade, 1);
        $('.beeText_01 > li:nth-child(1)').fadeTo(textFade, backText,function () {
                 AnimateRotate(20);            
        });
        animRose();
        $('#beeBee01').delay(textFade).animate({top: '205px'},2000).delay(200).animate({top: '476px', left: '756px'},1500,function (){
            animBee();

        });
         
    }



    //shake event callback
    function shakeEventDidOccur () {
                if (beeScene ==1) {
                var roseTimer = 1;
                disturbBee();
            }
        }

});

    function dotMove () {
      $('#dot_bee').fadeIn(700);
       $('#dot_bee').animate({top: '+=21',},1000, function() {
                 $('#dot_bee').delay(500).fadeOut(1500);
            });
    }




function AnimateRotate(d){
    var elem = $("#beeBee01");

    $({deg: 0}).animate({deg: d}, {
        duration: 1500,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}








    