$(document).ready(function() {

    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
        threshold: 10
    });

    // start listening to device motion
    myShakeEvent.start();

    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);

// dotMove ();



});

function dotMove () {
  $('#dot_bee').fadeIn(700);
   $('#dot_bee').animate({top: '+=21',},1000, function() {
             $('#dot_bee').delay(500).fadeOut(1500);
        });
    
}




    //shake event callback
    function shakeEventDidOccur () {
dotMove();
    }





    