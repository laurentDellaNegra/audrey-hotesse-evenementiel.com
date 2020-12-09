import "./css/styles.css";
import $ from "jquery";

// Add smooth scrolling to all links
$("a").on("click", function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  }
});

$("#openNav").on("click", function (event) {
  $("#sidenav").addClass("translate-x-0");
  $("#sidenav").removeClass("translate-x-full");
  $("#backdrop").removeClass("hidden");
});

$("#closeNav").on("click", function (event) {
  $("#sidenav").addClass("translate-x-full");
  $("#sidenav").removeClass("translate-x-0");
  $("#backdrop").addClass("hidden");
});

$("#backdrop").on("click", function (event) {
  $("#sidenav").addClass("translate-x-full");
  $("#sidenav").removeClass("translate-x-0");
  $("#backdrop").addClass("hidden");
});

$(".aside-link").on("click", function (event) {
  $("#sidenav").addClass("translate-x-full");
  $("#sidenav").removeClass("translate-x-0");
  $("#backdrop").addClass("hidden");
});
