const buttonPrev = document.querySelector(".swiper-button-prev");
const buttonNext = document.querySelector(".swiper-button-next");

// const swiper = document.querySelector('.swiper').swiper;

const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
      },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// addEventListener
// buttonPrev.addEventListener("click", function () {
//     swiper.slidePrev();
// });

// addEventListener
// buttonNext.addEventListener("click", function () {
//     swiper.slideNext();
// });