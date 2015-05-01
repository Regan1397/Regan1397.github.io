var backText = 0.3;
    var textFade = 2000;
  var t2;
  var dir2 = false;
  var Scene = 1;
$(document).ready(function() {



$(function () {
    $('#theBook').bind("tap", tapHandler);
        function tapHandler (event) 
        {
          if (Scene == 2) {
            dotMove();
            stopAnimBook();
            $('#bookText > li:nth-child(2)').fadeTo(textFade, 1, function () {
              // $('#bookText > li:nth-child(1)').delay(1500).fadeTo(textFade, 1);
              $('#whiteFader'). show();              
            });
          }
        }
    });


$(function () {
    $('#whiteFader').bind("tap", tapHandler);
        function tapHandler (event) 
        {
          $('#whiteFader').fadeTo(textFade,1, function () {
               window.location.href = 'directory.html';
          });      //end 
        }
    });




});


    function dotMove () {
      $('#bookDot').fadeIn(700);
       $('#bookDot').animate({top: '+=19',},1000, function() {
                 $('#bookDot').delay(500).fadeOut(1500);
            });
    }

     function animBook () {


     t2 =setInterval(function(){

        (dir2 == false) ? document.getElementById('theBook').style.webkitTransform = "rotate(2deg)" : document.getElementById('theBook').style.webkitTransform = "rotate(-2deg)";
        dir2 = !dir2;
    }, 1000);
    }

       function stopAnimBook () {
        clearInterval(t2);
    }