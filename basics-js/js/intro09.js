//Modificando el estilo de los elementos
var encabezado = document.getElementById("encabezado");
//de esta forma pòdemos añadir la clase tituloGrande, pero hay que poner las dos si queremos mantener la de titulo
encabezado.className = "titulo tituloGrande";

//Con .style podemos acceder a cualquier propiedad de css 
encabezado.style.color = "white";
encabezado.style.background = "#24f3ab";
//Pero añadimos las propiedades al tag (mirar en el inspector de elementos)
//Esta forma se utiliza pero también se utilliza a través de las clases

//Una forma de quitar una clase
encabezado.className = encabezado.className.replace("tituloGrande", " ");

/////////////////////////////////////////////////////
var zoom = function(){
    var thumb = document.getElementById("thumb");
    
    if(thumb.className == "thumb"){
        thumb.className = "thumb grande";
    }else{
        thumb.className = "thumb";
    }   
}