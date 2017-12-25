$(document).ready(function () {

    if (window.matchMedia("(max-width: 1170px)").matches) {

        $('.header__menu-toggler').click(function (e) {
            $('html, body, .content-wrap, .header-side-nav, .mask').toggleClass('toggled');
        });

        $('.header-side-nav__menu-toggler').click(function (e) {
            $('html, body, .content-wrap, .header-side-nav, .mask').toggleClass('toggled');
        });

        $('body').swipe({
//            swipeLeft:function() {
//                $('.content-wrap, .header-side-nav').toggleClass('toggled');
//            },
            swipeRight: function () {
                if (!$('body').hasClass('toggled')) {
                    $('html, body, .content-wrap, .header-side-nav, .mask').toggleClass('toggled');
                }
            }
        });

        $('.mask').swipe({
            swipeLeft: function () {
                $('html, body, .content-wrap, .header-side-nav, .mask').toggleClass('toggled');
            },
            tap: function () {
                if ($('.content-wrap').hasClass('toggled')) {
                    $('html, body, .content-wrap, .header-side-nav, .mask').toggleClass('toggled');
                }
            }
        });
    }

});
