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

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHover: true,
        responsive: {
            0:{
                items: 1,
                nav: false,
            },

            600:{
                items: 2,
                nav: false,
            },

            1000:{
                items: 3,
                nav: false,
            }
        }
    });

});

var mySong4 = document.getElementById("mySong4");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong4.pause){
        mySong4.play();
        icon.src = "images/pause.png";
    }
    else{
    mySong4.pause();
    icon = "images/play.png";
    }
}