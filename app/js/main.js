$(function(){
  $('.product-ad__list').slick({
    arrows: false,
    dots: true,
  });

  var mixer = mixitup('.product-filter__content', {

    "animation": {
      "duration": 250,
      "nudge": true,
      "reverseOut": false,
      "effects": "fade translateZ(-100px)"
    }

  });
})