$(document).ready(function () {

// Fixed header
  checkHeadingScroll();

  $(window).scroll(function () {
    checkHeadingScroll();
  });

  function checkHeadingScroll() {
    if ($(window).scrollTop() > 10) {
      $('#gh-head').addClass('scrolled-down');
    }
    else {
      $('#gh-head').removeClass('scrolled-down');
    }

    if ($(window).scrollTop() > 100) {
      $('.btn-to-top').show();
    }
    else {
      $('.btn-to-top').hide();
    }
  }

  // Scroll to top button
  $('.btn-to-top').click(function() {
    $('html, body').animate({scrollTop: 0},500);
  });

  // Subscription popup
  $('.btn-subscribe').click(function(event) {
    event.preventDefault();
    $('.fader').addClass('visible');
  });

  $('.fader').click(function() {
    $('.fader').removeClass('visible');
  });
});
