$(window).resize(function () {
    if ($(window).width() < 740) {
        $(".sidebar-collapse").css("display", "none");
        $("#content").addClass("col-xs-12");
    } else {
        $(".sidebar-collapse").css("display", "block");
        $("#content").removeClass("col-xs-12");
    }
});
