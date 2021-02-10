
  var showSection = function showSection(section, isAnimate) {
    var direction = section.replace(/#/, ""),
      reqSection = $(".content").filter(
        '[view-section="' + direction + '"]'
      ),

      reqSectionPos = reqSection.offset().top - 10;


    if (isAnimate) {
      $("body, html").animate(
        {
          scrollTop: reqSectionPos
        },
        500
      );
      
    } else {
      $("body, html").scrollTop(reqSectionPos);
    }
  };



  $(".nav-menu").on("click", "a", function(e) {
    
    e.preventDefault();
    showSection($(this).attr("href"), true);
  });










  (function($) {
var toggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu");
var close = document.getElementById("menu-close");

toggle.addEventListener("click", function(e) {
if (menu.classList.contains("open")) {
  menu.classList.remove("open");
} else {
  menu.classList.add("open");
}
});

close.addEventListener("click", function(e) {
menu.classList.remove("open");
});

$(window).on("resize", function() {
if ($(window).width() < 846) {
  $(".nav-menu a").on("click", function() {
    menu.classList.remove("open");
  });
}
});
})(jQuery);