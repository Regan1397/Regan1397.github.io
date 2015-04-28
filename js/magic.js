


$(document).ready(function() {


//Draggable.
var sphere = document.getElementById("sphere");
var distAB;
var maxRot = 20;
var starDragable = 1;
var firstScenePart = 1;
var backText = 0.3;
var textFade = 2000;

    //Draggable Code
console.log(firstScenePart);
  


if (firstScenePart == 1) 
{
moveStar(); 
animStar ();   
}

$(function () {
 $('#starKing_01').bind("tap", tapHandler);

function tapHandler (event) {
    if (firstScenePart == 2)
    {
    $('.starText_01 > li:nth-child(3)').fadeTo(textFade, 1);
      $('.starText_01 > li:nth-child(2)').fadeTo(textFade, backText).delay(2000, function () {
        $("#starStar_01").fadeTo(1500, 0, function() {
          $("#blackFade").fadeIn(1500);
          $('#starGround').fadeTo(1500, 0.5);
          $('.starText_01 > li:nth-child(4)').css('color', 'white');
          $('.starText_01 > li:nth-child(4)').fadeTo(1500,0.9);      
     

        });
          //fadeoutstar
      });
    }
  }
});





       function moveStar() {

        $('.pep').pep({
          axis: "x",
          droppable: '.droppable',
          overlapFunction: false,
          useCSSTranslation: false,
          shouldEase: false,
          start: function(ev, obj){

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
animKing();
stopAnimStar();
 rotate(obj.$el, 0);
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
    distAB = (($('#marker_01').offset().left)-($('#starStar_01').offset().left));
    console.log (distAB);

    //End of Draggable Code

    //Sentence 2 Initiation.
      if ( (distAB) <= 50)  {
       firstScenePart = 2;
      console.log (firstScenePart);
        $('#starStar_01').css("left", '656px');
        


      }
  }



});






