 let carouselIndex = 1;
 showCarousel(carouselIndex);

 function AddNext (n) {
     showCarousel((carouselIndex += n));
 }
 function showCarousel(n){
     let i;
     let carousel = document.getElementsByClassName("img");
     if (n > carousel.length) {
         carouselIndex = 1;
     }
     if (n < 1) {
         carouselIndex = carousel.length;
     }
     for (i = 0; i < carousel.length; i++) {
         carousel[i].style.display = "none";
     }
     carousel[carouselIndex - 1].style.display = "block"; 
 }