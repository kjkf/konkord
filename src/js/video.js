
$('.video-item').parent().click(function () {
    if($(this).children(".video-item").get(0).paused){
        $(this).children(".video-item").get(0).play();
        $(this).children(".playpause").fadeOut();
        $('#videoCarousel').carousel('pause');
    }else{
        $(this).children(".video-item").get(0).pause();
        $(this).children(".playpause").fadeIn();
        //$('#videoCarousel').carousel('play');
    }
});