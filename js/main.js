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
 
function contactFormValidation() {
    if ($('.contact-form').length) {
        $('.contact-form').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function(response) {
                    $(form).find('.form-result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                    console.log(response);
                });
                return false;
            }
        });
    }
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

function preLoaderActivation() {
    if($('body').length) {
        $("body").queryLoader2({
            barColor: "#ef233c",
            backgroundColor: "#041822",
            percentage: true,
            deepSearch: false,
            barHeight: 5,
            minimumTime: 1000,
            fadeOutTime: 800
        });
    };
}

function tilt() {
    if($('.tiltCard').length) {
        $('.tiltCard').tilt({
            glare: true,
            maxGlare: .2,
            transition: true,
            maxTilt: 1
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
        tilt();
        WavesActivation();
        backToTop();
        wowActivation();
        bootstrapAnimatedLayer();
        hamburger();
        contactFormValidation();

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
        preLoaderActivation();
        mainMenu();
        filterizrActivation();
    })(jQuery);
});

// enllax.js
$(window).enllax();

var myTitleWrapper = $('.strlenth');
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