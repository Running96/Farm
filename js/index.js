$(function () {
    var timer;
    var index = 0;

    // home部分
    setInterval(function () {
        $('.home .row .carousel img').eq(index).css('display','block').siblings().css('display','none');
        $('.home .row .home-words p').eq(index).removeClass('home-p').addClass('transP').siblings().removeClass('transP').addClass('home-p');
        index++;
        if(index > 3){
            index = 0;
        }
    },5000);

    // nav点击事件
     $('.navbar-collapse ul li').click(function () {
         index = $(this).index();
         $(this).addClass("active").siblings().removeClass("active");
     });

     // 检测鼠标是否滚动
    // var h = $("html").scrollTop();
    // // console.log(h);
    // if( h >0 ) {
    //
    // }
    // alert($(document).height());
    // alert($(document).scrollTop());

    var num = 0;
    document.onmousewheel=function(){
        var h = ($(document).scrollTop());
        if ( h > 500){
            // $('.container .row div').addClass('animation');
            $('.container .row div').eq(num).addClass('animation').siblings().removeClass('animation');
            num ++;
            if(num > 20){
                num = 0;
            }
            // console.log(h);
            // console.log(num);
        }
    };

});
