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

/**
 * KwesForms
 * Mail support for contact
 *
 */
kwesforms.init();

let isFormOpen = false;
const showBackdrop = function () {
  $("#backdrop").removeClass("invisible opacity-0").addClass("opacity-50");
};
const hideBackdrop = function () {
  $("#backdrop").removeClass("opacity-50").addClass("opacity-0");
  // Wait the end of animation
  setTimeout(() => $("#backdrop").addClass("invisible"), 1000);
};
const openForm = function () {
  $("#form").removeClass("invisible opacity-0").addClass("opacity-100");
  $("#containerForm").addClass("-translate-y-8");
  showBackdrop();
  isFormOpen = true;
};
const closeForm = function () {
  $("#form").removeClass("opacity-100").addClass("opacity-0");
  $("#containerForm").removeClass("-translate-y-8");
  hideBackdrop();
  setTimeout(() => {
    $("#form").addClass("invisible");
    isFormOpen = false;
  }, 1000);
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

const openNav = function () {
  $("#sidenav").addClass("translate-x-0");
  $("#sidenav").removeClass("translate-x-full");
  $("#backdrop").removeClass("invisible");
};
const closeNav = function () {
  $("#sidenav").addClass("translate-x-full");
  $("#sidenav").removeClass("translate-x-0");
  $("#backdrop").addClass("invisible");
};
$("#openNav").on("click", openNav);
$("#closeNav").on("click", closeNav);
$(".aside-link").on("click", closeNav);
$("#backdrop").on("click", function () {
  closeNav();
  if (isFormOpen) closeForm();
});
