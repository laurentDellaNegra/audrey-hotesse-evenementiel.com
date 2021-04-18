import "./css/styles.css";
import $ from "jquery";
import kwesforms from "kwesforms";

/**
 * KwesForms
 * Mail support for contact
 *
 */
kwesforms.init();

let isBackdrop = false;
const showBackdrop = function () {
  if (!isBackdrop) {
    $("#backdrop").removeClass("hidden").addClass("block");
    setTimeout(() => {
      $("#backdrop").removeClass("opacity-0").addClass("opacity-25");
      isBackdrop = true;
    });
  }
};
const hideBackdrop = function () {
  if (isBackdrop) {
    $("#backdrop").removeClass("opacity-25").addClass("opacity-0");
    // Wait the end of animation
    setTimeout(() => {
      $("#backdrop").addClass("hidden").removeClass("block");
      isBackdrop = false;
    }, 500);
  }
};
/**
 * Navbar management
 *
 *
 */
const openNav = function () {
  if (isBackdrop) return;
  $("#sidenav").addClass("translate-x-0").removeClass("translate-x-full");
  showBackdrop();
};
const closeNav = function () {
  console.log("isBackdrop", isBackdrop);
  if (!isBackdrop) return;
  $("#sidenav").addClass("translate-x-full").removeClass("translate-x-0");
  hideBackdrop();
};
$("#openNav").on("click", openNav);
$("#closeNav").on("click", closeNav);
$(".aside-link").on("click", closeNav);
$("#backdrop").on("click", function () {
  closeNav();
});

/**
 * Form
 */
$('input:radio[name="type-de-client"]').on("change", function () {
  if (this.checked && this.value == "Vous êtes un professionnel") {
    $("#company-infos").removeClass("invisible").removeClass("h-0");
  } else {
    $("#company-infos").addClass("invisible").addClass("h-0");
  }
});

/**
 * Init
 *
 */

$("body").removeClass("hide");
setTimeout(function () {
  $("body").toggleClass("opacity-100");
}, 500);
