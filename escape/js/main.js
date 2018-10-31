$(document).ready(function () {

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

        if ($('.contact').hasClass('toggled')) {
            $('.contact').removeClass('toggled');
            overlayContact = false;
        }

        if ($('.header-menu-btn').hasClass('toggled')) {
            overlayMenu = true; // var init in lescroll.min.js
        } else {
            overlayMenu = false;
        }

    });

    // Open contact
    $('.header-contact').click(function (e) {
        $('body, .contact, .header-contact').toggleClass('toggled');

        if ($('.menu, .header-menu-btn').hasClass('toggled')) {
            $('.menu, .header-menu-btn').removeClass('toggled');
            overlayMenu = false;
        }

        if ($('.header-contact').hasClass('toggled')) {
            overlayContact = true; // var init in lescroll.min.js
        } else {
            overlayContact = false;
        }

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

// Google map

let googleMapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }
];

let map;

function initMap() {
    let latLng = {lat: 55.7782821, lng: 37.5710249};
    map = new google.maps.Map(document.getElementsByClassName('map')[0], {
        center: latLng,
        zoom: 14,
        styles: googleMapStyle,
    });
    let marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'ESCAPE',
    });
}

