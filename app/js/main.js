$(function(){
  $('.product-ad__list').slick({
    arrows: false,
    dots: true,
  });

  $('.product-sponsors__inner').slick({
    arrows: false,
    dots: false
  });

  var mixer = mixitup('.filter__content', {

    "animation": {
      "duration": 250,
      "nudge": true,
      "reverseOut": false,
      "effects": "fade translateZ(-100px)"
    }
  });

  $('.product-video').magnificPopup({
    items: [
      {
        src: 'https://www.youtube.com/watch?v=wk22xOm1TNo',
        title: 'Peter & Paul fortress in SPB'
      },
    ],
    gallery: {
      enabled: true
    },
    type: 'iframe' // this is a default type
});

  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $('.header').css('box-shadow', '0px 4px 8px 0px rgba(0, 0, 0, 0.22)');
    } else {
      $('.header').css('box-shadow', '0px 4px 8px 0px rgba(0, 0, 0, 0)');
    }
  });
})