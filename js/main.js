(function ($) {
    $(document).ready(function () {


        $('.slider').cycle({
            fx: 'fade',
            timeout: 0,
            height: 'auto',
            pause: '',
            next: '.comments'
        });

        $('#form1 form').validate();
        $('#form2 form').validate();
        $('#form3 form').validate();
        $('.feedback form').validate();

        $(".fancybox").fancybox();
        //$(".iframe").fancybox();

//
//        // Grab the current date
//        var currentDate = new Date();
//
//        // Set some date in the future
//
//        var futureDate = new Date(2014, 06, 29, 00, 00, 00);
//
//        // Calculate the difference in seconds between the future and current date
//        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
//        if (diff < 0) diff = 0;

//        //Instantiate a coutdown FlipClock
//        var clock = $('.clock').FlipClock(diff, {
//        clockFace: 'DailyCounter',
//        language: 'ru',
//        countdown: true
//        });
    });
})(jQuery);

(function ($) {
    $(document).ready(function(){
        $('a[href*=youtube]').each(function () {
            // convert youtube swf href to embed for iframe
            var thisHref = this.href.replace(new RegExp("watch\\?v=", "i"), 'embed/').replace(new RegExp("&", "i"), '?');
            // bind fancybox to each anchor
            $(this).fancybox({
                "padding": 0,
                "type": 'iframe',
                // add trailing parameters to href (wmode)
                "href" : thisHref+"&amp;wmode=opaque"
            }); // fancybox
        }); // each
    }); // ready
})(jQuery);

(function ($) {
    // Counter

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var now = new Date();
    var timer;
    var startDay = 4;
    var start = new Date(2013, 1, startDay, 23, 59, 59);
    var distance = now - start;
    var day = Math.floor(distance / _day);
    day = day - Math.floor(day / 3) * 3;
    var end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + day, 23, 59, 59);

    function showRemaining() {
        var now = new Date();
        now.setMinutes(1);
        var distance = end - now;
        var days = Math.floor(distance / _day);
        if (days < 10) days = '0' + days;
        var hours = Math.floor((distance % _day) / _hour);
        if (hours < 10) hours = '0' + hours;
        var minutes = Math.floor((distance % _hour) / _minute);
        if (minutes < 10) minutes = '0' + minutes;
        var seconds = Math.floor((distance % _minute) / _second);
        if (seconds < 10) seconds = '0' + seconds;

//        $(".count_line .d").html(days);
        $(".count_line .h").html(hours);
        $(".count_line .m").html(minutes);
        $(".count_line .s").html(seconds);
    }
    showRemaining();
    timer = setInterval(showRemaining, 1000);

})(jQuery);

$(window).scroll(function () {
    if ( $(this).scrollTop() > 200 && !$('.scrollHeader').hasClass('open') ) {
        $('.scrollHeader').addClass('open');
        $('.scrollHeader').slideDown();
    } else if ( $(this).scrollTop() <= 200 ) {
        $('.scrollHeader').removeClass('open');
        $('.scrollHeader').slideUp();
    }
});



