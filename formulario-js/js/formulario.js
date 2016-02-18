(function () {
    var formulario = document.formulario_registro,
        elementos = formulario.elements;
    
    //Functions
    var validarInputs = function () {
        for (var i=0; i < elementos.length; i++){
            if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
                if(elementos[i].value == 0){
                    console.log("El campo " + elementos[i].name + " está incompleto")
                    elementos[i].className = elementos[i].className + " error";
                    return false; //Este es un punto de salida de la función
                }else{
                    elementos[i].className = elementos[i].className.replace("error", "");
                }
            }
        }
        
        if(elementos.pass.value != elementos.pass2.value){
            elementos.pass.value = ""; //Si no coinciden reseteamos a cero
            elementos.pass2.value = "";
            elementos.pass.className = elementos.pass.className + " error";
            elementos.pass2.className = elementos.pass2.className + " error";
        }
        //En el ejemplo añade un else, de momento no lo he puesto
        
        return true; //En algún momento hay que retornar true, para el caso en el que se cumpla todo
    };
    
    var validarRadios = function(){
        var opciones = document.getElementsByName("gender"),
            resultado = false;
        
        for (var i=0; i < elementos.length; i++){
            if(elementos[i].type == "radio" ){ 
                //En el ejemplo añade una segunda comprobación: && elementos[i].name == "gender". No sé por qué lo hace en este caso, y de hecho funciona sin ella.
                //En el caso de los radio buton siempre va a haber un sólo elemento checked y el resto unchecked, por lo que no podemos ir compromando como antes que todos están checked.
                //Por ello introducimos ahora otro loop, en este caso para recorrer sólamente los elementos con name "gender"
                
                for(var o = 0; o < opciones.length; o++){
                    if(opciones[o].checked){
                        resultado = true;
                        break; //Con esto rompemos la ejecución de los ciclos. Si el primer radio button está checked, ya no comprueba el siguiente.
                    }
                }
                //Este if tiene que estar dentro del anterior if para que se cumpla también la condición de que estemos trabajando sólo con los elementos de tipo "radio" que a su vez se llaman "gender"
                if(resultado == false){
                    elementos[i].parentElement.className = elementos[i].parentElement.className + " error";
                    console.log("El campo gender está incompleto")
                    return false;
                }else{
                     elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                    return true;
                }
            }    
        }
    };
    
    var validarCheckbox = function(){     
        for (var i=0; i < elementos.length; i++){
            if(elementos[i].type == "checkbox"){
                if(elementos[i].checked){
                    elementos[i].parentNode.className = elementos[i].parentElement.className.replace(" error", "");
                    return true;
                }else{
                    elementos[i].parentNode.className = elementos[i].parentElement.className + " error";
                    return false;
                }
            }
        }      
    };
    
    
    var enviar = function(e){
        //Esta función enviar primero va a comprobar otras funciones y sólo si se cumplen va a enviar el formulario. El parámetro e nos sirve para prevenir de enviar el formulario en caso de que no se cumplan las condiciones.
        if(!validarInputs()){ //Si validarInputs es falso entonces...
            console.log("Faltó validar los input");
            e.preventDefault(); //Para que no se ejecute la acción por defecto
        }else if(!validarRadios()){
            console.log("Faltó validar los radio");
            e.preventDefault();
        }else if(!validarCheckbox()){
            console.log("Faltó validar los checkboxs");
            e.preventDefault();
        }else{
            console.log("Formulario enviado");
            //e.preventDefault();
        }
    };
    
    //Funciones focus y blur
    var focusInput = function(){
        //Con this accedemos al elemento que recibe el focus
        this.parentElement.children[1].className = "label active";
        //El parentElement en este caso va a ser un <dic class="input-group">, los cuales tienen dos hijos: el input [0] y el label [1]. Al label le queremos cambiar class="label" por class="label active", es decir, le añadimos la clase active
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
    };
    
    var blurInput = function(){
        if(this.value <= 0){ //Si el usuario no ha escrito nada (value <= 0)
            //Al dar un clic afuera queremos  quitarle la clase active
            this.parentElement.children[1].className = "label";
            //Además le concatenamos la clase error. Importante el espacio en blanco delante de error
            this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
        }
    };
    
    
    //Eventos
    //1-Enviar el formulario
    //2-Que todos los elementos tengan focus y blur
    
    formulario.addEventListener("submit", enviar); //Si se escucha dentro de formulario el evento submit, se ejecuta la función enviar.
    
    for(var i=0; i < elementos.length; i++){
        if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
            elementos[i].addEventListener("focus", focusInput);
            elementos[i].addEventListener("blur", blurInput);
        }        
    };
    
}())