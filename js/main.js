const swiper = new Swiper(".review__slider", {
  slidesPerView: 3,
  spaceBetween: 70,
  loop: true,
  speed: 900,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      direction: "vertical",
      slidesPerView: 3,
      mousewheel: true,
      loop: true,
      spaceBetween: 110,
    },
    891: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
  },
});
