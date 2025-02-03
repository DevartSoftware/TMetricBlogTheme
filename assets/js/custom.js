$(document).ready(function () {

// Fixed header
  checkHeadingScroll();
  showNavDrop();
  showMobileMenu();
  showSidebarMenu();
  checkSidebarScrollMenuHeight();

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
  };

  // Scroll to top button
  $('.btn-to-top').click(function() {
    $('html, body').animate({scrollTop: 0},500);
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
    };
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
    };
  });
}

// Show mobile menu
function showMobileMenu() {
  $('#main-menu .tab-content .tab-pane:first-child').addClass('show active');
  $('#main-menu .nav .nav-item:first-child .nav-link').addClass('active');

  $('.navbar-toggler-right').click(function() {
    if ($(window).width() < 1024) {
      $('#main-menu .tab-content .tab-pane').removeClass('show active');
      $('#main-menu .nav .nav-item .nav-link').removeClass('active');
    }
    setTimeout(checkClass,50);
  });

  function checkClass() {
    if ($('.navbar-toggler-right').hasClass('collapsed')) {
      $('header').removeClass('mobile-menu-opened drop-visible');
      $('body').removeClass('mobile-menu-opened');
    } else {
      $('header').addClass('mobile-menu-opened');
      $('body').addClass('mobile-menu-opened');
    }
  };

  $('#main-menu .link-back').click(function() {
    $('#main-menu .tab-content .tab-pane').removeClass('show active');
    $('#main-menu .nav .nav-item .nav-link').removeClass('active');
  });
}

$(window).resize(function() {
  $('#main-menu .parent').removeClass('drop-visible').children('.drop').removeClass('visible');
  $('#gh-head').removeClass('drop-visible');
  $('#main-menu .drop').show();

  $('body, #gh-head').removeClass('mobile-menu-opened');
  $('.navbar-toggler').addClass('collapsed');
  $('.navbar-collapse').removeClass('show');

  $('#main-menu .tab-content .tab-pane').removeClass('show active');
  $('#main-menu .nav .nav-item .nav-link').removeClass('active');

  $('#main-menu .tab-content .tab-pane:first-child').addClass('show active');
  $('#main-menu .nav .nav-item:first-child .nav-link').addClass('active');

  if ($(window).width() < 1024) {
    $('#main-menu .drop').hide();
  }

  checkSidebarScrollMenuHeight();
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

function checkSidebarScrollMenuHeight() {
  if(!($('.scroll-menu-container .sidebar-menu-list').length)) return;

  let sidebarBannerHeight = $('.sidebar-box.subscribe-box').outerHeight();
  let windowHeight = $(window).height();
  let sidebarScrollMenuHeight = windowHeight - sidebarBannerHeight - 96;

  $('.scroll-menu-container .sidebar-menu-list').css('max-height', sidebarScrollMenuHeight + 'px');
}
