!function (e) {
    "use strict";
    $.scrollIt({

        easing: 'swing',      // the easing function for animation
        scrollTime: 900,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: -70,
        upKey: 38,                // key code to navigate to the next section
        downKey: 40          // key code to navigate to the previous section

    });
    function t() {
        var t = e(".main-menu .nav > li > ul"), s = e(".main-menu .nav > li > ul ul");
        t.each(function () {
            e(window).width() > 991 && e(this).offset().left + e(this).width() > e(window).width() && e(this).css({
                left: "auto",
                right: "0"
            })
        }), s.each(function () {
            e(window).width() > 991 && e(this).offset().left + e(this).width() > e(window).width() && e(this).css({
                left: "auto",
                right: "100%"
            })
        })
    }

    e('ul.nav li a[href="#"]').on("click", function (e) {
        e.preventDefault()
    }), e("#menu-button").on("click", function () {
        e("#mobile_menu, .offcanvas-overlay").addClass("opened")
    }), e(".offcanvas-close, .offcanvas-overlay").on("click", function () {
        e("#mobile_menu, .offcanvas-overlay").removeClass("opened")
    }), e(".header-main .main-menu").find("ul li").parents(".main-menu ul li").addClass("has-sub-item"), e(".header-main .main-menu > ul > li").removeClass("has-sub-item"), e(".panel .mobile-main-menu").find("ul li").parents(".mobile-main-menu ul li").addClass("has-sub-menu"), e(".panel .mobile-main-menu").find(".has-sub-menu").prepend('<span class="submenu-button"></span>'), e(".mobile-main-menu").find(".submenu-button").on("click", function (t) {
        e(this).toggleClass("sub-menu-oppened"), e(this).siblings("ul").hasClass("open") ? e(this).siblings("ul").removeClass("open").slideUp("200") : e(this).siblings("ul").addClass("open").slideDown("200")
    }), e(window).on("scroll", function () {
        e(window).scrollTop() < 100 ? e(".header-main.love-sticky").removeClass("sticky fadeInDown animated") : e(".header-main.love-sticky").addClass("sticky fadeInDown animated")
    }), t(), e(window).resize(t);

    var i = e(".pos-device");
    e(".banner").mousemove(function (e) {
        var t = -.2 * e.pageX / 12, s = -.2 * e.pageY / 12;
        i.css({transform: "translate3d(" + t + "px, " + s + "px,0)", "transform-style": "preserve-3d"})
    });
    var n = e(".printer");
    if (n.length) {
        var o = n.position().left, l = n.offset().top, r = e(window).height();
        e(window).on("scroll", function () {
            var t = .14 * (e(this).scrollTop() + r - l) + (o - 115);
            t <= 0 && n.css({left: t, position: "relative"})
        })
    }
    var c = e(".filt-monthly"), d = e(".filt-yearly"), m = e(".switcher"), u = e(".monthly"), p = e(".yearly");
    c.on("click", function () {
        m.prop("checked", !1), c.addClass("toggler--is-active"), d.removeClass("toggler--is-active"), u.removeClass("hide"), p.addClass("hide")
    }), d.on("click", function () {
        m.prop("checked", !0), d.addClass("toggler--is-active"), c.removeClass("toggler--is-active"), u.addClass("hide"), p.removeClass("hide")
    }), m.on("click", function () {
        d.toggleClass("toggler--is-active"), c.toggleClass("toggler--is-active"), u.toggleClass("hide"), p.toggleClass("hide")
    }), e(function () {
        e(".pkg-list, .single-service.style--two").on("mouseenter", function (t) {
            var s = e(this).offset(), a = t.pageX - s.left, i = t.pageY - s.top;
            e(this).find(".span").css({top: i, left: a})
        }).on("mouseout", function (t) {
            var s = e(this).offset(), a = t.pageX - s.left, i = t.pageY - s.top;
            e(this).find(".span").css({top: i, left: a})
        })
    });
    if($('.preloader').length){
        $('.preloader').delay(200).fadeOut(500);
    }
    e(window).on("load", function () {
        e(".preloader").fadeOut(500)
    });
    var Y, z, U, W, j, F, V, P = e(".back-to-top");
    if (P.length) {
        var R = function () {
            e(window).scrollTop() > 400 ? P.addClass("show") : P.removeClass("show")
        };
        R(), e(window).on("scroll", function () {
            R()
        }), P.on("click", function (t) {
            t.preventDefault(), e("html,body").animate({scrollTop: 0}, 700)
        })
    }
    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    });



    var totalItems = $('.carousel-item').length;
    var currentIndex = $('.carousel-item.active').index() + 1;
    $('.current').html(currentIndex);
    $('.total').html(totalItems)
    // $('.num').html('' + currentIndex + '/' + totalItems + '');


    $('#bannerSlider').carousel({
        interval: 5000
    });

    $('#bannerSlider').bind('slide.bs.carousel', function() {
        currentIndex = $('.carousel-item.active').index() + 1;
        $('.current').html(currentIndex);
        $('.total').html(totalItems)
    });

    (function ($, window, document, undefined) {
        $('.inputfile').each(function () {
            var $input = $(this),
                $label = $input.next('label'),
                labelVal = $label.html();
            $input.on('change', function (e) {
                var fileName = '';
                if (this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else if (e.target.value)
                    fileName = e.target.value.split('\\').pop();
                if (fileName) {
                    $label.find('.archive-name').html(fileName);
                    $label.find('.archive-name2').html(fileName);
                    $label.find('.btn-inputfile').html('');
                } else
                    $label.html(labelVal);
            });

            // Firefox bug fix
            $input
                .on('focus', function () {
                    $input.addClass('has-focus');
                })
                .on('blur', function () {
                    $input.removeClass('has-focus');
                });
        });
    })(jQuery, window, document);


    function smoothScroll() {
        $('.navbar .nav-item .nav-link, .smooth-scroll  a').on('click', function (event) {
            var $anchor = $(this);
            var headerH = '5';
            $('.header').outerHeight();
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
        $.extend($.easing, {
            easeInOutExpo: function (t, e, i, n, s) {
                return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
            },
        });
    }

    smoothScroll();

    /* testimonials-3 */
    $('.testimonials-3 .owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 700,
        dots: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $(document).ready(function () {
        $(".js-example-basic-single").select2();
    });

}(jQuery);