window.addEventListener('scroll', function(e){
   let y = this.scrollY;
   let headerimg =   document.querySelector('header');
   let navbar =   document.querySelector('.navbar');

   headerimg.style.backgroundPosition = `50% ${-(y / 5)}px`;
   
   if (y > 1) {
    navbar.classList.add('scroled')
   }else{
    navbar.classList.remove('scroled')
   }

})

let mobnav = document.querySelector('#mobnav');
let collapse = document.querySelector('.collapse');
mobnav.addEventListener('click', function(e){
   this.classList.toggle('showed');
   collapse.classList.toggle('opened');
})

let navitems = document.querySelectorAll('.nav-item');

navitems.forEach(el=>{
   el.addEventListener('click', function(){
      collapse.classList.remove('opened');
      mobnav.classList.remove('showed');
      
   })
})

 

var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
     640: {
       slidesPerView: 2,
       spaceBetween: 20,
     },
     768: {
       slidesPerView: 4,
       spaceBetween: 40,
     },
     1024: {
       slidesPerView: 5,
       spaceBetween: 50,
     },
   },
 });


 let callnows = document.querySelectorAll('.callnow');
 
 callnows.forEach(call=>{
  call.addEventListener('click', function(e){
  e.preventDefault();
  let nmb = this.getAttribute('data-number');
  
  this.innerHTML = nmb;

 })
})

let scra = document.querySelectorAll('.nav-link');

scra.forEach(alink=>{
  alink.addEventListener('click', function(e){
  e.preventDefault();
  let sel = this.getAttribute('data-scrol');
 
  let offset = document.querySelector(`#${sel}`).offsetTop;
  let navbar =   document.querySelector('.navbar').offsetHeight;
   
  window.scrollTo({
    top: Number(offset) - Number(navbar),
    behavior: "smooth",
  });
})
})


