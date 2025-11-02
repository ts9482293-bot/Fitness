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

    const navtoggler = document.querySelector(".navbar-toggle");
    const offcanvas = document.querySelector(".offcanvas-header")

   navtoggler.addEventListener("click", ()=>{
     if(close==true){
        close=false;
        navtoggler.classList.add("open");
        // body.style.overflow = "hidden";
    }
   });
    offcanvas.addEventListener("click", ()=>{
     if(close==true){
        close=false;
        navtoggler.classList.remove("open");
        // body.style.overflow = "hidden";
    }
   });