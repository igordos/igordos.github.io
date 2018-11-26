$(document).ready(function () {

    // Remove style attr content manager
    $(".content *").removeAttr("style");

    $(".search-input__select, .search-input__input").focus(function(){
        $(this).parent().addClass("search-input_focus");
    }).blur(function(){
        $(this).parent().removeClass("search-input_focus");
    })

    let newArrivalSwiper = new Swiper('.swiper-container-news-arrival', {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        mousewheel: true,
        autoplay: true,
        delay: 5000,
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

    let eventSwiper = new Swiper('.swiper-container-event', {
        spaceBetween: 0,
        slidesPerView: 1,
        mousewheel: true,
        loop: true,
        autoplay: true,
        delay: 10000,
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

    // Library detail image click
    $('.lib-detail__img, .lib-detail__img-wrap-icon').click(function () {
        $('.lib-detail__img').toggleClass('toggled');
    });

    // Library detail menu btn click
    $('#libraryMenuBtn').click(function () {
        $(this).toggleClass('toggled');
        $('.lib-nav-wrap').toggleClass('toggled');

        if ($('#libraryContactBtn,.lib-contact').hasClass('toggled')) {
            $('#libraryContactBtn,.lib-contact').removeClass('toggled');
        }
    });

    // Library detail menu btn click
    $('#libraryContactBtn').click(function () {
        $(this).toggleClass('toggled');
        $('.lib-contact').toggleClass('toggled');

        if ($('#libraryMenuBtn,.lib-nav-wrap').hasClass('toggled')) {
            $('#libraryMenuBtn,.lib-nav-wrap').removeClass('toggled');
        }
    });

    // Search page facet btn click
    $('#facetBtn').click(function () {
        $(this).toggleClass('toggled');
        $('body, .search-facet, .search-mask').toggleClass('toggled');
    });

    // Search page search mask click
    $('.search-mask').click(function () {
        $(this).toggleClass('toggled');
        $('body, .search-facet, #facetBtn').toggleClass('toggled');
    });

    $('#marcCardBtn').click(function () {
        $(this).toggleClass('toggled');
        $('.marc-card').toggleClass('toggled');
    });

    $('#recordNavBtn').click(function () {
        $(this).toggleClass('toggled');
        $('body, .record-booking, .record-mask').toggleClass('toggled');
    });

    $('.record-mask').click(function () {
        $(this).toggleClass('toggled');
        $('body, .record-booking, #recordNavBtn').toggleClass('toggled');
    });

});
