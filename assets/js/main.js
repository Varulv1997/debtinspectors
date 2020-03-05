(function($) {
    "use strict";


    jQuery(document).ready(function($) {

        // wow js initialization
        new WOW().init();

        
        // banner carousel
        $('.banner-carousel').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 2000,
            dots: true,
            nav: false,
            mouseDrag: true,
            smartSpeed: 2000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        });

        // ripple effect initialization
        if ($("#rippleEffect").length > 0) {
            $('#rippleEffect').ripples({
                resolution: 500,
                dropRadius: 20,
                perturbance: 0.04
            });
        }        

        // background video initialization
        if ($("#bgndVideo").length > 0) {
            $("#bgndVideo").YTPlayer();
        }        
        
        // testimonial carousel
        var testimonialCarousel = $('.testimonial-slider');
        testimonialCarousel.owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 30,
            autoplay: true,
            smartSpeed: 3000,
            startPosition: 2,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1920: {
                    items: 2
                }
            }
        });

        // brand carousel
        var brandCarousel = $('.brand-slider');
        brandCarousel.owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            margin: 30,
            autoplay: true,
            smartSpeed: 3000,
            startPosition: 2,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                992: {
                    items: 5
                },
            }
        });

        
        // Project ss carousel
        var projectCarousel = $('.project-ss-carousel');
        projectCarousel.owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            autoplay: true,
            items: 1
        });
        
        
        // language dropdown toggle on clicking button
        $('.language .dropdown-btn').on('click', function(event) {
            event.preventDefault();
            $(this).next('.language-dropdown').toggleClass('open');
        });

        // Back to top
        $('.back-to-top').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });

        // search popup show
        $("a.search-button, li.search-icon a").on('click', function(e) {
            e.preventDefault();
            $(".search-popup").addClass('popup');
        });

        // search popup remove
        $("#searchCloseBtn, .search-popup-overlay").on('click', function() {
            $(".search-popup").removeClass('popup');
        });

    });
    

    $(window).on('scroll', function() {
        // sticky menu activation
        if ($(window).scrollTop() > 180) {
            $('.header').addClass('sticky-navbar');
        } else {
            $('.header').removeClass('sticky-navbar');
        }
        // back to top button fade in / fade out
        if ($(window).scrollTop() > 1000) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });


    jQuery(window).on('load', function() {
        // preloader fadeout onload
        $(".loader-container").addClass('loader-fadeout');

        var $filterizr = $('.filterizr__elements');
        if ($filterizr.length) {
            var $filterizrControls = $('.filterizr__controls');
            $filterizr.filterizr();
            $filterizrControls.children('li').on('click', function() {
                $filterizrControls.find('li.active').removeClass('active');
                $(this).addClass('active');
            });
        }
    });




}(jQuery));