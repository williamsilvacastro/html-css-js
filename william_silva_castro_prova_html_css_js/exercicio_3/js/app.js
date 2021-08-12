$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoWidth: true,
        nav: true
    });
  });

let menuItens = document.querySelectorAll("nav li")
for(var i=0; i<menuItens.length; i++){
    menuItens[i].textContent="Item nav "+i
}