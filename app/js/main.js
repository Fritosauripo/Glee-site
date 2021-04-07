$(function () {
  $('.product-ad__list').slick({
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          dots: false
        }
      },

    ]
  });

  $('.sponsors__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    dots: false,
    

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  var mixer = mixitup('.week-products__content', {

    "animation": {
      "duration": 250,
      "nudge": true,
      "reverseOut": false,
      "effects": "fade translateZ(-100px)"
    },
    selectors: {
      control: '.js-filter-week'
    }
  });

  var mixer = mixitup('.new-design__content', {

    "animation": {
      "duration": 250,
      "nudge": true,
      "reverseOut": false,
      "effects": "fade translateZ(-100px)"
    },
    selectors: {
      control: '.js-filter-design'
    }
  });


  $('.product-video').magnificPopup({
    type: 'iframe',
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $('.header').addClass('header--top');
    } else {
      $('.header').removeClass('header--top');
    }
  });


  $('.user-bar__bar').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.user-bar__arrow').on('click', function () {
    $('.user-bar__wrapper').toggleClass('user-bar__wrapper--active');
    $('.user-bar__arrow').toggleClass('user-bar__arrow--active');
  });
})