$(document).ready(function () {
    $('.navbar a.dropdown-tog').on('click', function (e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');
        if (!$parent.parent().hasClass('nav')) {
            $el.next().css({
                "top": $el[0].offsetTop,
                "left": $parent.outerWidth() - 4
            });
        }
        $('.nav li.open').not($(this).parents("li")).removeClass("open");
        if (!$parent.parent().hasClass('nav')) {
            $el.next().css({
                "top": $el[0].offsetTop,
                "left": $parent.outerWidth() - 4
            });
        }
        // return false;
    });
});
$(function () {
    $('#myNavbar li a[href^="' + location.pathname.split("")[1] + '"]').addClass('active');
});
