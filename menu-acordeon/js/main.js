$(document).ready(function(){
  // Estamos ejecutando la función que va a contener todo nuestro código una vez
  // que nuestro documento haya sido cargado.
  // Primero queremos prevenir que se ejecute el enlace en los li que tienen un
  // ul dentro
   $(".menu li:has(ul)").click(function(e){
     e.preventDefault();
     if ($(this).hasClass("activado")) {
       $(this).removeClass("activado");
       $(this).children("ul").slideUp();
     } else {
      $(".menu li ul").slideUp();
      //  Con slideUp ocultamos los submenus de todos los ul dentro de un li dentro
      // de menu
      $(".menu li").removeClass("activado");
      // Le quitamos la clase activado a todos los li dentro de menu
      $(this).addClass("activado");
      // Añadimos la clase activado SOLO para el elemento que fue clickeado
      $(this).children("ul").slideDown();
      // Por último mostramos los hijos SOLO del elemento que fue clickeado
     }
   });

   $(".btn-menu").click(function () {
     $(".contenedor-menu .menu").slideToggle();
   });

   $(window).resize(function () {
    //  Si el tamaño de la ventana cambia
     if ($(document).width() > 450) {
      //  Cuando sea mayor a 450
       $(".contenedor-menu .menu").css({"display": "block"})
      //  Obligamos a que el menu se muestre sí o sí
    } else {
     //  Cuando sea menor o igual a 450
      $(".contenedor-menu .menu").css({"display": "none"})
     //  Obligamos a que el menu se oculte
     $(".menu li ul").slideUp();
     $(".menu li").removeClass("activado");
   }
   });

   $(".menu li ul li a").click(function(){
     window.location.href = $(this).attr("href");
   });
});

// (function () {
//   document.getElementById('123').addEventListener("click", function(e){
//       // alert("hola");
//       e.preventDefault();
//   // Importante: No olvidar los paréntesis de preventDefault
//   // Para que preventDefault funcione no hay que olvidar a qué elemento se lo
//   // estamos aplicando. Si se lo aplico a li, no pasa nada, tengo que aplicarlo al
//   // elemento a, que es el ancla que nos conecta con un enlace.
//   // Si uso getElementByClassName en vez de por id no funciona y no tengo ni idea
//   // de por qué.
//   // No sabría como acceder de forma rápida a $(".menu li:has(ul)") con js
//   });
// }())
