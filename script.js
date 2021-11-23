var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 1,
  coverflowEffect: {
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    // when window width is >= 320px
    // 600: {
    //   slidesPerView: 2,
    //   spaceBetween: 10,
    //   coverflowEffect: {
    //     rotate: -40,
    //     stretch: 15,
    //     depth: 400,
    //     modifier: 1,
    //     slideShadows: false,
    //   }
      
    // },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 100,
      coverflowEffect: {
        rotate: -25,
        stretch: 35,
        depth: 100,
        modifier: 0.7,
        slideShadows: false,
      }
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 5,
      spaceBetween: 60,
      coverflowEffect: {
        rotate: -14,
        stretch: -20,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }
      

    }
  }
});

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       false,       // default
  live:         true        // default
}
)
wow.init();