//work on shaking of rose

$(document).ready(function() {
    var DistAB;
    var dir = false;
     $('body').bind('keypress', function(e) {
            if (e.which == 32){//space bar
                        
                 (dir == false) ? ($('#RainCloud').animate({left: '530'},1500)): ($('#RainCloud').animate({left: '0'},1500));
                                    dir = !dir; 
                }
          });


  setInterval( function() {
    makeItRain();
  },50);
});


function makeItRain () {
  var RainChange;
distAB = (($('#RainKing').offset().left)-($('#RainCloud').offset().left));
if ((distAB-180) <= 0) {
  RainChange = 1;
  console.log("worked")
if(RainChange == 1) { 
    
    $("#RainRain").fadeIn(1500,function(){
      $('#RainKing').attr('src', 'imgs/Rain_King_01.png');
    }); 
  }
}
if ((distAB-180) > 20) {

$("#RainRain").fadeOut(1500,function(){
      $('#RainKing').attr('src', 'imgs/Rain_King_02.png');
    }); 
}
// console.log (distAB-180);

}

