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
    });

    // chữ chuyển đổi :v
    var typed = new Typed(".typing" , {
        strings: ["Lê Minh Kha" , "lập trình viên" , "đỉnh cao của sự điên khùng :v" , "thanh niên chán đời"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });


});


var mySong1 = document.getElementById("mySong1");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong1.pause){
        mySong1.play();
        icon.src = "images/pause.png";
    }
    else{
        mySong1.pause();
        icon = "images/play.png";
    }
}