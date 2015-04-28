


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
 $('#all').bind("tap", tapHandler);

  function tapHandler (event) 
  {
    if (firstScenePart == 5)
    {
      $('#all').hide(); 
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
            $('#starGround').fadeTo(1500, 1);
            });


             
        });
    }

    if(firstScenePart == 4) {
          $('.starText_01 > li:nth-child(5)').fadeTo(textFade,backText, function () {
                   $('.starText_01 > li:nth-child(6)').css({
                  'color': 'white',
                      });
                     $('.starText_01 > li:nth-child(6)').fadeTo(textFade,1)
                     $('#all').show(); 
                     firstScenePart = 5;
            });  

    }



  
  }
});


$(function () {
 $('#starKing_01').bind("tap", tapHandler);

function tapHandler (event) 
  {


  if (firstScenePart == 3)
    {       animStar();
            $('.starText_01 > li:nth-child(4)').fadeTo(textFade,backText);
            $('#all').hide();
               $('.starText_01 > li:nth-child(5)').css({
                   'color': 'white',
                });
              $('.starText_01 > li:nth-child(5)').fadeTo(textFade,1)
                $('#all').show();
                firstScenePart = 4;       
    }


    if (firstScenePart == 2)
    {
        stopAnimKing();

      $('.starText_01 > li:nth-child(3)').fadeTo(textFade, 1);
        $('.starText_01 > li:nth-child(2)').fadeTo(textFade, backText).delay(2000, function () {
          $("#starStar_01").fadeTo(1500, 0, function() {
            $("#blackFade").fadeIn(1500);
            $('#starGround').fadeTo(1500, 0.5);
            $('.starText_01 > li:nth-child(4)').css({
              'color': 'white',
              'font-size': '21px'
          });
            $('.starText_01 > li:nth-child(4)').fadeTo(textFade,0.9);
            $('#all').show();      
       

          });
            //fadeoutstar
        });

      }
      firstScenePart = 3;

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






