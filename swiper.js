$(document).ready(function(){
  var _width = $(window).width()

  const loop_auto_center_3_pc={
    loop: true,
    containerModifierClass: 'pc_slide-',
    slidesPerView: 3,
    centeredSlides: true,

    pagination: {
      el: '#banner.swiper .swiper-pagination',
      clickable: true,
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

  const loop_auto_center_3_m={
    loop: true,
    slidesPerView: 1.5,
    pagination: {
      el: '#banner.swiper .swiper-pagination',
      type: "fraction",
    },
  
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  }

  // 스와이퍼 세팅 2가지 설정(모바일, 데스크탑)
  var swiper_mbanner = undefined; //타임설정 하지 않음 / 스와이퍼 실행을 저장할 함수
  if(_width < 768){ 
    if(swiper_mbanner != undefined){ // 이미 이전에 스와이퍼 사용 이력이 있다면
      swiper_mbanner.destroy() // 파괴하고
    }
    swiper_mbanner = new Swiper('#banner.swiper', loop_auto_center_3_m);
  }else{
    if(swiper_mbanner != undefined){
      swiper_mbanner.destroy()
    }
    swiper_mbanner = new Swiper('#banner.swiper', loop_auto_center_3_pc);
  } 


})