const siteWrapper = $('#wrapper');
const headerMenu = $("#nav");
const humburger = $("#burger");

// project functions

// slow show content after page load

function showContent() {
  siteWrapper.removeClass('js-fadeIn');
}

function detectSubMenu() {
  $('.submenu').each(function () {
    $(this).parent('.nav-menu__item').addClass('nav-menu__item-icon');
  });
}

$(document).ready(function () {
  detectSubMenu();
  showContent();
  // serch active block
  // $(document).mouseup(function (e) {
  //   var searchcontainer = $('.header-nav.active, .humburger');

  //   if (!searchcontainer.is(e.target) && searchcontainer.has(e.target).length === 0) {
  //     closeMenu();
  //   }
  // });

  // TOGGLE MAIN MENU //
  // $(document).on('click', '.header-nav__item_icon .header-nav__link', function (e) {

  //   if (windowWidth < 991) {

  //     e.preventDefault();

  //     let link = $(this);
  //     let liItem = link.parent('.header-nav__item');
  //     let subList = liItem.children('.header-subnav');

  //     if (liItem.hasClass('active')) {

  //       liItem.removeClass('active');
  //       subList.slideUp();

  //     } else {

  //       liItem.addClass('active');
  //       subList.slideDown();

  //     }

  //   }

  // });

  // TOGGLE MAIN MENU ON MOBILE DEVICES //
  // humburger.click(function () {
  //   if ($(this).hasClass('open')) {
  //     closeMenu();
  //   } else {
  //     openMenu();
  //   }
  // });


  // END DOCUMENT READY
});

// function showOnScroll(scrollValue) {
//   $('.js-scroll').each(function () {
//     let elem = $(this);
//     let sectionPos = elem.offset().top;
//     let windowPos = $(window).scrollTop() + $(window).height() / 1.2;
//     if (sectionPos < windowPos) {
//       elem.removeClass('js-fadeIn js-slideLeft js-slideRight js-slideTop');
//     }
//   });

//   $('.js-active').each(function () {
//     let item = $(this);
//     let sectionPos = item.offset().top;
//     let windowPos = $(window).scrollTop() + $(window).height() / 2.8;
//     if (sectionPos < windowPos) {
//       item.addClass('active');
//     } else {
//       item.removeClass('active');
//     }
//   });
// }

// function openMenu() {
//   humburger.addClass('open');
//   headerMenu.addClass('open');
// }

// function closeMenu() {
//   humburger.removeClass('open');
//   headerMenu.removeClass('open');
// }



$(document).ready(function () {
  // if ($('.inner-page').length > 0) {
  //   setInnerHeader();
  // } else {
  //   setHomeHeader();
  // }

  // humburger.click(function () {
  //   if ($(this).hasClass('open')) {
  //     closeMenu();
  //   } else {
  //     openMenu();
  //   }
  // });
});

// slow scroll to id

//   scrollBtn.click(function (e) {
//     e.preventDefault();
//     let link = $($(this).attr('href'))
//     $('html, body').animate({
//       scrollTop: link.offset().top
//     }, 1000);
//   });

//   showOnScroll($(window).scrollTop());

//   $(window).scroll(function () {
//     const scrollValue = $(this).scrollTop();
//     showOnScroll(scrollValue);
//     scrollValue >= 1 ? closeMenu() : null;

//     if (scrollValue > 1) {
//       header.addClass('sticky');
//     } else {
//       header.removeClass('sticky');
//       // logoImg.attr("src", logoColorUrl);
//     }
//   });

// $('.home-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   dots: true,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   speed: 1000,
//   cssEase: 'linear',
//   autoplaySpeed: 10000
// });
// $('.testimonials-slider__wrapper').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   dots: true,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   speed: 1000,
//   cssEase: 'linear',
//   autoplaySpeed: 10000,
//   arrows: true,
//   prevArrow: $('.testimonials-slider_prev'),
//   nextArrow: $('.testimonials-slider_next')
// });
// });



svg4everybody();

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});