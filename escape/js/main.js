$(document).ready(function () {

    // currentQuestion = 1;
    // questionList = $worksheetForm.data('question-list');
    // style = $worksheetForm.data('style');
    // $worksheetQuestion.html('');
    // $worksheetBtn.html('');
    // $worksheetForm.html(renderWorksheet());
    // $('#worksheet-wrap, #worksheet-question').toggleClass('toggled');

    // Run worksheet
    $('.page-service__btn').click(function (e) {
        // Set current question for btn click
        currentQuestion = 1;
        questionList = $worksheetForm.data('question-list');
        style = $worksheetForm.data('style');
        $worksheetQuestion.html('');
        $worksheetBtn.html('');
        $worksheetForm.html(renderWorksheet());
        $('#worksheet-wrap, #worksheet-question').toggleClass('toggled');
    });

    // Open menu
    $('.header-menu-btn').click(function (e) {
        $('.menu').toggleClass('toggled ' + 'menu_' + $(this).data('menu'));
        $('body, .header-menu-btn').toggleClass('toggled');
    });

    // Open contact
    $('.header-contact').click(function (e) {
        $('body, .contact').toggleClass('toggled');
    });

    // Initial config for modals contact form
    MicroModal.init({
        openTrigger: 'data-custom-open',
        disableScroll: false,
        awaitCloseAnimation: true
    });

    // Smooth scroll
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        }
                    });
                }
            }
        });

    // Elem in viewport
    $.fn.isFullyInViewport = function () {
        let elementTop = $(this).offset().top;
        let elementBottom = elementTop + $(this).outerHeight();

        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();

        return elementTop >= viewportTop && elementBottom <= viewportBottom;
    };

    // Animation chart
    $(window).on('resize scroll', function () {
        let $chartBar = $('.chart-resources__bar-lb');

        $chartBar.each(function () {
            if ($(this).isFullyInViewport()) {
                $(this).addClass('animate');
            } else {
                $(this).removeClass('animate');
            }
        });

    });


});
