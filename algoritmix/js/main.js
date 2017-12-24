$(document).ready(function () {

    if (window.matchMedia("(max-width: 1170px)").matches) {

        $('.header__menu-toggler').click(function (e) {
            $('html, .content-wrap, .header-side-nav').toggleClass('toggled');
        });

        $('body').swipe({
//            swipeLeft:function() {
//                $('.content-wrap, .header-side-nav').toggleClass('toggled');
//            },
            swipeRight: function () {
                $('html, .content-wrap, .header-side-nav').toggleClass('toggled');
            }
        });

        $('.content-wrap').swipe({
            tap: function () {
                if ($('.content-wrap').hasClass('toggled')) {
                    $('html, .content-wrap, .header-side-nav').toggleClass('toggled');
                }
            },
        });
    }

});
