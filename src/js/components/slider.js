import SwiperCore, { Pagination, Navigation, Lazy } from 'swiper/core';

const userAgent = window.navigator.userAgent.toLowerCase();
const isInternetExplorer = (/trident/gi).test(userAgent) || (/msie/gi).test(userAgent);

function bullet(index, className) {
  return `<span class="${className}"></span>`;
}

if (!isInternetExplorer) {
  SwiperCore.use([Pagination, Navigation, Lazy]);

  /* eslint-disable no-unused-vars */
  const teamSlider = new SwiperCore('.team__slider', {
    /* eslint-enable no-unused-vars */
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    preloadImages: false,
    lazy: {
      lazy: true,
      loadPrevNext: true,
      loadPrevNextAmount: 1,
      checkInView: true,
    },

    pagination: {
      bulletClass: 'slider__pagination-bullet',
      bulletActiveClass: 'slider__pagination-bullet--active',
      el: '.team__slider-pagination',
      clickable: true,
      renderBullet: bullet,
    },

    navigation: {
      nextEl: '.team__next-button',
      prevEl: '.team__back-button',
    },

    breakpoints: {
      780: {
        slidesPerView: 2,
        lazy: {
          lazy: true,
          loadPrevNext: true,
          loadPrevNextAmount: 2,
          checkInView: true,
        },
      },
      1440: {
        slidesPerView: 3,
        lazy: {
          lazy: true,
          loadPrevNext: true,
          loadPrevNextAmount: 3,
          checkInView: true,
        },
      },
    },
  });

  /* eslint-disable no-unused-vars */
  const reviewsSlider = new SwiperCore('.reviews__slider', {
    /* eslint-enable no-unused-vars */
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    preloadImages: false,
    lazy: {
      lazy: true,
      loadPrevNext: true,
      loadPrevNextAmount: 1,
      checkInView: true,
    },

    pagination: {
      bulletClass: 'slider__pagination-bullet',
      bulletActiveClass: 'slider__pagination-bullet--active',
      el: '.reviews__slider-pagination',
      clickable: true,
      renderBullet: bullet,
    },

    navigation: {
      nextEl: '.reviews__next-button',
      prevEl: '.reviews__back-button',
    },

    breakpoints: {
      1440: {
        slidesPerView: 2,
        lazy: {
          lazy: true,
          loadPrevNext: true,
          loadPrevNextAmount: 2,
          checkInView: true,
        },
      },
    },
  });
}

if (isInternetExplorer) {
  import('swiper-v4/dist/js/swiper').then((swiperObject) => {
    const Swiper4 = swiperObject.default;

    /* eslint-disable no-unused-vars */
    const teamSlider = new Swiper4('.team__slider', {
      /* eslint-enable no-unused-vars */
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: '.team__next-button',
        prevEl: '.team__back-button',
      },
    });
    /* eslint-disable no-unused-vars */
    const reviewsSlider = new Swiper4('.reviews__slider', {
      /* eslint-enable no-unused-vars */
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      preloadImages: false,
      lazy: {
        lazy: true,
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        checkInView: true,
      },
      navigation: {
        nextEl: '.reviews__next-button',
        prevEl: '.reviews__back-button',
      },
    });
  });
}
