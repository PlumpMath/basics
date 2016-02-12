//Validación de Formularios

(function(){ //función autoinvocada
    var formulario = document.formulario, //accedemos directamente a través del atributo name, cuyo valor en este caso es "formulario"
        elementos = formulario.elements,
        boton = document.btn;
    
    var checkNombre = function(e){
        if(formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();
            //Si no usamos preventDefault, saltará la alerta si el usuario no ha escrito su nombre, pero aún así el formulario será enviado vacío. De esta manera prevenimos que se envíe si no lo ha rellenado. Para poder usarlo, tenemos que darle un parámetro a la función.
        }
    }
    
    var checkRadio = function(e){
        if(formulario.genero[0].checked == true || formulario.genero[1].checked == true){ 
        }else{
            alert("completa el campo género");
            e.preventDefault();
        }
    }
    
    var checkTerminos = function(e){
        if(formulario.condiciones.checked == true){ 
        }else{
            alert("Acepta las condiciones");
            e.preventDefault();
        }
    }
    
    var validar = function(e){
        checkNombre(e);
        checkRadio(e);
        checkTerminos(e);
    }
    //La función validar es la ejecución de tres funciones diferentes. Esto lo hacemos así por claridad. Ya que es mejor tener una función para cada acción, en vez de una función que haga muchas cosas.
    
    formulario.addEventListener("submit", validar);
    //Añadimos un evento tipo Listener al formulario, de tal forma que cuando se envíe un submit, se ejecute la función validar.
}())