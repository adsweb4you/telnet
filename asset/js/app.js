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