$(function () {

    //GLOBAL VARIBALES
    var root = $('html, body'),
        bdy = $("body"),
        navMain = $("nav.main-navbar"),
        navMobile = $("nav .navbar-mobile-menu-wrapper"),
        backToTopButton = $(".back-to-top"),
        optionBoxWraper = $(".option-box .options-wraper"),
        navHeight = navMain.innerHeight();




    /*                   START GENERAL FUNCTIONS                   */

    $(bdy).scrollspy({
        target: navMain,
        offset: navHeight
    });

    // 1- Start Smooth Scrolling To page Sections

    $(".navbar .nav-link").on('click', function (e) {
        var link = $(this).attr("href")

        if (link.charAt(0) === "#") {
            e.preventDefault();
            var target = this.hash;
            $(root).animate({
                scrollTop: $(target).offset().top - navHeight + 1

            }, 500);

        }
    });

    //End Smooth Scrolling To page Sections


    //initialize swiper [testmonial Section] when document ready
    var testmonialsSlider = new Swiper('.testmonials .swiper-container', {
        // Optional parameters
        speed: 500,
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 30,
        delay: 5000,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            // showing only 3 logo items in screens smaller than 991px wide
            991: {
                slidesPerView: 1
            }
        },



        navigation: {
            nextEl: '.testmonials .swiper-button-next', prevEl: '.testmonials .swiper-button-prev',
        }
    }
    );


    //initialize swiper [clients Section] when document ready
    var partenersSlider = new Swiper('.our-clients .swiper-container', {
        // Optional parameters
        speed: 600,
        loop: true,
        spaceBetween: 30,
        grabCursor: true,
        delay: 5000,
        autoplay: {
            delay: 5000,
        }
        , //showing 6 logo items in screen larger than 991px wide
        slidesPerView: 6,
        breakpoints: {
            // showing only 3 logo items in screens smaller than 991px wide
            991: {
                slidesPerView: 3
            }
        }
        ,
    }

    );



    //2- Start Smooth Scrolling To Window Top When Clicking on Back To Top Button
    $(backToTopButton).on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    }); //End Smooth Scrolling To Window Top When Clicking on Back To Top Button



    $(window).on('scroll', function () {



        //Start show/hide back to top button
        if ($(this).scrollTop() > 50) {
            backToTopButton.fadeIn(600)
        }
        else {
            backToTopButton.fadeOut(600);
        } //End show/hide back to top button
    }
    );
    /*              End Window scroll functions               */



    // gallery fancy box initializer
    $().fancybox({
        selector: '[data-fancybox=".filter"]:visible', loop: true, buttons: ['zoom', 'close'],
    }
    );




    /*             Start Images Filter              */
    $('.gallery .filter-btn').on('click', function () {
        //add .activ class on the clicked .filter-btn and remove it from other .filter-btns
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('target') == '.all') {
            //showing all thumbials pictures in the gallery
            $('.filter-group a.pic-link, .filter-group .info-link').removeClass('disabled-element').addClass('enabled-element');
            $('.filter-group a.pic-link').attr('data-fancybox', '.filter');
        }
        else {
            //showing specific thumbials pictures in the gallery acording to the btn clicked
            //1- disable all pic-links
            $('.filter-group  .pic-link').removeClass('enabled-element').addClass('disabled-element').attr('data-fancybox', ''); //2- disable all .hidden-info link
            $('.filter-group  .hidden-info').removeClass('enabled-element').addClass('disabled-element'); //3- enable only the choosen pic-links
            $($(this).data('target')).removeClass('disabled-element').addClass('enabled-element').attr('data-fancybox', '.filter'); //4- enable only the .hidden-info div of the choosen pic-links
            $($(this).data('target')).siblings('.hidden-info').removeClass('disabled-element').addClass('enabled-element');
        }
    }
    );
    /*               End Images Filter              */

});