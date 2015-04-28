


$(document).ready(function() {


//Draggable.
var sphere = document.getElementById("sphere");
var distAB;
var maxRot = 20;
var starDragable = 1;
var firstScenePart = 1;


    //Draggable Code
console.log(firstScenePart);
  


if (firstScenePart == 1) 
{
moveStar();   
}
animStar (); 






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
            console.log("stoped");

            if(firstScenePart==2){
              pinchAnim();
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







//Pinch
    var log = document.getElementById("log");
    var el = document.getElementById("pinchArea");
   
    var mc = new Hammer.Manager(el);
    mc.add(new Hammer.Pinch({ threshold: 0.2, pointers: 2 }));



    //Pinch

    mc.on("pinchstart pinchmove", onPinch);

    mc.on("hammer.input", function(ev) {
    });

    function onPinch(ev) {
      if(ev.type == 'pinchstart') {
             var randomColor = Math.floor(Math.random()*16777215).toString(16)     
      }
       // alert ("Worked"); 
         $('.starText_01 > li:nth-child(2)').fadeTo(4000, 0.3);
         $('.starText_01 > li:nth-child(3)').fadeTo(3000, 1);
         stopAnimStar();

       // $("#pinchArea").css('background-color', randomColor);

      logEvent(ev.type);
    }

    function pinchAnim() {
  $('.starText_01 > li:nth-child(2)').fadeTo(3000, 1);
      $('.starText_01 > li:nth-child(1)').fadeTo(4000, 0.3);
       $('#pinchArea').show();
 animKing();
 animStar();
console.log(firstScenePart +"hello")

    }





});






