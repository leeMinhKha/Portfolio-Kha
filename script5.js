$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $('.navar').addClass("sticky");
        }
        else{
            $('.navar').removeClass("sticky");
        }
    });

    // toggle menu
    $('.menu-btn').click(function(){
        $('.navar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    }) ;

});

var mySong5 = document.getElementById("mySong5");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong5.pause){
        mySong5.play();
        icon.src = "images/pause.png";
    }
    else{
    mySong5.pause();
    icon = "images/play.png";
    }
}