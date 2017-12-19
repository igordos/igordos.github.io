$(document).ready(function () {

    $("#formContact").submit(function (e) {
        e.preventDefault();

        var msg = $(this).serialize();

        if (typeof yaCounter47079150 !== 'undefined') {
            yaCounter47079150.reachGoal('addToCart');
        }

        $.ajax({
            type: 'POST',
            url: '#',
            data: msg,
            success: function (data) {
                // $('#results').html(data);
                if (typeof yaCounter47079150 !== 'undefined') {
                    yaCounter47079150.reachGoall('purchase');
                }
                $('.form').removeClass('form_show');
                $('.lite-modal__after-send').addClass('lite-modal__after-send_show');
            },
            error: function (xhr, str) {
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    });


    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        // var $target = $(target);
                        // $target.focus();
                        // if ($target.is(":focus")) { // Checking if the target was focused
                        //     return false;
                        // } else {
                        //     $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        //     $target.focus(); // Set focus again
                        // }
                        // ;
                    });
                }
            }
        });

});
