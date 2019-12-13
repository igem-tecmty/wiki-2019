var portraitHeight =
  $("header.top-menu").data("height") || $(".landing-video").height();

$(".portrait-container").height(Math.min(window.screen.width, portraitHeight));
$("video").height(Math.min(window.screen.width, portraitHeight));

$(window).scroll(() => checkHomeElement());

function checkHomeElement() {
  let foundCurrent = false;
  const h = $(document).scrollTop();
  const halfScreen = window.innerHeight / 2;
  $(
    $(".home-element")
      .get()
      .reverse()
  ).each(function() {
    if (h > $(this).offset().top - halfScreen) {
      foundCurrent
        ? $(this)
            .stop(false)
            .fadeTo("fast", 0.1)
        : $(this)
            .stop(false)
            .fadeTo("fast", 1);
      foundCurrent = true;
    } else {
      $(this)
        .stop(false)
        .fadeTo("fast", 0.1);
    }
  });
}

document
  .querySelector("video")
  .addEventListener("ended", () => $("video").prop("muted", true));
