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
    $('#subscription-fader').addClass('visible');
  });

  $('#subscription-fader').click(function() {
    $('#subscription-fader').removeClass('visible');
  });
});

$(window).on('load', function(){

  // Sales popup
  let salesPopupShoved = false;

  $(window).scroll(function () {
    checkArticleScroll();
  });

  function checkArticleScroll() {
    if(!($('.sales-anchor').length)) return;

    let anchorPos = $('.sales-anchor').offset().top;
    let topPos = $(window).scrollTop();
    let windowHeight = $(window).height() / 2;

    if (topPos + windowHeight > anchorPos && !salesPopupShoved) {
      $('#sales-fader, .sales-popup, .discount-popup').addClass('visible');
      salesPopupShoved = true;
    }
  }

  $('#sales-fader, .btn-popup-close').click(function() {
    $('#sales-fader, .sales-popup, .discount-popup').removeClass('visible');
  });

  // Copy sales code
  function copySalesCode() {
    let $tmp = $("<input>");
    $("body").append($tmp);
    $tmp.val($('#code-field').text()).select();
    document.execCommand("copy");
    $tmp.remove();
  }

  $('.sales-popup .btn-copy').click(function() {
    copySalesCode();
    let copiedText = 'Copied: ' + $('#code-field').html();
    $('.sales-popup .tooltip').html(copiedText);
  });
});
