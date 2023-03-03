const container = document.querySelector(".swiper-hero")
const swiperhero = new Swiper('.img-swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".hero-btn-next",
    prevEl: ".hero-btn-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

})


// dropdown

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
})


const btns = document.querySelectorAll(".header-menu__link");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

// gallery-swiper

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".container .gallery__slide-container", {
    slidesPerView:1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__btn-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__btn--next",
      prevEl: ".gallery__btn--prev"
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      1300: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      1355: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
});


  // choices

  document.addEventListener("DOMContentLoaded", function() {
    const selector = document.querySelector(".choices")

    const choices = new Choices(selector, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices gallery__select',
       },
    });

  });


// accordion

$(".accordion__list").accordion({
  heightStyle: "content",
  active: 1
});


document.querySelectorAll('.accordion__bottom-link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.accordion__bottom-link').forEach(function (btn) {
      btn.classList.remove('accordion__bottom-link--active')
    });
    e.currentTarget.classList.add('accordion__bottom-link--active');
    document.querySelectorAll('.catalog-card').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('catalog-card--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog-card--active');
  });
});

// catalog

// document.querySelectorAll('.accordion__bottom-link').forEach(function (tabsBtn) {
//   tabsBtn.addEventListener('click', function (e) {
//     const path = e.currentTarget.dataset.path;
//     document.querySelectorAll('.accordion__bottom-link').forEach(function (btn) {
//       btn.classList.remove('catalog-card--active')
//     });
//     e.currentTarget.classList.add('accordion__bottom-link--active');
//     document.querySelectorAll('.catalog-card').forEach(function (tabsBtn) {
//       tabsBtn.classList.remove('catalog-card--active')
//     });
//     document.querySelector(`[data-target="${path}"]`).classList.add('catalog-card--active');
//   });
// });

// events__swiper

const swiper_events = new Swiper('.events__swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  loopedSlides: 0,
  grid: {
    rows: 1,
    fill: "row"
  },

  // pagination: {
  //   el: '.events__pagination',
  //   clickable: true
  // },

  // spaceBetween: 20,
  // pagination: {
  //   el: "swiper-pagination .event__button-pagination",
  //   type: "fraction",
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    591: {
      slidesPerView: 2,
      spaceBetween: 30,
    },


    764: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 27,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
    },

    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.events__btn-next',
    prevEl: '.events__btn-prev',
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }

});

// tooltyp

tippy('#myButton-1', {
  content: "Пример современных тенденций — современная методология разработки",
  maxWidth: 232,
  theme: 'violet',
});


tippy('#myButton-2', {
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
  maxWidth: 232,
  theme: 'violet',
});

tippy('#myButton-3', {
  content: "В стремлении повысить качество",
  maxWidth: 232,
  theme: 'violet',
});



// tippy(targets, {
//   theme: 'violet',
// });


// project__swiper

const swiper_project = new Swiper('.project__swiper', {
  // Optional parameters
  direction: 'horizontal',
  // slidesPerView: 1,
  spaceBetween: 30,
  slidesPerView: 1,
  loopedSlides: 0,
  // loop: true,

  breakpoints: {
    441: {
      slidesPerView: 2,
      spaceBetween: 33
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.project__btn--next',
    prevEl: '.project__btn--prev',
  },

  // a11y: false,
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true
  // },

  // watchSlidesProgress: true,
  // watchSlidesVisibility: true,
  // slideVisibleClass: "slide-visible",

  // on: {
  //   init: function () {
  //     this.slides.forEach((slide) => {
  //       if (!slide.classList.contains("slide-visible")) {
  //         slide.tabIndex = "-1";
  //       } else {
  //         slide.tabIndex = "";
  //       }
  //     });
  //   },
  //   slideChange: function () {
  //     this.slides.forEach((slide) => {
  //       if (!slide.classList.contains("slide-visible")) {
  //         slide.tabIndex = "-1";
  //       } else {
  //         slide.tabIndex = "";
  //       }
  //     });
  //   }
  // }

});

// validate

let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.form__input-container', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        function: (name, value) => {
          const ph = phone.inputmask.unmaskedvalue();
          return Number(ph) && ph.length ===  10;
        }
    },

    },
   messages: {
         name: {
          required: "Вы не ввели имя",
          function: "Не допустимый формат",
         },
         phone: {
           required: "Вы не ввели телефон",
           function: "Недопустимый формат"
         }
       }
    });


// burger

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("active").addEventListener("click", function() {
      document.querySelector(".header-all").classList.toggle("open")
      document.body.classList.toggle('stop-scroll');
  })

})

document.getElementById("menu").addEventListener('click', event => {
  event._isClickWithInMenu = true;

});
document.getElementById("active").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".header-all").classList.remove("open")
  document.body.classList.toggle('stop-scroll');
});

// document.querySelector(".burger-active").addEventListener("click", function() {
//   document.querySelector(".header-all").classList.add("open");
// })
// document.querySelector(".burger-active").addEventListener("click", function() {
//   document.querySelector(".header-all").classList.remove("open");
// })

// header_form_search

document.querySelector(".header__menu-search-icon-adaptiv-link").addEventListener("click", function() {
  document.querySelector(".search-header-form").classList.add("search-header-form--active");
  this.classList.add("active");
})
document.querySelector(".search-header-btn").addEventListener("click", function() {
   let form = document.querySelector(".search-header-form");
  form.classList.remove("search-header-form--active");
    form.querySelector("input").value = "";
    document.querySelector(".header__menu-search-icon-adaptiv-link").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".search-header-form");
  if (!target.closest(".header__menu-search-adaptiv")) {
  form.classList.remove("search-header-form--active");
    form.querySelector("input").value = "";
    document.querySelector(".header__menu-search-icon-adaptiv-link").classList.remove("active")
  }
})
