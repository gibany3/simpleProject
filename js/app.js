$(document).ready(function () {
    setHeightOnLoad();
    window.addEventListener('resize', resizeFunction);
});


function setHeightOnLoad() {

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


