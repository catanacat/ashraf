$(window).resize(function () {
   var toggle= $("#content-wrapper").hasClass("toggle");
    if ($(window).width() < 740 && !toggle) {
        $("#content-wrapper").toggleClass("toggle");
    } else if ($(window).width() > 980 && toggle) {
        $("#content-wrapper").toggleClass("toggle");
    }
});
