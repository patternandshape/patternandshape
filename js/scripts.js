$(document).ready(function() {
  $('.gallery-item').click(function() {
    $('.project-gallery').fadeOut(250);
    $gallery_item = jQuery(this);

    var gallery_item_id = parseInt($gallery_item.attr('id').replace('gallery', ''), 10);

    var $projects = $('.projects');
    $projects.each(function() {

      $div = jQuery(this);
      var div_id = parseInt($div.attr('id').replace('project', ''), 10);

      $div.fadeOut("500", function() {
        if (div_id == gallery_item_id) {
          $div.fadeIn("500");
        }
      });
    });
  });
  $('.list').click(function() {
    $('.project-gallery').fadeOut(250);
    $list = jQuery(this);
    var list_id = parseInt($list.attr('id').replace('list', ''), 10);

    var $projects = $('.projects');
    $projects.each(function() {

      $div = jQuery(this);
      var div_id = parseInt($div.attr('id').replace('project', ''), 10);

      $div.fadeOut("500", function() {
        if (div_id == list_id) {
          $div.fadeIn(500);
        }
      });
    });
  });

  event.preventDefault();
});

// $(".vc").click(function() {
//   $(".project-gallery").fadeOut("500");
//
//   $.when($(".project-gallery").fadeOut("500")).then(function() {
//     $(".visible-cloaks").fadeIn("500");
//   });
// });
//
// $(".boomb").click(function() {
//   $(".project-gallery").fadeOut("500");
//
//   $.when($(".project-gallery").fadeOut("500")).then(function() {
//     $(".boom-bap").fadeIn("500");
//   });
// });
//
// $(".eames-o").click(function() {
//   $(".project-gallery").fadeOut("500");
//
//   $.when($(".project-gallery").fadeOut("500")).then(function() {
//     $(".eames-office").fadeIn("500");
//   });
// });
//
// $(".fw").click(function() {
//   $(".project-gallery").fadeOut("500");
//
//   $.when($(".project-gallery").fadeOut("500")).then(function() {
//     $(".folkways").fadeIn("500");
//   });
// });
//
// $(".mo").click(function() {
//   $(".project-gallery").fadeOut("500");
//
//   $.when($(".project-gallery").fadeOut("500")).then(function() {
//     $(".mosk").fadeIn("500");
//   });
// });
//
// $(".crate-link").click(function() {
//   $(".project-gallery").fadeOut("500");
//
//   $.when($(".project-gallery").fadeOut("500")).then(function() {
//     $(".crate").fadeIn("500");
//   });
// });
