function makeVelocityCalculator(e_init, callback) {
    var sphere = document.getElementById("sphere");
    var spherePos= ($('#sphere').offset().left);
    var x = e_init.spherePos,
    
        t = Date.now();
    return function(e) {
        var new_x = e.spherePos,

          
            new_t = Date.now(); 
        var x_dist = new_x - x,
      
            interval = new_t - t;
        var velocity = Math.sqrt(x_dist*x_dist)/interval;
        callback(velocity);
    };
}
$(document).ready(function() {

    var box = $('#sphere').ready (function(e) {
        var log = makeVelocityCalculator(e, function(v) {
             console.log(v + "speed");
        });

        $("#sphere").on("mousemove", log).one("mouseup", function(){
            $(document).off("mousemove", log);
            box.text("");
        });
    });
});