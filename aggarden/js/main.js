$(document).ready(function () {

    // Nav btn click
    $('.header__nav-btn').click(function () {
        $(this).toggleClass('toggled');
        $('body, .header__nav, .mask').toggleClass('toggled');
    });

    // Nav mask click
    $('.mask').click(function () {
        $(this).toggleClass('toggled');
        $('body, .header__nav, .header__nav-btn').toggleClass('toggled');
    });
    // Btn for request modal click
    $('*[data-action="request-modal"]').click(function () {
        $('body, .request-modal, .request-mask').toggleClass('toggled');
    });

    // Request mask click
    $('.request-mask').click(function () {
        $(this).toggleClass('toggled');
        $('body, .request-modal').toggleClass('toggled');
    });

    // Accordeon menu
    let AccordionMenu = function (selector) {
        this.colMenu = document.querySelectorAll(`${selector} li`);
        let This = this;
        this.colMenu.forEach(function (items) {
            if (items.querySelector('ul')) {
                items.firstElementChild.insertAdjacentHTML('beforeend', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 451.847 451.847" xml:space="preserve"> <g> <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/> </g> </svg>');

                items.firstElementChild.onclick = function (e) {
                    e.preventDefault();

                    let isTrue = this.parentElement.classList.toggle('open');

                    if (isTrue) {
                        This.show(this.nextElementSibling);
                    } else {
                        This.hide(this.nextElementSibling);
                    }
                }
            }
        })
    }

    // Show an element
    AccordionMenu.prototype.show = function (elem) {
        // Get the natural height of the element
        var getHeight = function () {
            elem.style.display = 'block'; // Make it visible
            var height = elem.scrollHeight + 'px'; // Get it's height
            return height;
        };

        var height = getHeight(); // Get the natural height
        elem.style.height = height; // Update the height

        setTimeout(function () {
            elem.style.height = 'auto';
        }, 350);
    };
    AccordionMenu.prototype.hide = function (elem) {
        // Give the element a height to change from
        elem.style.height = elem.scrollHeight + 'px';

        // Set the height back to 0
        setTimeout(function () {
            elem.style.height = '0';
        }, 110);

        setTimeout(function () {
            elem.style.display = '';
        }, 700);
    };
    new AccordionMenu('.accordion-menu');


    // Youtube
    (function () {

        var youtube = document.querySelectorAll(".youtube");

        for (var i = 0; i < youtube.length; i++) {

            var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

            var image = new Image();
            image.src = source;
            image.addEventListener("load", function () {
                youtube[i].appendChild(image);
            }(i));

            youtube[i].addEventListener("click", function () {

                var iframe = document.createElement("iframe");

                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

                this.innerHTML = "";
                this.appendChild(iframe);
            });
        }
        ;

    })();


    // Header scroll
    var c, currentScrollTop = 0,
        navbar = $('.header');
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
        currentScrollTop = a;
        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("header_scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("header_scrollUp");
        }
        c = currentScrollTop;
    });

});
