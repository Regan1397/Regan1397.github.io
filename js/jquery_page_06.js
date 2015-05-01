var t1, t2, t3, t4, t5;



$(document).ready(function() {

$(function () {
    $('#img01').bind("tap", tapHandler);
        function tapHandler (event) 
        {
          $('#whiteFader').show().fadeTo(2000,1,function () {
             window.location.href = 'theBee.html';
          });
          
        }
});

$(function () {
    $('#img02').bind("tap", tapHandler);
        function tapHandler (event) 
        {
          $('#whiteFader').show().fadeTo(2000,1,function () {
             window.location.href = 'theStar.html';
          });
          
        }
});


$(function () {
    $('#img03').bind("tap", tapHandler);
        function tapHandler (event) 
        {
          $('#whiteFader').show().fadeTo(2000,1,function () {
             window.location.href = 'theRain.html';
          });
          
        }
});


$(function () {
    $('#img04').bind("tap", tapHandler);
        function tapHandler (event) 
        {
          $('#whiteFader').show().fadeTo(2000,1,function () {
             window.location.href = 'theBook.html';
          });
          
        }
});









});

