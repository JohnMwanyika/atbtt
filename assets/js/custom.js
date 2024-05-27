$(function () {

    // ============================================================== 
    //Fix header while scroll
    // ==============================================================  
    var wind = $(window);
    wind.on("load", function () {
        var bodyScroll = wind.scrollTop();
        var navbar = $(".topbar");
        var categorySlider = $(".filterSlider");
        // var phoneFooter = $(".phoneFooter");
        console.log(wind)
        if (bodyScroll > 40) {
            navbar.addClass("fixed-header")
            if (bodyScroll > 200) {
                categorySlider.addClass(("fixed-header"))
                // phoneFooter.addClass(("sticky-bottom"))
            }
        } else {
            navbar.removeClass("sticky-top")
        }
    });

    // $('ul.dropdown-menu [data-bs-toggle="dropdown"]').on('click', function (event) {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     $(this).siblings().toggleClass('show');

    //     if (!$(this).next().hasClass('show')) {
    //         $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    //     }

    //     $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
    //         $('.dropdown-submenu .show').removeClass('show');
    //     });
    // });

    let lastScrollTop = 0;
    $(window).scroll(function () {
        const scrollTop = $(window).scrollTop();

        if (scrollTop > lastScrollTop) {
            $('.phoneFooter').addClass('stackBottom');
        } else {
            $('.phoneFooter').removeClass('stackBottom');
        }

        lastScrollTop = scrollTop;

        if (scrollTop >= 200) {
            $('.topbar').addClass('fixed-header');
            $('.filterSlider').addClass('stackTop');
            $('.topbar').removeClass('border-bottom');
            // $('.filterSlider').removeClass('border-top');
        } else {
            $('.topbar').removeClass('fixed-header');
            $('.filterSlider').removeClass('stackTop');
        }
    });




    $('.product-item').isotope({
        itemSelector: '.product-desc',
        layoutMode: 'fitRows'
    });

    $('.product-tab ul li a').click(function () {
        $('.product-tab ul li a').removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $('.product-item').isotope({
            filter: selector
        });

        return false
    });

    // ============================================================== 
    //Featured Property Carousel
    //

    // $('.featured-property-carousel').owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     nav: false,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     dots: true,
    //     autoplay: true,
    //     center: true,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 3
    //         }
    //     }
    // });

    // $('.testimonial-carousal').owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     nav: false,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     dots: true,
    //     autoplay: false,
    //     center: true,
    //     responsiveClass: true,
    //     autoHeight: false,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 1,
    //             center: false
    //         },
    //         1024: {
    //             items: 1,
    //         }
    //     }
    // });

    // $('.testimonial-carousal-st2').owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     nav: false,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     dots: false,
    //     autoplay: true,
    //     // center: true,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 2,
    //             center: false
    //         },
    //         1024: {
    //             items: 3,
    //         }
    //     }
    // });

    // $('.v1-banner-carousel').owlCarousel({
    //     animateOut: 'fadeOut',
    //     loop: true,
    //     margin: 30,
    //     nav: false,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     dots: false,
    //     autoplay: true,
    //     center: true,
    //     smartSpeed: 450,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 1,
    //             center: false
    //         },
    //         1024: {
    //             items: 1,
    //         }
    //     }

    // });

    // $('.v2-banner-carousel').owlCarousel({
    //     animateOut: 'fadeOut',
    //     loop: true,
    //     margin: 30,
    //     nav: false,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     dots: false,
    //     autoplay: true,
    //     center: true,
    //     smartSpeed: 450,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 1,
    //             center: false
    //         },
    //         1024: {
    //             items: 1,
    //         }
    //     }

    // });

    // $('.property-img-carousal').owlCarousel({
    //     loop: true,
    //     margin: 3,
    //     dots: false,
    //     nav: true,
    //     navText: [$(".property-prev"), $(".property-next")],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 3
    //         }
    //     }
    // });


    // hero Section slider
    $('.heroSlider').slick({
        // autoplay: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.heroPrev'),
        nextArrow: $('.heroNext'),
        // appendDots: $('.heroSlider'),
    })
    // ICON SLIDER
    $('.categorySlider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        prevArrow: $('.categoryPrev'),
        nextArrow: $('.categoryNext'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 230,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    $('.imageSlider').slick({
        arrows: true,
        autoplay: true,
        nextArrow: `<button class="slick-next"></button>`
    });

});