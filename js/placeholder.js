var portraitHeight = $("header.page-cover").height();
checkPortraitHeight();

checkHeaderColor();

createIndex();

$(window).scroll(function () {
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

function createIndex() {
  const $indexMenu = $(".index-menu");
  $indexMenu.empty();
  $("section").each(function (i) {
    $indexMenu.append(`
    <a class="index-section" data-elem-id="${$(this).attr('id')}">${$(this)
      .find(".subsection-title")
      .text()}</a>
    `);
  });
}

/* MAINTAIN PORTRAIG IMAGE SET */
function checkPortraitHeight() {
  let toMove = $(document).scrollTop() / 5;
  if (window.innerWidth <= 576) toMove = 0;
  $("header").css({
    'background-position-y': `calc(50% - ${toMove}px)`
  });
}

function checkHeaderColor() {
  const opacity =
    $(document).scrollTop() /
    (Math.min(window.screen.width, portraitHeight) - $("nav").height());
  $("header.top-menu").css({
    'background-color': `rgba(6, 15, 41, ${opacity})`
  });
}

function checkIndexMenu() {
  let foundCurrent = false;
  let i = $("section").length - 1;
  const h = $(document).scrollTop();
  const indexes = document.getElementsByClassName("index-section");
  $($("section").get().reverse()).each(function () {
    if (h > $(this).offset().top - $('header.top-menu').height() - 30) {
      foundCurrent ?
        indexes[i].className = "index-section visited-index" :
        indexes[i].className = "index-section current-index";
      foundCurrent = true;
    } else {
      indexes[i].className = "index-section not-visited-index";
    }
    i--;
  });
}

$(".index-section").click(function () {
  var elemID = '#' + $(this).data('elem-id')
  $([document.documentElement, document.body]).animate({
    scrollTop: $(elemID).offset().top - $("header.top-menu").height() - 24
  }, 500);
  checkIndexMenu()
});

/*
$(window).on('click', () => $('.navbar-collapse').removeClass("show"));
$('.navbar-collapse').on('click', function(event){
  event.stopPropagation();
});
*/

$("#antibiotic-div")
  .on("mouseenter", function () {
    $("#back-card1").show();
    $("#antibiotic-div")
      .find("img")
      .css("opacity", "0.35");
  })
  .on("mouseleave", function () {
    $("#back-card1").hide();
    $("#antibiotic-div")
      .find("img")
      .css("opacity", "1");
  });

$("#cascade-div")
  .on("mouseenter", function () {
    $("#back-card2").show();
    $("#cascade-div")
      .find("img")
      .css("opacity", "0.35");
  })
  .on("mouseleave", function () {
    $("#back-card2").hide();
    $("#cascade-div")
      .find("img")
      .css("opacity", "1");
  });

$("#mucolitic-div")
  .on("mouseenter", function () {
    $("#back-card3").show();
    $("#mucolitic-div")
      .find("img")
      .css("opacity", "0.35");
  })
  .on("mouseleave", function () {
    $("#back-card3").hide();
    $("#mucolitic-div")
      .find("img")
      .css("opacity", "1");
  });

$("#microfluidics-div")
  .on("mouseenter", function () {
    $("#back-card4").show();
    $("#microfluidics-div")
      .find("img")
      .css("opacity", "0.35");
  })
  .on("mouseleave", function () {
    $("#back-card4").hide();
    $("#microfluidics-div")
      .find("img")
      .css("opacity", "1");
  });

$("#cf-description")
  .find("button")
  .on("click", function () {
    $("#cf-description")
      .find("div")
      .toggle("medium");
  });

$("#droplet-techniques")
  .find("button")
  .on("click", function () {
    $("#droplet-techniques")
      .find("#droplet-content")
      .toggle("medium");
    createIndex();
  });

$("#metal-biosensor-component")
  .find("button")
  .on("click", function () {
    $("#metal-biosensor-component")
      .find("div")
      .toggle("slow");
    createIndex();
  });

$("#metal-biosensor-component2")
  .find("button")
  .on("click", function () {
    $("#metal-biosensor-component2")
      .find("div")
      .toggle("slow");
  });

$("#metal-biosensor-component3")
  .find("button")
  .on("click", function () {
    $("#metal-biosensor-component3")
      .find("div")
      .toggle("slow");
  });

$("#metal-biosensor-component4")
  .find("button")
  .on("click", function () {
    $("#metal-biosensor-component4")
      .find("div")
      .toggle("slow");
  });

$("#metal-biosensor-component5")
  .find("button")
  .on("click", function () {
    $("#metal-biosensor-component5")
      .find("div")
      .toggle("slow");
  });

$("#metal-biosensor-component6")
  .find("button")
  .on("click", function () {
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
  .on("click", function () {
    $("#metal-biosensor-component7")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component8")
  .find("button")
  .on("click", function () {
    $("#metal-biosensor-component8")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component9")
  .find("button")
  .on("click", function () {
    $("#metal-biosensor-component9")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component10")
  .find("button")
  .on("click", function () {
    $("#metal-biosensor-component10")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component11")
  .find("button")
  .on("click", function () {
    $("#metal-biosensor-component11")
      .find("div")
      .toggle();
  });