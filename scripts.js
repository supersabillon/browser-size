var w, h;

var browserSize = function() {
  w = $(window).width(), h = $(window).height();

  var $width = $('#width').text(w),
      $height = $('#height').text(h);
};

$(window).resize(function() {
  browserSize();
});


browserSize();

$('.copy').each(function(index) {

    var clip = new ZeroClipboard(this),
        self = $(this);

    clip.on('ready', function() {
      clip.on( 'copy', function(e) {
        var txt = (index == 0) ? w + 'px' : h + 'px';
        e.clipboardData.setData('text/plain', txt);
      });

      clip.on('aftercopy', function(e) {
        console.log('copied to clipboard ');
      })

    });
});
