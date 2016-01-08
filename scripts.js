'use strict';

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

    var clip = new ZeroClipboard(this);

    clip.on('ready', function() {
      clip.on( 'copy', function(e) {
        var txt = (index == 0) ? w + 'px' : h + 'px';
        e.clipboardData.setData('text/plain', txt);
      });

      clip.on('aftercopy', function(e) {
        $(".js-alert").fadeIn(500, function(){
          $(this).fadeOut(1000);
        });
      })

    });
});


//analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-70117330-1', 'auto');
  ga('send', 'pageview');
