$(document).ready(function () {
    setHeightOnLoad();
    addition();
    fbSlide();
    $(window).resize(resizeFunction);
    jQuery.fn.cookiesEU();

    //Validate form
    $("#commentForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        }
    });

    //lightbox option
    lightbox.option({
        'wrapAround': true
    });


    //Fb Page Plugin
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v2.7";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


});

//Add cookies
var nameInput = $("#name");
var emailInput = $("#email");
var submitButton = $("#submitButton");
var nameDisplayCookie = $("#nameCookie");
var emailDisplayCookie = $("#emailCookie");

submitButton.click(function(e) {

    e.preventDefault();
    Storages.cookieStorage.set('UserNameCookie', nameInput.val());
    Storages.cookieStorage.set('UserEmailCookie', emailInput.val());

    nameDisplayCookie.text('Name: ' + Storages.cookieStorage.get('UserNameCookie'));
    emailDisplayCookie.text('Email: ' + Storages.cookieStorage.get('UserEmailCookie'));

    Storages.localStorage.set('UserNameLocal', nameInput.val());
    Storages.localStorage.set('UserEmailLocal', emailInput.val());

    Storages.sessionStorage.set('UserNameSession', nameInput.val());
    Storages.sessionStorage.set('UserEmailSession', emailInput.val());

    console.log(nameInput.val());
    console.log(emailInput.val());
});



//Fb Page Plugin
function fbSlide() {

    var btnFb = $('a.btn-facebook');
    var contentFb = $('.slideFb');
    var fbClicked = false;

    btnFb.on('click', function () {
        contentFb.toggleClass('animateFb')
        fbClicked = true;
    })

    $('body').on('click', function () {

        if (!fbClicked) {
            contentFb.removeClass('animateFb')
        }
        fbClicked = false;

    })

    //show and hide Fb Page Plugin
    function showAndHide() {
        var scroll = $(window).scrollTop();

        if (scroll < 400) {

            btnFb.fadeOut()

        } else {

            btnFb.fadeIn()
        }
    }
    showAndHide();
    $(window).scroll(function () {
        showAndHide();
    });

    //Set width Fb Page Plugin
        if ($(window).width() <= 640 && $(window).width() > 320) {
            contentFb.children().eq(0).attr('data-width', 300)

        } else if ($(window).width() <= 320) {
            contentFb.children().eq(0).attr('data-width', 250)

        } else {
            contentFb.children().eq(0).attr('data-width', 340)

        }

}


//GoogleMaps
function initMap() {
    var styleArray = [
        {
            featureType: "all",
            stylers: [
                {saturation: -80}
            ]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                {hue: "#00ffee"},
                {saturation: 50}
            ]
        }, {
            featureType: "poi.business",
            elementType: "labels",
            stylers: [
                {visibility: "off"}
            ]
        }
    ];

    var mapCanvas = document.getElementById("map");
    var map = new google.maps.LatLng(50.049414, 22.008977)
    var mapOptions = {
        center: map,
        styles: styleArray,
        scrollwheel: false,
        zoom: 17
    };
    var myLatLng = {lat: 50.049208, lng: 22.008945};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'PGS Software'
    });
}


//Set slider height
function setSliderHeight() {
    var slideImgFirst = $(".item").find("img");
    var mainSlideEl = $(".pgs-second");

    mainSlideEl.height(slideImgFirst[0].height);
}

//Set slider height onLoad
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


//Function optimization of browser/resize
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
