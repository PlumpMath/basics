//Hay tres tipos de modelos de eventos. El modelo de eventos básico, el estandar y el de internet explorer. En los eventos hay muchas incompatibilidades.
//Es estandar es el más utilizado

(function(){
    var saludo = function(){
      alert("Saludo");  
    };
    
    var saludo2 = function(){
      console.log("Hola");  
    };
    
    var evento = function(e){
        console.log("Este evento es de tipo: " + e.type);
    }
    //también está la propiedad .target. Nos da la información del objeto sobre el que se está realizando la acción
    
    var boton = document.getElementById("boton");
    var input = document.getElementById("input");
    
    boton.addEventListener("click", saludo);
    input.addEventListener("focus", saludo2); //focus es cuando se clica dentro de un formulario
    //blur es lo contrario, es cuando salimos de un formulario
    //change registra cuando hay un cambio en el formulario, por ejemplo cuando escribimos algo dentro
    
    //Podemos averiguar el tipo de evento que está ejecutando cierta acción
    boton.addEventListener("click", evento);
    
    
    
 }())

