// Taken from here: http://jsfiddle.net/amyseqmedia/dD99u/37/

$(function () {
    function changeMeter (ev) {
        var $ul = $(ev.target).closest("ul"),
            numLi = $("li", $ul).length,
            $on = $("li.on", $ul),
            numOn = $on.length;
        if (numLi == numOn) {
            // All filled! Reset!
            $on.removeClass("on");
        } else {
            // Add a new $on
            if (numOn == 0) {
                $("li:first", $ul).addClass("on");
            } else {
                $("li.on:last", $ul).next().addClass("on");
            }
        }
    }

    $(".meter1").on("click", _.throttle(changeMeter, 5000));
    $(".meter2").on("click", _.debounce(changeMeter, 1000, true));
    $(".meter").on("click", function(ev) {
        var $meter = $(ev.target).closest("ul");
        $meter.addClass("blink");
        setTimeout(function () {
            $meter.removeClass("blink");
        }, 50);
    });
});
