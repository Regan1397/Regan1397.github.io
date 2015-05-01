


$(document).ready(function() {


//Draggable.
var sphere = document.getElementById("sphere");
var distAB;
var maxRot = 20;
var starDragable = 1;
var firstScenePart = 1;
var backText = 0.3;
var textFade = 2000;
var headRot;

    //Draggable Code
console.log(firstScenePart);


if (firstScenePart == 1) 
{
moveStar(); 
animStar ();   
}
$(function () {
 $('#all').bind("tap", tapHandler);

  function tapHandler (event) 
  {
      //Goes to next scene
    if (firstScenePart ==6) {
        $("#blackFade").css({'background-color': 'white', 'z-index': '10'})
        $('#blackFade').fadeTo(1500,1, function () {
             window.location.href = 'directory.html';
        }); //end
    }

    //switch back to last text
    if (firstScenePart == 5)
    {
      dotMove();
      dotMove();
      $('#all').hide(); 
        $('#starSky_01').attr('src', 'imgs/Star_Sky_01.png');
        $('.starText_01 > li:nth-child(4)').fadeTo(1000,0);
        $('.starText_01 > li:nth-child(5)').fadeTo(1000,0);
        $('#all').delay(2000, function () { 
            $('.starText_01 > li:nth-child(6)').fadeTo(textFade,0,function () {
                  $('.starText_01 > li:nth-child(6)').css({'opacity': 'backText', 'color': 'black' });

            $("#blackFade").delay(500).fadeOut(3000);
            $('.starText_01 > li:nth-child(4)').css({'font-size': '18px'});

            $('.starText_01 > li:nth-child(3)').fadeTo(0,backText);
            $('.starText_01 > li:nth-child(4)').fadeTo(0,backText);
            $('.starText_01 > li:nth-child(5)').fadeTo(0,backText);
            $('.starText_01 > li:nth-child(6)').fadeTo(0,backText);
            $('.starText_01 > li:nth-child(4)').css({ 'color': 'black' });  
            $('.starText_01 > li:nth-child(5)').css({ 'color': 'black' });  
            $('.starText_01 > li:nth-child(6)').css({ 'color': 'black' });
            $("#starStar_01").fadeTo(1500, 1);
            // animStar();
            $('.starText_01 > li:nth-child(7)').fadeTo(5000,1);
            // $('#blackFade').hide(); 
            $('#kingShader').fadeTo(1500, 0);
            $('#starStar_01').attr('src', 'imgs/Star_Star_Blink.png');
            blinkStar();

            });
          firstScenePart = 6;
          $('#all').show();

        });
    }
    //i miss you
    if(firstScenePart == 4) {
        dotMove();
       $('#all').hide();
          $('.starText_01 > li:nth-child(5)').fadeTo(textFade,backText, function () {
                   $('.starText_01 > li:nth-child(6)').css({
                  'color': 'white',
                      });
                     $('.starText_01 > li:nth-child(6)').fadeTo(textFade,1)
                     $('#all').show(); 
                     firstScenePart = 5;
            });  

    }


// the king stared
    if (firstScenePart == 3)
    {       
      dotMove();
            $('.starText_01 > li:nth-child(4)').fadeTo(textFade,backText);
            $('#all').hide();
               $('.starText_01 > li:nth-child(5)').css({
                   'color': 'white',
                });
              $('.starText_01 > li:nth-child(5)').fadeTo(textFade,1)
                $('#all').show();
                  stopAnimKing2();
                firstScenePart = 4;   
           
    }
  }
});

//its all dark
$(function () {
 $('#starKing_01').bind("tap", tapHandler);

function tapHandler (event) 
  {
    if (firstScenePart == 2)
    {
        stopAnimKing();
 dotMove ();
      $('.starText_01 > li:nth-child(3)').fadeTo(textFade, 1);
        $('.starText_01 > li:nth-child(2)').fadeTo(textFade, backText).delay(2000, function () {
          $("#starStar_01").fadeTo(1500, 0, function() {
            $("#blackFade").fadeIn(1500,function() {
            $('#kingShader').fadeTo(2000, 0.4);
              });

            $('.starText_01 > li:nth-child(4)').css({
              'color': 'white',
              'font-size': '21px'
          });
            $('.starText_01 > li:nth-child(4)').fadeTo(textFade,0.9);
              $('#dot').animate({top: '+=3',},1000);
             

            $('#all').show();      
            animKing2();
          });
            //fadeoutstar
        });

      }
      firstScenePart = 3;

   }    
});

$(document).delay(3000, function (){
  blurredStar ();
});

       function moveStar() {

        $('.pep').pep({
          axis: "x",
          droppable: '.droppable',
          overlapFunction: false,
          useCSSTranslation: false,
          shouldEase: false,
          start: function(ev, obj){
            console.log("started")
              
          },
          drag: function(ev, obj){
            var vel = obj.velocity();
            // document.getElementById("pep").style.width = '50px';
            var rot = (vel.x)/2;
            if (rot >maxRot) {rot =maxRot};
            if (rot <-maxRot) {rot =-maxRot};
            rotate(obj.$el, rot);
              positionCheck();
              
          },
          stop: function(ev, obj){
             rotate(obj.$el, 0);
             animStar ();  
            console.log("stoped");
            
  if (firstScenePart == 2)
{
$('#starKing_Head').css({'opacity': '0'});
$('#starKing_Head').hide();
$('#starKing_01').attr('src', 'imgs/Star_King_01.png');

animKing();
stopAnimStar();
 rotate(obj.$el, 0);
dotMove ();
  $('.starText_01 > li:nth-child(2)').fadeTo(textFade, 1);
      $('.starText_01 > li:nth-child(1)').fadeTo(textFade, backText);
}


          },
     

        }); 
      }

  function rotate($obj, deg){
    $obj.css({
        "-webkit-transform": "rotate("+ deg +"deg)",
           "-moz-transform": "rotate("+ deg +"deg)",
            "-ms-transform": "rotate("+ deg +"deg)",
             "-o-transform": "rotate("+ deg +"deg)",
                "transform": "rotate("+ deg +"deg)"
      });
  }



 function positionCheck(){
    headRot = ($('#starStar_01').offset().left)/15;
    distAB = (($('#marker_01').offset().left)-($('#starStar_01').offset().left));
    // console.log (($('#starStar_01').offset().left));
    console.log(distAB)
// console.log(headRot);
    DoRotate(headRot);
    //End of Draggable Code

    //Sentence 2 Initiation.
      if ( (distAB) <= 0)  {
        stopBlurredStar();
       firstScenePart = 2;
      console.log (firstScenePart);
        $('#starStar_01').css("left", '656px');
        


      }
  }

var t4;
var t5;
var t6;
 
 // $.event.special.tap = {
 //    tapholdThreshold: 300,
 //  }

  function blurredStar () {



 t4 =setInterval(function(){
$('#starStarBlur').fadeTo(1000,0.2);
$('#starStarBlur').fadeTo(1000,0);
}, 4000);
}

 function stopBlurredStar () {
    clearInterval(t4);
}



function dotMove () {
  $('#dot').fadeIn(700);
   $('#dot').animate({top: '+=21',},1000, function() {
             $('#dot').delay(500).fadeOut(1500);
        });
    
}



var t6;
var dir4 = false;

function blinkStar () {

 t6 =setInterval(function(){
    (dir4 == false) ? document.getElementById('starStar_01').style.opacity = "0" : document.getElementById('starStar_01').style.opacity = "1";
    dir4 = !dir4;
}, 1000);
}

});

function DoRotate(d) {
    $("#starKing_Head").css({
        transform: 'rotate(' + d + 'deg)'
    });
}



 







