import "./css/styles.css";
import $ from "jquery";
import kwesforms from "kwesforms";

/**
 * Smooth scroll management
 *
 *
 */
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
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        "swing",
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
  }
});

/**
 * KwesForms
 * Mail support for contact
 *
 */
kwesforms.init();

let isFormOpen = false;
let isBackdrop = false;
const showBackdrop = function () {
  if (!isBackdrop) {
    $("#backdrop").removeClass("invisible opacity-0").addClass("opacity-25");
    isBackdrop = true;
  }
};
const hideBackdrop = function () {
  if (isBackdrop) {
    $("#backdrop").removeClass("opacity-25").addClass("opacity-0");
    // Wait the end of animation
    setTimeout(() => {
      $("#backdrop").addClass("invisible");
      isBackdrop = false;
    }, 500);
  }
};
const openForm = function () {
  if (!isFormOpen) {
    $("#form").removeClass("invisible opacity-0").addClass("opacity-100");
    $("#containerForm").addClass("-translate-y-8");
    showBackdrop();
    isFormOpen = true;
  }
};
const closeForm = function () {
  if (isFormOpen) {
    $("#form").removeClass("opacity-100").addClass("opacity-0");
    $("#containerForm").removeClass("-translate-y-8");
    hideBackdrop();
    setTimeout(() => {
      $("#form").addClass("invisible");
      isFormOpen = false;
    }, 500);
  }
};
$("#form-button").on("click", function () {
  if (!isFormOpen) {
    openForm();
  } else {
    closeForm();
  }
});

/**
 * Navbar management
 *
 *
 */
let isSideNav = false;
const openNav = function () {
  if (isSideNav) return;
  $("#sidenav").addClass("translate-x-0").removeClass("translate-x-full");
  showBackdrop();
  isSideNav = true;
};
const closeNav = function () {
  if (!isSideNav) return;
  $("#sidenav").addClass("translate-x-full").removeClass("translate-x-0");
  hideBackdrop();
  isSideNav = false;
};
$("#openNav").on("click", openNav);
$("#closeNav").on("click", closeNav);
$(".aside-link").on("click", closeNav);
$("#backdrop").on("click", function () {
  closeNav();
  closeForm();
});

$("body").removeClass("hide");
setTimeout(function () {
  $("body").toggleClass("opacity-100");
}, 500);
