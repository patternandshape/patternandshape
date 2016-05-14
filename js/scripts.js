$(document).ready(function() {
  $(".vc").click(function() {
    $.when($(".project-gallery").fadeOut(1000)).then(function() {
      $(".visible-cloaks").fadeIn(1000);
    });
  });
