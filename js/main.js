
$(function () {
    "use strict";

    //put height for slider
    var winH   = $(window).height(),
        uperH  = $('.uper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (uperH + navH));
    
    //put class active on li
    $('.feature-work ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    })
});