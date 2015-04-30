var Scene = 1;
var backText = 0.3;
    var textFade = 2000;

$(document).ready(function() {
    var DistAB;
    var dir = false;
     $('body').bind('keypress', function(e) {
            if (e.which == 32){//space bar
                        
                 (dir == false) ? ($('#RainCloud').animate({left: '530'},1500)): ($('#RainCloud').animate({left: '0'},1500));
                                    dir = !dir; 
                }
          });



  $(function () {
 $('#rainWhiteFade').bind("tap", tapHandler);
      function tapHandler (event) 
      {
        if (Scene ==7) { $('#rainWhiteFade').fadeTo(1500,1) }
      }
});
    


  setInterval( function() {
    makeItRain();

       if (Scene ==2) {
          
   $('#RainText > li:nth-child(1)').fadeTo(textFade, 1,function () {
        $('#RainText').delay(1000,function () {
          dotMove();
        });
       $('#RainText > li:nth-child(1)').delay(1000).fadeTo(textFade, backText);
       $('#RainText > li:nth-child(2)').delay(100).fadeTo(textFade, 1,function () {
              dotMove();
              $('#RainText > li:nth-child(2)').delay(1000).fadeTo(textFade, backText);
              $('#RainText > li:nth-child(3)').delay(1000).fadeTo(textFade, 1);
        });
      });
   Scene = 3;

 }

      if(Scene==4) {
       
         $('#RainText').delay(1000,function () {
                  dotMove();
                });
               $('#RainText > li:nth-child(3)').delay(1000).fadeTo(textFade, backText);
               $('#RainText > li:nth-child(4)').delay(100).fadeTo(textFade, 1,function () {
                     
                              $('#dot_rain').fadeIn(700);
                    $('#dot_rain').animate({top: '+=40',},1000, function() {
                         $('#dot_rain').delay(500).fadeOut(1500);
                      });
                
                  $('#RainText > li:nth-child(4)').delay(1000).fadeTo(textFade, backText,function () {
                    dotMove();
                  });
                  $('#RainText > li:nth-child(5)').delay(1000).fadeTo(textFade, 1);
                });
                Scene = 5;
      }

      if(Scene==6) {
        Scene = 7;
            dotMove();            
           $('#RainText > li:nth-child(5)').fadeTo(textFade, backText);
           $('#RainText > li:nth-child(6)').fadeTo(textFade, 1);
           $('#RainText > li:nth-child(6)').delay(3000).fadeTo(textFade, backText,function () {
                    dotMove();
                  });
            $('#RainText > li:nth-child(7)').delay(3000).fadeTo(textFade, 1);
            $('#rainWhiteFade').show();
            $("#RainText > li").delay(9000).fadeTo(textFade,1);


        

      }



  },50);
});


function makeItRain () {
  var RainChange;
distAB = (($('#RainKing').offset().left)-($('#RainCloud').offset().left));
if ((distAB-180) <= 0) {

  if (Scene ==1) {Scene =2;}
  if (Scene ==5) {Scene = 6;}

  RainChange = 1;
  // console.log("worked");
  if(RainChange == 1) { 
    $("#RainRain").fadeIn(1500, function(){

      $('#RainKing').attr('src', 'imgs/Rain_King_01.png');
    
      });
   }
  }


if ((distAB-180) > 20) {  
  if (Scene ==3) {Scene =4;}
        $("#RainRain").fadeOut(1500,  function(){

              $('#RainKing').attr('src', 'imgs/Rain_King_02.png');

             });    
      
}
// console.log (distAB-180);

}


 function dotMove () {
      $('#dot_rain').fadeIn(700);
       $('#dot_rain').animate({top: '+=22',},1000, function() {
                 $('#dot_rain').delay(500).fadeOut(1500);
            });
    }

