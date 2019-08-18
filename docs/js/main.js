jQuery(document).ready(function ($) {

  $(window).on('load', function () {
    $('.owl-nav').remove();
  });

  $('#burger').on('click', function () {
    $(this).toggleClass('active');
    $('.header-mobmenu').slideToggle();
  });

  $(window).on('resize', function () {
    const scrollbarWidth = 17;
    $(window).width() >= (992 - scrollbarWidth) ? $('#burger').removeClass('active') && $('.header-mobmenu').css('display', 'none') : null;
  });

  $('a[href^="#"]').bind('click', function (e) {
    let anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1500);
    e.preventDefault();
  });

  $('.photoHall-slider').owlCarousel({
    loop: true,
    items: 1,
    responsive: {
      0: {
        mouseDrag: true,
        touchDrag: true,
      },
      768: {
        stagePadding: 131,
        margin: -110,
        mouseDrag: false,
        touchDrag: false
      },
      1600: {
        stagePadding: 299,
        margin: -110,
        mouseDrag: false,
        touchDrag: false
      },
      1900: {
        stagePadding: 449,
        margin: -100,
        mouseDrag: false,
        touchDrag: false
      }
    }
  });

  const sliderPhotos = $('.photoHall-slider');
  $('#prev-owl-slide').on('click', function () {
    sliderPhotos.trigger('prev.owl.carousel');
  });

  $('#next-owl-slide').on('click', function () {
    sliderPhotos.trigger('next.owl.carousel');
  });

  $('.trainers-slider').owlCarousel({
    loop: false,
    margin: 35,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  $('.powerPlate-slider').owlCarousel({
    loop: true,
    items: 1,
    responsive: {
      0: {
        mouseDrag: true,
        ouchDrag: true,
        stagePadding: 0,
        margin: 0
      },
      1200: {
        stagePadding: 92,
        margin: -500,
        mouseDrag: false,
        touchDrag: false
      },
      1600: {
        stagePadding: 260,
        margin: -450,
        mouseDrag: false,
        touchDrag: false
      },
      1900: {
        stagePadding: 410,
        margin: -240,
        mouseDrag: false,
        touchDrag: false
      }
    }
  });

  $('.feedbacks-slider').owlCarousel({
    loop: false,
    margin: 35,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

});