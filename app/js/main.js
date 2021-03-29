$(function(){
  $('.product-ad__list').slick({
    arrows: false,
    dots: true,
  });

  $('.sponsors__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false
  });

  var mixer = mixitup('.week-products__content', {

    "animation": {
      "duration": 250,
      "nudge": true,
      "reverseOut": false,
      "effects": "fade translateZ(-100px)"
    }
  });

  $('.product-video').magnificPopup({
    type: 'iframe',
});

  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $('.header').css('box-shadow', '0px 4px 8px 0px rgba(0, 0, 0, 0.22)');
    } else {
      $('.header').css('box-shadow', '0px 4px 8px 0px rgba(0, 0, 0, 0)');
    }
  });

  $('.user-bar__bar').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
})