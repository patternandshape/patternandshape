$(document).ready(function() {

  $(".vc").click(function() {
    $(".project-gallery").fadeOut("500");

    $.when($(".project-gallery").fadeOut("500")).then(function() {
      $(".visible-cloaks").fadeIn("500");
    });
  });
  event.preventDefault();
});
