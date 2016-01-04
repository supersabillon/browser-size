var browserSize = function() {
  var $width = $('#width').text($(window).width()),
      $height = $('#height').text($(window).height());
};

$(window).resize(function() {
  browserSize();
});


$(function() {
    browserSize();

    $('.copy').click(function(event) {
    	event.preventDefault();
    	console.log('target is ' + $(this).prev().text());
	});
});