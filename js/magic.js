


$(document).ready(function() {
 
 document.body.addEventListener('touchmove', function(event) {
  event.preventDefault();
}, false); 


var maxRot = 20;
var starDragable = 1;
 	
	if (starDragable =1) {

        $('.pep').pep({
        	axis: "x",
          droppable: '.droppable',
          overlapFunction: false,
          useCSSTranslation: false,
          shouldEase: false,
          start: function(ev, obj){
            obj.noCenter = false;
          },
          drag: function(ev, obj){
            var vel = obj.velocity();
            // document.getElementById("pep").style.width = '50px';
            var rot = (vel.x)/2;
            if (rot >maxRot) {rot =maxRot};
            if (rot <-maxRot) {rot =-maxRot};
            rotate(obj.$el, rot);
 positionCheck ();

          },
          stop: function(ev, obj){
            rotate(obj.$el, 0);
          },
          rest: handleCentering

        });

        function handleCentering(ev, obj){
          console.log(obj.activeDropRegions.length);
          if ( obj.activeDropRegions.length > 0 ) {
            centerWithin(obj);
          }
        }

        function centerWithin(obj){
          var $parent = obj.activeDropRegions[0];
          var pTop    = $parent.position().top;
          var pLeft   = $parent.position().left;
          var pHeight = $parent.outerHeight();
          var pWidth  = $parent.outerWidth();

          var oTop    = obj.$el.position().top;
          var oLeft   = obj.$el.position().left;
          var oHeight = obj.$el.outerHeight();
          var oWidth  = obj.$el.outerWidth();

          var cTop    = pTop + (pHeight/2);
          var cLeft   = pLeft + (pWidth/2);

          if ( !obj.noCenter ) {
            if ( !obj.shouldUseCSSTranslation() ) {
              var moveTop = cTop - (oHeight/2);
              var moveLeft = cLeft - (oWidth/2);
              obj.$el.animate({ top: moveTop, left: moveLeft }, 50);
            } else{
              var moveTop   = (cTop - oTop) - oHeight/2;
              var moveLeft  = (cLeft - oLeft) - oWidth/2;
              obj.moveToUsingTransforms( moveTop, moveLeft );
            }

            obj.noCenter = true;
            return;
          }

          obj.noCenter = false;
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
    };



	
  // $('.pep.x').pep({ axis: 'x', debug: true,  useCSSTranslation: false });

	
var sphere = document.getElementById("sphere");
var distAB =  0;


function positionCheck(){

distAB = (($('#in-zone').offset().left)-($('#starStar_01').offset().left));

// console.log (($('#starStar_01').offset().left));
// console.log (($('#in-zone').offset().left));
// console.log (distAB);



	if ( (distAB) <= 50)  {
	console.log ("In");
	// $('#in-zone').css("background-color", "yellow");
	// $('#in-zone').css("display", "none");
	// $('#troll').show('slow');
	$('#starStar_01').css("left", '656px');
	starDragable = 0;
	$('#starText_01 > li:nth-child(2)').fadeTo(2000, 1);
	$('#starText_01 > li:nth-child(1)').fadeTo(3000, 0.5);
	} 
	else {
			// console.log ("Out");
	// $('#in-zone').css("background-color", "black");
		$('#troll').css("display", "none");
	}

}










      });






