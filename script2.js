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

    // chữ chuyển đổi :v
    var typed = new Typed(".typing-2" , {
        strings: ["cùi bắp" , "chán đời" , "ngu" , "thích nhạc và mưa :v"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

});


var mySong2 = document.getElementById("mySong2");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong2.pause){
        mySong2.play();
        icon.src = "images/pause.png";
    }
    else{
    mySong2.pause();
    icon = "images/play.png";
    }
}