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
});
$(window).scroll(function() {
    checkHomeElement();
});
$(".main-content").click(function() {
    $(".navbar-collapse").removeClass("show");
});
$(".portrait-photo").click(function() {
    $(".navbar-collapse").removeClass("show");
});

function createScrollHeights() {
    var prev = $(".portrait-container").height() + parseInt($(".portrait-container").css("margin-bottom")) - window.screen.height;
    var marginBot = 0;
    $(".home-element").each(function(index) {
        nextScroll = prev + $(this).height() + marginBot;
        scrollHeights.push(nextScroll);
        prev = nextScroll;
        marginBot = parseInt($(this).css("margin-bottom"));
    });
}

function checkHomeElement() {
    let h = $(document).scrollTop();
    $(".home-element").each(function(index) {
        if (h >= scrollHeights[index]) {
            $(this).animate({opacity: 1}, 500);
            $(this).fadeIn(800);
        }
    });
}

var video = document.querySelector('video');       
video.addEventListener('ended', function() {
    video.style.display = "none";
});