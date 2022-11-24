window.onload = function(){
  const swiper = new Swiper('#banner.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    // slidesPerGroup: 3,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '#banner.swiper .swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#banner.swiper .swiper-button-next',
      prevEl: '#banner.swiper .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter:	true
    }
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}