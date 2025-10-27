const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  //  autoplay: {
  //       delay: 200,
  //       disableOnInteraction: false,
  //     },
 
});
 var swiper2 = new Swiper(".coaches-swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
     loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });