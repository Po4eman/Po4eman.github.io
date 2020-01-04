

$(function () {
    $('.arrow-down').click(function () {
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 1500);
    });
});