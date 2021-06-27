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


var mySong3 = document.getElementById("mySong3");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong3.pause){
        mySong3.play();
        icon.src = "images/pause.png";
    }
    else{
    mySong3.pause();
    icon = "images/play.png";
    }
}