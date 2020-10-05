$(function () {
  "use strict";

  var $win = $(window),
    $width = $("#width").text($win.width()),
    $height = $("#height").text($win.height());

  $win.resize(function () {
    $width.text($win.width()), $height.text($win.height());
  });
});

function copyToClipboard(type) {
  const sizeText = document.getElementById(type);
  const selection = window.getSelection();
  const range = document.createRange();

  // Select the text
  range.selectNodeContents(sizeText);

  selection.removeAllRanges();
  selection.addRange(range);

  // Copy the text
  document.execCommand("copy");
  selection.removeAllRanges();

  $(".js-alert").fadeIn(300, function () {
    setTimeout(() => {
      $(this).fadeOut(2000);
    }, 500);
  });
}

//analytics
(function (i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");

ga("create", "UA-70117330-2", "auto");
ga("send", "pageview");
