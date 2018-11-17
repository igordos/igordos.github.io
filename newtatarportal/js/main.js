$(document).ready(function () {

    $('.search-input__select, .search-input__input').focus(function () {
        // $('.search-input').css('outline', 'none !important')
        //     .focus();
    });

    var newArrivalSwiper = new Swiper('.swiper-container-news-arrival', {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination-news-arrival',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-news-arrival',
            prevEl: '.swiper-button-prev-news-arrival',
        },
        breakpoints: {
            1300: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 1,
            },
        }
    });

    var eventSwiper = new Swiper('.swiper-container-event', {
        spaceBetween: 0,
        slidesPerView: 1,
        mousewheel: true,
        loop: true,
        // freeMode: true,
        pagination: {
            el: '.swiper-pagination-event',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-event',
            prevEl: '.swiper-button-prev-event',
        },
    });

    // Nav btn click
    $('.header__nav-btn').click(function () {
        $(this).toggleClass('toggled');
        $('body, .nav-wrap, .nav-mask').toggleClass('toggled');
    });

    // Nav mask click
    $('.nav-mask').click(function () {
        $(this).toggleClass('toggled');
        $('body, .nav-wrap, .header__nav-btn').toggleClass('toggled');
    });

});
