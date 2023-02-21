$(document).ready(function() {
    $(window).scroll(function() {
        var animate_card = $('#animate_card');
        var animate_cardTop = animate_card.offset().top;
        var animate_cardHeight = animate_card.outerHeight();
        var windowHeight = $(window).height();
        var windowScroll = $(window).scrollTop();

        if (windowScroll >= (animate_cardTop - (windowHeight / 2))) {
            animate_card.addClass('visible');
        } else {
            animate_card.removeClass('visible');
        }
    });
});