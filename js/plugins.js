$(function () {



    var backToTopButton = $(".back-to-top");



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