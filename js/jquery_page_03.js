//work on shaking of rose

$(document).ready(function() {
    var DistAB;
    var dir = false;
     $('body').bind('keypress', function(e) {
            if (e.which == 32){//space bar
                if (dir == false) ($('#RainCloud').animate({left: '700'},1500)) 

                  };
          });


  setInterval( function() {
    makeItRain();
  },50);
});


function makeItRain () {
distAB = (($('#RainKing').offset().left)-($('#RainCloud').offset().left));
console.log (distAB);
}

