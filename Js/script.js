

$(document).ready(function() {



$('.webcam-backup').mouseenter(function() {
  $('.HoverHea').fadeTo('fast',0);
  $('.webcam-backup').fadeTo(1200,1);

});


$('.webcam-backup').mouseleave(function() {
  $('.webcam-backup').fadeTo('slow',0);


});



      $('.about-Logo').mouseenter(function() {
        $('.about-Logo').fadeTo('slow',1);
});
    $('.about-Logo').mouseleave(function() {
       $('.about-Logo').fadeTo('slow',0.6);   
    });


        $('.navbar-brand').mouseenter(function() {
        $('.navbar-brand').fadeTo('slow',1);
});
    $('.navbar-brand').mouseleave(function() {
       $('.navbar-brand').fadeTo('slow',0.6); 
        
    });

 $('.navbar-brand').click(function() {
        $('body').fadeOut(900).delay(800, function(){
            window.location.href = 'index.html';
        });


});
// $('.featureImg').click(function() {
//   $('body').fadeTo('slow',0).delay(600, function(){
//             // window.location.href = 'Index.html';
//         });

$('.submitHelp').one("click",function() {
  $('.emailNumPos').fadeOut(800);
  $('.emailAdmin').fadeOut(800,function() {

$("<p class='thankyouMessage-first'> Thank you for your patience.</p>").appendTo("div .emailAdmin-Placeholder").fadeTo(1200,0.8, function(){

$("<p class='thankyouMessage'> Hopefully we can resolve your enquiry. </p>").appendTo("div .emailAdmin-Placeholder").fadeTo(800,0.8);

  });
});
// return false;

});



$('.clickme2').click(function() {
  $('body').fadeOut(900).delay(800, function(){
            window.location.href = 'Register.html';
        });
});



$('#home').click(function() {
  $('body').fadeOut(4000).delay(800, function(){
            window.location.href = 'index.html';
        });
});



$('.sPos1').click(function() {
        $('#everythingSearch').fadeTo(900,0,function(){
          $('#eyeLogoSearch').fadeTo('slow',0.9, function(){
                      $('#eyeLogoSearch').fadeTo('slow',0, function(){
            window.location.href = 'Results.html';
        });
            });
          });

});


     


      $('.GMLogo').mouseenter(function() {
        $('.GMLogo').fadeTo('slow',1);
        $(".click").fadeTo('slow',0);
});
 
 $('.GMLogo').click(function() {
        // Awake = false;  
        $('.intro').fadeTo(900,0).delay(800,function(){
     
            // $(".wholePano").css("display", "inline");
            $('.wholePano').fadeTo(900,1);
               $('.intro').css("display", 'none');
            // $('.GMLogo2').fadeTo(7000,0.8);
  
                });
        });


$('#map-canvas').click(function() {
$('.GMLogo2').fadeTo(300,1, function () {
$('.panoOverlay2').fadeTo(300,0);
$('.dropit').fadeTo(300,0);
$('.GMLogo2').delay(200).fadeTo(500,0.2);

});

});

 



});






