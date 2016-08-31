$(document).ready(function() {

    var arrowSpan = $(".arrow-img").find("span");
    var imgHeight = $(".first-img-block").find("img").eq(0).height();
    var halfSize = $(((imgHeight)/2)-15)[0];

    $(".arrow-img").height(imgHeight);
    arrowSpan.css("top", halfSize);


    $( window ).resize(function() {
        var imgHeight = $(".first-img-block").find("img").eq(0).height();
        var halfSize = $(((imgHeight)/2)-15)[0];


        $(".arrow-img").height(imgHeight);

        arrowSpan.css("top", halfSize);
    });



    // var myEfficientFn = debounce(function() {
    //     // All the taxing stuff you do
    // }, 250);
    //
    // function debounce(func, wait, immediate) {
    //     var timeout;
    //     return function() {
    //         var context = this, args = arguments;
    //         var later = function() {
    //             timeout = null;
    //             if (!immediate) func.apply(context, args);
    //         };
    //         var callNow = immediate && !timeout;
    //         clearTimeout(timeout);
    //         timeout = setTimeout(later, wait);
    //         if (callNow) func.apply(context, args);
    //     };
    // };
    //
    // window.addEventListener('resize', myEfficientFn);



});