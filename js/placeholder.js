var headerHeight = $("header").height();
var portraitHeight = $(".portrait-container").data("height") || $(".landing-video").height();
var scrollHeights = [];

$(window).on("load", function() {
    checkPortraitHeight();
    checkHeaderColor();
    $(".portrait-container").height(
        Math.min(window.screen.width, portraitHeight)
    );
    createScrollHeights();
    createIndex();
    // var positionAdjust = ($(window).width() - portraitHeight)/2;
    // $(".portrait-photo").css("object-position", "0px -" + positionAdjust + "px");
});
$(window).scroll(function() {
    $(".navbar-collapse").removeClass("show");
    checkPortraitHeight();
    checkHeaderColor();
    checkIndexMenu();
});
$(".main-content").click(function() {
    $(".navbar-collapse").removeClass("show");
});
$(".portrait-photo").click(function() {
    $(".navbar-collapse").removeClass("show");
});
function createScrollHeights() {
    scrollHeights.push(portraitHeight);
    scrollHeights[0] += $('#intro-text').height() || 0;
    scrollHeights[0] += parseInt($('#intro-text').css("margin-top")) || 0;
    if (window.screen.width < 768) {
        scrollHeights[0] += $("aside").height() + 96;
    }
    $("article").each(function() {
        scrollHeights[scrollHeights.length - 1];
        scrollHeights.push(
        scrollHeights[scrollHeights.length - 1] +
            $(this).height() +
            parseInt($(this).css("margin-top"))
        );
    });
}
function createIndex() {
    const indexMenu = $(".index-menu");
    $("article").each(function(i) {
        indexMenu.append(`
        <ul class="index-section" onclick="window.scrollTo(0, ${scrollHeights[i] + 4});">
            <a>
            ${$(this)
                .find(".subsection-title")
                .text()}
            </a>
        </ul>
        `);
    });
}

/* MAINTAIN PORTRAIG IMAGE SET */
function checkPortraitHeight() {
    var height = Math.min(window.screen.width, portraitHeight);
    var newHeight = height - $(document).scrollTop();
    $(".portrait-photo").height(newHeight);
    $(".landing-video").height(newHeight);
}
function checkHeaderColor() {
    var opacity = $(document).scrollTop() / (Math.min(window.screen.width, portraitHeight) - headerHeight);
    $("header").css("background-color", `rgba(6, 15, 41, ${opacity})`);
}
function checkIndexMenu() {
    var elements = document.getElementsByClassName("index-section");
    for (var i = 0; i < elements.length; i++) {
        e = elements[i];
        var h = $(document).scrollTop();
        if (h >= scrollHeights[i] && h < scrollHeights[i + 1]) {
        e.className = "index-section current-index";
        } else if (h > scrollHeights[i + 1]) {
        e.className = "index-section visited-index";
        } else if (h < scrollHeights[i]) {
        e.className = "index-section not-visited-index";
        } else if (i + 1 == elements.length) {
        e.className = "index-section current-index";
        }
    }
}