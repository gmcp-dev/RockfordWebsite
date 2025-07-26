

/*
---------------------------
    Event Listeners
---------------------------
*/
// When document is ready
$(function() {

    // Active Owl Carousel
    $("#game-activities .owl-carousel").owlCarousel({
        autoPlay: true,
        goToFirst: false,
        items: 3,
        itemsDesktop: false,
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });
    $(".vehicles-suggest .owl-carousel").owlCarousel({
        autoPlay: true,
        items: 3,
        pagination: true,
        navigation: true,
        navigationText: [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ],
        itemsDesktop: false,
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
    });

    // Active Lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'disableScrolling': true
    });

    // Active Wow
    new WOW({animateClass: "animate__animated"}).init();

});

// When all images, including background images, are loaded
$(window).on("load", function() {
    $(".preloader").fadeOut();
});

// On scroll document
$(document).on("scroll", function() {
    // Setting to change main navbar background
    const $nav = $("#main-nav");
    const $topControl = $("#top-control");

    const lastScrollTop = $nav.attr("data-scroll") ?? $(document).scrollTop();
    const scrollTop = $(document).scrollTop();
    const scrollDirection = scrollTop >= lastScrollTop ? "down" : "up";
    

    if (scrollDirection == "up" && $nav.css("position") === "fixed" && scrollTop < 60) {
        $nav.attr("data-scroll-direction", scrollDirection);
        $nav.attr("data-scroll", $(document).scrollTop());

        $nav.css({
            height: "max-content",
            position: "absolute",
            background: "transparent",
            'box-shadow': "none"
        });

        // This disable top-control btn
        $topControl.css("opacity", 0);

        return;
    }

    if (scrollDirection == "down" && $nav.css("position") !== "fixed" && scrollTop > 80) {
        $nav.attr("data-scroll-direction", scrollDirection);
        $nav.attr("data-scroll", $(document).scrollTop());

        $nav.css({
            height: 0,
            opacity: 0,
            position: "fixed",
            background: "var(--secondary-color)",
            'box-shadow': "rgba(255, 255, 255, 0.1) 0px 1px 20px"
        }).animate({
            height: "90px",
            opacity: 1
        }, 500);

        // This enable top-control btn
        $topControl.css("opacity", 1);

        return;
    }

});



