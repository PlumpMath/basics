//Esta lista de tareas funciona sólo en el lado del cliente, sin conectarse a una base de datos, por lo tanto no tiene capacidad de almacenar los cambios una vez que el navegador se cierra. 

(function(){
    //Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");
    //Funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);
        
        //Agregamos una comprobación para comprobar que el usuario ha metido algo de texto, antes de definir lo que ocurre si lo ha introducido.
        if(tarea === ""){
            //El operador === implica igual valor e igual tipo
            tareaInput.setAttribute("placeholder", "Tienes que agregar una tarea");
            tareaInput.className = "error";
            return false; //Si se cumple esta condición, aquí tendríamos el punto de salida de la función, indicando false y no se ejecutaría.            
        }
        
        //Añadimos contenido al enlace
        enlace.appendChild(contenido);
        //Añadimos la referencia al enlace
        enlace.setAttribute("href", "#");
        //Añadimos el enlace al elemento li
        nuevaTarea.appendChild(enlace);
        //Añadimos el nuevo elemento li a la lista
        lista.appendChild(nuevaTarea);
        
        //Añadimos un poco de código para que una vez se haya añadido la tarea nueva a la lista, se borre lo que hay dentro del input:
        //He intentado hacerlo así: tarea = ""; pero no funciona porque lo único que hago es reasignar el valor "" a la var tarea, en vez de lo que quiero que es lo de abajo
        tareaInput.value = "";
        
        //Tenemos que obligar a que oiga los eventos de las nuevas tareas. Este ciclo sobre escribe el que viene después, pero no importa. El de después hay que dejarlo para poder borrar los elementos que aparecen al cargar la página.
        for(var i=0; i < lista.children.length; i++){
        lista.children[i].addEventListener("click", borrarTarea);
        }
    };
    
    var comprobarInput = function(){
        tareaInput.className = tareaInput.className.replace("error", "");
    };
        
    var borrarTarea = function(){
        this.parentNode.removeChild(this);
    };
        
    //Eventos
        
    //Agregar tarea al clicar sobre el boton
    btnNuevaTarea.addEventListener("click", agregarTarea);
        //La función definida dentro no lleva paréntesis
    
    //Comprobar Input
    //Hacemos esto para que la clase error no se quede para siempre y se quite cuando clickemos de nuevo en el input
    tareaInput.addEventListener("click", comprobarInput);
    
    //Este ciclo se ejecuta al inicio de la página, pero no oye los nuevos los nuevos elementos que añadimos a la lista
    for(var i=0; i < lista.children.length; i++){
        lista.children[i].addEventListener("click", borrarTarea);
    }
}());