console.log("width of window ", $(window).width());

$(window).resize(function() {
  console.log("W", $(window).width());
  console.log("H ", $(window).height());
});
