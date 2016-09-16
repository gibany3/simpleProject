$(document).ready(function () {
    setHeightOnLoad();
    $(window).resize(resizeFunction);
    addition();

    //lightbox option
    lightbox.option({
        'wrapAround': true
    });


    // $(".left").click(function () {
    //     setSliderHeight();
    // });
    //
    // $(".right").click(function () {
    //     setSliderHeight();
    // });

});


function setSliderHeight() {
    var slideImgFirst = $(".item").find("img");
    //var slideImgSecond = $(".item").find("img");
    var mainSlideEl = $(".pgs-second");

    mainSlideEl.height(slideImgFirst[0].height);


    // if (slideImgFirst.parent()[0].hasClass("active")) {
    //     console.log("First element")
    //     mainSlideEl.height(slideImgFirst.height);
    // } else if (slideImgFirst.parent()[1].hasClass("active")) {
    //     console.log("Second Element")
    //     mainSlideEl.height(slideImgSecond.height);
    // }
}


function setHeightOnLoad() {

    setSliderHeight();

    //three images side by side
    var arrowSpan = $(".arrow-img");
    var imgHeight = $(".first-img-block").find("img").eq(0).height();
    var halfSize = $(((imgHeight) / 2) - 15)[0];


    arrowSpan.height(imgHeight);
    arrowSpan.find("span").css("top", halfSize);
}

var resizeFunction = debounce(function () {
    // All the taxing stuff you do
    setHeightOnLoad();
}, 250);


function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

//modal Addition
function addition() {
    var num1 = $("#num1");
    var num2 = $("#num2");
    var res = $("#res");
    var button = $("#btnRes");

    button.click(function () {
        res.val(parseInt(num1.val()) + parseInt(num2.val()));
    });
}


// var myFeature = {
//     config : {
//         wrapper : '#myFeature',
//         container : 'div',
//         urlBase : 'foo.php?item='
//     },
//
//     init : function(config) {
//         $.extend(myFeature.config, config);
//         $(myFeature.config.wrapper).find('li').
//         each(function() {
//             myFeature.getContent($(this));
//         }).
//         click(function() {
//             myFeature.showContent($(this));
//         });
//     },
//
//     setHeightOnLoad : function() {
//
//         var arrowSpan = $(".arrow-img");
//         var imgHeight = $(".first-img-block").find("img").eq(0).height();
//         var halfSize = $(((imgHeight) / 2) - 15)[0];
//
//         arrowSpan.height(imgHeight);
//         arrowSpan.find("span").css("top", halfSize);
//     },
//
//     getContent : function($li) {
//         $li.append(myFeature.config.container);
//         var url = myFeature.buildUrl($li);
//         $li.find(myFeature.config.container).load(url);
//     },
//
//     showContent : function($li) {
//         $li.find('div').show();
//         myFeature.hideContent($li.siblings());
//     },
//
//     hideContent : function($elements) {
//         $elements.find('div').hide();
//     }
// };
//
// $(document).ready(function() { myFeature.init(); });


