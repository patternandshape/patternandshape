$(document).ready(function() {
  $('.gallery-item').click(function() {
    $('.project-gallery').hide();

    $gallery_item = jQuery(this);

    var gallery_item_id = parseInt($gallery_item.attr('id').replace('gallery', ''), 10);

    var $projects = $('.projects');
    $projects.each(function() {

      $div = jQuery(this);
      var div_id = parseInt($div.attr('id').replace('project', ''), 10);

      $div.fadeOut(500, function() {
        if (div_id === gallery_item_id) {
          var $selectedDiv = $div;
          $selectedDiv.fadeIn(500);
        }
      });
    });
  });


$('.list').click(function(){
  $('.project-gallery').hide()
    $list = jQuery(this);
    var list_id = parseInt($list.attr('id').replace('list', ''), 10);
    var $projects = $('.projects');

    $projects.each(function(){
      $div = jQuery(this);
      var div_id = parseInt($div.attr('id').replace('project', ''), 10);

//selectedDiv only fires after .hide is fully executed
      $div.hide().promise().done(function(){
        if (div_id === list_id) {
          var $selectedDiv = jQuery(this);
          $selectedDiv.fadeIn(500);
        }
    });
  });
});
  event.preventDefault();
});
