
// Адаптивное мобильное меню в хедере
var target = $('.navigation-mobile');

$(document).ready(function () {
  target.slideUp();
});

$(window).on('resize', function () {
  var win = $(this);
  if (win.width() <= 767) {
    if (target.hasClass('hidden')) {
      target.slideUp();
    }
  }
});

$('.fa-bars').click(function () {
  target.toggleClass('hidden');
  target.slideToggle(500);
});



// табулятор в featured 
$('.tab').click(function () {

  $('.tab-container .tab').removeClass('active');
  $(this).addClass('active');

  var target = $(this).attr('data-tab');

  $('.featured-info').removeClass('active');
  $('.featured-info' + target).addClass('active');

});







