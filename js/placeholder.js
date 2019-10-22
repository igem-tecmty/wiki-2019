var headerHeight = $("header").height();
var portraitHeight = $(".portrait-container").data("height");
checkPortraitHeight();

checkHeaderColor();
$(".portrait-container").height(Math.min(window.screen.width, portraitHeight));
var scrollHeights = createScrollHeights();

createIndex();

$(window).scroll(function() {
  $(".navbar-collapse").removeClass("show");
  checkPortraitHeight();
  checkHeaderColor();
  checkIndexMenu();
  checkStaticImages();
});

function checkStaticImages() {
  var initial = 600;
  const h = initial - $(document).scrollTop();
  const newPosition = "0px " + h + "px";
  $(".static-img-container")
    .find("img")
    .css("object-position", newPosition);
}

function createScrollHeights() {
  let scrollHeights = [];

  let first = portraitHeight;
  first += $("#intro-text").height() || 0;
  first += parseInt($("#intro-text").css("margin-top")) || 0;
  first += $(".intro-section").height() || 0;
  first += parseInt($(".intro-section").css("margin-top")) || 0;
  if (window.screen.width < 768) {
    first += $("aside").height() + 96;
  }

  scrollHeights.push(first);
  $("article").each(function() {
    scrollHeights[scrollHeights.length - 1];
    scrollHeights.push(
      scrollHeights[scrollHeights.length - 1] +
        $(this).outerHeight() +
        parseInt($(this).css("margin-top"))
    );
  });

  return scrollHeights;
}

function createIndex() {
  const $indexMenu = $(".index-menu");
  $indexMenu.empty();
  $("article").each(function(i) {
    $indexMenu.append(`
    <ul class="index-section" onclick="window.scrollTo(0, ${scrollHeights[i] +
      4});">
    <a>${$(this)
      .find(".subsection-title")
      .text()}</a>
    </ul>
    `);
  });
}

/* MAINTAIN PORTRAIG IMAGE SET */
function checkPortraitHeight() {
  const newHeight =
    Math.min(window.screen.width, portraitHeight) - $(document).scrollTop();
  $(".portrait-photo").height(newHeight);
}

function checkHeaderColor() {
  const opacity =
    $(document).scrollTop() /
    (Math.min(window.screen.width, portraitHeight) - $("header").height());
  $("header").css("background-color", `rgba(6, 15, 41, ${opacity})`);
}

function checkIndexMenu() {
  const elements = document.getElementsByClassName("index-section");
  for (let i = 0; i < elements.length; i++) {
    e = elements[i];
    const h = $(document).scrollTop();
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

/*
$(window).on('click', () => $('.navbar-collapse').removeClass("show"));
$('.navbar-collapse').on('click', function(event){
  event.stopPropagation();
});
*/

$("#antibiotic-div")
  .on("mouseenter", function() {
    $("#back-card1").show();
    $("#antibiotic-div")
      .find("img")
      .css("opacity", "0.35");
  })
  .on("mouseleave", function() {
    $("#back-card1").hide();
    $("#antibiotic-div")
      .find("img")
      .css("opacity", "1");
  });

$("#cascade-div")
  .on("mouseenter", function() {
    $("#back-card2").show();
    $("#cascade-div")
      .find("img")
      .css("opacity", "0.35");
  })
  .on("mouseleave", function() {
    $("#back-card2").hide();
    $("#cascade-div")
      .find("img")
      .css("opacity", "1");
  });

$("#mucolitic-div")
  .on("mouseenter", function() {
    $("#back-card3").show();
    $("#mucolitic-div")
      .find("img")
      .css("opacity", "0.35");
  })
  .on("mouseleave", function() {
    $("#back-card3").hide();
    $("#mucolitic-div")
      .find("img")
      .css("opacity", "1");
  });

$("#microfluidics-div")
  .on("mouseenter", function() {
    $("#back-card4").show();
    $("#microfluidics-div")
      .find("img")
      .css("opacity", "0.35");
  })
  .on("mouseleave", function() {
    $("#back-card4").hide();
    $("#microfluidics-div")
      .find("img")
      .css("opacity", "1");
  });

$("#cf-description")
  .find("button")
  .on("click", function() {
    $("#cf-description")
      .find("div")
      .toggle("medium");
  });

$("#droplet-techniques")
  .find("button")
  .on("click", function() {
    $("#droplet-techniques")
      .find("#droplet-content")
      .toggle("medium");
    scrollHeights = createScrollHeights();
    createIndex();
  });

$("#metal-biosensor-component")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component")
      .find("div")
      .toggle("slow");
    scrollHeights = createScrollHeights();
    createIndex();
  });

$("#metal-biosensor-component2")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component2")
      .find("div")
      .toggle("slow");
  });

$("#metal-biosensor-component3")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component3")
      .find("div")
      .toggle("slow");
  });

$("#metal-biosensor-component4")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component4")
      .find("div")
      .toggle("slow");
  });

$("#metal-biosensor-component5")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component5")
      .find("div")
      .toggle("slow");
  });

$("#metal-biosensor-component6")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component6")
      .find("div")
      .toggle("slow");
  });

$("#igem-rally")
  .find("button")
  .on("click", function () {
    $("#igem-rally")
      .find("div")
      .toggle("slow");
  });

$("#run-for-water")
  .find("button")
  .on("click", function () {
    $("#run-for-water")
      .find("div")
      .toggle("slow");
  });

$("#mexico-situation")
  .find("button")
  .on("click", function () {
    $("#mexico-situation")
      .find("div")
      .toggle("slow");
  });

$("#our-proposal")
  .find("button")
  .on("click", function () {
    $("#our-proposal")
      .find("div")
      .toggle("slow");
  });

$("#gov-approach")
  .find("button")
  .on("click", function () {
    $("#gov-approach")
      .find("div")
      .toggle("slow");
  });

$("#life-expectancy")
  .find("button")
  .on("click", function () {
    $("#life-expectancy")
      .find("div")
      .toggle("slow");
  });

$("#microfluidic-device")
  .find("button")
  .on("click", function () {
    $("#microfluidic-device")
      .find("div")
      .toggle("slow");
  });

$("#3a-assembly")
  .find("button")
  .on("click", function () {
    $("#3a-assembly")
      .find("div")
      .toggle("slow");
  });

$("#golden-gate")
  .find("button")
  .on("click", function () {
    $("#golden-gate")
      .find("div")
      .toggle("slow");
  });

$("#heavy-metal")
  .find("button")
  .on("click", function () {
    $("#heavy-metal")
      .find("div")
      .toggle("slow");
  });

$("#mucolytic")
  .find("button")
  .on("click", function () {
    $("#mucolytic")
      .find("div")
      .toggle("slow");
  });
$("#metal-biosensor-component7")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component7")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component8")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component8")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component9")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component9")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component10")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component10")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component11")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component11")
      .find("div")
      .toggle();
  });
