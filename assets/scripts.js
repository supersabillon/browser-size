$(function() {
  'use strict';

var $win = $(window),
    $width = $('#width').text($win.width()),
    $height = $('#height').text($win.height());

$win.resize(function() {
  $width.text($win.width()),
  $height.text($win.height());
});

$('.copy').each(function() {

    var clip = new ZeroClipboard(this),
        _ = $(this);

    clip.on('ready', function() {
      clip.on( 'copy', function(e) {
        var txt = _.siblings('span').text() + 'px';
        e.clipboardData.setData('text/plain', txt);
      });

      clip.on('aftercopy', function(e) {
        $(".js-alert").fadeIn(500, function(){
          $(this).fadeOut(1000);
        });
      })

    });
});
});


//analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-70117330-2', 'auto');
ga('send', 'pageview');
