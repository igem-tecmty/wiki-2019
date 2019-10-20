var portraitHeight = $(".portrait-container").data("height") || $(".landing-video").height();
checkPortraitHeight();
checkHeaderColor();

$(".portrait-container").height(Math.min(window.screen.width, portraitHeight));
var scrollHeights = createScrollHeights();

$(window).scroll(() => checkHomeElement());

function createScrollHeights() {
    let scrollHeights = [];
    let first = parseInt($(".portrait-container").height()||0) - window.innerHeight;
    first += window.innerHeight/2;
    first += parseInt($(".portrait-container").css("margin-bottom") || 0);
    scrollHeights.push(first);

    let marginBot = 0;
    $(".home-element").each(function(index) {
        if (index == 0) return;
        marginBot = parseInt($(this).css("margin-bottom") || 0);
        scrollHeights.push((scrollHeights[index - 1] || 0) + $(this).height() + marginBot);
    });

    return scrollHeights;
}

function checkHomeElement() {
    const h = $(document).scrollTop();
    $(".home-element").each(function(index) {
        if (h >= scrollHeights[index-1] && h < (scrollHeights[index]||999999)) {
            $(this).stop(false).fadeTo("fast", 1 );
        } else {
            $(this).stop(false).fadeTo("fast", 0.1 );
            if(index==0 && h < scrollHeights[0]) $(this).stop(false).fadeTo("fast", 1 );
            if(index==scrollHeights.length-1 && h > scrollHeights[scrollHeights.length-1]) $(this).stop(false).fadeTo("fast", 1 );
        }
    });
}

const video = document.querySelector('video');       
video.addEventListener('ended', function() {
    video.style.display = "none";
});

/* MAINTAIN PORTRAIG IMAGE SET */
function checkPortraitHeight() {}