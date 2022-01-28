/* ==================== SWIPER  ====================*/

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

/* ==================== MODAL  ====================*/
const modalWindow = document.querySelector(".modal");
const buttonModal = document.querySelector(".display__button");
const body = document.querySelector("body");

buttonModal.addEventListener("click", () => {
  modalWindow.classList.add("active");
  body.classList.add("lock");
});

modalWindow.addEventListener("click", (e) => {
  const isModal = e.target.closest(".modal__inner");
  if (!isModal) {
    modalWindow.classList.remove("active");
    body.classList.remove("lock");
  }
});
