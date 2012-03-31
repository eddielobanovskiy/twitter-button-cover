/* Author:
  Vision Five Design Studio - http://www.v5design.com
  Front-end Dev: Anton Korzhuk - @osurain
  UX/ UI Designer: Eddie Lobanovskiy - @v5design
*/

// cache elements;
var $btnIndent = $('.btn-indent'),
    $btn = $('.btn', $btnIndent),
    $btnCover = $('.btn-cover', $btnIndent);

$(document).ready(function() {

  $btnIndent.hover(function() {
    // animate cover's shadow for added depth and animate cover out;
    $(this).find($btnCover).stop().animate({
      boxShadow: '90px 0px 30px 0px rgba(22, 89, 114, 1)'
    }, {duration: 300, queue: false}).animate({
      left: '-140px'
    }, 500);
    // reset cover's width for snapping;
    $btnCover.width(118);
  }, function() {
    // reset cover's shadow and cover button;
    $(this).find('.btn-cover').stop().animate({
      left: '0',
      boxShadow: '0 0px 0 0px rgba(22, 89, 114, 0)'
    }, function() {
      // on complete, snap button in;
      $('.btn-cover').animate({width: '121px'}, 200)
    });
  });

});

// looking for code-feedback anton@v5design.com;