
(function ($) {
    $.fn.blink = function (times) {
        var speed = "slow";
        return $(this).fadeOut(speed, function () {
            $(this).fadeIn(speed, function () {
                if (--times)
                    $(this).blink(times);
            });
        })
    }
})(jQuery);