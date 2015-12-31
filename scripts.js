var browserSize = function() {
  var $width = $('#width').text($(window).width()),
      $height = $('#height').text($(window).height());
};

browserSize();

$(window).resize(function() {
  browserSize();
});
