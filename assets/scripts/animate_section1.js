$(document).ready(function() {
    $(window).scroll(function() {
        var section1 = $('#section1');
        var section1Top = section1.offset().top;
        var section1Height = section1.outerHeight();
        var windowHeight = $(window).height();
        var windowScroll = $(window).scrollTop();

        if (windowScroll >= (section1Top - (windowHeight / 2))) {
            section1.addClass('visible');
        } else {
            section1.removeClass('visible');
        }
    });
});