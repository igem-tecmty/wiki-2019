var portraitHeight = $("header.page-cover").height();
checkPortraitHeight();

checkHeaderColor();

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

function createIndex() {
  const $indexMenu = $(".index-menu");
  $indexMenu.empty();
  $("section").each(function(i) {
    $indexMenu.append(`
    <a class="index-section" data-elem-id="${$(this).attr("id")}">${$(this)
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
    "background-position-y": `calc(50% - ${toMove}px)`
  });
}

function checkHeaderColor() {
  const opacity =
    $(document).scrollTop() /
    (Math.min(window.screen.width, portraitHeight) - $("nav").height());
  $("header.top-menu").css({
    "background-color": `rgba(6, 15, 41, ${opacity})`
  });
}

function checkIndexMenu() {
  let foundCurrent = false;
  let i = $("section").length - 1;
  const h = $(document).scrollTop();
  const indexes = document.getElementsByClassName("index-section");
  $(
    $("section")
      .get()
      .reverse()
  ).each(function() {
    if (h > $(this).offset().top - $("header.top-menu").height() - 30) {
      foundCurrent
        ? (indexes[i].className = "index-section visited-index")
        : (indexes[i].className = "index-section current-index");
      foundCurrent = true;
    } else {
      indexes[i].className = "index-section not-visited-index";
    }
    i--;
  });
}

$(".index-section").click(function() {
  var elemID = "#" + $(this).data("elem-id");
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(elemID).offset().top - $("header.top-menu").height() - 24
    },
    500
  );
  checkIndexMenu();
});

$(".hidden-component")
  .find("button")
  .on("click", function() {
    console.log($(this).parent());
    $(this)
      .parent()
      .find("div")
      .toggle("slow");
  });

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
