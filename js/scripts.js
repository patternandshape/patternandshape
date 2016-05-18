$(document).ready(function() {

  $(".vc").click(function() {
    $(".project-gallery").fadeOut("500");

    $.when($(".project-gallery").fadeOut("500")).then(function() {
      $(".visible-cloaks").fadeIn("500");
    });
  });

  $(".boomb").click(function() {
    $(".project-gallery").fadeOut("500");

    $.when($(".project-gallery").fadeOut("500")).then(function() {
      $(".boom-bap").fadeIn("500");
    });
  });

  $(".eames-o").click(function() {
    $(".project-gallery").fadeOut("500");

    $.when($(".project-gallery").fadeOut("500")).then(function() {
      $(".eames-office").fadeIn("500");
    });
  });

  $(".fw").click(function() {
    $(".project-gallery").fadeOut("500");

    $.when($(".project-gallery").fadeOut("500")).then(function() {
      $(".folkways").fadeIn("500");
    });
  });

  event.preventDefault();
});
