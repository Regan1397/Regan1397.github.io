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


        //plays effect when page starts.
             $('.beeText_01 > li:nth-child(1)').delay(1500).fadeTo(textFade, 1,function (){
                if (beeScene ==1) {
                animRose2();
                }

             });

$(function () {
 $('#beeWhiteFade').bind("tap", tapHandler);
      function tapHandler (event) 
      {
        if (beeScene ==3) { $('#beeWhiteFade').fadeTo(1500,1) }
      }
});




      
        $('body').click (function (){
    if (beeScene == 1) {
        // disturbBee ();
       }
        });


    $(function () {
    $('#beeBee01').bind("tap", tapHandler);

        function tapHandler (event) 
        {
            if (beeScene == 2) {
                stopAnimBee();
                
                      $('#beeBee01').animate({top: '+=5px'},100).delay(100).animate({top: '247px', left: '727px'},1500);
                      $('#beeKing01').delay(100).attr('src', 'imgs/Bee_King_02.png');
                      $('#beeBee01').delay(100).attr('src', 'imgs/Bee_Bee.png');

                      $('#beeBee01').delay(3000, function () {
                        $('.beeText_01 > li:nth-child(3)').fadeTo(textFade, 1);
                        dotMove();
                        $('.beeText_01 > li:nth-child(2)').fadeTo(textFade, backText);

                        $('#beeRose01').delay(3000,function() {
                        $('.beeText_01 > li:nth-child(2)').fadeTo(textFade, 1);
                         $('.beeText_01 > li:nth-child(1)').delay(1500).fadeTo(textFade, 1);
                        $('#beeWhiteFade').show();
                        beeScene =3;
                        });
                    });

            }
        }    
    });


    var t1;
    var t2;
    var t3;
    var dir1 = false;
    var dir2 = false;
    var dir3 = false;
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

      function animRose2 () {

        t3 =setInterval(function(){
        (dir3 == false) ? document.getElementById('beeRose01').style.webkitTransform = "rotate(1deg)" : document.getElementById('beeRose01').style.webkitTransform = "rotate(-1deg)";
        dir3= !dir3;
    }, 1000);
    }

     function stopAnimRose2 () {
        clearInterval(t3);
    }


           
        function disturbBee () {
            dotMove();
            stopAnimRose2 ();
            beeScene = 0;
             
            $('.beeText_01 > li:nth-child(2)').fadeTo(textFade, 1);
            $('.beeText_01 > li:nth-child(1)').fadeTo(textFade, backText,function () {
                     AnimateRotate(60);            
            });
            animRose();
            $('#beeBee01').delay(textFade).animate({top: '205px'},2000).animate({top: '476px', left: '756px'},1000, function (){
                      
                  animBee();
                beeScene = 2;
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








    