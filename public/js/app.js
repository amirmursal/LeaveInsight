$(document).ready(function () {
  // Variables declarations

  var $wrapper = $(".main-wrapper");
  var $pageWrapper = $(".page-wrapper");
  var $slimScrolls = $(".slimscroll");

  // Mobile menu sidebar overlay

  $("body").append('<div class="sidebar-overlay"></div>');
  $(document).on("click", "#mobile_btn", function () {
    $wrapper.toggleClass("slide-nav");
    $(".sidebar-overlay").toggleClass("opened");
    $("html").addClass("menu-opened");
    $("#task_window").removeClass("opened");
    return false;
  });

  $(".sidebar-overlay").on("click", function () {
    $("html").removeClass("menu-opened");
    $(this).removeClass("opened");
    $wrapper.removeClass("slide-nav");
    $(".sidebar-overlay").removeClass("opened");
    $("#task_window").removeClass("opened");
  });

  // Sidebar Slimscroll

  if ($slimScrolls.length > 0) {
    $slimScrolls.slimScroll({
      height: "auto",
      width: "100%",
      position: "right",
      size: "7px",
      color: "#ccc",
      wheelStep: 10,
      touchScrollStep: 100,
    });
    var wHeight = $(window).height() - 60;
    $slimScrolls.height(wHeight);
    $(".sidebar .slimScrollDiv").height(wHeight);
    $(window).resize(function () {
      var rHeight = $(window).height() - 60;
      $slimScrolls.height(rHeight);
      $(".sidebar .slimScrollDiv").height(rHeight);
    });
  }

  // Page Content Height

  var pHeight = $(window).height();
  $pageWrapper.css("min-height", pHeight);
  $(window).resize(function () {
    var prHeight = $(window).height();
    $pageWrapper.css("min-height", prHeight);
  });

  // Small Sidebar

  $(document).on("click", "#toggle_btn", function () {
    if ($("body").hasClass("mini-sidebar")) {
      $("body").removeClass("mini-sidebar");
      $(".subdrop + ul").slideDown();
    } else {
      $("body").addClass("mini-sidebar");
      $(".subdrop + ul").slideUp();
    }
    return false;
  });
  $(document).on("mouseover", function (e) {
    e.stopPropagation();
    if ($("body").hasClass("mini-sidebar") && $("#toggle_btn").is(":visible")) {
      var targ = $(e.target).closest(".sidebar").length;
      if (targ) {
        $("body").addClass("expand-menu");
        $(".subdrop + ul").slideDown();
      } else {
        $("body").removeClass("expand-menu");
        $(".subdrop + ul").slideUp();
      }
      return false;
    }
  });
});

function sidenavinit() {
  var Sidemenu = function () {
    this.$menuItem = $("#sidebar-menu a");
  };
  $("body").addClass("mini-sidebar");
  var $this = Sidemenu;
  $("#sidebar-menu a").on("click", function (e) {
    if ($(this).parent().hasClass("submenu")) {
      e.preventDefault();
    }
    if (!$(this).hasClass("subdrop")) {
      $("ul", $(this).parents("ul:first")).slideUp(350);
      $("a", $(this).parents("ul:first")).removeClass("subdrop");
      $(this).next("ul").slideDown(350);
      $(this).addClass("subdrop");
    } else if ($(this).hasClass("subdrop")) {
      $(this).removeClass("subdrop");
      $(this).next("ul").slideUp(350);
    }
  });
  $("#sidebar-menu ul li.submenu a.active")
    .parents("li:last")
    .children("a:first")
    .addClass("active")
    .trigger("click");
}
// Loader

$(window).on("load", function () {
  $("#loader").delay(100).fadeOut("slow");
  $("#loader-wrapper").delay(500).fadeOut("slow");
});
