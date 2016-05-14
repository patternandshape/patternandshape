$(document).ready(function() {

  $(".vc").click(function() {
    $(".project-gallery").fadeOut();
    
    $.when($(".project-gallery").fadeOut(1000)).then(function() {
      $(".visible-cloaks").fadeIn(1000);
    });
  });
  event.preventDefault();
});
