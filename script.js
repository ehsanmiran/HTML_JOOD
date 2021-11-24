var swiper = new Swiper(".mySwiper", {

  // Jonas Engström
  effect: 'coverflow',
  speed: 400,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  coverflowEffect: {
    rotate: -100,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
   navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
 
  
  
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 130,
      coverflowEffect: {
        rotate: -10,
        stretch: 0,
        depth: 80,
      },
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 150,
      coverflowEffect: {
        rotate: -5,
        stretch: -35,
        depth: 120,
      },
      pagination: false,
    },
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






