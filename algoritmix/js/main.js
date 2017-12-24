$(document).ready(function () {
    $('.header__menu-toggler').click(function (e) {
        $('.content-wrap, .header-side-nav').toggleClass('toggled');
        e.preventDefault();
    });

    $('body').swipe({
//            swipeLeft:function() {
//                $('.content-wrap, .header-side-nav').toggleClass('toggled');
//            },
        swipeRight:function() {
            $('.content-wrap, .header-side-nav').toggleClass('toggled');
        }
    });

    $('.content-wrap').swipe({
        tap:function() {
            if($('.content-wrap').hasClass('toggled')) {
                $('.content-wrap, .header-side-nav').toggleClass('toggled');
            }
        },
    });

});
