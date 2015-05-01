var t1, t2, t3, t4, t5;



$(document).ready(function() {

$(function () {
    $('body').bind("tap", tapHandler);
        function tapHandler (event) 
        {
          $('#whiteFader').show().fadeTo(2000,1,function () {
             window.location.href = 'directory.html';
          });
          
        }
    });


});

