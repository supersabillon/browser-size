var browserSize = function() {
  var $width = $('#width').text($(window).width()),
      $height = $('#height').text($(window).height());
};

$(window).resize(function() {
  browserSize();
});


$(function() {
    browserSize();

    // $('.copy').click(function(event) {
    // 	//event.preventDefault();
    // 	//console.log('target is ' + $(this).prev().text());
	   // });

    var client = new ZeroClipboard($('.copy'));

    client.on( 'ready', function(event) {
      console.log( 'movie is loaded' );

      client.on( 'copy', function(event) {
        event.clipboardData.setData('text/plain', event.target.innerHTML);
      } );

      client.on( 'aftercopy', function(event) {
        console.log('Copied text to clipboard: ' + event.data['text/plain']);
      } );
    } );

    client.on( 'error', function(event) {
      console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
      ZeroClipboard.destroy();
    } );
});
