var headerHeight = $("header").height();
var portraitHeight = $(".portrait-container").data("height");
var scrollHeights = [];

$(window).on("load", function() {
  checkPortraitHeight();
  checkHeaderColor();
  $(".portrait-container").height(
    Math.min(window.screen.width, portraitHeight)
  );
  createScrollHeights();
  createIndex();
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
  scrollHeights[0] += $("#intro-text").height() || 0;
  scrollHeights[0] += parseInt($("#intro-text").css("margin-top")) || 0;
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
        <ul class="index-section" onclick="window.scrollTo(0, ${scrollHeights[
          i
        ] + 4});">
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

$("#cf-description")
  .find("button")
  .on("click", function() {
    $("#cf-description")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component2")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component2")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component3")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component3")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component4")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component4")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component5")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component5")
      .find("div")
      .toggle();
  });

$("#metal-biosensor-component6")
  .find("button")
  .on("click", function() {
    $("#metal-biosensor-component6")
      .find("div")
      .toggle();
  });
