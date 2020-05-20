"use strict"; // Start of use strict

function bootstrapAnimatedLayer() {
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = "webkitAnimationEnd animationend";

        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data("animation");
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $("#mainSlider"),
        $firstAnimatingElems = $myCarousel
        .find(".carousel-item:first")
        .find("[data-animation ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel({
        interval: 10000
    });

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function(e) {
        var $animatingElems = $(e.relatedTarget).find(
            "[data-animation ^= 'animated']"
        );
        doAnimations($animatingElems);
    });
}

function owlCarouselActivation() {
    if ($(".banner-carousel").length) {
        $(".banner-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 12000,
            loop: true,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            pagination: true,
            mouseDrag: false,
            pullDrag: false,
            freeDrag: false,
            touchDrag: false,
            margin: 0,
            stagePadding: 0,
            smartSpeed: 1000,
            dotsEach: true,
            items: 1,
            nav: true,
            navElement: "span",
            navText: [
                "<span class='fa fa-long-arrow-left wave'></span>",
                "<span class='fa fa-long-arrow-right wave'></span>"]
        })
    };
    if ($(".testimony").length) {
        $(".testimony").owlCarousel({
            autoplay: true,
            autoplayTimeout: 10000,
            loop: true,
            animateOut: 'zoomOut',
            animateIn: 'flipInX',
            pagination: false,
            mouseDrag: false,
            pullDrag: false,
            freeDrag: false,
            touchDrag: false,
            margin: 0,
            stagePadding: 0,
            smartSpeed: 1000,
            items: 1,
            nav: true,
            navElement: "span",
            navText: [
                "<span class='fa fa-long-arrow-left ratingBtn'></span>",
                "<span class='fa fa-long-arrow-right ratingBtn'></span>"]
        })
    };

    // team-carousel
    if($('.team-carousel').length) {
        $('.team-carousel').owlCarousel({
            autoplay: true,
            autoplayTimeout: 10000,
            navSpeed: 1000,
            loop: true,
            autoplayHoverPause: true,
            pagination: false,
            smartSpeed: 1000,
            margin: 15,
            stagePadding: 0,
            items: 4, 
            nav: true,
            navElement: "span",
            navText: [
                "<span class='wave bg1 text-white team-btn fa fa-long-arrow-left'></span>",
                "<span class='wave bg1 text-white team-btn fa fa-long-arrow-right'></span>"
            ],
            responsive : {
                0 : {
                    items: 1,
                    stagePadding: 15
                },
                400 : {
                    items: 2,
                    stagePadding: 15
                },
                700 : {
                    items: 3,
                    stagePadding: 15
                },
                992 : {
                    items: 4,
                    stagePadding: 0
                }
            }
        });
    };
}

function wowActivation() {
// Activation of WOW
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    };
}

// counterUpInit
function counterUpInit() {
    if (jQuery('.counter').length) {
        jQuery('.counter').counterUp({
            delay: 20,
            time: 5000
        });
    }
}

// Waves.js
function WavesActivation() {
    if (jQuery('.wave, .wave-round').length) {
        new Waves.init();
        Waves.attach('.wave', ['waves-float', 'waves-light']);
        Waves.attach('.wave-round', ['waves-float', 'waves-circle', 'waves-light']);
    };
}

function backToTop() {
    if($('.back2Top').length) {
        $('.back2Top').on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 500)
        });
    };
}

function backToTopVisible() {

// back to top button will be visible
     if ($('.back2Top').length) {
        if ($(window).scrollTop() > 300) {
            $(".back2Top").addClass("totop");
        } else {
            $(".back2Top").removeClass("totop");
        }
    };
}

// function preLoaderActivation() {
//     if($('body').length) {
//         $("body").queryLoader2({
//             barColor: "#a41cc4",
//             backgroundColor: "#fff",
//             percentage: true,
//             deepSearch: false,
//             barHeight: 5,
//             minimumTime: 1000,
//             fadeOutTime: 800
//         });
//     };
// }

function tilt() {
    if($('.service-card').length) {
        $('.service-card').tilt({
            glare: true,
            maxGlare: .5,
            transition: false,
            maxTilt: 10
        });
    };
}



function mainMenu() {
    // main menu activation
    if($("a[rel='m_PageScroll2id']").length) {    
            $("a[rel='m_PageScroll2id']").mPageScroll2id({
                highlightClass:"active"
        });
    };
}
 
  
function fixedNav() {
    if ($(".main-nav").length) {
        if ($(window).scrollTop() > 60) {
            $(".main-nav").addClass("fixed-nav")
        } else {
            $(".main-nav").removeClass("fixed-nav")
        }
    }
}

function StickySidebar() {
    if ($('.fixedToBottom').length) {
        $('.fixedToBottom').theiaStickySidebar({
            'additionalMarginBottom': 30,
            'additionalMarginTop': 20,
            'sidebarBehavior': 'stick-to-bottom'
        });
    }
}

// hamburger
function hamburger() {
    if($(".hamburger").length) { 
        var hamburger = $(".hamburger");
            hamburger.on("click", function() {
            $(this).toggleClass("is-active");

            $('.navbar-nav li a[rel="m_PageScroll2id"] ').on('click', function(e) {
                e.preventDefault();
                $('.navbar-collapse').removeClass('show');
                $('.hamburger').removeClass('is-active');
            });
        });
    }
}

// filterizr Activation
function filterizrActivation() {
    if($('.filtr-container').length){
        var filterizd = $('.filtr-container').filterizr({
           layout: 'packed'
        });

        $('.filter-list li.filter').on('click', function() {
          $('.filter-list li.filter').removeClass('active');
            $(this).addClass('active');
        });
    };
}

// instance of fuction while Document ready event   
jQuery(document).on('ready', function() {
    (function($) {
        // preLoaderActivation();
        tilt();
        WavesActivation();
        backToTop();
        wowActivation();
        counterUpInit();
        owlCarouselActivation();
        bootstrapAnimatedLayer();
        StickySidebar();
        hamburger();

        var $navi = $(".main-nav"), scrollTop = 0;
          $(window).scroll(function () {
            var y = $(this).scrollTop(), speed = 0.05, pos = y * speed, maxPos = 110;
            if (y > scrollTop) {
              pos = maxPos;
            } else {
              pos = 0; 
            }
            scrollTop = y;
            $navi.css({
              "-webkit-transform": "translateY(-" + pos + "%)",
              "-moz-transform": "translateY(-" + pos + "%)",
              "-o-transform": "translateY(-" + pos + "%)",
              "transform": "translateY(-" + pos + "%)"
            });
          });
    })(jQuery);
});


// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {   
    (function ($) {
        fixedNav();
        backToTopVisible();
    })(jQuery);
});


// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        mainMenu();
        filterizrActivation();
    })(jQuery);
});

// enllax.js
$(window).enllax();

var myTitleWrapper = $('.setrlimit');
myTitleWrapper.each(function () {
  var Self = $(this);
  var myTitleText = Self.text();
  var myCount = Self.data('limit-count');
  if (myTitleText.length > myCount) {
    $(this).empty();
    $(this).text(myTitleText.substring(0,myCount) + '...');
  }
});

/*========================================================================== 
======================== Custom script for altra end ===================
============================================================================*/