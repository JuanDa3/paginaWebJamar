
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerGroup:1,
    loop: true,
    autoplay: {
      delay: 10000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  var swiper_2 = new Swiper('.swiper-container-2', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup:2,
    pagination: {
      el: '.swiper-pagination-2',
      clickable: true,
    },breakpoints:{
      320:{
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      757:{
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      920:{
        slidesPerView: 3,
        slidesPerGroup: 1,
      }
    }
  });

  var swiper_3 = new Swiper('.swiper-container-3', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    //loopFillGroupWithBlank: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination-3',
      clickable: true,
    },
    breakpoints:{
      320:{
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      757:{
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      920:{
        slidesPerView: 3,
        slidesPerGroup: 1,
      }
    }
  });

