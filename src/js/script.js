const siteWrapper = $('#wrapper');
const headerMenu = $("#headerMenu");
const humburger = $("#burger");
const testimonialsSlider = $("#testimonialsSlider");
let windowWidth = $(window).width();

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

function openMenu() {
  humburger.addClass('open');
  headerMenu.addClass('open');
}

function closeMenu() {
  humburger.removeClass('open');
  headerMenu.removeClass('open');
}


function setRoadPosition() {
  $('.sellers-works__road').each(function () {
    let parentEl = $(this).parent();
    let el = parentEl.parent();
    let elHeight = el.outerHeight()
    $(this).find('.sellers-works__line').css('height', elHeight);
  });
}

function initTestimonialsSlider() {
  testimonialsSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    fade: false,
    arrows: true,
    prevArrow: $('#testimonialsPrev'),
    nextArrow: $('#testimonialsNext'),
    infinite: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
}

$(document).ready(function () {
  detectSubMenu();
  showContent();
  initTestimonialsSlider();
  setRoadPosition();
  showOnScroll($(window).scrollTop());

  // FAQ page accordion
  $('.accordion__content').hide();
  $('.accordion-list li a').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('accordion_active')) {
      $(this).removeClass("accordion_active").closest('.accordion-list li').find('.accordion__content').slideUp(200);
      $('accordion_active').removeClass('accordion_active');
      blur
      $(this).find('.accordion__arrow').removeClass('active');
    } else {
      $(this).addClass("accordion_active").closest('.accordion-list li').find('.accordion__content').slideDown(200);
      $(this).parent().siblings('.accordion-list li').find('.accordion-list li a').removeClass("accordion_active");
      // $(this).removeClass('accordion_active');
      $(this).parent().siblings('.accordion-list li').find('.accordion__content').slideUp(200);
      $(this).find('.accordion__arrow').addClass('active');
      $(this).parent().siblings('.accordion-list li').find('.accordion__arrow').removeClass('.active');
    }
  });


  $(window).resize(function () {
    setRoadPosition();
  });


  $(window).scroll(function () {
    const scrollValue = $(this).scrollTop();
    showOnScroll(scrollValue);
    scrollValue >= 1 ? closeMenu() : null;
  });

  // $('.sellers-works__item').height();

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

  // TOGGLE MAIN MENU //
  $(document).on('click', '.nav-menu__item-icon .nav-menu__link', function (e) {

    if (windowWidth < 991) {

      e.preventDefault();

      let link = $(this);
      let liItem = link.parent('.nav-menu__item');
      let subList = liItem.children('.submenu');

      if (liItem.hasClass('active')) {

        liItem.removeClass('active');
        subList.slideUp();

      } else {

        liItem.addClass('active');
        subList.slideDown();

      }

    }

  });
  humburger.click(function () {
    if ($(this).hasClass('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });


  // END DOCUMENT READY
});


// function initPartnersSlider() {
//   // console.log('start')
//   const partnerSlider = document.querySelector('#partnersSlider.slick-slider');
//   if ($(window).width() < 991 && !partnerSlider) {
//     console.log('start');
//     $('#partnerSlider').slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       autoplay: true,
//       dots: false,
//       arrows: false,
//       infinite: false,
//       autoplaySpeed: 10000,
//       mobileFirst: true,
//       responsive: [{
//           breakpoint: 991,
//           settings: 'unslick'
//         },
//         {
//           breakpoint: 180,
//           settings: {
//             slidesToShow: 1

//           }
//         },
//         {
//           breakpoint: 575,
//           settings: {
//             slidesToShow: 2
//           }
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 4,
//             dots: true
//           }
//         }
//       ]
//     });
//   }
// }

function showOnScroll(scrollValue) {
  $('.sellers-works__road').each(function () {
    let elem = $(this);
    let sectionPos = elem.offset().top;
    let windowPos = $(window).scrollTop() + $(window).height() / 3;
    if (sectionPos < windowPos) {
      elem.addClass('active');
    } else {
      elem.removeClass('active');
    }
  });
}



// slow scroll to id

//   scrollBtn.click(function (e) {
//     e.preventDefault();
//     let link = $($(this).attr('href'))
//     $('html, body').animate({
//       scrollTop: link.offset().top
//     }, 1000);
//   });



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