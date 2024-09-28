$(document).ready(() => {
    $('.navbar-show-btn').click(() => {
        $('.navbar-collapse').addClass('showNavbar');
    });

    $('.navbar-hide-btn').click(() => {
        $('.navbar-collapse').removeClass('showNavbar');
    });

    let resizeTimer;
    $(window).on('resize', () => {
        $(document.body).addClass('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-transition-stopper');
        }, 400);
    });
});