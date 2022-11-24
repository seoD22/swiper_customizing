window.onload = function(){

  const loop_auto_center_3={
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,

    pagination: {
      el: '#banner.swiper .swiper-pagination',
    },
  
    navigation: {
      nextEl: '#banner.swiper .swiper-button-next',
      prevEl: '#banner.swiper .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter:	true
    }
  
  }

  const swiper = new Swiper('#banner.swiper', loop_auto_center_3);
}