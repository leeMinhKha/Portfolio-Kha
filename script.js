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


var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong.pause){
        mySong.play();
        icon.src = "images/pause.png";
    }
    else{
    mySong.pause();
    icon = "images/play.png";
    }
}