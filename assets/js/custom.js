$(document).ready(function () {

// Fixed header
  checkHeadingScroll();
  checkNavDrop();
  showNavDrop();
  showMobileMenu();
  showSidebarMenu();

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
    /*
    $('.btn-subscribe').click(function(event) {
      event.preventDefault();
      $('#subscription-fader').addClass('visible');
    });

    $('#subscription-fader').click(function() {
      $('#subscription-fader').removeClass('visible');
    });
  */
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

// Check navigation dropdown
function checkNavDrop() {
  $( "#main-menu > li" ).each(function() {
    if ($(this).children('.drop').length > 0) {
      $(this).addClass('parent');
    }
  });
}

// Show navigation dropdown
function showNavDrop() {
  $('#main-menu .parent > a').click(function(e) {
    e.preventDefault();
    if ($(this).parent('li').hasClass('drop-visible')) {
      $(this).parent('li').removeClass('drop-visible');
      $(this).parent('li').children('.drop').removeClass('visible');
      $('#gh-head').removeClass('drop-visible');

      if ($(window).width() < 1024) {
        $(this).parent('li').children('.drop').slideUp();
      }
    } else {
      if ($(window).width() < 1024) {
        $('#main-menu .drop.visible').slideUp();
      }
      $('#main-menu .parent').removeClass('drop-visible');
      $(this).parent('li').addClass('drop-visible');
      $('#main-menu .drop').removeClass('visible');
      $(this).parent('li').children('.drop').addClass('visible');
      $('#gh-head').addClass('drop-visible');

      if ($(window).width() < 1024) {
        $(this).parent('li').children('.drop').slideDown();
      }
    }
  });

  $('#main-menu .drop a').click(function() {
    if ($(this).attr("href").indexOf("#") + 1) {
      $('#gh-head, #main-menu .parent').removeClass('drop-visible');
      if ($(window).width() < 1024) {
        $('#main-menu .drop.visible').slideUp();
        $('.navbar-toggler-right').click();
      }
      $('#gh-head .drop').removeClass('visible');
    }
  });

  $(document).bind( "mouseup touchend", function(e){
    if (!$("#gh-head").is(e.target) && $("#gh-head").has(e.target).length === 0) {

      if ($(window).width() >= 1024) {
        $('#main-menu .parent').removeClass('drop-visible');
        $('#main-menu .drop').removeClass('visible');
        $('#gh-head').removeClass('drop-visible');
      } else {
        if ($('#gh-head').hasClass('mobile-menu-opened')) {
          $('.navbar-toggler').trigger('click');
        }
      }
    }
  });
}

// Show mobile menu
function showMobileMenu() {
  $('.navbar-toggler-right').click(function() {
    $(this).toggleClass('collapsed');
    checkClass();
  });
}

function checkClass() {
  if ($('.navbar-toggler-right').hasClass('collapsed')) {
    $('header').removeClass('mobile-menu-opened');
    $('body').removeClass('mobile-menu-opened');
    $('#gh-head').removeClass('drop-visible');
    $('.navbar-collapse').removeClass('show').slideUp(300);
  } else {
    $('header').addClass('mobile-menu-opened');
    $('body').addClass('mobile-menu-opened');
    $('.navbar-collapse').addClass('show').slideDown(300);
  }
}

$(window).resize(function() {
  $('#main-menu .parent').removeClass('drop-visible').children('.drop').removeClass('visible');
  $('#gh-head').removeClass('drop-visible');
  $('#main-menu .drop').show();

  if ($(window).width() < 1024) {
    $('.navbar-toggler-right').addClass('collapsed');
    $('header').removeClass('mobile-menu-opened');
    $('body').removeClass('mobile-menu-opened');
    $('.navbar-collapse').removeClass('show').hide();
    $('#main-menu .drop').hide();
  }

  if ($(window).width() <= 700) {
    $('.sidebar').removeClass('nav-visible');
    $('.sidebar .sidebar-menu').hide();
  } else {
    $('.sidebar').addClass('nav-visible');
    $('.sidebar .sidebar-menu').show();
  }
});

function showSidebarMenu() {
  $('.mobile-menu-opener').click(function () {
    if ($(window).width() <= 700) {
      $('.sidebar').toggleClass('nav-visible');

      if ($('.sidebar').hasClass('nav-visible')) {
        $([document.documentElement, document.body]).animate({
          scrollTop: $(".sidebar").offset().top - 35
        }, 300);
      }

      $('.sidebar .sidebar-menu').slideToggle(300);
    }
  });
}
