
$('.video-item').parent().click(function () {
    console.log($(this).children(".video-item").get(0));
    console.log($(this).children(".video-item").get(0).paused);
    if($(this).children(".video-item").get(0).paused){
        console.log('play!!!');
        $(this).children(".video-item").get(0).play();
        $(this).children(".playpause").fadeOut();
        $('#videoCarousel').carousel('pause');
    }else{
        console.log('paused!!!');
        $(this).children(".video-item").get(0).pause();
        $(this).children(".playpause").fadeIn();
        //$('#videoCarousel').carousel('play');
    }
});