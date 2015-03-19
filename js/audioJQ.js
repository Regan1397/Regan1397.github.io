      $(document).ready(function() {
        var audioNWA = document.createElement('audio');
        audioNWA.setAttribute('src', 'audio/wutang.wav');
        var audioWu = document.createElement('audio');
        audioWu.setAttribute('src', 'audio/nwa.wav');
        // audioNWA.setAttribute('autoplay', 'autoplay');

        //audioNWA.load()
        $.get();
        audioNWA.addEventListener("load", function() {
        audioNWA.play();
        }, true);

            $.get();
        audioWu.addEventListener("load", function() {
        audioWu.play();
        }, true);


$('.playNWA').click(function() {
        audioNWA.play();
        audioWu.pause();
        });


        $('.pauseNWA').click(function() {
        audioNWA.pause();

        });




        $('.playWu').click(function() {
        audioWu.play();
        audioNWA.pause();
        });


        $('.pauseWu').click(function() {
        audioWu.pause();
        });


});
