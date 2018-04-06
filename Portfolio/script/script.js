$('.nav-menu').click(function() {
  var overlay_navigation = $('.overlay-nav-open'),
    nav_item_1 = $('div.overlay-nav-open nav li:nth-of-type(1)'),
    nav_item_2 = $('div.overlay-nav-open nav li:nth-of-type(2)'),
    nav_item_3 = $('div.overlay-nav-open nav li:nth-of-type(3)'),
    nav_item_4 = $('div.overlay-nav-open nav li:nth-of-type(4)'),
    nav_item_5 = $('div.overlay-nav-open nav li:nth-of-type(5)'),
    nav_menu = $('.nav-menu');

    //Animation on Overlay Navigation
    //Revised based on Mirko's sample on Codepen: https://codepen.io/fluxus/pen/gPWxXJ
  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {

    nav_menu.removeClass('animate-out-nav-menu').addClass('animate-nav-menu');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down');
    nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
    nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
    nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
    nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
    nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
  } else {
    nav_menu.removeClass('animate-nav-menu').addClass('animate-out-nav-menu');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
    nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
    nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
    nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
    nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
    nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
  }
})
